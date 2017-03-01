using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Generals.business.Data;
using System.Collections.Generic;
namespace Generals.business.Entities
{
    public class BllCuotaPago
    {
        public int Id { get; set; }
        public int IdPlanPago { get; set; }
        public int NroCuota { get; set; }
        public decimal Valor { get; set; }
        public decimal ValorPagado { get; set; }
        public string Fecha { get; set; }
        public string UsuarioRecibePago { get; set; }
        public string Estado { get; set; }
        public decimal SaldoCapital { get; set; }
        public decimal SaldoPendiente { get; set; }
        public int Add(BllCuotaPago obj)
        {
            var db = new DataDataContext();
            var tp = new CuotaPago();
            {
                tp.IdPlanPago = obj.IdPlanPago;
                tp.Valor = obj.Valor;
                tp.Fecha = obj.Fecha;
                tp.UsuarioRecibePago = obj.UsuarioRecibePago;
                tp.Estado = obj.Estado;
               tp.ValorPagado=obj.ValorPagado;
                tp.SaldoCapital=obj.SaldoCapital;
                tp.SaldoPendiente=obj.SaldoPendiente;
                tp.NroCuota=obj.NroCuota;
            };
            try
            {
                db.CuotaPago.InsertOnSubmit(tp);
                db.SubmitChanges();
            }
            catch (Exception ex)
            {

                throw ex;
            }

            var firstOrDefault = db.CuotaPago.FirstOrDefault(m => m.Id == db.CuotaPago.Max(pl => pl.Id));
            if (firstOrDefault != null)
                tp.Id = firstOrDefault.Id;
            return tp.Id;
        }

        public  int Update(BllCuotaPago obj)
        {
            var db = new DataDataContext();

            var @select = (from c in db.CuotaPago where c.Id == obj.Id select c);

            foreach (var tp in @select)
            {
                tp.IdPlanPago = obj.IdPlanPago;
                tp.Valor = obj.Valor;
                tp.Fecha = obj.Fecha;
                tp.UsuarioRecibePago = obj.UsuarioRecibePago;
                tp.Estado = obj.Estado;
                tp.ValorPagado = obj.ValorPagado;
                tp.SaldoCapital = obj.SaldoCapital;
                tp.SaldoPendiente = obj.SaldoPendiente; tp.NroCuota = obj.NroCuota;
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

        public  BllCuotaPago GetById(int Id)
        {
            var db = new DataDataContext();
            var tp = new BllCuotaPago();
            var select = (from c in db.CuotaPago where c.Id == Id select c);
            if (!@select.Any()) return tp;
            var obj = @select.First();
            tp.Id = obj.Id;
            tp.IdPlanPago = obj.IdPlanPago;
            tp.Valor = obj.Valor.Value;
            tp.Fecha = obj.Fecha;
            tp.Estado = obj.Estado;
            tp.UsuarioRecibePago = obj.UsuarioRecibePago;
            tp.ValorPagado = obj.ValorPagado;
            tp.SaldoCapital = obj.SaldoCapital;
            tp.SaldoPendiente = obj.SaldoPendiente; tp.NroCuota = obj.NroCuota;
            return tp;
        }
        public BllCuotaPago GetById(int NroAcuerdo,int NroCuota)
        {
            var db = new DataDataContext();
            var tp = new BllCuotaPago();
            var select = (from c in db.CuotaPago where c.IdPlanPago == NroAcuerdo && c.NroCuota==NroCuota select c);
            if (!@select.Any()) return tp;
            var obj = @select.First();
            tp.Id = obj.Id;
            tp.IdPlanPago = obj.IdPlanPago;
            tp.Valor = obj.Valor.Value;
            tp.Fecha = obj.Fecha;
            tp.Estado = obj.Estado;
            tp.UsuarioRecibePago = obj.UsuarioRecibePago;
            tp.ValorPagado = obj.ValorPagado;
            tp.SaldoCapital = obj.SaldoCapital;
            tp.SaldoPendiente = obj.SaldoPendiente; tp.NroCuota = obj.NroCuota;
            return tp;
        }
        public  List<BllCuotaPago> ToList()
        {
            var db = new DataDataContext();

            var list = new List<BllCuotaPago>();
            var select = (from c in db.CuotaPago select c);

            foreach (var obj in select)
            {
                var tp = new BllCuotaPago();
                tp.Id = obj.Id;
                tp.IdPlanPago = obj.IdPlanPago;
                tp.Valor = obj.Valor.Value;
                tp.Fecha = obj.Fecha;
                tp.Estado = obj.Estado;
                tp.UsuarioRecibePago = obj.UsuarioRecibePago;
                tp.ValorPagado = obj.ValorPagado;
                tp.SaldoCapital = obj.SaldoCapital;
                tp.SaldoPendiente = obj.SaldoPendiente; tp.NroCuota = obj.NroCuota;
                list.Add(tp);
            }

            return list;
        }
        public  List<BllCuotaPago> ToList(int something)
        {
            var db = new DataDataContext();

            var list = new List<BllCuotaPago>();
            var @select = (from c in db.CuotaPago
                           where c.IdPlanPago==(something)
                           select c);

            foreach (var obj in @select)
            {
                var tp = new BllCuotaPago();
                tp.Id = obj.Id;
                tp.IdPlanPago = obj.IdPlanPago;
                tp.Valor = obj.Valor.Value;
                tp.Fecha = obj.Fecha;
                tp.Estado = obj.Estado;
                tp.UsuarioRecibePago = obj.UsuarioRecibePago;
                tp.ValorPagado = obj.ValorPagado;
                tp.SaldoCapital = obj.SaldoCapital;
                tp.SaldoPendiente = obj.SaldoPendiente; 
                tp.NroCuota = obj.NroCuota;
                list.Add(tp);
            }

            return list;
        }
    }
}
