using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.Common;
namespace BrakGeWeb
{
    public partial class DefaultCliente : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                FillItems();

            }


        }

        protected void TxtBusqueda_TextChanged(object sender, EventArgs e)
        {
            try
            {
                //if (TxtBusqueda.Text != "")
                //{
                Metodos.CargarImagenesByBusqueda(PanelImagenes, TxtBusqueda.Text);
                //}
            }
            catch (Exception ex)
            {

                Log.EscribirError(ex);
            }
        }
        protected void FillItems()
        {
            try
            {
                Metodos.CargarImagenes(PanelImagenes, 0);
            }
            catch (Exception ex)
            {
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "displayToastr('" + ex.Message + "','" + "error');", true);
                Log.EscribirError(ex);
            }
        }
        protected void FillSimilares(int cat)
        {
            try
            {
                //Metodos.CargarImagenes(PanelImagenes, cat);
            }
            catch (Exception)
            {

                throw;
            }
        }
        private void ConsultarCarrito()
        {
            Session["Detalle"] = AgregarCarrito.consultarItems();
        }
        protected void BtnCotizar_Click(object sender, EventArgs e)
        {
            ConsultarCarrito();
            if (Session["Detalle"] != null)
            {
                Response.Redirect("CotizarPedidosCliente.aspx");
            }
            else
            {
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "displayToastr('No hay items Para cotizar','" + "error');", true);
            }
        }

        protected void btnCoti_Click(object sender, ImageClickEventArgs e)
        {
            ConsultarCarrito();
            if (Session["Detalle"] != null)
            {
                Response.Redirect("CotizarPedidosCliente.aspx");
            }
            else
            {
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "displayToastr('No hay items Para cotizar','" + "error');", true);
            }
        }
    }
}