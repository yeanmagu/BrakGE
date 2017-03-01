using System;
using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;

namespace Generals.business.Entities
{
    public class BllRemisionesExternas
    {
        public int ID { get; set; }
        public int IdOrdenProduccion { get; set; }
        public int IdUsuario { get; set; }
        public DateTime Fecha { get; set; }
        public int IdUsuarioDespachador { get; set; }
        public string Observaciones { get; set; }
        public DateTime FechaSistema { get; set; }
        public int IdTransportador { get; set; }

        public string RecibidoPot { get; set; }
        
        public static int Add(BllRemisionesExternas obj)
        {
            var db = new DataDataContext();
            var tp = new RemisionesExterna();
            {
                tp.IdOrdenProduccion = obj.IdOrdenProduccion;
                tp.IdUsuario = obj.IdUsuario;
                tp.IdTransportador = obj.IdTransportador;
                tp.Fecha = obj.Fecha;
                tp.Observaciones = obj.Observaciones;
                tp.IdUsuarioDespachador = obj.IdUsuarioDespachador;
                tp.FechaSistema=DateTime.Now;
                tp.RecibidoPot = obj.RecibidoPot;
                
            };

            db.RemisionesExternas.InsertOnSubmit(tp);
            db.SubmitChanges();
            var firstOrDefault = db.RemisionesExternas.FirstOrDefault(m => m.ID == db.RemisionesExternas.Max(pl => pl.ID));
            if (firstOrDefault != null)
                tp.ID = firstOrDefault.ID;
            return tp.ID;
        }

        public static int Update(BllRemisionesExternas obj)
        {
            var db = new DataDataContext();
            var objGrabar = new RemisionesExterna();

            var @select = (from c in db.RemisionesExternas where c.ID == obj.ID select c);

            foreach (var tp in @select)
            {
                 tp.IdUsuario = obj.IdUsuario;
                tp.IdTransportador = obj.IdTransportador;
                tp.Fecha = obj.Fecha;
                tp.Observaciones = obj.Observaciones;
                tp.IdUsuarioDespachador = obj.IdUsuarioDespachador;
                tp.FechaSistema=DateTime.Now;
                tp.RecibidoPot = obj.RecibidoPot;
            }
            db.SubmitChanges();

            return 1;
        }

        public static BllRemisionesExternas GetById(int id)
        {
            var db = new DataDataContext();
            var objGrabar = new BllRemisionesExternas();
            var select = (from c in db.RemisionesExternas where c.ID == id select c);
            if (!@select.Any()) return objGrabar;
            var obj = @select.First();
            objGrabar.ID = obj.ID;
            objGrabar.IdOrdenProduccion = obj.IdOrdenProduccion;
            objGrabar.IdUsuario = obj.IdUsuario.Value;
            objGrabar.IdTransportador = obj.IdTransportador.Value;
            objGrabar.Fecha = obj.Fecha.Value;
            objGrabar.Observaciones = obj.Observaciones;
            objGrabar.IdUsuarioDespachador = obj.IdUsuarioDespachador.Value;
            objGrabar.FechaSistema = obj.FechaSistema.Value;
            objGrabar.RecibidoPot = obj.RecibidoPot;

            return objGrabar;
        }

        public static List<BllRemisionesExternas> ToList()
        {
            var db = new DataDataContext();
            
            var list = new List<BllRemisionesExternas>();
            var select = (from c in db.RemisionesExternas select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllRemisionesExternas();
                objGrabar.ID = obj.ID;
                objGrabar.IdOrdenProduccion = obj.IdOrdenProduccion;
                objGrabar.IdUsuario = obj.IdUsuario.Value;
                objGrabar.IdTransportador = obj.IdTransportador.Value;
                objGrabar.Fecha = obj.Fecha.Value;
                objGrabar.Observaciones = obj.Observaciones;
                objGrabar.IdUsuarioDespachador = obj.IdUsuarioDespachador.Value;
                objGrabar.FechaSistema = obj.FechaSistema.Value;
                objGrabar.RecibidoPot = obj.RecibidoPot;

                

                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BllRemisionesExternas> ToList(string something)
        {
            var db = new DataDataContext();
          
            var list = new List<BllRemisionesExternas>();
            var @select = (from c in db.RemisionesExternas
                          where c.ID.ToString().Contains(something)
                              || c.IdOrdenProduccion.ToString().Contains(something)
                          select c);

            foreach (var obj in @select)
            {
                var objGrabar = new BllRemisionesExternas();
                objGrabar.ID = obj.ID;
                objGrabar.IdOrdenProduccion = obj.IdOrdenProduccion;
                objGrabar.IdUsuario = obj.IdUsuario.Value;
                objGrabar.IdTransportador = obj.IdTransportador.Value;
                objGrabar.Fecha = obj.Fecha.Value;
                objGrabar.Observaciones = obj.Observaciones;
                objGrabar.IdUsuarioDespachador = obj.IdUsuarioDespachador.Value;
                objGrabar.FechaSistema = obj.FechaSistema.Value;
                objGrabar.RecibidoPot = obj.RecibidoPot;
                list.Add(objGrabar);
            }

            return list;
        }
        public static bool ExisteDescri(int desc)
        {
            var db = new DataDataContext();
            var @select = (from c in db.RemisionesExternas where c.IdOrdenProduccion == desc select c);
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
