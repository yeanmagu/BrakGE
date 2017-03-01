using System;
using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;

namespace Generals.business.Entities
{
    public class BllTipoMovimiento
    {
        public int Id { get; set; }
        public string Descripcion { get; set; }
        public int IdBodega { get; set; }
        public string Notas { get; set; }
        public int IdSw { get; set; }
        public int IdUsuario { get; set; }
        public DateTime FechaCreacion { get; set; }
        public bool ExcentoDeIva { get; set; }
        public string DescBodega { get; set; }
        public string DescSw { get; set; }
        public string DescUsuario { get; set; }

        public static int Add(BllTipoMovimiento obj)
        {
            var db = new DataDataContext();
            var tp = new TipoMovimiento
            {
                Descripcion = obj.Descripcion,
                IdBodega = obj.IdBodega,
                Notas=obj.Notas,
                IdSw = obj.IdSw,
                FechaCreacion = DateTime.Now,
                IdUsuario = obj.IdUsuario,
                ExcentoDeIva = obj.ExcentoDeIva
            };

            db.TipoMovimientos.InsertOnSubmit(tp);
            db.SubmitChanges();
            var firstOrDefault = db.TipoMovimientos.FirstOrDefault(m => m.ID == db.TipoMovimientos.Max(pl => pl.ID));
            if (firstOrDefault != null)
                tp.ID = firstOrDefault.ID;
            return tp.ID;
        }

        public static int Update(BllTipoMovimiento obj)
        {
            var db = new DataDataContext();

            var @select = (from c in db.TipoMovimientos where c.ID == obj.Id select c);

            foreach (var objGrabar in @select)
            {

                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.IdBodega = obj.IdBodega;
                objGrabar.Notas = obj.Notas;
                objGrabar.IdSw = obj.IdSw;
                objGrabar.FechaCreacion = DateTime.Now;
                objGrabar.IdUsuario = obj.IdUsuario;
                objGrabar.ExcentoDeIva = obj.ExcentoDeIva;
                
            }
            db.SubmitChanges();

            return 1;
        }

        public static BllTipoMovimiento GetById(int id)
        {
            var db = new DataDataContext();
            var objGrabar = new BllTipoMovimiento();
            var select = (from c in db.TipoMovimientos where c.ID == id select c);
            if (!@select.Any()) return objGrabar;
            var obj = @select.First();
            objGrabar. Id = obj.ID;
            objGrabar.Descripcion = obj.Descripcion;
            if (obj.ExcentoDeIva != null) objGrabar.ExcentoDeIva = obj.ExcentoDeIva.Value;
            if (obj.IdBodega != null) objGrabar.IdBodega = obj.IdBodega.Value;
            objGrabar.Notas = obj.Notas;
            if (obj.IdSw != null) objGrabar.IdSw = obj.IdSw.Value;
            objGrabar.FechaCreacion = DateTime.Now;
            if (obj.IdUsuario != null) objGrabar.IdUsuario = obj.IdUsuario.Value;
            return objGrabar;
        }
        public static BllTipoMovimiento GetByIdSw(int id, int idBod)
        {
            var db = new DataDataContext();
            var objGrabar = new BllTipoMovimiento();
            var select = (from c in db.TipoMovimientos where c.IdSw == id && c.IdBodega==idBod select c);
            if (!@select.Any()) return objGrabar;
            var obj = @select.First();
            objGrabar.Id = obj.ID;
            objGrabar.Descripcion = obj.Descripcion;
            if (obj.ExcentoDeIva != null) objGrabar.ExcentoDeIva = obj.ExcentoDeIva.Value;
            if (obj.IdBodega != null) objGrabar.IdBodega = obj.IdBodega.Value;
            objGrabar.Notas = obj.Notas;
            if (obj.IdSw != null) objGrabar.IdSw = obj.IdSw.Value;
            objGrabar.FechaCreacion = DateTime.Now;
            if (obj.IdUsuario != null) objGrabar.IdUsuario = obj.IdUsuario.Value;
            return objGrabar;
        }
        public static List<BllTipoMovimiento> ToList()
        {
            var db = new DataDataContext();
            
            var list = new List<BllTipoMovimiento>();
            var select = (from c in db.TipoMovimientos select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllTipoMovimiento();
                objGrabar.Id = obj.ID;
                objGrabar.Descripcion = obj.Descripcion;
                if (obj.ExcentoDeIva != null) objGrabar.ExcentoDeIva = obj.ExcentoDeIva.Value;
                if (obj.IdBodega != null) objGrabar.IdBodega = obj.IdBodega.Value;
                objGrabar.Notas = obj.Notas;
                if (obj.IdSw != null) objGrabar.IdSw = obj.IdSw.Value;
                objGrabar.FechaCreacion = DateTime.Now;
                if (obj.IdUsuario != null) objGrabar.IdUsuario = obj.IdUsuario.Value;
                objGrabar.DescBodega = obj.Bodega.Descripcion;
                objGrabar.DescSw = obj.Sw.Descripcion;
                objGrabar.DescUsuario = obj.User.Nombres;
                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BllTipoMovimiento> ToList(string something)
        {
            var db = new DataDataContext();
          
            var list = new List<BllTipoMovimiento>();
            var @select = (from c in db.TipoMovimientos
                          where c.ID.ToString().Contains(something)
                              || c.Descripcion.Contains(something)
                          select c);

            foreach (var obj in @select)
            {
                var objGrabar = new BllTipoMovimiento();
                objGrabar.Id = obj.ID;
                objGrabar.Descripcion = obj.Descripcion;
                if (obj.ExcentoDeIva != null) objGrabar.ExcentoDeIva = obj.ExcentoDeIva.Value;
                if (obj.IdBodega != null) objGrabar.IdBodega = obj.IdBodega.Value;
                objGrabar.Notas = obj.Notas;
                if (obj.IdSw != null) objGrabar.IdSw = obj.IdSw.Value;
                objGrabar.FechaCreacion = DateTime.Now;
                if (obj.IdUsuario != null) objGrabar.IdUsuario = obj.IdUsuario.Value;
                objGrabar.DescBodega = obj.Bodega.Descripcion;
                objGrabar.DescSw = obj.Sw.Descripcion;
                objGrabar.DescUsuario = obj.User.Nombres;

                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BllTipoMovimiento> ToListBySw(int idSw)
        {
            var db = new DataDataContext();

            var list = new List<BllTipoMovimiento>();
            var select = (from c in db.TipoMovimientos  where c.IdSw==idSw select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllTipoMovimiento();
                objGrabar.Id = obj.ID;
                objGrabar.Descripcion = obj.Descripcion;
                if (obj.ExcentoDeIva != null) objGrabar.ExcentoDeIva = obj.ExcentoDeIva.Value;
                if (obj.IdBodega != null) objGrabar.IdBodega = obj.IdBodega.Value;
                objGrabar.Notas = obj.Notas;
                if (obj.IdSw != null) objGrabar.IdSw = obj.IdSw.Value;
                objGrabar.FechaCreacion = DateTime.Now;
                if (obj.IdUsuario != null) objGrabar.IdUsuario = obj.IdUsuario.Value;
                objGrabar.DescBodega = obj.Bodega.Descripcion;
                objGrabar.DescSw = obj.Sw.Descripcion;
                objGrabar.DescUsuario = obj.User.Nombres;
                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BllTipoMovimiento> ToListBySw(int idSw,int idBod)
        {
            var db = new DataDataContext();

            var list = new List<BllTipoMovimiento>();
            var select = (from c in db.TipoMovimientos where c.IdSw == idSw && c.IdBodega==idBod select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllTipoMovimiento();
                objGrabar.Id = obj.ID;
                objGrabar.Descripcion = obj.Descripcion;
                if (obj.ExcentoDeIva != null) objGrabar.ExcentoDeIva = obj.ExcentoDeIva.Value;
                if (obj.IdBodega != null) objGrabar.IdBodega = obj.IdBodega.Value;
                objGrabar.Notas = obj.Notas;
                if (obj.IdSw != null) objGrabar.IdSw = obj.IdSw.Value;
                objGrabar.FechaCreacion = DateTime.Now;
                if (obj.IdUsuario != null) objGrabar.IdUsuario = obj.IdUsuario.Value;
                objGrabar.DescBodega = obj.Bodega.Descripcion;
                objGrabar.DescSw = obj.Sw.Descripcion;
                objGrabar.DescUsuario = obj.User.Nombres;
                list.Add(objGrabar);
            }

            return list;
        }
        public static bool ExisteDescri(string desc)
        {
            var db = new DataDataContext();
            new TipoMovimiento();
            var @select = (from c in db.TipoMovimientos where c.Descripcion == desc select c);
            if (@select.Any())
            {
                return true;
            }
            else
            {
                return false;
            }

        }
        public static bool Delete(int id)
        {
            try
            {
                var DataContext = new DataDataContext();
                var seleccion = (from c in DataContext.TipoMovimientos
                                 where c.ID == id
                                 select c);
                if (seleccion.Count() > 0)
                {
                    var item = seleccion.First();

                    DataContext.TipoMovimientos.DeleteOnSubmit(item);
                    DataContext.SubmitChanges();
                    return true;
                }
                else { return false; }
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
    }
}
