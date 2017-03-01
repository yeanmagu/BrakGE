using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.Common;
namespace BrakGeWeb
{
    public partial class articulos : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                var Cat = Request.QueryString.Get("Cat");
                var sub = Request.QueryString.Get("Sub");
                if (Cat!=null)
                {
                    FillSimilares(int.Parse(Cat));
                }
                else if (sub!=null)
                {

                }
                else
                {
                    FillSimilares(0);
                }

            }


        }

        protected void FillSimilaresSub(int cat)
        {
            try
            {
                Metodos.CargarImagenes(PanelImagenes, cat);
            }
            catch (Exception)
            {

                throw;
            }
        }
        protected void FillSimilares(int cat)
        {
            try
            {
                Metodos.CargarImagenes(PanelImagenes, cat);
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}