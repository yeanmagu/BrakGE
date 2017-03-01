using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Collections;
using Generals.business.Entities;
using Generals.business.Common;

namespace Generals.business.UserEntities
{
    public class Sesiones
    {
        private static Sesiones _instancia;
        private Hashtable dato;
        private Sesiones()
        { }

        public static Sesiones Instancia()
        {
            if (_instancia == null)
            {
                _instancia = new Sesiones();
            }
            return _instancia;
        }

        public void AgregarSesion(string Elemento, string Nuevo)
        {
            if (dato == null)
            {
                dato = new Hashtable();
            }
            if (dato[Elemento] == null)
                dato.Add(Elemento, DateTime.Now.ToString("yyyyMMdd"));
            dato.Remove(Nuevo);
        }

        public void LimpiarSesiones()
        {
            if (dato != null)
            {
                string fecha = DateTime.Now.ToString("yyyyMMdd");
                List<string> eliminadas = new List<string>();
                foreach (DictionaryEntry item in dato)
                {
                    if ((string)item.Value != fecha)
                        eliminadas.Add((string)item.Key);
                }
                foreach (string item in eliminadas)
                {
                    dato.Remove(item);
                }
            }
        }

        public void ValidarSesion(string Elemento, PaginaBase Pagina)
        {
            if (dato != null)
            {
                if (dato.ContainsKey(Elemento))
                {
                    Pagina.LanzarMensaje("Usted se ha logueado desde otra ubicación, esta sesión se cerrará", TipoMensaje.Advertencia);
                    HttpContext.Current.Session.Abandon();
                    dato.Remove(Elemento);
                }
            }
        }
    }
}