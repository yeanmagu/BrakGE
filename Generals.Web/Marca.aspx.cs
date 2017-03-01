using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.Entities;
using Generals.business.Common;

namespace BrakGeWeb
{
    public partial class Marca : PaginaBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                if (!IsPostBack)
                {
                    //ValidarAutorizacion();
                    Session["Titulo"] = "Tipo de Clientes";
                    FillMarca();
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

     
        private void FillMarca()
        {
            try
            {
                Session["ListMarca"] = BllMarcas.ToList();
                if (!string.IsNullOrEmpty(Session["ListMarca"].ToString()))
                {
                    GridMarca.DataSource = (List<BllMarcas>)Session["ListMarca"];
                    GridMarca.DataBind();
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
                    BllMarcas Row = new BllMarcas();

                    List<BllMarcas> Rows = new List<BllMarcas>();

                    Rows = (List<BllMarcas>)Session["ListMarca"];
                 

                    if (Rows.Exists(b => b.Id.ToString() == e.CommandArgument.ToString()))
                    {
                        Row = Rows.Where(b => b.Id.ToString() == e.CommandArgument.ToString()).First();
                        TxtId.Text = Row.Id.ToString();
                        Descripcion.Text = Row.Descripcion;                       
                        

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
                    bool r = BllMarcas.Delete(int.Parse(e.CommandArgument.ToString()));
                    if (r == true)
                    {
                        FillMarca();
                        Msj1.Text = Constantes.Eliminado;
                        Type1.Text = "success";
                        pnlGrid.Visible = true;
                        pnlDatos.Visible = false;
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
            catch (Exception ex) {
                Msj1.Text = Constantes.ErrorLimpiando;
                Type1.Text = "warning";
                Log.EscribirError(ex); }
        }

        private void GuardarTipo()
        {
            try
            {
                if (BllMarcas.ExisteDescri(Descripcion.Text) == false)
                {
                    BllMarcas ObjGrabar = new BllMarcas();
                    
                    ObjGrabar.Descripcion = Descripcion.Text;
                    ObjGrabar.IdUsuario = int.Parse(Usuario.id_usuario.ToString());
                    ObjGrabar.IdEmpresa = int.Parse(Session["IdEmpresa"].ToString());
                    int r = BllMarcas.Add(ObjGrabar);
                    if (r > 0)
                    {
                        FillMarca();
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
                if (BllMarcas.GetById(int.Parse(TxtId.Text)).Id>0)
                {
                    var obj = BllMarcas.GetById(int.Parse(TxtId.Text));
                    obj.Descripcion = Descripcion.Text;
                    obj.IdUsuario = int.Parse(Usuario.id_usuario.ToString());
                    int r = BllMarcas.Update(obj);
                    if (r > 0)
                    {
                        FillMarca();
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
                Session["ListMarca"] = BllMarcas.ToList(TxtBusqueda.Text.Trim());
                if (!string.IsNullOrEmpty(Session["ListMarca"].ToString()))
                {
                    GridMarca.DataSource = (List<BllMarcas>)Session["ListMarca"];
                    GridMarca.DataBind();
                  

                }
                else
                {
                    FillMarca();
                    
                }
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorAlConsultarDatos;
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }

        protected void GridMarca_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try
            {
                GridMarca.PageIndex = e.NewPageIndex;
                GridMarca.DataSource = (List<BllMarcas>)Session["ListMarca"];
                GridMarca.DataBind();
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