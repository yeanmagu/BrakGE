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
    public partial class InformeDeMovimientos : PaginaBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                FillTipoMov();
            }
           
        }

        protected void FillTipoMov()
        {
            try
            {
                TipoMov.DataSource=BllTipoMovimiento.ToList();
                TipoMov.DataValueField="Id";
                TipoMov.DataTextField = "Descripcion";
                TipoMov.DataBind();
                TipoMov.Items.Insert(0,new ListItem("Todos","0"));

            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Log.EscribirTraza(ex.Message);
            }
        }
        protected void cargarReport()
        {
            try
            {
                ReportParameter User = new ReportParameter("User", Usuario.username);
                ReportParameter Nro = new ReportParameter("TipoMov", TipoMov.SelectedItem.ToString());
                ReportParameter FF = new ReportParameter("FechaFin", FechaFinal.Text);
                ReportParameter FI = new ReportParameter("FechaIn", FechaInicial.Text);
                REporteMovimientos.LocalReport.SetParameters(User);
                REporteMovimientos.LocalReport.SetParameters(Nro);
                REporteMovimientos.LocalReport.SetParameters(FF);
                REporteMovimientos.LocalReport.SetParameters(FI);
                REporteMovimientos.LocalReport.Refresh();
            }
            catch (Exception ex) { throw ex; }
        }

        protected void BtnGuardar_Click(object sender, EventArgs e)
        {
            cargarReport();
        }
    }
}