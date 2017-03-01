using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Generals.business.Data;
using System.Collections.Generic;
namespace Generals.business.Entities
{
    public class BllAcuerdoPagoCuentasPendientes
    {
        public int Id { get; set; }
        public int IdFactura { get; set; }
        public DateTime FechaCreacion { get; set; }
        public int NroCuotas { get; set; }
        public int IdUsuario { get; set; }
        public bool Estado { get; set; }
        public string FormaPago { get; set; }
        public int? DiasPago { get; set; }

        public int Add(BllAcuerdoPagoCuentasPendientes obj)
        {
            var db = new DataDataContext();
            var tp = new AcuerdoPagoCuentasPendientes();
            {
                tp.IdFactura = obj.IdFactura;
                tp.FechaCreacion = obj.FechaCreacion;
                tp.NroCuotas = obj.NroCuotas;
                tp.IdUsuario = obj.IdUsuario;
                tp.Estado = obj.Estado;
                tp.FormaPago=obj.FormaPago;
           
                tp.DiasPago=obj.DiasPago;
               
            };
            try
            {
                db.AcuerdoPagoCuentasPendientes.InsertOnSubmit(tp);
                db.SubmitChanges();
            }
            catch (Exception ex)
            {

                throw ex;
            }

            var firstOrDefault = db.AcuerdoPagoCuentasPendientes.FirstOrDefault(m => m.Id == db.AcuerdoPagoCuentasPendientes.Max(pl => pl.Id));
            if (firstOrDefault != null)
                tp.Id = firstOrDefault.Id;
            return tp.Id;
        }

        public  int Update(BllAcuerdoPagoCuentasPendientes obj)
        {
            var db = new DataDataContext();

            var @select = (from c in db.AcuerdoPagoCuentasPendientes where c.Id == obj.Id select c);

            foreach (var tp in @select)
            {
                tp.IdFactura = obj.IdFactura;
                tp.FechaCreacion = obj.FechaCreacion;
                tp.NroCuotas = obj.NroCuotas;
                tp.IdUsuario = obj.IdUsuario;
                tp.Estado = obj.Estado;
                tp.FormaPago = obj.FormaPago;

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

        public  BllAcuerdoPagoCuentasPendientes GetById(int Id)
        {
            var db = new DataDataContext();
            var tp = new BllAcuerdoPagoCuentasPendientes();
            var select = (from c in db.AcuerdoPagoCuentasPendientes where c.Id == Id select c);
            if (!@select.Any()) return tp;
            var obj = @select.First();
            tp.Id = obj.Id;
            tp.IdFactura = obj.IdFactura;
            tp.FechaCreacion = obj.FechaCreacion;
            tp.NroCuotas = obj.NroCuotas;
            tp.IdUsuario = obj.IdUsuario;
            tp.Estado = obj.Estado.Value;
            tp.FormaPago = obj.FormaPago;
            tp.DiasPago = obj.DiasPago;
            return tp;
        }

        public  List<BllAcuerdoPagoCuentasPendientes> ToList()
        {
            var db = new DataDataContext();

            var list = new List<BllAcuerdoPagoCuentasPendientes>();
            var select = (from c in db.AcuerdoPagoCuentasPendientes select c);

            foreach (var obj in select)
            {
                var tp = new BllAcuerdoPagoCuentasPendientes();
                tp.Id = obj.Id;
                tp.IdFactura = obj.IdFactura;
                tp.FechaCreacion = obj.FechaCreacion;
                tp.NroCuotas = obj.NroCuotas;
                tp.IdUsuario = obj.IdUsuario;
                tp.Estado = obj.Estado.Value;
                tp.FormaPago = obj.FormaPago;
                tp.DiasPago = obj.DiasPago;
                list.Add(tp);
            }

            return list;
        }
        public  List<BllAcuerdoPagoCuentasPendientes> ToList(int something)
        {
            var db = new DataDataContext();

            var list = new List<BllAcuerdoPagoCuentasPendientes>();
            var @select = (from c in db.AcuerdoPagoCuentasPendientes
                           where c.IdFactura==(something)
                           select c);

            foreach (var obj in @select)
            {
                var tp = new BllAcuerdoPagoCuentasPendientes();
                tp.Id = obj.Id;
                tp.IdFactura = obj.IdFactura;
                tp.FechaCreacion = obj.FechaCreacion;
                tp.NroCuotas = obj.NroCuotas;
                tp.IdUsuario = obj.IdUsuario;
                tp.Estado = obj.Estado.Value;
                tp.FormaPago = obj.FormaPago;
                tp.DiasPago = obj.DiasPago;
                list.Add(tp);
            }

            return list;
        }
    }
}
