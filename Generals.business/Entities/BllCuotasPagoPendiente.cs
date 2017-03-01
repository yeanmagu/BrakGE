using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Generals.business.Data;
using System.Collections.Generic;
namespace Generals.business.Entities
{
    public class BllCuotasPagoPendiente
    {
        public int Id { get; set; }
        public int IdAcuerdo { get; set; }
        public int NroCuota { get; set; }
        public decimal Valor { get; set; }
        public int IdModoPago { get; set; }
        public string Fecha { get; set; }
        public int Usuario { get; set; }
        public string Estado { get; set; }
        public decimal SaldoCapital { get; set; }
        public decimal SaldoPendiente { get; set; }
        public string ModoPago { get; set; }
        public int Add(BllCuotasPagoPendiente obj)
        {
            var db = new DataDataContext();
            var tp = new CuotasPagoPendiente();
            {
                tp.IdAcuerdo = obj.IdAcuerdo;
                tp.Valor = obj.Valor;
                tp.Fecha = obj.Fecha;
                tp.Usuario = obj.Usuario;
                tp.Estado = obj.Estado;
               tp.IdModoPago=obj.IdModoPago;
                tp.SaldoCapital=obj.SaldoCapital;
                tp.SaldoPendiente=obj.SaldoPendiente;
                tp.NroCuota=obj.NroCuota;
            };
            try
            {
                db.CuotasPagoPendiente.InsertOnSubmit(tp);
                db.SubmitChanges();
            }
            catch (Exception ex)
            {

                throw ex;
            }

            var firstOrDefault = db.CuotasPagoPendiente.FirstOrDefault(m => m.Id == db.CuotasPagoPendiente.Max(pl => pl.Id));
            if (firstOrDefault != null)
                tp.Id = firstOrDefault.Id;
            return tp.Id;
        }

        public  int Update(BllCuotasPagoPendiente obj)
        {
            var db = new DataDataContext();

            var @select = (from c in db.CuotasPagoPendiente where c.Id == obj.Id select c);

            foreach (var tp in @select)
            {
                tp.IdAcuerdo = obj.IdAcuerdo;
                tp.Valor = obj.Valor;
                tp.Fecha = obj.Fecha;
                tp.Usuario = obj.Usuario;
                tp.Estado = obj.Estado;
                tp.IdModoPago = obj.IdModoPago;
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

        public  BllCuotasPagoPendiente GetById(int Id)
        {
            var db = new DataDataContext();
            var tp = new BllCuotasPagoPendiente();
            var select = (from c in db.CuotasPagoPendiente where c.Id == Id select c);
            if (!@select.Any()) return tp;
            var obj = @select.First();
            tp.Id = obj.Id;
            tp.IdAcuerdo = obj.IdAcuerdo;
            tp.Valor = obj.Valor;
            tp.Fecha = obj.Fecha;
            tp.Estado = obj.Estado;
            tp.Usuario = obj.Usuario.Value;
            tp.IdModoPago = obj.IdModoPago.Value;
            tp.SaldoCapital = obj.SaldoCapital;
            tp.SaldoPendiente = obj.SaldoPendiente; 
            tp.NroCuota = obj.NroCuota;
            return tp;
        }
        public BllCuotasPagoPendiente GetById(int NroAcuerdo,int NroCuota)
        {
            var db = new DataDataContext();
            var tp = new BllCuotasPagoPendiente();
            var select = (from c in db.CuotasPagoPendiente where c.IdAcuerdo == NroAcuerdo && c.NroCuota==NroCuota select c);
            if (!@select.Any()) return tp;
            var obj = @select.First();
            tp.Id = obj.Id;
            tp.IdAcuerdo = obj.IdAcuerdo;
            tp.Valor = obj.Valor;
            tp.Fecha = obj.Fecha;
            tp.Estado = obj.Estado;
            tp.Usuario = obj.Usuario.Value;
            tp.IdModoPago = obj.IdModoPago.Value;
            tp.SaldoCapital = obj.SaldoCapital;
            tp.SaldoPendiente = obj.SaldoPendiente; tp.NroCuota = obj.NroCuota;
            tp.ModoPago=obj.ModoPago.Descripcion;
            return tp;
        }
        public  List<BllCuotasPagoPendiente> ToList()
        {
            var db = new DataDataContext();

            var list = new List<BllCuotasPagoPendiente>();
            var select = (from c in db.CuotasPagoPendiente select c);

            foreach (var obj in select)
            {
                var tp = new BllCuotasPagoPendiente();
                tp.Id = obj.Id;
                tp.IdAcuerdo = obj.IdAcuerdo;
                tp.Valor = obj.Valor;
                tp.Fecha = obj.Fecha;
                tp.Estado = obj.Estado;
                tp.Usuario = obj.Usuario.Value;
                tp.IdModoPago = obj.IdModoPago.Value;
                tp.SaldoCapital = obj.SaldoCapital;
                tp.SaldoPendiente = obj.SaldoPendiente; 
                tp.NroCuota = obj.NroCuota;
                tp.ModoPago = obj.ModoPago.Descripcion;
                list.Add(tp);
            }

            return list;
        }
        public  List<BllCuotasPagoPendiente> ToList(int something)
        {
            var db = new DataDataContext();

            var list = new List<BllCuotasPagoPendiente>();
            var @select = (from c in db.CuotasPagoPendiente
                           where c.IdAcuerdo==(something)
                           select c);

            foreach (var obj in @select)
            {
                var tp = new BllCuotasPagoPendiente();
                tp.Id = obj.Id;
                tp.IdAcuerdo = obj.IdAcuerdo;
                tp.Valor = obj.Valor;
                tp.Fecha = obj.Fecha;
                tp.Estado = obj.Estado;
                tp.Usuario = obj.Usuario.Value;
                tp.IdModoPago = obj.IdModoPago.Value;
                tp.SaldoCapital = obj.SaldoCapital;
                tp.SaldoPendiente = obj.SaldoPendiente; 
                tp.NroCuota = obj.NroCuota;
                tp.ModoPago = obj.ModoPago.Descripcion;
                list.Add(tp);
            }

            return list;
        }
    }
}
