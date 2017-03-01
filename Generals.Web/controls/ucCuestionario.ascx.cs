using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml;
using System.Xml.Linq;
using presto.framework.Exceptions;

namespace Presto.BBVA.controls
{
    public partial class ucCuestionario : System.Web.UI.UserControl
    {

        protected void Page_Load(object sender, EventArgs e)
        {

        }

        public void muestraColumnas(int columna, bool visible)
        {
            gvCuestionario.Columns[columna].Visible = visible;
        }

        public void habilitaRow(int row, int column, bool habilita)
        {
            gvCuestionario.Rows[row].Cells[column].Enabled = habilita;
        }

        public void configuraGrid(long id_solicitud)
        {

            List<string> tipoSolicitante = new List<string>(); ;
            try
            {
                tipoSolicitante = new presto.business.Entities.Solicitantes.Solicitante().obtieneTipoSolicitante(id_solicitud);

            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
            try
            {
                /*
                 *  Se comenta ya que siempre debe existir un participante 'P' (principal)
                if (tipoSolicitante.Count() > 0 && tipoSolicitante[0].Contains('P'))
                {
                    muestraColumnas(3, true);
                }
                else
                {
                    muestraColumnas(3, false);
                }
                */
                if (tipoSolicitante.Count() > 1 && tipoSolicitante[1].Contains('C'))
                {
                    muestraColumnas(4, true);
                }
                else
                {
                    muestraColumnas(4, false);
                }

                if (tipoSolicitante.Count() > 2 && tipoSolicitante[2].Contains('C'))
                {
                    muestraColumnas(5, true);
                }
                else
                {
                    muestraColumnas(5, false);
                }
            }
            catch (Exception ex)
            {
                ExceptionManager.HandleException(ex, 1, 1, 1);
                throw new Exception("Error al configurar grid cuestionario");
            }
        }

        public void cargaDatos(long id_solicitud)
        {
            try
            {
                List<presto.business.Entities.cuestionarioMedico> lista = new presto.business.Entities.cuestionarioMedico().obtieneCuestionarioMedico(id_solicitud);
                gvCuestionario.DataSource = lista;
                gvCuestionario.DataBind();
            }
            catch (Exception ex)
            {
                throw new Exception("La carga del cuestionario médico ha fallado");
            }
        }


        public void guardaDatos(long id_solicitud)
        {

            List<presto.business.Entities.cuestionarioMedico> lista = new List<presto.business.Entities.cuestionarioMedico>();
            presto.business.Entities.cuestionarioMedico cm;

            RadioButtonList rddChk = new RadioButtonList();
            TextBox txtDetalle = new TextBox();
            try
            {
                foreach (GridViewRow row in gvCuestionario.Rows)
                {

                    cm = new presto.business.Entities.cuestionarioMedico();
                    cm.IdCuestionarioparticipante = int.Parse(((Label)row.FindControl("IDCuestionarioParticipanteLabel")).Text);
                    cm.IdPregunta = int.Parse(((Label)row.FindControl("lblID")).Text);
                    rddChk = (RadioButtonList)row.FindControl("radbtnTitular");
                    cm.RespuestaSolicitante = !String.IsNullOrEmpty(rddChk.SelectedValue) ? int.Parse(rddChk.SelectedValue) : 0;
                    rddChk = (RadioButtonList)row.FindControl("radbtnConyuge");
                    if (rddChk != null)
                    {
                        cm.RespuestaConyuge = !String.IsNullOrEmpty(rddChk.SelectedValue) ? int.Parse(rddChk.SelectedValue) : 0;
                    }
                    cm.Detalles = ((TextBox)row.FindControl("txtDetalle")).Text;
                    lista.Add(cm);
                }
            }
            catch (Exception ex)
            {
                ExceptionManager.HandleException(ex, 1, 1, 1);
                throw new Exception("Error al obtener valores del cuestionario");
            }

            try
            {
                new presto.business.Entities.cuestionarioMedico().guardaCuestionarioMedico(id_solicitud, lista);
            }
            catch (Exception ex)
            {
                
                throw (ex);
            }

        }


    }
}
