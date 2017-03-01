using System;
using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;

namespace Generals.business.Entities
{
    public class BllDetalleRemision
    {
        public int Id { get; set; }
        public int IdRemision { get; set; }
        public string Producto { get; set; }
      
        public int IdItem { get; set; }
        public int Cantidad { get; set; }

                                        

        public static int Add(BllDetalleRemision obj)
        {
            var db = new DataDataContext();
            var tp = new DetalleRemisiones();
            {
                tp.IdRemision = obj.IdRemision;
                tp.Cantidad = obj.Cantidad;
                tp.IdItem = obj.IdItem;
                
            };

            db.DetalleRemisiones.InsertOnSubmit(tp);
            db.SubmitChanges();
            var firstOrDefault = db.DetalleRemisiones.FirstOrDefault(m => m.ID == db.DetalleRemisiones.Max(pl => pl.ID));
            if (firstOrDefault != null)
                tp.ID = firstOrDefault.ID;
            return tp.ID;
        }

        public static int Update(BllDetalleRemision obj)
        {
            var db = new DataDataContext();
          
            var @select = (from c in db.DetalleRemisiones where c.ID == obj.Id select c);

            foreach (var objGrabar in @select)
            {
                objGrabar.IdItem = obj.IdItem;
                objGrabar.Cantidad = obj.Cantidad;
                objGrabar.IdRemision = obj.IdRemision;
             
            }
            db.SubmitChanges();

            return 1;
        }

        public static BllDetalleRemision GetById(int id)
        {
            var db = new DataDataContext();
            var objGrabar = new BllDetalleRemision();
            var select = (from c in db.DetalleRemisiones where c.ID == id select c);
            if (!@select.Any()) return objGrabar;
            var obj = @select.First();
            objGrabar.Id = obj.ID;
            objGrabar.IdItem = obj.IdItem.Value;
            objGrabar.Cantidad = obj.Cantidad.Value;
            objGrabar.IdRemision = obj.IdRemision.Value;
            objGrabar.Producto = obj.Item.Descripcion;
            return objGrabar;
        }

        public static List<BllDetalleRemision> ToList()
        {
            var db = new DataDataContext();
           
            var list = new List<BllDetalleRemision>();
            var select = (from c in db.DetalleRemisiones select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllDetalleRemision();
                objGrabar.Id = obj.ID;
                objGrabar.IdItem = obj.IdItem.Value;
                objGrabar.Cantidad = obj.Cantidad.Value;
                objGrabar.IdRemision = obj.IdRemision.Value;
                objGrabar.Producto = obj.Item.Descripcion;

                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BllDetalleRemision> ToList(string something)
        {
            var db = new DataDataContext();
          
            var list = new List<BllDetalleRemision>();
            var @select = (from c in db.DetalleRemisiones
                          where c.ID.ToString().Contains(something)
                              || c.Item.Descripcion.Contains(something)
                          select c);

            foreach (var obj in @select)
            {
                var objGrabar = new BllDetalleRemision();
                objGrabar.Id = obj.ID;
                objGrabar.IdItem = obj.IdItem.Value;
                objGrabar.Cantidad = obj.Cantidad.Value;
                objGrabar.IdRemision = obj.IdRemision.Value;
                objGrabar.Producto = obj.Item.Descripcion;

                list.Add(objGrabar);
            }

            return list;
        }
      
    }
}
