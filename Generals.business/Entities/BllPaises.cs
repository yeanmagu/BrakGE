using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;

namespace Generals.business.Entities
{
    public class BllPaises
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public bool Estado { get; set; }
        public string CodigoPostal { get; set; }


        public static int Add(BllPaises obj)
        {
            var db = new DataDataContext();
            var tp = new Paise
            {
                CodigoPostal = obj.CodigoPostal,
                Nombre = obj.Nombre,
                Estado = true
            };

            db.Paises.InsertOnSubmit(tp);
            db.SubmitChanges();
            var firstOrDefault = db.Paises.FirstOrDefault(m => m.ID == db.Paises.Max(pl => pl.ID));
            if (firstOrDefault != null)
                tp.ID = firstOrDefault.ID;
            return tp.ID;
        }

        public static int Update(BllPaises obj)
        {
            var db = new DataDataContext();
           
            var @select = (from c in db.Paises where c.ID == obj.Id select c);

            foreach (var objGrabar in @select)
            {
                objGrabar.CodigoPostal = obj.CodigoPostal;
                objGrabar.Nombre = obj.Nombre;
                objGrabar.Estado = obj.Estado;
            }
            db.SubmitChanges();

            return 1;
        }

        public static BllPaises GetById(int id)
        {
            var db = new DataDataContext();
            var objGrabar = new BllPaises();
            var select = (from c in db.Paises where c.ID == id select c);
            if (!@select.Any()) return objGrabar;
            var obj = @select.First();
            objGrabar.Id = obj.ID;
            objGrabar.CodigoPostal = obj.CodigoPostal;
            objGrabar.Nombre = obj.Nombre;
            objGrabar.Estado = obj.Estado.Value;
            return objGrabar;
        }

        public static List<BllPaises> ToList()
        {
            var db = new DataDataContext();
           
            var list = new List<BllPaises>();
            var select = (from c in db.Paises select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllPaises();
                objGrabar.Id = obj.ID;
                objGrabar.CodigoPostal = obj.CodigoPostal;
                objGrabar.Nombre = obj.Nombre;
                objGrabar.Estado = obj.Estado.Value;

                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BllPaises> ToList(string something)
        {
            var db = new DataDataContext();
           
            var list = new List<BllPaises>();
            var @select = (from c in db.Paises
                          where c.ID.ToString().Contains(something)
                              || c.Nombre.Contains(something)
                          select c);

            foreach (var obj in @select)
            {
                var objGrabar = new BllPaises();
                objGrabar.Id = obj.ID;
                objGrabar.CodigoPostal = obj.CodigoPostal;
                objGrabar.Nombre = obj.Nombre;
                objGrabar.Estado = obj.Estado.Value;

                list.Add(objGrabar);
            }

            return list;
        }
        public static bool ExisteDescri(string desc)
        {
            var db = new DataDataContext();
            var @select = (from c in db.Paises where c.Nombre == desc select c);
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
