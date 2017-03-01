using System;
using System.Collections.Generic;
using Generals.business.Entities;
using Generals.business.Data;
using System.Linq;
namespace Generals.business.Entities
{
    public class BllUsuarios
    {
        protected DataDataContext db = new DataDataContext();

        public class user
        {
            public int ID { get; set; }
            public string Username { get; set; }
            public string Cedula { get; set; }
            public string Nombres { get; set; }
            public int IdRol { get; set; }
            public string Email { get; set; }
            public bool Activo { get; set; }
            public DateTime FechaSistema { get; set; }
            public string Telefono { get; set; }
            public int Rol { get; set; }
            public int? Empresa { get; set; }
        }
        

        public int Add(user obj)
        {
            try
            {
                db = new DataDataContext();
                User u = new User();

                u.Activo = obj.Activo;
                u.Cedula = obj.Cedula;
                u.Email = obj.Email;
                u.ID = obj.ID;
                u.Nombres = obj.Nombres;
                u.IdRol = obj.IdRol;
                u.FechaSistema = DateTime.Now;
                u.Username=obj.Username;
                u.Telefono =obj. Telefono;
                db.Users.InsertOnSubmit(u);

                db.SubmitChanges();
                return obj.ID;
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
        public int DeleteUsuario(int ID)
        {
            try
            {
                db = new DataDataContext();
                var x = (from c in db.Users where c.ID == ID select c);
                if (x.Count()>0)
                {
                    var i = x.First();
                    i.Activo = false;

                    db.SubmitChanges();
                   
                }
                return 1;
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
        //public int add(User obj)
        //{
        //    try
        //    {
        //        using (db = new dbBrakGEEntities())
        //        {
        //            db.Users.Add(obj);
        //            db.SaveChanges();
        //            return 1;
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        throw ex;
        //    }
        //}

        //public int DeleteUsuario(User objt)
        //{
        //    try
        //    {
        //        using (db = new dbBrakGEEntities())
        //        {
        //            var x = (from t in db.Users
        //                     where t.ID == objt.ID
        //                     select t).SingleOrDefault();
        //            db.Users.Remove(x);
        //            return 1;
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        throw ex;
        //    }
        //}
        public static user GetUsuario(long ID)
        {
            try
            {
              DataDataContext db = new DataDataContext();
                user u = new user();
                var item = (from c in db.Users where c.ID == ID select c);
                if (item.Count()>0)
                {
                    var obj = item.First();
                    u.ID = obj.ID;
                    u.Activo = obj.Activo.Value;
                    u.Cedula = obj.Cedula;
                    u.Email = obj.Email;
                    u.ID = obj.ID;
                    u.Nombres = obj.Nombres;
                    u.IdRol = obj.IdRol.Value;
                    u.FechaSistema =obj.FechaSistema.Value;
                    u.Telefono = obj.Telefono;
                    u.Empresa = obj.IdEmpresa;
                }
                return u;
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
        public List<user> GetAllUsuario()
        {
            try
            {
                //using (db = new DataDataContext())
                //{

                //}
                List<user> List = new List<user>();
                user u = new user();
                db = new DataDataContext();
                var item = (from c in db.Users select c);

                foreach (var obj in item)
                {
                    u.ID = obj.ID;
                    u.Activo = obj.Activo.Value;
                    u.Cedula = obj.Cedula;
                    u.Email = obj.Email;
                    u.ID = obj.ID;
                    u.Nombres = obj.Nombres;
                    u.IdRol = obj.IdRol.Value;
                    u.FechaSistema = obj.FechaSistema.Value;
                    u.Telefono = obj.Telefono;
                    List.Add(u);
                }
                return List;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public List<user> GetAllUsuarioByRol(int Rol)
        {
            try
            {
                //using (db = new DataDataContext())
                //{

                //}
                List<user> List = new List<user>();
               
                db = new DataDataContext();
                var item = (from c in db.Users where c.IdRol==Rol select c);

                foreach (var obj in item)
                {
                    user u = new user();
                    u.ID = obj.ID;
                    u.Activo = obj.Activo.Value;
                    u.Cedula = obj.Cedula;
                    u.Email = obj.Email;
                    u.ID = obj.ID;
                    u.Nombres = obj.Nombres;
                    u.IdRol = obj.IdRol.Value;
                    u.FechaSistema = obj.FechaSistema.Value;
                    u.Telefono = obj.Telefono;
                    List.Add(u);
                }
                return List;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public int UpdateUsuario(user obj)
        {
            try
            {
                using (db = new DataDataContext())
                {
                    var u = (from t in db.Users
                             where t.ID == obj.ID
                             select t).SingleOrDefault();

                    if (u.ID != 0)
                    {  
                        u.Activo = obj.Activo;
                        u.Cedula = obj.Cedula;
                        u.Email = obj.Email;
                        u.ID = obj.ID;
                        u.Username = obj.Username;
                        u.Nombres = obj.Nombres;
                        u.IdRol = obj.IdRol;
                        u.FechaSistema = DateTime.Now;
                        u.Telefono = obj.Telefono;
                        db.SubmitChanges();

                    }
                    return 1;

                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
