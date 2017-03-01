using System;
using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;

namespace Generals.business.Entities
{
    public class BllTalla
    {
        public int Id { get; set; }
        public string Descripcion { get; set; }
        public int IdEmpresa { get; set; }
        public string CodigoTalla { get; set; }
        public int IdUsuario { get; set; }
        public DateTime Fecha { get; set; }
        public string DescEmpresa { get; set; }
        public string DescUsuario { get; set; }
        public bool Estado { get; set; }
        public static int Add(BllTalla obj)
        {
            var db = new DataDataContext();
            var tp = new Talla
            {
                Descripcion = obj.Descripcion,
                IdEmpresa = obj.IdEmpresa,
                CodigoTalla=obj.CodigoTalla,               
                Fecha = DateTime.Now,
                IdUsuario = obj.IdUsuario,
                Estado=obj.Estado
            };

            db.Tallas.InsertOnSubmit(tp);
            db.SubmitChanges();
            var firstOrDefault = db.Tallas.FirstOrDefault(m => m.ID == db.Tallas.Max(pl => pl.ID));
            if (firstOrDefault != null)
                tp.ID = firstOrDefault.ID;
            return tp.ID;
        }

        public static int Update(BllTalla obj)
        {
            var db = new DataDataContext();
            var @select = (from c in db.Tallas where c.ID == obj.Id select c);

            foreach (var objGrabar in @select)
            {

                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.IdEmpresa = obj.IdEmpresa;
                objGrabar.CodigoTalla = obj.CodigoTalla;
                objGrabar.Fecha = DateTime.Now;
                objGrabar.IdUsuario = obj.IdUsuario;
                objGrabar.Estado = obj.Estado;


            }
            db.SubmitChanges();

            return 1;
        }
        public static int GetId(string desc)
        {
            var db = new DataDataContext();
            
            var @select = (from c in db.Tallas where c.Descripcion == desc select c);
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
        public static BllTalla GetById(int id)
        {
            var db = new DataDataContext();
            var objGrabar = new BllTalla();
            var select = (from c in db.Tallas where c.ID == id select c);
            if (!@select.Any()) return objGrabar;
            var obj = @select.First();
            objGrabar. Id = obj.ID;
            objGrabar.Descripcion = obj.Descripcion;
            objGrabar.Estado = obj.Estado.Value;
            if (obj.IdEmpresa != null) objGrabar.IdEmpresa = obj.IdEmpresa.Value;
            objGrabar.CodigoTalla = obj.CodigoTalla;
          
            objGrabar.Fecha = DateTime.Now;
            if (obj.IdUsuario != null) objGrabar.IdUsuario = obj.IdUsuario.Value;
            return objGrabar;
        }

        public static List<BllTalla> ToList()
        {
            var db = new DataDataContext();
            
            var list = new List<BllTalla>();
            var select = (from c in db.Tallas select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllTalla();
                objGrabar.Id = obj.ID;
                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.Estado = obj.Estado.Value;
                if (obj.IdEmpresa != null) objGrabar.IdEmpresa = obj.IdEmpresa.Value;
                objGrabar.CodigoTalla = obj.CodigoTalla;
              
                objGrabar.Fecha = DateTime.Now;
                if (obj.IdUsuario != null) objGrabar.IdUsuario = obj.IdUsuario.Value;
               
                objGrabar.DescUsuario = obj.User.Nombres;
                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BllTalla> ToList(string something)
        {
            var db = new DataDataContext();
           
            var list = new List<BllTalla>();
            var @select = (from c in db.Tallas
                          where c.ID.ToString().Contains(something)
                              || c.Descripcion.Contains(something)
                          select c);

            foreach (var obj in @select)
            {
                var objGrabar = new BllTalla();
                objGrabar.Id = obj.ID;
                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.Estado = obj.Estado.Value;
                if (obj.IdEmpresa != null) objGrabar.IdEmpresa = obj.IdEmpresa.Value;
                objGrabar.CodigoTalla = obj.CodigoTalla;
              
                objGrabar.Fecha = DateTime.Now;
                if (obj.IdUsuario != null) objGrabar.IdUsuario = obj.IdUsuario.Value;
              
                objGrabar.DescUsuario = obj.User.Nombres;

                list.Add(objGrabar);
            }

            return list;
        }
        public static bool ExisteDescri(string desc)
        {
            var db = new DataDataContext();
            new Talla();
            var @select = (from c in db.Tallas where c.Descripcion == desc select c);
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
                var seleccion = (from c in DataContext.Tallas
                                 where c.ID == id
                                 select c);
                if (seleccion.Count() > 0)
                {
                    var item = seleccion.First();

                    DataContext.Tallas.DeleteOnSubmit(item);
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
