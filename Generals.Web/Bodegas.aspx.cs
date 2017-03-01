using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.Entities;
using Generals.business.Common;

namespace BrakGeWeb
{
    public partial class Bodegas : PaginaBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                if (!IsPostBack)
                {
                    //ValidarAutorizacion();
                    Session["Titulo"] = "Administración de  Bodegas";
                    FillBodega();
                    FillCiudad(0);
                    FillDepartamento();
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
        private void FillDepartamento()
        {
            try
            {
                Departamento.DataSource = BllDpto.ToList();
                Departamento.DataTextField = "Nombre";
                Departamento.DataValueField = "Id";
                Departamento.DataBind();
                Departamento.Items.Insert(0, new ListItem("Seleccione Departamento", "0"));
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorAlCargarCombos + " Tipo Documento";
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }
        private void FillCiudad(int IdDpto)
        {
            try
            {
                if (IdDpto == 0)
                {
                    Ciudad.DataSource = BllMunicipio.ToList();
                }
                else
                {
                    Ciudad.DataSource = BllMunicipio.ToListByDpto(IdDpto);
                }

                Ciudad.DataTextField = "Nombre";
                Ciudad.DataValueField = "Id";
                Ciudad.DataBind();
                Departamento.Items.Insert(0, new ListItem("Seleccione Ciudad", "0"));
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorAlCargarCombos + " Tipo Persona";
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }
        private void FillBodega()
        {
            try
            {
                Session["ListBodega"] = BllBodega.ToList();
                if (!string.IsNullOrEmpty(Session["ListBodega"].ToString()))
                {
                    GridBodega.DataSource = (List<BllBodega>)Session["ListBodega"];
                    GridBodega.DataBind();
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
                    BllBodega Row = new BllBodega();

                    List<BllBodega> Rows = new List<BllBodega>();

                    Rows = (List<BllBodega>)Session["ListBodega"];


                    if (Rows.Exists(b => b.ID.ToString() == e.CommandArgument.ToString()))
                    {
                        Row = Rows.Where(b => b.ID.ToString() == e.CommandArgument.ToString()).First();
                        TxtId.Text = Row.ID.ToString();
                        Nombre.Text = Row.Nombre;
                        Descripcion.Text = Row.Descripcion;
                        Direccion.Text = Row.Direccion;
                        Nombre.Text = Row.Nombre;
                        Telefono.Text = Row.Telefono;
                        Publicidad.Text = Row.Publicidad;
                       
                        Ciudad.SelectedValue = Row.IdMunicipio.ToString();
                        Nota.Text = Row.Notas;
                       
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
                    bool r = BllBodega.Delete(int.Parse(e.CommandArgument.ToString()));
                    if (r == true)
                    {
                        FillBodega();
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
                if (BllBodega.ExisteDescri(Nombre.Text) == false)
                {
                    BllBodega ObjGrabar = new BllBodega();
                 
                   
                    ObjGrabar.IdEmpresa =int.Parse(Session["IdEmpresa"].ToString());
                    ObjGrabar.Nombre = Nombre.Text;
                    ObjGrabar.Descripcion = Descripcion.Text;
                    ObjGrabar.Direccion = Direccion.Text;
                    ObjGrabar.Telefono = Telefono.Text;
                    ObjGrabar.Publicidad = Publicidad.Text;                    
                    ObjGrabar.IdMunicipio = int.Parse(Ciudad.SelectedValue);
                    ObjGrabar.Notas = Nota.Text;   
                    ObjGrabar.IdUsuario = int.Parse(Usuario.id_usuario.ToString());
                   

                    //   ObjGrabar.Estado = Estado.Checked;

                    int r = BllBodega.Add(ObjGrabar);
                    if (r > 0)
                    {
                        FillBodega();
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
                if (BllBodega.GetById(int.Parse(TxtId.Text)).ID > 0)
                {
                    var ObjGrabar = BllBodega.GetById(int.Parse(TxtId.Text));
                    ObjGrabar.IdEmpresa = int.Parse(Session["IdEmpresa"].ToString());
                    ObjGrabar.Nombre = Nombre.Text;
                    ObjGrabar.Descripcion = Descripcion.Text;
                    ObjGrabar.Direccion = Direccion.Text;
                    ObjGrabar.Telefono = Telefono.Text;
                    ObjGrabar.Publicidad = Publicidad.Text;
                    ObjGrabar.IdMunicipio = int.Parse(Ciudad.SelectedValue);
                    ObjGrabar.Notas = Nota.Text;
                    ObjGrabar.IdUsuario = int.Parse(Usuario.id_usuario.ToString());
                    ObjGrabar.Direccion = Direccion.Text;

                    int r = BllBodega.Update(ObjGrabar);
                    if (r > 0)
                    {
                        FillBodega();
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
                Session["ListBodega"] = BllBodega.ToList(TxtBusqueda.Text.Trim());
                if (!string.IsNullOrEmpty(Session["ListBodega"].ToString()))
                {
                    GridBodega.DataSource = (List<BllBodega>)Session["ListBodega"];
                    GridBodega.DataBind();


                }
                else
                {
                    FillBodega();

                }
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorAlConsultarDatos;
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }

        protected void GridBodega_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try
            {
                GridBodega.PageIndex = e.NewPageIndex;
                GridBodega.DataSource = (List<BllBodega>)Session["ListBodega"];
                GridBodega.DataBind();
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
                if (Departamento.SelectedValue!="0")
                {
                    FillCiudad(int.Parse(Departamento.SelectedValue));
                }
                else
                {
                    
                }
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorAlCargarCombos;
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }

        protected void Editar_Command(object sender, CommandEventArgs e)
        {
            try
            {
                if (e.CommandName != "Page")
                {
                    BllBodega Row = new BllBodega();

                    List<BllBodega> Rows = new List<BllBodega>();

                    Rows = (List<BllBodega>)Session["ListBodega"];


                    if (Rows.Exists(b => b.ID.ToString() == e.CommandArgument.ToString()))
                    {
                        Row = Rows.Where(b => b.ID.ToString() == e.CommandArgument.ToString()).First();
                        TxtId.Text = Row.ID.ToString();
                        Nombre.Text = Row.Nombre;
                        Descripcion.Text = Row.Descripcion;
                        Direccion.Text = Row.Direccion;
                        Nombre.Text = Row.Nombre;
                        Telefono.Text = Row.Telefono;
                        Publicidad.Text = Row.Publicidad;

                        Ciudad.SelectedValue = Row.IdMunicipio.ToString();
                        Nota.Text = Row.Notas;

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

        protected void Delete_Command(object sender, CommandEventArgs e)
        {
            try
            {
                if (e.CommandName != "Page")
                {
                    bool r = BllBodega.Delete(int.Parse(e.CommandArgument.ToString()));
                    if (r == true)
                    {
                        FillBodega();
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

        protected void GridBodega_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            try
            {
                if (e.Row.RowType == DataControlRowType.DataRow)
                { 
                    
                }
            }
            catch (Exception ex)
            {
                 Msj1.Text = ex.Message;
                Type1.Text = "warning";
            }
        }

        protected void Nuevo_Click1(object sender, EventArgs e)
        {

        }

        protected void btnGuardar_Click1(object sender, EventArgs e)
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
    }
}