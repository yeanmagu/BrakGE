using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;

namespace Generals.business.Entities
{
    public class BllIva
    {
        public int Id { get; set; }
        public string Descripcion { get; set; }
        public bool Estado { get; set; }
        public decimal Porcentaje { get; set; }

        public int IdEmpresa { get; set; }
        public int IdUsuario { get; set; }
        public static int Add(BllIva obj)
        {
            var db = new DataDataContext();
            var tp = new Iva
            {
                IdUsuario=obj.IdUsuario,
                IdEmpresa=obj.IdEmpresa,
                Porcentaje = obj.Porcentaje,
                Descripcion = obj.Descripcion,
                Estado = true
            };

            db.Ivas.InsertOnSubmit(tp);
            db.SubmitChanges();
            var firstOrDefault = db.Ivas.FirstOrDefault(m => m.ID == db.Ivas.Max(pl => pl.ID));
            if (firstOrDefault != null)
                tp.ID = firstOrDefault.ID;
            return tp.ID;
        }

        public static int Update(BllIva obj)
        {
            var db = new DataDataContext();

            var @select = (from c in db.Ivas where c.ID == obj.Id select c);
            foreach (var item in @select)
            {
                item.IdUsuario = obj.IdUsuario;
                item.IdEmpresa = obj.IdEmpresa;
                item.Porcentaje = obj.Porcentaje;
                item.Descripcion = obj.Descripcion;
                item.Estado = obj.Estado;
            }
           
            db.SubmitChanges();

            return 1;
        }

        public static BllIva GetById(int id)
        {
            var db = new DataDataContext();
            var objGrabar = new BllIva();
            var select = (from c in db.Ivas where c.ID == id select c);
            if (!@select.Any()) return objGrabar;
            var obj = @select.First();
            objGrabar.Id = obj.ID;
            objGrabar.Porcentaje = obj.Porcentaje.Value;
            objGrabar.Descripcion = obj.Descripcion;
            objGrabar.Estado = obj.Estado.Value;
            objGrabar.IdEmpresa = obj.IdEmpresa.Value;
            return objGrabar;
        }

        public static List<BllIva> ToList()
        {
            var db = new DataDataContext();
            
            var list = new List<BllIva>();
            var select = (from c in db.Ivas select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllIva();
                objGrabar.Id = obj.ID;
                objGrabar.Porcentaje = obj.Porcentaje.Value;
                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.Estado = obj.Estado.Value;
                objGrabar.IdEmpresa = obj.IdEmpresa.Value;

                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BllIva> ToList(string something)
        {
            var db = new DataDataContext();
            
            var list = new List<BllIva>();
            var @select = (from c in db.Ivas
                          where c.ID.ToString().Contains(something)
                              || c.Descripcion.Contains(something)
                          select c);

            foreach (var obj in @select)
            {
                var objGrabar = new BllIva();
                objGrabar.Id = obj.ID;
                objGrabar.Porcentaje = obj.Porcentaje.Value;
                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.Estado = obj.Estado.Value;
                objGrabar.IdEmpresa = obj.IdEmpresa.Value;

                list.Add(objGrabar);
            }

            return list;
        }
        public static bool ExisteDescri(string desc)
        {
            var db = new DataDataContext();
            new Iva();
            var @select = (from c in db.Ivas where c.Descripcion == desc select c);
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
