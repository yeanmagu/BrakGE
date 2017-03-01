using System;
using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;

namespace Generals.business.Entities
{
    public class BllBodega
    {
        public int ID { get; set; }
        public int IdEmpresa { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public int IdUsuario { get; set; }
        public string Direccion { get; set; }
        public string Telefono { get; set; }
        public string Publicidad { get; set; }
        public int IdMunicipio { get; set; }
        public string Notas { get; set; }
        public string Responsable { get; set; }
        public DateTime FechaModificacion { get; set; }
        public bool Estado { get; set; }

        public string Empresa { get; set; }
        public string Muicipio { get; set; }
        public string Usuario { get; set; }
        
        public static int Add(BllBodega obj)
        {
            var db = new DataDataContext();
            var tp = new Bodega();
            {
                tp.IDEmpresa = obj.IdEmpresa;
                tp.Nombre = obj.Nombre;
                tp.Estado = true;
                tp.Descripcion = obj.Descripcion;
                tp.Direccion = obj.Direccion;
                tp.Telefono = obj.Telefono;
                tp.Publicidad = obj.Publicidad;
                tp.IdMunicipio = obj.IdMunicipio;
                tp.Notas = obj.Notas;
                tp.Responsable = obj.Responsable;
                tp.IDUsuario = obj.IdUsuario;
                tp.FechaModificacion=DateTime.Now;
                
            };

            db.Bodegas.InsertOnSubmit(tp);
            db.SubmitChanges();
            var firstOrDefault = db.Bodegas.FirstOrDefault(m => m.ID == db.Bodegas.Max(pl => pl.ID));
            if (firstOrDefault != null)
                tp.ID = firstOrDefault.ID;
            return tp.ID;
        }

        public static int Update(BllBodega obj)
        {
            var db = new DataDataContext();

            var @select = (from c in db.Bodegas where c.ID == obj.ID select c);

            foreach (var objGrabar in @select)
            {

                objGrabar.Nombre = obj.Nombre;
                objGrabar.Estado = true;
                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.Direccion = obj.Direccion;
                objGrabar.Telefono = obj.Telefono;
                objGrabar.Publicidad = obj.Publicidad;
                objGrabar.IdMunicipio = obj.IdMunicipio;
                objGrabar.Notas = obj.Notas;
                objGrabar.Responsable = obj.Responsable;
                objGrabar.IDUsuario = obj.IdUsuario;
                objGrabar.FechaModificacion = DateTime.Now;
            }
            db.SubmitChanges();

            return 1;
        }

        public static BllBodega GetById(int id)
        {
            var db = new DataDataContext();
            var objGrabar = new BllBodega();
            var select = (from c in db.Bodegas where c.ID == id select c);
            if (!@select.Any()) return objGrabar;
            var obj = @select.First();
            objGrabar.ID = obj.ID;
            objGrabar.Nombre = obj.Nombre;
            objGrabar.Estado = true;
            objGrabar.Descripcion = obj.Descripcion;
            objGrabar.Direccion = obj.Direccion;
            objGrabar.Telefono = obj.Telefono;
            objGrabar.Publicidad = obj.Publicidad;
            objGrabar.IdMunicipio = obj.IdMunicipio;
            objGrabar.Notas = obj.Notas;
            objGrabar.Responsable = obj.Responsable;
            objGrabar.IdUsuario = obj.IDUsuario;
            objGrabar.FechaModificacion = DateTime.Now;
            objGrabar.Empresa = obj.Empresa.Nombre;
            objGrabar.Usuario = obj.User.Nombres;
            objGrabar.Muicipio = obj.Municipio.Nombre;

            return objGrabar;
        }

        public static List<BllBodega> ToList()
        {
            var db = new DataDataContext();
           
            var list = new List<BllBodega>();
            var select = (from c in db.Bodegas select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllBodega();
                objGrabar.ID = obj.ID;
                objGrabar.Nombre = obj.Nombre;
                objGrabar.Estado = true;
                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.Direccion = obj.Direccion;
                objGrabar.Telefono = obj.Telefono;
                objGrabar.Publicidad = obj.Publicidad;
                objGrabar.IdMunicipio = obj.IdMunicipio;
                objGrabar.Notas = obj.Notas;
                objGrabar.Responsable = obj.Responsable;
                objGrabar.IdUsuario = obj.IDUsuario;
                objGrabar.FechaModificacion = DateTime.Now;
                objGrabar.Empresa = obj.Empresa.Nombre;
                objGrabar.Usuario = obj.User.Nombres;
                objGrabar.Muicipio = obj.Municipio.Nombre;


                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BllBodega> ToList(string something)
        {
            var db = new DataDataContext();
           
            var list = new List<BllBodega>();
            var @select = (from c in db.Bodegas
                          where c.ID.ToString().Contains(something)
                              || c.IDEmpresa.ToString().Contains(something)
                          select c);

            foreach (var obj in @select)
            {
                var objGrabar = new BllBodega();
                objGrabar.ID = obj.ID;
                objGrabar.Nombre = obj.Nombre;
                objGrabar.Estado = true;
                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.Direccion = obj.Direccion;
                objGrabar.Telefono = obj.Telefono;
                objGrabar.Publicidad = obj.Publicidad;
                objGrabar.IdMunicipio = obj.IdMunicipio;
                objGrabar.Notas = obj.Notas;
                objGrabar.Responsable = obj.Responsable;
                objGrabar.IdUsuario = obj.IDUsuario;
                objGrabar.FechaModificacion = DateTime.Now;
                objGrabar.Empresa = obj.Empresa.Nombre;
                objGrabar.Usuario = obj.User.Nombres;
                objGrabar.Muicipio = obj.Municipio.Nombre;


                list.Add(objGrabar);
            }

            return list;
        }
        public static bool ExisteDescri(string desc)
        {
            var db = new DataDataContext();
            new Bodega();
            var @select = (from c in db.Bodegas where c.Nombre == desc select c);
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
            var db = new DataDataContext();
            new Bodega();
            var select = (from c in db.Bodegas where c.ID == id select c).FirstOrDefault();
            if (select!=null)
            {

                db.Bodegas.DeleteOnSubmit(select);
                db.SubmitChanges();
                return true;
            }
            else
            {
                return false;
            }

        }
    }
}
