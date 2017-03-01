using System;
using System.Linq;
using Generals.business.Data;
using System.Collections.Generic;
namespace Generals.business.Entities
{
    public class SubEstadosPenal
    {
        public int ID { get; set; }
        public string Descripcion { get; set; }
        public bool Estado { get; set; }
        public int IdEstadoPenal { get; set; }
        public string EstadoPenal { get; set; }

        public int Add(SubEstadosPenal obj)
        {
            DataDataContext db = new DataDataContext();
            Data.SubEstadosPenal ObjGrabar = new Data.SubEstadosPenal();  
         
            ObjGrabar.Descripcion = obj.Descripcion;
            ObjGrabar.Estado = obj.Estado;
            ObjGrabar.IdEstadoPenal = obj.IdEstadoPenal;  
            try
            {
                db.SubEstadosPenal.InsertOnSubmit(ObjGrabar);
                db.SubmitChanges();
            }
            catch (Exception ex)
            {

                throw ex;
            }

            ObjGrabar.ID = db.SubEstadosPenal.Where(m => m.ID == db.SubEstadosPenal.Max(pl => pl.ID)).FirstOrDefault().ID;
            return ObjGrabar.ID;
        }

        public int Update(SubEstadosPenal obj)
        {
            DataDataContext db = new DataDataContext();
            Data.SubEstadosPenal ObjGrabar = new Data.SubEstadosPenal();

            var Select = (from c in db.SubEstadosPenal where c.ID == obj.ID select c);

            if (Select.Count() > 0)
            {
                                    
                ObjGrabar.Descripcion = obj.Descripcion;
                ObjGrabar.Estado = obj.Estado;
                ObjGrabar.IdEstadoPenal = obj.IdEstadoPenal;
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

        public SubEstadosPenal GetByID(int ID)
        {
            DataDataContext db = new DataDataContext();
            SubEstadosPenal ObjGrabar = new SubEstadosPenal();
            var Select = (from c in db.SubEstadosPenal where c.ID == ID select c);
            if (Select.Count() > 0)
            {
                var obj = Select.First();
                ObjGrabar.ID = obj.ID;
                ObjGrabar.Descripcion = obj.Descripcion;
                ObjGrabar.Estado = obj.Estado;
                ObjGrabar.IdEstadoPenal = obj.IdEstadoPenal;

            }
            return ObjGrabar;
        }

        public List<SubEstadosPenal> ToList()
        {
           
            DataDataContext db = new DataDataContext();
            List<SubEstadosPenal> List = new List<SubEstadosPenal>();
            var Select = (from c in db.SubEstadosPenal  select c);

            foreach (var obj in Select)
            {
                SubEstadosPenal ObjGrabar = new SubEstadosPenal();
                ObjGrabar.Descripcion = obj.Descripcion;
                ObjGrabar.Estado = obj.Estado;
                ObjGrabar.IdEstadoPenal = obj.IdEstadoPenal;
                ObjGrabar.EstadoPenal = obj.EstadosPenal.Descripcion;
                List.Add(ObjGrabar);
            }

            return List;
        }
        public List<SubEstadosPenal> ToList(string Something)
        {
            DataDataContext db = new DataDataContext();
            List<SubEstadosPenal> List = new List<SubEstadosPenal>();
            var Select = (from c in db.SubEstadosPenal where c.ID.ToString().Contains(Something) 
                          || c.Descripcion.Contains(Something) || c.EstadosPenal.Descripcion.Contains(Something)
                          select c);

            foreach (var obj in Select)
            {
                SubEstadosPenal ObjGrabar = new SubEstadosPenal();
                ObjGrabar.Descripcion = obj.Descripcion;
                ObjGrabar.Estado = obj.Estado;
                ObjGrabar.IdEstadoPenal = obj.IdEstadoPenal;
                ObjGrabar.EstadoPenal = obj.EstadosPenal.Descripcion;
                List.Add(ObjGrabar);
            }

            return List;
                          
        }
    }
}
