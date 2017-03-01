using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;

namespace Generals.business.Entities
{
    public class BlEstadoEnvio
    {
        public int Id { get; set; }
        public string Descripcion { get; set; }
        public bool Estado { get; set; }


        public static int Add(BlEstadoEnvio obj)
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

        public static int Update(BlEstadoEnvio obj)
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

        public static BlEstadoEnvio GetById(int id)
        {
            var db = new DataDataContext();
            var objGrabar = new BlEstadoEnvio();
            var select = (from c in db.TipoActas where c.ID == id select c);
            if (!@select.Any()) return objGrabar;
            var obj = @select.First();
            objGrabar.Id = obj.ID;
            objGrabar.Descripcion = obj.Descripcion;
            objGrabar.Estado = obj.Estado.Value;
            return objGrabar;
        }

        public static List<BlEstadoEnvio> ToList()
        {
            var db = new DataDataContext();
            
            var list = new List<BlEstadoEnvio>();
            var select = (from c in db.TipoActas select c);

            foreach (var obj in select)
            {
                var objGrabar = new BlEstadoEnvio();
                objGrabar.Id = obj.ID;
                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.Estado = obj.Estado.Value;

                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BlEstadoEnvio> ToList(string something)
        {
            var db = new DataDataContext();
            
            var list = new List<BlEstadoEnvio>();
            var @select = (from c in db.TipoActas
                          where c.ID.ToString().Contains(something)
                              || c.Descripcion.Contains(something)
                          select c);

            foreach (var obj in @select)
            {
                var objGrabar = new BlEstadoEnvio();
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
    }
}
