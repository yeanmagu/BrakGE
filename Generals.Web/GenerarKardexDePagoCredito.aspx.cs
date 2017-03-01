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
    public partial class GenerarKardexDePagoCredito : PaginaBase
    {
        List<BllCuotaPago> DetallePago= new List<BllCuotaPago>();
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                if (!IsPostBack)
                {
                    //ValidarAutorizacion();
                    Session["Titulo"] = "Generar Kardex De Pago";
                    FillDocumentos();
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


        private void FillDocumentos()
        {
            try
            {
                Session["ListDocumentos"] = BllDocumentos.ToListCreditos();
                if (!string.IsNullOrEmpty(Session["ListDocumentos"].ToString()))
                {
                    GridDocumentos.DataSource = (List<BllDocumentos>)Session["ListDocumentos"];
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
                    BllDocumentos Row = new BllDocumentos();

                    List<BllDocumentos> Rows = new List<BllDocumentos>();

                    Rows = (List<BllDocumentos>)Session["ListDocumentos"];


                    if (Rows.Exists(b => b.Id.ToString() == e.CommandArgument.ToString()))
                    {
                        Row = Rows.Where(b => b.Id.ToString() == e.CommandArgument.ToString()).First();

                        IdFactura.Text = Row.Id.ToString();
                        var Cli = BllPersonas.GetById(Row.IdCliente);
                        Bodega.Text=Row.Bodega;
                        FormaPago.Text=Row.FormaPago;
                        Movimiento.Text=Row.TipoMovimiento;
                        ValorTotalGuardar.Text=Row.Total.ToString();
                        ValorTotal.Text = String.Format("{0:C2}", (Math.Round(float.Parse(Row.Total.ToString()), 2)));
                        Fecha.Text=Row.FechaCreacion.ToString();
                        BuscarCliente(Cli);
                        pnlGrid.Visible = false;
                        pnlDatos.Visible = true;
                        FillAcuerdos(Row.Id);

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
        protected void FillDetalle(List<BllCuotaPago> DetallePago)
        {
            try
            {
                Session["ListDeta"] = DetallePago;
                if (!string.IsNullOrEmpty(Session["ListDeta"].ToString()))
                {
                    Detalle.DataSource = (List<BllCuotaPago>)Session["ListDeta"];
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
        protected void GenerarPlanDePagos(decimal deuda,int nroCuotas,int idPago ,int Modo)
        {
            try
            {
                
                //var ValorCuota=(deuda/nroCuotas);
                var ValorCuota=decimal.Parse(ValorCuotaGuardar.Text);
                var fechaPago=DateTime.Parse(FechaAcuerdo.Text).AddDays(Modo);
                for (int i = 0; i < nroCuotas; i++)
                {
                    var item = new BllCuotaPago();
                    item.NroCuota=i+1;
                    item.SaldoCapital=deuda;
                    item.SaldoPendiente=item.SaldoCapital-ValorCuota;
                    deuda=item.SaldoPendiente;
                    item.IdPlanPago=idPago;
                    item.Valor=ValorCuota;
                    item.Estado="PP";
                    item.Fecha=fechaPago.ToString("yyyy-MM-dd");
                    fechaPago=fechaPago.AddDays(Modo);
                    item.ValorPagado=0;
                    DetallePago.Add(item);

                }
                FillDetalle(DetallePago);
            }
            catch (Exception ex)
            {
                
               Log.EscribirError(ex);
                Msj1.Text = ex.Message;
                Type1.Text = "error";
            }
        }
        protected void BuscarCliente(BllPersonas Cli)
        {
            IdCliente.Text = Cli.Id.ToString();
            Cliente.Text = Cli.Nombre;
            Direccion.Text = Cli.Direccion;
            Ciudad.Text = Cli.Ciudad;
            Telefono.Text = Cli.Telefono;
            Email.Text = Cli.Email;
            Documento.Text = Cli.NroDocumento;
            
        }
        protected void btneliminarGridView_Command(object sender, CommandEventArgs e)
        {
            try
            {
                if (e.CommandName != "Page")
                {
                    //bool r = BllDocumentos.Delete(int.Parse(e.CommandArgument.ToString()));
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
            try { 
                
                
               
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
                using (TransactionScope scope = new TransactionScope())
                {
                    var Obj = new BllPlandePago();

                    Obj.IdFactura = int.Parse(IdFactura.Text);
                    Obj.NroCuotas = int.Parse(Nrocuotas.Text);
                    Obj.FechaAcuerdo = DateTime.Parse(FechaAcuerdo.Text);
                    Obj.Estado = true;
                    Obj.DiasPago = int.Parse(ModoPago.SelectedValue);
                    Obj.ModoPago = ModoPago.SelectedItem.ToString();
                    Obj.Usuario = Usuario.username;

                    // Obj.
                    if (Id.Text == "")
                    {
                        var r = Obj.Add(Obj);
                        if (r > 0)
                        {
                            Id.Text = r.ToString();
                            Msj1.Text = Constantes.Guardado;
                            Type1.Text = "success";
                            FillAcuerdos(Obj.IdFactura);
                            var DP = new BllCuotaPago();
                            DetallePago = (List<BllCuotaPago>)Session["ListDeta"];
                            foreach (var item in DetallePago)
                            {
                                item.IdPlanPago = r;
                                DP.Add(item);
                            }
                        }
                    }
                    else
                    {
                        var r = Obj.Update(Obj);
                        if (r > 0)
                        {
                            Id.Text = r.ToString();
                            Msj1.Text = Constantes.Actualizar;
                            Type1.Text = "success";
                            FillAcuerdos(Obj.IdFactura);
                            var DP = new BllCuotaPago();
                            DetallePago = (List<BllCuotaPago>)Session["ListDeta"];
                            foreach (var item in DetallePago)
                            {
                                
                                DP.Update(item);
                            }
                        }

                    }
                    scope.Complete();
                }
            }
            catch (TransactionAbortedException ex)
            {
                Log.EscribirTraza("TransactionAbortedException Message: {0}  " + ex.Message);

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
                Session["ListDocumentos"] = BllDocumentos.ToListCreditos(TxtBusqueda.Text.Trim());
                if (!string.IsNullOrEmpty(Session["ListDocumentos"].ToString()))
                {
                    GridDocumentos.DataSource = (List<BllDocumentos>)Session["ListDocumentos"];
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
                GridDocumentos.DataSource = (List<BllDocumentos>)Session["ListDocumentos"];
                GridDocumentos.DataBind();
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
                CleanControl(controles); 
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
      
        protected void BtnGenerarPlan_Click(object sender, EventArgs e)
        {
            try
            {
                GenerarPlanDePagos(decimal.Parse(ValorTotalGuardar.Text), int.Parse(Nrocuotas.Text), int.Parse(IdFactura.Text), int.Parse(ModoPago.SelectedValue));

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
                    Detalle.DataSource = (List<BllCuotaPago>)Session["ListDeta"];
                    Detalle.DataBind();
            }
            catch (Exception ex)
            {
                
                Log.EscribirError(ex);
            }
        }

        protected void FillAcuerdos(int NroFactura)
        {
            try
            {
                var acu=new BllPlandePago();
                Session["ListAcuerdos"] = acu.ToList(NroFactura);
                if (!string.IsNullOrEmpty(Session["ListAcuerdos"].ToString()))
                {
                    GridAcuerdos.DataSource=(List<BllPlandePago>)Session["ListAcuerdos"];
                    GridAcuerdos.DataBind();
                }
            }
            catch (Exception ex) 
            {
                
                Log.EscribirTraza(ex.Message);
            }
        }
        protected void GridAcuerdos_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {

        }

        protected void EditarAcuerdo_Command(object sender, CommandEventArgs e)
        {
            try
            {
                if (e.CommandName == "EditarAcuerdo")
                {
                    BllPlandePago Row = new BllPlandePago();

                    List<BllPlandePago> Rows = new List<BllPlandePago>();

                    Rows = (List<BllPlandePago>)Session["ListAcuerdos"];


                    if (Rows.Exists(b => b.Id.ToString() == e.CommandArgument.ToString()))
                    {
                        Row = Rows.Where(b => b.Id.ToString() == e.CommandArgument.ToString()).First();
                        Id.Text=Row.Id.ToString();
                        Nrocuotas.Text = Row.NroCuotas.ToString();
                        FechaAcuerdo.Text = Row.FechaAcuerdo.ToString("yyyy-MM-dd");;
                        ModoPago.SelectedValue = Row.DiasPago.ToString();
                        var query= new BllCuotaPago();
                        DetallePago = query.ToList(Row.Id);
                        FillDetalle(DetallePago);
                    }


                }
            }
            catch (Exception ex)
            {
                Log.EscribirTraza(ex.Message);
            }
        }

        protected void BtnImprimir_Click(object sender, EventArgs e)
        {
            var idF = IdFactura.Text;
            var na = Id.Text;
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Print('" + idF + "','"+na+"');", true);
        }

        protected void ValorCuota_TextChanged(object sender, EventArgs e)
        {
            ValorCuotaGuardar.Text = ValorCuota.Text;
            ValorCuota.Text = String.Format("{0:C2}", ValorCuota.Text);
        }

      
        //funcion para guardar la imagen de la empresa




    }
}