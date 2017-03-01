using System;
using System.Linq;
using Generals.business.Data;
using System.Collections.Generic;

namespace Generals.business.Entities
{
    public class DocumentosPenal
    {
        public int ID { get; set; }
        public int Acta { get; set; }
        public string Usuario { get; set; }
        public string url { get; set; }
        public DateTime FechaModificacion { get; set; }
        public bool Estado { get; set; }

        public int Add(DocumentosPenal obj)
        {
            DataDataContext db = new DataDataContext();
            Data.DocumentosPenal ObjGrabar = new Data.DocumentosPenal();
            ObjGrabar.Acta = obj.Acta;
            ObjGrabar.Usuario = obj.Usuario;
            ObjGrabar.Url = obj.url;
            try
            {
                db.DocumentosPenal.InsertOnSubmit(ObjGrabar);
                db.SubmitChanges();
            }
            catch (Exception ex)
            {

                throw ex;
            }

            ObjGrabar.ID = db.DocumentosPenal.Where(m => m.ID == db.DocumentosPenal.Max(pl => pl.ID)).FirstOrDefault().ID;
            return ObjGrabar.ID;
        }

        public int Update(DocumentosPenal obj)
        {
            DataDataContext db = new DataDataContext();
            Data.DocumentosPenal ObjGrabar = new Data.DocumentosPenal();

            var Select = (from c in db.DocumentosPenal where c.ID == obj.ID select c);

            if (Select.Count() > 0)
            {

                ObjGrabar.Usuario = obj.Usuario;
                ObjGrabar.Estado = obj.Estado;
                ObjGrabar.Url = obj.url;
                ObjGrabar.FechaModificacion = DateTime.Now;;
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

        public DocumentosPenal GetByID(int ID)
        {
            DataDataContext db = new DataDataContext();
            DocumentosPenal ObjGrabar = new DocumentosPenal();
            var Select = (from c in db.DocumentosPenal where c.ID == ID select c);
            if (Select.Count() > 0)
            {
                var obj = Select.First();
                ObjGrabar.ID = obj.ID;
                ObjGrabar.url = obj.Url;
                ObjGrabar.Acta = obj.Acta;
                ObjGrabar.Estado = obj.Estado.Value;
                ObjGrabar.FechaModificacion = obj.FechaModificacion;

            }
            return ObjGrabar;
        }

        public List<DocumentosPenal> ToList()
        {

            DataDataContext db = new DataDataContext();
            List<DocumentosPenal> List = new List<DocumentosPenal>();
            var Select = (from c in db.DocumentosPenal select c);

            foreach (var obj in Select)
            {
                DocumentosPenal ObjGrabar = new DocumentosPenal();
                ObjGrabar.ID = obj.ID;
                ObjGrabar.Estado = obj.Estado.Value;
                ObjGrabar.Acta = obj.Acta;
                ObjGrabar.FechaModificacion = obj.FechaModificacion;
                List.Add(ObjGrabar);
            }

            return List;
        }
        public List<DocumentosPenal> ToList(int idActa)
        {
            DataDataContext db = new DataDataContext();
            List<DocumentosPenal> List = new List<DocumentosPenal>();
            var Select = (from c in db.DocumentosPenal
                          where c.Acta==idActa
                          select c);

            foreach (var obj in Select)
            {
                DocumentosPenal ObjGrabar = new DocumentosPenal();
                ObjGrabar.ID = obj.ID;
                ObjGrabar.url = obj.Url;
                ObjGrabar.Acta = obj.Acta;
                ObjGrabar.Estado = obj.Estado.Value;
                ObjGrabar.FechaModificacion = obj.FechaModificacion;
                List.Add(ObjGrabar);
            }

            return List;

        }
    }
}
