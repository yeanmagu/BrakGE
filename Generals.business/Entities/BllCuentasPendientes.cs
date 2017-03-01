using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;

namespace Generals.business.Entities
{
    public class BllCuentasPendientes
    {
        public int Id { get; set; }
        public int IdCliente { get; set; }
        public string NumeroCotizacion { get; set; }
        public decimal SaldoTotal { get; set; }
      
        public int IdUsuario { get; set; }
        public decimal SaldoPendiente { get; set; }
        public string DescripcionFactura { get; set; }
        public string Documento { get; set; }
        public string EstadoPago { get; set; }

        public string Cliente { get; set; }
        public string ModoPago { get; set; }
        public  int Add(BllCuentasPendientes obj)
        {
            var db = new DataDataContext();
            var tp = new CuentasPendientes();
            {
                tp.DescripcionFactura = obj.DescripcionFactura;
                tp.NumeroCotizacion=obj.NumeroCotizacion;
                tp.IdCliente=obj.IdCliente;
                tp.SaldoTotal=obj.SaldoTotal;
                tp.SaldoPendiente=obj.SaldoPendiente;
               
                tp.IdUsuario=obj.IdUsuario;
                tp.EstadoPago = obj.EstadoPago;
            };

            db.CuentasPendientes.InsertOnSubmit(tp);
            db.SubmitChanges();
            var firstOrDefault = db.CuentasPendientes.FirstOrDefault(m => m.Id == db.CuentasPendientes.Max(pl => pl.Id));
            if (firstOrDefault != null)
                tp.Id = firstOrDefault.Id;
            return tp.Id;
        }

        public  int Update(BllCuentasPendientes obj)
        {
            var db = new DataDataContext();
          
            var @select = (from c in db.CuentasPendientes where c.Id == obj.Id select c);

            foreach (var tp in @select)
            {

                tp.DescripcionFactura = obj.DescripcionFactura;
                tp.NumeroCotizacion = obj.NumeroCotizacion;
                tp.IdCliente = obj.IdCliente;
                tp.SaldoTotal = obj.SaldoTotal;
                tp.SaldoPendiente = obj.SaldoPendiente;
               
                tp.IdUsuario = obj.IdUsuario;
                tp.EstadoPago = obj.EstadoPago;
            }
            db.SubmitChanges();

            return 1;
        }
        public  bool ExisteDescri(string desc)
        {
            var db = new DataDataContext();
            new DPTO();
            var @select = (from c in db.CuentasPendientes where c.NumeroCotizacion == desc select c);
            if (@select.Any())
            {
                return true;
            }
            else
            {
                return false;
            }

        }
        public  BllCuentasPendientes GetById(int Id)
        {
            var db = new DataDataContext();
            var tp = new BllCuentasPendientes();
            var select = (from c in db.CuentasPendientes where c.Id == Id select c);
            if (!@select.Any()) return tp;
            var obj = @select.First();
            tp.Id = obj.Id;
            tp.DescripcionFactura = obj.DescripcionFactura;
            tp.NumeroCotizacion = obj.NumeroCotizacion;
            tp.IdCliente = obj.IdCliente;
            tp.SaldoTotal = obj.SaldoTotal;
            tp.SaldoPendiente = obj.SaldoPendiente;
         
            tp.IdUsuario = obj.IdUsuario;
            tp.EstadoPago = obj.EstadoPago;
            tp.Cliente=obj.Personas.Nombre + " "+ obj.Personas.Apellidos;
            tp.Documento=obj.Personas.NroDocumento;
           
            return tp;
        }

        public  List<BllCuentasPendientes> ToList()
        {
            var db = new DataDataContext();
           
            var list = new List<BllCuentasPendientes>();
            var select = (from c in db.CuentasPendientes select c);

            foreach (var obj in select)
            {
                var tp = new BllCuentasPendientes();
                tp.Id = obj.Id;
                tp.DescripcionFactura = obj.DescripcionFactura;
                tp.NumeroCotizacion = obj.NumeroCotizacion;
                tp.IdCliente = obj.IdCliente;
                tp.SaldoTotal = obj.SaldoTotal;
                tp.SaldoPendiente = obj.SaldoPendiente;
              
                tp.IdUsuario = obj.IdUsuario;
                tp.EstadoPago = obj.EstadoPago;
                tp.Cliente = obj.Personas.Nombre + " " + obj.Personas.Apellidos;
                tp.Documento = obj.Personas.NroDocumento;
               

                list.Add(tp);
            }

            return list;
        }
        public  List<BllCuentasPendientes> ToList(string something)
        {
            var db = new DataDataContext();
        
            var list = new List<BllCuentasPendientes>();
            var @select = (from c in db.CuentasPendientes
                           where c.Id.ToString().Contains(something)
                              || c.DescripcionFactura.Contains(something)
                              || c.Personas.NroDocumento.Contains(something) 
                          select c);

            foreach (var obj in @select)
            {
                var tp = new BllCuentasPendientes();
                tp.Id = obj.Id;
                tp.DescripcionFactura = obj.DescripcionFactura;
                tp.NumeroCotizacion = obj.NumeroCotizacion;
                tp.IdCliente = obj.IdCliente;
                tp.SaldoTotal = obj.SaldoTotal;
                tp.SaldoPendiente = obj.SaldoPendiente;
               
                tp.IdUsuario = obj.IdUsuario;
                tp.EstadoPago = obj.EstadoPago;
                tp.Cliente = obj.Personas.Nombre + " " + obj.Personas.Apellidos;
                tp.Documento = obj.Personas.NroDocumento;
               
              

                list.Add(tp);
            }

            return list;
        }
      
    }
}
