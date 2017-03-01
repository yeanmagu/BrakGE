using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;
using System;

namespace Generals.business.Entities
{
    public class BllTipoCliente
    {
        public int Id { get; set; }
        public string Descripcion { get; set; }
        public bool Estado { get; set; }


        public static int Add(BllTipoCliente obj)
        {
            var db = new DataDataContext();
            var tp = new TipoCliente
            {
                Descripcion = obj.Descripcion,
                Estado = true
            };

            db.TipoClientes.InsertOnSubmit(tp);
            db.SubmitChanges();
            var firstOrDefault = db.TipoClientes.FirstOrDefault(m => m.ID == db.TipoClientes.Max(pl => pl.ID));
            if (firstOrDefault != null)
                tp.ID = firstOrDefault.ID;
            return tp.ID;
        }

        public static int Update(BllTipoCliente obj)
        {
            var db = new DataDataContext();

            var @select = (from c in db.TipoClientes where c.ID == obj.Id select c);

            foreach (var objGrabar in @select)
            {

                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.Estado = obj.Estado;
            }
            db.SubmitChanges();

            return 1;
        }

        public static BllTipoCliente GetById(int id)
        {
            var db = new DataDataContext();
            var objGrabar = new BllTipoCliente();
            var select = (from c in db.TipoClientes where c.ID == id select c);
            if (!@select.Any()) return objGrabar;
            var obj = @select.First();
            objGrabar.Id = obj.ID;
            objGrabar.Descripcion = obj.Descripcion;
            objGrabar.Estado = obj.Estado.Value;
            return objGrabar;
        }

        public static List<BllTipoCliente> ToList()
        {
            var db = new DataDataContext();
           
            var list = new List<BllTipoCliente>();
            var select = (from c in db.TipoClientes select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllTipoCliente();
                objGrabar.Id = obj.ID;
                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.Estado = obj.Estado.Value;

                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BllTipoCliente> ToList(string something)
        {
            var db = new DataDataContext();
            
            var list = new List<BllTipoCliente>();
            var @select = (from c in db.TipoClientes
                          where c.ID.ToString().Contains(something)
                              || c.Descripcion.Contains(something)
                          select c);

            foreach (var obj in @select)
            {
                var objGrabar = new BllTipoCliente();
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
            new TipoCliente();
            var @select = (from c in db.TipoClientes where c.Descripcion == desc select c);
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
                var seleccion = (from c in DataContext.TipoClientes
                                 where c.ID == id
                                 select c);
                if (seleccion.Count() > 0)
                {
                    var item = seleccion.First();

                    DataContext.TipoClientes.DeleteOnSubmit(item);
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
