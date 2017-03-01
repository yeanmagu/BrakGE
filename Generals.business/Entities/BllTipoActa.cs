using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;
using System;

namespace Generals.business.Entities
{
    public class BllTipoActa
    {
        public int Id { get; set; }
        public string Descripcion { get; set; }
        public bool Estado { get; set; }


        public static int Add(BllTipoActa obj)
        {
            var db = new DataDataContext();
            var tp = new TipoActa
            {
                Descripcion = obj.Descripcion,
                Estado = true
            };

            db.TipoActas.InsertOnSubmit(tp);
            db.SubmitChanges();
            var firstOrDefault = db.TipoActas.FirstOrDefault(m => m.ID == db.TipoActas.Max(pl => pl.ID));
            if (firstOrDefault != null)
                tp.ID = firstOrDefault.ID;
            return tp.ID;
        }

        public static int Update(BllTipoActa obj)
        {
            var db = new DataDataContext();
            var @select = (from c in db.TipoActas where c.ID == obj.Id select c);

            foreach (var objGrabar in @select)
            {

                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.Estado = obj.Estado;
            }
            db.SubmitChanges();

            return 1;
        }

        public static BllTipoActa GetById(int id)
        {
            var db = new DataDataContext();
            var objGrabar = new BllTipoActa();
            var select = (from c in db.TipoActas where c.ID == id select c);
            if (!@select.Any()) return objGrabar;
            var obj = @select.First();
            objGrabar.Id = obj.ID;
            objGrabar.Descripcion = obj.Descripcion;
            objGrabar.Estado = obj.Estado.Value;
            return objGrabar;
        }

        public static List<BllTipoActa> ToList()
        {
            var db = new DataDataContext();
           
            var list = new List<BllTipoActa>();
            var select = (from c in db.TipoActas select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllTipoActa();
                objGrabar.Id = obj.ID;
                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.Estado = obj.Estado.Value;

                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BllTipoActa> ToList(string something)
        {
            var db = new DataDataContext();
           
            var list = new List<BllTipoActa>();
            var @select = (from c in db.TipoActas
                          where c.ID.ToString().Contains(something)
                              || c.Descripcion.Contains(something)
                          select c);

            foreach (var obj in @select)
            {
                var objGrabar = new BllTipoActa();
                objGrabar.Id = obj.ID;
                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.Estado = obj.Estado.Value;

                list.Add(objGrabar);
            }

            return list;
        }
        public static bool ExisteDescri(string desc)
        {
            var db = new DataDataContext();
            new TipoActa();
            var @select = (from c in db.TipoActas where c.Descripcion == desc select c);
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
                var seleccion = (from c in DataContext.TipoActas
                                 where c.ID == id
                                 select c);
                if (seleccion.Count() > 0)
                {
                    var item = seleccion.First();

                    DataContext.TipoActas.DeleteOnSubmit(item);
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
