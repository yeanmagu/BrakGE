using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.Entities;
using Generals.business.Common;

namespace BrakGeWeb
{
    public partial class Dpto : PaginaBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                if (!IsPostBack)
                {
                    //ValidarAutorizacion();
                    Session["Titulo"] = "Departamentos";
                    FillDpto();
                    pnlGrid.Visible = true;
                    pnlDatos.Visible = false;
                }
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.errorGeneral;
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }

     
        private void FillDpto()
        {
            try
            {
                Session["ListDpto"] = BllDpto.ToList();
                if (!string.IsNullOrEmpty(Session["ListDpto"].ToString()))
                {
                    GridDpto.DataSource = (List<BllDpto>)Session["ListDpto"];
                    GridDpto.DataBind();
                }
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.errorGeneral;
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }
        
        protected void BtnSelect_Command(object sender, CommandEventArgs e)
        {
            try
            {
                if (e.CommandName != "Page")
                {
                    BllDpto Row = new BllDpto();

                    List<BllDpto> Rows = new List<BllDpto>();

                    Rows = (List<BllDpto>)Session["ListDpto"];
                 

                    if (Rows.Exists(b => b.Id.ToString() == e.CommandArgument.ToString()))
                    {
                        Row = Rows.Where(b => b.Id.ToString() == e.CommandArgument.ToString()).First();
                        TxtId.Text = Row.Id.ToString();
                        TxtNombre.Text = Row.Nombre;                       
                        Estado.Checked = Row.Estado;

                        pnlGrid.Visible = false;
                        pnlDatos.Visible = true;

                    }
                }
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Msj1.Text = Constantes.ErrorAlConsultarDatos;
                Type1.Text = "warning";
            }
        }

        protected void btneliminarGridView_Command(object sender, CommandEventArgs e)
        {
            try
            {
                if (e.CommandName != "Page")
                {
                    //bool r = BllDpto.Delete(int.Parse(e.CommandArgument.ToString()));
                    //if (r == true)
                    //{
                    //    FillDpto();
                    //    Msj1.Text = Constantes.Eliminado;
                    //    Type1.Text = "success";
                    //    pnlGrid.Visible = true;
                    //    pnlDatos.Visible = false;
                    //}
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
            catch (Exception ex) {
                Msj1.Text = Constantes.ErrorLimpiando;
                Type1.Text = "warning";
                Log.EscribirError(ex); }
        }

        private void GuardarTipo()
        {
            try
            {
                if (BllDpto.ExisteDescri(TxtNombre.Text) == false)
                {
                    BllDpto ObjGrabar = new BllDpto();
                    
                    ObjGrabar.Nombre = TxtNombre.Text;
                    ObjGrabar.Estado = Estado.Checked;
                    ObjGrabar.IdPais = 1;
                    int r = BllDpto.Add(ObjGrabar);
                    if (r > 0)
                    {
                        FillDpto();
                        TxtId.Text = r.ToString();
                        Msj1.Text = Constantes.Guardado;
                        Type1.Text = "success";
                      
                        LimpiarControles(pnlDatos.Controls);
                        pnlGrid.Visible = true;
                        pnlDatos.Visible = false;

                    }
                    else
                    {
                        Msj1.Text = Constantes.ErrorAlGuardar;
                        Type1.Text = "error";
                       
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
                if (BllDpto.GetById(int.Parse(TxtId.Text)).Id>0)
                {
                    var obj = BllDpto.GetById(int.Parse(TxtId.Text));
                    obj.Nombre = TxtNombre.Text;
                    obj.Estado = Estado.Checked;

                    int r = BllDpto.Update(obj);
                    if (r > 0)
                    {
                        FillDpto();
                        TxtId.Text = r.ToString();
                        Msj1.Text = Constantes.Actualizar;
                        Type1.Text = "success";
                       
                        pnlGrid.Visible = true;
                        pnlDatos.Visible = false;
                    }
                    else
                    {
                        Msj1.Text = Constantes.ErrorAlActualizar;
                        Type1.Text = "error";
                        ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "displayToastr('" + Constantes.ErrorAlCargarGrid + "','" + "error');", true);
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
                Log.EscribirError(ex);
            }
        }


        /*Modificar*/
    
        protected void TxtBusqueda_TextChanged(object sender, EventArgs e)
        {
            try
            {
                Session["ListDpto"] = BllDpto.ToList(TxtBusqueda.Text.Trim());
                if (!string.IsNullOrEmpty(Session["ListDpto"].ToString()))
                {
                    GridDpto.DataSource = (List<BllDpto>)Session["ListDpto"];
                    GridDpto.DataBind();
                  

                }
                else
                {
                    FillDpto();
                    
                }
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorAlConsultarDatos;
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }

        protected void GridDpto_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try
            {
                GridDpto.PageIndex = e.NewPageIndex;
                GridDpto.DataSource = (List<BllDpto>)Session["ListDpto"];
                GridDpto.DataBind();
            }
            catch (Exception ex) { Log.EscribirError(ex); ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "displayToastr('" + Constantes.ErrorAlCargarGrid + "','" + "error');", true); }
        }

        protected void Nuevo_Click(object sender, EventArgs e)
        {
            pnlGrid.Visible = false;
            pnlDatos.Visible = true;
        }

        protected void Limpiar_Click(object sender, EventArgs e)
        {
            LimpiarControles(pnlDatos.Controls);
        }
        protected void LimpiarControles(ControlCollection controles)
        {
            try
            {
                CleanControl(controles); TxtId.Enabled = true;
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorLimpiando;
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }
        protected void Cancelar_Click(object sender, EventArgs e)
        {
            pnlGrid.Visible = true;
            pnlDatos.Visible = false;
            LimpiarControles(pnlDatos.Controls);
        }

        protected void Cerrar_ServerClick(object sender, EventArgs e)
        {
            Response.Redirect("Default.aspx");
        }

        //funcion para guardar la imagen de la empresa




    }
}