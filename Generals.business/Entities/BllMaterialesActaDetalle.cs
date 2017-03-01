using System;
using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;

namespace Generals.business.Entities
{
    public class BllMaterialesActaDetalle
    {
        public int ID { get; set; }
        public int IdDetalleActa { get; set; }
        public int IdMaterial { get; set; }
        public bool Cumple { get; set; }
        public int Cantidad { get; set; }
        public string Observaciones { get; set; }
        public DateTime FechaSistemas { get; set; }
        public bool Estado { get; set; }

        public string Material { get; set; }
        
        public static int Add(BllMaterialesActaDetalle obj)
        {
            var db = new DataDataContext();
            var tp = new MaterialesActaDetalle();
            {
                tp.IdDetalleActa = obj.IdDetalleActa;
                tp.IdMaterial = obj.IdMaterial;
                tp.Estado = true;
                tp.Cumple = obj.Cumple;
                tp.Observaciones = obj.Observaciones;
                tp.Cantidad = obj.Cantidad;
                tp.FechaSistemas=DateTime.Now;
                
            };

            db.MaterialesActaDetalles.InsertOnSubmit(tp);
            db.SubmitChanges();
            var firstOrDefault = db.MaterialesActaDetalles.FirstOrDefault(m => m.ID == db.MaterialesActaDetalles.Max(pl => pl.ID));
            if (firstOrDefault != null)
                tp.ID = firstOrDefault.ID;
            return tp.ID;
        }

        public static int Update(BllMaterialesActaDetalle obj)
        {
            var db = new DataDataContext();

            var @select = (from c in db.MaterialesActaDetalles where c.ID == obj.ID select c);

            foreach (var tp in @select)
            {
                 tp.IdDetalleActa = obj.IdDetalleActa;
                tp.IdMaterial = obj.IdMaterial;
                tp.Estado = obj.Estado;
                tp.Cumple = obj.Cumple;
                tp.Observaciones = obj.Observaciones;
                tp.Cantidad = obj.Cantidad;
                tp.FechaSistemas=DateTime.Now;  
            }
            db.SubmitChanges();

            return 1;
        }

        public static BllMaterialesActaDetalle GetById(int id)
        {
            var db = new DataDataContext();
            var objGrabar = new BllMaterialesActaDetalle();
            var select = (from c in db.MaterialesActaDetalles where c.ID == id select c);
            if (!@select.Any()) return objGrabar;
            var obj = @select.First();
                objGrabar.ID = obj.ID;
                objGrabar.IdDetalleActa = obj.IdDetalleActa.Value;
                objGrabar.Estado = true;
                objGrabar.Cumple = obj.Cumple.Value;
                objGrabar.Observaciones = obj.Observaciones;
                objGrabar.Cantidad = obj.Cantidad.Value;
                objGrabar.FechaSistemas = obj.FechaSistemas.Value;
                objGrabar.Material = obj.Materiale.Descripcion;

            return objGrabar;
        }

        public static List<BllMaterialesActaDetalle> ToList()
        {
            var db = new DataDataContext();
            
            var list = new List<BllMaterialesActaDetalle>();
            var select = (from c in db.MaterialesActaDetalles select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllMaterialesActaDetalle();
                objGrabar.ID = obj.ID;
                objGrabar.IdDetalleActa = obj.IdDetalleActa.Value;
                objGrabar.Estado = true;
                objGrabar.Cumple = obj.Cumple.Value;
                objGrabar.Observaciones = obj.Observaciones;
                objGrabar.Cantidad = obj.Cantidad.Value;
                objGrabar.FechaSistemas = obj.FechaSistemas.Value;
                objGrabar.Material = obj.Materiale.Descripcion;

                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BllMaterialesActaDetalle> ToList(string something)
        {
            var db = new DataDataContext();
           
            var list = new List<BllMaterialesActaDetalle>();
            var @select = (from c in db.MaterialesActaDetalles
                          where c.ID.ToString().Contains(something)
                              || c.IdDetalleActa.ToString().Contains(something)
                          select c);

            foreach (var obj in @select)
            {
                var objGrabar = new BllMaterialesActaDetalle();
                objGrabar.ID = obj.ID;
                objGrabar.IdDetalleActa = obj.IdDetalleActa.Value;
                objGrabar.Estado = true;
                objGrabar.Cumple = obj.Cumple.Value;
                objGrabar.Observaciones = obj.Observaciones;
                objGrabar.Cantidad = obj.Cantidad.Value;
                objGrabar.FechaSistemas = obj.FechaSistemas.Value;
                objGrabar.Material = obj.Materiale.Descripcion;

                list.Add(objGrabar);
            }

            return list;
        }
       
    }
}
