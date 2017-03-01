using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Generals.business.Common;

namespace Generals.business.UserEntities
{
    public class Rol:Layer
    {

        #region "Atributos"
        /// <summary>
        /// Filtro por nombre de rol
        /// </summary>
        private string _nombre;
        /// <summary>
        /// Filtro por identificador de servicio
        /// </summary>
        private int? _idservicio;
        /// <summary>
        /// Filtro por rol de usuario
        /// </summary>
        private long? _idrol;
        /// <summary>
        /// Filtro por mantenimiento de usuarios externos
        /// </summary>
        private bool? _mantenimiento;
        #endregion

        #region "Propiedades"
        /// <summary>
        /// Filtro por nombre de rol
        /// </summary>
        public string Nombre { get { return _nombre; } set { _nombre = value; } }

        /// <summary>
        /// Filtro por identificador de servicio
        /// </summary>
        public int? IdServicio { get { return _idservicio; } set { _idservicio = value; } }
        /// <summary>
        /// Filtro por rol de usuario
        /// </summary>
        public long? IdRol { get { return _idrol; } set { _idrol = value; } }
        /// <summary>
        /// Filtro por mantenimiento de usuarios externos
        /// </summary>
        public bool? Mantenimiento { get { return _mantenimiento; } set { _mantenimiento = value; } }
        #endregion

        #region "Métodos Públicos"
        /// <summary>
        /// Realiza la consulta de los roles dados los filtros definidos
        /// </summary>
        /// <returns></returns>
        private List<Roles> getRoles()
        {
            List<Roles> roles = (from R in Modelo.Roles.Include("Opciones").Include("AutorizacionesOpcion")
                                          join B in Modelo.Roles on R.NivelCreador equals B.id_rol
                                          where (!IdRol.HasValue ? true : R.NivelCreador == IdRol.Value)
                                          && (IdServicio.HasValue ? R.IdServicio == IdServicio.Value : true)
                                          && (!string.IsNullOrEmpty(Nombre) ? R.desc_rol.IndexOf(Nombre) != -1 : true)
                                          && (!Mantenimiento.HasValue ? true : (Mantenimiento.Value == false ? true : (R.Interno == false && B.Interno == true)))
                                          orderby R.desc_rol 
                                          select R).ToList();
            DesvincularLista(roles);
            return roles;
        }
        /// <summary>
        /// Realiza la consulta de las opciones permitidas segun los datos de filtro
        /// </summary>
        /// <param name="filtro">Entidad que contiene las opciones de filtro de la consulta</param>
        /// <returns></returns>
        public List<Roles> ConsultarRoles()
        {
            try
            {                                          
                List<Roles> roles = getRoles();
                return roles;
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                return null;
            }
        }
        /// <summary>
        /// Realiza la consulta de las opciones permitidas para un rol especifico
        /// </summary>        
        /// <returns></returns>
        public List<Opciones> ConsultarOpcionesRol()
        {
            List<Opciones> opciones = (
                from O in Modelo.Roles.Include("Opciones")
                where O.id_rol == IdRol
                && (O.IdServicio == IdServicio)
                select O
                ).First().Opciones.OrderBy(p => p.Orden).ToList();
            DesvincularLista(opciones);
            return opciones;
        }
        /// <summary>
        /// Realiza la consulta de las autorizaciones permitidas segun los datos de filtro
        /// </summary>
        /// <param name="filtro">Entidad que contiene las opciones de filtro de la consulta</param>
        /// <returns></returns>
        public List<AutorizacionesOpcion> ConsultarAutorizaciones()
        {
            try
            {               
                if (IdRol.HasValue)
                    return ConsultarAutorizacionesRol();
                else
                    return getAutorizaciones();
            }
            catch (Exception ex)
            {
                Common.Log.EscribirError(ex);
                return null;
            }
        }
        /// <summary>
        /// Realiza la consulta de las autorizaciones permitidas para un rol especifico
        /// </summary>        
        /// <returns></returns>
        public List<AutorizacionesOpcion> ConsultarAutorizacionesRol()
        {
            List<AutorizacionesOpcion> autorizaciones = new List<AutorizacionesOpcion>();
            var s = from A in Modelo.AutorizacionesOpcion
                    where A.Roles.Where(p => p.id_rol == IdRol).Count() != 0
                    select A;
            autorizaciones = s.ToList();
            DesvincularLista(autorizaciones);
            return autorizaciones;
        }       
        /// <summary>
        /// Realiza la consulta de las opciones de un servicio especifico
        /// </summary>        
        /// <returns></returns>
        private List<AutorizacionesOpcion> getAutorizaciones()
        {
            List<AutorizacionesOpcion> autorizaciones = (
                from O in Modelo.AutorizacionesOpcion
                where (O.Opciones.IdServicio == IdServicio)
                select O
                ).ToList();
            DesvincularLista(autorizaciones);
            return autorizaciones;
        }
        /// <summary>
        /// Realiza la actualizacion de un rol
        /// </summary>
        /// <param name="rolModificado">Entidad que representa el rol modificado</param>
        /// <param name="mensaje">Mensaje de retorno para casos no exitosos</param>
        /// <returns></returns>
        public long ActualizarRol(Roles rolModificado, ref string mensaje)
        {           
            try
            {                
                rolModificado.FechaModificacion = DateTime.Now;
                Roles rolCache = ConsultarRol(rolModificado.id_rol);
                Nombre = rolModificado.desc_rol;
                Roles rolExiste = ConsultarRolNombre();
                if (rolExiste != null && rolExiste.id_rol != rolModificado.id_rol)
                {
                    mensaje = "El rol ya se encuentra registrado en el sistema";
                    return 0;
                }
                rolModificado.FechaCreacion = rolCache.FechaCreacion;
                rolModificado.IdUsuarioCreacion = rolCache.IdUsuarioCreacion;
                rolModificado.IdServicio = rolCache.IdServicio;
                rolModificado.actor = rolCache.actor;
                int i = 0;
                int j = rolCache.Opciones.Count;
                while (i < j)
                {
                    Opciones itemcache = rolCache.Opciones.ElementAt(i);
                    //Si esta en cache pero no en el actualizado se elimina
                    if (rolModificado.Opciones.Where(p => p.Idopciones == itemcache.Idopciones).Count() == 0)
                    {
                        rolCache.Opciones.Remove(itemcache);
                        j--;
                    }
                    else
                        i++;
                }
                while (rolModificado.Opciones.Count != 0)
                {
                    Opciones itemcomplicacion = rolModificado.Opciones.ElementAt(0);
                    //Existe en el nuevo pero no existe en el actual
                    if (rolCache.Opciones.Where(p => p.Idopciones == itemcomplicacion.Idopciones).Count() == 0)
                    {
                        rolCache.Opciones.Add(CrearEntidadOpcion(itemcomplicacion.Idopciones));
                    }
                    else
                        desvincularEntidad(itemcomplicacion);
                    rolModificado.Opciones.Remove(itemcomplicacion);
                }
                i = 0;
                j = rolCache.AutorizacionesOpcion.Count;
                while (i < j)
                {
                    AutorizacionesOpcion itemcache = rolCache.AutorizacionesOpcion.ElementAt(i);
                    //Si esta en cache pero no en el actualizado se elimina
                    if (rolModificado.AutorizacionesOpcion.Where(p => p.IdAutorizacion == itemcache.IdAutorizacion).Count() == 0)
                    {
                        rolCache.AutorizacionesOpcion.Remove(itemcache);
                        j--;
                    }
                    else
                        i++;
                }
                while (rolModificado.AutorizacionesOpcion.Count != 0)
                {
                    AutorizacionesOpcion itemcomplicacion = rolModificado.AutorizacionesOpcion.ElementAt(0);
                    //Existe en el nuevo pero no existe en el actual
                    if (rolCache.AutorizacionesOpcion.Where(p => p.IdAutorizacion == itemcomplicacion.IdAutorizacion).Count() == 0)
                    {
                        rolCache.AutorizacionesOpcion.Add(CrearEntidadAutorizacion(itemcomplicacion.IdAutorizacion));
                    }
                    else
                        desvincularEntidad(itemcomplicacion);
                    rolModificado.AutorizacionesOpcion.Remove(itemcomplicacion);
                }               
                Modelo.ApplyCurrentValues("Roles", rolModificado);
                Modelo.SaveChanges();                
                guardarAuditoria auditoria = new guardarAuditoria();
                auditoria.ActualizarUltimo("Roles", string.Format("IdRol={0}", rolModificado.id_rol), IdServicio.Value);               
                return 1 ;
            }
            catch (Exception ex)
            {
                mensaje = Constantes.errorGeneral;
                Log.EscribirError(ex);
               return 0 ;
            }
        }
        /// <summary>
        /// Realiza la insercion de un rol
        /// </summary>
        /// <param name="rolNuevo">Entidad que representa el nuevo rol</param>
        /// <param name="mensaje">Mensaje de retorno para casos no exitosos</param>
        /// <returns></returns>
        public long InsertarRol(Roles rolNuevo, ref string mensaje)
        {
            try
            {
                Nombre = rolNuevo.desc_rol;
                IdServicio = rolNuevo.IdServicio;
                if (ConsultarRolNombre() == null)
                {
                    DateTime fecha = DateTime.Now;
                    rolNuevo.FechaCreacion = fecha;
                    rolNuevo.FechaModificacion = fecha;
                    int i = 0;
                    int j = rolNuevo.Opciones.Count;
                    //Relacion de opciones de menu
                    while (i < j)
                    {
                        Opciones item = rolNuevo.Opciones.ElementAt(i);
                        Opciones opcion;
                        opcion = CrearEntidadOpcion(item.Idopciones);
                        rolNuevo.Opciones.Remove(item);
                        desvincularEntidad(item);
                        rolNuevo.Opciones.Add(opcion);
                        i++;
                    }
                    i = 0;
                    j = rolNuevo.AutorizacionesOpcion.Count;
                    //Relacion de autorizaciones por pagina
                    while (i < j)
                    {
                        AutorizacionesOpcion item = rolNuevo.AutorizacionesOpcion.ElementAt(i);
                        AutorizacionesOpcion autorizacion;
                        autorizacion = CrearEntidadAutorizacion(item.IdAutorizacion);
                        rolNuevo.AutorizacionesOpcion.Remove(item);
                        desvincularEntidad(item);
                        rolNuevo.AutorizacionesOpcion.Add(autorizacion);
                        i++;
                    }
                    Modelo.AddToRoles(rolNuevo);
                    Modelo.SaveChanges();
                    guardarAuditoria  auditoria = new guardarAuditoria();
                    auditoria.ActualizarUltimo("Roles", string.Format("IdRol={0}", rolNuevo.id_rol), IdServicio.Value);
                    return rolNuevo.id_rol;
                }
                else
                {
                    mensaje = "El rol ya se encuentra registrado en el sistema";
                    return 0;
                }
            }
            catch (Exception ex)
            {
                mensaje = Common.Constantes.errorGeneral;
                Log.EscribirError(ex);
                return 0;
            }
        }
        /// <summary>
        /// Realiza la consulta de las opciones permitidas segun los datos de filtro
        /// </summary>
        /// <param name="filtro">Entidad que contiene las opciones de filtro de la consulta</param>
        /// <returns></returns>
        public List<Opciones> ConsultarOpciones()
        {
            try
            {                             
                if (IdRol.HasValue)
                    return ConsultarOpcionesRol();
                else
                    return getOpciones();
            }
            catch (Exception ex)
            {
                Common.Log.EscribirError(ex);
                return null;
            }
        }
        /// <summary>
        /// Realiza la consulta de las opciones de un servicio especifico
        /// </summary>        
        /// <returns></returns>
        private List<Opciones> getOpciones()
        {
            List<Opciones> opciones;
            opciones = (
               from O in Modelo.Opciones
               orderby O.Orden
               where (O.IdServicio == IdServicio)
               select O
               ).ToList();
            DesvincularLista(opciones);
            return opciones;
        }
        #endregion
        #region "Métodos Privados"
        /// <summary>
        /// Realiza la consulta de un rol especificamente por su id
        /// </summary>
        /// <returns></returns>
        public Roles ConsultarRol(long idRol)
        {
            return (from R in Modelo.Roles.Include("Opciones").Include("AutorizacionesOpcion")
                    where (R.id_rol == idRol)
                    select R).FirstOrDefault();
        }
        /// <summary>
        /// Realiza la consulta de los roles dados los filtros definidos
        /// </summary>
        /// <returns></returns>
        public Roles ConsultarRolNombre()
        {
            Roles roles = (from R in Modelo.Roles
                                    where (R.desc_rol == Nombre)
                                     && (IdServicio.HasValue ? R.IdServicio == IdServicio.Value : true)
                                    select R).FirstOrDefault();
            return roles;
        }
        #endregion
    }
}
