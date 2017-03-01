using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Generals.business.Data;
using System.Collections.Generic;
namespace Generals.business.Entities
{
    public class BllReclamacion
    {
        public int Id { get; set; }
        public int? IdFactura { get; set; }
        public DateTime FechaReclamacion { get; set; }
   
        public int? IdUsuario { get; set; }
        public string Estado { get; set; }
        public string Observacion { get; set; }
        public string Cliente { get; set; }
        
        public int Add(BllReclamacion obj)
        {
            var db = new DataDataContext();
            var tp = new Reclamacion();
            {
                tp.IdFactura = obj.IdFactura;
                tp.FechaReclamacion = obj.FechaReclamacion;           
                tp.IdUsuario = obj.IdUsuario;
                tp.Estado = obj.Estado;
                tp.Observacion=obj.Observacion;
            };
            try
            {
                db.Reclamacion.InsertOnSubmit(tp);
                db.SubmitChanges();
            }
            catch (Exception ex)
            {

                throw ex;
            }

            var firstOrDefault = db.Reclamacion.FirstOrDefault(m => m.Id == db.Reclamacion.Max(pl => pl.Id));
            if (firstOrDefault != null)
                tp.Id = firstOrDefault.Id;
            return tp.Id;
        }

        public  int Update(BllReclamacion obj)
        {
            var db = new DataDataContext();

            var @select = (from c in db.Reclamacion where c.Id == obj.Id select c);

            foreach (var tp in @select)
            {
                tp.IdFactura = obj.IdFactura;
                tp.FechaReclamacion = obj.FechaReclamacion;
             
                tp.IdUsuario = obj.IdUsuario;
                tp.Estado = obj.Estado;
                tp.Observacion = obj.Observacion;
            }
            try
            {
                db.SubmitChanges();
            }
            catch (Exception ex)
            {

                throw ex;
            }


            return 1;
        }

        public  BllReclamacion GetById(int Id)
        {
            var db = new DataDataContext();
            var tp = new BllReclamacion();
            var select = (from c in db.Reclamacion where c.Id == Id select c);
            if (!@select.Any()) return tp;
            var obj = @select.First();
            tp.Id = obj.Id;
            tp.IdFactura = obj.IdFactura;
            tp.FechaReclamacion = obj.FechaReclamacion;
            tp.Cliente = obj.Documentos.Personas.Nombre+obj.Documentos.Personas.Apellidos;
            tp.IdUsuario = obj.IdUsuario;
            tp.Estado = obj.Estado;
            tp.Observacion = obj.Observacion;
            return tp;
        }

        public  List<BllReclamacion> ToList()
        {
            var db = new DataDataContext();

            var list = new List<BllReclamacion>();
            var select = (from c in db.Reclamacion select c);

            foreach (var obj in select)
            {
                var tp = new BllReclamacion();
                tp.Id = obj.Id;
                tp.IdFactura = obj.IdFactura;
                tp.FechaReclamacion = obj.FechaReclamacion;
                tp.Cliente = obj.Documentos.Personas.Nombre + obj.Documentos.Personas.Apellidos;
                tp.IdUsuario = obj.IdUsuario;
                tp.Estado = obj.Estado;
                tp.Observacion = obj.Observacion;
                list.Add(tp);
            }

            return list;
        }
        public  List<BllReclamacion> ToList(int something)
        {
            var db = new DataDataContext();

            var list = new List<BllReclamacion>();
            var @select = (from c in db.Reclamacion
                           where c.IdFactura==(something)
                           select c);

            foreach (var obj in @select)
            {
                var tp = new BllReclamacion();
                tp.Id = obj.Id;
                tp.IdFactura = obj.IdFactura;
                tp.Cliente = obj.Documentos.Personas.Nombre + obj.Documentos.Personas.Apellidos;
                tp.FechaReclamacion = obj.FechaReclamacion;
                tp.IdUsuario = obj.IdUsuario;
                tp.Estado = obj.Estado;
                tp.Observacion = obj.Observacion;
                list.Add(tp);
            }

            return list;
        }
    }
}
