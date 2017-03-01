using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.Entities;
using Generals.business.Common;
using System.Transactions;
namespace BrakGeWeb
{
    public partial class RegistrarPagosFA : PaginaBase
    {
        List<BllCuotasPagoPendiente> DetallePagos= new List<BllCuotasPagoPendiente>();
        private BllCuentasPendientes Cuentas;
        List<BllCuotasPagoPendiente> DetallePago = new List<BllCuotasPagoPendiente>();
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                if (!IsPostBack)
                {
                    //ValidarAutorizacion();
                    Session["Titulo"] = "Registrar Pagos de Cuentas Pendientes";
                    Cuentas=new BllCuentasPendientes();
                    FillDocumentos();
                    
                 fillModoPago();
                  
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
                Session["ListDocumentos"] = Cuentas.ToList();
                if (!string.IsNullOrEmpty(Session["ListDocumentos"].ToString()))
                {
                    GridDocumentos.DataSource = (List<BllCuentasPendientes>)Session["ListDocumentos"];
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
        
        protected void BtnSelect_Command(object sender, CommandEventArgs e)
        {
            try
            {
                if (e.CommandName != "Page")
                {
                    BllCuentasPendientes Row = new BllCuentasPendientes();

                    List<BllCuentasPendientes> Rows = new List<BllCuentasPendientes>();

                    Rows = (List<BllCuentasPendientes>)Session["ListDocumentos"];


                    if (Rows.Exists(b => b.Id.ToString() == e.CommandArgument.ToString()))
                    {
                        Row = Rows.Where(b => b.Id.ToString() == e.CommandArgument.ToString()).First();
                        var acu = new BllAcuerdoPagoCuentasPendientes();
                        var acuerdo = acu.ToList(Row.Id).FirstOrDefault();
                        BllCuotasPagoPendiente query = new BllCuotasPagoPendiente();

                        DetallePagos = query.ToList(acuerdo.Id);
                        FillDetalle(DetallePagos);
                        NroAcuerdo.Text=acuerdo.Id.ToString();
                        NroFactura.Text=Row.Id.ToString();
                        Fecha.Text=DateTime.Now.ToString("yyyy-MM-dd");
                        Total.Text = String.Format("{0:C2}", (Math.Round(float.Parse(Row.SaldoTotal.ToString()), 2)));
                        ModalCancelar.Show();
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
        protected void FillDetalle(List<BllCuotasPagoPendiente> DetallePago)
        {
            try
            {
                Session["ListDeta"] = DetallePagos;
                if (!string.IsNullOrEmpty(Session["ListDeta"].ToString()))
                {
                    Detalle.DataSource = (List<BllCuotasPagoPendiente>)Session["ListDeta"];
                    Detalle.DataBind();
                }
            }
            catch (Exception ex)
            {

                Log.EscribirError(ex);
                Msj1.Text = ex.Message;
                Type1.Text = "error";
            }
        }
        
        protected void btneliminarGridView_Command(object sender, CommandEventArgs e)
        {
            try
            {
                if (e.CommandName != "Page")
                {
                    //bool r = BllCuentasPendientes.Delete(int.Parse(e.CommandArgument.ToString()));
                    //if (r == true)
                    //{
                    //    FillDocumentos();
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
            try 
            { 
                
                
               
            }
            catch (Exception ex) {
                Msj1.Text = Constantes.ErrorLimpiando;
                Type1.Text = "warning";
                Log.EscribirError(ex); }
        }
        private void fillModoPago()
        {
            try
            {
                var Modo= new BllModoPago();
                ModoPago.DataSource=Modo.ToList();
                ModoPago.DataValueField="Id";
                ModoPago.DataTextField="Descripcion";
                ModoPago.DataBind();
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
                using (TransactionScope scope = new TransactionScope())
                {
                   var cuota = new BllCuotasPagoPendiente();
                    cuota = cuota.GetById(int.Parse(Id.Text));
                    cuota.Estado="PA";
                    cuota.IdModoPago=int.Parse(ModoPago.SelectedValue);
                    var r = cuota.Update(cuota);
                    if (r>0)
                    {
                        var fac= 
                        Msj1.Text = Constantes.Actualizar;
                        Type1.Text = "success";

                    }
                    else
                    {
                        Msj1.Text = Constantes.ErrorAlActualizar;
                        Type1.Text = "error";
                    }
                    scope.Complete();

                }
            }
            catch (TransactionAbortedException ex)
            {
                Log.EscribirTraza("TransactionAbortedException Message: {0}  " + ex.Message);
                Msj1.Text = ex.Message;
                Type1.Text = "error";
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorAlGuardar;
                Type1.Text = "error";
                
                Log.EscribirError(ex);
            }
        }
        /*Guardar*/
        protected void BtnGuardar_Click(object sender, EventArgs e)
        {
            try
            {
                GuardarTipo();
                
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
                Session["ListDocumentos"] = Cuentas.ToList(TxtBusqueda.Text.Trim());
                if (!string.IsNullOrEmpty(Session["ListDocumentos"].ToString()))
                {
                    GridDocumentos.DataSource = (List<BllCuentasPendientes>)Session["ListDocumentos"];
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

        protected void GridEstadoDocumento_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try
            {
                GridDocumentos.PageIndex = e.NewPageIndex;
                GridDocumentos.DataSource = (List<BllCuentasPendientes>)Session["ListDocumentos"];
                GridDocumentos.DataBind();
            }
            catch (Exception ex) { Log.EscribirError(ex); ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "displayToastr('" + Constantes.ErrorAlCargarGrid + "','" + "error');", true); }
        }

       

        protected void Limpiar_Click(object sender, EventArgs e)
        {
           
        }
        protected void LimpiarControles(ControlCollection controles)
        {
            try
            {
                CleanControl(controles); 
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorLimpiando;
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }
       

        protected void Cerrar_ServerClick(object sender, EventArgs e)
        {
            Response.Redirect("Default.aspx");
        }
      
        protected void BtnGenerarPlan_Click(object sender, EventArgs e)
        {
            try
            {
                //GenerarPlanDePagos(decimal.Parse(ValorTotalGuardar.Text), int.Parse(Nrocuotas.Text), int.Parse(IdFactura.Text), int.Parse(ModoPago.SelectedValue));

            }
            catch (Exception err)
            {
                
                string error = err.Message.ToString() + " - " + err.Source.ToString();
                Log.EscribirTraza(error);
                Log.EscribirError(err);
                Msj1.Text = error;
                Type1.Text = "error";
            }
        }

        protected void Detalle_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try
            {
                    Detalle.PageIndex=e.NewPageIndex;
                    Detalle.DataSource = (List<BllCuotasPagoPendiente>)Session["ListDeta"];
                    Detalle.DataBind();
            }
            catch (Exception ex)
            {
                
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
       
        //protected void FillDetalle(List<BllCuotasPagoPendiente> DetallePago)
        //{
        //    try
        //    {
        //        Session["ListDeta"] = DetallePago;
        //        if (!string.IsNullOrEmpty(Session["ListDeta"].ToString()))
        //        {
        //            Detalle.DataSource = (List<BllCuotasPagoPendiente>)Session["ListDeta"];
        //            Detalle.DataBind();
        //        }
        //    }
        //    catch (Exception ex)
        //    {

        //        Log.EscribirError(ex);
        //        Msj1.Text = ex.Message;
        //        Type1.Text = "error";
        //    }
        //}
        protected void GridAcuerdos_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {

        }

   

        protected void BtnImprimir_Click(object sender, EventArgs e)
        {
            var idF = NroFactura.Text;
            var na = Id.Text;
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Print('" + idF + "','" + na + "');", true);
        }

        protected void GuardarRecibo_Click(object sender, EventArgs e)
        {
            GuardarTipo();
        }

        protected void CancelarRecibo_Click(object sender, EventArgs e)
        {

        }

        protected void CloseCliente_Click(object sender, EventArgs e)
        {
            ModalCancelar.Hide();
        }

        protected void Cuota_Command(object sender, CommandEventArgs e)
        {
            try
            {
                if (e.CommandName != "Page")
                {
                    BllCuotasPagoPendiente Row = new BllCuotasPagoPendiente();

                    List<BllCuotasPagoPendiente> Rows = new List<BllCuotasPagoPendiente>();

                    Rows = (List<BllCuotasPagoPendiente>)Session["ListDeta"];


                    if (Rows.Exists(b => b.Id.ToString() == e.CommandArgument.ToString()))
                    {
                        Row = Rows.Where(b => b.Id.ToString() == e.CommandArgument.ToString()).First();
                        NroCuota.Text=Row.NroCuota.ToString();
                        Fecha.Text = DateTime.Now.ToString("yyyy-MM-dd");
                        TotalGuardar.Text=Row.Valor.ToString();
                        Total.Text = String.Format("{0:C2}", (Math.Round(float.Parse(Row.Valor.ToString()), 2))); ;
                        Id.Text=Row.Id.ToString();
                    }
                }
            }catch  (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }

      

        protected void Detalle_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            try
            {
                if (e.Row.RowType == DataControlRowType.DataRow)
                {
                    var Btn = e.Row.FindControl("Cuota") as System.Web.UI.WebControls.ImageButton;

                    if (e.Row.Cells[5].Text!="PP")
                    {
                        Btn.Enabled=false;
                    }
                }
            }
            catch (Exception err)
            {
                string error = err.Message.ToString() + " - " + err.Source.ToString();
                Log.EscribirTraza(error);
                Log.EscribirError(err);
                Msj1.Text = error;
                Type1.Text = "error";
            }
        }

      
        //funcion para guardar la imagen de la empresa




    }
}