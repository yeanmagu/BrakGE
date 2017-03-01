using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;

namespace Generals.business.Entities
{
    public class BllModoPago
    {
        public int Id { get; set; }
        public string Descripcion { get; set; }
        public bool? Estado { get; set; }


        public  int Add(BllModoPago obj)
        {
            var db = new DataDataContext();
            var tp = new ModoPago();
            {
                tp.Descripcion = obj.Descripcion;
                tp.Estado = obj.Estado;
            };

            db.ModoPago.InsertOnSubmit(tp);
            db.SubmitChanges();
            var firstOrDefault = db.ModoPago.FirstOrDefault(m => m.Id == db.ModoPago.Max(pl => pl.Id));
            if (firstOrDefault != null)
                tp.Id = firstOrDefault.Id;
            return tp.Id;
        }

        public  int Update(BllModoPago obj)
        {
            var db = new DataDataContext();
          
            var @select = (from c in db.ModoPago where c.Id == obj.Id select c);

            foreach (var objGrabar in @select)
            {

                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.Estado = obj.Estado;
            }
            db.SubmitChanges();

            return 1;
        }

        public  BllModoPago GetById(int Id)
        {
            var db = new DataDataContext();
            var objGrabar = new BllModoPago();
            var select = (from c in db.ModoPago where c.Id == Id select c);
            if (!@select.Any()) return objGrabar;
            var obj = @select.First();
            objGrabar.Id = obj.Id;
            objGrabar.Descripcion = obj.Descripcion;
            objGrabar.Estado = obj.Estado;
            return objGrabar;
        }

        public  List<BllModoPago> ToList()
        {
            var db = new DataDataContext();
           
            var list = new List<BllModoPago>();
            var select = (from c in db.ModoPago select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllModoPago();
                objGrabar.Id = obj.Id;
                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.Estado = obj.Estado;

                list.Add(objGrabar);
            }

            return list;
        }
        public  List<BllModoPago> ToList(string something)
        {
            var db = new DataDataContext();
        
            var list = new List<BllModoPago>();
            var @select = (from c in db.ModoPago
                           where c.Id.ToString().Contains(something)
                              || c.Descripcion.Contains(something)
                          select c);

            foreach (var obj in @select)
            {
                var objGrabar = new BllModoPago();
                objGrabar.Id = obj.Id;
                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.Estado = obj.Estado;

                list.Add(objGrabar);
            }

            return list;
        }
      
    }
}
