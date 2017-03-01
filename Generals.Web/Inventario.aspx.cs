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
    public partial class Inventario : PaginaBase
    {
        private static List<BllDetalleDocumento> ListDeta;
        private int idDet;
        protected void Page_Load(object sender, EventArgs e)
        {
           
            try
            {
                if (!IsPostBack)
                {
                    //ValidarAutorizacion();
                    Fecha.Text=DateTime.Now.ToShortDateString();
                    Session["Titulo"] = "Gestion De  Inventario";
                    FillDocumentos();
                    if (Usuario.id_rol==10)
                    {
                        pnlGrid.Visible = true;
                        pnlDatos.Visible = false;
                    }
                    else
                    {
                        pnlGrid.Visible = false;
                        pnlDatos.Visible = true;
                    }
                   
                    
                    FillBodegas();
                    FillMovimiento();
                    FillFormaDePago();
                    FillTipoDocumento();
                    FillTipoPersona();
                 FillItem();
                    FillTipoDocumento();
                    FillCiudad(0);
                    FillDepartamento();
                    ListDeta=new List<BllDetalleDocumento>();
                    idDet=0;
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
                TipoMovimiento.DataSource = BllTipoMovimiento.ToListBySw(2);
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
                Session["ListDocumentos"] = BllDocumentos.ToListBySw(2);
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
                    CmbCiudad.DataSource = BllMunicipio.ToList();
                }
                else
                {
                    CmbCiudad.DataSource = BllMunicipio.ToListByDpto(IdDpto);
                }

                CmbCiudad.DataTextField = "Nombre";
                CmbCiudad.DataValueField = "Id";
                CmbCiudad.DataBind();
                CmbCiudad.Items.Insert(0, new ListItem("Seleccione Ciudad", "0"));
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorAlCargarCombos + " Tipo Persona";
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
                        TxtId.Text = Row.Id.ToString();
                        var Cli = BllPersonas.GetById(Row.IdCliente);

                        BuscarCliente(Cli);
                        Bodega.SelectedValue=Row.IdBodega.ToString();
                        TipoMovimiento.SelectedValue=Row.IdTipoMovimiento.ToString();
                        FormaDePago.SelectedValue=Row.IdFormaPago.ToString();
                        Fecha.Text=Row.FechaCreacion.ToShortDateString();
                        //Estado.Checked = Row.Estado;
                        var Deta = BllDetalleDocumento.ToListById(Row.Id);
                        fillDeta(Deta);
                        TotalGuardar.Text = Row.Total.ToString();
                        TotalSubGuardar.Text = Row.TotalSub.ToString();
                        TotalIvaGuardar.Text = Row.TotalIva.ToString();
                        Total.Text = String.Format("{0:C2}", (Math.Round(float.Parse(Row.Total.ToString()), 2)));
                        TotalSub.Text = String.Format("{0:C2}", (Math.Round(float.Parse(Row.TotalSub.ToString()), 2)));
                        TotalIva.Text = String.Format("{0:C2}", (Math.Round(float.Parse(Row.TotalIva.ToString()), 2)));
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
                        ObjGrabar.Total = decimal.Parse(TotalGuardar.Text);
                        ObjGrabar.Total_Descuento = decimal.Parse(TotalDescuentosGuardar.Text);
                        ObjGrabar.TotalSub = decimal.Parse(TotalSubGuardar.Text);
                        ObjGrabar.TotalIva = decimal.Parse(TotalIvaGuardar.Text);
                        int r = BllDocumentos.Add(ObjGrabar);
                        if (r > 0)
                        {

                            TxtId.Text = r.ToString();

                            foreach (var item in ListDeta)
                            {
                                item.IdDocumento = r;
                                var Prod = BllItem.GetById(item.IdProducto);
                                BllDetalleDocumento.Add(item);
                                var tipoMov = BllTipoMovimiento.GetById(int.Parse(TipoMovimiento.SelectedValue));
                                var it = new BllInventario();
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
                                            Msj1.Text = "La Cantidad ingresada supera la existente";
                                            Type1.Text = "warning";
                                        }

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
                                    else
                                    {
                                        Msj1.Text = "La Cantidad ingresada supera la existente";
                                        Type1.Text = "warning";
                                        return;
                                    }
                                    it.Add(it);

                                }
                                BllItem.Update(Prod);
                                Log.EscribirTraza("Inventario de Producto " + Prod.Descripcion + " Cantidad Existente actual :" + it.CantidadDisponible.ToString() + "  del Documento  " + ObjGrabar.TipoMovimiento + " Nro." + ObjGrabar.Id.ToString());
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
                if (Documento.Text != "")
                {
                    var Cli = BllPersonas.GetByDocument(Documento.Text);
                    if (Cli.Id > 0)
                    {
                        BuscarCliente(Cli);
                    }
                    else
                    {
                        Msj1.Text = "Cliente No existe";
                        Type1.Text = "error";

                    }

                }
            }
            catch (Exception ex)
            {

                Log.EscribirError(ex);
                Log.EscribirTraza(ex.Message);
            }
        }

        protected void CodigoItem_TextChanged(object sender, EventArgs e)
        {
            try
            {
                var item = BllItem.GetByCodigo(CodigoItem.Text);
                CodigoItem.Text=item.Codigo;
                NOmbreItem.Text=item.Descripcion;
                CategoriaItem.Text=item.DescSubgrupo;
                PrecioItem.Text=item.Precio.ToString();
                ColorItem.Text=item.Color;
                ModeloItem.Text=item.Modelo;
                TamañoItem.Text=item.Talla;
                CantidadExistente.Text=item.CantidadExistente.ToString();
                IvaItem.Text=item.PorcentajeIva.ToString();

            }
            catch (Exception ex)
            {
                Msj1.Text =ex.Message;
                Type1.Text = "error";
                Log.EscribirTraza(ex.Message);
                Log.EscribirError(ex);
            }
        }

        //funcion para guardar la imagen de la empresa

        protected void Departamento_SelectedIndexChanged(object sender, EventArgs e)
        {
            FillCiudad(int.Parse(Departamento.SelectedValue));
        }

        protected void btnPopUp_Click(object sender, EventArgs e)
        {
            ModalPopupExtender1.Show();
        }

        protected void GuardarCliente_Click(object sender, EventArgs e)
        {
            if (IdCliente.Text=="")
            {
                GuardarCliente();
            }
        }

        protected void CloseCliente_Click(object sender, EventArgs e)
        {
            ModalPopupExtender1.Hide();
        }

        private void GuardarCliente()
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
                    ObjGrabar.IdCiudadResidencia = int.Parse(CmbCiudad.SelectedValue);
                    ObjGrabar.Nota = Nota.Text;
                    ObjGrabar.IdTipo = 2;
                    ObjGrabar.IdTipoPersona = int.Parse(TipoPersona.SelectedValue);
                    ObjGrabar.RegimenSimplificado = Regimen.Checked;
                    ObjGrabar.Autoretenedores = AutoRetenedores.Checked;
                    ObjGrabar.AplicaAIU = AUI.Checked;
                    ObjGrabar.RecibirEmail = RecibirEmail.Checked;
                    ObjGrabar.IdEmpresa = int.Parse(Session["IdEmpresa"].ToString());
                    ObjGrabar.IdUsuario = int.Parse(Usuario.id_usuario.ToString());
                    ObjGrabar.Email = Email.Text;
                    ObjGrabar.Direccion = Direccion.Text;

                    //   ObjGrabar.Estado = Estado.Checked;

                    int r = BllPersonas.Add(ObjGrabar);
                    if (r > 0)
                    {

                        IdCliente.Text = r.ToString();
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
        private void FillItem()
        {
            try
            {
                Session["ListItem"] = BllItem.ToList();
                if (!string.IsNullOrEmpty(Session["ListItem"].ToString()))
                {
                    GridItem.DataSource = (List<BllItem>)Session["ListItem"];
                    GridItem.DataBind();
                }
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.errorGeneral;
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }

        protected void Button2_Click(object sender, EventArgs e)
        {
            ModalItems.Hide();
        }

        protected void Items_Click(object sender, EventArgs e)
        {
            ModalItems.Show();
        }

        protected void SelectItem_Command(object sender, CommandEventArgs e)
        {
            try
            {
                if (e.CommandName != "Page")
                {
                    BllItem Row = new BllItem();
                    List<BllItem> Rows = new List<BllItem>();
                    Rows = (List<BllItem>)Session["ListItem"];
                    if (Rows.Exists(b => b.Id.ToString() == e.CommandArgument.ToString()))
                    {
                        Row = Rows.Where(b => b.Id.ToString() == e.CommandArgument.ToString()).First();
                        IdItem.Text = Row.Id.ToString();
                        CodigoItem.Text=Row.Codigo;
                        NOmbreItem.Text=Row.Descripcion;
                        CategoriaItem.Text=Row.DescSubgrupo;
                        PrecioItem.Text=Row.Precio.ToString();
                        ModeloItem.Text=Row.Modelo;
                        TamañoItem.Text=Row.Talla;
                        CantidadExistente.Text = Row.CantidadExistente.ToString();
                        IvaItem.Text = Row.PorcentajeIva.ToString();
                        var inv = new BllInventario();
                        inv = inv.GetById(Row.Id, int.Parse(Bodega.SelectedValue));
                        var deta = new BllDetalleDocumento();
                        idDet++;
                        deta.ID = idDet;
                        deta.IdProducto = int.Parse(IdItem.Text);
                        deta.IdBodega = int.Parse(Bodega.SelectedValue);
                        deta.Precio = decimal.Parse(PrecioItem.Text);
                        deta.PrecioCompra=Row.PrecioCompra;
                        deta.IvaPorcentaje = int.Parse(IvaItem.Text);
                        deta.IdDocumento = 0;
                       
                        
                        deta.CantExistente = inv.CantidadDisponible;
                        deta.CostoUnidad = 0;

                        deta.Subtotal = deta.PrecioCompra + ((decimal.Parse(deta.IvaPorcentaje.ToString()) / 100) * deta.PrecioCompra);
                       
                        deta.Descuento = 0;
                        deta.Producto = NOmbreItem.Text;
                        ListDeta.Add(deta);
                        fillDeta(ListDeta);
                        CleanControl(PanelItem.Controls);
                        //ModalItems.Hide();
                    }
                }
            }
            catch (Exception ex)
            {
                Log.EscribirTraza(ex.Message);
               Log.EscribirError(ex);
            }
        }
        
        protected void AddItem_Click(object sender, EventArgs e)
        {
            try
            {
                var deta = new BllDetalleDocumento();
                idDet ++;
                deta.ID=idDet;
                deta.IdProducto=int.Parse(IdItem.Text);
                deta.IdBodega=int.Parse(Bodega.SelectedValue);
                deta.Precio=decimal.Parse(PrecioItem.Text);
                deta.IvaPorcentaje=int.Parse(IvaItem.Text);
                deta.IdDocumento=0;
                deta.Cantidad=int.Parse(Cantidad.Text);
                deta.CostoUnidad=0;
                deta.Descuento=0;
                deta.Producto=NOmbreItem.Text;
                var exis= new BllInventario();
                deta.CantExistente=exis.GetById(deta.IdProducto,deta.IdBodega).CantidadDisponible;
                ListDeta.Add(deta);
                fillDeta(ListDeta);
                CleanControl(PanelItem.Controls);
            }
            catch (Exception ex)
            {
                Log.EscribirTraza(ex.Message);
                Log.EscribirError(ex);
            }
        }

        protected void ItemBusqueda_TextChanged(object sender, EventArgs e)
        {
            if (ItemBusqueda.Text!="")
            {
                Session["ListItem"] = BllItem.ToList(ItemBusqueda.Text);
                if (!string.IsNullOrEmpty(Session["ListItem"].ToString()))
                {
                    GridItem.DataSource = (List<BllItem>)Session["ListItem"];
                    GridItem.DataBind();
                }
                
            }
            
        }
        private decimal _Total = 0;
        private decimal _SubTotal = 0;
        private decimal _Iva = 0;
        private int cant=0;
        protected void Detalle_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            try
            {
                if (e.Row.RowType == DataControlRowType.DataRow)
                {
                    var Sub = DataBinder.Eval(e.Row.DataItem, "Subtotal");

                    //_Total += (Convert.ToDecimal(DataBinder.Eval(e.Row.DataItem, "Precio")) * Convert.ToInt16(DataBinder.Eval(e.Row.DataItem, "Cantidad")));
                    _SubTotal += (Convert.ToDecimal(DataBinder.Eval(e.Row.DataItem, "PrecioCompra")) * Convert.ToInt16(DataBinder.Eval(e.Row.DataItem, "Cantidad")));
                    _Iva += (Convert.ToDecimal(DataBinder.Eval(e.Row.DataItem, "IvaPorcentaje")) / 100) * (Convert.ToDecimal(DataBinder.Eval(e.Row.DataItem, "PrecioCompra"))) * Convert.ToInt16(DataBinder.Eval(e.Row.DataItem, "Cantidad"));
                    _Total += (Convert.ToDecimal(DataBinder.Eval(e.Row.DataItem, "Subtotal")) * Convert.ToInt16(DataBinder.Eval(e.Row.DataItem, "Cantidad")));
                 
                    cant += Convert.ToInt16(DataBinder.Eval(e.Row.DataItem, "Cantidad"));
                    Sub = (Convert.ToDecimal(DataBinder.Eval(e.Row.DataItem, "Subtotal")) * Convert.ToInt16(DataBinder.Eval(e.Row.DataItem, "Cantidad"))).ToString();
                }
                else if (e.Row.RowType == DataControlRowType.Footer)
                {
                    e.Row.Cells[1].Text = "TOTAL:";
                    e.Row.Cells[5].Text = cant.ToString();
                    e.Row.Cells[6].Text = String.Format("{0:C2}", (Math.Round(float.Parse(_Total.ToString()), 2)));
                    e.Row.Cells[4].Text = String.Format("{0:C2}", (Math.Round(float.Parse(_Iva.ToString()), 2)));
                    e.Row.Cells[6].HorizontalAlign = HorizontalAlign.Right;
                    e.Row.Font.Bold = true;
                    if (e.Row.RowType == DataControlRowType.Footer)
                    {
                        e.Row.Cells[6].Text = String.Format("{0:C2}", (Math.Round(float.Parse(_Total.ToString()), 2)));
                        
                    }
                    TotalGuardar.Text = _Total.ToString();
                    TotalSubGuardar.Text = _SubTotal.ToString();
                    TotalIvaGuardar.Text = _Iva.ToString();
                    Total.Text = String.Format("{0:C2}", (Math.Round(float.Parse(_Total.ToString()), 2)));
                    TotalSub.Text = String.Format("{0:C2}", (Math.Round(float.Parse(_SubTotal.ToString()), 2)));
                    TotalIva.Text = String.Format("{0:C2}", (Math.Round(float.Parse(_Iva.ToString()), 2)));
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
           TextBox c = (TextBox)Detalle.Rows[e.RowIndex].FindControl("TxtCantidad");
           TextBox ce = (TextBox)Detalle.Rows[e.RowIndex].FindControl("TxtCantExistente");
           TextBox id = (TextBox)Detalle.Rows[e.RowIndex].FindControl("TxtIdProducto");
           GridViewRow row = (GridViewRow)c.NamingContainer;
           //if (int.Parse(c.Text)<=int.Parse(ce.Text))
           //{
               UpdateItem(int.Parse(id.Text), int.Parse(c.Text));
               Detalle.EditIndex = -1;
               Detalle.DataSource = (List<BllDetalleDocumento>)Session["ListDeta"];
               Detalle.DataBind();
           //}
           //else
           //{
           //    Msj1.Text = "Cantidad Despachada No Puede ser Mayor  a la Cantidad existente!!";
           //    Type1.Text = "warning";
           //}
           
        }
       
        protected void UpdateItem(int idProd, int canti)
        {
            try
            {
                var Lis = (List<BllDetalleDocumento>)Session["ListDeta"];
                foreach (var item in Lis)
                {
                    if (item.IdProducto.Equals(idProd))
                    {
                        item.Cantidad=canti;
                    }
                }

            Session["ListDeta"] = Lis;
            }
            catch (Exception ex)
            {
                
                throw ex;
            }
        }

        protected void Bodega_SelectedIndexChanged(object sender, EventArgs e)
        {
            try
            {
                if (Bodega.SelectedValue!="0")
                {
                    TipoMovimiento.DataSource = BllTipoMovimiento.ToListBySw(2,int.Parse(Bodega.SelectedValue));
                    TipoMovimiento.DataTextField = "Descripcion";
                    TipoMovimiento.DataValueField = "Id";
                    TipoMovimiento.DataBind();
                    
                }
                else
                {
                    TipoMovimiento.DataSource = BllTipoMovimiento.ToListBySw(2);
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
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "Print('" + Id.Text + "');", true);
        }
    }
}