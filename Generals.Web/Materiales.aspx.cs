using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.Entities;
using Generals.business.Common;

namespace BrakGeWeb
{
    public partial class Materiales : PaginaBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                if (!IsPostBack)
                {
                    //ValidarAutorizacion();
                    Session["Titulo"] = "Materiales";
                    FillMateriales();
                    pnlGrid.Visible = true;
                    pnlDatos.Visible = false;
                }
            }
            catch (Exception ex)
            {
                mensaje(Constantes.errorGeneral); Log.EscribirError(ex);
            }
        }
     
        private void FillMateriales()
        {
            try
            {
                Session["ListMateriales"] = BllMateriales.ToList();
                if (!string.IsNullOrEmpty(Session["ListMateriales"].ToString()))
                {
                    GridMateriales.DataSource = (List<BllMateriales>)Session["ListMateriales"];
                    GridMateriales.DataBind();
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
                    BllMateriales Row = new BllMateriales();

                    List<BllMateriales> Rows = new List<BllMateriales>();

                    Rows = (List<BllMateriales>)Session["ListMateriales"];
                 

                    if (Rows.Exists(b => b.Id.ToString() == e.CommandArgument.ToString()))
                    {
                        Row = Rows.Where(b => b.Id.ToString() == e.CommandArgument.ToString()).First();
                        TxtId.Text = Row.Id.ToString();
                        TxtNombre.Text = Row.Descripcion;                       
                        ChkEstado.Checked = Row.Estado;
                        
                       

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
                    bool r = BllMateriales.Delete(int.Parse(e.CommandArgument.ToString()));
                    if (r == true)
                    {
                        FillMateriales();
                        Metodos.divMensaje(Constantes.Succes, Constantes.Eliminado, PnlMsg, Constantes.Ok);
                    }
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
                if (BllMateriales.ExisteDescri(TxtNombre.Text) == false)
                {
                    BllMateriales ObjGrabar = new BllMateriales();
                    
                    ObjGrabar.Descripcion = TxtNombre.Text;
                    ObjGrabar.Estado = ChkEstado.Checked;

                    int r = BllMateriales.Add(ObjGrabar);
                    if (r > 0)
                    {
                        FillMateriales();
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
                if (BllMateriales.GetById(int.Parse(TxtId.Text)).Id>0)
                {
                    var obj = BllMateriales.GetById(int.Parse(TxtId.Text));
                    obj.Descripcion = TxtNombre.Text;
                    obj.Estado = ChkEstado.Checked;

                    int r = BllMateriales.Update(obj);
                    if (r > 0)
                    {
                        FillMateriales();
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
                Session["ListMateriales"] = BllMateriales.ToList(TxtBusqueda.Text.Trim());
                if (!string.IsNullOrEmpty(Session["ListMateriales"].ToString()))
                {
                    GridMateriales.DataSource = (List<BllMateriales>)Session["ListMateriales"];
                    GridMateriales.DataBind();
                  

                }
                else
                {
                    FillMateriales();
                    
                }
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }

        protected void GridMateriales_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try
            {
                GridMateriales.PageIndex = e.NewPageIndex;
                GridMateriales.DataSource = (List<BllMateriales>)Session["ListMateriales"];
                GridMateriales.DataBind();
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
                CleanControl(this.Controls); TxtId.Enabled = true;
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