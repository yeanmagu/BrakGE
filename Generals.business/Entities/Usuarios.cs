using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Generals.framework.DataAccess;
using Generals.framework.Exceptions;
using System.Data;
using System.Web.Security;
using System.Data.Linq.SqlClient;
using Generals.business.Common;
using Generals.business.UserEntities;
using Generals.business.Data;


namespace Generals.business.Entities
{
    [Serializable]
    public class Usuarios
    {
        [Serializable]
        public class Usuario
        {
            private long _Id = 0;
            private long _IdRol = 0;
            private String _UserName;
            private String _Password;
            private String _Nombre;
            private String _NumeroIdentificacion;
            private String _ApellidoPaterno;
            private String _ApellidoMaterno;
            private String _CorreoElectronico;
            private String _Region;
            private String _TelefonoContacto;
            private bool? _islogged;
            private long ?  _IdOficina;
            private String _Organizacion;
         
            private long _Nomina;
            private long _idPerfil;
            private string _DireccionIP;
            private string _SIRH;
            private Roles.Rol _Rol;
         
            public long Id { get { return _Id; }}
            public long? IdOficina { get { return _IdOficina; } }
            public long IdRol { get { return _IdRol; } set { _IdRol = value; } }
            public String Region { get { return _Region; } }
            public String TelefonoContacto { get { return _TelefonoContacto; } }
            public bool? islogged { get { return _islogged; } }
            public String UserName { get { return _UserName; } }
            public String Password { get { return _Password; } }
            public String Nombre { get { return _Nombre; } }
            public String NumeroIdentificacion { get { return _NumeroIdentificacion; } }
            public String ApellidoPaterno { get { return _ApellidoPaterno; } }
            public String ApellidoMaterno { get { return _ApellidoMaterno; } }
            public String NombreCompleto { get { return NombreA + " " + ApellidoPaternoA + " " + ApellidoMaternoA; } }
            public String CorreoElectronico { get { return _CorreoElectronico; } }
            public String Organizacion { get { return _Organizacion; } }
            public long Nomina { get { return _Nomina; } }
            public long idPerfil { get { return _idPerfil; } }
            public string DireccionIP { get { return _DireccionIP; } }
            public string SIRH { get { return _SIRH; } }
            public Roles.Rol Rol { get { return _Rol; } }
            public string Division { set; get; }
            public bool? Activo { set; get; }
            public long IdResponsable { get; set; }

            public long IdA { get; set; }
            public long? IdRolA { get; set; }
            public string UserNameA { get; set; }
            public string PasswordA { get; set; }
            public string NombreA { get; set; }
            public string ApellidoPaternoA { get; set; }
            public string ApellidoMaternoA { get; set; }
            public string CorreoElectronicoA { get; set; }
            public string OrganizacionA { get; set; }
            public long? NominaA { get; set; }
            public string DireccionIPA { get; set; }
            public string SIRHA { get; set; }
            public bool? ActivoA { get; set; }
            public long? idPerfilA { get; set; }
            public DateTime? FechaAltaA { get; set; }
            public bool? BloqueoA { get; set; }
            public DateTime? FechaUltimaVisitaA { get; set; }
            public long? IdResponsableA { get; set; }
            public bool? _changePassword { get; set; }

            public Usuario()
            { }

              public Usuario(long Id, long? IdRol, String UserName, String Password, String Nombre,
                            String ApellidoPaterno, String ApellidoMaterno,
                            String CorreoElectronico, String Organizacion, bool? activo,bool? changePassword,
                             long ? id_oficina,string region,string numero_identificacion,bool? isLogged,string telefono)
              {
                  _Id = Id;
                  _IdRol = IdRol.HasValue ? IdRol.Value : 0;
                  _UserName = UserName;
                  _Password = Password;
                  _Nombre = Nombre;
                  _ApellidoPaterno = ApellidoPaterno;
                  _ApellidoMaterno = ApellidoMaterno;
                  _CorreoElectronico = CorreoElectronico;

                  _Organizacion = Organizacion;
                  _changePassword = changePassword;
                  _IdOficina = id_oficina;
                  _NumeroIdentificacion = numero_identificacion;
                  _Region = region;
                  _islogged = isLogged;
                  _TelefonoContacto = telefono;
                  if (_IdRol > 0)
                      _Rol = Roles.GetRol(_IdRol);
                  else
                      _Rol = null;

                  Activo = activo;
                  
              }
            public Usuario(long Id, long? IdRol, String UserName, String Password, String Nombre,
                            String ApellidoPaterno, String ApellidoMaterno,
                            String CorreoElectronico, String Organizacion, bool? activo,bool? changePassword, long? id_oficina)
            {
                _Id = Id;
                _IdRol = IdRol.HasValue ? IdRol.Value : 0;
                _UserName = UserName;
                _Password = Password;
                _Nombre = Nombre;
                _ApellidoPaterno = ApellidoPaterno;
                _ApellidoMaterno = ApellidoMaterno;
                _CorreoElectronico = CorreoElectronico;

                _Organizacion = Organizacion;
                _changePassword = changePassword;
                _IdOficina = id_oficina;

                if (_IdRol > 0)
                    _Rol = Roles.GetRol(_IdRol);
                else
                    _Rol = null;

                Activo = activo;
               
            }

            ///<summary>
            ///Constructor dedicado a la alta de Usuarios
            ///</summary>
            public Usuario(long _Id, long? _IdRol, string _UserName, string _Password, string _Nombre, string _ApellidoPaterno, string _ApellidoMaterno,
                            string _CorreoElectronico, string _Organizacion,
                            bool? _Activo, DateTime? _FechaAlta, bool? _Bloqueo, DateTime? _FechaUltimaVisita)
            {
                IdA = _Id;
                IdRolA = _IdRol;
                UserNameA = _UserName;
                PasswordA = _Password;
                NombreA = _Nombre;
                ApellidoPaternoA = _ApellidoPaterno;
                ApellidoMaternoA = _ApellidoMaterno;
                CorreoElectronicoA = _CorreoElectronico;
                OrganizacionA = _Organizacion;
                ActivoA = _Activo;
                FechaAltaA = _FechaAlta;
                BloqueoA = _Bloqueo;
                FechaUltimaVisitaA = _FechaUltimaVisita;
            }

            public long Insert()
            {
                try
                {
                    dbGeneralsUser DataContext = new dbGeneralsUser();
                    
                    UserEntities.Usuarios newUsuario = new UserEntities.Usuarios();

                    
                    newUsuario.IdRol = IdRolA ?? 0;
                    newUsuario.username = UserNameA;
                    newUsuario.password = PasswordA;
                    newUsuario.nombre = NombreA;
                    newUsuario.ap_paterno = ApellidoPaternoA;
                    newUsuario.ap_materno = ApellidoMaternoA;
                    newUsuario.correo_electronico = CorreoElectronicoA;
                    newUsuario.organizacion = OrganizacionA;
                    newUsuario.activo = ActivoA;
                    newUsuario.fecha_alta = FechaAltaA;
                    newUsuario.id_responsable = IdResponsableA;

                    DataContext.AddToUsuarios(newUsuario);
                    DataContext.SaveChanges();

                    IdA = newUsuario.id_usuario;

                    return IdA;
                }
                catch (Exception ex)
                {
                    throw (ex);
                }
            }

            public long Update()
            {
                try
                {
                    dbGeneralsUser DataContext = new dbGeneralsUser();

                    var seleccion = (from e in DataContext.Usuarios
                                     where e.id_usuario == IdA
                                     select e);
                    if (seleccion != null && seleccion.Count() > 0)
                    {
                        var item = seleccion.First();
                        item.id_rol = IdRolA;
                        item.nombre = NombreA;
                        item.ap_paterno = ApellidoPaternoA;
                        item.ap_materno = ApellidoMaternoA;
                        item.correo_electronico = CorreoElectronicoA;
                        item.organizacion = OrganizacionA;
                        item.activo = ActivoA;
                        item.fecha_alta = FechaAltaA;
                        item.id_responsable = IdResponsableA;

                        DataContext.SaveChanges();
                    }

                    return IdA;
                }
                catch (Exception ex)
                {
                    throw (ex);
                }
            }

            public long InsertOrUpdateInformation()
            {
                try
                {
                    long Id = 0;

                    if (IdA > 0)
                        Id = Update();
                    else
                        Id = Insert();

                    return IdA;
                }
                catch (Exception ex)
                {
                    Exception e = new Exception("Error al intentar registrar la información de Usuario. ", ex);
                    ExceptionManager.HandleException(e, 1, 5000, 1);
                    throw (e);
                }
            }
        }

        public Usuarios()
        {
        }

        public static Usuarios.Usuario GetUsuario(string valor, int tipo)
        {
            Usuario usuario = null;

            dbGeneralsUser DataContext = new dbGeneralsUser();

            try
            {
                var seleccion = (from c in DataContext.Usuarios select c);
                if (tipo == 1)
                {
                    seleccion = (from c in DataContext.Usuarios
                                 where c.numero_identificacion == valor
                                 select c);
                }
                else
                    if (tipo == 3)
                    {
                        seleccion = (from c in DataContext.Usuarios
                                     where SqlMethods.Like(c.nombre, "%" + valor + "%")
                                     select c);
                    }
                    else
                        if (tipo == 2)
                        {
                            seleccion = (from c in DataContext.Usuarios
                                         where c.username == valor
                                         select c);
                        }

                if (seleccion.Count() > 0)
                {
                    var item = seleccion.First();
                    usuario = new Usuario(item.id_usuario,
                                          item.id_rol,
                                          item.username,
                                          item.password,
                                          item.nombre,
                                          item.ap_paterno,
                                          item.ap_materno,
                                          item.correo_electronico,
                                          item.organizacion,
                                          item.activo,
                                          item.changePassword,
                                          item.id_oficina,
                                          item.region,
                                          item.numero_identificacion,
                                          item.isLogged,
                                          item.tel_contacto);

                }
            }
            catch (Exception ex)
            {
                //Exception exep = new Exception(errores.obtiene_usuario, ex);
                //Generals.framework.Exceptions.ExceptionManager.HandleException(exep, System.Convert.ToInt32(Generals.business.logEntryType.Error), 2018, System.Convert.ToInt16(Generals.business.logcategory.Errores_Entidades));
                //throw (exep);
            }

            return usuario;
        }

        public static Usuarios.Usuario GetUsuario(long Id)
        {
            try
            {
                Usuario usuario = new Usuario();

                dbGeneralsUser DataContext = new dbGeneralsUser();


                var seleccion = (from c in DataContext.Usuarios
                                 where c.id_usuario == Id
                                 select c);

                if (seleccion.Count() > 0)
                {
                    var item = seleccion.First();
                    usuario = new Usuario(item.id_usuario,
                                            item.id_rol,
                                            item.username,
                                            item.password,
                                            item.nombre,
                                            item.ap_paterno,
                                            item.ap_materno,
                                            item.correo_electronico,
                                            item.organizacion,
                                            item.activo,
                                            item.changePassword,
                                            item.id_oficina);

                }

                return usuario;
            }
            catch (Exception ex)
            {
                Exception e = new Exception("Error en el Método GetUsuario(long Id).", ex);
                ExceptionManager.HandleException(e, 1, 5000, 1);
                throw (e);
            }
        }

        public static Usuarios.Usuario GetUsuarioFull(long Id)
        {
            try
            {
                Usuario usuario = new Usuario();

                dbGeneralsUser DataContext = new dbGeneralsUser();


                var seleccion = (from c in DataContext.Usuarios
                                 where c.id_usuario == Id
                                 select c);
                 
                if (seleccion.Count() > 0)
                {
                    var item = seleccion.First();

                    usuario = new Usuario(item.id_usuario,
                                          item.id_rol,
                                          item.username,
                                          item.password,
                                          item.nombre,
                                          item.ap_paterno,
                                          item.ap_materno,
                                          item.correo_electronico,
                                          item.organizacion,
                                          item.activo,
                                          item.fecha_alta,
                                          item.bloqueo,
                                          item.fecha_ultimavisita);
                 }
                return usuario;   

            }
            catch (Exception ex)
            {
                Exception e = new Exception("Error en el Método GetUsuarioFull(long Id).", ex);
                ExceptionManager.HandleException(e, 1, 5000, 1);
                throw (e);
            }
        }

        public static Usuarios.Usuario GetUsuario(String UserName)
        {
            try
            {
                Usuario usuario = new Usuario();

                dbGeneralsUser DataContext = new dbGeneralsUser();


                var seleccion = (from c in DataContext.Usuarios
                                 where c.username == UserName
                                 select c);

                if (seleccion.Count() > 0)
                {
                    var item = seleccion.First();

                    usuario = new Usuario(item.id_usuario,
                                            item.id_rol,
                                            item.username,
                                            item.password,
                                            item.nombre,
                                            item.ap_paterno,
                                            item.ap_materno,
                                            item.correo_electronico,
                                            item.organizacion,
                                            item.activo,
                                            item.changePassword,
                                            item.id_oficina);
                    //throw new Exception("error");

                }

               
                return usuario;
            }
            catch (Exception ex)
            {
                Exception e = new Exception("Error al ejecutar el metodo GetUsuario.", ex);
                ExceptionManager.HandleException(e, 1, 5000, 1);
                Log.EscribirError(e);
                throw (e);
            }
        }
     
        public static List<Usuarios.Usuario> GetUsuarios(long IdRol)
        {
            try
            {
                List<Usuarios.Usuario> usuarios = new List<Usuarios.Usuario>();

                dbGeneralsUser DataContext = new dbGeneralsUser();


                var seleccion = (from c in DataContext.Usuarios
                                 where c.id_rol == IdRol && c.id_responsable ==0
                                 select c);

                foreach (var item in seleccion)
                    usuarios.Add(new Usuario(item.id_usuario,
                                            item.id_rol,
                                            item.username,
                                            item.password,
                                            item.nombre,
                                            item.ap_paterno,
                                            item.ap_materno,
                                            item.correo_electronico,
                                            item.organizacion,
                                            item.activo,
                                            item.changePassword,
                                            item.id_oficina));

                return usuarios;
            }
            catch (Exception ex)
            {
                Exception e = new Exception("Error en el Método GetUsuarios(long IdRol).", ex);
                ExceptionManager.HandleException(e, 1, 5000, 1);
                throw (e);
            }
        }

        public static List<Usuarios.Usuario> GetUsuariosXRol(string Rol)
        {
            try
            {
                List<Usuarios.Usuario> usuarios = new List<Usuarios.Usuario>();

                dbGeneralsUser DataContext = new dbGeneralsUser();


                var seleccion = (from c in DataContext.Usuarios
                                 join r in DataContext.Roles on c.id_rol equals r.id_rol
                                 where r.desc_rol == Rol 
                                 select c);

                foreach (var item in seleccion)
                    usuarios.Add(new Usuario(item.id_usuario,
                                            item.id_rol,
                                            item.username,
                                            item.password,
                                            item.nombre,
                                            item.ap_paterno,
                                            item.ap_materno,
                                            item.correo_electronico,
                                            item.organizacion,
                                            item.activo,
                                            item.changePassword,
                                            item.id_oficina));

                return usuarios;
            }
            catch (Exception ex)
            {
                Exception e = new Exception("Error en el Método GetUsuarios(long IdRol).", ex);
                ExceptionManager.HandleException(e, 1, 5000, 1);
                throw (e);
            }
        }
        public List<Usuarios.Usuario> GetUsuariosXidRol(long idAdmin)
        {
            try
            {
                List<Usuarios.Usuario> usuarios = new List<Usuarios.Usuario>();

                dbGeneralsUser DataContext = new dbGeneralsUser();


                var seleccion = (from c in DataContext.Usuarios
                                 join r in DataContext.Roles on c.id_rol equals r.id_rol
                                 where  c.id_usuario == idAdmin
                                 select c);

                foreach (var item in seleccion)
                    usuarios.Add(new Usuario(item.id_usuario,
                                            item.id_rol,
                                            item.username,
                                            item.password,
                                             item.nombre + " " + item.ap_paterno + " " + item.ap_materno,
                                            item.ap_paterno,
                                            item.ap_materno,
                                            item.correo_electronico,
                                            item.organizacion,
                                            item.activo,
                                            item.changePassword,
                                            item.id_oficina));

                return usuarios;
            }
            catch (Exception ex)
            {
                Exception e = new Exception("Error en el Método GetUsuarios(long IdRol).", ex);
                ExceptionManager.HandleException(e, 1, 5000, 1);
                throw (e);
            }
        }
        public  List<Usuarios.Usuario> GetUsuariosXidRol(int Rol,long idAdmin)
        {
            try
            {
                List<Usuarios.Usuario> usuarios = new List<Usuarios.Usuario>();

                dbGeneralsUser DataContext = new dbGeneralsUser();


                var seleccion = (from c in DataContext.Usuarios
                                 join r in DataContext.Roles on c.id_rol equals r.id_rol
                                 where r.id_rol == Rol || c.id_usuario==idAdmin
                                 select c);

                foreach (var item in seleccion)
                    usuarios.Add(new Usuario(item.id_usuario,
                                            item.id_rol,
                                            item.username,
                                            item.password,
                                            item.nombre + " " + item.ap_paterno+" "+ item.ap_materno,
                                            item.ap_paterno,
                                            item.ap_materno,
                                            item.correo_electronico,
                                            item.organizacion,
                                            item.activo,
                                            item.changePassword,
                                            item.id_oficina));

                return usuarios;
            }
            catch (Exception ex)
            {
                Exception e = new Exception("Error en el Método GetUsuarios(long IdRol).", ex);
                ExceptionManager.HandleException(e, 1, 5000, 1);
                throw (e);
            }
        }
        public static DataSet GetUsuariosByRolId(long IdRol)
        {
            try
            {
                ArrayList listParameters = new ArrayList();

                listParameters.Add(new ParameterIn("id_rol", DbType.Int64, IdRol));

                DataSet ds = DataBase.ExecuteDataSet(null, "SP_GetUsuariosByRolId", (ParameterIn[])listParameters.ToArray(typeof(ParameterIn)));

                return ds;
            }
            catch (Exception ex)
            {
                Exception e = new Exception("Error al ejecutar el Stored Procedure SP_GetUsuariosByRolId", ex);
                ExceptionManager.HandleException(e, 1, 5000, 1);
                throw (e);
            }
        }
        //NATALIA CASTRO 20/02/2012 
        public static DataSet GetUsuariosByRolIdSuc(long IdRol, long IdOficina)
        {
            try
            {
                ArrayList listParameters = new ArrayList();

                listParameters.Add(new ParameterIn("id_rol", DbType.Int64, IdRol));
                listParameters.Add(new ParameterIn("id_oficina", DbType.Int64, IdOficina));

                DataSet ds = DataBase.ExecuteDataSet(null, "SP_GetUsuariosByRolIdOficina", (ParameterIn[])listParameters.ToArray(typeof(ParameterIn)));

                return ds;
            }
            catch (Exception ex)
            {
                Exception e = new Exception("Error al ejecutar el Stored Procedure SP_GetUsuariosByRolIdOficina", ex);
                ExceptionManager.HandleException(e, 1, 5000, 1);
                throw (e);
            }
        }

        public static long GetUsuariosByCH(long IdCH)
        {
            try
            {
                ArrayList listParameters = new ArrayList();

                listParameters.Add(new ParameterIn("idCH", DbType.Int64, IdCH));

                DataSet ds = DataBase.ExecuteDataSet(null, "SP_GetUsuariosByCH", (ParameterIn[])listParameters.ToArray(typeof(ParameterIn)));

                if (ds != null && ds.Tables[0].Rows.Count > 0)
                {
                    return long.Parse(ds.Tables[0].Rows[0]["id_usuario"].ToString());
                }
                else
                    return 0;

            }
            catch (Exception ex)
            {
                Exception e = new Exception("Error al ejecutar el Stored Procedure SP_GetUsuariosByCH", ex);
                ExceptionManager.HandleException(e, 1, 5000, 1);
                throw (e);
            }
        }
        public static long SP_GetUsuarioCarruselByCH(long IdCH, long IdRol)
        {
            try
            {
                ArrayList listParameters = new ArrayList();

                listParameters.Add(new ParameterIn("idCH", DbType.Int64, IdCH));
                listParameters.Add(new ParameterIn("IdRol", DbType.Int64, IdRol));

                DataSet ds = DataBase.ExecuteDataSet(null, "SP_GetUsuarioCarruselByCH", (ParameterIn[])listParameters.ToArray(typeof(ParameterIn)));

                if (ds != null && ds.Tables[0].Rows.Count > 0)
                {
                    return long.Parse(ds.Tables[0].Rows[0]["id_usuario"].ToString());
                }
                else
                    return 0;

            }
            catch (Exception ex)
            {
                Exception e = new Exception("Error al ejecutar el Stored Procedure SP_GetUsuarioCarruselByCH", ex);
                ExceptionManager.HandleException(e, 1, 5000, 1);
                throw (e);
            }
        }
        //public static DataSet ObtenerUsuarioActividad(long IdSolicitud, string IdActividad, long IdRol)
        //{
        //    try
        //    {
        //        ArrayList listParameters = new ArrayList();

        //        listParameters.Add(new ParameterIn("IdSolicitud", DbType.Int64, IdSolicitud));
        //        listParameters.Add(new ParameterIn("IdActividad", DbType.String, IdActividad));
        //        listParameters.Add(new ParameterIn("IdRol", DbType.Int64, IdRol));

        //        DataSet dsUsuario = DataBase.ExecuteDataSet(null, "SP_ObtenerUsuarioActividad", (ParameterIn[])listParameters.ToArray(typeof(ParameterIn)));

        //        return dsUsuario;
        //    }
        //    catch (Exception ex)
        //    {
        //        Exception e = new Exception("Error al ejecutar el Stored Procedure SP_ObtenerUsuarioActividad", ex);
        //        ExceptionManager.HandleException(e, 1, 5000, 1);
        //        throw (e);
        //    }
        //}
        public static DataSet GetNombreUsuarios(long IdRol)
        {
            try
            {
                ArrayList listParameters = new ArrayList();

                listParameters.Add(new ParameterIn("IdRol", DbType.Int64, IdRol));

                DataSet ds = DataBase.ExecuteDataSet(null, "sp_SelectUsuarioByRol", (ParameterIn[])listParameters.ToArray(typeof(ParameterIn)));

                return ds;
            }
            catch (Exception ex)
            {
                Exception e = new Exception("Error al ejecutar el Stored Procedure sp_SelectUsuarioByRol", ex);
                ExceptionManager.HandleException(e, 1, 5000, 1);
                throw (e);
            }
        }

      
        public static DataSet ObtenerUsuarioNomina(long nomina)
        {
            try
            {
                ArrayList listParameters = new ArrayList();

                listParameters.Add(new ParameterIn("@nomina", DbType.Int64, nomina));

                DataSet ds = DataBase.ExecuteDataSet(null, "SP_ObtenerUsuarioNomina", (ParameterIn[])listParameters.ToArray(typeof(ParameterIn)));

                return ds;
            }
            catch (Exception ex)
            {
                Exception e = new Exception("Error al ejecutar el Stored Procedure SP_ObtenerUsuarioNomina", ex);
                ExceptionManager.HandleException(e, 1, 5000, 1);
                throw (e);
            }
        }
        public static string ObtenerNombreNomina(long nomina)
        {
            try
            {
                DataSet dsNomina = ObtenerUsuarioNomina(nomina);

                if (dsNomina != null && dsNomina.Tables[0].Rows.Count > 0)
                {
                    string nombre = dsNomina.Tables[0].Rows[0]["nombre"].ToString();
                    string apPaterno = dsNomina.Tables[0].Rows[0]["ap_paterno"].ToString();
                    string apMaterno = dsNomina.Tables[0].Rows[0]["ap_materno"].ToString();

                    return nombre + " " + apPaterno + " " + apMaterno;
                }
                else
                    return String.Empty;
            }
            catch (Exception ex)
            {
                throw (ex);
            }
        }
        public static Usuario ObtenerNomina(long nomina)
        {
            Usuario usuario = null;
            try
            {
                DataSet dsNomina = ObtenerUsuarioNomina(nomina);

                if (dsNomina != null && dsNomina.Tables[0].Rows.Count > 0)
                {
                    usuario = new Usuario(long.Parse(dsNomina.Tables[0].Rows[0]["id_usuario"].ToString()),
                                          long.Parse(dsNomina.Tables[0].Rows[0]["id_rol"].ToString()),
                                          dsNomina.Tables[0].Rows[0]["nombre"].ToString(),
                                          dsNomina.Tables[0].Rows[0]["ap_paterno"].ToString(),
                                          dsNomina.Tables[0].Rows[0]["ap_materno"].ToString(),
                                          dsNomina.Tables[0].Rows[0]["username"].ToString(),
                                          dsNomina.Tables[0].Rows[0]["password"].ToString(),
                                          dsNomina.Tables[0].Rows[0]["correo_electronico"].ToString(),
                                          dsNomina.Tables[0].Rows[0]["organizacion"].ToString(),
                                          bool.Parse(dsNomina.Tables[0].Rows[0]["activo"].ToString()),
                                          bool.Parse(dsNomina.Tables[0].Rows[0]["changePassword"].ToString()),
                                          long.Parse(dsNomina.Tables[0].Rows[0]["id_oficina"].ToString()));

                }

                return usuario;
            }
            catch (Exception ex)
            {
                throw (ex);
            }
        }

        public static bool PasswordUpdate(long idUsuario, string password)
        {
            try
            {
                dbGeneralsUser dataContext = new dbGeneralsUser();

                var seleccion = (from e in dataContext.Usuarios
                                 where e.id_usuario == idUsuario
                                 select e);

                if (seleccion != null && seleccion.Count() > 0)
                {
                    var item = seleccion.First();
                    item.password = password;
                    dataContext.SaveChanges ();
                    return true;
                }
                else
                    return false;

            }catch(Exception ex)
            {
                throw (ex);
            }
        }

        public static bool ActiveUpdate(long idUsuario, bool activo)
        {
            try
            {
                dbGeneralsUser dataContext = new dbGeneralsUser();

                var seleccion = (from e in dataContext.Usuarios
                                 where e.id_usuario == idUsuario
                                 select e);

                if (seleccion != null && seleccion.Count() > 0)
                {
                    var item = seleccion.First();
                    item.activo = activo;
                    dataContext.SaveChanges();
                    return true;
                }
                else
                    return false;

            }
            catch (Exception ex)
            {
                throw (ex);
            }
        }

        public static bool UpdateBloqueo(long idUsuario, bool bloqueo)
        {
            try
            {
                dbGeneralsUser dataContext = new dbGeneralsUser();

                var seleccion = (from e in dataContext.Usuarios
                                 where e.id_usuario == idUsuario
                                 select e);

                if (seleccion != null && seleccion.Count() > 0)
                {
                    var item = seleccion.First();
                    item.bloqueo = bloqueo;
                    dataContext.SaveChanges();
                    return true;
                }
                else
                    return false;

            }
            catch (Exception ex)
            {
                throw (ex);
            }
        }

        public static bool VerificarExistenciaUsuario(string username)
        {
            try
            {
                dbGeneralsUser dataContext = new dbGeneralsUser();

                var seleccion = (from e in dataContext.Usuarios
                                 where e.username == username
                                 select e);

                if (seleccion != null && seleccion.Count() > 0)
                    return true;
                else
                    return false;
            }
            catch (Exception ex)
            {
                throw (ex);
            }
        }

        public static bool ChangePassword(long IdUsario,string Password)
        {
            try
            {
                ArrayList listParameters = new ArrayList();
                //Password = FormsAuthentication.HashPasswordForStoringInConfigFile(Password, "sha1");

                listParameters.Add(new ParameterIn("@IdUsuario", DbType.Int32, IdUsario));
                listParameters.Add(new ParameterIn("@NewPassword", DbType.String, Password));

                DataBase.ExecuteDataSet(null, "CPsp_ChangeFirstPassword", (ParameterIn[])listParameters.ToArray(typeof(ParameterIn)));

                return true;
            }
            catch (Exception ex)
            {
                Exception e = new Exception("Error al Ejecutar CPsp_ChangeFirstPassword", ex);
                ExceptionManager.HandleException(e, 1, 5000, 1);
                throw (e);
            }
        }

        public static void Guardar(long id, string Usario, string Password, long IdRol, string organizacion,
           string nombre, string ap_paterno, string ap_materno, string correo_electronico, string numero_identificacion,
           string tel_contacto, string id_oficina, string region, bool isLogged)
        {

            dbGeneralsUser DataContext = new dbGeneralsUser();

            var seleccion = (from c in DataContext.Usuarios
                             where c.username == Usario
                             select c);

            if (seleccion.Count() > 0)
            {

                seleccion.First().id_rol = IdRol;
                seleccion.First().username = Usario;
                seleccion.First().password = Password;
                seleccion.First().nombre = nombre;
                seleccion.First().ap_paterno = ap_paterno;
                seleccion.First().ap_materno = ap_materno;
                seleccion.First().correo_electronico = correo_electronico;
                seleccion.First().tel_contacto = tel_contacto;
                //seleccion.First().organizacion = organizacion;
                //seleccion.First().id_oficina = int.Parse(id_oficina);
                //seleccion.First().region = region;
                seleccion.First().numero_identificacion = numero_identificacion;
                seleccion.First().isLogged = isLogged;

                DataContext.SaveChanges();
            }
            else
            {
                if (id > 0)
                    CreateNewuser(Usario, Password, IdRol, organizacion, nombre, ap_paterno, ap_materno, correo_electronico, numero_identificacion,
                                 tel_contacto, id_oficina);
            }
        }

        public static bool CreateNewuser(string Usario, string Password, long IdRol, string organizacion,
            string nombre, string ap_paterno, string ap_materno, string correo_electronico, string numero_identificacion,
            string tel_contacto, string id_oficina)
        {
            try
            {
                ArrayList listParameters = new ArrayList();

                listParameters.Add(new ParameterIn("@id_rol", DbType.Int64, IdRol));
                listParameters.Add(new ParameterIn("@nombre", DbType.String, nombre));
                listParameters.Add(new ParameterIn("@ap_paterno", DbType.String, ap_paterno));
                listParameters.Add(new ParameterIn("@ap_materno", DbType.String, ap_materno));
                listParameters.Add(new ParameterIn("@username", DbType.String, Usario));
                listParameters.Add(new ParameterIn("@Password", DbType.String, Password));
                listParameters.Add(new ParameterIn("@correo_electronico", DbType.String, correo_electronico));
                listParameters.Add(new ParameterIn("@organizacion", DbType.String, organizacion));
                listParameters.Add(new ParameterIn("@id_oficina", DbType.String, id_oficina));
                listParameters.Add(new ParameterIn("@tel_contacto", DbType.String, tel_contacto));
                listParameters.Add(new ParameterIn("@numero_identificacion", DbType.String, numero_identificacion));
                DataBase.ExecuteDataSet(null, "CP_CreateUser", (ParameterIn[])listParameters.ToArray(typeof(ParameterIn)));

                return true;
            }
            catch (Exception ex)
            {
                Exception e = new Exception("Error al Crear el Nuevo Usuario", ex);
                ExceptionManager.HandleException(e, 1, 5000, 1);
                throw (e);
            }
        }

        public static int CountUsuario(string identificacion)
        {
            dbGeneralsUser DataContext = new dbGeneralsUser();
            var seleccion = (from c in DataContext.Usuarios select c);
            seleccion = (from c in DataContext.Usuarios
                         where c.numero_identificacion == identificacion
                         select c);

            return seleccion.Count();

        }

       

        public static void InsertUsuBandEnt(long IdUserTecPref, long IdSolicitud, long IdRol, string IdAct)
        {
            try
            {
                ArrayList listParameters = new ArrayList();

                listParameters.Add(new ParameterIn("@IdUserTecPref",DbType.Int64, Convert.ToInt64(IdUserTecPref)));
                listParameters.Add(new ParameterIn("@IdSolicitud", DbType.Int64, Convert.ToInt64(IdSolicitud)));
                listParameters.Add(new ParameterIn("@IdRol", DbType.Int64, Convert.ToInt64(IdRol)));
                listParameters.Add(new ParameterIn("@IdAct", DbType.String, IdAct));
                DataBase.ExecuteDataSet(null, "Sp_InsertaUserBanEnt", (ParameterIn[])listParameters.ToArray(typeof(ParameterIn)));
            }
            catch (Exception ex)
            {
                Exception e = new Exception("Ocurrio un error al Insertar en AsignacionesPresto.", ex);
                ExceptionManager.HandleException(e, 1, 5000, 1);
                throw (e);
            }
        }

      

        public static void BalanceoFront(long IdSolicitud, string id_actividad)
        {
            try
            {
                ArrayList listParameters = new ArrayList();

                listParameters.Add(new ParameterIn("@IdSolicitud", DbType.Int64, IdSolicitud));
                listParameters.Add(new ParameterIn("@IdRol", DbType.Int64, 3));
                listParameters.Add(new ParameterIn("@id_actividad", DbType.String, id_actividad));
                DataBase.ExecuteDataSet(null, "SP_AsignacionesPresto", (ParameterIn[])listParameters.ToArray(typeof(ParameterIn)));
            }
            catch (Exception ex)
            {
                Exception e = new Exception("Ocurrio un error al Insertar en AsignacionesPresto.", ex);
                ExceptionManager.HandleException(e, 1, 5000, 1);
                throw (e);
            }
        }

       

        public static void InsertUsuarioBandejaEntrada(long IdSolicitud, string transicion, string Activity)
        {
            try
            {
                ArrayList listParameters = new ArrayList();
                listParameters.Add(new ParameterIn("@IdSolicitud", DbType.Int64, @IdSolicitud));
                listParameters.Add(new ParameterIn("@IdTransicion", DbType.String, transicion));
                listParameters.Add(new ParameterIn("@IdActividadActual", DbType.String, Activity));
                DataBase.ExecuteDataSet(null, "sp_InsertaUsuarioBandejaEntrada", (ParameterIn[])listParameters.ToArray(typeof(ParameterIn)));

            }
            catch (Exception ex)
            {
                Exception e = new Exception("Ocurrio un error al Insertar en Usuarios Bandeja Entrada.", ex);
                ExceptionManager.HandleException(e, 1, 5000, 1);
                throw (e);
            }
        }

          
        public static DataSet GetUsuariosByRolIdConsulta(long IdRol)
        {
            try
            {
                ArrayList listParameters = new ArrayList();

                listParameters.Add(new ParameterIn("id_rol", DbType.Int64, IdRol));

                DataSet ds = DataBase.ExecuteDataSet(null, "SP_GetUsuariosByRolIdConsulta", (ParameterIn[])listParameters.ToArray(typeof(ParameterIn)));

                return ds;
            }
            catch (Exception ex)
            {
                Exception e = new Exception("Error al ejecutar el Stored Procedure SP_GetUsuariosByRolIdConsulta", ex);
                ExceptionManager.HandleException(e, 1, 5000, 1);
                throw (e);
            }
        }
    
    }

}
