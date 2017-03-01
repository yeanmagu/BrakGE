using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;

namespace Generals.business.Entities
{
    public class BllFormaPagoPendientes
    {
        public int Id { get; set; }
        public string Descripcion { get; set; }
        public int DiasPago { get; set; }
        public bool? Estado { get; set; }


        public  int Add(BllFormaPagoPendientes obj)
        {
            var db = new DataDataContext();
            var tp = new FormaPagoPendientes();
            {
                tp.DiasPago=obj.DiasPago;
                tp.Descripcion = obj.Descripcion;
                tp.Estado = obj.Estado;
            };

            db.FormaPagoPendientes.InsertOnSubmit(tp);
            db.SubmitChanges();
            var firstOrDefault = db.FormaPagoPendientes.FirstOrDefault(m => m.Id == db.FormaPagoPendientes.Max(pl => pl.Id));
            if (firstOrDefault != null)
                tp.Id = firstOrDefault.Id;
            return tp.Id;
        }

        public  int Update(BllFormaPagoPendientes obj)
        {
            var db = new DataDataContext();
          
            var @select = (from c in db.FormaPagoPendientes where c.Id == obj.Id select c);

            foreach (var objGrabar in @select)
            {

                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.Estado = obj.Estado;
                objGrabar.DiasPago = obj.DiasPago;
            }
            db.SubmitChanges();

            return 1;
        }

        public  BllFormaPagoPendientes GetById(int Id)
        {
            var db = new DataDataContext();
            var objGrabar = new BllFormaPagoPendientes();
            var select = (from c in db.FormaPagoPendientes where c.Id == Id select c);
            if (!@select.Any()) return objGrabar;
            var obj = @select.First();
            objGrabar.Id = obj.Id;
            objGrabar.Descripcion = obj.Descripcion;
            objGrabar.DiasPago = obj.DiasPago.Value;
            objGrabar.Estado = obj.Estado;
            return objGrabar;
        }

        public  List<BllFormaPagoPendientes> ToList()
        {
            var db = new DataDataContext();
           
            var list = new List<BllFormaPagoPendientes>();
            var select = (from c in db.FormaPagoPendientes select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllFormaPagoPendientes();
                objGrabar.Id = obj.Id;
                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.Estado = obj.Estado;
                objGrabar.DiasPago = obj.DiasPago.Value;
                list.Add(objGrabar);
            }

            return list;
        }
        public  List<BllFormaPagoPendientes> ToList(string something)
        {
            var db = new DataDataContext();
        
            var list = new List<BllFormaPagoPendientes>();
            var @select = (from c in db.FormaPagoPendientes
                           where c.Id.ToString().Contains(something)
                              || c.Descripcion.Contains(something)
                          select c);

            foreach (var obj in @select)
            {
                var objGrabar = new BllFormaPagoPendientes();
                objGrabar.Id = obj.Id;
                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.Estado = obj.Estado;
                objGrabar.DiasPago = obj.DiasPago.Value;
                list.Add(objGrabar);
            }

            return list;
        }
      
    }
}
