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
    public partial class ImprimirRecibos : PaginaBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {

            if (!IsPostBack)
            {
                 var id = Request.QueryString.Get("IF");
                var Nro = Request.QueryString.Get("NA");
                cargarReport(id,Nro);
            }
        }
        protected void cargarReport(string fact,string NroAcuerdo)
        {
            try
            {
                ReportParameter User = new ReportParameter("User", Usuario.username);
                ReportParameter Nro = new ReportParameter("NroFact", fact);
                ReportParameter NA = new ReportParameter("NroAcuerdo", NroAcuerdo);
                ReportViewer2.LocalReport.SetParameters(NA);
                ReportViewer2.LocalReport.SetParameters(User);
                ReportViewer2.LocalReport.SetParameters(Nro);
                ReportViewer2.LocalReport.Refresh();
            }
            catch (Exception ex) { throw ex; }
        }

    }
}