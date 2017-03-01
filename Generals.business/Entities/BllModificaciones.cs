using System;
using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;

namespace Generals.business.Entities
{
    public class BllModificaciones
    {
        public int Id { get; set; }
        public int IdDocumento { get; set; }
        public int SolicitaCambio { get; set; }
        public int IdMotivoModificacion { get; set; }
        public int IdUsuario { get; set; }
        public DateTime FechaSistema { get; set; }
        public string Descripcion { get; set; }
        public string Actividades { get; set; }
        public static int Add(BllModificaciones obj)
        {
            var db = new DataDataContext();
            var tp = new Modificacione
            {
                IdMotivoModificacion = obj.IdMotivoModificacion,
                IdDocumento = obj.IdDocumento,
                IdUsuario = obj.IdUsuario,
                FechaSistema = DateTime.Now,
                SolicitaCambio = obj.SolicitaCambio,
                Descripcion=obj.Descripcion,
                Actividades=obj.Actividades
            };

            db.Modificaciones.InsertOnSubmit(tp);
            db.SubmitChanges();
            var firstOrDefault = db.Modificaciones.FirstOrDefault(m => m.ID == db.Modificaciones.Max(pl => pl.ID));
            if (firstOrDefault != null)
                tp.ID = firstOrDefault.ID;
            return tp.ID;
        }

        public static int Update(BllModificaciones obj)
        {
            var db = new DataDataContext();
            var objGrabar = new BllModificaciones();

            var @select = (from c in db.Modificaciones where c.ID == obj.Id select c);

            foreach (var item in @select)
            {
                item.IdMotivoModificacion = obj.IdMotivoModificacion;
                item.IdDocumento = obj.IdDocumento;
                item.IdUsuario = obj.IdUsuario;
                item.FechaSistema = DateTime.Now;
                item.SolicitaCambio = obj.SolicitaCambio;
                item.Descripcion=obj.Descripcion;
                item.Actividades = obj.Actividades;
            }
           
            db.SubmitChanges();

            return 1;
        }

        public static BllModificaciones GetById(int id)
        {
            var db = new DataDataContext();
            var item = new BllModificaciones();
            var select = (from c in db.Modificaciones where c.ID == id select c);
            if (!@select.Any()) return item;
            var obj = @select.First();
            item.Id = obj.ID;
            item.IdMotivoModificacion = obj.IdMotivoModificacion.Value;
            item.IdDocumento = obj.IdDocumento.Value;
            item.IdUsuario = obj.IdUsuario.Value;
            item.FechaSistema =obj.FechaSistema.Value;
            item.SolicitaCambio = obj.SolicitaCambio.Value;
            item.Descripcion = obj.Descripcion;
            item.Actividades = obj.Actividades;
            return item;
        }

        public static List<BllModificaciones> ToList()
        {
            var db = new DataDataContext();
           
            var list = new List<BllModificaciones>();
            var select = (from c in db.Modificaciones select c);

            foreach (var obj in select)
            {
                var item = new BllModificaciones();
                item.Id = obj.ID;
                item.IdMotivoModificacion = obj.IdMotivoModificacion.Value;
                item.IdDocumento = obj.IdDocumento.Value;
                item.IdUsuario = obj.IdUsuario.Value;
                item.FechaSistema = obj.FechaSistema.Value;
                item.SolicitaCambio = obj.SolicitaCambio.Value;
                item.Descripcion = obj.Descripcion;
                item.Actividades = obj.Actividades;

                list.Add(item);
            }

            return list;
        }
        public static List<BllModificaciones> ToList(string something)
        {
            var db = new DataDataContext();
           
            var list = new List<BllModificaciones>();
            var @select = (from c in db.Modificaciones
                          where c.ID.ToString().Contains(something)
                          select c);

            foreach (var obj in @select)
            {
                var item = new BllModificaciones();
                item.Id = obj.ID;
                item.IdMotivoModificacion = obj.IdMotivoModificacion.Value;
                item.IdDocumento = obj.IdDocumento.Value;
                item.IdUsuario = obj.IdUsuario.Value;
                item.FechaSistema = obj.FechaSistema.Value;
                item.SolicitaCambio = obj.SolicitaCambio.Value;
                item.Descripcion = obj.Descripcion;
                item.Actividades = obj.Actividades;

                list.Add(item);
            }

            return list;
        }
        
    }
}
