using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;
using System;

namespace Generals.business.Entities
{
    public class BllMarcas
    {
        public int Id { get; set; }
        public string Descripcion { get; set; }
       
        public DateTime  Fecha { get; set; }

        public int IdEmpresa { get; set; }
        public int IdUsuario { get; set; }
        public static int Add(BllMarcas obj)
        {
            var db = new DataDataContext();
            var tp = new Marca
            {
                IdUsuario=obj.IdUsuario,
                IdEmpresa=obj.IdEmpresa,
                Fecha = obj.Fecha,
                Descripcion = obj.Descripcion,
                
            };

            db.Marcas.InsertOnSubmit(tp);
            db.SubmitChanges();
            var firstOrDefault = db.Marcas.FirstOrDefault(m => m.ID == db.Marcas.Max(pl => pl.ID));
            if (firstOrDefault != null)
                tp.ID = firstOrDefault.ID;
            return tp.ID;
        }

        public static int Update(BllMarcas obj)
        {
            var db = new DataDataContext();
            var @select = (from c in db.Marcas where c.ID == obj.Id select c);
            foreach (var item in @select)
            {
                item.IdUsuario = obj.IdUsuario;
                item.IdEmpresa = obj.IdEmpresa;
                item.Fecha = obj.Fecha;
                item.Descripcion = obj.Descripcion;
             
            }
           
            db.SubmitChanges();

            return 1;
        }

        public static BllMarcas GetById(int id)
        {
            var db = new DataDataContext();
            var objGrabar = new BllMarcas();
            var select = (from c in db.Marcas where c.ID == id select c);
            if (!@select.Any()) return objGrabar;
            var obj = @select.First();
            objGrabar.Id = obj.ID;
            objGrabar.Fecha = obj.Fecha.Value;
            objGrabar.Descripcion = obj.Descripcion;
            objGrabar.IdEmpresa = obj.IdEmpresa;
            return objGrabar;
        }

        public static List<BllMarcas> ToList()
        {
            var db = new DataDataContext();
           
            var list = new List<BllMarcas>();
            var select = (from c in db.Marcas select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllMarcas();
                objGrabar.Id = obj.ID;
                objGrabar.Fecha = obj.Fecha.Value;
                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.IdEmpresa = obj.IdEmpresa;

                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BllMarcas> ToList(string something)
        {
            var db = new DataDataContext();
            
            var list = new List<BllMarcas>();
            var @select = (from c in db.Marcas
                          where c.ID.ToString().Contains(something)
                              || c.Descripcion.Contains(something)
                          select c);

            foreach (var obj in @select)
            {
                var objGrabar = new BllMarcas();
                objGrabar.Id = obj.ID;
                objGrabar.Fecha = obj.Fecha.Value;
                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.IdEmpresa = obj.IdEmpresa;

                list.Add(objGrabar);
            }

            return list;
        }
        public static bool ExisteDescri(string desc)
        {
            var db = new DataDataContext();
            new Marca();
            var @select = (from c in db.Marcas where c.Descripcion == desc select c);
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
            var @select = (from c in db.Marcas where c.Descripcion == desc select c);
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
                var seleccion = (from c in DataContext.Marcas
                                 where c.ID == id
                                 select c);
                if (seleccion.Count() > 0)
                {
                    var item = seleccion.First();

                    DataContext.Marcas.DeleteOnSubmit(item);
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
