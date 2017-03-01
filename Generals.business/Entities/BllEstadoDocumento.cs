using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;
using System;

namespace Generals.business.Entities
{
    public class BllEstadoDocumento
    {
        public int Id { get; set; }
        public string Descripcion { get; set; }
        public bool Estado { get; set; }


        public static int Add(BllEstadoDocumento obj)
        {
            var db = new DataDataContext();
            var tp = new EstadoDocumento
            {
                Descripcion = obj.Descripcion,
                Estado = true
            };

            db.EstadoDocumentos.InsertOnSubmit(tp);
            db.SubmitChanges();
            var firstOrDefault = db.EstadoDocumentos.FirstOrDefault(m => m.ID == db.EstadoDocumentos.Max(pl => pl.ID));
            if (firstOrDefault != null)
                tp.ID = firstOrDefault.ID;
            return tp.ID;
        }

        public static int Update(BllEstadoDocumento obj)
        {
            var db = new DataDataContext();
            
            var @select = (from c in db.EstadoDocumentos where c.ID == obj.Id select c);

            foreach (var objGrabar in @select)
            {

                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.Estado = obj.Estado;
            }
            db.SubmitChanges();

            return 1;
        }

        public static BllEstadoDocumento GetById(int id)
        {
            var db = new DataDataContext();
            var objGrabar = new BllEstadoDocumento();
            var select = (from c in db.EstadoDocumentos where c.ID == id select c);
            if (!@select.Any()) return objGrabar;
            var obj = @select.First();
            objGrabar.Id = obj.ID;
            objGrabar.Descripcion = obj.Descripcion;
            objGrabar.Estado = obj.Estado.Value;
            return objGrabar;
        }

        public static List<BllEstadoDocumento> ToList()
        {
            var db = new DataDataContext();
           
            var list = new List<BllEstadoDocumento>();
            var select = (from c in db.EstadoDocumentos select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllEstadoDocumento();
                objGrabar.Id = obj.ID;
                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.Estado = obj.Estado.Value;

                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BllEstadoDocumento> ToList(string something)
        {
            var db = new DataDataContext();
            
            var list = new List<BllEstadoDocumento>();
            var @select = (from c in db.EstadoDocumentos
                          where c.ID.ToString().Contains(something)
                              || c.Descripcion.Contains(something)
                          select c);

            foreach (var obj in @select)
            {
                var objGrabar = new BllEstadoDocumento();
                objGrabar.Id = obj.ID;
                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.Estado = obj.Estado.Value;

                list.Add(objGrabar);
            }

            return list;
        }
        public static bool ExisteDescri(string desc)
        {
            var db = new DataDataContext();
            new EstadoDocumento();
            var @select = (from c in db.EstadoDocumentos where c.Descripcion == desc select c);
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
                var seleccion = (from c in DataContext.EstadoDocumentos
                                 where c.ID == id
                                 select c);
                if (seleccion.Count() > 0)
                {
                    var item = seleccion.First();

                    DataContext.EstadoDocumentos.DeleteOnSubmit(item);
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
