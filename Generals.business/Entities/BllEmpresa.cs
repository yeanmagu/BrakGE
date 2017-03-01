using System;
using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;

namespace Generals.business.Entities
{
    public class BllEmpresa
    {
        public int ID { get; set; }
        public string Nombre { get; set; }
        public string PaginaWeb { get; set; }
        public string Direccion { get; set; }
        public string Telefono { get; set; }
        public string Logo { get; set; }
        public DateTime FechaResolucion { get; set; }
        public bool Estado { get; set; }

        public string Resolucion { get; set; }
        public string Notas { get; set; }
        public string Contacto { get; set; }
        public static int Add(BllEmpresa obj)
        {
            var db = new DataDataContext();
            var tp = new Empresa();
            {
                tp.Nombre = obj.Nombre;
                tp.PaginaWeb = obj.PaginaWeb;
                tp.Estado = true;
                tp.Direccion = obj.Direccion;
                tp.Logo = obj.Logo;
                tp.Telefono = obj.Telefono;
                tp.FechaResolucion=obj.FechaResolucion;
                tp.Contacto = obj.Contacto;
                tp.Notas = obj.Notas;
            };

            db.Empresas.InsertOnSubmit(tp);
            db.SubmitChanges();
            var firstOrDefault = db.Empresas.FirstOrDefault(m => m.ID == db.Empresas.Max(pl => pl.ID));
            if (firstOrDefault != null)
                tp.ID = firstOrDefault.ID;
            return tp.ID;
        }

        public static int Update(BllEmpresa obj)
        {
            var db = new DataDataContext();
          
            var @select = (from c in db.Empresas where c.ID == obj.ID select c);

            foreach (var objGrabar in @select)
            {
                objGrabar.PaginaWeb = obj.PaginaWeb;
                objGrabar.Estado = true;
                objGrabar.Direccion = obj.Direccion;
                objGrabar.Logo = obj.Logo;
                objGrabar.Telefono = obj.Telefono;
                objGrabar.FechaResolucion = obj.FechaResolucion;
                objGrabar.Contacto = obj.Contacto;
                objGrabar.Notas = obj.Notas;
            }
            db.SubmitChanges();

            return 1;
        }

        public static BllEmpresa GetById(int id)
        {
            var db = new DataDataContext();
            var objGrabar = new BllEmpresa();
            var select = (from c in db.Empresas where c.ID == id select c);
            if (!@select.Any()) return objGrabar;
            var obj = @select.First();
            objGrabar.ID = obj.ID;
            objGrabar.Nombre = obj.Nombre;
            objGrabar.PaginaWeb = obj.PaginaWeb;
            objGrabar.Estado = obj.Estado.Value;
            objGrabar.Direccion = obj.Direccion;
            objGrabar.Logo = obj.Logo;
            objGrabar.Telefono = obj.Telefono;
            objGrabar.FechaResolucion = obj.FechaResolucion.Value;
            objGrabar.Contacto = obj.Contacto;
            objGrabar.Notas = obj.Notas;

            return objGrabar;
        }

        public static List<BllEmpresa> ToList()
        {
            var db = new DataDataContext();
          
            var list = new List<BllEmpresa>();
            var select = (from c in db.Empresas select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllEmpresa();
                objGrabar.ID = obj.ID;
                objGrabar.Nombre = obj.Nombre;
                objGrabar.PaginaWeb = obj.PaginaWeb;
                objGrabar.Estado = obj.Estado.Value;
                objGrabar.Direccion = obj.Direccion;
                objGrabar.Logo = obj.Logo;
                objGrabar.Telefono = obj.Telefono;
                objGrabar.FechaResolucion = obj.FechaResolucion.Value;
                objGrabar.Contacto = obj.Contacto;
                objGrabar.Notas = obj.Notas;

                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BllEmpresa> ToList(string something)
        {
            var db = new DataDataContext();
            
            var list = new List<BllEmpresa>();
            var @select = (from c in db.Empresas
                          where c.ID.ToString().Contains(something)
                              || c.Nombre.ToString().Contains(something)
                          select c);

            foreach (var obj in @select)
            {
                var objGrabar = new BllEmpresa();
                objGrabar.ID = obj.ID;
                objGrabar.Nombre = obj.Nombre;
                objGrabar.PaginaWeb = obj.PaginaWeb;
                objGrabar.Estado = obj.Estado.Value;
                objGrabar.Direccion = obj.Direccion;
                objGrabar.Logo = obj.Logo;
                objGrabar.Telefono = obj.Telefono;
                objGrabar.FechaResolucion = obj.FechaResolucion.Value;
                objGrabar.Contacto = obj.Contacto;
                objGrabar.Notas = obj.Notas;
                list.Add(objGrabar);
            }

            return list;
        }
        public static bool ExisteDescri(string desc)
        {
            var db = new DataDataContext();
            new Empresa();
            var @select = (from c in db.Empresas where c.Nombre == desc select c);
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
