using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Generals.business.Data;
using Generals.business;
using Generals.business.Entities;

namespace Generals.business.Entities
{
    /*Nombre del Modelo de datos*/
    public class BllRoles
    {
        public class Perfile
        {
            public long Id { get; set; }
            public string Descripcion { get; set; }
            public DateTime FechaSistema { get; set; }
            public int IdUsuario { get; set; }
        }
        protected DataDataContext db = new DataDataContext();

        /*insert*/   
        public int add(Perfile obj)
        {
            try
            {

                db = new DataDataContext();
                Data.Perfile u = new Data.Perfile();
                u.Id = obj.Id;
                u.Descripcion = obj.Descripcion;
                u.FechaSistema = DateTime.Now;
                u.IdUsuario = obj.IdUsuario;
                db.Perfiles.InsertOnSubmit(u);
                    db.SubmitChanges();
                    return 1;
               
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int DeleteCargo(Perfile objt)
        {
            try
            {
                using (db = new DataDataContext())
                {
                    var x = (from t in db.Perfiles
                             where t.Id == objt.Id
                             select t).SingleOrDefault();
                    db.Perfiles.DeleteOnSubmit(x);
                    return 1;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<Perfile> GetAllCargo(Perfile objt)
        {
            try
            {
                db = new DataDataContext();
                List<Perfile> p = new List<Perfile>();
                Perfile u = new Perfile();
                var item = (from c in db.Perfiles select c);
                foreach (var obj in item)
                {
                   
                    u.Id = obj.Id;
                    u.Descripcion = obj.Descripcion;
                    u.FechaSistema =obj.FechaSistema.Value;
                    u.IdUsuario = obj.IdUsuario.Value;
                    p.Add(u);
                }
                return p;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int UpdateCargo(Perfile obj)
        {
            try
            {
                using (db = new DataDataContext())
                {
                    var u = (from t in db.Perfiles
                             where t.Id == obj.Id
                             select t).SingleOrDefault();
                    if (u.Id != 0)
                    {
                        u.Id = obj.Id;
                        u.Descripcion = obj.Descripcion;
                        u.FechaSistema = obj.FechaSistema;
                        u.IdUsuario = obj.IdUsuario;
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
        public int Exits(long ID)
        {
            try
            {
                using (db = new DataDataContext())
                {
                    var x = (from t in db.Perfiles
                             where t.Id == ID
                             select t);
                    if (x.Count() > 0)
                    {
                        return 1;
                    }
                    else
                    {
                        return 0;
                    }
                    // db.Entry(objt).State = EntityState.Modified;


                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
