using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Net.Mail;
using System.Web;
using Generals.business.Entities;
using System.Diagnostics;
using System.Configuration;
using Generals.business.UserEntities;


namespace Generals.business.Components
{
    public class PrestoSmtpClient
    {
        public void Send(MailMessage message, long Idsolicitud)
        {
            try
            {
                message.DeliveryNotificationOptions = DeliveryNotificationOptions.OnFailure;
                LogMailMessage(message, Idsolicitud);

                var DisableEMailMessages = ConfigurationManager.AppSettings["DisableEMailMessages"];
                if (string.IsNullOrEmpty(DisableEMailMessages))
                {
                    if (Convert.ToBoolean(DisableEMailMessages)) return;

                    try
                    {
                        SmtpClient smtp = new SmtpClient();
                        smtp.Send(message);
                    }
                    catch (Exception ex)                   
                    {
                        new Exception("Error al Enviar Email", ex);
                    }
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private static void LogMailMessage(MailMessage message, long Idsolicitud)
        {
            try
            {
                var ccs = string.Empty;
                var tos = string.Empty;
                var bccs = string.Empty;
                var ipRequest = HttpContext.Current.Request.UserHostAddress;
                var urlRequest = HttpContext.Current.Request.Url.ToString();

                var s = ((Sesion)HttpContext.Current.Session["Presto"]);
                var idUser = s.Usuario.Id;
                                            
                foreach (var cc in message.CC) { ccs += cc + " ; "; }
                foreach (var to in message.To) { tos += to + " ; "; }
                foreach (var bcc in message.Bcc) { bccs += bcc + " ; "; }
                
                // get call stack and get calling method name                
                var stackTrace = new StackTrace().ToString();

                SaveLog(message, ccs, tos, bccs, ipRequest, urlRequest, idUser, 0, stackTrace);
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        private static void SaveLog(MailMessage message, string ccs, string tos, string bccs, string ipRequest, string urlRequest, long idUser, long idSolicitud, string stackTrace)
        {
            try
            {
                //var cntx = new dbGeneralsUser();
                //var mailLog = new MailMessageLogs();

                //mailLog.bccs = bccs;
                //mailLog.body = message.Body;
                //mailLog.ccs = ccs;
                //mailLog.fechaCreacion = DateTime.Now;
                //mailLog.idSolicitud = idSolicitud;
                //mailLog.idUsuario = idUser;
                //mailLog.ip = ipRequest;
                //mailLog.stacktrace = stackTrace;
                //mailLog.subject = message.Subject;
                //mailLog.tos = tos;
                //mailLog.url = urlRequest;

                //cntx.MailMessageLogs.InsertOnSubmit(mailLog);
                //cntx.SubmitChanges();
            }
            catch (Exception ex)
            {
                new Exception("Error al Insertar MailMessageLogs: ", ex);
            }
        }
    }
}
