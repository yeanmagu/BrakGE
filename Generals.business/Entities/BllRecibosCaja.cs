using System;
using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;

namespace Generals.business.Entities
{
    public class BllRecibosCaja
    {
        public int ID { get; set; }
        public int IdEmpresa { get; set; }
        public int IdCliente { get; set; }
        public int IdBodega { get; set; }
        public int IdDocumento { get; set; }
        public DateTime Fecha { get; set; }
        public string Notas { get; set; }
        public decimal Valor { get; set; }
        public decimal Descuento { get; set; }
        public decimal Efectivo { get; set; }
        public decimal Cambio { get; set; }
        public int IdUsuario { get; set; }
        public int IdUsuarioVende { get; set; }
        public string Observaciones { get; set; }
       
        public bool Anulado { get; set; }

        public string Cliente { get; set; }
        public string Usuario { get; set; }
        
        public static int Add(BllRecibosCaja obj)
        {
            var db = new DataDataContext();
            var tp = new RecibosCaja();
            {
                tp.IdDocumento = obj.IdDocumento;
                tp.IdBodega = obj.IdBodega;
                tp.IdEmpresa = obj.IdEmpresa;
                tp.IdCliente = obj.IdCliente;
                tp.IdDocumento = obj.IdDocumento;
                tp.Notas = obj.Notas;
                tp.Anulado = obj.Anulado;
                tp.Valor = obj.Valor;
                tp.Descuento = obj.Descuento;
                tp.Efectivo = obj.Efectivo;
                tp.Cambio = obj.Cambio;
                tp.IdUsuarioVende = obj.IdUsuarioVende;
                tp.IdUsuario = obj.IdUsuario;
                tp.Fecha=DateTime.Now;
                
            };

            db.RecibosCajas.InsertOnSubmit(tp);
            db.SubmitChanges();
            var firstOrDefault = db.RecibosCajas.FirstOrDefault(m => m.Id == db.RecibosCajas.Max(pl => pl.Id));
            if (firstOrDefault != null)
                tp.Id = firstOrDefault.Id;
            return tp.Id;
        }

        public static int Update(BllRecibosCaja obj)
        {
            var db = new DataDataContext();
            var objGrabar = new Acta();

            var @select = (from c in db.RecibosCajas where c.Id == obj.ID select c);

            foreach (var tp in @select)
            {
                tp.Notas = obj.Notas;
                tp.Anulado = obj.Anulado;
                tp.Valor = obj.Valor;
                tp.Descuento = obj.Descuento;
                tp.Efectivo = obj.Efectivo;
                tp.Cambio = obj.Cambio;
                tp.IdUsuarioVende = obj.IdUsuarioVende;
                tp.IdUsuario = obj.IdUsuario;
            }
            db.SubmitChanges();

            return 1;
        }

        public static BllRecibosCaja GetById(int id)
        {
            var db = new DataDataContext();
            var tp = new BllRecibosCaja();
            var select = (from c in db.RecibosCajas where c.Id == id select c);
            if (!@select.Any()) return tp;
            var obj = @select.First();
                tp.ID = obj.Id;
                tp.IdDocumento = obj.IdDocumento.Value;
                tp.IdBodega = obj.IdBodega.Value;
                tp.IdEmpresa = obj.IdEmpresa.Value;
                tp.IdCliente = obj.IdCliente.Value;
                tp.IdDocumento = obj.IdDocumento.Value;
                tp.Notas = obj.Notas;
                tp.Anulado = obj.Anulado.Value;
                tp.Valor = obj.Valor.Value;
                tp.Descuento = obj.Descuento.Value;
                tp.Efectivo = obj.Efectivo.Value;
                tp.Cambio = obj.Cambio.Value;
                tp.IdUsuarioVende = obj.IdUsuarioVende.Value;
                tp.IdUsuario = obj.IdUsuario.Value;
                tp.Fecha = obj.Fecha.Value;
            

            return tp;
        }

        public static List<BllRecibosCaja> ToList()
        {
            var db = new DataDataContext();
          
            var list = new List<BllRecibosCaja>();
            var select = (from c in db.RecibosCajas select c);

            foreach (var obj in select)
            {
                var tp = new BllRecibosCaja();
                tp.ID = obj.Id;
                tp.IdDocumento = obj.IdDocumento.Value;
                tp.IdBodega = obj.IdBodega.Value;
                tp.IdEmpresa = obj.IdEmpresa.Value;
                tp.IdCliente = obj.IdCliente.Value;
                tp.IdDocumento = obj.IdDocumento.Value;
                tp.Notas = obj.Notas;
                tp.Anulado = obj.Anulado.Value;
                tp.Valor = obj.Valor.Value;
                tp.Descuento = obj.Descuento.Value;
                tp.Efectivo = obj.Efectivo.Value;
                tp.Cambio = obj.Cambio.Value;
                tp.IdUsuarioVende = obj.IdUsuarioVende.Value;
                tp.IdUsuario = obj.IdUsuario.Value;
                tp.Fecha = obj.Fecha.Value;
                
                list.Add(tp);
            }

            return list;
        }
        public static List<BllRecibosCaja> ToList(string something)
        {
            var db = new DataDataContext();
            
            var list = new List<BllRecibosCaja>();
            var @select = (from c in db.RecibosCajas
                          where c.Id.ToString().Contains(something)
                              || c.IdDocumento.ToString().Contains(something)
                          select c);

            foreach (var obj in @select)
            {
                var tp = new BllRecibosCaja();
                tp.ID = obj.Id;
                tp.IdDocumento = obj.IdDocumento.Value;
                tp.IdBodega = obj.IdBodega.Value;
                tp.IdEmpresa = obj.IdEmpresa.Value;
                tp.IdCliente = obj.IdCliente.Value;
                tp.IdDocumento = obj.IdDocumento.Value;
                tp.Notas = obj.Notas;
                tp.Anulado = obj.Anulado.Value;
                tp.Valor = obj.Valor.Value;
                tp.Descuento = obj.Descuento.Value;
                tp.Efectivo = obj.Efectivo.Value;
                tp.Cambio = obj.Cambio.Value;
                tp.IdUsuarioVende = obj.IdUsuarioVende.Value;
                tp.IdUsuario = obj.IdUsuario.Value;
                tp.Fecha = obj.Fecha.Value;

                list.Add(tp);
            }

            return list;
        }
      
    }
}
