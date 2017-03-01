using System;
using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;

namespace Generals.business.Entities
{
    public class BllControlDeProcesos
    {
        public int Id { get; set; }
        public DateTime Fecha { get; set; }
        public int Medidas1 { get; set; }
        public string Especificaciones { get; set; }
        public int Medidas2 { get; set; }
        public int IdProgramacion { get; set; }
        public string Elementos { get; set; }
        public bool Soldadura { get; set; }
        public string Nivel { get; set; }
        public bool ExcesoDeSoldadura { get; set; }
        public bool ManchasDeSoldadura { get; set; }
        public string DescripcionDelProblema { get; set; }
        public string AccionesNoConforme { get; set; }
        public bool VoBo { get; set; }
        public int IdUsuario { get; set; }
        public DateTime FechaSistema { get; set; }
        public bool Estado { get; set; }
        
        public string Empresa { get; set; }
        public string Usuario { get; set; }

        public static int Add(BllControlDeProcesos obj)
        {
            var db = new DataDataContext();
            var tp = new ControlDeProceso();
            {
                tp.Fecha = obj.Fecha;
                tp.Medidas1 = obj.Medidas1;
                tp.Especificaciones = obj.Especificaciones;
                tp.Medidas2 = obj.Medidas2;
                tp.IdProgramacion = obj.IdProgramacion;
                tp.Elementos = obj.Elementos;
                tp.Soldadura = obj.Soldadura;
                tp.Nivel = obj.Nivel;
                tp.ExcesoSoldadura = obj.ExcesoDeSoldadura;
                tp.ManchasSoldadura = obj.ManchasDeSoldadura;
                tp.DescripcionDelProblema = obj.DescripcionDelProblema;
                tp.AccionesNoConforme = obj.AccionesNoConforme;
                tp.VoBo = obj.VoBo;
                tp.IdUsuario = obj.IdUsuario;
                tp.Estado = true;
                tp.FechaSistema=DateTime.Now;
            };

            db.ControlDeProcesos.InsertOnSubmit(tp);
            db.SubmitChanges();
            var firstOrDefault = db.ControlDeProcesos.FirstOrDefault(m => m.ID == db.ControlDeProcesos.Max(pl => pl.ID));
            if (firstOrDefault != null)
                tp.ID = firstOrDefault.ID;
            return tp.ID;
        }

        public static int Update(BllControlDeProcesos obj)
        {
            var db = new DataDataContext();

            var @select = (from c in db.ControlDeProcesos where c.ID == obj.Id select c);

            foreach (var objGrabar in @select)
            {
                objGrabar.Fecha = obj.Fecha;
                objGrabar.Medidas1 = obj.Medidas1;
                objGrabar.Especificaciones = obj.Especificaciones;
                objGrabar.Medidas2 = obj.Medidas2;
                objGrabar.IdProgramacion = obj.IdProgramacion;
                objGrabar.Elementos = obj.Elementos;
                objGrabar.Soldadura = obj.Soldadura;
                objGrabar.Nivel = obj.Nivel;
                objGrabar.ExcesoSoldadura = obj.ExcesoDeSoldadura;
                objGrabar.ManchasSoldadura = obj.ManchasDeSoldadura;
                objGrabar.DescripcionDelProblema = obj.DescripcionDelProblema;
                objGrabar.AccionesNoConforme = obj.AccionesNoConforme;
                objGrabar.VoBo = obj.VoBo;
                objGrabar.IdUsuario = obj.IdUsuario;
                objGrabar.Estado = obj.Estado;
                objGrabar.FechaSistema = DateTime.Now;
            }
            db.SubmitChanges();

            return 1;
        }

        public static BllControlDeProcesos GetById(int id)
        {
            var db = new DataDataContext();
            var objGrabar = new BllControlDeProcesos();
            var select = (from c in db.ControlDeProcesos where c.ID == id select c);
            if (!@select.Any()) return objGrabar;
            var obj = @select.First();
            objGrabar.Id = obj.ID;
            objGrabar.IdUsuario = obj.IdUsuario.Value;
            objGrabar.Fecha = obj.Fecha.Value;
            objGrabar.Medidas1 = obj.Medidas1.Value;
            objGrabar.Especificaciones = obj.Especificaciones;
            objGrabar.Medidas2 = obj.Medidas1.Value;
            objGrabar.IdProgramacion = obj.IdProgramacion.Value;
            objGrabar.Elementos = obj.Elementos;
            objGrabar.Soldadura = obj.Estado.Value;
            objGrabar.Nivel = obj.Nivel;
            objGrabar.ExcesoDeSoldadura = obj.ExcesoSoldadura.Value;
            objGrabar.ExcesoDeSoldadura = obj.ManchasSoldadura.Value;
            objGrabar.DescripcionDelProblema = obj.DescripcionDelProblema;
            objGrabar.AccionesNoConforme = obj.AccionesNoConforme;
            objGrabar.VoBo = obj.VoBo.Value;
            objGrabar.IdUsuario = obj.IdUsuario.Value;
            objGrabar.Estado = obj.Estado.Value;
            objGrabar.Usuario = obj.User.Nombres;
            return objGrabar;
        }

        public static List<BllControlDeProcesos> ToList()
        {
            var db = new DataDataContext();
           
            var list = new List<BllControlDeProcesos>();
            var select = (from c in db.ControlDeProcesos select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllControlDeProcesos();
                objGrabar.Id = obj.ID;
                objGrabar.IdUsuario = obj.IdUsuario.Value;
                objGrabar.Fecha = obj.Fecha.Value;
                objGrabar.Medidas1 = obj.Medidas1.Value;
                objGrabar.Especificaciones = obj.Especificaciones;
                objGrabar.Medidas2 = obj.Medidas1.Value;
                objGrabar.IdProgramacion = obj.IdProgramacion.Value;
                objGrabar.Elementos = obj.Elementos;
                objGrabar.Soldadura = obj.Estado.Value;
                objGrabar.Nivel = obj.Nivel;
                objGrabar.ExcesoDeSoldadura = obj.ExcesoSoldadura.Value;
                objGrabar.ExcesoDeSoldadura = obj.ManchasSoldadura.Value;
                objGrabar.DescripcionDelProblema = obj.DescripcionDelProblema;
                objGrabar.AccionesNoConforme = obj.AccionesNoConforme;
                objGrabar.VoBo = obj.VoBo.Value;
                objGrabar.IdUsuario = obj.IdUsuario.Value;
                objGrabar.Estado = obj.Estado.Value;
                objGrabar.Usuario = obj.User.Nombres;

                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BllControlDeProcesos> ToList(string something)
        {
            var db = new DataDataContext();
           
            var list = new List<BllControlDeProcesos>();
            var @select = (from c in db.ControlDeProcesos
                          where c.ID.ToString().Contains(something)
                              || c.User.Nombres.Contains(something)
                          select c);

            foreach (var obj in @select)
            {
                var objGrabar = new BllControlDeProcesos();
                objGrabar.Id = obj.ID;
                objGrabar.IdUsuario = obj.IdUsuario.Value;
                objGrabar.Fecha = obj.Fecha.Value;
                objGrabar.Medidas1 = obj.Medidas1.Value;
                objGrabar.Especificaciones = obj.Especificaciones;
                objGrabar.Medidas2 = obj.Medidas1.Value;
                objGrabar.IdProgramacion = obj.IdProgramacion.Value;
                objGrabar.Elementos = obj.Elementos;
                objGrabar.Soldadura = obj.Estado.Value;
                objGrabar.Nivel = obj.Nivel;
                objGrabar.ExcesoDeSoldadura = obj.ExcesoSoldadura.Value;
                objGrabar.ExcesoDeSoldadura = obj.ManchasSoldadura.Value;
                objGrabar.DescripcionDelProblema = obj.DescripcionDelProblema;
                objGrabar.AccionesNoConforme = obj.AccionesNoConforme;
                objGrabar.VoBo = obj.VoBo.Value;
                objGrabar.IdUsuario = obj.IdUsuario.Value;
                objGrabar.Estado = obj.Estado.Value;
                objGrabar.Usuario = obj.User.Nombres;

                list.Add(objGrabar);
            }

            return list;
        }
      
    }
}
