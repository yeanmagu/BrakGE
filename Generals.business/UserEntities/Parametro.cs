using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Generals.business.Common;

namespace Generals.business.UserEntities
{
    	/// <summary>
	/// Clase para administracion de parametros
	/// </summary>
    public class Parametro : Layer
    {
        /// <summary>
        /// Filtro por identificador de servicio
        /// </summary>
        public int? IdServicio { get { return _idservicio; } set { _idservicio = value; } }

        /// <summary>
        /// Filtro por identificador de servicio
        /// </summary>
        private int? _idservicio;

        #region "M�todos P�blicos"
        /// <summary>
        /// Realiza la consulta de parametro por codigo
        /// </summary>
        /// <param name="Codigo">Codigo del parametro consultado</param>
        /// <returns></returns>
        public string ConsultarParametro(string Codigo, int idServicio)
        {
            try
            {
                return (from P in Modelo.Parametros
                        where (P.Codigo == Codigo && P.IdServicio == idServicio)
                        select P).FirstOrDefault().Valor;
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                throw ex;
              
            }
        }

        /// <summary>
        /// Realiza la consulta de todos los parametros que pertenecen a un servicio
        /// </summary>
        /// <param name="idServicio">identificador del servicio consultado</param>
        /// <returns></returns>
        public List<Parametros> ConsultarParametros(int idServicio)
        {
            return (from P in Modelo.Parametros
                    where P.IdServicio == idServicio
                    orderby P.Codigo
                    select P).ToList();
        }


        /// <summary>
        /// Realiza la actualizacion de un parametro del sistema
        /// </summary>
        /// <param name="parametroModificado">Entidad que representa el parametro modificado</param>
        /// <param name="mensaje">Mensaje de retorno para casos no exitosos</param>
        /// <returns></returns>
        public bool Actualizar(Parametros parametroModificado, ref string mensaje)
        {
            try
            {
                Parametros parametroCache = ConsultarParametro(parametroModificado.IdParametro);
                parametroModificado.TipoParametro = parametroCache.TipoParametro;
                Modelo.ApplyCurrentValues("Parametros", parametroModificado);
                Modelo.SaveChanges();
                guardarAuditoria auditoria = new guardarAuditoria();
                auditoria.ActualizarUltimo("Parametros", string.Format("IdParametro={0}", parametroModificado.IdParametro),1);
                return true;
            }
            catch (Exception ex)
            {
                mensaje = Constantes.errorGeneral;
                Log.EscribirError(ex);
                return false;
            }
        }
        #endregion

        #region "M�todos Privados"
        /// <summary>
        /// Realiza la consulta de parametro por identificador
        /// </summary>
        /// <param name="Codigo">Identificador del parametro consultado</param>
        /// <returns></returns>
        public Parametros ConsultarParametro(int idParametro)
        {
            return (from P in Modelo.Parametros
                    where P.IdParametro == idParametro
                    select P).FirstOrDefault();
        }
        #endregion
    }
}