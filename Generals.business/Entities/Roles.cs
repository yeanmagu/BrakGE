using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using System.Collections;
using Generals.framework.DataAccess;
using Generals.framework.Exceptions;
using Generals.business.UserEntities;
using Generals.business.Data;

namespace Generals.business.Entities
{
    [Serializable]
    public class Roles    
    {
        [Serializable]
        public class Rol
        {
            private long _Id;
            private String _Descripcion;
            private String _Actor;

            public long Id { get { return _Id; } }
            public String Descripcion { get { return _Descripcion; } }
            public String Actor { get { return _Actor; } }

            public Rol()
            {
            }

            public Rol(long Id, String Descripcion, String Actor)
            {
                _Id = Id;
                _Descripcion = Descripcion;
                _Actor = Actor;
            }
        }

        public Roles()
        {
        }

        public static System.Collections.IEnumerable getRoles()
        {
            dbGeneralsUser DataContext = new dbGeneralsUser();

            var seleccion = (from c in DataContext.Roles
                             select c);
            return seleccion.ToList();

        }

        public static Roles.Rol GetRol(long Id)
        {
            Rol rol = null;

            dbGeneralsUser DataContext = new dbGeneralsUser();

            try
            {
                var seleccion = (from c in DataContext.Roles
                                 where c.id_rol == Id
                                 select c);

                if (seleccion.Count() > 0)
                {
                    var item = seleccion.First();
                    rol = new Rol(item.id_rol,item.desc_rol,item.actor);
                }
            }
            catch (Exception ex)
            {
                Exception e = new Exception("Error al obtener la información del Rol By Id.", ex);
                ExceptionManager.HandleException(e, 1, 5000, 1);
                throw (e);
            }

            return rol;
        }
        public static Roles.Rol GetRol(String Actor)
        {
            Rol rol = null;

            dbGeneralsUser DataContext = new dbGeneralsUser();

            try
            {
                var seleccion = (from c in DataContext.Roles
                                 where c.actor == Actor
                                 select c);

                if (seleccion.Count() > 0)
                {
                    var item = seleccion.First();
                    rol = new Rol(item.id_rol, item.desc_rol, item.actor);
                }
            }
            catch (Exception ex)
            {
                Exception e = new Exception("Error al obtener la información del Rol By Usuario.", ex);
                ExceptionManager.HandleException(e, 1, 5000, 1);
                throw (e);
            }

            return rol;
        }
        public static bool ValidarRolCrearSolicitud(long IdRol)
        {
            try
            {
                ArrayList listParameters = new ArrayList();

                listParameters.Add(new ParameterIn("id_rol", DbType.Int64, IdRol));

                DataSet ds = DataBase.ExecuteDataSet(null, "SP_ValidarRol", (ParameterIn[])listParameters.ToArray(typeof(ParameterIn)));

                if (ds != null && ds.Tables[0].Rows.Count > 0)
                    return true;
                else
                    return false;
            }
            catch (Exception ex)
            {
                Exception e = new Exception("Error al validar si el Rol puede generar Solicitudes.", ex);
                ExceptionManager.HandleException(e, 1, 5000, 1);
                throw (e);
            }
        }
        public static bool ValidarRolExpedienteDigital(long IdRol)
        {
            try
            {
                ArrayList listParameters = new ArrayList();

                listParameters.Add(new ParameterIn("id_rol", DbType.Int64, IdRol));

                DataSet ds = DataBase.ExecuteDataSet(null, "SP_ValidarRolExpedienteDigital", (ParameterIn[])listParameters.ToArray(typeof(ParameterIn)));

                if (ds != null && ds.Tables[0].Rows.Count > 0)
                    return true;
                else
                    return false;
            }
            catch (Exception ex)
            {
                Exception e = new Exception("Error al validar si el Rol puede manejar el Expediente Digital.", ex);
                ExceptionManager.HandleException(e, 1, 5000, 1);
                throw (e);
            }
        }
        public static bool ValidarRolCancelacionExpediente(long IdRol)
        {
            try
            {
                ArrayList listParameters = new ArrayList();

                listParameters.Add(new ParameterIn("id_rol", DbType.Int64, IdRol));

                DataSet ds = DataBase.ExecuteDataSet(null, "SP_ValidarRolCancelacionExpediente", (ParameterIn[])listParameters.ToArray(typeof(ParameterIn)));

                if (ds != null && ds.Tables[0].Rows.Count > 0)
                    return true;
                else
                    return false;
            }
            catch (Exception ex)
            {
                Exception e = new Exception("Error al validar si el Rol puede Cancelar Expedientes", ex);
                ExceptionManager.HandleException(e, 1, 5000, 1);
                throw (e);
            }
        }
        public static bool ValidarRolReingresarExpediente(long IdRol)
        {
            try
            {
                ArrayList listParameters = new ArrayList();

                listParameters.Add(new ParameterIn("id_rol", DbType.Int64, IdRol));

                DataSet ds = DataBase.ExecuteDataSet(null, "SP_ValidarRolReingresarExpediente", (ParameterIn[])listParameters.ToArray(typeof(ParameterIn)));

                if (ds != null && ds.Tables[0].Rows.Count > 0)
                    return true;
                else
                    return false;
            }
            catch (Exception ex)
            {
                Exception e = new Exception("Error al validar si el Rol puede Reingresar Expedientes", ex);
                ExceptionManager.HandleException(e, 1, 5000, 1);
                throw (e);
            }
        }

        public static bool ValidarRolModificacionSolicitud(long IdRol)
        {
            try
            {
                ArrayList listParameters = new ArrayList();

                listParameters.Add(new ParameterIn("id_rol", DbType.Int64, IdRol));

                DataSet ds = DataBase.ExecuteDataSet(null, "SP_ValidarRolModificacionSolicitud", (ParameterIn[])listParameters.ToArray(typeof(ParameterIn)));

                if (ds != null && ds.Tables[0].Rows.Count > 0)
                    return true;
                else
                    return false;
            }
            catch (Exception ex)
            {
                Exception e = new Exception("Error al validar si el Rol puede Modificar Solicitudes", ex);
                ExceptionManager.HandleException(e, 1, 5000, 1);
                throw (e);
            }
        }

        public static bool ValidarRolAltaSucursales(long IdRol)
        {
            try
            {
                ArrayList listParameters = new ArrayList();

                listParameters.Add(new ParameterIn("id_rol", DbType.Int64, IdRol));

                DataSet ds = DataBase.ExecuteDataSet(null, "SP_ValidarRolAltaSucursales", (ParameterIn[])listParameters.ToArray(typeof(ParameterIn)));

                if (ds != null && ds.Tables[0].Rows.Count > 0)
                    return true;
                else
                    return false;
            }
            catch (Exception ex)
            {
                Exception e = new Exception("Error al validar si el Rol puede Ingresar a Modulo Alta Sucursales", ex);
                ExceptionManager.HandleException(e, 1, 5000, 1);
                throw (e);
            }
        }      

        public static bool ValidarRolPadronNotarios(long IdRol)
        {
            try
            {
                ArrayList listParameters = new ArrayList();

                listParameters.Add(new ParameterIn("id_rol", DbType.Int64, IdRol));

                DataSet ds = DataBase.ExecuteDataSet(null, "SP_ValidarRolPadronNotarios", (ParameterIn[])listParameters.ToArray(typeof(ParameterIn)));

                if (ds != null && ds.Tables[0].Rows.Count > 0)
                    return true;
                else
                    return false;
            }
            catch (Exception ex)
            {
                Exception e = new Exception("Error al validar si el Rol puede Ingresar al Modulo Padron de Notarios", ex);
                ExceptionManager.HandleException(e, 1, 5000, 1);
                throw (e);
            }
        }


        public static bool ValidarRolReasignacionExpediente(long IdRol)
        {
            try
            {
                ArrayList listParameters = new ArrayList();

                listParameters.Add(new ParameterIn("id_rol", DbType.Int64, IdRol));

                DataSet ds = DataBase.ExecuteDataSet(null, "SP_ValidarRolReasignacionExpediente", (ParameterIn[])listParameters.ToArray(typeof(ParameterIn)));

                if (ds != null && ds.Tables[0].Rows.Count > 0)
                    return true;
                else
                    return false;
            }
            catch (Exception ex)
            {
                Exception e = new Exception("Error al validar si el Rol puede Reasignacion de Expedientes", ex);
                ExceptionManager.HandleException(e, 1, 5000, 1);
                throw (e);
            }
        }

        public static bool ValidarRolAdminUsuarios(long IdRol)
        {
            try
            {
                ArrayList listParameters = new ArrayList();

                listParameters.Add(new ParameterIn("id_rol", DbType.Int64, IdRol));

                DataSet ds = DataBase.ExecuteDataSet(null, "SP_ValidarRolAdminUsuarios", (ParameterIn[])listParameters.ToArray(typeof(ParameterIn)));

                if (ds != null && ds.Tables[0].Rows.Count > 0)
                    return true;
                else
                    return false;
            }
            catch (Exception ex)
            {
                Exception e = new Exception("Error al validar si el Rol puede realizar la Admin de Usuarios.", ex);
                ExceptionManager.HandleException(e, 1, 5000, 1);
                throw (e);
            }
        }


    }
}
