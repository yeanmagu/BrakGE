using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Generals.business.Data;
using System.Collections.Generic;
namespace Generals.business.Entities
{
    public class BllBrief
    {
        public int Id { get; set; }
        public int IdCliente { get; set; }
        //public int NroCuota { get; set; }
        public int IdBodega { get; set; }
        //public decimal ValorRecibido { get; set; }
        public DateTime FechaCreacion { get; set; }
        public DateTime FechaSistema { get; set; }
        //public decimal ValorTotal { get; set; }
        public string Descripcion { get; set; }
        public int Estado { get; set; }
        public string Notas { get; set; }
        public string Usuario { get; set; }
        public int Add(BllBrief obj)
        {
            var db = new DataDataContext();
            var tp = new Brief();
            {
                tp.IdCliente = obj.IdCliente;
                tp.IdBodega = obj.IdBodega;
                tp.FechaCreacion = obj.FechaCreacion;
                tp.FechaSistema = obj.FechaSistema;
               // tp.ValorTotal = obj.ValorTotal;
               //tp.ValorRecibido=obj.ValorRecibido;
                tp.Descripcion=obj.Descripcion;
                tp.Estado=obj.Estado;
                //tp.NroCuota=obj.NroCuota;
                //tp.Notas=obj.Notas;
                tp.Usuario=obj.Usuario;
            };
            try
            {
                db.Brief.InsertOnSubmit(tp);
                db.SubmitChanges();
            }
            catch (Exception ex)
            {

                throw ex;
            }

            var firstOrDefault = db.Brief.FirstOrDefault(m => m.Id == db.Brief.Max(pl => pl.Id));
            if (firstOrDefault != null)
                tp.Id = firstOrDefault.Id;
            return tp.Id;
        }

        public  int Update(BllBrief obj)
        {
            var db = new DataDataContext();

            var @select = (from c in db.Brief where c.Id == obj.Id select c);

            foreach (var tp in @select)
            {
                tp.IdCliente = obj.IdCliente;
                tp.IdBodega = obj.IdBodega;
                tp.FechaCreacion = obj.FechaCreacion;
                tp.FechaSistema = obj.FechaSistema;
                //tp.ValorTotal = obj.ValorTotal;
                //tp.ValorRecibido = obj.ValorRecibido;
                tp.Descripcion = obj.Descripcion;
                tp.Estado = obj.Estado; 
                //tp.NroCuota = obj.NroCuota;
                //tp.Notas = obj.Notas;
                tp.Usuario = obj.Usuario;
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

        public  BllBrief GetById(int Id)
        {
            var db = new DataDataContext();
            var tp = new BllBrief();
            var select = (from c in db.Brief where c.Id == Id select c);
            if (!@select.Any()) return tp;
            var obj = @select.First();
            tp.Id = obj.Id;
            tp.IdCliente = obj.IdCliente.Value;
            tp.IdBodega = obj.IdBodega.Value;
            tp.FechaCreacion = obj.FechaCreacion;
            //tp.ValorTotal = obj.ValorTotal;
            tp.FechaSistema = obj.FechaSistema;
            //tp.ValorRecibido = obj.ValorRecibido;
            tp.Descripcion = obj.Descripcion;
            tp.Estado = obj.Estado; 
           
            //tp.Notas = obj.Notas;
            tp.Usuario = obj.Usuario;
            return tp;
        }

        public  List<BllBrief> ToList()
        {
            var db = new DataDataContext();

            var list = new List<BllBrief>();
            var select = (from c in db.Brief select c);

            foreach (var obj in select)
            {
                var tp = new BllBrief();
                tp.Id = obj.Id;
                tp.IdCliente = obj.IdCliente.Value;
                tp.IdBodega = obj.IdBodega.Value;
                tp.FechaCreacion = obj.FechaCreacion;
                //tp.ValorTotal = obj.ValorTotal;
                tp.FechaSistema = obj.FechaSistema;
                //tp.ValorRecibido = obj.ValorRecibido;
                tp.Descripcion = obj.Descripcion;
                tp.Estado = obj.Estado; 
                
                //tp.Notas = obj.Notas;
                tp.Usuario = obj.Usuario;
                list.Add(tp);
            }

            return list;
        }
        public  List<BllBrief> ToList(string something)
        {
            var db = new DataDataContext();

            var list = new List<BllBrief>();
            var @select = (from c in db.Brief
                           where c.Id.ToString().Contains(something) 
                           select c);

            foreach (var obj in @select)
            {
                var tp = new BllBrief();
                tp.Id = obj.Id;
                tp.IdCliente = obj.IdCliente.Value;
                tp.IdBodega = obj.IdBodega.Value;
                tp.FechaCreacion = obj.FechaCreacion;
                //tp.ValorTotal = obj.ValorTotal;
                tp.FechaSistema = obj.FechaSistema;
                //tp.ValorRecibido = obj.ValorRecibido;
                tp.Descripcion = obj.Descripcion;
                tp.Estado = obj.Estado; 
               
                //tp.Notas = obj.Notas;
                tp.Usuario = obj.Usuario;
                list.Add(tp);
            }

            return list;
        }
    }
}
