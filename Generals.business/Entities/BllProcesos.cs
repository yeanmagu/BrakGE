using System;
using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;

namespace Generals.business.Entities
{
    public class BllProcesos
    {
        public int Id { get; set; }
        public int IdTipoProceso { get; set; }
        public int IdDocumento { get; set; }
        public string Descripcion { get; set; }
        public int IdUsuario { get; set; }
        public int Cantidad { get; set; }
        public DateTime FechaSistema { get; set; }
        public string TipoProceso { get; set; }                                

        public static int Add(BllProcesos obj)
        {
            var db = new DataDataContext();
            var tp = new Proceso();
            {
                tp.IdTipoProceso = obj.IdTipoProceso;
                tp.IdDocumento = obj.IdDocumento;
                tp.Descripcion = obj.Descripcion;
                tp.Cantidad = obj.Cantidad;
                tp.IdUsuario = obj.IdUsuario;
                tp.FechaSistema = DateTime.Now;
                
            };

            db.Procesos.InsertOnSubmit(tp);
            db.SubmitChanges();
            var firstOrDefault = db.Procesos.FirstOrDefault(m => m.ID == db.Procesos.Max(pl => pl.ID));
            if (firstOrDefault != null)
                tp.ID = firstOrDefault.ID;
            return tp.ID;
        }

        public static int Update(BllProcesos obj)
        {
            var db = new DataDataContext();
           
            var @select = (from c in db.Procesos where c.ID == obj.Id select c);

            foreach (var tp in @select)
            {
                tp.IdTipoProceso = obj.IdTipoProceso;
                tp.IdDocumento = obj.IdDocumento;
                tp.Descripcion = obj.Descripcion;
                tp.Cantidad = obj.Cantidad;
                tp.IdUsuario = obj.IdUsuario;
                tp.FechaSistema = DateTime.Now;
             
            }
            db.SubmitChanges();

            return 1;
        }

        public static BllProcesos GetById(int id)
        {
            var db = new DataDataContext();
            var tp = new BllProcesos();
            var select = (from c in db.Procesos where c.ID == id select c);
            if (!@select.Any()) return tp;
            var obj = @select.First();
            tp.Id = obj.ID;
            tp.IdTipoProceso = obj.IdTipoProceso.Value;
            tp.IdDocumento = obj.IdDocumento.Value;
            tp.Descripcion = obj.Descripcion;
            tp.Cantidad = obj.Cantidad.Value;
            tp.IdUsuario = obj.IdUsuario.Value;
            tp.FechaSistema = obj.FechaSistema.Value;
            return tp;
        }

        public static List<BllProcesos> ToList()
        {
            var db = new DataDataContext();
           
            var list = new List<BllProcesos>();
            var select = (from c in db.Procesos select c);

            foreach (var obj in select)
            {
                var tp = new BllProcesos();
                tp.Id = obj.ID;
                tp.IdTipoProceso = obj.IdTipoProceso.Value;
                tp.IdDocumento = obj.IdDocumento.Value;
                tp.Descripcion = obj.Descripcion;
                tp.Cantidad = obj.Cantidad.Value;
                tp.IdUsuario = obj.IdUsuario.Value;
                tp.FechaSistema = obj.FechaSistema.Value;
                tp.TipoProceso = obj.TipoProceso.Descripcion;
                list.Add(tp);
            }

            return list;
        }
        public static List<BllProcesos> ToList(string something)
        {
            var db = new DataDataContext();
           
            var list = new List<BllProcesos>();
            var @select = (from c in db.Procesos
                          where c.ID.ToString().Contains(something)
                              || c.TipoProceso.Descripcion.Contains(something)
                          select c);

            foreach (var obj in @select)
            {
                var tp = new BllProcesos();
                tp.Id = obj.ID;
                tp.IdTipoProceso = obj.IdTipoProceso.Value;
                tp.IdDocumento = obj.IdDocumento.Value;
                tp.Descripcion = obj.Descripcion;
                tp.Cantidad = obj.Cantidad.Value;
                tp.IdUsuario = obj.IdUsuario.Value;
                tp.FechaSistema = obj.FechaSistema.Value;
                tp.TipoProceso = obj.TipoProceso.Descripcion;
                list.Add(tp);
            }

            return list;
        }
      
    }
}
