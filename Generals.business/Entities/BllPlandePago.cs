using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Generals.business.Data;
using System.Collections.Generic;
namespace Generals.business.Entities
{
    public class BllPlandePago
    {
        public int Id { get; set; }
        public int IdFactura { get; set; }
        public DateTime FechaAcuerdo { get; set; }
        public int NroCuotas { get; set; }
        public string Usuario { get; set; }
        public bool Estado { get; set; }
        public string ModoPago { get; set; }
        public int DiasPago { get; set; }

        public int Add(BllPlandePago obj)
        {
            var db = new DataDataContext();
            var tp = new PlanPagoCredito();
            {
                tp.IdFactura = obj.IdFactura;
                tp.FechaAcuerdo = obj.FechaAcuerdo;
                tp.NroCuotas = obj.NroCuotas;
                tp.Usuario = obj.Usuario;
                tp.Estado = obj.Estado;
                tp.ModoPago=obj.ModoPago;
                tp.DiasPago=obj.DiasPago;

               
            };
            try
            {
                db.PlanPagoCredito.InsertOnSubmit(tp);
                db.SubmitChanges();
            }
            catch (Exception ex)
            {

                throw ex;
            }

            var firstOrDefault = db.PlanPagoCredito.FirstOrDefault(m => m.Id == db.PlanPagoCredito.Max(pl => pl.Id));
            if (firstOrDefault != null)
                tp.Id = firstOrDefault.Id;
            return tp.Id;
        }

        public  int Update(BllPlandePago obj)
        {
            var db = new DataDataContext();

            var @select = (from c in db.PlanPagoCredito where c.Id == obj.Id select c);

            foreach (var tp in @select)
            {
                tp.IdFactura = obj.IdFactura;
                tp.FechaAcuerdo = obj.FechaAcuerdo;
                tp.NroCuotas = obj.NroCuotas;
                tp.Usuario = obj.Usuario;
                tp.Estado = obj.Estado;
                tp.ModoPago = obj.ModoPago;
                tp.DiasPago = obj.DiasPago;
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

        public  BllPlandePago GetById(int Id)
        {
            var db = new DataDataContext();
            var tp = new BllPlandePago();
            var select = (from c in db.PlanPagoCredito where c.Id == Id select c);
            if (!@select.Any()) return tp;
            var obj = @select.First();
            tp.Id = obj.Id;
            tp.IdFactura = obj.IdFactura;
            tp.FechaAcuerdo = obj.FechaAcuerdo.Value;
            tp.NroCuotas = obj.NroCuotas.Value;
            tp.Usuario = obj.Usuario;
            tp.Estado = obj.Estado.Value;
            tp.ModoPago = obj.ModoPago;
            tp.DiasPago = obj.DiasPago.Value;
            return tp;
        }

        public  List<BllPlandePago> ToList()
        {
            var db = new DataDataContext();

            var list = new List<BllPlandePago>();
            var select = (from c in db.PlanPagoCredito select c);

            foreach (var obj in select)
            {
                var tp = new BllPlandePago();
                tp.Id = obj.Id;
                tp.IdFactura = obj.IdFactura;
                tp.FechaAcuerdo = obj.FechaAcuerdo.Value;
                tp.NroCuotas = obj.NroCuotas.Value;
                tp.Usuario = obj.Usuario;
                tp.Estado = obj.Estado.Value;
                tp.ModoPago = obj.ModoPago;
                tp.DiasPago = obj.DiasPago.Value;
                list.Add(tp);
            }

            return list;
        }
        public  List<BllPlandePago> ToList(int something)
        {
            var db = new DataDataContext();

            var list = new List<BllPlandePago>();
            var @select = (from c in db.PlanPagoCredito
                           where c.IdFactura==(something)
                           select c);

            foreach (var obj in @select)
            {
                var tp = new BllPlandePago();
                tp.Id = obj.Id;
                tp.IdFactura = obj.IdFactura;
                tp.FechaAcuerdo = obj.FechaAcuerdo.Value;
                tp.NroCuotas = obj.NroCuotas.Value;
                tp.Usuario = obj.Usuario;
                tp.Estado = obj.Estado.Value;
                tp.ModoPago = obj.ModoPago;
                tp.DiasPago = obj.DiasPago.Value;
                list.Add(tp);
            }

            return list;
        }
    }
}
