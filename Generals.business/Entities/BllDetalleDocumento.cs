using System;
using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;

namespace Generals.business.Entities
{
    public class BllDetalleDocumento
    {
        public int ID { get; set; }
        public int IdDocumento { get; set; }
        public int IdProducto { get; set; }
        public decimal Precio { get; set; }
        public int Cantidad { get; set; }
        public int IvaPorcentaje { get; set; }
        public decimal PrecioCompra { get; set; }
        public int IdBodega { get; set; }
        public int CostoUnidad { get; set; }
        public decimal Descuento { get; set; }
        public decimal Subtotal { get; set; }
        public string Producto { get; set; }
        public string Codigo { get; set; }
        public string Talla { get; set; }
        public decimal CantExistente { get; set; }
        public int DsctoPorcentaje { get; set; }
        public static int Add(BllDetalleDocumento obj)
        {
            var db = new DataDataContext();
            var tp = new DetalleDocumento();
            {
                tp.IdDocumento = obj.IdDocumento;
                tp.IdProducto = obj.IdProducto;
                tp.IdBodega = obj.IdBodega;
                tp.Precio = obj.Precio;
                tp.Descuento = obj.Descuento;
                tp.Cantidad = obj.Cantidad;
                tp.IvaPorcentaje = obj.IvaPorcentaje;
                tp.DsctoPorcentaje=obj.DsctoPorcentaje;
            };

            db.DetalleDocumento.InsertOnSubmit(tp);
            db.SubmitChanges();
            var firstOrDefault = db.DetalleDocumento.FirstOrDefault(m => m.ID == db.DetalleDocumento.Max(pl => pl.ID));
            if (firstOrDefault != null)
                tp.ID = firstOrDefault.ID;
            return tp.ID;
        }

        public static int Update(BllDetalleDocumento obj)
        {
            var db = new DataDataContext();
            
            var @select = (from c in db.DetalleDocumento where c.ID == obj.ID select c);

            foreach (var objGrabar in @select)
            {
                objGrabar.IdDocumento = obj.IdDocumento;
                objGrabar.IdProducto = obj.IdProducto;
                objGrabar.IdBodega = obj.IdBodega;
                objGrabar.Precio = obj.Precio;
                objGrabar.Descuento = obj.Descuento;
                objGrabar.Cantidad = obj.Cantidad;
                objGrabar.IvaPorcentaje = obj.IvaPorcentaje;

                objGrabar.DsctoPorcentaje = obj.DsctoPorcentaje;
            }
            db.SubmitChanges();

            return 1;
        }

        public static BllDetalleDocumento GetById(int id)
        {
            var db = new DataDataContext();
            var objGrabar = new BllDetalleDocumento();
            var select = (from c in db.DetalleDocumento where c.ID == id select c);
            if (!@select.Any()) return objGrabar;
            var obj = @select.First();
            objGrabar.ID = obj.ID;
            objGrabar.IdProducto = obj.IdProducto.Value;
            objGrabar.IdDocumento = obj.IdDocumento.Value;
            objGrabar.Producto =obj.Item.Descripcion;
            objGrabar.IdBodega = obj.IdBodega.Value;
            objGrabar.Precio = obj.Precio.Value;
            objGrabar.Descuento = obj.Descuento.Value;
            objGrabar.Codigo=obj.Item.Codigo;
            objGrabar.Talla=obj.Item.Talla.Descripcion;
            objGrabar.Cantidad = obj.Cantidad.Value;
            objGrabar.IvaPorcentaje = obj.IvaPorcentaje.Value;
            objGrabar.DsctoPorcentaje = obj.DsctoPorcentaje.Value;
            return objGrabar;
        }

        public static List<BllDetalleDocumento> ToList()
        {
            var db = new DataDataContext();
         
            var list = new List<BllDetalleDocumento>();
            var select = (from c in db.DetalleDocumento select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllDetalleDocumento();
                objGrabar.ID = obj.ID;
                objGrabar.IdProducto = obj.IdProducto.Value;
                objGrabar.IdDocumento = obj.IdDocumento.Value;
                objGrabar.Producto = obj.Item.Descripcion;
                objGrabar.IdBodega = obj.IdBodega.Value;
                objGrabar.Precio = obj.Precio.Value;
                objGrabar.Descuento = obj.Descuento.Value;
                objGrabar.Cantidad = obj.Cantidad.Value;
                objGrabar.Codigo = obj.Item.Codigo;
                objGrabar.Talla = obj.Item.Talla.Descripcion;
                objGrabar.IvaPorcentaje = obj.IvaPorcentaje.Value;
                objGrabar.DsctoPorcentaje = obj.DsctoPorcentaje.Value;

                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BllDetalleDocumento> ToListById(int  idDocumento)
        {
            var db = new DataDataContext();

            var list = new List<BllDetalleDocumento>();
            var select = (from c in db.DetalleDocumento where c.IdDocumento==idDocumento select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllDetalleDocumento();
                objGrabar.ID = obj.ID;
                objGrabar.IdProducto = obj.IdProducto.Value;
                objGrabar.IdDocumento = obj.IdDocumento.Value;
                objGrabar.Producto = obj.Item.Descripcion;
                objGrabar.IdBodega = obj.IdBodega.Value;
                objGrabar.Codigo = obj.Item.Codigo;
                objGrabar.Talla = obj.Item.Talla.Descripcion;
                objGrabar.Precio = obj.Precio.Value;
                objGrabar.Descuento = obj.Descuento.Value;
                objGrabar.Cantidad = obj.Cantidad.Value;
                objGrabar.IvaPorcentaje = obj.IvaPorcentaje.Value;
                objGrabar.DsctoPorcentaje = obj.DsctoPorcentaje.Value;

                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BllDetalleDocumento> ToList(string something)
        {
            var db = new DataDataContext();
            
            var list = new List<BllDetalleDocumento>();
            var @select = (from c in db.DetalleDocumento
                          where c.ID.ToString().Contains(something)
                              || c.IdDocumento.ToString().Contains(something)
                          select c);

            foreach (var obj in @select)
            {
                var objGrabar = new BllDetalleDocumento();
                objGrabar.ID = obj.ID;
                objGrabar.IdProducto = obj.IdProducto.Value;
                objGrabar.IdDocumento = obj.IdDocumento.Value;
                objGrabar.Producto = obj.Item.Descripcion;
                objGrabar.IdBodega = obj.IdBodega.Value;
                objGrabar.Precio = obj.Precio.Value;
                objGrabar.Codigo = obj.Item.Codigo;
                objGrabar.Talla = obj.Item.Talla.Descripcion;
                objGrabar.Descuento = obj.Descuento.Value;
                objGrabar.Cantidad = obj.Cantidad.Value;
                objGrabar.IvaPorcentaje = obj.IvaPorcentaje.Value;
                objGrabar.DsctoPorcentaje = obj.DsctoPorcentaje.Value;

                list.Add(objGrabar);
            }

            return list;
        }
        public static bool ExisteDescri(int desc)
        {
            var db = new DataDataContext();
            new DetalleDocumento();
            var @select = (from c in db.DetalleDocumento where c.IdDocumento == desc select c);
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
