using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;

namespace Generals.business.Entities
{
    public class BllMunicipio
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public bool Estado { get; set; }
        public int IdDpto { get; set; }

        public string Dpto { get; set; }

        public static int Add(BllMunicipio obj)
        {
            var db = new DataDataContext();
            var tp = new Municipio
            {
                IdDpto = obj.IdDpto,
                Nombre = obj.Nombre,
                Estado = true
            };

            db.Municipios.InsertOnSubmit(tp);
            db.SubmitChanges();
            var firstOrDefault = db.Municipios.FirstOrDefault(m => m.ID == db.Municipios.Max(pl => pl.ID));
            if (firstOrDefault != null)
                tp.ID = firstOrDefault.ID;
            return tp.ID;
        }

        public static int Update(BllMunicipio obj)
        {
            var db = new DataDataContext();

            var @select = (from c in db.Municipios where c.ID == obj.Id select c);

            foreach (var objGrabar in @select)
            {
                objGrabar.IdDpto = obj.IdDpto;
                objGrabar.Nombre = obj.Nombre;
                objGrabar.Estado = obj.Estado;
            }
            db.SubmitChanges();

            return 1;
        }

        public static BllMunicipio GetById(int id)
        {
            var db = new DataDataContext();
            var objGrabar = new BllMunicipio();
            var select = (from c in db.Municipios where c.ID == id select c);
            if (!@select.Any()) return objGrabar;
            var obj = @select.First();
            objGrabar.Id = obj.ID;
            objGrabar.IdDpto = obj.IdDpto.Value;
            objGrabar.Nombre = obj.Nombre;
            objGrabar.Estado = obj.Estado.Value;
            objGrabar.Dpto = obj.DPTO.Nombre;
            return objGrabar;
        }

        public static List<BllMunicipio> ToList()
        {
            var db = new DataDataContext();
           
            var list = new List<BllMunicipio>();
            var select = (from c in db.Municipios select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllMunicipio();
                objGrabar.Id = obj.ID;
                objGrabar.IdDpto = obj.IdDpto.Value;
                objGrabar.Nombre = obj.Nombre;
                objGrabar.Estado = obj.Estado.Value;
                objGrabar.Dpto = obj.DPTO.Nombre;

                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BllMunicipio> ToList(string something)
        {
            var db = new DataDataContext();
          
            var list = new List<BllMunicipio>();
            var @select = (from c in db.Municipios
                          where c.ID.ToString().Contains(something)
                              || c.Nombre.Contains(something)
                          select c);

            foreach (var obj in @select)
            {
                var objGrabar = new BllMunicipio();
                objGrabar.Id = obj.ID;
                objGrabar.IdDpto = obj.IdDpto.Value;
                objGrabar.Nombre = obj.Nombre;
                objGrabar.Estado = obj.Estado.Value;
                objGrabar.Dpto = obj.DPTO.Nombre;

                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BllMunicipio> ToListByDpto(int IdPto)
        {
            var db = new DataDataContext();

            var list = new List<BllMunicipio>();
            var @select = (from c in db.Municipios
                           where c.IdDpto== IdPto
                           select c);

            foreach (var obj in @select)
            {
                var objGrabar = new BllMunicipio();
                objGrabar.Id = obj.ID;
                objGrabar.IdDpto = obj.IdDpto.Value;
                objGrabar.Nombre = obj.Nombre;
                objGrabar.Estado = obj.Estado.Value;
                objGrabar.Dpto = obj.DPTO.Nombre;

                list.Add(objGrabar);
            }

            return list;
        }
        public static bool ExisteDescri(string desc, int dpto)
        {
            var db = new DataDataContext();
            new Municipio();
            var @select = (from c in db.Municipios where c.Nombre == desc && c.IdDpto==dpto select c);
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
