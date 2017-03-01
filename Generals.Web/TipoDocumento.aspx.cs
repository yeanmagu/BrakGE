using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.Entities;
using Generals.business.Common;

namespace BrakGeWeb
{
    public partial class TipoDocumento : PaginaBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                if (!IsPostBack)
                {
                    //ValidarAutorizacion();
                    Session["Titulo"] = "Tipo Documento";
                    FillTipoDocumento();
                    pnlGrid.Visible = true;
                    pnlDatos.Visible = false;
                }
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Msj1.Text = Constantes.errorGeneral;
                Type1.Text = "error";
            }
        }

     
        private void FillTipoDocumento()
        {
            try
            {
                Session["ListTipoDoc"] = BllTipoDocumento.ToList();
                if (!string.IsNullOrEmpty(Session["ListTipoDoc"].ToString()))
                {
                    GridTipoDocumento.DataSource = (List<BllTipoDocumento>)Session["ListTipoDoc"];
                    GridTipoDocumento.DataBind();
                }
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorAlCargarGrid;
                Type1.Text = "warning";
                Log.EscribirError(ex);
            }
        }
        
        protected void BtnSelect_Command(object sender, CommandEventArgs e)
        {
            try
            {
                if (e.CommandName != "Page")
                {
                    BllTipoDocumento Row = new BllTipoDocumento();

                    List<BllTipoDocumento> Rows = new List<BllTipoDocumento>();

                    Rows = (List<BllTipoDocumento>)Session["ListTipoDoc"];
                 

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
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Msj1.Text = Constantes.ErrorAlConsultarDatos;
                Type1.Text = "error";
            }
        }

        protected void btneliminarGridView_Command(object sender, CommandEventArgs e)
        {
            try
            {
                if (e.CommandName != "Page")
                {
                    bool r = BllTipoDocumento.Delete(int.Parse(e.CommandArgument.ToString()));
                    if (r == true)
                    {
                        FillTipoDocumento();
                        Msj1.Text = Constantes.Eliminado;
                        Type1.Text = "success";
                       // Metodos.divMensaje(Constantes.Succes, Constantes.Eliminado, PnlMsg, Constantes.Ok);
                    }
                }
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorEliminando;
                Type1.Text = "error";

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
                if (BllTipoDocumento.ExisteDescri(TxtNombre.Text) == false)
                {
                    BllTipoDocumento ObjGrabar = new BllTipoDocumento();
                    
                    ObjGrabar.Descripcion = TxtNombre.Text;
                    ObjGrabar.Estado = ChkEstado.Checked;

                    int r = BllTipoDocumento.Add(ObjGrabar);
                    if (r > 0)
                    {
                        FillTipoDocumento();
                        TxtId.Text = r.ToString();
                        Msj1.Text = Constantes.Guardado;
                        Type1.Text = "success";
                        //Metodos.divMensaje(Constantes.Succes, Constantes.Guardado, PnlMsg, Constantes.Ok);

                    }
                    else
                    {
                        Msj1.Text = Constantes.ErrorAlGuardar;
                        Type1.Text = "error";
                       // Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlGuardar, PnlMsg, Constantes.Fallo);
                    }
                }
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorAlGuardar;
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }
        protected void Modificar()
        {
            try
            {
                if (BllTipoDocumento.GetById(int.Parse(TxtId.Text)).Id>0)
                {
                    var obj = BllTipoDocumento.GetById(int.Parse(TxtId.Text));
                    obj.Descripcion = TxtNombre.Text;
                    obj.Estado = ChkEstado.Checked;

                    int r = BllTipoDocumento.Update(obj);
                    if (r > 0)
                    {
                        FillTipoDocumento();
                        TxtId.Text = r.ToString();
                        Msj1.Text = Constantes.Actualizar;
                        Type1.Text = "success";
                       // Metodos.divMensaje(Constantes.Succes, Constantes.Actualizar, PnlMsg, Constantes.Ok);

                    }
                    else
                    {
                        Msj1.Text = Constantes.ErrorAlActualizar;
                        Type1.Text = "error";
                        // Metodos.divMensaje(Constantes.Danger, Constantes.ErrorAlActualizar, PnlMsg, Constantes.Fallo);
                    }
                }
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorAlActualizar;
                Type1.Text = "error";
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
                Msj1.Text = Constantes.ErrorAlGuardar;
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }


        /*Modificar*/
    
        protected void TxtBusqueda_TextChanged(object sender, EventArgs e)
        {
            try
            {
                Session["ListTipoDoc"] = BllTipoDocumento.ToList(TxtBusqueda.Text.Trim());
                if (!string.IsNullOrEmpty(Session["ListTipoDoc"].ToString()))
                {
                    GridTipoDocumento.DataSource = (List<BllTipoDocumento>)Session["ListTipoDoc"];
                    GridTipoDocumento.DataBind();
                  

                }
                else
                {
                    FillTipoDocumento();
                    
                }
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorAlConsultarDatos;
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }

        protected void GridTipoDocumento_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try
            {
                GridTipoDocumento.PageIndex = e.NewPageIndex;
                GridTipoDocumento.DataSource = (List<BllTipoDocumento>)Session["ListTipoDoc"];
                GridTipoDocumento.DataBind();
            }
            catch (Exception ex) { Log.EscribirError(ex); Msj1.Text = Constantes.ErrorAlCargarGrid;
                Type1.Text = "error";
            }
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

        protected void Cerrar_ServerClick(object sender, EventArgs e)
        {
            Response.Redirect("Default.aspx");
        }


    }
}