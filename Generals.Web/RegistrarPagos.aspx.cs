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
    public partial class RegistrarPagos : PaginaBase
    {
        List<BllCuotaPago> DetallePagos= new List<BllCuotaPago>();
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                if (!IsPostBack)
                {
                    //ValidarAutorizacion();
                    Session["Titulo"] = "Registrar Pagos";
                    FillDocumentos();
                 
                  
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
                Session["ListDocumentos"] = BllDocumentos.ToListPP();
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
                        var acu = new BllPlandePago();
                        var acuerdo = acu.ToList(Row.Id).FirstOrDefault();
                        BllCuotaPago query = new BllCuotaPago();

                        DetallePagos = query.ToList(acuerdo.Id);
                        FillDetalle(DetallePagos);
                        NroAcuerdo.Text=acuerdo.Id.ToString();
                        NroFactura.Text=Row.Id.ToString();
                        Fecha.Text=DateTime.Now.ToString("yyyy-MM-dd");
                        Total.Text = String.Format("{0:C2}", (Math.Round(float.Parse(Row.Total.ToString()), 2)));
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
        protected void FillDetalle(List<BllCuotaPago> DetallePago)
        {
            try
            {
                Session["ListDeta"] = DetallePagos;
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
            try 
            { 
                
                
               
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
                    var tp = new BllRecibosPago();

                    tp.IdFactura = int.Parse(NroFactura.Text);
                    tp.IdAcuerdo = int.Parse(NroAcuerdo.Text);
                    tp.Fecha = DateTime.Parse(Fecha.Text) ;
                    tp.ValorDevuelto = decimal.Parse(CambioGuardar.Text);
                    tp.ValorTotal = decimal.Parse(TotalGuardar.Text);
                    tp.ValorRecibido = decimal.Parse(EfectivoGuardar.Text);
                    tp.ModoPago = ModoPago.SelectedValue;
                    tp.Anulado = false; tp.NroCuota = int.Parse(NroCuota.Text);
                    tp.Notas = Notas.Text;
                    tp.Usuario =  Usuario.username;


                    if (Id.Text == "")
                    {
                        var r = tp.Add(tp);
                        if (r > 0)
                        {
                            var Fac = new BllDocumentos();
                            Fac = BllDocumentos.GetById(tp.IdFactura);
                            Id.Text = r.ToString();
                            Msj1.Text = Constantes.Guardado;
                            Type1.Text = "success";
                            if (NroAcuerdo.Text != "0")
                            {
                                var Nroc = new BllCuotaPago();
                                Nroc = Nroc.GetById(tp.IdAcuerdo, tp.NroCuota);
                                Nroc.ValorPagado=tp.ValorTotal-Math.Abs(tp.ValorDevuelto);
                                Nroc.UsuarioRecibePago=Usuario.username;
                                if (Nroc.ValorPagado<Nroc.Valor)
                                {
                                    Nroc.Estado = "PA";
                                }
                                else
                                {
                                    Nroc.Estado = "PC";
                                }
                               
                                Nroc.Update(Nroc);
                                var Rec = new BllRecibosPago();
                                var Recs = Rec.ToList(tp.IdFactura);
                                decimal total = 0;

                                foreach (var item in Recs)
                                {
                                    total += (item.ValorRecibido - item.ValorDevuelto);
                                }

                                if (Fac.Total==total)
                                {
                                    Fac.EstadoPago="PA";
                                }
                            }
                            else
                            {
                               
                                if (tp.ValorDevuelto <= 0)
                                {

                                    Fac.EstadoPago = "PA";
                                }
                                else
                                {
                                    Fac.EstadoPago = "PC";
                                }
                                BllDocumentos.Update(Fac);
                            }
                        }
                    }
                    else
                    {
                        tp=tp.GetById(int.Parse(Id.Text));
                        tp.ValorDevuelto = decimal.Parse(CambioGuardar.Text);
                        tp.ValorTotal = decimal.Parse(TotalGuardar.Text);
                        tp.ValorRecibido = decimal.Parse(EfectivoGuardar.Text);
                        tp.ModoPago = ModoPago.SelectedValue;
                        tp.Anulado = false; 
                        tp.Notas = Notas.Text;



                        var r = tp.Update(tp);
                        if (r > 0)
                        {
                            var Fac = new BllDocumentos();
                            Fac = BllDocumentos.GetById(tp.IdFactura);
                            Id.Text = r.ToString();
                            Msj1.Text = Constantes.Guardado;
                            Type1.Text = "success";
                            if (NroAcuerdo.Text != "0")
                            {
                                var Nroc = new BllCuotaPago();
                                Nroc = Nroc.GetById(tp.IdAcuerdo, tp.NroCuota);
                                Nroc.ValorPagado = tp.ValorTotal - Math.Abs(tp.ValorDevuelto);
                                Nroc.UsuarioRecibePago = Usuario.username;
                                if (Nroc.ValorPagado == Nroc.Valor)
                                {
                                    Nroc.Estado = "PA";
                                }
                                else
                                {
                                    Nroc.Estado = "PC";
                                }

                                Nroc.Update(Nroc);
                                var Rec = new BllRecibosPago();
                                var Recs = Rec.ToList(tp.IdFactura);
                                decimal total = 0;

                                foreach (var item in Recs)
                                {
                                    total += (item.ValorRecibido - item.ValorDevuelto);
                                }

                                if (Fac.Total == total)
                                {
                                    Fac.EstadoPago = "PA";
                                }
                            }
                            else
                            {

                                if (tp.ValorDevuelto <= 0)
                                {

                                    Fac.EstadoPago = "PA";
                                }
                                else
                                {
                                    Fac.EstadoPago = "PC";
                                }
                                BllDocumentos.Update(Fac);
                            }
                        }
                    }           
                    var acu = new BllPlandePago();
                    var acuerdo = acu.ToList(tp.IdFactura).FirstOrDefault();
                    BllCuotaPago query = new BllCuotaPago();

                    DetallePagos = query.ToList(acuerdo.Id);
                    FillDetalle(DetallePagos);
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
                    Detalle.DataSource = (List<BllCuotaPago>)Session["ListDeta"];
                    Detalle.DataBind();
            }
            catch (Exception ex)
            {
                
                Log.EscribirError(ex);
            }
        }
        //protected void FillDetalle(List<BllCuotaPago> DetallePago)
        //{
        //    try
        //    {
        //        Session["ListDeta"] = DetallePago;
        //        if (!string.IsNullOrEmpty(Session["ListDeta"].ToString()))
        //        {
        //            Detalle.DataSource = (List<BllCuotaPago>)Session["ListDeta"];
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
                    BllCuotaPago Row = new BllCuotaPago();

                    List<BllCuotaPago> Rows = new List<BllCuotaPago>();

                    Rows = (List<BllCuotaPago>)Session["ListDeta"];


                    if (Rows.Exists(b => b.Id.ToString() == e.CommandArgument.ToString()))
                    {
                        Row = Rows.Where(b => b.Id.ToString() == e.CommandArgument.ToString()).First();
                        NroCuota.Text=Row.NroCuota.ToString();
                        Fecha.Text = DateTime.Now.ToString("yyyy-MM-dd");
                        if (Row.Estado=="PC")
                        {
                             TotalGuardar.Text=(Row.Valor-Row.ValorPagado).ToString();
                             Total.Text = String.Format("{0:C2}",float.Parse(TotalGuardar.Text)); ;
                        }
                        else
                        {
                            TotalGuardar.Text = Row.Valor.ToString();
                            Total.Text = String.Format("{0:C2}", Row.Valor.ToString()); 
                        }
                        
                       
                        Id.Text="";
                    }
                }
            }catch  (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }

        protected void Efectivo_TextChanged(object sender, EventArgs e)
        {
            try
            {
                EfectivoGuardar.Text=Efectivo.Text;

                Efectivo.Text = String.Format("{0:C2}", (Math.Round(float.Parse(EfectivoGuardar.Text), 2)));
                var C =decimal.Parse(EfectivoGuardar.Text)- decimal.Parse(TotalGuardar.Text);
                CambioGuardar.Text=C.ToString();
                Cambio.Text = String.Format("{0:C2}", (Math.Round(float.Parse(C.ToString()), 2)));
            }
            catch (Exception ex)
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

                    if (e.Row.Cells[5].Text=="PA")
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