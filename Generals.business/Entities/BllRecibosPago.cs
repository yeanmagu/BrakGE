using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Generals.business.Data;
using System.Collections.Generic;
namespace Generals.business.Entities
{
    public class BllRecibosPago
    {
        public int Id { get; set; }
        public int IdFactura { get; set; }
        public int NroCuota { get; set; }
        public int IdAcuerdo { get; set; }
        public decimal ValorRecibido { get; set; }
        public DateTime Fecha { get; set; }
        public decimal ValorDevuelto { get; set; }
        public decimal ValorTotal { get; set; }
        public string ModoPago { get; set; }
        public bool Anulado { get; set; }
        public string Notas { get; set; }
        public string Usuario { get; set; }
        public int Add(BllRecibosPago obj)
        {
            var db = new DataDataContext();
            var tp = new RecibosPago();
            {
                tp.IdFactura = obj.IdFactura;
                tp.IdAcuerdo = obj.IdAcuerdo;
                tp.Fecha = obj.Fecha;
                tp.ValorDevuelto = obj.ValorDevuelto;
                tp.ValorTotal = obj.ValorTotal;
               tp.ValorRecibido=obj.ValorRecibido;
                tp.ModoPago=obj.ModoPago;
                tp.Anulado=obj.Anulado;
                tp.NroCuota=obj.NroCuota;
                tp.Notas=obj.Notas;
                tp.Usuario=obj.Usuario;
            };
            try
            {
                db.RecibosPago.InsertOnSubmit(tp);
                db.SubmitChanges();
            }
            catch (Exception ex)
            {

                throw ex;
            }

            var firstOrDefault = db.RecibosPago.FirstOrDefault(m => m.Id == db.RecibosPago.Max(pl => pl.Id));
            if (firstOrDefault != null)
                tp.Id = firstOrDefault.Id;
            return tp.Id;
        }

        public  int Update(BllRecibosPago obj)
        {
            var db = new DataDataContext();

            var @select = (from c in db.RecibosPago where c.Id == obj.Id select c);

            foreach (var tp in @select)
            {
                tp.IdFactura = obj.IdFactura;
                tp.IdAcuerdo = obj.IdAcuerdo;
                tp.Fecha = obj.Fecha;
                tp.ValorDevuelto = obj.ValorDevuelto;
                tp.ValorTotal = obj.ValorTotal;
                tp.ValorRecibido = obj.ValorRecibido;
                tp.ModoPago = obj.ModoPago;
                tp.Anulado = obj.Anulado; tp.NroCuota = obj.NroCuota;
                tp.Notas = obj.Notas;
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

        public  BllRecibosPago GetById(int Id)
        {
            var db = new DataDataContext();
            var tp = new BllRecibosPago();
            var select = (from c in db.RecibosPago where c.Id == Id select c);
            if (!@select.Any()) return tp;
            var obj = @select.First();
            tp.Id = obj.Id;
            tp.IdFactura = obj.IdFactura;
            tp.IdAcuerdo = obj.IdAcuerdo;
            tp.Fecha = obj.Fecha;
            tp.ValorTotal = obj.ValorTotal;
            tp.ValorDevuelto = obj.ValorDevuelto;
            tp.ValorRecibido = obj.ValorRecibido;
            tp.ModoPago = obj.ModoPago;
            tp.Anulado = obj.Anulado; tp.NroCuota = obj.NroCuota;
            tp.Notas = obj.Notas;
            tp.Usuario = obj.Usuario;
            return tp;
        }

        public  List<BllRecibosPago> ToList()
        {
            var db = new DataDataContext();

            var list = new List<BllRecibosPago>();
            var select = (from c in db.RecibosPago select c);

            foreach (var obj in select)
            {
                var tp = new BllRecibosPago();
                tp.Id = obj.Id;
                tp.IdFactura = obj.IdFactura;
                tp.IdAcuerdo = obj.IdAcuerdo;
                tp.Fecha = obj.Fecha;
                tp.ValorTotal = obj.ValorTotal;
                tp.ValorDevuelto = obj.ValorDevuelto;
                tp.ValorRecibido = obj.ValorRecibido;
                tp.ModoPago = obj.ModoPago;
                tp.Anulado = obj.Anulado; tp.NroCuota = obj.NroCuota;
                tp.Notas = obj.Notas;
                tp.Usuario = obj.Usuario;
                list.Add(tp);
            }

            return list;
        }
        public  List<BllRecibosPago> ToList(int something)
        {
            var db = new DataDataContext();

            var list = new List<BllRecibosPago>();
            var @select = (from c in db.RecibosPago
                           where c.IdFactura==(something)
                           select c);

            foreach (var obj in @select)
            {
                var tp = new BllRecibosPago();
                tp.Id = obj.Id;
                tp.IdFactura = obj.IdFactura;
                tp.IdAcuerdo = obj.IdAcuerdo;
                tp.Fecha = obj.Fecha;
                tp.ValorTotal = obj.ValorTotal;
                tp.ValorDevuelto = obj.ValorDevuelto;
                tp.ValorRecibido = obj.ValorRecibido;
                tp.ModoPago = obj.ModoPago;
                tp.Anulado = obj.Anulado; 
                tp.NroCuota = obj.NroCuota;
                tp.Notas = obj.Notas;
                tp.Usuario = obj.Usuario;
                list.Add(tp);
            }

            return list;
        }
    }
}
