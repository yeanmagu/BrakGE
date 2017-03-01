using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using Generals.business.Entities;
namespace Generals.Web
{
    public partial class Errors : PaginaBase
    {
        private Exception _lastError;
        protected void Page_Load(object sender, EventArgs e)
        {
            Display();
        }
        protected Exception LastError
        {
            get
            {
                if (_lastError == null)
                {
                    _lastError = (Exception)Session["LAST_ERROR"];
                    Session.Remove("LAST_ERROR");
                    if (_lastError == null)
                    {
                        _lastError = new Exception("No pudo obtenerse información sobre el problema.");
                        MensajeAlternativo = "Analizar posibles errores registrados en el Visor de Eventos del servidor de aplicaciones.";
                    }
                }
                return _lastError;
            }
        }
        protected virtual string MensajeAlternativo
        {
            get
            {
                return (string)ViewState["MensajeAlternativo"] ?? "";
            }
            set { ViewState["MensajeAlternativo"] = value; }
        }
        protected string UrlRedirect
        {
            get
            {
                string url = Request["RET_URL"];
                if (string.IsNullOrEmpty(url))
                    url = "javascript:history.back();";
                return url;
            }
        }
        protected string UrlError
        {
            get
            {
                return Request["LAST_URL"];
            }
        }

        protected string PageNameError
        {
            get
            {
                string pageName = UrlError.Substring(UrlError.LastIndexOf('/') + 1);
                string sufijo = pageName.Substring(pageName.IndexOf("."));
                return pageName.Replace(sufijo, "");
            }
        }

        protected virtual void Display()
        {
            lblMainMsj.Text = getMensaje();
            //lblDetail.Text = TextExceptionFormatter.FormatException(LastError);
            //lblDetail.Text = LastError.ToString();

            bool mostrarMensaje = true;
            //pnlDetail.Visible = mostrarMensaje;

            ctrLink.Text = string.Format("<a href=\"default.aspx\"><b>Ir a Principal</b></a>", UrlRedirect);
            SecurityErrorImg.Visible = (LastError is System.Security.SecurityException);
            ErrorAppImg.Visible = !SecurityErrorImg.Visible;
        }
        protected virtual string getMensaje()
        {
            string mensaje = string.Empty;
            string key = string.Empty;
            mensaje = LastError.Message;
            return mensaje;
        }
        protected bool ExisteError(Exception ex, string errorBuscado)
        {
            string r = string.Empty;
            return ExisteError(ex, errorBuscado, ref r);
        }

        /// <summary>
        /// Busca recursivamente un error en la excepcion o sus excepciones derivadas
        /// </summary>
        /// <param name="ex">Excepcion a buscar (tambien se busca en las excepciones derivadas)</param>
        /// <param name="errorBuscado">Texto a buscar en el mensaje de la excepcion</param>
        /// <param name="errorEncontrado">Se carga con el mensaje completo de la excepcion donde se encuentra el texto buscado.</param>
        /// <returns>True o False</returns>
        protected bool ExisteError(Exception ex, string errorBuscado, ref string errorEncontrado)
        {
            if (ex.Message.IndexOf(errorBuscado) != -1)
            {
                errorEncontrado = ex.Message;
                return true;
            }
            if (ex.InnerException != null)
            {
                //Busco recursivamente
                return ExisteError(ex.InnerException, errorBuscado, ref errorEncontrado);
            }
            else
            {
                return false;
            }
        }
    }
}