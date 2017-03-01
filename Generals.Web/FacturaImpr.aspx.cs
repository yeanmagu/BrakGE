using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.Common;
using Microsoft.Reporting.WebForms;
using Generals.business.Entities;
namespace BrakGeWeb
{
    public partial class FacturaImpr :PaginaBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {

            if (!IsPostBack)
            {
                 var id = Request.QueryString.Get("Id");
                cargarReport(id);
            }
        }
        protected void cargarReport(string fact)
        {
            try
            {
                ReportParameter User = new ReportParameter("User", Usuario.username);
                ReportParameter Nro = new ReportParameter("NroFact", fact);
                ReportViewer2.LocalReport.SetParameters(User);
                ReportViewer2.LocalReport.SetParameters(Nro);
                ReportViewer2.LocalReport.Refresh();
            }
            catch (Exception ex) { throw ex; }
        }

    }
}