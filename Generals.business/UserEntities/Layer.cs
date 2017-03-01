using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.Entity;
using System.Data;
using System.Data.Objects;
using System.Data.Objects.DataClasses;
using Generals.business.Common;

namespace Generals.business.UserEntities
{
    /// <summary>
    /// Clase base que contiene funcionalidades comunes
    /// </summary>
    public class Layer
    {
        #region "Atributos"
        /// <summary>
        /// Modelo que controla la persistencia de las entidades
        /// </summary>
        private Generals.business.UserEntities.dbGeneralsUser _modelo;
        
        #endregion

        #region "Propiedades"
        /// <summary>
        /// Modelo que controla la persistencia de las entidades
        /// </summary>
        protected Generals.business.UserEntities.dbGeneralsUser  Modelo { get { return _modelo; } set { _modelo = value; } }
        
        #endregion

        #region "Métodos Públicos"
        public Layer()
        {
            Modelo = new Generals.business.UserEntities.dbGeneralsUser();
        }

        public Layer(dbGeneralsUser modelo)
        {
            Modelo = modelo;
        }

        public dbGeneralsUser ObtenerModelo()
        {
            return Modelo;
        }

        public void DesvincularLista<T>(IEnumerable<T> Lista)
        {
            foreach (T item in Lista)
            {
                Modelo.Detach(item);
            }
        }
        #endregion

        #region "Métodos Privados"
        ///// <summary>
        ///// Invoca la escritura de un error de aplicacion
        ///// </summary>
        ///// <param name="ex"></param>
        //protected void EscribirError(Exception ex)
        //{
        //  Log.EscribirError(ex);
        //}

        /// <summary>
        /// Agrega al modelo una entidad
        /// </summary>
        /// <param name="entidad"></param>
        /// <param name="newRef"></param>
        /// <returns></returns>
        private object RetornarObjeto(object entidad, EntityKey newRef)
        {
            try
            {
                Modelo.Attach((EntityObject)entidad);
            }
            catch (Exception)
            {


            }
            return entidad;
        }

        /// <summary>
        /// Crea un objeto de clase rol y lo agrega al modelo
        /// </summary>
        /// <param name="IdRol">Identificador del objeto</param>
        /// <returns></returns>
        protected Roles CrearEntidadRol(long ? IdRol)
        {
            if (IdRol.HasValue)
            {
                Roles rol = new Roles();
                EntityKey newRef = new EntityKey("dbGeneralsUser.Roles", "id_rol", IdRol.Value);
                rol.EntityKey = newRef;
                rol.id_rol = IdRol.Value;                
                rol.desc_rol = "";
                return (Roles)RetornarObjeto(rol, newRef);
            }
            else
                return null;
        }           

        /// <summary>
        /// Crea un objeto de clase rol y lo agrega al modelo
        /// </summary>
        /// <param name="IdRol">Identificador del objeto</param>
        /// <returns></returns>
        protected Opciones CrearEntidadOpcion(long? Id)
        {
            if (Id.HasValue)
            {
                Opciones entidad = new Opciones();
                EntityKey newRef = new EntityKey("dbGeneralsUser.Opciones", "Idopciones", Id.Value);
                entidad.EntityKey = newRef;
                entidad.Idopciones= Id.Value;
                entidad.Name = "";
                return (Opciones)RetornarObjeto(entidad, newRef);
            }
            else
                return null;
        }

        /// <summary>
        /// Crea un objeto de clase autorizacion y lo agrega al modelo
        /// </summary>
        /// <param name="IdRol">Identificador del objeto</param>
        /// <returns></returns>
        protected AutorizacionesOpcion CrearEntidadAutorizacion(int? Id)
        {
            if (Id.HasValue)
            {
                AutorizacionesOpcion entidad = new AutorizacionesOpcion();
                EntityKey newRef = new EntityKey("dbGeneralsUser.AutorizacionesOpcion", "IdAutorizacion", Id.Value);
                entidad.EntityKey = newRef;
                entidad.IdAutorizacion = Id.Value;
                entidad.Titulo = "";
                return (AutorizacionesOpcion)RetornarObjeto(entidad, newRef);
            }
            else
                return null;
        }


        /// <summary>
        /// Desvincula una entidad del modelo
        /// </summary>
        /// <param name="entidad"></param>
        protected void desvincularEntidad(EntityObject entidad)
        {
            try
            {
                Modelo.Detach(entidad);
            }
            catch (Exception)
            {

            }
        }        

        /// <summary>
        /// Obtiene el valor de un parametro de configuracion de la lista de parametros
        /// </summary>
        /// <param name="Parametros">Lista de paramentros del servicio</param>
        /// <param name="Codigo">Codigo a buscar en la lista</param>
        /// <returns></returns>
        protected string ObtenerParametrosLista(List<Parametros> Parametros, string Codigo)
        {
            return Parametros.Where(p => p.Codigo == Codigo).FirstOrDefault().Valor;
        }
        #endregion
    }
}
