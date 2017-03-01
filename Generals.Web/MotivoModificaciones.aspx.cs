using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.Entities;
using Generals.business.Common;

namespace BrakGeWeb
{
    public partial class MotivoModificaciones : PaginaBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                if (!IsPostBack)
                {
                    //ValidarAutorizacion();
                    Session["Titulo"] = "Motivo Modificaciones";
                    FillMotivoModificaciones();
                    pnlGrid.Visible = true;
                    pnlDatos.Visible = false;
                }
            }
            catch (Exception ex)
            {
                mensaje(Constantes.errorGeneral); Log.EscribirError(ex);
            }
        }

     
        private void FillMotivoModificaciones()
        {
            try
            {
                Session["ListMotivoModificaciones"] = BllMotivoModificaciones.ToList();
                if (!string.IsNullOrEmpty(Session["ListMotivoModificaciones"].ToString()))
                {
                    GridMotivoModificaciones.DataSource = (List<BllMotivoModificaciones>)Session["ListMotivoModificaciones"];
                    GridMotivoModificaciones.DataBind();
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
                    BllMotivoModificaciones Row = new BllMotivoModificaciones();

                    List<BllMotivoModificaciones> Rows = new List<BllMotivoModificaciones>();

                    Rows = (List<BllMotivoModificaciones>)Session["ListMotivoModificaciones"];
                 

                    if (Rows.Exists(b => b.Id.ToString() == e.CommandArgument.ToString()))
                    {
                        Row = Rows.Where(b => b.Id.ToString() == e.CommandArgument.ToString()).First();
                        TxtId.Text = Row.Id.ToString();
                        TxtId.Text = Row.Descripcion;                       
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
                    bool r = BllMotivoModificaciones.Delete(int.Parse(e.CommandArgument.ToString()));
                    if (r == true)
                    {
                        FillMotivoModificaciones();
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
                if (BllMotivoModificaciones.ExisteDescri(TxtNombre.Text) == false)
                {
                    BllMotivoModificaciones ObjGrabar = new BllMotivoModificaciones();
                    
                    ObjGrabar.Descripcion = TxtNombre.Text;
                    ObjGrabar.Estado = ChkEstado.Checked;

                    int r = BllMotivoModificaciones.Add(ObjGrabar);
                    if (r > 0)
                    {
                        FillMotivoModificaciones();
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
                if (BllMotivoModificaciones.GetById(int.Parse(TxtId.Text)).Id>0)
                {
                    var obj = BllMotivoModificaciones.GetById(int.Parse(TxtId.Text));
                    obj.Descripcion = TxtNombre.Text;
                    obj.Estado = ChkEstado.Checked;

                    int r = BllMotivoModificaciones.Update(obj);
                    if (r > 0)
                    {
                        FillMotivoModificaciones();
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
                if (TxtId.Text != "")
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
                Session["ListMotivoModificaciones"] = BllMotivoModificaciones.ToList(TxtBusqueda.Text.Trim());
                if (!string.IsNullOrEmpty(Session["ListMotivoModificaciones"].ToString()))
                {
                    GridMotivoModificaciones.DataSource = (List<BllMotivoModificaciones>)Session["ListMotivoModificaciones"];
                    GridMotivoModificaciones.DataBind();
                  

                }
                else
                {
                    FillMotivoModificaciones();
                    
                }
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }

        protected void GridMotivoModificaciones_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try
            {
                GridMotivoModificaciones.PageIndex = e.NewPageIndex;
                GridMotivoModificaciones.DataSource = (List<BllMotivoModificaciones>)Session["ListMotivoModificaciones"];
                GridMotivoModificaciones.DataBind();
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