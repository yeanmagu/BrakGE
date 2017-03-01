using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;
using System;

namespace Generals.business.Entities
{
    public class BllMateriales
    {
        public int Id { get; set; }
        public string Descripcion { get; set; }
        public bool Estado { get; set; }
        
        public static int Add(BllMateriales obj)
        {
            var db = new DataDataContext();
            var tp = new Materiale
            {
                
                Descripcion = obj.Descripcion,
                Estado = true
            };

            db.Materiales.InsertOnSubmit(tp);
            db.SubmitChanges();
            var firstOrDefault = db.Materiales.FirstOrDefault(m => m.Id == db.Materiales.Max(pl => pl.Id));
            if (firstOrDefault != null)
                tp.Id = firstOrDefault.Id;
            return tp.Id;
        }

        public static int Update(BllMateriales obj)
        {
            var db = new DataDataContext();
            
            var @select = (from c in db.Materiales where c.Id == obj.Id select c);
            foreach (var item in @select)
            {
              
                item.Descripcion = obj.Descripcion;
                item.Estado = obj.Estado;
            }
           
            db.SubmitChanges();

            return 1;
        }

        public static BllMateriales GetById(int id)
        {
            var db = new DataDataContext();
            var objGrabar = new BllMateriales();
            var select = (from c in db.Materiales where c.Id == id select c);
            if (!@select.Any()) return objGrabar;
            var obj = @select.First();
            objGrabar.Id = obj.Id;
            objGrabar.Descripcion = obj.Descripcion;
            objGrabar.Estado = obj.Estado.Value;
         
            return objGrabar;
        }

        public static List<BllMateriales> ToList()
        {
            var db = new DataDataContext();
           
            var list = new List<BllMateriales>();
            var select = (from c in db.Materiales select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllMateriales();
                objGrabar.Id = obj.Id;
                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.Estado = obj.Estado.Value;

                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BllMateriales> ToList(string something)
        {
            var db = new DataDataContext();
           
            var list = new List<BllMateriales>();
            var @select = (from c in db.Materiales
                          where c.Id.ToString().Contains(something)
                              || c.Descripcion.Contains(something)
                          select c);

            foreach (var obj in @select)
            {
                var objGrabar = new BllMateriales();
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
            new Materiale();
            var @select = (from c in db.Materiales where c.Descripcion == desc select c);
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
                var seleccion = (from c in DataContext.Materiales
                                 where c.Id == id
                                 select c);
                if (seleccion.Count() > 0)
                {
                    var item = seleccion.First();

                    DataContext.Materiales.DeleteOnSubmit(item);
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
