using System;
using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;

namespace Generals.business.Entities
{
    public class BllItem
    {
        public int Id { get; set; }
        public int IdEmpresa { get; set; }
        public string Codigo { get; set; }
        public string Descripcion { get; set; }
        public decimal Precio { get; set; }
        public int IdSubGrupo { get; set; }
        public int  IdIva { get; set; }
        public int MaxDescuento { get; set; }
        public int CantidadMinima { get; set; }
        public int CantidadMaxima { get; set; }
        public int Anulado { get; set; }
        public int NumeroDecimales { get; set; }
        public string Notas { get; set; }
        public int IdColor { get; set; }
        public string Modelo { get; set; }
        public string NroSerie { get; set; }
        public DateTime FechaCreacion { get; set; }
        public string FechaVencimiento { get; set; }
        public int IdTalla { get; set; }
        public int StockActual { get; set; }
        public string CalificacionABC { get; set; }
        public string Unidad { get; set; }
        public int IdMarca { get; set; }
        public bool Estado { get; set; }
        public int IdUsuario { get; set; }
        public bool ManejaStock { get; set; }
        public int DiasReposicion { get; set; }
        public List<string> Url { get; set; }
        public string UrlItem { get; set; }
        public string DescSubgrupo { get; set; }
        public decimal? PorcentajeIva { get; set; }
        public string Talla { get; set; }

        public string Marca { get; set; }

        public string Color{ get; set; }
        public string Iva { get; set; }
        public int CantidadExistente { get; set; }
        public Decimal PrecioCompra { get; set; }
        public int? IdProveedor { get; set; }
        public decimal? ComisionPorVenta { get; set; }
        public string ReferenciaProveedor { get; set; }
        public int GrupoItem { get; set; }
        public static int Add(BllItem obj)
        {
            var db = new DataDataContext();
            var tp = new Item();
            {
                tp.IdEmpresa = obj.IdEmpresa;
                tp.Codigo = obj.Codigo;
                tp.Descripcion = obj.Descripcion;
                tp.Precio = obj.Precio;
                tp.Subgrupo = obj.IdSubGrupo;
                tp.IdIva = obj.IdIva;
                tp.MaxDescuento = obj.MaxDescuento;
                tp.CantidadMinima = obj.CantidadMinima;
                tp.CantidadMaxima = obj.CantidadMaxima;
                tp.Anulado = obj.Anulado;
                tp.NumeroDecimales = obj.NumeroDecimales;
                tp.Notas = obj.Notas;
                tp.IdColor = obj.IdColor;
                tp.Modelo = obj.Modelo;
                tp.IdMarca = obj.IdColor;              
                tp.NroSerie = obj.NroSerie;
                tp.IdUsuario = obj.IdUsuario;
                tp.FechaCreacion = DateTime.Now;
                tp.FechaVencimiento = obj.FechaVencimiento;
                tp.ManejaStock = obj.ManejaStock;
                tp.IdTalla = obj.IdTalla;
                tp.StockActual = obj.StockActual;
                tp.DiasReposicion = obj.DiasReposicion;
                tp.CalificacionABC = obj.CalificacionABC;
                tp.Unidad = obj.Unidad;
                tp.IdMarca = obj.IdMarca;
                tp.Estado = obj.Estado;
                tp.PrecioCompra=obj.PrecioCompra;
                tp.CantidadExistente=obj.CantidadExistente;
                tp.IdProveedor=obj.IdProveedor;
                tp.ComisionPorVenta=obj.ComisionPorVenta;
                tp.ReferenciaProveedor=obj.ReferenciaProveedor;
            };

            db.Item.InsertOnSubmit(tp);
            db.SubmitChanges();
            var firstOrDefault = db.Item.FirstOrDefault(m => m.ID == db.Item.Max(pl => pl.ID));
            if (firstOrDefault != null)
                tp.ID = firstOrDefault.ID;
            return tp.ID;
        }

        public static int Update(BllItem obj)
        {
            var db = new DataDataContext();
            var @select = (from c in db.Item where c.ID == obj.Id select c);

            foreach (var tp in @select)
            {
                tp.Descripcion = obj.Descripcion;
                tp.Precio = obj.Precio;
                tp.Subgrupo = obj.IdSubGrupo;
                tp.IdIva = obj.IdIva;
                tp.MaxDescuento = obj.MaxDescuento;
                tp.CantidadMinima = obj.CantidadMinima;
                tp.CantidadMaxima = obj.CantidadMaxima;
                tp.Anulado = obj.Anulado;
                tp.NumeroDecimales = obj.NumeroDecimales;
                tp.Notas = obj.Notas;
                tp.IdColor = obj.IdColor;
                tp.Modelo = obj.Modelo;
                tp.IdMarca = obj.IdColor;
                tp.NroSerie = obj.NroSerie;
                tp.IdUsuario = obj.IdUsuario;
                tp.FechaCreacion = obj.FechaCreacion;
                tp.FechaVencimiento = obj.FechaVencimiento;
                tp.ManejaStock = obj.ManejaStock;
                tp.IdTalla = obj.IdTalla;
                tp.StockActual = obj.StockActual;
                tp.DiasReposicion = obj.DiasReposicion;
                tp.CalificacionABC = obj.CalificacionABC;
                tp.Unidad = obj.Unidad;
                tp.IdMarca = obj.IdMarca;
                tp.Estado = obj.Estado;
                tp.PrecioCompra = obj.PrecioCompra;
                tp.CantidadExistente = obj.CantidadExistente;
                tp.IdProveedor = obj.IdProveedor;
                tp.ComisionPorVenta = obj.ComisionPorVenta;
                tp.ReferenciaProveedor = obj.ReferenciaProveedor;
            }
            db.SubmitChanges();

            return 1;
        }

        public static BllItem GetById(int id)
        {
            var db = new DataDataContext();
            var tp = new BllItem();
            var select = (from c in db.Item where c.ID == id select c);
            if (select.Count()>0)
            {
                var obj = @select.First();
                tp.Id = obj.ID;
                tp.IdEmpresa = obj.IdEmpresa;
                tp.Codigo = obj.Codigo;
                tp.Descripcion = obj.Descripcion;
                tp.Precio = obj.Precio;
                tp.IdSubGrupo = obj.Subgrupo;
                tp.IdIva = obj.IdIva;
                tp.MaxDescuento = obj.MaxDescuento;
                tp.CantidadMinima = obj.CantidadMinima.Value;
                tp.CantidadMaxima = obj.CantidadMaxima.Value;
                tp.Anulado = obj.Anulado;
                tp.NumeroDecimales = obj.NumeroDecimales;
                tp.Notas = obj.Notas;
                tp.IdColor = obj.IdColor;
                tp.Modelo = obj.Modelo;
                tp.IdMarca = obj.IdColor;
                tp.NroSerie = obj.NroSerie;
                tp.IdUsuario = obj.IdUsuario;
                tp.FechaCreacion = obj.FechaCreacion.Value;
                tp.FechaVencimiento = obj.FechaVencimiento;
                tp.ManejaStock = obj.ManejaStock;
                tp.IdTalla = obj.IdTalla;
                tp.StockActual = obj.StockActual.Value;
                tp.DiasReposicion = obj.DiasReposicion.Value;
                tp.CalificacionABC = obj.CalificacionABC;
                tp.Unidad = obj.Unidad;
                tp.IdMarca = obj.IdMarca.Value;
                tp.Estado = obj.Estado;
                tp.PorcentajeIva = obj.Iva.Porcentaje;
                tp.PrecioCompra = obj.PrecioCompra;
                tp.CantidadExistente = obj.CantidadExistente;
                tp.IdProveedor = obj.IdProveedor;
                tp.ComisionPorVenta = obj.ComisionPorVenta;
                tp.ReferenciaProveedor = obj.ReferenciaProveedor;
                tp.DescSubgrupo=obj.SubGrupo1.Grupo.Descripcion;
              //  tp.url=obj.FotosItems.ToList();
                //tp.UrlItem=obj.FotosItems.FirstOrDefault().Url;
                tp.GrupoItem=obj.SubGrupo1.Grupo.ID;
                tp.Talla=obj.Talla.Descripcion;
            }
            //if (!select.Any()) return tp;
            
            return tp;
        }
        public static BllItem GetByCodigo(string codigo)
        {
            var db = new DataDataContext();
            var tp = new BllItem();
            var select = (from c in db.Item where c.Codigo == codigo select c);
            if (!@select.Any()) return tp;
            var obj = @select.First();
            tp.Id = obj.ID;
            tp.IdEmpresa = obj.IdEmpresa;
            tp.Codigo = obj.Codigo;
            tp.Descripcion = obj.Descripcion;
            tp.Precio = obj.Precio;
            tp.IdSubGrupo = obj.Subgrupo;
            tp.IdIva = obj.IdIva;
            tp.MaxDescuento = obj.MaxDescuento;
            tp.CantidadMinima = obj.CantidadMinima.Value;
            tp.CantidadMaxima = obj.CantidadMaxima.Value;
            tp.Anulado = obj.Anulado;
            tp.NumeroDecimales = obj.NumeroDecimales;
            tp.Notas = obj.Notas;
            tp.IdColor = obj.IdColor;
            tp.Modelo = obj.Modelo;
            tp.IdMarca = obj.IdColor;
            tp.NroSerie = obj.NroSerie;
            tp.IdUsuario = obj.IdUsuario;
            tp.FechaCreacion = obj.FechaCreacion.Value;
            tp.FechaVencimiento = obj.FechaVencimiento;
            tp.ManejaStock = obj.ManejaStock;
            tp.IdTalla = obj.IdTalla;
            tp.StockActual = obj.StockActual.Value;
            tp.DiasReposicion = obj.DiasReposicion.Value;
            tp.CalificacionABC = obj.CalificacionABC;
            tp.Unidad = obj.Unidad;
            tp.IdMarca = obj.IdMarca.Value;
            tp.Estado = obj.Estado;
            tp.PrecioCompra = obj.PrecioCompra;
            tp.CantidadExistente = obj.CantidadExistente;
            tp.PorcentajeIva = obj.Iva.Porcentaje;
            tp.IdProveedor = obj.IdProveedor;
            tp.ComisionPorVenta = obj.ComisionPorVenta;
            tp.ReferenciaProveedor = obj.ReferenciaProveedor;
            tp.Talla = obj.Talla.Descripcion;
            return tp;
        }

        public static List<BllItem> ToList()
        {
            var db = new DataDataContext();
           
            var list = new List<BllItem>();
            var select = (from c in db.Item select c);

            foreach (var obj in select)
            {
                var tp = new BllItem();
                tp.Id = obj.ID;
                tp.IdEmpresa = obj.IdEmpresa;
                tp.Codigo = obj.Codigo;
                tp.Descripcion = obj.Descripcion;
                tp.Precio = obj.Precio;
                tp.IdSubGrupo = obj.Subgrupo;
                tp.IdIva = obj.IdIva;
                tp.MaxDescuento = obj.MaxDescuento;
                tp.CantidadMinima = obj.CantidadMinima.Value;
                tp.CantidadMaxima = obj.CantidadMaxima.Value;
                tp.Anulado = obj.Anulado;
                tp.NumeroDecimales = obj.NumeroDecimales;
                tp.Notas = obj.Notas;
                tp.IdColor = obj.IdColor;
                tp.Modelo = obj.Modelo;
                tp.IdMarca = obj.IdColor;
                tp.NroSerie = obj.NroSerie;
                tp.IdUsuario = obj.IdUsuario;
                tp.FechaCreacion = obj.FechaCreacion.Value;
                tp.FechaVencimiento = obj.FechaVencimiento;
                tp.ManejaStock = obj.ManejaStock;
                tp.IdTalla = obj.IdTalla;
                tp.StockActual = obj.StockActual.Value;
                tp.DiasReposicion = obj.DiasReposicion.Value;
                tp.CalificacionABC = obj.CalificacionABC;
                tp.Unidad = obj.Unidad;
                tp.IdMarca = obj.IdMarca.Value;
                tp.Estado = obj.Estado;
                tp.PrecioCompra = obj.PrecioCompra;
                tp.CantidadExistente = obj.CantidadExistente;
                tp.PorcentajeIva = obj.Iva.Porcentaje;
                tp.DescSubgrupo=obj.SubGrupo1.Descripcion;
                tp.IdProveedor = obj.IdProveedor;
                tp.ComisionPorVenta = obj.ComisionPorVenta;
                tp.Talla = obj.Talla.Descripcion;
                tp.ReferenciaProveedor = obj.ReferenciaProveedor;
                list.Add(tp);
            }

            return list;
        }
        public static List<BllItem> ToList(string something)
        {
            var db = new DataDataContext();
           
            var list = new List<BllItem>();
            var @select = (from c in db.Item
                          where c.ID.ToString().Contains(something)
                              || c.Codigo.Contains(something) || c.Descripcion.Contains(something)
                          select c);

            foreach (var obj in @select)
            {
                var tp = new BllItem();
                tp.Id = obj.ID;
                tp.IdEmpresa = obj.IdEmpresa;
                tp.Codigo = obj.Codigo;
                tp.Descripcion = obj.Descripcion;
                tp.Precio = obj.Precio;
                tp.IdSubGrupo = obj.Subgrupo;
                tp.IdIva = obj.IdIva;
                tp.MaxDescuento = obj.MaxDescuento;
                tp.CantidadMinima = obj.CantidadMinima.Value;
                tp.CantidadMaxima = obj.CantidadMaxima.Value;
                tp.Anulado = obj.Anulado;
                tp.NumeroDecimales = obj.NumeroDecimales;
                tp.Notas = obj.Notas;
                tp.IdColor = obj.IdColor;
                tp.Modelo = obj.Modelo;
                tp.IdMarca = obj.IdColor;
                tp.NroSerie = obj.NroSerie;
                tp.IdUsuario = obj.IdUsuario;
                tp.FechaCreacion = obj.FechaCreacion.Value;
                tp.FechaVencimiento = obj.FechaVencimiento;
                tp.ManejaStock = obj.ManejaStock;
                tp.IdTalla = obj.IdTalla;
                tp.StockActual = obj.StockActual.Value;
                tp.DiasReposicion = obj.DiasReposicion.Value;
                tp.CalificacionABC = obj.CalificacionABC;
                tp.Unidad = obj.Unidad;
                tp.IdMarca = obj.IdMarca.Value;
                tp.Estado = obj.Estado;
                tp.PrecioCompra = obj.PrecioCompra;
                tp.CantidadExistente = obj.CantidadExistente;
                tp.PorcentajeIva = obj.Iva.Porcentaje;
                tp.DescSubgrupo = obj.SubGrupo1.Descripcion;
                tp.IdProveedor = obj.IdProveedor;
                tp.ComisionPorVenta = obj.ComisionPorVenta;
                tp.ReferenciaProveedor = obj.ReferenciaProveedor;
                tp.Talla = obj.Talla.Descripcion;
                list.Add(tp);
            }

            return list;
        }
        public static List<BllItem> ToList(string something,int prove)
        {
            var db = new DataDataContext();

            var list = new List<BllItem>();
            var @select = (from c in db.Item
                           where (c.ID.ToString().Contains(something)
                               || c.Codigo.Contains(something) || c.Descripcion.Contains(something)) && c.IdProveedor==prove
                           select c);

            foreach (var obj in @select)
            {
                var tp = new BllItem();
                tp.Id = obj.ID;
                tp.IdEmpresa = obj.IdEmpresa;
                tp.Codigo = obj.Codigo;
                tp.Descripcion = obj.Descripcion;
                tp.Precio = obj.Precio;
                tp.IdSubGrupo = obj.Subgrupo;
                tp.IdIva = obj.IdIva;
                tp.MaxDescuento = obj.MaxDescuento;
                tp.CantidadMinima = obj.CantidadMinima.Value;
                tp.CantidadMaxima = obj.CantidadMaxima.Value;
                tp.Anulado = obj.Anulado;
                tp.NumeroDecimales = obj.NumeroDecimales;
                tp.Notas = obj.Notas;
                tp.IdColor = obj.IdColor;
                tp.Modelo = obj.Modelo;
                tp.IdMarca = obj.IdColor;
                tp.NroSerie = obj.NroSerie;
                tp.IdUsuario = obj.IdUsuario;
                tp.FechaCreacion = obj.FechaCreacion.Value;
                tp.FechaVencimiento = obj.FechaVencimiento;
                tp.ManejaStock = obj.ManejaStock;
                tp.IdTalla = obj.IdTalla;
                tp.StockActual = obj.StockActual.Value;
                tp.DiasReposicion = obj.DiasReposicion.Value;
                tp.CalificacionABC = obj.CalificacionABC;
                tp.Unidad = obj.Unidad;
                tp.IdMarca = obj.IdMarca.Value;
                tp.Estado = obj.Estado;
                tp.PrecioCompra = obj.PrecioCompra;
                tp.CantidadExistente = obj.CantidadExistente;
                tp.PorcentajeIva = obj.Iva.Porcentaje;
                tp.DescSubgrupo = obj.SubGrupo1.Descripcion;
                tp.IdProveedor = obj.IdProveedor;
                tp.ComisionPorVenta = obj.ComisionPorVenta;
                tp.ReferenciaProveedor = obj.ReferenciaProveedor;
                tp.Talla = obj.Talla.Descripcion;
                list.Add(tp);
            }

            return list;
        }
        public static List<BllItem> ToListByProv(int idProv)
        {
            var db = new DataDataContext();

            var list = new List<BllItem>();
            var select = (from c in db.Item where c.IdProveedor==idProv select c );

            foreach (var obj in select)
            {
                var tp = new BllItem();
                tp.Id = obj.ID;
                tp.IdEmpresa = obj.IdEmpresa;
                tp.Codigo = obj.Codigo;
                tp.Descripcion = obj.Descripcion;
                tp.Precio = obj.Precio;
                tp.IdSubGrupo = obj.Subgrupo;
                tp.IdIva = obj.IdIva;
                tp.MaxDescuento = obj.MaxDescuento;
                tp.CantidadMinima = obj.CantidadMinima.Value;
                tp.CantidadMaxima = obj.CantidadMaxima.Value;
                tp.Anulado = obj.Anulado;
                tp.NumeroDecimales = obj.NumeroDecimales;
                tp.Notas = obj.Notas;
                tp.IdColor = obj.IdColor;
                tp.Modelo = obj.Modelo;
                tp.IdMarca = obj.IdColor;
                tp.NroSerie = obj.NroSerie;
                tp.IdUsuario = obj.IdUsuario;
                tp.FechaCreacion = obj.FechaCreacion.Value;
                tp.FechaVencimiento = obj.FechaVencimiento;
                tp.ManejaStock = obj.ManejaStock;
                tp.IdTalla = obj.IdTalla;
                tp.StockActual = obj.StockActual.Value;
                tp.DiasReposicion = obj.DiasReposicion.Value;
                tp.CalificacionABC = obj.CalificacionABC;
                tp.Unidad = obj.Unidad;
                tp.IdMarca = obj.IdMarca.Value;
                tp.Estado = obj.Estado;
                tp.PrecioCompra = obj.PrecioCompra;
                tp.CantidadExistente = obj.CantidadExistente;
                tp.PorcentajeIva = obj.Iva.Porcentaje;
                tp.DescSubgrupo = obj.SubGrupo1.Descripcion;
                tp.IdProveedor = obj.IdProveedor;
                tp.ComisionPorVenta = obj.ComisionPorVenta;
                tp.ReferenciaProveedor = obj.ReferenciaProveedor;
                tp.Talla = obj.Talla.Descripcion;
                list.Add(tp);
            }

            return list;
        }
        public static bool ExisteDescri(string desc)
        {
            var db = new DataDataContext();
            new Item();
            var @select = (from c in db.Item where c.Codigo == desc select c);
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
