using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.Entities;
using Generals.business.Common;
namespace BrakGeWeb
{
    public partial class detalleproducto : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                  var id = Request.QueryString.Get("Id");
                  CargarDatos(id);
               
            }
        }
        protected void FillSimilares(int cat)
        {
            try
            {
                Metodos.CargarImagenesSimilares(PanelImagenes,cat); 
            }
            catch (Exception)
            {
                
                throw;
            }
        }
        protected void CargarDatos(string id)
        {
            try
            {
                var item = new BllInventario();
               
               item=item.GetByIdItem(int.Parse(id));
                NombreItem.InnerText=item.NombreItem;
                Precio.InnerText = String.Format("{0:C2}", item.Precio);
                CantidadDisponible.Value=item.CantidadDisponible.ToString();
                Categoria.InnerText=item.Categoria;
                if (item.UrlItem!=null)
                {
                    imgItem.Src = item.UrlItem;
                }
                else
                {
                    imgItem.Src="images/no.png";
                }
               
                FillSimilares(item.GrupoItem);
            }
            catch (Exception ex)
            {
                
                Response.Write(ex.Message);
            }
        }
    }
}