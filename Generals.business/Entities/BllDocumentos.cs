using System;
using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;

namespace Generals.business.Entities
{
    public class BllDocumentos
    {
        public int Id { get; set; }
        public int IdCliente { get; set; }
        public int IdBodega { get; set; }
        public int IdTipoMovimiento { get; set; }
        public int IdEmpresa { get; set; }
        public int DiasValidez { get; set; }
        
        public decimal  TotalSub { get; set; }

        public decimal Total_Descuento { get; set; }
        public decimal Total { get; set; }
        public string NotasInternas { get; set; }
        public int IdDocumento { get; set; }
        public string Notas { get; set; }
        public int IdUsuario { get; set; }
        public int IdDocumentoAnterior { get; set; }
        public int IdEstadoDocumento { get; set; }

        public int IdFormaPago { get; set; }
        public DateTime FechaCreacion { get; set; }
        public DateTime FechaSistema { get; set; }
        public string Cliente { get; set; }
        public string Usuario { get; set; }
        public string Bodega { get; set; }
        public string TipoMovimiento { get; set; }
        public string FormaPago { get; set; }
        public string EstadoDocumento { get; set; }
        public decimal TotalIva { get; set; }
        public string EstadoPago { get; set; }
        public DateTime? FechaVencimiento { get; set; }
        public int? IdVendedor { get; set; }
        public int NumeroCotizacion { get; set; }
        public int GetCotizacion(int mov)
        {
            try
            {
                var db = new DataDataContext();
                var Co =(from c in db.Documentos where c.IdTipoMovimiento==mov select c).FirstOrDefault();// db.Documentos.FirstOrDefault(m => m.ID == db.Documentos.Max(pl => pl.ID) );

                return Co.NumeroCotizacion+1;
            }
            catch (Exception ex)
            {
                
                throw ex;
            }
        }
        public static int Add(BllDocumentos obj)
        {
            var db = new DataDataContext();
            var tp = new Documentos();
            {
                tp.IdCliente = obj.IdCliente;
                tp.Id_Bodega = obj.IdBodega;              
                tp.IdTipoMovimiento = obj.IdTipoMovimiento;
                tp.IdTipoMovimiento = obj.IdTipoMovimiento;
                tp.DiasValidez = obj.DiasValidez;
                tp.TotalSub = obj.TotalSub;
                tp.Total_Descuento = obj.Total_Descuento;
                tp.Total = obj.Total;
                tp.NotasInternas = obj.NotasInternas;
                tp.Notas = obj.Notas;
                tp.IdUsuario = obj.IdUsuario;
                tp.IdDocumentoAnterior = obj.IdDocumentoAnterior;
                tp.EstadoDocumento = obj.IdEstadoDocumento;
                tp.TotalIva=obj.TotalIva;
                tp.IdFormaPago = obj.IdFormaPago;
                tp.FechaCreacion = obj.FechaCreacion;
                tp.FechaSistema = DateTime.Now;
                tp.EstadoPago=obj.EstadoPago;
                tp.FechaVencimiento=obj.FechaVencimiento;
                tp.IdVendedor=obj.IdVendedor;
                tp.NumeroCotizacion=obj.NumeroCotizacion;
            };
            try
            {
                db.Documentos.InsertOnSubmit(tp);
                db.SubmitChanges();
            }
            catch (Exception  ex)
            {

                throw ex;
            }
           
            var firstOrDefault = db.Documentos.FirstOrDefault(m => m.ID == db.Documentos.Max(pl => pl.ID));
            if (firstOrDefault != null)
                tp.ID = firstOrDefault.ID;
            return tp.ID;
        }

        public static int Update(BllDocumentos obj)
        {
            var db = new DataDataContext();

            var @select = (from c in db.Documentos where c.ID == obj.Id select c);

            foreach (var objGrabar in @select)
            {
                objGrabar.TotalIva = obj.TotalIva;
                objGrabar.IdTipoMovimiento = obj.IdTipoMovimiento;
                objGrabar.IdCliente = obj.IdCliente;
                objGrabar.Id_Bodega = obj.IdBodega;
                objGrabar.IdTipoMovimiento = obj.IdTipoMovimiento;
                objGrabar.IdTipoMovimiento = obj.IdTipoMovimiento;
                objGrabar.DiasValidez = obj.DiasValidez;
                objGrabar.TotalSub = obj.TotalSub;
                objGrabar.Total_Descuento = obj.Total_Descuento;
                objGrabar.Total = obj.Total;
                objGrabar.NotasInternas = obj.NotasInternas;
                objGrabar.Notas = obj.Notas;
                objGrabar.IdUsuario = obj.IdUsuario;
                objGrabar.IdDocumentoAnterior = obj.IdDocumentoAnterior;
                objGrabar.EstadoDocumento = obj.IdEstadoDocumento;
                objGrabar.IdFormaPago = obj.IdFormaPago;
                objGrabar.FechaCreacion = obj.FechaCreacion;
                objGrabar.FechaSistema = DateTime.Now;
                objGrabar.EstadoPago = obj.EstadoPago;
                objGrabar.FechaVencimiento = obj.FechaVencimiento;
                objGrabar.IdVendedor = obj.IdVendedor;
                objGrabar.NumeroCotizacion = obj.NumeroCotizacion;
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

        public static BllDocumentos GetById(int id)
        {
            var db = new DataDataContext();
            var objGrabar = new BllDocumentos();
            var select = (from c in db.Documentos where c.ID == id select c);
            if (!@select.Any()) return objGrabar;
            var obj = @select.First();
            objGrabar.TotalIva = obj.TotalIva;
            objGrabar.IdEmpresa = obj.Id_empresa;
            objGrabar.IdCliente = obj.IdCliente;
            objGrabar.IdBodega = obj.Id_Bodega;
            objGrabar.Id = obj.ID;
            objGrabar.IdTipoMovimiento = obj.IdTipoMovimiento;
            objGrabar.DiasValidez = obj.DiasValidez.Value;
            objGrabar.TotalSub = obj.TotalSub;
            objGrabar.Total_Descuento = obj.Total_Descuento;
            objGrabar.Total = obj.Total;
            objGrabar.NotasInternas = obj.NotasInternas;
            objGrabar.Notas = obj.Notas;
            objGrabar.IdUsuario = obj.IdUsuario;
            objGrabar.IdDocumentoAnterior = obj.IdDocumentoAnterior.Value;
            objGrabar.IdEstadoDocumento = obj.EstadoDocumento;
            objGrabar.IdFormaPago = obj.IdFormaPago;
            objGrabar.FechaCreacion = obj.FechaCreacion;
            objGrabar.FechaSistema = obj.FechaSistema;
            objGrabar.Cliente = obj.Personas.Nombre + obj.Personas.Apellidos;
            objGrabar.EstadoDocumento = obj.EstadoDocumento1.Descripcion;
            objGrabar.FormaPago = obj.FomaDePago.Descripcion;
            objGrabar.TipoMovimiento = obj.TipoMovimiento.Descripcion;
            objGrabar.Usuario = obj.User.Nombres;
            objGrabar.EstadoPago = obj.EstadoPago;
            objGrabar.FechaVencimiento = obj.FechaVencimiento;
            objGrabar.IdVendedor = obj.IdVendedor;
            objGrabar.NumeroCotizacion = obj.NumeroCotizacion;
            return objGrabar;
        }

        public static List<BllDocumentos> ToList()
        {
            var db = new DataDataContext();
           
            var list = new List<BllDocumentos>();
            var select = (from c in db.Documentos select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllDocumentos();
                objGrabar.TotalIva = obj.TotalIva;
                objGrabar.Id = obj.ID;
                objGrabar.IdTipoMovimiento = obj.IdTipoMovimiento;
                objGrabar.IdCliente = obj.IdCliente;
                objGrabar.IdBodega = obj.Id_Bodega;
                objGrabar.IdTipoMovimiento = obj.IdTipoMovimiento;
                objGrabar.IdTipoMovimiento = obj.IdTipoMovimiento;
                objGrabar.DiasValidez = obj.DiasValidez.Value;
                objGrabar.TotalSub = obj.TotalSub;
                objGrabar.Total_Descuento = obj.Total_Descuento;
                objGrabar.Total = obj.Total;
                objGrabar.NotasInternas = obj.NotasInternas;
                objGrabar.Notas = obj.Notas;
                objGrabar.IdUsuario = obj.IdUsuario;
                objGrabar.IdDocumentoAnterior = obj.IdDocumentoAnterior.Value;
                objGrabar.IdEstadoDocumento = obj.EstadoDocumento;
                objGrabar.IdFormaPago = obj.IdFormaPago;
                objGrabar.FechaCreacion = obj.FechaCreacion;
                objGrabar.FechaSistema = obj.FechaSistema;
                objGrabar.Cliente = obj.Personas.Nombre + obj.Personas.Apellidos;
                objGrabar.EstadoDocumento = obj.EstadoDocumento1.Descripcion;
                objGrabar.FormaPago = obj.FomaDePago.Descripcion;
                objGrabar.TipoMovimiento = obj.TipoMovimiento.Descripcion;
                objGrabar.Usuario = obj.User.Nombres;
                objGrabar.EstadoPago = obj.EstadoPago;
                objGrabar.FechaVencimiento = obj.FechaVencimiento;
                objGrabar.IdVendedor = obj.IdVendedor;
                objGrabar.NumeroCotizacion = obj.NumeroCotizacion;
                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BllDocumentos> ToList(string something)
        {
            var db = new DataDataContext();
            
            var list = new List<BllDocumentos>();
            var @select = (from c in db.Documentos
                          where c.ID.ToString().Contains(something)
                              || c.IdCliente.ToString().Contains(something)
                          select c);

            foreach (var obj in @select)
            {
                var objGrabar = new BllDocumentos();
                objGrabar.TotalIva = obj.TotalIva;
                objGrabar.Id = obj.ID;
                objGrabar.IdTipoMovimiento = obj.IdTipoMovimiento;
                objGrabar.IdCliente = obj.IdCliente;
                objGrabar.IdBodega = obj.Id_Bodega;
                objGrabar.IdTipoMovimiento = obj.IdTipoMovimiento;
                objGrabar.IdTipoMovimiento = obj.IdTipoMovimiento;
                objGrabar.DiasValidez = obj.DiasValidez.Value;
                objGrabar.TotalSub = obj.TotalSub;
                objGrabar.Total_Descuento = obj.Total_Descuento;
                objGrabar.Total = obj.Total;
                objGrabar.NotasInternas = obj.NotasInternas;
                objGrabar.Notas = obj.Notas;
                objGrabar.IdUsuario = obj.IdUsuario;
                objGrabar.IdDocumentoAnterior = obj.IdDocumentoAnterior.Value;
                objGrabar.IdEstadoDocumento = obj.EstadoDocumento;
                objGrabar.IdFormaPago = obj.IdFormaPago;
                objGrabar.FechaCreacion = obj.FechaCreacion;
                objGrabar.FechaSistema = obj.FechaSistema;
                objGrabar.Cliente = obj.Personas.Nombre + obj.Personas.Apellidos;
                objGrabar.EstadoDocumento = obj.EstadoDocumento1.Descripcion;
                objGrabar.FormaPago = obj.FomaDePago.Descripcion;
                objGrabar.TipoMovimiento = obj.TipoMovimiento.Descripcion;
                objGrabar.Usuario = obj.User.Nombres;
                objGrabar.EstadoPago = obj.EstadoPago;
                objGrabar.FechaVencimiento = obj.FechaVencimiento;
                objGrabar.IdVendedor = obj.IdVendedor;
                objGrabar.NumeroCotizacion = obj.NumeroCotizacion;
                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BllDocumentos> ToListCreditos()
        {
            var db = new DataDataContext();

            var list = new List<BllDocumentos>();
            var @select = (from c in db.Documentos
                           where c.FomaDePago.Credito==true && c.EstadoPago!="PA" && c.TipoMovimiento.IdSw ==3
                           select c);

            foreach (var obj in @select)
            {
                var objGrabar = new BllDocumentos();
                objGrabar.TotalIva = obj.TotalIva;
                objGrabar.Id = obj.ID;
                objGrabar.IdTipoMovimiento = obj.IdTipoMovimiento;
                objGrabar.IdCliente = obj.IdCliente;
                objGrabar.IdBodega = obj.Id_Bodega;
                objGrabar.IdTipoMovimiento = obj.IdTipoMovimiento;
                objGrabar.IdTipoMovimiento = obj.IdTipoMovimiento;
                objGrabar.DiasValidez = obj.DiasValidez.Value;
                objGrabar.TotalSub = obj.TotalSub;
                objGrabar.Total_Descuento = obj.Total_Descuento;
                objGrabar.Total = obj.Total;
                objGrabar.NotasInternas = obj.NotasInternas;
                objGrabar.Notas = obj.Notas;
                objGrabar.IdUsuario = obj.IdUsuario;
                objGrabar.IdDocumentoAnterior = obj.IdDocumentoAnterior.Value;
                objGrabar.IdEstadoDocumento = obj.EstadoDocumento;
                objGrabar.IdFormaPago = obj.IdFormaPago;
                objGrabar.FechaCreacion = obj.FechaCreacion;
                objGrabar.FechaSistema = obj.FechaSistema;
                objGrabar.Cliente = obj.Personas.Nombre + obj.Personas.Apellidos;
                objGrabar.EstadoDocumento = obj.EstadoDocumento1.Descripcion;
                objGrabar.FormaPago = obj.FomaDePago.Descripcion;
                objGrabar.TipoMovimiento = obj.TipoMovimiento.Descripcion;
                objGrabar.Usuario = obj.User.Nombres;
                objGrabar.EstadoPago = obj.EstadoPago;
                objGrabar.FechaVencimiento = obj.FechaVencimiento;
                objGrabar.IdVendedor = obj.IdVendedor;
                objGrabar.NumeroCotizacion = obj.NumeroCotizacion;
                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BllDocumentos> ToListCreditos(string something)
        {
            var db = new DataDataContext();

            var list = new List<BllDocumentos>();
            var @select = (from c in db.Documentos
                           where c.FomaDePago.Credito == true && c.EstadoPago != "PA" && c.TipoMovimiento.IdSw == 3 
                           &&( c.ID.ToString().Contains(something) || c.Personas.NroDocumento.Contains(something) )
                           select c);

            foreach (var obj in @select)
            {
                var objGrabar = new BllDocumentos();
                objGrabar.TotalIva = obj.TotalIva;
                objGrabar.Id = obj.ID;
                objGrabar.IdTipoMovimiento = obj.IdTipoMovimiento;
                objGrabar.IdCliente = obj.IdCliente;
                objGrabar.IdBodega = obj.Id_Bodega;
                objGrabar.IdTipoMovimiento = obj.IdTipoMovimiento;
                objGrabar.IdTipoMovimiento = obj.IdTipoMovimiento;
                objGrabar.DiasValidez = obj.DiasValidez.Value;
                objGrabar.TotalSub = obj.TotalSub;
                objGrabar.Total_Descuento = obj.Total_Descuento;
                objGrabar.Total = obj.Total;
                objGrabar.NotasInternas = obj.NotasInternas;
                objGrabar.Notas = obj.Notas;
                objGrabar.IdUsuario = obj.IdUsuario;
                objGrabar.IdDocumentoAnterior = obj.IdDocumentoAnterior.Value;
                objGrabar.IdEstadoDocumento = obj.EstadoDocumento;
                objGrabar.IdFormaPago = obj.IdFormaPago;
                objGrabar.FechaCreacion = obj.FechaCreacion;
                objGrabar.FechaSistema = obj.FechaSistema;
                objGrabar.Cliente = obj.Personas.Nombre + obj.Personas.Apellidos;
                objGrabar.EstadoDocumento = obj.EstadoDocumento1.Descripcion;
                objGrabar.FormaPago = obj.FomaDePago.Descripcion;
                objGrabar.TipoMovimiento = obj.TipoMovimiento.Descripcion;
                objGrabar.Usuario = obj.User.Nombres;
                objGrabar.EstadoPago = obj.EstadoPago;
                objGrabar.FechaVencimiento = obj.FechaVencimiento;
                objGrabar.IdVendedor = obj.IdVendedor;
                objGrabar.NumeroCotizacion = obj.NumeroCotizacion;
                list.Add(objGrabar);
            }

            return list;
        }

        public static List<BllDocumentos> ToListPP()
        {
            var db = new DataDataContext();

            var list = new List<BllDocumentos>();
            var @select = (from c in db.Documentos
                           where  c.EstadoPago != "PA" && (c.TipoMovimiento.IdSw == 3)
                           select c);

            foreach (var obj in @select)
            {
                var objGrabar = new BllDocumentos();
                objGrabar.TotalIva = obj.TotalIva;
                objGrabar.Id = obj.ID;
                objGrabar.IdTipoMovimiento = obj.IdTipoMovimiento;
                objGrabar.IdCliente = obj.IdCliente;
                objGrabar.IdBodega = obj.Id_Bodega;
                objGrabar.IdTipoMovimiento = obj.IdTipoMovimiento;
                objGrabar.IdTipoMovimiento = obj.IdTipoMovimiento;
                objGrabar.DiasValidez = obj.DiasValidez.Value;
                objGrabar.TotalSub = obj.TotalSub;
                objGrabar.Total_Descuento = obj.Total_Descuento;
                objGrabar.Total = obj.Total;
                objGrabar.NotasInternas = obj.NotasInternas;
                objGrabar.Notas = obj.Notas;
                objGrabar.IdUsuario = obj.IdUsuario;
                objGrabar.IdDocumentoAnterior = obj.IdDocumentoAnterior.Value;
                objGrabar.IdEstadoDocumento = obj.EstadoDocumento;
                objGrabar.IdFormaPago = obj.IdFormaPago;
                objGrabar.FechaCreacion = obj.FechaCreacion;
                objGrabar.FechaSistema = obj.FechaSistema;
                objGrabar.Cliente = obj.Personas.Nombre + obj.Personas.Apellidos;
                objGrabar.EstadoDocumento = obj.EstadoDocumento1.Descripcion;
                objGrabar.FormaPago = obj.FomaDePago.Descripcion;
                objGrabar.TipoMovimiento = obj.TipoMovimiento.Descripcion;
                objGrabar.Usuario = obj.User.Nombres;
                objGrabar.EstadoPago = obj.EstadoPago;
                objGrabar.FechaVencimiento = obj.FechaVencimiento;
                objGrabar.IdVendedor = obj.IdVendedor;
                objGrabar.NumeroCotizacion = obj.NumeroCotizacion;
                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BllDocumentos> ToListBySw(int sw)
        {
            var db = new DataDataContext();

            var list = new List<BllDocumentos>();
            var select = (from c in db.Documentos where c.TipoMovimiento.Sw.ID == sw  select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllDocumentos();
                objGrabar.TotalIva = obj.TotalIva;
                objGrabar.Id = obj.ID;
                objGrabar.IdTipoMovimiento = obj.IdTipoMovimiento;
                objGrabar.IdCliente = obj.IdCliente;
                objGrabar.IdBodega = obj.Id_Bodega;
                objGrabar.IdTipoMovimiento = obj.IdTipoMovimiento;
                objGrabar.IdTipoMovimiento = obj.IdTipoMovimiento;
                objGrabar.DiasValidez = obj.DiasValidez.Value;
                objGrabar.TotalSub = obj.TotalSub;
                objGrabar.Total_Descuento = obj.Total_Descuento;
                objGrabar.Total = obj.Total;
                objGrabar.NotasInternas = obj.NotasInternas;
                objGrabar.Notas = obj.Notas;
                objGrabar.IdUsuario = obj.IdUsuario;
                objGrabar.IdDocumentoAnterior = obj.IdDocumentoAnterior.Value;
                objGrabar.IdEstadoDocumento = obj.EstadoDocumento;
                objGrabar.IdFormaPago = obj.IdFormaPago;
                objGrabar.FechaCreacion = obj.FechaCreacion;
                objGrabar.FechaSistema = obj.FechaSistema;
                objGrabar.Cliente = obj.Personas.Nombre + obj.Personas.Apellidos;
                objGrabar.EstadoDocumento = obj.EstadoDocumento1.Descripcion;
                objGrabar.FormaPago = obj.FomaDePago.Descripcion;
                objGrabar.TipoMovimiento = obj.TipoMovimiento.Descripcion;
                objGrabar.Usuario = obj.User.Nombres;
                objGrabar.EstadoPago = obj.EstadoPago;
                objGrabar.FechaVencimiento = obj.FechaVencimiento;
                objGrabar.IdVendedor = obj.IdVendedor;
                objGrabar.NumeroCotizacion = obj.NumeroCotizacion;
                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BllDocumentos> ToListBySw(int sw,string NIT)
        {
            var db = new DataDataContext();

            var list = new List<BllDocumentos>();
            var select = (from c in db.Documentos where c.TipoMovimiento.Sw.ID == sw  && c.Personas.NroDocumento==NIT select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllDocumentos();
                objGrabar.TotalIva = obj.TotalIva;
                objGrabar.Id = obj.ID;
                objGrabar.IdTipoMovimiento = obj.IdTipoMovimiento;
                objGrabar.IdCliente = obj.IdCliente;
                objGrabar.IdBodega = obj.Id_Bodega;
                objGrabar.IdTipoMovimiento = obj.IdTipoMovimiento;
                objGrabar.IdTipoMovimiento = obj.IdTipoMovimiento;
                objGrabar.DiasValidez = obj.DiasValidez.Value;
                objGrabar.TotalSub = obj.TotalSub;
                objGrabar.Total_Descuento = obj.Total_Descuento;
                objGrabar.Total = obj.Total;
                objGrabar.NotasInternas = obj.NotasInternas;
                objGrabar.Notas = obj.Notas;
                objGrabar.IdUsuario = obj.IdUsuario;
                objGrabar.IdDocumentoAnterior = obj.IdDocumentoAnterior.Value;
                objGrabar.IdEstadoDocumento = obj.EstadoDocumento;
                objGrabar.IdFormaPago = obj.IdFormaPago;
                objGrabar.FechaCreacion = obj.FechaCreacion;
                objGrabar.FechaSistema = obj.FechaSistema;
                objGrabar.Cliente = obj.Personas.Nombre + obj.Personas.Apellidos;
                objGrabar.EstadoDocumento = obj.EstadoDocumento1.Descripcion;
                objGrabar.FormaPago = obj.FomaDePago.Descripcion;
                objGrabar.TipoMovimiento = obj.TipoMovimiento.Descripcion;
                objGrabar.Usuario = obj.User.Nombres;
                objGrabar.EstadoPago = obj.EstadoPago;
                objGrabar.FechaVencimiento = obj.FechaVencimiento;
                objGrabar.IdVendedor = obj.IdVendedor;
                objGrabar.NumeroCotizacion = obj.NumeroCotizacion;
                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BllDocumentos> ToListPP(int sw)
        {
            var db = new DataDataContext();

            var list = new List<BllDocumentos>();
            var select = (from c in db.Documentos where c.TipoMovimiento.Sw.ID == sw && c.EstadoDocumento1.ID == 1002 && c.EstadoPago=="PP" select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllDocumentos();
                objGrabar.TotalIva = obj.TotalIva;
                objGrabar.Id = obj.ID;
                objGrabar.IdTipoMovimiento = obj.IdTipoMovimiento;
                objGrabar.IdCliente = obj.IdCliente;
                objGrabar.IdBodega = obj.Id_Bodega;
                objGrabar.IdTipoMovimiento = obj.IdTipoMovimiento;
                objGrabar.IdTipoMovimiento = obj.IdTipoMovimiento;
                objGrabar.DiasValidez = obj.DiasValidez.Value;
                objGrabar.TotalSub = obj.TotalSub;
                objGrabar.Total_Descuento = obj.Total_Descuento;
                objGrabar.Total = obj.Total;
                objGrabar.NotasInternas = obj.NotasInternas;
                objGrabar.Notas = obj.Notas;
                objGrabar.IdUsuario = obj.IdUsuario;
                objGrabar.IdDocumentoAnterior = obj.IdDocumentoAnterior.Value;
                objGrabar.IdEstadoDocumento = obj.EstadoDocumento;
                objGrabar.IdFormaPago = obj.IdFormaPago;
                objGrabar.FechaCreacion = obj.FechaCreacion;
                objGrabar.FechaSistema = obj.FechaSistema;
                objGrabar.Cliente = obj.Personas.Nombre + obj.Personas.Apellidos;
                objGrabar.EstadoDocumento = obj.EstadoDocumento1.Descripcion;
                objGrabar.FormaPago = obj.FomaDePago.Descripcion;
                objGrabar.TipoMovimiento = obj.TipoMovimiento.Descripcion;
                objGrabar.Usuario = obj.User.Nombres;
                objGrabar.EstadoPago = obj.EstadoPago;
                objGrabar.FechaVencimiento = obj.FechaVencimiento;
                objGrabar.IdVendedor = obj.IdVendedor;
                objGrabar.NumeroCotizacion = obj.NumeroCotizacion;
                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BllDocumentos> ToListPP(int sw, string NIT)
        {
            var db = new DataDataContext();

            var list = new List<BllDocumentos>();
            var select = (from c in db.Documentos where c.Personas.NroDocumento==NIT && c.TipoMovimiento.Sw.ID == sw  && c.EstadoPago != "PA" select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllDocumentos();
                objGrabar.TotalIva = obj.TotalIva;
                objGrabar.Id = obj.ID;
                objGrabar.IdTipoMovimiento = obj.IdTipoMovimiento;
                objGrabar.IdCliente = obj.IdCliente;
                objGrabar.IdBodega = obj.Id_Bodega;
                objGrabar.IdTipoMovimiento = obj.IdTipoMovimiento;
                objGrabar.IdTipoMovimiento = obj.IdTipoMovimiento;
                objGrabar.DiasValidez = obj.DiasValidez.Value;
                objGrabar.TotalSub = obj.TotalSub;
                objGrabar.Total_Descuento = obj.Total_Descuento;
                objGrabar.Total = obj.Total;
                objGrabar.NotasInternas = obj.NotasInternas;
                objGrabar.Notas = obj.Notas;
                objGrabar.IdUsuario = obj.IdUsuario;
                objGrabar.IdDocumentoAnterior = obj.IdDocumentoAnterior.Value;
                objGrabar.IdEstadoDocumento = obj.EstadoDocumento;
                objGrabar.IdFormaPago = obj.IdFormaPago;
                objGrabar.FechaCreacion = obj.FechaCreacion;
                objGrabar.FechaSistema = obj.FechaSistema;
                objGrabar.Cliente = obj.Personas.Nombre + obj.Personas.Apellidos;
                objGrabar.EstadoDocumento = obj.EstadoDocumento1.Descripcion;
                objGrabar.FormaPago = obj.FomaDePago.Descripcion;
                objGrabar.TipoMovimiento = obj.TipoMovimiento.Descripcion;
                objGrabar.Usuario = obj.User.Nombres;
                objGrabar.EstadoPago = obj.EstadoPago;
                objGrabar.FechaVencimiento = obj.FechaVencimiento;
                objGrabar.IdVendedor = obj.IdVendedor;
                objGrabar.NumeroCotizacion = obj.NumeroCotizacion;
                list.Add(objGrabar);
            }

            return list;
        }
        public static bool ExisteDescri(int desc)
        {
            var db = new DataDataContext();
            new Documentos();
            var @select = (from c in db.Documentos where c.IdCliente == desc select c);
            if (@select.Any())
            {
                return true;
            }
            else
            {
                return false;
            }

        }
    }
}
