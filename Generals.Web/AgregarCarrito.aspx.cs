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
    public partial class AgregarCarrito : PaginaBase
    {
        private static List<BllDetalleDocumento> ListDeta=new List<BllDetalleDocumento>();
        private int idDet;
        protected static void Page_Load(object sender, EventArgs e)
        {
           
        }
        [ScriptMethod(), WebMethod()]
        public static string Metodo1(string idItem)
        {
            var deta = new BllDetalleDocumento();
           var iddeta= ListDeta.Count();
            if (idItem!=null)
            {
             
                var Row =  BllItem.GetById(int.Parse(idItem));
                var inv = new BllInventario();
                inv = inv.GetById(Row.Id,1);
                deta.ID=iddeta+1;
                deta.IdProducto = Row.Id;
                deta.IdBodega = 1;
                deta.Precio = Row.Precio;
                deta.IvaPorcentaje =0;
                deta.IdDocumento = 0;
                deta.Cantidad = 1;
                deta.CostoUnidad = 0;
                deta.Descuento = 0;
                deta.Talla=Row.Talla;
                deta.Codigo=Row.Codigo;
                deta.Producto = Row.Descripcion;
                var exis = new BllInventario();
                deta.CantExistente = exis.GetById(deta.IdProducto, deta.IdBodega).CantidadDisponible;
                deta.IdDocumento = 0;

                deta.DsctoPorcentaje = 0;
               
                deta.CostoUnidad = 0;

                deta.Subtotal = deta.Precio + ((decimal.Parse(deta.IvaPorcentaje.ToString()) / 100) * deta.Precio) - ((decimal.Parse(deta.DsctoPorcentaje.ToString()) / 100) * deta.Precio); ;

                deta.Descuento = 0;
               
                ListDeta.Add(deta);
              return "Producto Agregado al Carrito";
            }
            else
            {
                return "Producto No Se Agrego al Carrito";
            }
           
        }
        [ScriptMethod(), WebMethod()]
        public static List<BllDetalleDocumento> consultarItems()
        {
            var deta = new BllDetalleDocumento();
            
            return ListDeta;
        }
        protected void FillItems()
        {
            try
            {
                Metodos.CargarImagenes(PanelImagenes,0);
            }
            catch (Exception ex)
            {
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "displayToastr('" +ex.Message+ "','" + "error');", true);
               Log.EscribirError(ex);
            }
        }
    }
}