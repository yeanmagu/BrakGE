using System;
using System.Linq;
using Generals.business.Data;
using System.Collections.Generic;
namespace Generals.business.Entities
{
    public class EstadoPenal
    {
        public int ID { get; set; }
        public string Descripcion { get; set; }
        public bool Estado { get; set; }
        List<EstadoPenal> ListEstadoPenal= new  List<EstadoPenal>();
        public static  int Add(EstadoPenal obj)
        {
            DataDataContext db = new DataDataContext();
            Data.EstadosPenal ObjGrabar = new Data.EstadosPenal();  
         
            ObjGrabar.Descripcion = obj.Descripcion;
            ObjGrabar.Estado = obj.Estado;
            try
            {
                db.EstadosPenal.InsertOnSubmit(ObjGrabar);
                db.SubmitChanges();
            }
            catch (Exception ex)
            {

                throw ex;
            }

            ObjGrabar.ID = db.EstadosPenal.Where(m => m.ID == db.EstadosPenal.Max(pl => pl.ID)).FirstOrDefault().ID;
            return ObjGrabar.ID;
        }

        public static int Update(EstadoPenal obj)
        {
            DataDataContext db = new DataDataContext();
            Data.EstadosPenal ObjGrabar = new Data.EstadosPenal();

            var Select = (from c in db.EstadosPenal where c.ID == obj.ID select c);

            if (Select.Count() > 0)
            {
                                    
                ObjGrabar.Descripcion = obj.Descripcion;
                ObjGrabar.Estado = obj.Estado;   
            }
            try
            {
                db.SubmitChanges();
            }
            catch (Exception ex)
            {

                throw ex;
            }

            return 1;
        }

        public static EstadoPenal GetByID(int ID)
        {
            DataDataContext db = new DataDataContext();
            EstadoPenal ObjGrabar = new EstadoPenal();
            var Select = (from c in db.EstadosPenal where c.ID == ID select c);
            if (Select.Count() > 0)
            {
                var obj = Select.First();
                ObjGrabar.ID = obj.ID;
                ObjGrabar.Descripcion = obj.Descripcion;
                ObjGrabar.Estado = obj.Estado;
              

            }
            return ObjGrabar;
        }

        public static List<EstadoPenal> ToList()
        {
            DataDataContext db = new DataDataContext();
            EstadoPenal ObjGrabar = new EstadoPenal();
            List<EstadoPenal> List = new List<EstadoPenal>();
            var Select = (from c in db.EstadosPenal  select c);

            foreach (var obj in Select)
            {
                ObjGrabar.ID = obj.ID;
                ObjGrabar.Descripcion = obj.Descripcion;
                ObjGrabar.Estado = obj.Estado;
                
                List.Add(ObjGrabar);
            }

            return List;
        }
        public static List<EstadoPenal> ToList(string Something)
        {
            DataDataContext db = new DataDataContext();
            EstadoPenal ObjGrabar = new EstadoPenal();
            List<EstadoPenal> List = new List<EstadoPenal>();
            var Select = (from c in db.EstadosPenal where c.ID.ToString().Contains(Something) 
                          || c.Descripcion.Contains(Something) select c);

            foreach (var obj in Select)
            {
                ObjGrabar.ID = obj.ID;
                ObjGrabar.Descripcion = obj.Descripcion;
                ObjGrabar.Estado = obj.Estado;

                List.Add(ObjGrabar);
            }

            return List;
        }
        public  static bool ExisteDescri(string Desc)
        {
            DataDataContext db = new DataDataContext();
            EstadoPenal ObjGrabar = new EstadoPenal();
            var Select = (from c in db.EstadosPenal where c.Descripcion == Desc select c);
            if (Select.Count() > 0)
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
