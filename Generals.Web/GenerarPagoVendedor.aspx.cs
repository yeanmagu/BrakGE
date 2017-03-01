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
    public partial class GenerarPagoVendedor : PaginaBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                if (!IsPostBack)
                {
                    //ValidarAutorizacion();
                    Session["Titulo"] = "Generar Pago Vendedor";
                   FillUsuarios();
                }
            }
            catch (Exception ex)
            {
                mensaje(Constantes.errorGeneral); Log.EscribirError(ex);
            }
        }

        protected void FillUsuarios()
        {
            try
            {
            var Usu = new BllUsuarios();
                Vendedor.DataSource =Usu.GetAllUsuarioByRol(3) ;
                Vendedor.DataTextField = "Nombres";
                Vendedor.DataValueField = "ID";
                Vendedor.DataBind();
                Vendedor.Items.Insert(0, new ListItem("Seleccione Vendedor", "0"));
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
            ReportParameter Nro = new ReportParameter("FechaIn", FechaInicial.Text);
            ReportParameter CodigoI = new ReportParameter("FechaFIn", FechaFinal.Text);
            ReportViewer2.LocalReport.SetParameters(User);
            ReportViewer2.LocalReport.SetParameters(Nro);
            ReportViewer2.LocalReport.SetParameters(CodigoI);
            ReportViewer2.LocalReport.Refresh();
        }
        



    }
}