using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;
using System;

namespace Generals.business.Entities
{
    public class BllTipoMontaje
    {
        public int Id { get; set; }
        public string Descripcion { get; set; }
        public bool Estado { get; set; }


        public static int Add(BllTipoMontaje obj)
        {
            var db = new DataDataContext();
            var tp = new TipoMOntaje();
            {
                tp.Descripcion = obj.Descripcion;
                tp.Estado = true;
            };

            db.TipoMOntajes.InsertOnSubmit(tp);
            db.SubmitChanges();
            var firstOrDefault = db.TipoMOntajes.FirstOrDefault(m => m.ID == db.TipoMOntajes.Max(pl => pl.ID));
            if (firstOrDefault != null)
                tp.ID = firstOrDefault.ID;
            return tp.ID;
        }

        public static int Update(BllTipoMontaje obj)
        {
            var db = new DataDataContext();
           
            var @select = (from c in db.TipoMOntajes where c.ID == obj.Id select c);

            foreach (var objGrabar in @select)
            {

                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.Estado = obj.Estado;
            }
            db.SubmitChanges();

            return 1;
        }

        public static BllTipoMontaje GetById(int id)
        {
            var db = new DataDataContext();
            var objGrabar = new BllTipoMontaje();
            var select = (from c in db.TipoMOntajes where c.ID == id select c);
            if (!@select.Any()) return new BllTipoMontaje();
            var obj = @select.First();
            objGrabar.Id = obj.ID;
            objGrabar.Descripcion = obj.Descripcion;
            if (obj.Estado != null) objGrabar.Estado = obj.Estado.Value;
            return objGrabar;
        }

        public static List<BllTipoMontaje> ToList()
        {
            var db = new DataDataContext();
           
            var list = new List<BllTipoMontaje>();
            var select = (from c in db.TipoMOntajes select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllTipoMontaje();
                objGrabar.Id = obj.ID;
                objGrabar.Descripcion = obj.Descripcion;
                if (obj.Estado != null) objGrabar.Estado = obj.Estado.Value;

                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BllTipoMontaje> ToList(string something)
        {
            var db = new DataDataContext();
           
            var list = new List<BllTipoMontaje>();
            var @select = (from c in db.TipoMOntajes
                          where c.ID.ToString().Contains(something)
                              || c.Descripcion.Contains(something)
                          select c);

            foreach (var obj in @select)
            {
                var objGrabar = new BllTipoMontaje();
                objGrabar.Id = obj.ID;
                objGrabar.Descripcion = obj.Descripcion;
                if (obj.Estado != null) objGrabar.Estado = obj.Estado.Value;

                list.Add(objGrabar);
            }

            return list;
        }
        public static bool ExisteDescri(string desc)
        {
            var db = new DataDataContext();
            new TipoMOntaje();
            var @select = (from c in db.TipoMOntajes where c.Descripcion == desc select c);
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
                var seleccion = (from c in DataContext.TipoMOntajes
                                 where c.ID == id
                                 select c);
                if (seleccion.Count() > 0)
                {
                    var item = seleccion.First();

                    DataContext.TipoMOntajes.DeleteOnSubmit(item);
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
