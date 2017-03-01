using System;
using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;

namespace Generals.business.Entities
{
    public class BllDetalleActa
    {
        public int ID { get; set; }
        public int IdActa { get; set; }
        public int IdTipoMontaje { get; set; }
        public bool Cumple { get; set; }
        public int Cantidad { get; set; }
        public string Observaciones { get; set; }
        public DateTime FechaSistema { get; set; }
        public bool Estado { get; set; }

        public string TipoMontaje { get; set; }
        
        public static int Add(BllDetalleActa obj)
        {
            var db = new DataDataContext();
            var tp = new DetalleActa();
            {
                tp.IdActa = obj.IdActa;
                tp.IdTipoMontaje = obj.IdTipoMontaje;
                tp.Estado = true;
                tp.Cumple = obj.Cumple;
                tp.Observaciones = obj.Observaciones;
                tp.Cantidad = obj.Cantidad;
                tp.FechaSistema=DateTime.Now;
                
            };

            db.DetalleActas.InsertOnSubmit(tp);
            db.SubmitChanges();
            var firstOrDefault = db.DetalleActas.FirstOrDefault(m => m.ID == db.DetalleActas.Max(pl => pl.ID));
            if (firstOrDefault != null)
                tp.ID = firstOrDefault.ID;
            return tp.ID;
        }

        public static int Update(BllDetalleActa obj)
        {
            var db = new DataDataContext();
           
            var @select = (from c in db.DetalleActas where c.ID == obj.ID select c);

            foreach (var objGrabar in @select)
            {
                objGrabar.IdTipoMontaje = obj.IdTipoMontaje;
                objGrabar.Estado = true;
                objGrabar.Cumple = obj.Cumple;
                objGrabar.Observaciones = obj.Observaciones;
                objGrabar.Cantidad = obj.Cantidad;
                objGrabar.FechaSistema = DateTime.Now;
            }
            db.SubmitChanges();

            return 1;
        }

        public static BllDetalleActa GetById(int id)
        {
            var db = new DataDataContext();
            var objGrabar = new BllDetalleActa();
            var select = (from c in db.DetalleActas where c.ID == id select c);
            if (!@select.Any()) return objGrabar;
            var obj = @select.First();
            objGrabar.ID = obj.ID;
            objGrabar.IdTipoMontaje = obj.IdTipoMontaje.Value;
            objGrabar.Estado = true;
            objGrabar.Cumple = obj.Cumple.Value;
            objGrabar.Observaciones = obj.Observaciones;
            objGrabar.Cantidad = obj.Cantidad.Value;
            objGrabar.FechaSistema = obj.FechaSistema.Value;
            objGrabar.TipoMontaje = obj.TipoMOntaje.Descripcion;

            return objGrabar;
        }

        public static List<BllDetalleActa> ToList()
        {
            var db = new DataDataContext();
          
            var list = new List<BllDetalleActa>();
            var select = (from c in db.DetalleActas select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllDetalleActa();
                objGrabar.ID = obj.ID;
                objGrabar.ID = obj.ID;
                objGrabar.IdTipoMontaje = obj.IdTipoMontaje.Value;
                objGrabar.Estado = true;
                objGrabar.Cumple = obj.Cumple.Value;
                objGrabar.Observaciones = obj.Observaciones;
                objGrabar.Cantidad = obj.Cantidad.Value;
                objGrabar.FechaSistema = obj.FechaSistema.Value;
                objGrabar.TipoMontaje = obj.TipoMOntaje.Descripcion;

                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BllDetalleActa> ToList(string something)
        {
            var db = new DataDataContext();
            
            var list = new List<BllDetalleActa>();
            var @select = (from c in db.DetalleActas
                          where c.ID.ToString().Contains(something)
                              || c.IdActa.ToString().Contains(something)
                          select c);

            foreach (var obj in @select)
            {
                var objGrabar = new BllDetalleActa();
                objGrabar.ID = obj.ID;
                objGrabar.IdTipoMontaje = obj.IdTipoMontaje.Value;
                objGrabar.Estado = true;
                objGrabar.Cumple = obj.Cumple.Value;
                objGrabar.Observaciones = obj.Observaciones;
                objGrabar.Cantidad = obj.Cantidad.Value;
                objGrabar.FechaSistema = obj.FechaSistema.Value;
                objGrabar.TipoMontaje = obj.TipoMOntaje.Descripcion;

                list.Add(objGrabar);
            }

            return list;
        }
        public static bool ExisteDescri(int desc)
        {
            var db = new DataDataContext();
            new DetalleActa();
            var @select = (from c in db.DetalleActas where c.IdActa == desc select c);
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
