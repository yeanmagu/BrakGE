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
    public partial class Reclamos : PaginaBase
    {
        private static List<BllDetalleDocumento> ListDeta;
        private int idDet;
        protected void Page_Load(object sender, EventArgs e)
        {
           
            try
            {
                if (!IsPostBack)
                {
                    Fecha.Text = DateTime.Now.ToShortDateString();
                    Session["Titulo"] = "Reclamos";
                    FillDocumentos();

                    FillVendedores();
                  
                    ListDeta = new List<BllDetalleDocumento>();
                    idDet = 0;
                   
                    var Id=Request.QueryString.Get("Id");
                    if (Id!=null)
                    {
                        var Row = BllDocumentos.GetById(int.Parse(Id.ToString()));
                        BuscarDatosFact(Row);
                        
                        TxtId.Text="";
                      
                        pnlGrid.Visible = false;
                        pnlDatos.Visible = true;
                    }
                    else
                    {
                        if (Usuario.id_rol == 10)
                        {
                            pnlGrid.Visible = true;
                            pnlDatos.Visible = false;
                        }
                        else
                        {
                            pnlGrid.Visible = false;
                            pnlDatos.Visible = true;
                        }
                       
                    }
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
                var rec=new BllReclamacion();
                Session["ListReclamos"] = rec.ToList();
                if (!string.IsNullOrEmpty(Session["ListReclamos"].ToString()))
                {
                    GridDocumentos.DataSource = (List<BllReclamacion>)Session["ListReclamos"];
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
  
        protected void fillDeta(List<BllDetalleDocumento> lista)
        {
            try
            {
                Session["ListDeta"] = lista;
                if (!string.IsNullOrEmpty(Session["ListDeta"].ToString()))
                {
                    Detalle.DataSource = (List<BllDetalleDocumento>)Session["ListDeta"];
                    Detalle.DataBind();
                }
            }
            catch (Exception ex)
            {
               Log.EscribirError(ex);
            }
        }
        private void BuscarDatosFact(BllDocumentos Row)
        {
            try
            {
                var Cli = BllPersonas.GetById(Row.IdCliente);
                    IdDocumentoAnterior.Text = Row.Id.ToString();
                    BuscarCliente(Cli);
                 
                    TxtBodega.Text = Row.Bodega;
                    
                    TxtFormaDePago.Text = Row.FormaPago;
                    TxtTipoMovimiento.Text=Row.TipoMovimiento;
                    Fecha.Text = Row.FechaCreacion.ToShortDateString();
                    
                    //Estado.Checked = Row.Estado;
                    ListDeta = BllDetalleDocumento.ToListById(Row.Id);
                    foreach (var item in ListDeta)
                    {
                        item.PrecioCompra = item.Precio;
                        item.Subtotal = item.Precio + (item.Precio * (item.IvaPorcentaje / 100));
                        var inv = new BllInventario();
                        inv = inv.GetById(item.IdProducto, item.IdBodega);

                        item.CantExistente = inv.CantidadDisponible;
                    }
                    fillDeta(ListDeta);
                    TotalGuardar.Text = Row.Total.ToString();
                    TotalSubGuardar.Text = Row.TotalSub.ToString();
                    TotalIvaGuardar.Text = Row.TotalIva.ToString();
                    Total.Text = String.Format("{0:C2}", Row.Total);
                    TotalSub.Text = String.Format("{0:C2}", Row.TotalSub);
                    TotalIva.Text = String.Format("{0:C2}", Row.TotalIva);
                    TotalDescuentosGuardar.Text = Row.Total_Descuento.ToString();                    
                    TotalDescuentos.Text = String.Format("{0:C2}",Row.Total_Descuento);
                    Vendedor.SelectedValue = Row.IdVendedor.ToString();
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Msj1.Text = Constantes.ErrorAlConsultarDatos;
                Type1.Text = "warning";
            }
        }
        protected void BtnSelect_Command(object sender, CommandEventArgs e)
        {
            try
            {
                if (e.CommandName == "VerDatos")
                {
                    var Row = new BllReclamacion();

                    List<BllReclamacion> Rows = new List<BllReclamacion>();

                    Rows = (List<BllReclamacion>)Session["ListReclamos"];


                    if (Rows.Exists(b => b.Id.ToString() == e.CommandArgument.ToString()))
                    {
                        Row = Rows.Where(b => b.Id.ToString() == e.CommandArgument.ToString()).First();
                       
                            btnGuardar.Visible = false;

                        var Doc=BllDocumentos.GetById(Row.IdFactura.Value);
                            BuscarDatosFact(Doc);
                            TxtId.Text = Row.Id.ToString();
                          Motivo.Text=Row.Observacion;
                            btnGuardar.Visible = false;
                            if (Row.Estado=="ACTIVO")
                            {
                                CerrarReclamo.Visible=true;
                                Devolver.Visible=true;
                            }
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

        private void GuardarTipo()
        {
            try
            {
                using (TransactionScope scope = new TransactionScope())
                {
                    if ((Documento.Text) != "")
                    {
                        var ObjGrabar = new BllReclamacion();

                        ObjGrabar.IdFactura = int.Parse(IdDocumentoAnterior.Text);
                        ObjGrabar.Observacion = Motivo.Text;
                        ObjGrabar.IdUsuario = int.Parse(Usuario.id_usuario.ToString());
                        ObjGrabar.FechaReclamacion = DateTime.Now;

                        ObjGrabar.Estado = "ACTIVO";
                       
                        int r = ObjGrabar.Add(ObjGrabar);
                        if (r > 0)
                        {

                            TxtId.Text = r.ToString();

                           var doc =BllDocumentos.GetById(ObjGrabar.IdFactura.Value);
                            doc.IdEstadoDocumento=1004;
                            BllDocumentos.Update(doc);
                            Msj1.Text = Constantes.Guardado;
                            Type1.Text = "success";
                            FillDocumentos();

                            

                        }
                        else
                        {
                            Msj1.Text = Constantes.ErrorAlGuardar;
                            Type1.Text = "error";

                        }
                    }
                    else
                    {
                        Msj1.Text = "Por Favor Agregue un cliente o Proveedor";
                        Type1.Text = "error";
                        Documento.Focus();
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
        protected void Modificar()
        {
            try
            {
                var ObjGrabar = new BllReclamacion();
                if (ObjGrabar.GetById(int.Parse(TxtId.Text)).Id > 0)
                {
                 
                    ObjGrabar=ObjGrabar.GetById(int.Parse(TxtId.Text));
               
                    ObjGrabar.Observacion = Motivo.Text;
                    ObjGrabar.IdUsuario = int.Parse(Usuario.id_usuario.ToString());
                    ObjGrabar.FechaReclamacion = DateTime.Now;

                    ObjGrabar.Estado = "ACTIVO";

                    int r = ObjGrabar.Update(ObjGrabar);
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
                Session["ListDocumentos"] = BllDocumentos.ToList(TxtBusqueda.Text.Trim());
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

        protected void GridDocumentos_PageIndexChanging(object sender, GridViewPageEventArgs e)
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
            CerrarReclamo.Visible = false;
            Devolver.Visible = false;
            Detalle.DataSource = null;
            Detalle.DataBind();
           
            LimpiarControles(pnlDatos.Controls);
        }

        protected void Cerrar_ServerClick(object sender, EventArgs e)
        {
            Response.Redirect("Default.aspx");
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
    

       
       
        private decimal _Total = 0;
        private decimal _Descuento = 0;
        private decimal _SubTotal = 0;
        private decimal _Iva = 0;
        private int cant = 0;
        protected void Detalle_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            try
            {
                if (e.Row.RowType == DataControlRowType.DataRow)
                {
                    var Sub = DataBinder.Eval(e.Row.DataItem, "Subtotal");

                    
                    _SubTotal += (Convert.ToDecimal(DataBinder.Eval(e.Row.DataItem, "Precio")) * Convert.ToInt16(DataBinder.Eval(e.Row.DataItem, "Cantidad")));
                    _Iva += (Convert.ToDecimal(DataBinder.Eval(e.Row.DataItem, "IvaPorcentaje")) / 100) * (Convert.ToDecimal(DataBinder.Eval(e.Row.DataItem, "Precio"))) * Convert.ToInt16(DataBinder.Eval(e.Row.DataItem, "Cantidad"));
                    _Descuento += (Convert.ToDecimal(DataBinder.Eval(e.Row.DataItem, "DsctoPorcentaje")) / 100) * (Convert.ToDecimal(DataBinder.Eval(e.Row.DataItem, "Precio"))) * Convert.ToInt16(DataBinder.Eval(e.Row.DataItem, "Cantidad"));
                    //_Total += (Convert.ToDecimal(DataBinder.Eval(e.Row.DataItem, "Subtotal")) * Convert.ToInt16(DataBinder.Eval(e.Row.DataItem, "Cantidad")));
                    _Total += (Convert.ToDecimal(DataBinder.Eval(e.Row.DataItem, "Subtotal")) * Convert.ToInt16(DataBinder.Eval(e.Row.DataItem, "Cantidad")))-(Convert.ToDecimal(DataBinder.Eval(e.Row.DataItem, "DsctoPorcentaje")) / 100) * (Convert.ToDecimal(DataBinder.Eval(e.Row.DataItem, "Precio"))) * Convert.ToInt16(DataBinder.Eval(e.Row.DataItem, "Cantidad"));
                   // _Total +=_SubTotal-_Iva+_Descuento;
                    cant += Convert.ToInt16(DataBinder.Eval(e.Row.DataItem, "Cantidad"));
                    Sub = (Convert.ToDecimal(DataBinder.Eval(e.Row.DataItem, "Subtotal")) * Convert.ToInt16(DataBinder.Eval(e.Row.DataItem, "Cantidad"))).ToString();
                   
                   //_Total = _Total - _Descuento;
                }
                else if (e.Row.RowType == DataControlRowType.Footer)
                {
                    e.Row.Cells[0].Text = "TOTAL:";
                    e.Row.Cells[6].Text = cant.ToString();
                    e.Row.Cells[7].Text = String.Format("{0:C2}", _Total);
                    e.Row.Cells[3].Text = String.Format("{0:C2}", _Iva);
                    e.Row.Cells[7].HorizontalAlign = HorizontalAlign.Right;
                    e.Row.Font.Bold = true;
                    if (e.Row.RowType == DataControlRowType.Footer)
                    {
                        e.Row.Cells[7].Text = String.Format("{0:C2}", _Total);

                    }
                    TotalGuardar.Text = _Total.ToString();
                    TotalSubGuardar.Text = _SubTotal.ToString();
                    TotalIvaGuardar.Text = _Iva.ToString();
                    TotalDescuentosGuardar.Text = _Descuento.ToString();
                    Total.Text = String.Format("{0:C2}", _Total);
                    TotalSub.Text = String.Format("{0:C2}", _SubTotal);
                    TotalIva.Text = String.Format("{0:C2}", _Iva);
                    TotalDescuentos.Text = String.Format("{0:C2}", _Descuento);
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
       
        private void FillVendedores()
        {
            try
            {
                var rol = new Usuarios();
                if (Usuario.id_rol == 10)
                {
                    Vendedor.DataSource = rol.GetUsuariosXidRol(3, Usuario.id_usuario);
                }
                else if (Usuario.id_rol == 3)
                {
                    Vendedor.DataSource = rol.GetUsuariosXidRol(Usuario.id_usuario);
                }

                Vendedor.DataTextField = "Nombre";
                Vendedor.DataValueField = "Id";
                Vendedor.DataBind();
                Vendedor.SelectedValue = Usuario.id_usuario.ToString();
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorAlCargarCombos + " Vendedores " + ex.Message;
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }
 
        protected void Imprimir_Click(object sender, EventArgs e)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Print('" + TxtId.Text + "');", true);
        }
        

        protected void GridDocumentos_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            try
            {
                if (e.Row.RowType == DataControlRowType.DataRow)
                {
                    var Btn = e.Row.FindControl("Ver") as System.Web.UI.WebControls.Button;
                    if (e.Row.Cells[4].Text == "INACTIVO")
                    {
                        Btn.Visible=false;
                        Btn.Enabled=false;

                    }
                }
            }
            catch (Exception ex)
            {
                Log.EscribirTraza(ex.Data+ " "+ ex.Source +" "+ ex.Message);
            }
        }

        protected void CerrarReclamo_Click(object sender, EventArgs e)
        {
            try
            {
                var ObjGrabar = new BllReclamacion();
                if (ObjGrabar.GetById(int.Parse(TxtId.Text)).Id > 0)
                {

                    ObjGrabar = ObjGrabar.GetById(int.Parse(TxtId.Text));
                    ObjGrabar.Estado = "INACTIVO";

                    int r = ObjGrabar.Update(ObjGrabar);
                    if (r > 0)
                    {
                        FillDocumentos();
                       

                        var doc = BllDocumentos.GetById(ObjGrabar.IdFactura.Value);
                        doc.IdEstadoDocumento = 1003;
                        BllDocumentos.Update(doc);
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

        protected void Devolver_Click(object sender, EventArgs e)
        {
            try
            {
                var ObjGrabar = new BllReclamacion();
                if (ObjGrabar.GetById(int.Parse(TxtId.Text)).Id > 0)
                {

                    ObjGrabar = ObjGrabar.GetById(int.Parse(TxtId.Text));
                    var doc = BllDocumentos.GetById(ObjGrabar.IdFactura.Value);
                    if (doc.IdEstadoDocumento==1004)
                    {
                           Response.Redirect("NotasDeDevolucion.aspx?Id=" +doc.Id.ToString(),false);
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


    }

}