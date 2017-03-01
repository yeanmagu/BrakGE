using System;
using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;

namespace Generals.business.Entities
{
    public class BllControlEntregasInternas
    {
        public int Id { get; set; }
        public int IdDocumento { get; set; }
        public string DescripcionProducto { get; set; }
        public DateTime Fecha { get; set; }
        public int IdUsuario { get; set; }
        public int IdUsuarioRecibe { get; set; }
        public DateTime FechaSistema { get; set; }
        public int EstadoEnvio { get; set; }
        public DateTime FechaCambioEstado { get; set; }

        public string Empresa { get; set; }
        public string Usuario { get; set; }

        public static int Add(BllControlEntregasInternas obj)
        {
            var db = new DataDataContext();
            var tp = new ControlEntregasInterna();
            {
                tp.IdDocumento = obj.IdDocumento;
                tp.IdUsuarioRecibe = obj.IdUsuarioRecibe;
                tp.Fecha = obj.Fecha;
                tp.FechaSistema=DateTime.Now;
                tp.EstadoEnvio = obj.EstadoEnvio;
                tp.IdUsuario = obj.IdUsuario;
                tp.DescripcionProducto = obj.DescripcionProducto;
                
            };

            db.ControlEntregasInternas.InsertOnSubmit(tp);
            db.SubmitChanges();
            var firstOrDefault = db.ControlEntregasInternas.FirstOrDefault(m => m.ID == db.ControlEntregasInternas.Max(pl => pl.ID));
            if (firstOrDefault != null)
                tp.ID = firstOrDefault.ID;
            return tp.ID;
        }

        public static int Update(BllControlEntregasInternas obj)
        {
            var db = new DataDataContext();

            var @select = (from c in db.ControlEntregasInternas where c.ID == obj.Id select c);

            foreach (var objGrabar in @select)
            {
                objGrabar.IdDocumento = obj.IdDocumento;
                objGrabar.IdUsuarioRecibe = obj.IdUsuarioRecibe;
                objGrabar.Fecha = obj.Fecha;
                objGrabar.FechaSistema = DateTime.Now;
                objGrabar.EstadoEnvio = obj.EstadoEnvio;
                objGrabar.IdUsuario = obj.IdUsuario;
                objGrabar.DescripcionProducto = obj.DescripcionProducto;
                objGrabar.FechaCambioEstado = obj.FechaCambioEstado;
            }
            db.SubmitChanges();

            return 1;
        }

        public static BllControlEntregasInternas GetById(int id)
        {
            var db = new DataDataContext();
            var objGrabar = new BllControlEntregasInternas();
            var select = (from c in db.ControlEntregasInternas where c.ID == id select c);
            if (!@select.Any()) return objGrabar;
            var obj = @select.First();
            objGrabar.Id = obj.ID;
            objGrabar.IdDocumento = obj.IdDocumento.Value;
            objGrabar.IdUsuarioRecibe = obj.IdUsuarioRecibe.Value;
            objGrabar.Fecha = obj.Fecha.Value;
            objGrabar.FechaSistema = DateTime.Now;
            objGrabar.EstadoEnvio = obj.EstadoEnvio.Value;
            objGrabar.IdUsuario = obj.IdUsuarioRecibe.Value;
            objGrabar.DescripcionProducto = obj.DescripcionProducto;
            objGrabar.FechaCambioEstado = obj.FechaCambioEstado.Value;
            return objGrabar;
        }

        public static List<BllControlEntregasInternas> ToList()
        {
            var db = new DataDataContext();
          
            var list = new List<BllControlEntregasInternas>();
            var select = (from c in db.ControlEntregasInternas select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllControlEntregasInternas();
                objGrabar.Id = obj.ID;
                objGrabar.Id = obj.ID;
                objGrabar.IdDocumento = obj.IdDocumento.Value;
                objGrabar.IdUsuarioRecibe = obj.IdUsuarioRecibe.Value;
                objGrabar.Fecha = obj.Fecha.Value;
                objGrabar.FechaSistema = DateTime.Now;
                objGrabar.EstadoEnvio = obj.EstadoEnvio.Value;
                objGrabar.IdUsuario = obj.IdUsuarioRecibe.Value;
                objGrabar.DescripcionProducto = obj.DescripcionProducto;
                objGrabar.FechaCambioEstado = obj.FechaCambioEstado.Value;
                objGrabar.Usuario = obj.User.Nombres;

                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BllControlEntregasInternas> ToList(string something)
        {
            var db = new DataDataContext();
          
            var list = new List<BllControlEntregasInternas>();
            var @select = (from c in db.ControlEntregasInternas
                          where c.ID.ToString().Contains(something)
                              || c.DescripcionProducto.Contains(something)
                          select c);

            foreach (var obj in @select)
            {
                var objGrabar = new BllControlEntregasInternas();
                objGrabar.Id = obj.ID;
                objGrabar.IdDocumento = obj.IdDocumento.Value;
                objGrabar.IdUsuarioRecibe = obj.IdUsuarioRecibe.Value;
                objGrabar.Fecha = obj.Fecha.Value;
                objGrabar.FechaSistema = DateTime.Now;
                objGrabar.EstadoEnvio = obj.EstadoEnvio.Value;
                objGrabar.IdUsuario = obj.IdUsuarioRecibe.Value;
                objGrabar.DescripcionProducto = obj.DescripcionProducto;
                objGrabar.FechaCambioEstado = obj.FechaCambioEstado.Value;
                objGrabar.Usuario = obj.User.Nombres;

                list.Add(objGrabar);
            }

            return list;
        }
        public static bool ExisteDescri(string desc)
        {
            var db = new DataDataContext();
            new ControlEntregasInterna();
            var @select = (from c in db.ControlEntregasInternas where c.DescripcionProducto == desc select c);
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
