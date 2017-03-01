using System;
using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;

namespace Generals.business.Entities
{
    public class BllActas
    {
        public int ID { get; set; }
        public int IdDocumento { get; set; }
        public int IdTipoActa { get; set; }
        public DateTime Fecha { get; set; }
        public int IdUsuario { get; set; }
        public string Observaciones { get; set; }
        public DateTime FechaSistema { get; set; }
        public bool Estado { get; set; }

        public string TipoActa { get; set; }
        public string Usuario { get; set; }
        
        public static int Add(BllActas obj)
        {
            var db = new DataDataContext();
            var tp = new Acta();
            {
                tp.IdDocumento = obj.IdDocumento;
                tp.IdTipoActa = obj.IdTipoActa;
                tp.Estado = true;
                tp.Fecha = obj.Fecha;
                tp.Observaciones = obj.Observaciones;
                tp.IdUsuario = obj.IdUsuario;
                tp.FechaSistema=DateTime.Now;
                
            };

            db.Actas.InsertOnSubmit(tp);
            db.SubmitChanges();
            var firstOrDefault = db.Actas.FirstOrDefault(m => m.ID == db.Actas.Max(pl => pl.ID));
            if (firstOrDefault != null)
                tp.ID = firstOrDefault.ID;
            return tp.ID;
        }

        public static int Update(BllActas obj)
        {
            var db = new DataDataContext();

            var @select = (from c in db.Actas where c.ID == obj.ID select c);
            foreach (var objGrabar in @select)
            {
                objGrabar.IdTipoActa = obj.IdTipoActa;
                objGrabar.Estado = obj.Estado;
                objGrabar.Fecha = obj.Fecha;
                objGrabar.Observaciones = obj.Observaciones;
                objGrabar.IdUsuario = obj.IdUsuario;
            }            
            db.SubmitChanges();

            return 1;
        }

        public static BllActas GetById(int id)
        {
            var db = new DataDataContext();
            var objGrabar = new BllActas();
            var select = (from c in db.Actas where c.ID == id select c);
            if (!@select.Any()) return objGrabar;
            var obj = @select.First();
            objGrabar.ID = obj.ID;
            objGrabar.IdDocumento = obj.IdDocumento.Value;
            objGrabar.Usuario = obj.User.Nombres;
            objGrabar.TipoActa = obj.TipoActa.Descripcion;
            objGrabar.IdUsuario = obj.IdUsuario.Value;
            objGrabar.IdTipoActa = obj.IdTipoActa.Value;
            objGrabar.Estado = obj.Estado.Value;
            objGrabar.Fecha = obj.Fecha.Value;
            objGrabar.Observaciones = obj.Observaciones;
            

            return objGrabar;
        }

        public static List<BllActas> ToList()
        {
            var db = new DataDataContext();
            
            var list = new List<BllActas>();
            var select = (from c in db.Actas select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllActas();
                objGrabar.ID = obj.ID;
                objGrabar.IdDocumento = obj.IdDocumento.Value;
                objGrabar.Usuario = obj.User.Nombres;
                objGrabar.TipoActa = obj.TipoActa.Descripcion;
                objGrabar.IdUsuario = obj.IdUsuario.Value;
                objGrabar.IdTipoActa = obj.IdTipoActa.Value;
                objGrabar.Estado = obj.Estado.Value;
                objGrabar.Fecha = obj.Fecha.Value;
                objGrabar.Observaciones = obj.Observaciones;

                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BllActas> ToList(string something)
        {
            var db = new DataDataContext();
           
            var list = new List<BllActas>();
            var @select = (from c in db.Actas
                          where c.ID.ToString().Contains(something)
                              || c.IdDocumento.ToString().Contains(something)
                          select c);

            foreach (var obj in @select)
            {
                var objGrabar = new BllActas();
                objGrabar.ID = obj.ID;
                objGrabar.IdDocumento = obj.IdDocumento.Value;
                objGrabar.Usuario = obj.User.Nombres;
                objGrabar.TipoActa = obj.TipoActa.Descripcion;
                objGrabar.IdUsuario = obj.IdUsuario.Value;
                objGrabar.IdTipoActa = obj.IdTipoActa.Value;
                objGrabar.Estado = obj.Estado.Value;
                objGrabar.Fecha = obj.Fecha.Value;
                objGrabar.Observaciones = obj.Observaciones;

                list.Add(objGrabar);
            }

            return list;
        }
        public static bool ExisteDescri(int desc)
        {
            var db = new DataDataContext();
            new Acta();
            var @select = (from c in db.Actas where c.IdDocumento == desc select c);
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
