using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.Entities;
using Generals.business.Common;

namespace BrakGeWeb
{
    public partial class TipoMontaje : PaginaBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                if (!IsPostBack)
                {
                    //ValidarAutorizacion();
                    Session["Titulo"] = "Tipo Montaje";
                    FillTipoMontaje();
                    pnlGrid.Visible = true;
                    pnlDatos.Visible = false;
                }
            }
            catch (Exception ex)
            {
                mensaje(Constantes.errorGeneral); Log.EscribirError(ex);
            }
        }

     
        private void FillTipoMontaje()
        {
            try
            {
                Session["ListMontaje"] = BllTipoMontaje.ToList();
                if (!string.IsNullOrEmpty(Session["ListMontaje"].ToString()))
                {
                    GridTipoMontaje.DataSource = (List<BllTipoMontaje>)Session["ListMontaje"];
                    GridTipoMontaje.DataBind();
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
                    BllTipoMontaje Row = new BllTipoMontaje();

                    List<BllTipoMontaje> Rows = new List<BllTipoMontaje>();

                    Rows = (List<BllTipoMontaje>)Session["ListMontaje"];
                 

                    if (Rows.Exists(b => b.Id.ToString() == e.CommandArgument.ToString()))
                    {
                        Row = Rows.Where(b => b.Id.ToString() == e.CommandArgument.ToString()).First();
                        TxtId.Text = Row.Id.ToString();
                        TxtNombre.Text = Row.Descripcion;                       
                        ChkEstado.Checked = Row.Estado;

                        pnlGrid.Visible = false;
                        pnlDatos.Visible = true;

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
                    bool r = BllTipoMontaje.Delete(int.Parse(e.CommandArgument.ToString()));
                    if (r == true)
                    {
                        FillTipoMontaje();
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
                if (BllTipoMontaje.ExisteDescri(TxtNombre.Text) == false)
                {
                    BllTipoMontaje ObjGrabar = new BllTipoMontaje();
                    
                    ObjGrabar.Descripcion = TxtNombre.Text;
                    ObjGrabar.Estado = ChkEstado.Checked;

                    int r = BllTipoMontaje.Add(ObjGrabar);
                    if (r > 0)
                    {
                        FillTipoMontaje();
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

                Log.EscribirError(ex);
            }
        }
        protected void Modificar()
        {
            try
            {
                if (BllTipoMontaje.GetById(int.Parse(TxtId.Text)).Id>0)
                {
                    var obj = BllTipoMontaje.GetById(int.Parse(TxtId.Text));
                    obj.Descripcion = TxtNombre.Text;
                    obj.Estado = ChkEstado.Checked;

                    int r = BllTipoMontaje.Update(obj);
                    if (r > 0)
                    {
                        FillTipoMontaje();
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
                Session["ListMontaje"] = BllTipoMontaje.ToList(TxtBusqueda.Text.Trim());
                if (!string.IsNullOrEmpty(Session["ListMontaje"].ToString()))
                {
                    GridTipoMontaje.DataSource = (List<BllTipoMontaje>)Session["ListMontaje"];
                    GridTipoMontaje.DataBind();
                  

                }
                else
                {
                    FillTipoMontaje();
                    
                }
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }

        protected void GridTipoMontaje_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try
            {
                GridTipoMontaje.PageIndex = e.NewPageIndex;
                GridTipoMontaje.DataSource = (List<BllTipoMontaje>)Session["ListMontaje"];
                GridTipoMontaje.DataBind();
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