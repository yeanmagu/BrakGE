using System;
using System.Collections;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;
using System.Reflection;
using System.Net.Mail;
using Generals.framework.DataAccess;
using Generals.framework.Exceptions;
using Generals.business.Components;
using System.IO;
using Generals.business.Data;

namespace Generals.business.Entities
{
    public class Email
    {
        #region Attributes

        public string Para { set; get; }
        public string Copias { set; get; }
        public string Asunto { set; get; }
        public string Cuerpo { set; get; }
        public Stream Adjunto { set; get; }
        #endregion Attributes

        #region Constructors

        public Email() { }

        #endregion Constructors

        #region Methods

        public int Enviar()
        {
            try
            {
                MailMessage message = new MailMessage();

                string[] Tos = Para.Split(";,".ToCharArray(), StringSplitOptions.RemoveEmptyEntries);

                foreach (string correo in Tos)
                    message.To.Add(new MailAddress(correo));

                string[] CCs = Copias.Split(";,".ToCharArray(), StringSplitOptions.RemoveEmptyEntries);

                foreach (string cc in CCs)
                    message.CC.Add(new MailAddress(cc));

                message.Subject = Asunto;
                message.IsBodyHtml = true;
                message.Body = Cuerpo;
                message.Priority = MailPriority.High;
                message.DeliveryNotificationOptions = DeliveryNotificationOptions.OnFailure;
                if (Adjunto !=null)
                {
                    message.Attachments.Add(new Attachment(Adjunto, "CartaAseguradora.pdf"));
                }
                
                PrestoSmtpClient smtp = new PrestoSmtpClient();                
                smtp.Send(message,0);

                return 1;
            }
            catch (Exception ex)
            {                
                Exception e = new Exception("Ocurrio un error al enviar el correo. Revise configuracion de envio o Direcciones de Correo ingresadas.", ex);
                ExceptionManager.HandleException(e, 1, 5000, 1);
                throw (ex);
            }
        }

        #endregion Methods
    }
}