using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.Entities;
using Generals.business.Common;

namespace BrakGeWeb
{
    public partial class TipoMovimiento : PaginaBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                if (!IsPostBack)
                {
                    //ValidarAutorizacion();
                    Session["Titulo"] = "Administración de  Tipos de Movimiento";
                    FillBdegas();
                    FillSw();
                    FillTipoMovimiento();
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
        protected void FillBdegas()
        {
            try
            {
                CmbBodega.DataSource = BllBodega.ToList();
                CmbBodega.DataTextField = "Nombre";
                CmbBodega.DataValueField = "Id";
                CmbBodega.DataBind();
                CmbBodega.Items.Insert(0, new ListItem("Seleccione Bodega", "0"));
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);

            }
        }
        protected void FillSw()
        {
            try
            {
                CmbSw.DataSource = BllSw.ToList();
                CmbSw.DataTextField = "Descripcion";
                CmbSw.DataValueField = "Id";
                CmbSw.DataBind();
                CmbSw.Items.Insert(0, new ListItem("Seleccione Sw", "0"));
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);

            }
        }
        private void FillTipoMovimiento()
        {
            try
            {
                Session["ListTipoMovimiento"] = BllTipoMovimiento.ToList();
                if (!string.IsNullOrEmpty(Session["ListTipoMovimiento"].ToString()))
                {
                    GridTipoMovimiento.DataSource = (List<BllTipoMovimiento>)Session["ListTipoMovimiento"];
                    GridTipoMovimiento.DataBind();
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
                    BllTipoMovimiento Row = new BllTipoMovimiento();

                    List<BllTipoMovimiento> Rows = new List<BllTipoMovimiento>();

                    Rows = (List<BllTipoMovimiento>)Session["ListTipoMovimiento"];


                    if (Rows.Exists(b => b.Id.ToString() == e.CommandArgument.ToString()))
                    {
                        Row = Rows.Where(b => b.Id.ToString() == e.CommandArgument.ToString()).First();
                        TxtId.Text = Row.Id.ToString();
                        TxtNombre.Text = Row.Descripcion;
                        // ChkEstado.Checked = Row.Estado;
                        CmbBodega.SelectedValue = Row.IdBodega.ToString();
                        CmbSw.SelectedValue = Row.IdSw.ToString();
                        Notas.Text = Row.Notas;

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
                       bool r = BllTipoMovimiento.Delete(int.Parse(e.CommandArgument.ToString()));
                    if (r == true)
                    {
                        FillTipoMovimiento();
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
                if (BllTipoMovimiento.ExisteDescri(TxtNombre.Text) == false)
                {
                    BllTipoMovimiento ObjGrabar = new BllTipoMovimiento();


                    ObjGrabar.Descripcion = TxtNombre.Text;
                    ObjGrabar.ExcentoDeIva = ExcentoDeIva.Checked;
                    ObjGrabar.IdBodega = int.Parse(CmbBodega.SelectedValue);
                    ObjGrabar.IdSw = int.Parse(CmbSw.SelectedValue);
                    ObjGrabar.Notas = Notas.Text;
                    ObjGrabar.IdUsuario = int.Parse(Usuario.id_usuario.ToString());
                    ObjGrabar.FechaCreacion = DateTime.Now;


                    //   ObjGrabar.Estado = Estado.Checked;

                    int r = BllTipoMovimiento.Add(ObjGrabar);
                    if (r > 0)
                    {
                        FillTipoMovimiento();
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
                else
                {
                    Msj1.Text = Constantes.Existe;
                    Type1.Text = "error";
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
                if (BllTipoMovimiento.GetById(int.Parse(TxtId.Text)).Id > 0)
                {
                    var ObjGrabar = BllTipoMovimiento.GetById(int.Parse(TxtId.Text));
                    ObjGrabar.Descripcion = TxtNombre.Text;
                    ObjGrabar.ExcentoDeIva = ExcentoDeIva.Checked;
                    ObjGrabar.IdBodega = int.Parse(CmbBodega.SelectedValue);
                    ObjGrabar.IdSw = int.Parse(CmbSw.SelectedValue);
                    ObjGrabar.Notas = Notas.Text;
                    ObjGrabar.IdUsuario = int.Parse(Usuario.id_usuario.ToString());
                    ObjGrabar.FechaCreacion = DateTime.Now;

                    int r = BllTipoMovimiento.Update(ObjGrabar);
                    if (r > 0)
                    {
                        FillTipoMovimiento();
                        TxtId.Text = r.ToString();
                        Msj1.Text = Constantes.Actualizar;
                        Type1.Text = "success";

                        pnlGrid.Visible = true;
                        pnlDatos.Visible = false;
                        LimpiarControles(pnlDatos.Controls);
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
                Session["ListTipoMovimiento"] = BllTipoMovimiento.ToList(TxtBusqueda.Text.Trim());
                if (!string.IsNullOrEmpty(Session["ListTipoMovimiento"].ToString()))
                {
                    GridTipoMovimiento.DataSource = (List<BllTipoMovimiento>)Session["ListTipoMovimiento"];
                    GridTipoMovimiento.DataBind();


                }
                else
                {
                    FillTipoMovimiento();

                }
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorAlConsultarDatos;
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }

        protected void GridTipoMovimiento_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try
            {
                GridTipoMovimiento.PageIndex = e.NewPageIndex;
                GridTipoMovimiento.DataSource = (List<BllTipoMovimiento>)Session["ListTipoMovimiento"];
                GridTipoMovimiento.DataBind();
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