using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.Entities;
using Generals.business.Common;
using System.Web.Services;
using System.Web.Script.Services;
namespace BrakGeWeb
{
    public partial class index : PaginaBase
    {
       
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                FillItems();
            }
               
            
            
        }

        private void ConsultarCarrito()
        {
            Session["Detalle"]=AgregarCarrito.consultarItems();
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
                
                Metodos.CargarImagenes(PanelImagenes,0);
                ConsultarCarrito();
            }
            catch (Exception ex)
            {
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "displayToastr('" +ex.Message+ "','" + "error');", true);
               Log.EscribirError(ex);
            }
        }

        protected void BtnCotizar_Click(object sender, EventArgs e)
        {
            ConsultarCarrito();
            if (Session["Detalle"]!=null)
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

        protected void AgregarCarrito_ServerClick(object sender, EventArgs e)
        {
            try
            {
                
            }
            catch (Exception ex)
            {
                
                throw ex;
            }
        }

        protected void AddCart_Click(object sender, CommandEventArgs e)
        {
            if (e.CommandName=="AddCart")
            {
                var item= BllItem.GetById(int.Parse(e.CommandArgument.ToString()));
            }
        }

        protected void AddCart_Command(object sender, CommandEventArgs e)
        {

        }

       
    }
}