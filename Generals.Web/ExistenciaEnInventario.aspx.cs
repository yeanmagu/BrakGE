using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.Entities;
using Generals.business.Common;
using Microsoft.Reporting.WebForms;
using Generals.business.Entities;
namespace BrakGeWeb
{
    public partial class ExistenciaEnInventario : PaginaBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                if (!IsPostBack)
                {
                    //ValidarAutorizacion();
                    Session["Titulo"] = "Existencia En Inventario";
                   FillBodegas();
                }
            }
            catch (Exception ex)
            {
                mensaje(Constantes.errorGeneral); Log.EscribirError(ex);
            }
        }

        protected void FillBodegas()
        {
            try
            {
                Bodega.DataSource = BllBodega.ToList();
                Bodega.DataTextField = "Nombre";
                Bodega.DataValueField = "Id";
                Bodega.DataBind();
                Bodega.Items.Insert(0, new ListItem("Todas", "0"));
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Log.EscribirTraza(ex.Message);
            }
        }

        protected void Generar_Click(object sender, EventArgs e)
        {
            ReportParameter User = new ReportParameter("User", Usuario.username);
            ReportParameter Nro = new ReportParameter("Bodega", Bodega.SelectedItem.ToString());
            ReportParameter CodigoI = new ReportParameter("Codigo", Codigo.Text);
            ReportViewer2.LocalReport.SetParameters(User);
            ReportViewer2.LocalReport.SetParameters(Nro);
            ReportViewer2.LocalReport.SetParameters(CodigoI);
            ReportViewer2.LocalReport.Refresh();
        }
        



    }
}