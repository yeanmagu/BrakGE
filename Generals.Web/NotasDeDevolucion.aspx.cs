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
    public partial class NotasDeDevolucion : PaginaBase
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
                    Session["Titulo"] = "Notas De Devolucion";
                    FillDocumentos();

                    FillVendedores();
                    FillBodegas();
                    FillMovimiento();
                    FillFormaDePago();
                    
                    ListDeta = new List<BllDetalleDocumento>();
                    idDet = 0;
                   
                    var Id=Request.QueryString.Get("Id");
                    if (Id!=null)
                    {
                        var Row = BllDocumentos.GetById(int.Parse(Id.ToString()));
                        BuscarDatosFact(Row);
                        IdDocumentoAnterior.Text=TxtId.Text;
                        TxtId.Text="";
                        TipoMovimiento.DataSource = BllTipoMovimiento.ToListBySw(2002, int.Parse(Bodega.SelectedValue));
                        TipoMovimiento.DataTextField = "Descripcion";
                        TipoMovimiento.DataValueField = "Id";
                        TipoMovimiento.DataBind();
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
                TipoMovimiento.DataSource = BllTipoMovimiento.ToListBySw(2002);
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
                Session["ListDocumentos"] = BllDocumentos.ToListBySw(2002);
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
                        if (Row.EstadoDocumento == "Activo")
                        {
                            btnGuardar.Visible = false;
                          
                          
                            BuscarDatosFact(Row);
                            TxtId.Text=Row.Id.ToString();
                            TipoMovimiento.SelectedValue = Row.IdTipoMovimiento.ToString();
                            btnGuardar.Visible = false;
                          
                            pnlGrid.Visible = false;
                            pnlDatos.Visible = true;
                        }
                        else
                        {
                            Msj1.Text = "Este Documento esta " + Row.EstadoDocumento;
                            Type1.Text = "warning";
                        }
                       


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
                        BllDocumentos ObjGrabar = new BllDocumentos();

                        ObjGrabar.IdBodega = int.Parse(Bodega.SelectedValue);
                        ObjGrabar.IdCliente = int.Parse(IdCliente.Text);
                        ObjGrabar.IdEmpresa = int.Parse(Session["IdEmpresa"].ToString());
                        ObjGrabar.IdEstadoDocumento = 1;
                        ObjGrabar.FechaCreacion = DateTime.Parse(Fecha.Text);
                        ObjGrabar.IdFormaPago = int.Parse(FormaDePago.SelectedValue);
                        ObjGrabar.IdTipoMovimiento = int.Parse(TipoMovimiento.SelectedValue);
                        ObjGrabar.IdUsuario = int.Parse(Usuario.id_usuario.ToString());
                        ObjGrabar.IdDocumentoAnterior=int.Parse(IdDocumentoAnterior.Text);
                        ObjGrabar.Total = decimal.Parse(TotalGuardar.Text);
                        ObjGrabar.Total_Descuento = decimal.Parse(TotalDescuentosGuardar.Text);
                        ObjGrabar.TotalSub = decimal.Parse(TotalSubGuardar.Text);
                        ObjGrabar.TotalIva = decimal.Parse(TotalIvaGuardar.Text);
                        ObjGrabar.FechaVencimiento=ObjGrabar.FechaCreacion.AddDays(30);
                        ObjGrabar.IdVendedor = int.Parse(Vendedor.SelectedValue);
                        ObjGrabar.Notas=Motivo.Text;
                        int r = BllDocumentos.Add(ObjGrabar);
                        if (r > 0)
                        {

                            TxtId.Text = r.ToString();

                            foreach (var item in ListDeta)
                            {
                                var Prod = BllItem.GetById(item.IdProducto);
                                var it = new BllInventario();
                                if (item.Cantidad > 0)
                                {
                                    item.IdDocumento = r;

                                  
                                    BllDetalleDocumento.Add(item);
                                    var tipoMov = BllTipoMovimiento.GetById(int.Parse(TipoMovimiento.SelectedValue));
                                    
                                    it = it.GetById(Prod.Id, (ObjGrabar.IdBodega));
                                    if (it.Id > 0)
                                    {
                                        if (tipoMov.IdSw == 2)
                                        {
                                            it.CantidadDisponible += item.Cantidad;
                                            if (item.PrecioCompra != Prod.PrecioCompra)
                                            {
                                                Prod.PrecioCompra = item.PrecioCompra;

                                            }

                                        }
                                        else if (tipoMov.IdSw == 3)
                                        {
                                            if (it.CantidadDisponible <= item.Cantidad)
                                            {
                                                it.CantidadDisponible -= item.Cantidad;
                                            }
                                            else
                                            {
                                                Msj1.Text = "La Cantidad del Producto " + Prod.Descripcion + " ingresada supera la existente ";
                                                Type1.Text = "warning";
                                                TxtId.Text = "";
                                                return;
                                            }

                                        }
                                        else if (tipoMov.IdSw == 4)
                                        {

                                        }
                                        it.Update(it);
                                    }
                                    else
                                    {
                                        it.IdItem = Prod.Id;
                                        it.IdBodega = ObjGrabar.IdBodega;
                                        it.CantidadDespachada = item.Cantidad;
                                        it.CantidadAnterior = it.CantidadDisponible;
                                        if (tipoMov.IdSw == 2)
                                        {
                                            it.CantidadDisponible += item.Cantidad;
                                        }
                                        //else
                                        //{
                                        //    Msj1.Text = "La Cantidad del Producto " + Prod.Descripcion + " ingresada supera la existente ";
                                        //    Type1.Text = "warning";
                                        //    TxtId.Text = "";
                                        //    return;
                                        //}
                                        it.Add(it);

                                    }
                                }
                                var Doc = BllDocumentos.GetById(int.Parse(IdDocumentoAnterior.Text));
                               
                                Doc.NotasInternas = Motivo.Text;
                                Doc.IdEstadoDocumento = 2;
                                var re = BllDocumentos.Update(Doc);
                                if (re > 0)
                                {
                                    var Deta = BllDetalleDocumento.ToListById(Doc.Id);

                                    foreach (var item2 in Deta)
                                    {
                                        var Inv = new BllInventario();
                                        Inv = Inv.GetById(item2.IdProducto, Doc.IdBodega);
                                        Inv.CantidadAnterior = Inv.CantidadDisponible;
                                        Inv.CantidadDisponible += item2.Cantidad;
                                        Inv.Update(Inv);
                                    }
                                    Metodos.divMensaje(Constantes.Succes, Constantes.Guardado, Panel1, Constantes.Ok);
                                    FillDocumentos();
                                }
                                //Log.EscribirTraza("Inventario de Producto " + Prod.Descripcion + " Cantidad Existente actual :" + it.CantidadDisponible.ToString() + "  del Documento  " + ObjGrabar.TipoMovimiento + " Nro." + ObjGrabar.Id.ToString());
                            }
                            Msj1.Text = Constantes.Guardado;
                            Type1.Text = "success";
                            FillDocumentos();

                            //LimpiarControles(pnlDatos.Controls);
                            //pnlGrid.Visible = true;
                            //pnlDatos.Visible = false;

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
                if (BllDocumentos.GetById(int.Parse(TxtId.Text)).Id>0)
                {
                    var ObjGrabar = BllDocumentos.GetById(int.Parse(TxtId.Text));
                    ObjGrabar.IdBodega = int.Parse(Bodega.SelectedValue);
                    ObjGrabar.IdCliente = int.Parse(IdCliente.Text);
                    ObjGrabar.IdEmpresa = int.Parse(Session["IdEmpresa"].ToString());
                    ObjGrabar.IdEstadoDocumento = 1;
                    ObjGrabar.IdFormaPago = int.Parse(FormaDePago.SelectedValue);
                    ObjGrabar.IdTipoMovimiento = int.Parse(TipoMovimiento.SelectedValue);
                    ObjGrabar.IdUsuario = int.Parse(Usuario.id_usuario.ToString());
                    ObjGrabar.Total = decimal.Parse(TotalGuardar.Text);
                    ObjGrabar.Total_Descuento = decimal.Parse(TotalDescuentosGuardar.Text);
                    ObjGrabar.TotalSub = decimal.Parse(TotalSubGuardar.Text);
                    ObjGrabar.TotalIva = decimal.Parse(TotalIvaGuardar.Text);
                    ObjGrabar.IdVendedor = int.Parse(Vendedor.SelectedValue);
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
        protected void Documento_TextChanged(object sender, EventArgs e)
        {
            try
            {
                //if (Documento.Text != "")
                //{
                //    var Cli = BllPersonas.GetByDocument(Documento.Text);
                //    if (Cli.Id > 0)
                //    {
                //        BuscarCliente(Cli);
                //    }
                //    else
                //    {
                //        Msj1.Text = "Cliente No existe";
                //        Type1.Text = "error";

                //    }

                //}
                ModalPopupExtender1.Show();
                
            }
            catch (Exception ex)
            {

                Log.EscribirError(ex);
                Log.EscribirTraza(ex.Message);
            }
        }

       
        //funcion para guardar la imagen de la empresa

        protected void Departamento_SelectedIndexChanged(object sender, EventArgs e)
        {
          
        }

        protected void btnPopUp_Click(object sender, EventArgs e)
        {
            ModalPopupExtender1.Show();
        }

        protected void GuardarCliente_Click(object sender, EventArgs e)
        {
            if (IdCliente.Text=="")
            {
                //GuardarCliente();
            }
        }

        protected void CloseCliente_Click(object sender, EventArgs e)
        {
            ModalPopupExtender1.Hide();
        }

     
        protected void Button2_Click(object sender, EventArgs e)
        {
            ModalItems.Hide();
        }

        protected void Items_Click(object sender, EventArgs e)
        {
            ModalItems.Show();
        }

        //protected void SelectItem_Command(object sender, CommandEventArgs e)
        //{
        //    try
        //    {
        //        if (e.CommandName != "Page")
        //        {
        //            BllItem Row = new BllItem();
        //            List<BllItem> Rows = new List<BllItem>();
        //            Rows = (List<BllItem>)Session["ListItem"];
        //            if (Rows.Exists(b => b.Id.ToString() == e.CommandArgument.ToString()))
        //            {
        //                Row = Rows.Where(b => b.Id.ToString() == e.CommandArgument.ToString()).First();
        //                IdItem.Text = Row.Id.ToString();
        //                CodigoItem.Text=Row.Codigo;
        //                NOmbreItem.Text=Row.Descripcion;
        //                CategoriaItem.Text=Row.DescSubgrupo;
        //                PrecioItem.Text=Row.Precio.ToString();
        //                ModeloItem.Text=Row.Modelo;
        //                TamañoItem.Text=Row.Talla;
        //                CantidadExistente.Text = Row.CantidadExistente.ToString();
        //                IvaItem.Text = Row.PorcentajeIva.ToString();
        //                var inv = new BllInventario();
        //                inv = inv.GetById(Row.Id, int.Parse(Bodega.SelectedValue));
        //                var deta = new BllDetalleDocumento();
        //                idDet++;
        //                deta.ID = idDet;
        //                deta.IdProducto = int.Parse(IdItem.Text);
        //                deta.IdBodega = int.Parse(Bodega.SelectedValue);
        //                deta.Precio = Row.Precio;
        //                deta.PrecioCompra=Row.PrecioCompra;
        //                deta.IvaPorcentaje = int.Parse(IvaItem.Text);
        //                deta.IdDocumento = 0;
                       
                        
        //                deta.CantExistente = inv.CantidadDisponible;
        //                deta.CostoUnidad = 0;

        //                //deta.Subtotal = deta.Precio + ((decimal.Parse(deta.IvaPorcentaje.ToString()) / 100) * deta.Precio);
        //                deta.DsctoPorcentaje = 0;
        //                deta.CantExistente = inv.CantidadDisponible;
        //                deta.CostoUnidad = 0;

        //                deta.Subtotal = deta.Precio + ((decimal.Parse(deta.IvaPorcentaje.ToString()) / 100) * deta.Precio) - ((decimal.Parse(deta.DsctoPorcentaje.ToString()) / 100) * deta.Precio); ;

        //                deta.Descuento = 0;
        //                deta.Producto = NOmbreItem.Text;
        //                deta.Producto = NOmbreItem.Text;
        //                ListDeta.Add(deta);
        //                fillDeta(ListDeta);
        //                CleanControl(PanelItem.Controls);
        //                //ModalItems.Hide();
        //            }
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        Log.EscribirTraza(ex.Message);
        //       Log.EscribirError(ex);
        //    }
        //}
        
        //protected void AddItem_Click(object sender, EventArgs e)
        //{
        //    try
        //    {
        //        var deta = new BllDetalleDocumento();
        //        idDet ++;
        //        deta.ID=idDet;
        //        deta.IdProducto=int.Parse(IdItem.Text);
        //        deta.IdBodega=int.Parse(Bodega.SelectedValue);
        //        deta.Precio=decimal.Parse(PrecioItem.Text);
        //        deta.IvaPorcentaje=int.Parse(IvaItem.Text);
        //        deta.IdDocumento=0;
        //        deta.Cantidad=int.Parse(Cantidad.Text);
        //        deta.CostoUnidad=0;
        //        deta.Descuento=0;
        //        deta.Producto=NOmbreItem.Text;
        //        var exis= new BllInventario();
        //        deta.CantExistente=exis.GetById(deta.IdProducto,deta.IdBodega).CantidadDisponible;
        //        ListDeta.Add(deta);
        //        fillDeta(ListDeta);
        //        CleanControl(PanelItem.Controls);
        //    }
        //    catch (Exception ex)
        //    {
        //        Log.EscribirTraza(ex.Message);
        //        Log.EscribirError(ex);
        //    }
        //}

        //protected void ItemBusqueda_TextChanged(object sender, EventArgs e)
        //{
        //    if (ItemBusqueda.Text!="")
        //    {
        //        Session["ListItem"] = BllItem.ToList(ItemBusqueda.Text);
        //        if (!string.IsNullOrEmpty(Session["ListItem"].ToString()))
        //        {
        //            GridItem.DataSource = (List<BllItem>)Session["ListItem"];
        //            GridItem.DataBind();
        //        }
                
        //    }
            
        //}
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
        protected void SearchItem_ServerClick(object sender, EventArgs e)
        {
            ModalItems.Show();
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

        protected void CerrarAnulacion_Click(object sender, EventArgs e)
        {
            ModalAn.Hide();
        }

        protected void BtnAnular_Command(object sender, CommandEventArgs e)
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
                         NotaAnuladas.Text=Row.NotasInternas;
                        TxtId.Text = Row.Id.ToString();
                        
                        ModalAn.Show();
                    }
                }
            }
            catch (Exception ex)
            {
                Log.EscribirTraza(ex.Message);
                Log.EscribirError(ex);
            }
        }

        protected void Anular_Click(object sender, EventArgs e)
        {
            try
            {
                var Doc = BllDocumentos.GetById(int.Parse(TxtId.Text));
                string strMensaje = string.Format("Nota {1}{0}Descripción: {2}{0}Usuario: {3}", Environment.NewLine, NotaAnuladas.Text, NotaAnula.Text, Usuario.username + "   " + DateTime.Now.ToString());
                Doc.NotasInternas = strMensaje;
                Doc.IdEstadoDocumento = 2;
                var r = BllDocumentos.Update(Doc);
                if (r > 0)
                {
                    var Deta = BllDetalleDocumento.ToListById(Doc.Id);

                    foreach (var item in Deta)
                    {
                        var Inv = new BllInventario();
                        Inv = Inv.GetById(item.IdProducto, Doc.IdBodega);
                        Inv.CantidadAnterior = Inv.CantidadDisponible;
                        Inv.CantidadDisponible -= item.Cantidad;
                        Inv.Update(Inv);
                    }
                    Metodos.divMensaje(Constantes.Succes, Constantes.Guardado, Panel1, Constantes.Ok);
                    FillDocumentos();
                }
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Log.EscribirTraza(ex.Message);
            }
        }

        protected void CancelarCliente_Click(object sender, EventArgs e)
        {

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
    }

}