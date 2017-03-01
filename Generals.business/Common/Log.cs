using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using log4net;
using log4net.Config;

namespace Generals.business.Common
{
    /// <summary>
    /// Clase de administracion de log del sistema
    /// </summary>
    public class Log
    {
        private static readonly ILog logger = LogManager.GetLogger(typeof(Log));

        /// <summary>
        /// Almacenamiento de los errores en el log
        /// </summary>
        /// <param name="ex">Excepcion generada</param>
        public static void EscribirError(Exception ex)
        {
            XmlConfigurator.Configure();
            MDC.Set("user", "");
            MDC.Set("stack", ex.StackTrace); 
            log4net.ThreadContext.Properties["usuario"] = "";
            logger.Error(string.Format("Mensaje:{0}, Inner:{1}", ex.Message, (ex.InnerException != null ? ex.InnerException.Message : "NA")));
        }

        /// <summary>
        /// Almacenamiento de los errores en el log
        /// </summary>
        /// <param name="ex">Excepcion generada</param>
        public static void EscribirError(Exception ex, string usuario)
        {
            XmlConfigurator.Configure();
            MDC.Set("user", usuario);
            MDC.Set("stack", ex.StackTrace); 
            logger.Error(string.Format("Mensaje:{0}, Inner:{1}", ex.Message, (ex.InnerException != null ? ex.InnerException.Message : "NA")));
        }

        /// <summary>
        /// Almacenamiento de las trazas en el log
        /// </summary>
        /// <param name="mensaje">Mensaje que se almacena en la traza</param>
        public static void EscribirTraza(string mensaje)
        {
            XmlConfigurator.Configure();                        
            logger.Debug(mensaje);
        }
        public static void logerrorconexion(string mensaje)
        {
            System.IO.StreamWriter swr = new System.IO.StreamWriter(@"C:\Log\Errorconexion.txt", true, UTF8Encoding.UTF8);
            swr.WriteLine(mensaje);
            swr.Close();
        }
        public static void logerrorconexion(Exception ex)
        {
            System.IO.StreamWriter swr = new System.IO.StreamWriter(@"C:\Log\Errorconexion.txt", true, UTF8Encoding.UTF8);
            swr.WriteLine(ex.ToString());
            swr.Close();
        }
            
    }
}
