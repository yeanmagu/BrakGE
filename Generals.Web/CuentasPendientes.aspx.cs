using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.Entities;
using Generals.business.Common;
using AjaxControlToolkit;
using System.Transactions;
namespace BrakGeWeb
{
    public partial class CuentasPendientes : PaginaBase
    {
        private  List<BllCuentasPendientes> ListDeta;
        private BllCuentasPendientes Cuentas;
        protected void Page_Load(object sender, EventArgs e)
        {
           
            try
            {
                if (!IsPostBack)
                {
                  
                    Session["Titulo"] = "Cuentas Pendientes";
                    FillDocumentos();
                   
                    FillProvedor();
                    ListDeta = new List<BllCuentasPendientes>();
                    Cuentas=new BllCuentasPendientes();
                            //pnlGrid.Visible = true;
                            //pnlDatos.Visible = false;
                       
                    //ValidarAutorizacion();
                    
                }
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.errorGeneral;
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }
    
       
        private void FillDocumentos()
        {
            try
            {
                Cuentas=new BllCuentasPendientes();
                Session["ListCuentas"] = Cuentas.ToList();
                if (!string.IsNullOrEmpty(Session["ListCuentas"].ToString()))
                {
                    GridDocumentos.DataSource = (List<BllCuentasPendientes>)Session["ListCuentas"];
                    GridDocumentos.DataBind();
                }
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.errorGeneral;
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }
  
      
        private void BuscarDatosFact(BllCuentasPendientes Row)
        {
            try
            {
                var Cli = BllPersonas.GetById(Row.IdCliente);
                    BuscarCliente(Cli);
                    TxtId.Text = Row.Id.ToString();                 
                    NumeroCotizacion.Text=Row.NumeroCotizacion;
                    SaldoTotalGuardar.Text = Row.SaldoTotal.ToString();
                    SaldoPendienteGuardar.Text = Row.SaldoPendiente.ToString();
                    Descricpcion.Text = Row.DescripcionFactura;
                    SaldoTotal.Text = String.Format("{0:C2}", decimal.Parse(SaldoTotalGuardar.Text));
                    SaldoPendiente.Text = String.Format("{0:C2}", decimal.Parse(SaldoPendienteGuardar.Text));
                   
                  
                  
                    //Estado.Checked = Row.Estado;
                  
                   
                  
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Msj1.Text = Constantes.ErrorAlConsultarDatos;
                Type1.Text = "warning";
            }
        }
        protected void Cerrar_ServerClick(object sender, EventArgs e)
        {
            Response.Redirect("Default.aspx");
        }
        protected void Nuevo_Click(object sender, EventArgs e)
        {
            pnlGrid.Visible = false;
            pnlDatos.Visible = true;
        }
        protected void BtnSelect_Command(object sender, CommandEventArgs e)
        {
            try
            {
                if (e.CommandName == "Aprobar")
                {
                    BllCuentasPendientes Row = new BllCuentasPendientes();

                    List<BllCuentasPendientes> Rows = new List<BllCuentasPendientes>();

                    Rows = (List<BllCuentasPendientes>)Session["ListCuentas"];


                    if (Rows.Exists(b => b.Id.ToString() == e.CommandArgument.ToString()))
                    {
                        Row = Rows.Where(b => b.Id.ToString() == e.CommandArgument.ToString()).First();
                        
                          
                            BuscarDatosFact(Row);
                            TxtId.Text=Row.Id.ToString();
                          
                            //btnGuardar.Visible = false;
                          
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

    
        protected void BtnLimpiar_Click(object sender, EventArgs e)
        {
            try { 
                
                CleanControl(this.Controls); TxtId.Enabled = true;
                Session.Remove("ListDeta");
               
            }
            catch (Exception ex) {
                Msj1.Text = Constantes.ErrorLimpiando;
                Type1.Text = "warning";
                Log.EscribirError(ex); }
        }

        protected void Guardar()
        {
            try
            {
                Cuentas = new BllCuentasPendientes();
                Cuentas.IdCliente=int.Parse(IdCliente.Text);
                Cuentas.NumeroCotizacion=NumeroCotizacion.Text;
                Cuentas.SaldoTotal=decimal.Parse(SaldoTotalGuardar.Text);
                Cuentas.SaldoPendiente=decimal.Parse(SaldoPendienteGuardar.Text);
               
                Cuentas.DescripcionFactura=Descricpcion.Text;
                Cuentas.IdUsuario=int.Parse(Usuario.id_usuario.ToString());
                Cuentas.EstadoPago="PP";
                if (!Cuentas.ExisteDescri(NumeroCotizacion.Text))
                {
                    var r = Cuentas.Add(Cuentas);
                    if (r>0)
                    {
                        TxtId.Text=r.ToString();
                        Msj1.Text = Constantes.Guardado;
                        Type1.Text = "success";
                        FillDocumentos();
                    }
                }
                else
                {
                    Msj1.Text = Constantes.Existe;
                    Type1.Text = "warning";
                }
            }
            catch (Exception ex)
            {
                 Msj1.Text = ex.Message;
                Type1.Text = "warning";
                Log.EscribirError(ex);
            }
        }
        protected void Modificar()
        {
            try
            {
                Cuentas=new BllCuentasPendientes();
                if (Cuentas.GetById(int.Parse(TxtId.Text)).Id > 0)
                {
                    var ObjGrabar = Cuentas.GetById(int.Parse(TxtId.Text));
                    ObjGrabar.EstadoPago="PA";
                  
                   
                    int r = Cuentas.Update(ObjGrabar);
                    if (r > 0)
                    {
                        FillDocumentos();
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
                if (TxtId.Text=="")
                {
                    Guardar();
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
                Session["ListCuentas"] = Cuentas.ToList(TxtBusqueda.Text.Trim());
                if (!string.IsNullOrEmpty(Session["ListCuentas"].ToString()))
                {
                    GridDocumentos.DataSource = (List<BllCuentasPendientes>)Session["ListCuentas"];
                    GridDocumentos.DataBind();
                }
                else
                {
                    FillDocumentos();
                    
                }
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorAlConsultarDatos;
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }

        protected void GridDocumentos_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try
            {
                GridDocumentos.PageIndex = e.NewPageIndex;
                GridDocumentos.DataSource = (List<BllCuentasPendientes>)Session["ListCuentas"];
                GridDocumentos.DataBind();
            }
            catch (Exception ex) { Log.EscribirError(ex); ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "displayToastr('" + Constantes.ErrorAlCargarGrid + "','" + "error');", true); }
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
            btnGuardar.Visible=true;
            btnGuardar.Enabled = true;
         
           
           
            LimpiarControles(pnlDatos.Controls);
        }

       

        protected void BuscarCliente(BllPersonas Cli)
        {
            IdCliente.Text = Cli.Id.ToString();
            Cliente.Text = Cli.Nombre;
            Direccion.Text = Cli.Direccion;
            Ciudad.Text = Cli.Ciudad;
            Telefono.Text = Cli.Telefono;
            Email.Text = Cli.Email;
            Documento.Text=Cli.NroDocumento;
        }
     
       
        //funcion para guardar la imagen de la empresa


      
        protected void Imprimir_Click(object sender, EventArgs e)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Print('" + TxtId.Text + "');", true);
        }
        
     

        protected void GridDocumentos_DataBound(object sender, EventArgs e)
        {
            
        }


        protected void Documento_TextChanged(object sender, EventArgs e)
        {
            try
            {
               
                ModalPopupExtender1.Show();
                BuscarProv.Visible = true;
            }
            catch (Exception ex)
            {

                Log.EscribirError(ex);
                Log.EscribirTraza(ex.Message);
            }
        }
        private void FillProvedor()
        {
            try
            {
                Session["ListProv"] = BllPersonas.ToList();
                GridProvedor.DataSource = (List<BllPersonas>)Session["ListProv"];
                GridProvedor.DataBind();
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Msj1.Text = ex.Message;
                Type1.Text = "error";

            }
        }
        protected void BuscarProvedor_TextChanged(object sender, EventArgs e)
        {
            try
            {
                if (BuscarProvedor.Text != "")
                {

                    Session["ListProv"] = BllPersonas.ToList(BuscarProvedor.Text);
                    GridProvedor.DataSource = (List<BllPersonas>)Session["ListProv"];
                    GridProvedor.DataBind();
                }
                else
                {
                    Session["ListProv"] = BllPersonas.ToList();
                    GridProvedor.DataSource = (List<BllPersonas>)Session["ListProv"];
                    GridProvedor.DataBind();
                }
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Msj1.Text = ex.Message;
                Type1.Text = "error";
            }
        }
        protected void SelectProve_Command(object sender, CommandEventArgs e)
        {
            try
            {
                if (e.CommandName != "Page")
                {
                    BllPersonas Row = new BllPersonas();

                    List<BllPersonas> Rows = new List<BllPersonas>();

                    Rows = (List<BllPersonas>)Session["ListProv"];


                    if (Rows.Exists(b => b.Id.ToString() == e.CommandArgument.ToString()))
                    {
                        Row = Rows.Where(b => b.Id.ToString() == e.CommandArgument.ToString()).First();

                        BuscarCliente(Row);
                        ModalPopupExtender1.Hide();

                    }
                }
            }
            catch (Exception ex)
            {
                Log.EscribirTraza(ex.Message);
                Log.EscribirError(ex);
            }
        }

        protected void GridProvedor_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            GridProvedor.PageIndex = e.NewPageIndex;
            GridProvedor.DataSource = (List<BllPersonas>)Session["ListProv"];
            GridProvedor.DataBind();
        }
        protected void CloseCliente_Click(object sender, EventArgs e)
        {
            ModalPopupExtender1.Hide();
        }

        protected void BtnNuevo1_Click(object sender, EventArgs e)
        {
            LimpiarControles(pnlDatos.Controls);
            pnlGrid.Visible=false;
            pnlDatos.Visible=true;
        }

        protected void SaldoTotal_TextChanged(object sender, EventArgs e)
        {
            try
            {
                SaldoTotalGuardar.Text=SaldoTotal.Text;
                SaldoTotal.Text = String.Format("{0:C2}", decimal.Parse(SaldoTotal.Text));
                SaldoPendiente.Text= SaldoTotalGuardar.Text;
                SaldoPendienteGuardar.Text = SaldoPendiente.Text;
                SaldoPendiente.Text = String.Format("{0:C2}", decimal.Parse(SaldoPendiente.Text));
            }
            catch (Exception ex)
            {
                
                Log.EscribirError(ex);
                Msj1.Text = ex.Message;
                Type1.Text = "error";
            }
        }

    }

}