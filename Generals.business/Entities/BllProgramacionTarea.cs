using System;
using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;

namespace Generals.business.Entities
{
    public class BllProgramacionTarea
    {
        public int Id { get; set; }
        public int IdResponsable { get; set; }
        public int IdDocumento { get; set; }
        public int IdProceso { get; set; }
        public int IdUsuario { get; set; }
        public int IdEmpresa { get; set; }
        public DateTime FechaSistema { get; set; }
        public string Descripcion { get; set; }
        public bool Estado { get; set; }
        public string Proceso { get; set; }                                

        public static int Add(BllProgramacionTarea obj)
        {
            var db = new DataDataContext();
            var tp = new ProgramacionTarea();
            {
                tp.IdResponsable = obj.IdResponsable;
                tp.IdDocumento = obj.IdDocumento;
                tp.IdProceso = obj.IdProceso;
                tp.IdEmpresa = obj.IdEmpresa;
                tp.Descripcion = obj.Descripcion;
                tp.Estado = obj.Estado;
                tp.IdUsuario = obj.IdUsuario;
                tp.FechaSistema = DateTime.Now;
                
            };

            db.ProgramacionTareas.InsertOnSubmit(tp);
            db.SubmitChanges();
            var firstOrDefault = db.ProgramacionTareas.FirstOrDefault(m => m.ID == db.ProgramacionTareas.Max(pl => pl.ID));
            if (firstOrDefault != null)
                tp.ID = firstOrDefault.ID;
            return tp.ID;
        }

        public static int Update(BllProgramacionTarea obj)
        {
            var db = new DataDataContext();
           
            var @select = (from c in db.ProgramacionTareas where c.ID == obj.Id select c);

            foreach (var tp in @select)
            {
                tp.IdProceso = obj.IdProceso;
                tp.IdEmpresa = obj.IdEmpresa;
                tp.Descripcion = obj.Descripcion;
                tp.Estado = obj.Estado;
                tp.IdUsuario = obj.IdUsuario;
                tp.FechaSistema = DateTime.Now;
             
            }
            db.SubmitChanges();

            return 1;
        }

        public static BllProgramacionTarea GetById(int id)
        {
            var db = new DataDataContext();
            var tp = new BllProgramacionTarea();
            var select = (from c in db.ProgramacionTareas where c.ID == id select c);
            if (!@select.Any()) return tp;
            var obj = @select.First();
            tp.Id = obj.ID;
            tp.IdResponsable = obj.IdResponsable.Value;
            tp.IdDocumento = obj.IdDocumento.Value;
            tp.IdProceso = obj.IdProceso.Value;
            tp.IdEmpresa = obj.IdEmpresa.Value;
            tp.IdUsuario = obj.IdUsuario.Value;
            tp.Descripcion = obj.Descripcion;
            tp.FechaSistema = obj.FechaSistema.Value;
            return tp;
        }

        public static List<BllProgramacionTarea> ToList()
        {
            var db = new DataDataContext();
           
            var list = new List<BllProgramacionTarea>();
            var select = (from c in db.ProgramacionTareas select c);

            foreach (var obj in select)
            {
                var tp = new BllProgramacionTarea();
                tp.Id = obj.ID;
                tp.IdResponsable = obj.IdResponsable.Value;
                tp.IdDocumento = obj.IdDocumento.Value;
                tp.IdProceso = obj.IdProceso.Value;
                tp.IdEmpresa = obj.IdEmpresa.Value;
                tp.IdUsuario = obj.IdUsuario.Value;
                tp.Descripcion = obj.Descripcion;
                tp.FechaSistema = obj.FechaSistema.Value;
                tp.Proceso = obj.Proceso.Descripcion;
                list.Add(tp);
            }

            return list;
        }
        public static List<BllProgramacionTarea> ToList(string something)
        {
            var db = new DataDataContext();
           
            var list = new List<BllProgramacionTarea>();
            var @select = (from c in db.ProgramacionTareas
                          where c.ID.ToString().Contains(something)
                              || c.Proceso.Descripcion.Contains(something)
                          select c);

            foreach (var obj in @select)
            {
                var tp = new BllProgramacionTarea();
                tp.Id = obj.ID;
                tp.IdResponsable = obj.IdResponsable.Value;
                tp.IdDocumento = obj.IdDocumento.Value;
                tp.IdProceso = obj.IdProceso.Value;
                tp.IdEmpresa = obj.IdEmpresa.Value;
                tp.IdUsuario = obj.IdUsuario.Value;
                tp.Descripcion = obj.Descripcion;
                tp.FechaSistema = obj.FechaSistema.Value;
                tp.Proceso = obj.Proceso.Descripcion;
                list.Add(tp);
            }

            return list;
        }
      
    }
}
