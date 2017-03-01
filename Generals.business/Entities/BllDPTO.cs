using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;

namespace Generals.business.Entities
{
    public class BllDpto
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public bool Estado { get; set; }
        public int IdPais { get; set; }
        public string Pais { get; set; }

        public static int Add(BllDpto obj)
        {
            var db = new DataDataContext();
            var tp = new DPTO
            {
                IdPais = obj.IdPais,
                Nombre = obj.Nombre,
                Estado = true
            };

            db.DPTOs.InsertOnSubmit(tp);
            db.SubmitChanges();
            var firstOrDefault = db.DPTOs.FirstOrDefault(m => m.ID == db.DPTOs.Max(pl => pl.ID));
            if (firstOrDefault != null)
                tp.ID = firstOrDefault.ID;
            return tp.ID;
        }

        public static int Update(BllDpto obj)
        {
            var db = new DataDataContext();

            var @select = (from c in db.DPTOs where c.ID == obj.Id select c);

            foreach (var objGrabar in @select)
            {
                objGrabar.IdPais = obj.IdPais;
                objGrabar.Nombre = obj.Nombre;
                objGrabar.Estado = obj.Estado;
            }
            db.SubmitChanges();

            return 1;
        }

        public static BllDpto GetById(int id)
        {
            var db = new DataDataContext();
            var objGrabar = new BllDpto();
            var select = (from c in db.DPTOs where c.ID == id select c);
            if (!@select.Any()) return objGrabar;
            var obj = @select.First();
            objGrabar.Id = obj.ID;
            objGrabar.Nombre = obj.Nombre;
            objGrabar.Estado = obj.Estado.Value;
            objGrabar.IdPais = obj.IdPais.Value;
            objGrabar.Pais = obj.Paise.Nombre;
            
            return objGrabar;
        }

        public static List<BllDpto> ToList()
        {
            var db = new DataDataContext();
            
            var list = new List<BllDpto>();
            var select = (from c in db.DPTOs select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllDpto();
                objGrabar.Id = obj.ID;
                objGrabar.Nombre = obj.Nombre;
                objGrabar.Estado = obj.Estado.Value;
                objGrabar.IdPais = obj.IdPais.Value;
                objGrabar.Pais = obj.Paise.Nombre;

                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BllDpto> ToList(string something)
        {
            var db = new DataDataContext();
            
            var list = new List<BllDpto>();
            var @select = (from c in db.DPTOs
                          where c.ID.ToString().Contains(something)
                              || c.Nombre.Contains(something)
                          select c);

            foreach (var obj in @select)
            {
                var objGrabar = new BllDpto();
                objGrabar.Id = obj.ID;
                objGrabar.Nombre = obj.Nombre;
                objGrabar.Estado = obj.Estado.Value;
                objGrabar.IdPais = obj.IdPais.Value;
                objGrabar.Pais = obj.Paise.Nombre;

                list.Add(objGrabar);
            }

            return list;
        }
        public static bool ExisteDescri(string desc)
        {
            var db = new DataDataContext();
            new DPTO();
            var @select = (from c in db.DPTOs where c.Nombre == desc select c);
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
