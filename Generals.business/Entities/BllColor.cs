using System;
using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;

namespace Generals.business.Entities
{
    public class BllColor
    {
        public int Id { get; set; }
        public string CodigoColor { get; set; }
        public string Descripcion { get; set; }
        public bool Estado { get; set; }
        public int IdUsuario { get; set; }
        public int IdEmpresa { get; set; }

        public string Empresa { get; set; }
        public string Usuario { get; set; }

        public static int Add(BllColor obj)
        {
            var db = new DataDataContext();
            var tp = new Color
            {
                CodigoColor=obj.CodigoColor,
                IdEmpresa = obj.IdEmpresa,
                IdUsuario = obj.IdUsuario,
                Descripcion = obj.Descripcion,
                Fecha = DateTime.Now
            };

            db.Colors.InsertOnSubmit(tp);
            db.SubmitChanges();
            var firstOrDefault = db.Colors.FirstOrDefault(m => m.ID == db.Colors.Max(pl => pl.ID));
            if (firstOrDefault != null)
                tp.ID = firstOrDefault.ID;
            return tp.ID;
        }

        public static int Update(BllColor obj)
        {
            var db = new DataDataContext();

            var @select = (from c in db.Colors where c.ID == obj.Id select c);

            foreach (var objGrabar in @select)
            {
                objGrabar.IdUsuario = obj.IdUsuario;
                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.CodigoColor = obj.CodigoColor;
                objGrabar.Fecha=DateTime.Now;
            }
            db.SubmitChanges();

            return 1;
        }

        public static BllColor GetById(int id)
        {
            var db = new DataDataContext();
            var objGrabar = new BllColor();
            var select = (from c in db.Colors where c.ID == id select c);
            if (!@select.Any()) return objGrabar;
            var obj = @select.First();
            objGrabar.Id = obj.ID;
            objGrabar.IdUsuario = obj.IdUsuario.Value;
            objGrabar.Descripcion = obj.Descripcion;
            objGrabar.CodigoColor = obj.CodigoColor;
            objGrabar.Usuario = obj.User.Nombres;
            return objGrabar;
        }

        public static List<BllColor> ToList()
        {
            var db = new DataDataContext();
          
            var list = new List<BllColor>();
            var select = (from c in db.Colors select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllColor();
                objGrabar.Id = obj.ID;
                objGrabar.IdUsuario = obj.IdUsuario.Value;
                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.CodigoColor = obj.CodigoColor;
                objGrabar.Usuario = obj.User.Nombres;

                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BllColor> ToList(string something)
        {
            var db = new DataDataContext();
           
            var list = new List<BllColor>();
            var @select = (from c in db.Colors
                          where c.ID.ToString().Contains(something)
                              || c.Descripcion.Contains(something)
                          select c);

            foreach (var obj in @select)
            {
                var objGrabar = new BllColor();
                objGrabar.Id = obj.ID;
                objGrabar.Id = obj.ID;
                objGrabar.IdUsuario = obj.IdUsuario.Value;
                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.CodigoColor = obj.CodigoColor;
                objGrabar.Usuario = obj.User.Nombres;

                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BllColor> ToListByCompany(int IdCompany)
        {
            var db = new DataDataContext();

            var list = new List<BllColor>();
            var @select = (from c in db.Colors
                           where c.IdEmpresa==IdCompany
                           select c);

            foreach (var obj in @select)
            {
                var objGrabar = new BllColor();
                objGrabar.Id = obj.ID;
                objGrabar.Id = obj.ID;
                objGrabar.IdUsuario = obj.IdUsuario.Value;
                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.CodigoColor = obj.CodigoColor;
                objGrabar.Usuario = obj.User.Nombres;

                list.Add(objGrabar);
            }

            return list;
        }
        public static bool ExisteDescri(string desc)
        {
            var db = new DataDataContext();
            new Color();
            var @select = (from c in db.Colors where c.Descripcion == desc select c);
            if (@select.Any())
            {
                return true;
            }
            else
            {
                return false;
            }

        }
        public static int GetId(string desc)
        {
            var db = new DataDataContext();
            new Color();
            var @select = (from c in db.Colors where c.Descripcion == desc select c);
            if (@select.Any())
            {
                var obj = @select.First().ID;
                return obj;
            }
            else
            {
                return 0;
            }

        }
        public static bool Delete(int id)
        {
            try
            {
                var DataContext = new DataDataContext();
                var seleccion = (from c in DataContext.Colors
                                 where c.ID == id
                                 select c);
                if (seleccion.Count() > 0)
                {
                    var item = seleccion.First();

                    DataContext.Colors.DeleteOnSubmit(item);
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
