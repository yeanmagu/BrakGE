using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;

namespace Generals.business.Entities
{
    public class BllFotosItems
    {
        public int Id { get; set; }
        public int IdItem { get; set; }
        public string Url { get; set; }


        public  int Add(BllFotosItems obj)
        {
            var db = new DataDataContext();
            var tp = new FotosItems();
            {
                tp.IdItem = obj.IdItem;
                tp.Url = obj.Url;
            };

            db.FotosItems.InsertOnSubmit(tp);
            db.SubmitChanges();
            var firstOrDefault = db.FotosItems.FirstOrDefault(m => m.ID == db.FotosItems.Max(pl => pl.ID));
            if (firstOrDefault != null)
                tp.ID = firstOrDefault.ID;
            return tp.ID;
        }

        public  int Update(BllFotosItems obj)
        {
            var db = new DataDataContext();
          
            var @select = (from c in db.FotosItems where c.ID == obj.Id select c);

            foreach (var objGrabar in @select)
            {

                objGrabar.IdItem = obj.IdItem;
                objGrabar.Url = obj.Url;
            }
            db.SubmitChanges();

            return 1;
        }

        public  BllFotosItems GetById(int id)
        {
            var db = new DataDataContext();
            var objGrabar = new BllFotosItems();
            var select = (from c in db.FotosItems where c.ID == id select c);
            if (!@select.Any()) return objGrabar;
            var obj = @select.First();
            objGrabar.Id = obj.ID;
            objGrabar.IdItem = obj.IdItem.Value;
            objGrabar.Url = obj.Url;
            return objGrabar;
        }

        public  List<BllFotosItems> ToList()
        {
            var db = new DataDataContext();
           
            var list = new List<BllFotosItems>();
            var select = (from c in db.FotosItems select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllFotosItems();
                objGrabar.Id = obj.ID;
                objGrabar.IdItem = obj.IdItem.Value;
                objGrabar.Url = obj.Url;

                list.Add(objGrabar);
            }

            return list;
        }
        public  List<BllFotosItems> ToList(string something)
        {
            var db = new DataDataContext();
        
            var list = new List<BllFotosItems>();
            var @select = (from c in db.FotosItems
                           where c.ID.ToString().Contains(something)
                              || c.IdItem.ToString().Contains(something) || c.Item.Descripcion.Contains(something)
                          select c);

            foreach (var obj in @select)
            {
                var objGrabar = new BllFotosItems();
                objGrabar.Id = obj.ID;
                objGrabar.IdItem = obj.IdItem.Value;
                objGrabar.Url = obj.Url;

                list.Add(objGrabar);
            }

            return list;
        }
      
    }
}
