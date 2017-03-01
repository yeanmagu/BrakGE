using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.Entities;
using Generals.business.Common;

namespace BrakGeWeb
{
    public partial class GestionCientes : PaginaBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                if (!IsPostBack)
                {
                    //ValidarAutorizacion();
                    Session["Titulo"] = "Administración de  Clientes";
                    FillPersonas();
                    FillTipoPersona();
                    FillTipo();
                    FillTipoDocumento();
                    FillCiudad(0);
                    FillDepartamento();
                    pnlGrid.Visible = true;
                    DiasCredito.Visible = false;
                    //FechaFin.Visible = false;
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

        private void FillTipo()
        {
            try
            {
                Tipo.DataSource = BllTipoCliente.ToList();
                Tipo.DataTextField = "Descripcion";
                Tipo.DataValueField = "Id";
                Tipo.DataBind();
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorAlCargarCombos + " Tipo Cliente";
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }
        private void FillTipoDocumento()
        {
            try
            {
                TipoDocumento.DataSource = BllTipoDocumento.ToList();
                TipoDocumento.DataTextField = "Descripcion";
                TipoDocumento.DataValueField = "Id";
                TipoDocumento.DataBind();
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorAlCargarCombos + " Tipo Documento";
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }
        private void FillTipoPersona()
        {
            try
            {
                TipoDocumento.DataSource = BllTipoDocumento.ToList();
                TipoDocumento.DataTextField = "Descripcion";
                TipoDocumento.DataValueField = "Id";
                TipoDocumento.DataBind();

                TipoPersona.DataSource = BllTipoPersona.ToList();
                TipoPersona.DataTextField = "Descripcion";
                TipoPersona.DataValueField = "Id";
                TipoPersona.DataBind();
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorAlCargarCombos + " Tipo Persona";
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
                Departamento.Items.Insert(0,new ListItem("Seleccione Departamento","0"));
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
                if (IdDpto==0)
                {
                    Ciudad.DataSource = BllMunicipio.ToList();
                }else
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
        private void FillPersonas()
        {
            try
            {
                Session["ListPersonas"] = BllPersonas.ToList();
                if (!string.IsNullOrEmpty(Session["ListPersonas"].ToString()))
                {
                    GridCliente.DataSource = (List<BllPersonas>)Session["ListPersonas"];
                    GridCliente.DataBind();
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
                    BllPersonas Row = new BllPersonas();

                    List<BllPersonas> Rows = new List<BllPersonas>();

                    Rows = (List<BllPersonas>)Session["ListPersonas"];


                    if (Rows.Exists(b => b.Id.ToString() == e.CommandArgument.ToString()))
                    {
                        Row = Rows.Where(b => b.Id.ToString() == e.CommandArgument.ToString()).First();
                        TxtId.Text = Row.Id.ToString();
                        Nombre.Text = Row.Nombre;

                        TipoDocumento.SelectedValue = Row.IdTipoDocumento.ToString();
                        NroDocumento.Text = Row.NroDocumento;
                        Apellido.Text = Row.Apellidos;
                        Nombre.Text = Row.Nombre;
                        Telefono.Text = Row.Telefono;
                        Celular.Text = Row.Celular;
                        FechaNacimiento.Text = Row.FechaNacimiento.ToString("yyyy-MM-dd");
                        Ciudad.SelectedValue = Row.IdCiudadResidencia.ToString();
                        Nota.Text = Row.Nota;
                        Tipo.SelectedValue = Row.IdTipo.ToString();
                        TipoPersona.SelectedValue = Row.IdTipoPersona.ToString();
                        Regimen.Checked = Row.RegimenSimplificado;
                        AutoRetenedores.Checked = Row.Autoretenedores;
                        AUI.Checked = Row.AplicaAIU;
                        RecibirEmail.Checked = Row.RecibirEmail;
                        Activo.Checked = Row.Estado;
                        Email.Text = Row.Email;
                        Direccion.Text = Row.Direccion;
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
                    ////   bool r = BllPersonas.Delete(int.Parse(e.CommandArgument.ToString()));
                    //   if (r == true)
                    //   {
                    //       FillPersonas();
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
                if (BllPersonas.ExisteDescri(NroDocumento.Text) == false)
                {
                    BllPersonas ObjGrabar = new BllPersonas();
                    ObjGrabar.IdTipoDocumento = int.Parse(TipoDocumento.SelectedValue);
                    ObjGrabar.NroDocumento = NroDocumento.Text;
                    ObjGrabar.Apellidos = Apellido.Text;
                    ObjGrabar.Nombre = Nombre.Text;
                    ObjGrabar.Telefono = Telefono.Text;
                    ObjGrabar.Celular = Celular.Text;
                    ObjGrabar.FechaNacimiento = DateTime.Parse(FechaNacimiento.Text);
                    ObjGrabar.IdCiudadResidencia = int.Parse(Ciudad.SelectedValue);
                    ObjGrabar.Nota = Nota.Text;
                    ObjGrabar.IdTipo = int.Parse(Tipo.SelectedValue);
                    ObjGrabar.IdTipoPersona = int.Parse(TipoPersona.SelectedValue);
                    ObjGrabar.RegimenSimplificado = Regimen.Checked;
                    ObjGrabar.Autoretenedores = AutoRetenedores.Checked;
                    ObjGrabar.AplicaAIU = AUI.Checked;
                    ObjGrabar.RecibirEmail = RecibirEmail.Checked;
                    ObjGrabar.IdEmpresa = int.Parse(Session["IdEmpresa"].ToString());
                    ObjGrabar.IdUsuario = int.Parse(Usuario.id_usuario.ToString());
                    ObjGrabar.Email = Email.Text;
                    ObjGrabar.Direccion = Direccion.Text;
                    //if (FechaInicioContrato.Text != "")
                    //{
                    //    ObjGrabar.FechaIngreso = DateTime.Parse(FechaInicioContrato.Text);
                    //}
                    //if (FechaFinContrato.Text != "")
                    //{
                    //     ObjGrabar.FechaFinContrato=DateTime.Parse(FechaFinContrato.Text);

                    //}
                    //   ObjGrabar.Estado = Estado.Checked;
                    ObjGrabar.FechaCreacion=DateTime.Now;
                    int r = BllPersonas.Add(ObjGrabar);
                    if (r > 0)
                    {
                        FillPersonas();
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
                    Msj1.Text = "Ya Existe un Cliente Con este mismo Nro. de Identificacion";
                    Type1.Text = "error";
                }
            }
            catch (Exception ex)
            {
                Msj1.Text = ex.Message;
                Type1.Text = "error";

                Log.EscribirError(ex);
            }
        }
        protected void Modificar()
        {
            try
            {
                if (BllPersonas.GetById(int.Parse(TxtId.Text)).Id > 0)
                {
                    var ObjGrabar = BllPersonas.GetById(int.Parse(TxtId.Text));
                    ObjGrabar.IdTipoDocumento = int.Parse(TipoDocumento.SelectedValue);
                    ObjGrabar.NroDocumento = NroDocumento.Text;
                    ObjGrabar.Apellidos = Apellido.Text;
                    ObjGrabar.Nombre = Nombre.Text;
                    ObjGrabar.Telefono = Telefono.Text;
                    ObjGrabar.Celular = Celular.Text;
                    ObjGrabar.FechaNacimiento = DateTime.Parse(FechaNacimiento.Text);
                    ObjGrabar.IdCiudadResidencia = int.Parse(Ciudad.SelectedValue);
                    ObjGrabar.Nota = Nota.Text;
                    ObjGrabar.IdTipo = int.Parse(Tipo.SelectedValue);
                    ObjGrabar.IdTipoPersona = int.Parse(TipoPersona.SelectedValue);
                    ObjGrabar.RegimenSimplificado = Regimen.Checked;
                    ObjGrabar.Autoretenedores = AutoRetenedores.Checked;
                    ObjGrabar.AplicaAIU = AUI.Checked;
                    ObjGrabar.RecibirEmail = RecibirEmail.Checked;
                    ObjGrabar.IdEmpresa = int.Parse(Session["IdEmpresa"].ToString());
                    ObjGrabar.IdUsuario = int.Parse(Usuario.id_usuario.ToString());
                    ObjGrabar.Email = Email.Text;
                    ObjGrabar.Direccion = Direccion.Text;
                   ObjGrabar.Estado=Activo.Checked;
                   if (TxtDiasCredito.Text != "")
                   {
                       ObjGrabar.DiasCreditoProv = int.Parse(TxtDiasCredito.Text);
                   }
                   //if (FechaFinContrato.Text != "")
                   //{
                   //    ObjGrabar.FechaFinContrato = DateTime.Parse(FechaFinContrato.Text);

                   //}
                    int r = BllPersonas.Update(ObjGrabar);
                    if (r > 0)
                    {
                        FillPersonas();
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
                Msj1.Text = ex.Message;
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
                Session["ListPersonas"] = BllPersonas.ToList(TxtBusqueda.Text.Trim());
                if (!string.IsNullOrEmpty(Session["ListPersonas"].ToString()))
                {
                    GridCliente.DataSource = (List<BllPersonas>)Session["ListPersonas"];
                    GridCliente.DataBind();


                }
                else
                {
                    FillPersonas();

                }
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorAlConsultarDatos;
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }

        protected void GridCliente_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try
            {
                GridCliente.PageIndex = e.NewPageIndex;
                GridCliente.DataSource = (List<BllPersonas>)Session["ListPersonas"];
                GridCliente.DataBind();
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

       

    

        protected void LinkEdit_Click(object sender, EventArgs e)
        {
            GridViewRow gr = (GridViewRow)((LinkButton)sender).NamingContainer;
            try
            {
                
                    BllPersonas Row = new BllPersonas();

                    List<BllPersonas> Rows = new List<BllPersonas>();

                    Rows = (List<BllPersonas>)Session["ListPersonas"];


                    if (Rows.Exists(b => b.Id.ToString() == gr.Cells[0].Text))
                    {
                        Row = Rows.Where(b => b.Id.ToString() == gr.Cells[0].Text).First();
                        TxtId.Text = Row.Id.ToString();
                        Nombre.Text = Row.Nombre;

                        TipoDocumento.SelectedValue = Row.IdTipoDocumento.ToString();
                        NroDocumento.Text = Row.NroDocumento;
                        Apellido.Text = Row.Apellidos;
                        Nombre.Text = Row.Nombre;
                        Telefono.Text = Row.Telefono;
                        Celular.Text = Row.Celular;
                        FechaNacimiento.Text = Row.FechaNacimiento.ToString("yyyy-MM-dd");
                        Ciudad.SelectedValue = Row.IdCiudadResidencia.ToString();
                        Nota.Text = Row.Nota;
                        Tipo.SelectedValue = Row.IdTipo.ToString();
                        TipoPersona.SelectedValue = Row.IdTipoPersona.ToString();
                        Regimen.Checked = Row.RegimenSimplificado;
                        AutoRetenedores.Checked = Row.Autoretenedores;
                        AUI.Checked = Row.AplicaAIU;
                        RecibirEmail.Checked = Row.RecibirEmail;
                        if (Row.DiasCreditoProv != null)
                        {
                            TxtDiasCredito.Text = Row.DiasCreditoProv.ToString();
                        }
                        //if (Row.FechaFinContrato!=null)
                        //{
                        //    FechaFinContrato.Text = Row.FechaFinContrato.Value.ToString("yyyy-MM-dd");
                           
                        //}
                        
                        Email.Text = Row.Email;
                        Direccion.Text = Row.Direccion;
                        pnlGrid.Visible = false;
                        pnlDatos.Visible = true;

                    
                }
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Msj1.Text = Constantes.ErrorAlConsultarDatos;
                Type1.Text = "warning";
            }
        }

        protected void Departamento_SelectedIndexChanged(object sender, EventArgs e)
        {
            FillCiudad(int.Parse(Departamento.SelectedValue));
        }

        protected void TipoPersona_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (Tipo.SelectedValue == "2003")
            {
                DiasCredito.Visible = true;
              
            }
            else
            {
                DiasCredito.Visible = false;

                TxtDiasCredito.Text = "";
            }
        }
    }
}