using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.Entities;
using Generals.business.Common;

namespace BrakGeWeb
{
    public partial class Sw : PaginaBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                if (!IsPostBack)
                {
                    //ValidarAutorizacion();
                    Session["Titulo"] = "Sw ";
                    FillSw();
                    pnlGrid.Visible = true;
                    pnlDatos.Visible = false;
                }
            }
            catch (Exception ex)
            {
                mensaje(Constantes.errorGeneral); Log.EscribirError(ex);
            }
        }

     
        private void FillSw()
        {
            try
            {
                Session["ListSw"] = BllSw.ToList();
                if (!string.IsNullOrEmpty(Session["ListSw"].ToString()))
                {
                    GridSw.DataSource = (List<BllSw>)Session["ListSw"];
                    GridSw.DataBind();
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
                    BllSw Row = new BllSw();

                    List<BllSw> Rows = new List<BllSw>();

                    Rows = (List<BllSw>)Session["ListSw"];
                 

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
                    bool r = BllSw.Delete(int.Parse(e.CommandArgument.ToString()));
                    if (r == true)
                    {
                        FillSw();
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
                if (BllSw.ExisteDescri(TxtNombre.Text) == false)
                {
                    BllSw ObjGrabar = new BllSw();
                    
                    ObjGrabar.Descripcion = TxtNombre.Text;
                    ObjGrabar.Estado = ChkEstado.Checked;

                    int r = BllSw.Add(ObjGrabar);
                    if (r > 0)
                    {
                        FillSw();
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
                if (BllSw.GetById(int.Parse(TxtId.Text)).Id>0)
                {

                    var obj = BllSw.GetById(int.Parse(TxtId.Text));
                    obj.Descripcion = TxtNombre.Text;
                    obj.Estado = ChkEstado.Checked;

                    int r = BllSw.Update(obj);
                    if (r > 0)
                    {
                        FillSw();
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
                Session["ListSw"] = BllSw.ToList(TxtBusqueda.Text.Trim());
                if (!string.IsNullOrEmpty(Session["ListSw"].ToString()))
                {
                    GridSw.DataSource = (List<BllSw>)Session["ListSw"];
                    GridSw.DataBind();
                  

                }
                else
                {
                    FillSw();
                    
                }
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }

        protected void GridSw_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try
            {
                GridSw.PageIndex = e.NewPageIndex;
                GridSw.DataSource = (List<BllSw>)Session["ListSw"];
                GridSw.DataBind();
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