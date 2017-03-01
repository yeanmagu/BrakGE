using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.Entities;
using Generals.business.Common;

namespace BrakGeWeb
{
    public partial class Marcas : PaginaBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                if (!IsPostBack)
                {
                    //ValidarAutorizacion();
                    Session["Titulo"] = "Marcas";
                    FillMarcas();
                    pnlGrid.Visible = true;
                    pnlDatos.Visible = false;
                }
            }
            catch (Exception ex)
            {
                mensaje(Constantes.errorGeneral); Log.EscribirError(ex);
            }
        }
     
        private void FillMarcas()
        {
            try
            {
                Session["ListMarcas"] = BllMarcas.ToList();
                if (!string.IsNullOrEmpty(Session["ListMarcas"].ToString()))
                {
                    GridMarcas.DataSource = (List<BllMarcas>)Session["ListMarcas"];
                    GridMarcas.DataBind();
                }
            }
            catch (Exception ex)
            {
                mensaje(Constantes.ErrorAlCargarGrid);
                Log.EscribirError(ex);
            }
        }
        
        protected void BtnSelect_Command(object sender, CommandEventArgs e)
        {
            try
            {
                if (e.CommandName != "Page")
                {
                    BllMarcas Row = new BllMarcas();

                    List<BllMarcas> Rows = new List<BllMarcas>();

                    Rows = (List<BllMarcas>)Session["ListMarcas"];
                 

                    if (Rows.Exists(b => b.Id.ToString() == e.CommandArgument.ToString()))
                    {
                        Row = Rows.Where(b => b.Id.ToString() == e.CommandArgument.ToString()).First();
                        TxtId.Text = Row.Id.ToString();
                        TxtNombre.Text = Row.Descripcion;   
                        
                       pnlGrid.Visible=false;
                        pnlDatos.Visible=true;

                    }
                }
            }
            catch (Exception ex) { Log.EscribirError(ex);  }
        }

        protected void btneliminarGridView_Command(object sender, CommandEventArgs e)
        {
            try
            {
                if (e.CommandName != "Page")
                {
                    //bool r = BllMarcas.Delete(int.Parse(e.CommandArgument.ToString()));
                    //if (r == true)
                    //{
                    //    FillMarcas();
                    //    Metodos.divMensaje(Constantes.Succes, Constantes.Eliminado, PnlMsg, Constantes.Ok);
                    //}
                }
            }
            catch (Exception ex)
            {

                Log.EscribirError(ex);

            }
        }

        protected void BtnLimpiar_Click(object sender, EventArgs e)
        {
            try { 
                
                CleanControl(this.Controls); TxtId.Enabled = true;
               
            }
            catch (Exception ex) { Log.EscribirError(ex); }
        }

        private void GuardarTipo()
        {
            try
            {
                if (BllMarcas.ExisteDescri(TxtNombre.Text) == false)
                {
                    BllMarcas ObjGrabar = new BllMarcas();
                    
                    ObjGrabar.Descripcion = TxtNombre.Text;
                    ObjGrabar.Fecha = System.DateTime.Now;
                    ObjGrabar.IdUsuario = int.Parse(Usuario.id_usuario.ToString());
                    ObjGrabar.IdEmpresa = int.Parse(Session["IdEmpresa"].ToString());

                    int r = BllMarcas.Add(ObjGrabar);
                    if (r > 0)
                    {
                        FillMarcas();
                        TxtId.Text = r.ToString();
                        Metodos.divMensaje(Constantes.Succes, Constantes.Guardado, PnlMsg, Constantes.Ok);

                    }
                    else
                    {
                        Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlGuardar, PnlMsg, Constantes.Fallo);
                    }
                }
            }
            catch (Exception ex)
            {

                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlGuardar, PnlMsg, Constantes.Fallo);
                Log.EscribirError(ex);
                
            }
        }
        protected void Modificar()
        {
            try
            {
                if (BllMarcas.GetById(int.Parse(TxtId.Text)).Id>0)
                {
                    var obj = BllMarcas.GetById(int.Parse(TxtId.Text));
                    obj.Descripcion = TxtNombre.Text;
                    obj.Fecha = System.DateTime.Now;
                    obj.IdUsuario = int.Parse(Usuario.id_usuario.ToString());
                    obj.IdEmpresa = int.Parse(Session["IdEmpresa"].ToString());
                    int r = BllMarcas.Update(obj);
                    if (r > 0)
                    {
                        FillMarcas();
                        TxtId.Text = r.ToString();
                        Metodos.divMensaje(Constantes.Succes, Constantes.Actualizar, PnlMsg, Constantes.Ok);

                    }
                    else
                    {
                        Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlActualizar, PnlMsg, Constantes.Fallo);
                    }
                }
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlActualizar, PnlMsg, Constantes.Fallo);
            }
        }
        /*Guardar*/
        protected void BtnGuardar_Click(object sender, EventArgs e)
        {
            try
            {
                if (TxtId.Text == "")
                {
                    GuardarTipo();

                }else
                {
                    Modificar();
                }
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }


        /*Modificar*/
    
        protected void TxtBusqueda_TextChanged(object sender, EventArgs e)
        {
            try
            {
                Session["ListMarcas"] = BllMarcas.ToList(TxtBusqueda.Text.Trim());
                if (!string.IsNullOrEmpty(Session["ListMarcas"].ToString()))
                {
                    GridMarcas.DataSource = (List<BllMarcas>)Session["ListMarcas"];
                    GridMarcas.DataBind();
                  

                }
                else
                {
                    FillMarcas();
                    
                }
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }

        protected void GridMarcas_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try
            {
                GridMarcas.PageIndex = e.NewPageIndex;
                GridMarcas.DataSource = (List<BllMarcas>)Session["ListMarcas"];
                GridMarcas.DataBind();
            }
            catch (Exception ex) { Log.EscribirError(ex); Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlCargarGrid, PnlMsg, Constantes.Fallo); }
        }

        protected void Nuevo_Click(object sender, EventArgs e)
        {
            pnlGrid.Visible = false;
            pnlDatos.Visible = true;
        }

        protected void Limpiar_Click(object sender, EventArgs e)
        {
            LimpiarControles();
        }
        protected void LimpiarControles()
        {
            try
            {
                CleanControl(pnlDatos.Controls); TxtId.Enabled = true;
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }
        protected void Cancelar_Click(object sender, EventArgs e)
        {
            pnlGrid.Visible = true;
            pnlDatos.Visible = false;
            LimpiarControles();
        }
        //funcion para guardar la imagen de la empresa




    }
}