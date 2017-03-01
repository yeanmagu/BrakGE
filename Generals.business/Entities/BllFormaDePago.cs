using System;
using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;

namespace Generals.business.Entities
{
    public class BllFormaDePago
    {
        public int Id { get; set; }
        public string Explicacion { get; set; }
        public string Descripcion { get; set; }
        public int DiasCredito { get; set; }
        public int Descuento { get; set; }
        public decimal PorcentajeCredito { get; set; }
        public int IdUsuario { get; set; }
        public int Id_Empresa { get; set; }
        public DateTime FechaModificacion { get; set; }
        public string Empresa { get; set; }
        public string Usuario { get; set; }
        public bool Credito { get; set; }
        public static int Add(BllFormaDePago obj)
        {
            var db = new DataDataContext();
            var tp = new FomaDePago();
            {
                tp.Explicacion = obj.Explicacion;
                tp.Id_Empresa = obj.Id_Empresa;
                tp.DiasCredito = obj.DiasCredito;
                tp.PorcentajeCredito = obj.PorcentajeCredito;
                tp.Descuento = obj.Descuento;
                tp.IdUsuario = obj.IdUsuario;
                tp.Descripcion = obj.Descripcion;
                tp.FechaModificacion = DateTime.Now;
                tp.Credito=obj.Credito;
            };

            db.FomaDePago.InsertOnSubmit(tp);
            db.SubmitChanges();
            var firstOrDefault = db.FomaDePago.FirstOrDefault(m => m.ID == db.FomaDePago.Max(pl => pl.ID));
            if (firstOrDefault != null)
                tp.ID = firstOrDefault.ID;
            return tp.ID;
        }

        public static int Update(BllFormaDePago obj)
        {
            var db = new DataDataContext();
            var @select = (from c in db.FomaDePago where c.ID == obj.Id select c);

            foreach (var objGrabar in @select)
            {
                objGrabar.Explicacion = obj.Explicacion;
                objGrabar.Id_Empresa = obj.Id_Empresa;
                objGrabar.DiasCredito = obj.DiasCredito;
                objGrabar.PorcentajeCredito = obj.PorcentajeCredito;
                objGrabar.Descuento = obj.Descuento;
                objGrabar.IdUsuario = obj.IdUsuario;
                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.FechaModificacion = DateTime.Now;
                objGrabar.Credito = obj.Credito;
            }
            db.SubmitChanges();

            return 1;
        }

        public static BllFormaDePago GetById(int id)
        {
            var db = new DataDataContext();
            var objGrabar = new BllFormaDePago();
            var select = (from c in db.FomaDePago where c.ID == id select c);
            if (!@select.Any()) return objGrabar;
            var obj = @select.First();
            objGrabar.Id = obj.ID;
            objGrabar.Explicacion = obj.Explicacion;
            objGrabar.Id_Empresa = obj.Id_Empresa.Value;
            objGrabar.DiasCredito = obj.DiasCredito.Value;
            objGrabar.PorcentajeCredito = obj.PorcentajeCredito.Value;
            objGrabar.Descuento = obj.Descuento.Value;
            objGrabar.IdUsuario = obj.IdUsuario.Value;
            objGrabar.Descripcion = obj.Descripcion;
            objGrabar.FechaModificacion = obj.FechaModificacion.Value;
            objGrabar.Credito = obj.Credito.Value;
            return objGrabar;
        }

        public static List<BllFormaDePago> ToList()
        {
            var db = new DataDataContext();
           
            var list = new List<BllFormaDePago>();
            var select = (from c in db.FomaDePago select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllFormaDePago();
                objGrabar.Id = obj.ID;
                objGrabar.Explicacion = obj.Explicacion;
                objGrabar.Id_Empresa = obj.Id_Empresa.Value;
                objGrabar.DiasCredito = obj.DiasCredito.Value;
                objGrabar.PorcentajeCredito = obj.PorcentajeCredito.Value;
                objGrabar.Descuento = obj.Descuento.Value;
                objGrabar.IdUsuario = obj.IdUsuario.Value;
                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.FechaModificacion = obj.FechaModificacion.Value;
                objGrabar.Credito = obj.Credito.Value;
                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BllFormaDePago> ToList(string something)
        {
            var db = new DataDataContext();
            
            var list = new List<BllFormaDePago>();
            var @select = (from c in db.FomaDePago
                          where c.ID.ToString().Contains(something)
                              || c.Descripcion.Contains(something)
                          select c);

            foreach (var obj in @select)
            {
                var objGrabar = new BllFormaDePago();
                objGrabar.Id = obj.ID;
                objGrabar.Explicacion = obj.Explicacion;
                objGrabar.Id_Empresa = obj.Id_Empresa.Value;
                objGrabar.DiasCredito = obj.DiasCredito.Value;
                objGrabar.PorcentajeCredito = obj.PorcentajeCredito.Value;
                objGrabar.Descuento = obj.Descuento.Value;
                objGrabar.IdUsuario = obj.IdUsuario.Value;
                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.FechaModificacion = obj.FechaModificacion.Value;
                objGrabar.Credito = obj.Credito.Value;
                list.Add(objGrabar);
            }

            return list;
        }
        public static bool ExisteDescri(string desc)
        {
            var db = new DataDataContext();
            new FomaDePago();
            var @select = (from c in db.FomaDePago where c.Descripcion == desc select c);
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
