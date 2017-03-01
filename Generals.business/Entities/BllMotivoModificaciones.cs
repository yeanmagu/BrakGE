using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;
using System;

namespace Generals.business.Entities
{
    public class BllMotivoModificaciones
    {
        public int Id { get; set; }
        public string Descripcion { get; set; }
        public bool Estado { get; set; }


        public static int Add(BllMotivoModificaciones obj)
        {
            var db = new DataDataContext();
            var tp = new MotivoModificacione
            {
                Descripcion = obj.Descripcion,
                Estado = true
            };

            db.MotivoModificaciones.InsertOnSubmit(tp);
            db.SubmitChanges();
            var firstOrDefault = db.MotivoModificaciones.FirstOrDefault(m => m.Id == db.MotivoModificaciones.Max(pl => pl.Id));
            if (firstOrDefault != null)
                tp.Id = firstOrDefault.Id;
            return tp.Id;
        }

        public static int Update(BllMotivoModificaciones obj)
        {
            var db = new DataDataContext();
            var objGrabar = new BllMotivoModificaciones();

            var @select = (from c in db.MotivoModificaciones where c.Id == obj.Id select c);

            foreach (var item in @select)
            {

                item.Descripcion = obj.Descripcion;
                item.Estado = obj.Estado;
            }
            
            db.SubmitChanges();

            return 1;
        }

        public static BllMotivoModificaciones GetById(int id)
        {
            var db = new DataDataContext();
            var objGrabar = new BllMotivoModificaciones();
            var select = (from c in db.MotivoModificaciones where c.Id == id select c);
            if (!@select.Any()) return objGrabar;
            var obj = @select.First();
            objGrabar.Id = obj.Id;
            objGrabar.Descripcion = obj.Descripcion;
            objGrabar.Estado = obj.Estado.Value;
            return objGrabar;
        }

        public static List<BllMotivoModificaciones> ToList()
        {
            var db = new DataDataContext();
           
            var list = new List<BllMotivoModificaciones>();
            var select = (from c in db.MotivoModificaciones select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllMotivoModificaciones();
                objGrabar.Id = obj.Id;
                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.Estado = obj.Estado.Value;

                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BllMotivoModificaciones> ToList(string something)
        {
            var db = new DataDataContext();
           
            var list = new List<BllMotivoModificaciones>();
            var @select = (from c in db.MotivoModificaciones
                          where c.Id.ToString().Contains(something)
                              || c.Descripcion.Contains(something)
                          select c);

            foreach (var obj in @select)
            {
                var objGrabar = new BllMotivoModificaciones();
                objGrabar.Id = obj.Id;
                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.Estado = obj.Estado.Value;

                list.Add(objGrabar);
            }

            return list;
        }
        public static bool ExisteDescri(string desc)
        {
            var db = new DataDataContext();
            
            var @select = (from c in db.MotivoModificaciones where c.Descripcion == desc select c);
            if (@select.Any())
            {
                return true;
            }
            else
            {
                return false;
            }

        }
        public static bool Delete(int id)
        {
            try
            {
                var DataContext = new DataDataContext();
                var seleccion = (from c in DataContext.MotivoModificaciones
                                 where c.Id== id
                                 select c);
                if (seleccion.Count() > 0)
                {
                    var item = seleccion.First();

                    DataContext.MotivoModificaciones.DeleteOnSubmit(item);
                    DataContext.SubmitChanges();
                    return true;
                }
                else { return false; }
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
    }
}
