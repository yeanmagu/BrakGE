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
    public partial class FacturasPendientesPorPagar : PaginaBase
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
                    Session["Titulo"] = "Facturas Pendientes Por Pagar";
                    FillDocumentos();

                    FillVendedores();
                    FillBodegas();
                    FillMovimiento();
                    FillFormaDePago();
                    
                    ListDeta = new List<BllDetalleDocumento>();
                    idDet = 0;
                   
                    
                       
                            pnlGrid.Visible = true;
                            pnlDatos.Visible = false;
                       
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
        protected void FillFormaDePago()
        {
            try
            {
                FormaDePago.DataSource = BllFormaDePago.ToList();
                FormaDePago.DataTextField = "Descripcion";
                FormaDePago.DataValueField = "Id";
                FormaDePago.DataBind();
                FormaDePago.Items.Insert(0, new ListItem("Seleccione Forma de Pago", "0"));
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Log.EscribirTraza(ex.Message);
            }
        }
        protected void FillMovimiento()
        {
            try
            {
                TipoMovimiento.DataSource = BllTipoMovimiento.ToListBySw(4);
                TipoMovimiento.DataTextField = "Descripcion";
                TipoMovimiento.DataValueField = "Id";
                TipoMovimiento.DataBind();
                TipoMovimiento.Items.Insert(0, new ListItem("Seleccione Movimiento", "0"));
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Log.EscribirTraza(ex.Message);
            }
        }
        protected void FillBodegas()
        {
            try
            {
                Bodega.DataSource=BllBodega.ToList();
                Bodega.DataTextField="Nombre";
                Bodega.DataValueField="Id";
                Bodega.DataBind();
                Bodega.Items.Insert(0, new ListItem("Seleccione Bodega","0"));
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Log.EscribirTraza(ex.Message);
            }
        }
        private void FillDocumentos()
        {
            try
            {
                Session["ListDocumentos"] = BllDocumentos.ToListPP(4);
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
                    TxtId.Text = Row.Id.ToString();
                    Bodega.SelectedValue = Row.IdBodega.ToString();
                    
                    FormaDePago.SelectedValue = Row.IdFormaPago.ToString();
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
                if (e.CommandName == "Aprobar")
                {
                    BllDocumentos Row = new BllDocumentos();

                    List<BllDocumentos> Rows = new List<BllDocumentos>();

                    Rows = (List<BllDocumentos>)Session["ListDocumentos"];


                    if (Rows.Exists(b => b.Id.ToString() == e.CommandArgument.ToString()))
                    {
                        Row = Rows.Where(b => b.Id.ToString() == e.CommandArgument.ToString()).First();
                        
                          
                            BuscarDatosFact(Row);
                            TxtId.Text=Row.Id.ToString();
                            TipoMovimiento.SelectedValue = Row.IdTipoMovimiento.ToString();
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

        
        protected void Modificar()
        {
            try
            {
                if (BllDocumentos.GetById(int.Parse(TxtId.Text)).Id>0)
                {
                    var ObjGrabar = BllDocumentos.GetById(int.Parse(TxtId.Text));
                    ObjGrabar.EstadoPago="PA";
                    ObjGrabar.FechaSistema=DateTime.Now;
                    ObjGrabar.Notas=Motivo.Text;
                    int r = BllDocumentos.Update(ObjGrabar);
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
                
                    Modificar();
                
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
     
       
        //funcion para guardar la imagen de la empresa

        protected void Departamento_SelectedIndexChanged(object sender, EventArgs e)
        {
          
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

                    //_Total += (Convert.ToDecimal(DataBinder.Eval(e.Row.DataItem, "Precio")) * Convert.ToInt16(DataBinder.Eval(e.Row.DataItem, "Cantidad")));
                    //_SubTotal += (Convert.ToDecimal(DataBinder.Eval(e.Row.DataItem, "Precio")) * Convert.ToInt16(DataBinder.Eval(e.Row.DataItem, "Cantidad")));
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
     

        protected void DeleteItem_Command(object sender, CommandEventArgs e)
        {
            try
            {
                var Lis = (List<BllDetalleDocumento>)Session["ListDeta"];
                foreach (var item in Lis)
                {
                    if (item.IdProducto.ToString()==(e.CommandArgument.ToString()))
                    {
                       Lis.Remove(item);
                       Session["ListDeta"] = Lis;
                      
                       Detalle.DataSource = (List<BllDetalleDocumento>)Session["ListDeta"];
                       Detalle.DataBind();
                        return ;
                    }
                }

                
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

 

        protected void Detalle_RowEditing(object sender, GridViewEditEventArgs e)
        {
            Detalle.EditIndex=e.NewEditIndex;
            Detalle.DataSource = (List<BllDetalleDocumento>)Session["ListDeta"];
            Detalle.DataBind();
            
        }

        protected void Detalle_RowCancelingEdit(object sender, GridViewCancelEditEventArgs e)
        {
            Detalle.EditIndex = -1;
            Detalle.DataSource = (List<BllDetalleDocumento>)Session["ListDeta"];
            Detalle.DataBind();
        }

        protected void Detalle_RowUpdating(object sender, GridViewUpdateEventArgs e)
        {
            TextBox Pre = (TextBox)Detalle.Rows[e.RowIndex].FindControl("TxtPrecio");
            TextBox c = (TextBox)Detalle.Rows[e.RowIndex].FindControl("TxtCantidad");
            TextBox ce = (TextBox)Detalle.Rows[e.RowIndex].FindControl("TxtCantExistente");
            TextBox id = (TextBox)Detalle.Rows[e.RowIndex].FindControl("TxtIdProducto");
            TextBox Des = (TextBox)Detalle.Rows[e.RowIndex].FindControl("TxtDsctoPorcentaje");
            TextBox Descto = (TextBox)Detalle.Rows[e.RowIndex].FindControl("txtDescuento");
           var Descuento = (Convert.ToDecimal(Des.Text) / 100) * (Convert.ToDecimal(Pre.Text)) * Convert.ToInt16(c.Text);
          
            GridViewRow row = (GridViewRow)c.NamingContainer;
            if (int.Parse(c.Text) <= int.Parse(ce.Text))
            {
                UpdateItem(int.Parse(id.Text), int.Parse(c.Text), int.Parse(Des.Text),Descuento);
                Detalle.EditIndex = -1;
                Detalle.DataSource = (List<BllDetalleDocumento>)Session["ListDeta"];
                Detalle.DataBind();
            }
            else
            {
                Msj1.Text = "Cantidad Despachada No Puede ser Mayor  a la Cantidad existente!!";
                Type1.Text = "warning";
            }

        }

        protected void UpdateItem(int idProd, int canti, int des,decimal Descuento)
        {
            try
            {
                var Lis = (List<BllDetalleDocumento>)Session["ListDeta"];
                foreach (var item in Lis)
                {
                    if (item.IdProducto.Equals(idProd))
                    {
                        item.Descuento=Descuento;
                        item.DsctoPorcentaje = des;
                        item.Cantidad = canti;
                    }
                }

                Session["ListDeta"] = Lis;
            }
            catch (Exception ex)
            {

                throw ex;
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
        protected void Bodega_SelectedIndexChanged(object sender, EventArgs e)
        {
            try
            {
                if (Bodega.SelectedValue!="0")
                {
                    TipoMovimiento.DataSource = BllTipoMovimiento.ToListBySw(1,int.Parse(Bodega.SelectedValue));
                    TipoMovimiento.DataTextField = "Descripcion";
                    TipoMovimiento.DataValueField = "Id";
                    TipoMovimiento.DataBind();
                    
                }
                else
                {
                    TipoMovimiento.DataSource = BllTipoMovimiento.ToListBySw(1);
                    TipoMovimiento.DataTextField = "Descripcion";
                    TipoMovimiento.DataValueField = "Id";
                    TipoMovimiento.DataBind();
                    TipoMovimiento.Items.Insert(0, new ListItem("Seleccione Movimiento", "0"));
                }
            }
            catch (Exception ex)
            {
                
                Log.EscribirError(ex);
            }
        }
        protected void Imprimir_Click(object sender, EventArgs e)
        {
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Print('" + TxtId.Text + "');", true);
        }
        
     

        protected void GridDocumentos_DataBound(object sender, EventArgs e)
        {
            
        }

        protected void GridDocumentos_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            try
            {
                if (e.Row.RowType == DataControlRowType.DataRow)
                {
                    var Btn = e.Row.FindControl("Editar") as System.Web.UI.WebControls.Button;
                    if (e.Row.Cells[4].Text == "Devuelto")
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

    }

}