using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.Entities;
using Generals.business.Common;

namespace BrakGeWeb
{
    public partial class Item : PaginaBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                if (!IsPostBack)
                {
                    //ValidarAutorizacion();
                    Session["Titulo"] = "Administración de Productos y Servicios";
                    FillItem();
                    FillSubGrupo(0);
                    FillGrupo();
                    FillIva();
                    FillTamaño();
                    FillColor();
                    FillMarca();
                    FillProveedor();
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
        private void FillIva()
        {
            try
            {
                Iva.DataSource = BllIva.ToList();
                Iva.DataTextField = "Descripcion";
                Iva.DataValueField = "Id";
                Iva.DataBind();
                Iva.Items.Insert(0, new ListItem("Seleccione Iva", "0"));
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorAlCargarCombos + " Iva";
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }
        private void FillColor()
        {
            try
            {
                Color.DataSource = BllColor.ToList();
                Color.DataTextField = "Descripcion";
                Color.DataValueField = "Id";
                Color.DataBind();
                Color.Items.Insert(0, new ListItem("Seleccione Color", "0"));
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorAlCargarCombos + " Color";
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }
        private void FillMarca()
        {
            try
            {
                Marca.DataSource = BllMarcas.ToList();
                Marca.DataTextField = "Descripcion";
                Marca.DataValueField = "Id";
                Marca.DataBind();
                Marca.Items.Insert(0, new ListItem("Seleccione Tamaño", "0"));
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorAlCargarCombos + " Tamaño";
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }
        private void FillTamaño()
        {
            try
            {
                Talla.DataSource = BllTalla.ToList();
                Talla.DataTextField = "Descripcion";
                Talla.DataValueField = "Id";
                Talla.DataBind();
                Talla.Items.Insert(0, new ListItem("Seleccione Tamaño", "0"));
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorAlCargarCombos + " Tamaño";
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }
        private void FillGrupo()
        {
            try
            {
                Grupo.DataSource = BllGrupo.ToList();
                Grupo.DataTextField = "Descripcion";
                Grupo.DataValueField = "Id";
                Grupo.DataBind();
                Grupo.Items.Insert(0, new ListItem("Seleccione Grupo", "0"));
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorAlCargarCombos + " Tipo Documento";
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }
        private void FillProveedor()
        {
            try
            {
                Proveedor.DataSource = BllPersonas.ToListProveedor();
                Proveedor.DataTextField = "Nombre";
                Proveedor.DataValueField = "Id";
                Proveedor.DataBind();
                Proveedor.Items.Insert(0, new ListItem("Seleccione Proveedor", "0"));
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorAlCargarCombos + " proveedor";
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }
        private void FillSubGrupo(int IdGrupo)
        {
            try
            {
                if (IdGrupo == 0)
                {
                    SubGrupo.DataSource = BllSubGrupo.ToList();
                }
                else
                {
                    SubGrupo.DataSource = BllSubGrupo.ToListByGrupo(IdGrupo);
                }

                SubGrupo.DataTextField = "Descripcion";
                SubGrupo.DataValueField = "Id";
                SubGrupo.DataBind();
                SubGrupo.Items.Insert(0, new ListItem("Seleccione SubGrupo", "0"));
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorAlCargarCombos + " Tipo Persona";
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

        protected void BtnSelect_Command(object sender, CommandEventArgs e)
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
                        TxtId.Text = Row.Id.ToString();
                        Codigo.Text = Row.Codigo;
                        Descripcion.Text = Row.Descripcion;
                        Precio.Text = Row.PrecioCompra.ToString();
                        SubGrupo.SelectedValue = Row.IdSubGrupo.ToString();
                        Iva.SelectedValue = Row.IdIva.ToString();
                        MaximoDescuento.Text = Row.MaxDescuento.ToString();
                        CantidadMinima.Text = Row.CantidadMinima.ToString();
                        CantidadMaxima.Text = Row.CantidadMaxima.ToString();

                        Color.SelectedValue = Row.IdColor.ToString();
                        Modelo.Text = Row.Modelo;
                        Notas.Text = Row.Notas;
                        Talla.SelectedValue = Row.IdTalla.ToString();
                        NumeroSerie.Text=Row.NroSerie;
                        FechaVencimiento.Text =  Row.FechaVencimiento;

                        PrecioVenta.Text=Row.Precio.ToString();
                        Stock.Checked = Row.ManejaStock;
                        StockActual.Text = Row.StockActual.ToString();
                        DiasReposicion.Text = Row.DiasReposicion.ToString();
                        CalificacionABC.Text = Row.CalificacionABC;
                        Unidad.Text = Row.Unidad;
                        Marca.SelectedValue = Row.IdMarca.ToString();

                        Row.Notas = Notas.Text;
                       
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
                    ////   bool r = BllItem.Delete(int.Parse(e.CommandArgument.ToString()));
                    //   if (r == true)
                    //   {
                    //       FillItem();
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
                if (BllItem.ExisteDescri(Codigo.Text) == false)
                {
                    BllItem ObjGrabar = new BllItem();
                 
                   
                    ObjGrabar.IdEmpresa =int.Parse(Session["IdEmpresa"].ToString());
                    ObjGrabar.Codigo = Codigo.Text;
                    ObjGrabar.Descripcion = Descripcion.Text;
                    ObjGrabar.PrecioCompra = decimal.Parse(Precio.Text);
                    ObjGrabar.Precio=decimal.Parse(PrecioVenta.Text);
                    ObjGrabar.IdSubGrupo = int.Parse(SubGrupo.SelectedValue);
                    ObjGrabar.IdIva = int.Parse(Iva.SelectedValue);
                    ObjGrabar.MaxDescuento = int.Parse(MaximoDescuento.Text);
                    ObjGrabar.CantidadMinima = int.Parse(CantidadMinima.Text);
                    ObjGrabar.CantidadMaxima = int.Parse(CantidadMaxima.Text);
                    ObjGrabar.Anulado = 0;
                    ObjGrabar.IdColor = int.Parse(Color.SelectedValue);
                    ObjGrabar.Modelo = Modelo.Text;   
                    ObjGrabar.Notas = Notas.Text;
                    ObjGrabar.IdTalla = int.Parse(Talla.SelectedValue);
                    ObjGrabar.NroSerie = NumeroSerie.Text;
                    ObjGrabar.FechaVencimiento =FechaVencimiento.Text; 
                    ObjGrabar.FechaCreacion = DateTime.Now;   
                    ObjGrabar.ManejaStock=Stock.Checked;
                    ObjGrabar.StockActual = int.Parse(StockActual.Text);
                    ObjGrabar.DiasReposicion=int.Parse(DiasReposicion.Text);
                    ObjGrabar.CalificacionABC=CalificacionABC.Text;
                    ObjGrabar.Unidad=Unidad.Text;
                    ObjGrabar.IdMarca=int.Parse(Marca.SelectedValue);
                    ObjGrabar.ComisionPorVenta=int.Parse(ComisionPorVenta.Text);
                    ObjGrabar.IdProveedor=int.Parse(Proveedor.SelectedValue);
                    ObjGrabar.IdUsuario = int.Parse(Usuario.id_usuario.ToString());
                   

                    //   ObjGrabar.Estado = Estado.Checked;

                    int r = BllItem.Add(ObjGrabar);
                    if (r > 0)
                    {
                        FillItem();
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
                if (BllItem.GetById(int.Parse(TxtId.Text)).Id > 0)
                {
                    var ObjGrabar = BllItem.GetById(int.Parse(TxtId.Text));
                    ObjGrabar.Codigo = Codigo.Text;
                    ObjGrabar.Descripcion = Descripcion.Text;
                    ObjGrabar.PrecioCompra = decimal.Parse(Precio.Text);
                    ObjGrabar.IdSubGrupo = int.Parse(SubGrupo.SelectedValue);
                    ObjGrabar.IdIva = int.Parse(Iva.SelectedValue);
                    ObjGrabar.MaxDescuento = int.Parse(MaximoDescuento.Text);
                    ObjGrabar.CantidadMinima = int.Parse(CantidadMinima.Text);
                    ObjGrabar.CantidadMaxima = int.Parse(CantidadMaxima.Text);
                    ObjGrabar.Anulado = 0;
                    ObjGrabar.IdColor = int.Parse(Color.SelectedValue);
                    ObjGrabar.Modelo = Modelo.Text;
                    ObjGrabar.Notas = Notas.Text;
                    ObjGrabar.IdTalla = int.Parse(Talla.SelectedValue);
                    ObjGrabar.NroSerie = NumeroSerie.Text;
                    ObjGrabar.FechaVencimiento = FechaVencimiento.Text;
                    ObjGrabar.FechaCreacion = DateTime.Now;
                    ObjGrabar.ManejaStock = Stock.Checked;
                    ObjGrabar.StockActual = int.Parse(StockActual.Text);
                    ObjGrabar.DiasReposicion = int.Parse(DiasReposicion.Text);
                    ObjGrabar.CalificacionABC = CalificacionABC.Text;
                    ObjGrabar.Unidad = Unidad.Text;
                    ObjGrabar.IdMarca = int.Parse(Marca.SelectedValue);
                    ObjGrabar.Precio = decimal.Parse(PrecioVenta.Text);
                    ObjGrabar.IdUsuario = int.Parse(Usuario.id_usuario.ToString());
                    ObjGrabar.ComisionPorVenta = int.Parse(ComisionPorVenta.Text);
                    ObjGrabar.IdProveedor = int.Parse(Proveedor.SelectedValue);
                    int r = BllItem.Update(ObjGrabar);
                    if (r > 0)
                    {
                        FillItem();
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
                Session["ListItem"] = BllItem.ToList(TxtBusqueda.Text.Trim());
                if (!string.IsNullOrEmpty(Session["ListItem"].ToString()))
                {
                    GridItem.DataSource = (List<BllItem>)Session["ListItem"];
                    GridItem.DataBind();


                }
                else
                {
                    FillItem();

                }
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorAlConsultarDatos;
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }

        protected void GridItem_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try
            {
                GridItem.PageIndex = e.NewPageIndex;
                GridItem.DataSource = (List<BllItem>)Session["ListItem"];
                GridItem.DataBind();
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

        protected void Grupo_SelectedIndexChanged(object sender, EventArgs e)
        {
            try
            {
                FillSubGrupo(int.Parse(Grupo.SelectedValue));
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorAlCargarCombos;
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }

        protected void BtnGuardar_Click1(object sender, EventArgs e)
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

        protected void BtnLimpiar_Click1(object sender, EventArgs e)
        {
            try
            {
                LimpiarControles(pnlDatos.Controls);
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorLimpiando;
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }

        protected void BtnCancelar_Click(object sender, EventArgs e)
        {
            pnlGrid.Visible = true;
            pnlDatos.Visible = false;
            LimpiarControles(pnlDatos.Controls);
        }

        
    }
}