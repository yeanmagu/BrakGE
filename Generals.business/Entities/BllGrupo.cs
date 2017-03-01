using System;
using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;

namespace Generals.business.Entities
{
    public class BllGrupo
    {
        public int Id { get; set; }
        public string Descripcion { get; set; }
        public bool Estado { get; set; }
        public int IdEmpresa { get; set; }
        public int IdUsuario { get; set; }
        public DateTime Fecha { get; set; }
        public string Grupo { get; set; }
        public static int Add(BllGrupo obj)
        {
            var db = new DataDataContext();
            var tp = new Grupo
            {
                IdEmpresa = obj.IdEmpresa,
                Descripcion = obj.Descripcion,
                IdUsuario = obj.IdUsuario,
                Fecha = DateTime.Now,
                Estado = true
            };

            db.Grupos.InsertOnSubmit(tp);
            db.SubmitChanges();
            var firstOrDefault = db.Grupos.FirstOrDefault(m => m.ID == db.Grupos.Max(pl => pl.ID));
            if (firstOrDefault != null)
                tp.ID = firstOrDefault.ID;
            return tp.ID;
        }

        public static int Update(BllGrupo obj)
        {
            var db = new DataDataContext();
            var @select = (from c in db.Grupos where c.ID == obj.Id select c);

            foreach (var objGrabar in @select)
            {
                objGrabar.IdEmpresa = obj.IdEmpresa;
                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.Estado = obj.Estado;
                objGrabar.IdUsuario = obj.IdUsuario;
            }
            db.SubmitChanges();

            return 1;
        }

        public static BllGrupo GetById(int id)
        {
            var db = new DataDataContext();
            var objGrabar = new BllGrupo();
            var select = (from c in db.Grupos where c.ID == id select c);
            if (!@select.Any()) return objGrabar;
            var obj = @select.First();
            objGrabar.Id = obj.ID;
            objGrabar.IdEmpresa = obj.IdEmpresa.Value;
            objGrabar.Descripcion = obj.Descripcion;
            objGrabar.Estado = obj.Estado.Value;
            objGrabar.IdUsuario = obj.IdUsuario.Value;
            return objGrabar;
        }

        public static List<BllGrupo> ToList()
        {
            var db = new DataDataContext();
            
            var list = new List<BllGrupo>();
            var select = (from c in db.Grupos select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllGrupo();
                objGrabar.Id = obj.ID;
                objGrabar.Id = obj.ID;
                objGrabar.IdEmpresa = obj.IdEmpresa.Value;
                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.Estado = obj.Estado.Value;
                objGrabar.IdUsuario = obj.IdUsuario.Value;

                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BllGrupo> ToList(string something)
        {
            var db = new DataDataContext();
           
            var list = new List<BllGrupo>();
            var @select = (from c in db.Grupos
                          where c.ID.ToString().Contains(something)
                              || c.Descripcion.Contains(something)
                          select c);

            foreach (var obj in @select)
            {
                var objGrabar = new BllGrupo();
                objGrabar.Id = obj.ID;
                objGrabar.Id = obj.ID;
                objGrabar.IdEmpresa = obj.IdEmpresa.Value;
                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.Estado = obj.Estado.Value;
                objGrabar.IdUsuario = obj.IdUsuario.Value;

                list.Add(objGrabar);
            }

            return list;
        }
        public static bool ExisteDescri(string desc)
        {
            var db = new DataDataContext();
            new Grupo();
            var @select = (from c in db.Grupos where c.Descripcion == desc select c);
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
