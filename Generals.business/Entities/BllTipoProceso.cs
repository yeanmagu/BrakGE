using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;
using System;

namespace Generals.business.Entities
{
    public class BllTipoProceso : PaginaBase
    {
        public int Id { get; set; }
        public string Descripcion { get; set; }
        public bool Estado { get; set; }


        public static int Add(BllTipoProceso obj)
        {
            var db = new DataDataContext();
            var tp = new TipoProceso
            {
                Descripcion = obj.Descripcion,
                Estado = true
            };

            db.TipoProcesos.InsertOnSubmit(tp);
            db.SubmitChanges();
            var firstOrDefault = db.TipoProcesos.FirstOrDefault(m => m.ID == db.TipoProcesos.Max(pl => pl.ID));
            if (firstOrDefault != null)
                tp.ID = firstOrDefault.ID;
            return tp.ID;
        }

        public static int Update(BllTipoProceso obj)
        {
            var db = new DataDataContext();
        

            var @select = (from c in db.TipoProcesos where c.ID == obj.Id select c);
            foreach (var item in @select)
            {
                item.Descripcion = obj.Descripcion;
                item.Estado = obj.Estado;
            }
           
            db.SubmitChanges();

            return 1;
        }

        public static BllTipoProceso GetById(int id)
        {
            var db = new DataDataContext();
            var objGrabar = new BllTipoProceso();
            var select = (from c in db.TipoProcesos where c.ID == id select c);
            if (!@select.Any()) return objGrabar;
            var obj = @select.First();
            objGrabar.Id = obj.ID;
            objGrabar.Descripcion = obj.Descripcion;
            objGrabar.Estado = obj.Estado.Value;
            return objGrabar;
        }

        public static List<BllTipoProceso> ToList()
        {
            var db = new DataDataContext();
           
            var list = new List<BllTipoProceso>();
            var select = (from c in db.TipoProcesos select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllTipoProceso();
                objGrabar.Id = obj.ID;
                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.Estado = obj.Estado.Value;

                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BllTipoProceso> ToList(string something)
        {
            var db = new DataDataContext();
           
            var list = new List<BllTipoProceso>();
            var @select = (from c in db.TipoProcesos
                          where c.ID.ToString().Contains(something)
                              || c.Descripcion.Contains(something)
                          select c);

            foreach (var obj in @select)
            {
                var objGrabar = new BllTipoProceso();
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
            new TipoProceso();
            var @select = (from c in db.TipoProcesos where c.Descripcion == desc select c);
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
                var seleccion = (from c in DataContext.TipoProcesos
                                 where c.ID == id
                                 select c);
                if (seleccion.Count() > 0)
                {
                    var item = seleccion.First();

                    DataContext.TipoProcesos.DeleteOnSubmit(item);
                    DataContext.SubmitChanges();
                    return true;
                }
                else { return false; }
            }
            catch (Exception ex )
            {

                throw ex;
            }
        }
    }
}
