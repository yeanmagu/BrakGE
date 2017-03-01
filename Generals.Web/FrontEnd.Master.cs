using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.Common;

namespace BrakGeWeb
{
    public partial class FrontEnd : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                fillCategorias();
            }
        }

        protected void fillCategorias()
        {
            try
            {
                Metodos.FillCategorias(pnlMenu);
            }
            catch (Exception ex)
            {
                
                throw ex;
            }
        }
    }
}