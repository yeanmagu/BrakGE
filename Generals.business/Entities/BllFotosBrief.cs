using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;

namespace Generals.business.Entities
{
    public class BllFotosBrief
    {
        public int Id { get; set; }
        public int IdBrief { get; set; }
        public string Url { get; set; }


        public  int Add(BllFotosBrief obj)
        {
            var db = new DataDataContext();
            var tp = new FotosBrief();
            {
                tp.IdBrief = obj.IdBrief;
                tp.Url = obj.Url;
            };

            db.FotosBrief.InsertOnSubmit(tp);
            db.SubmitChanges();
            var firstOrDefault = db.FotosBrief.FirstOrDefault(m => m.Id == db.FotosBrief.Max(pl => pl.Id));
            if (firstOrDefault != null)
                tp.Id = firstOrDefault.Id;
            return tp.Id;
        }

        public  int Update(BllFotosBrief obj)
        {
            var db = new DataDataContext();
          
            var @select = (from c in db.FotosBrief where c.Id == obj.Id select c);

            foreach (var objGrabar in @select)
            {

                objGrabar.IdBrief = obj.IdBrief;
                objGrabar.Url = obj.Url;
            }
            db.SubmitChanges();

            return 1;
        }

        public  BllFotosBrief GetById(int Id)
        {
            var db = new DataDataContext();
            var objGrabar = new BllFotosBrief();
            var select = (from c in db.FotosBrief where c.Id == Id select c);
            if (!@select.Any()) return objGrabar;
            var obj = @select.First();
            objGrabar.Id = obj.Id;
            objGrabar.IdBrief = obj.IdBrief;
            objGrabar.Url = obj.Url;
            return objGrabar;
        }

        public  List<BllFotosBrief> ToList()
        {
            var db = new DataDataContext();
           
            var list = new List<BllFotosBrief>();
            var select = (from c in db.FotosBrief select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllFotosBrief();
                objGrabar.Id = obj.Id;
                objGrabar.IdBrief = obj.IdBrief;
                objGrabar.Url = obj.Url;

                list.Add(objGrabar);
            }

            return list;
        }
        public  List<BllFotosBrief> ToList(string something)
        {
            var db = new DataDataContext();
        
            var list = new List<BllFotosBrief>();
            var @select = (from c in db.FotosBrief
                           where c.Id.ToString().Contains(something)
                              || c.IdBrief.ToString().Contains(something) || c.Brief.Descripcion.Contains(something)
                          select c);

            foreach (var obj in @select)
            {
                var objGrabar = new BllFotosBrief();
                objGrabar.Id = obj.Id;
                objGrabar.IdBrief = obj.IdBrief;
                objGrabar.Url = obj.Url;

                list.Add(objGrabar);
            }

            return list;
        }
      
    }
}
