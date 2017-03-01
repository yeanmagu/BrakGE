using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web.UI;
using Generals.business.Common;
using Generals.business.Data;
namespace Generals.business.Entities
{
  public class UserControlBase: UserControl 
    {
        /// Realiza la visualizacion de un mensaje
        /// </summary>
        /// <param name="mensaje">Mensaje que se visualiza en pantalla</param>
        public void LanzarMensaje(string mensaje, TipoMensaje tipoMensaje)
        {
            string nombreScript = string.Format("{0}alert{1}", mensaje[0], mensaje[mensaje.Length - 1]);
            string titulo = "";
            string tipo = "";
            switch (tipoMensaje)
            {
                case TipoMensaje.Advertencia:
                    titulo = "Advertencia";
                    tipo = "warning";
                    break;
                case TipoMensaje.Error:
                    titulo = "Error";
                    tipo = "error";
                    break;
                case TipoMensaje.Exito:
                    titulo = "Satisfactorio";
                    tipo = "success";
                    break;
                case TipoMensaje.Campos:
                    titulo = "Campos obligatorios";
                    tipo = "error";
                    break;
                default:
                    break;
            }
            ScriptManager.RegisterStartupScript(this, typeof(Page), nombreScript, string.Format("showDialog('{0}','{1}' ,'{2}');", titulo, mensaje, tipo), true);
        }
    }
}
