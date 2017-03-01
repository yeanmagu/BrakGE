using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Generals.business.Common;

namespace Generals.business.UserEntities
{
   public class Ingreso:Layer
    {
        /// <summary>
        /// Metodo para insercion de navegacion en el sistema
        /// </summary>
        /// <param name="nuevaNavegacion">Entidad que representa la navegacion que se almacena</param>
        /// <param name="mensaje">Mensaje de retorno para casos no exitosos</param>
        /// <returns></returns>
        public int InsertarNavegacion(Navegaciones nuevaNavegacion, ref string mensaje)
        {
            try
            {
                Modelo.AddToNavegaciones(nuevaNavegacion);
                Modelo.SaveChanges();
                return nuevaNavegacion.IdNavegacion;
            }
            catch (Exception ex)
            {
                mensaje = Common.Constantes.errorGeneral;
                Log.EscribirError(ex);
                return 0;
            }
        }
     

    }
}
