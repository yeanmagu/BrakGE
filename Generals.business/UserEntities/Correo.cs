using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using NVelocityTemplateEngine.Interfaces;
using System.Collections;
using NVelocityTemplateEngine;
using System.Net.Mail;
using System.Configuration;
using System.Threading;
using Generals.business.Common;

namespace Generals.business.UserEntities
{
    /// <summary>
    /// Clase para envio de correos
    /// </summary>
    public class Correo
    {
        #region Atributos
        /// <summary>
        /// Mensaje que es armado para envio
        /// </summary>
        MailMessage _mensaje;
        /// <summary>
        /// Objeto para realizar envio del mensaje
        /// </summary>
        SmtpClient _smtp;
        #endregion

        #region "Métodos Privados"
        /// <summary>
        /// Realiza el envio del mensaje sobre un hilo de modo que si falla no se muestre al usuario como fallo general
        /// del proce
        /// </summary>
        private void Enviar()
        {
            bool enviado = false;
            try
            {
                _smtp.Send(_mensaje);
                enviado = true;
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
            if (!enviado)
            {
                try
                {
                    _smtp.Send(_mensaje);
                }
                catch (Exception ex)
                {
                    Log.EscribirError(ex);
                }
            }
        }

        #endregion

        #region "Métodos Públicos"
        /// <summary>
        /// Prepara los objetos de envio de correo
        /// </summary>
        /// <param name="correoOrigen">Cuenta de correo origen</param>
        /// <param name="Asunto">Asunto del correo</param>
        /// <param name="esHTML">Indicador de tipo de correo HTML</param>
        /// <param name="servidorSMTP">Nombre del servidor SMTP</param>
        /// <param name="correoDestino">Cuenta de correo destino del mensaje</param>
        /// <param name="Ruta">Ruta donde se ubican las plantillas de correo</param>
        /// <param name="nombrePlantilla">Nombre de la plantilla con la que se envia el correo</param>
        /// <param name="Parametros">Parametros que son reemplazados en la plantilla</param>
        /// <param name="Valores">Valores con los que se reemplazan los parametros de la plantilla</param>
        public void Send(string correoOrigen, string Asunto, bool esHTML, string servidorSMTP, List<string> correoDestino, List<string> copia, string Ruta, string nombrePlantilla, string[] Parametros, object[] Valores)
        {
            try
            {
                INVelocityEngine motor = NVelocityEngineFactory.CreateNVelocityFileEngine(Ruta, true);
                IDictionary contexto = new Hashtable();
                if (Parametros != null)
                {
                    for (int i = 0; i < Parametros.Length; i++)
                    {
                        string parametro = Parametros[i];
                        object value = Valores[i];
                        contexto.Add(parametro, value);
                    }
                }
                _mensaje = new MailMessage();                
                _mensaje.IsBodyHtml = esHTML;
                foreach (string cuenta in correoDestino)
                {
                    _mensaje.To.Add(cuenta);
                }
                if (copia != null)
                {
                    foreach (string cuenta in copia)
                    {
                        _mensaje.CC.Add(cuenta);
                    }
                }
                _mensaje.Subject = Asunto;               
                _mensaje.From = new MailAddress(correoOrigen);                
                string cuerpo = motor.Process(contexto, nombrePlantilla);
                List<string> imagenes = new List<string>();
                List<string> ids = new List<string>();
                while (cuerpo.ToUpper().IndexOf(@"SRC='C:\") != -1)
                {
                    int inicio = cuerpo.ToUpper().IndexOf(@"SRC='C:\");
                    int fin = cuerpo.IndexOf("'", inicio + 8);
                    string ruta = cuerpo.Substring(inicio, fin - inicio + 1);
                    Guid id = Guid.NewGuid();
                    ids.Add(id.ToString());
                    imagenes.Add(ruta.Substring(4).Replace("'", ""));
                    cuerpo = cuerpo.Replace(ruta, string.Format("src='cid:{0}'", id));
                }

                AlternateView html = AlternateView.CreateAlternateViewFromString(cuerpo, Encoding.UTF8, "text/html");
                for (int i = 0; i < ids.Count; i++)
                {
                    LinkedResource logo = new LinkedResource(imagenes[i]);
                    logo.ContentId = ids[i];
                    html.LinkedResources.Add(logo);
                }
                _mensaje.AlternateViews.Add(html);
                _mensaje.Priority = System.Net.Mail.MailPriority.Normal;

                _smtp = new System.Net.Mail.SmtpClient();
                _smtp.Host = servidorSMTP;
                System.Net.NetworkCredential autenticacion = new System.Net.NetworkCredential();
              
                //_smtp.EnableSsl = true;

                _smtp.Send(_mensaje);

                //Thread hilo = new Thread(new ThreadStart(Enviar));
                //hilo.Start();
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                throw ex;
            }
        }       
        #endregion
    }
}
