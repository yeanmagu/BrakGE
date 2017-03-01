using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.Entities;
using Generals.business.Common;

namespace BrakGeWeb
{
    public partial class FormaPago : PaginaBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                if (!IsPostBack)
                {
                    //ValidarAutorizacion();
                    Session["Titulo"] = "Administración  Forma de Pago";
                 FillFormaPago();
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
        private void FillFormaPago()
        {
            try
            {
                Session["ListFormaPago"] = BllFormaDePago.ToList();
                if (!string.IsNullOrEmpty(Session["ListFormaPago"].ToString()))
                {
                    GridFormaPago.DataSource = (List<BllFormaDePago>)Session["ListFormaPago"];
                    GridFormaPago.DataBind();
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
                    BllFormaDePago Row = new BllFormaDePago();

                    List<BllFormaDePago> Rows = new List<BllFormaDePago>();

                    Rows = (List<BllFormaDePago>)Session["ListFormaPago"];


                    if (Rows.Exists(b => b.Id.ToString() == e.CommandArgument.ToString()))
                    {
                        Row = Rows.Where(b => b.Id.ToString() == e.CommandArgument.ToString()).First();
                        TxtId.Text = Row.Id.ToString();
                        TxtNombre.Text = Row.Descripcion;
                        // ChkEstado.Checked = Row.Estado;
                        DiasCredito.Text = Row.DiasCredito.ToString();
                        PorcentajeCredito.Text = Row.PorcentajeCredito.ToString();
                        PorcentajeDescuento.Text = Row.Descuento.ToString();
                        Explicacion.Text = Row.Explicacion;

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
                    ////   bool r = BllFormaDePago.Delete(int.Parse(e.CommandArgument.ToString()));
                    //   if (r == true)
                    //   {
                    //       FillFormaPago();
                    //       Msj1.Text = Constantes.Eliminado;
                    //       Type1.Text = "success";
                    //       pnlGrid.Visible = true;
                    //       pnlDatos.Visible = false;
                    //   }
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
            try
            {

                CleanControl(this.Controls); TxtId.Enabled = true;

            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorLimpiando;
                Type1.Text = "warning";
                Log.EscribirError(ex);
            }
        }

        private void GuardarTipo()
        {
            try
            {
                if (BllFormaDePago.ExisteDescri(TxtNombre.Text) == false)
                {
                    BllFormaDePago ObjGrabar = new BllFormaDePago();


                    ObjGrabar.Descripcion = TxtNombre.Text;
                    ObjGrabar.Descuento = int.Parse(PorcentajeDescuento.Text);
                    ObjGrabar.DiasCredito = int.Parse(DiasCredito.Text);
                    ObjGrabar.PorcentajeCredito = int.Parse(PorcentajeCredito.Text);
                    ObjGrabar.Explicacion = Explicacion.Text;
                    ObjGrabar.IdUsuario = int.Parse(Usuario.id_usuario.ToString());
                    ObjGrabar.Id_Empresa = int.Parse(Session["IdEmpresa"].ToString());


                    //   ObjGrabar.Estado = Estado.Checked;

                    int r = BllFormaDePago.Add(ObjGrabar);
                    if (r > 0)
                    {
                        FillFormaPago();
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
                if (BllFormaDePago.GetById(int.Parse(TxtId.Text)).Id > 0)
                {
                    var ObjGrabar = BllFormaDePago.GetById(int.Parse(TxtId.Text));
                    ObjGrabar.Descripcion = TxtNombre.Text;
                    ObjGrabar.Descuento = int.Parse(PorcentajeDescuento.Text);
                    ObjGrabar.DiasCredito = int.Parse(DiasCredito.Text);
                    ObjGrabar.PorcentajeCredito = int.Parse(PorcentajeDescuento.Text);
                    ObjGrabar.Explicacion = Explicacion.Text;
                    ObjGrabar.IdUsuario = int.Parse(Usuario.id_usuario.ToString());
                   

                    int r = BllFormaDePago.Update(ObjGrabar);
                    if (r > 0)
                    {
                        FillFormaPago();
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

                }
                else
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
                Session["ListFormaPago"] = BllFormaDePago.ToList(TxtBusqueda.Text.Trim());
                if (!string.IsNullOrEmpty(Session["ListFormaPago"].ToString()))
                {
                    GridFormaPago.DataSource = (List<BllFormaDePago>)Session["ListFormaPago"];
                    GridFormaPago.DataBind();


                }
                else
                {
                    FillFormaPago();

                }
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorAlConsultarDatos;
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }

        protected void GridFormaPago_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try
            {
                GridFormaPago.PageIndex = e.NewPageIndex;
                GridFormaPago.DataSource = (List<BllFormaDePago>)Session["ListFormaPago"];
                GridFormaPago.DataBind();
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

        protected void Departamento_SelectedIndexChanged(object sender, EventArgs e)
        {
            try
            {

            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorAlCargarCombos;
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }
    }
}