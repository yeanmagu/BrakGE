using System;
using System.Linq;
using Generals.business.Data;
using System.Collections.Generic;

namespace Generals.business.Entities
{
    public class AnotacionActaPenal
    {
        public int ID { get; set; }
        public int Acta { get; set; }
        public string Notas { get; set; }
        public int EstadoPenal { get; set; }
        public bool Estado { get; set; }
        public string Usuario { get; set; }
        public int SubEstadoPenal { get; set; }
        public String DescPenal { get; set; }
        public string DescSub { get; set; }

        public int Add(AnotacionActaPenal obj )
        {
            DataDataContext db = new DataDataContext();
            Data.AnotacionActaPenal ObjGrabar = new Data.AnotacionActaPenal();

            ObjGrabar.Acta = obj.Acta;
            ObjGrabar.EstadoPenal = obj.EstadoPenal;
            ObjGrabar.SubEstadoPenal = obj.SubEstadoPenal;
            ObjGrabar.Usuario = obj.Usuario;
            ObjGrabar.Notas = obj.Notas;
            try
            {
                db.AnotacionActaPenal.InsertOnSubmit(ObjGrabar);
                db.SubmitChanges();
            }
            catch (Exception ex)
            {

                throw ex;
            }
          
            ObjGrabar.ID = db.AnotacionActaPenal.Where(m => m.ID == db.AnotacionActaPenal.Max(pl => pl.ID)).FirstOrDefault().ID;
            return ObjGrabar.ID;
            
        }

        public int Update(AnotacionActaPenal obj)
        {
            DataDataContext db = new DataDataContext();
            Data.AnotacionActaPenal ObjGrabar = new Data.AnotacionActaPenal();

            var Select = (from c in db.AnotacionActaPenal where c.ID == obj.ID select c);

            if (Select.Count() > 0)
            {

                ObjGrabar.Acta = obj.Acta;
                ObjGrabar.EstadoPenal = obj.EstadoPenal;
                ObjGrabar.SubEstadoPenal = obj.SubEstadoPenal;
                ObjGrabar.Usuario = obj.Usuario;
                ObjGrabar.Notas = obj.Notas;
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

        public AnotacionActaPenal GetByID(int ID)
        {
            DataDataContext db = new DataDataContext();
            AnotacionActaPenal ObjGrabar = new AnotacionActaPenal();
            var Select = (from c in db.AnotacionActaPenal where c.ID == ID select c);
            if (Select.Count()>0)
            {
                var obj = Select.First();
                ObjGrabar.ID = obj.ID;
                ObjGrabar.Acta = obj.Acta;
                ObjGrabar.EstadoPenal = obj.EstadoPenal.Value;
                ObjGrabar.SubEstadoPenal = obj.SubEstadoPenal;
                ObjGrabar.Usuario = obj.Usuario;
                ObjGrabar.Notas = obj.Notas;
                ObjGrabar.Estado = obj.Estado.Value;
                
            }
            return ObjGrabar;
        }

        public List<AnotacionActaPenal> ToList()
        {
            DataDataContext db = new DataDataContext();
            List<AnotacionActaPenal> List = new List<AnotacionActaPenal>();
          
            var Select = (from c in db.AnotacionActaPenal 
                          select new
                            {
                               c.ID,c.Notas,c.EstadoPenal,
                               c.EstadosPenal.Descripcion,
                               c.SubEstadoPenal,Sub=c.SubEstadosPenal.Descripcion,
                               c.Acta,
                               c.Estado,c.Usuario
                            });
            if (Select.Count() > 0)
            {
                foreach (var obj in Select)
                {
                    AnotacionActaPenal ObjGrabar = new AnotacionActaPenal();
                    ObjGrabar.ID = obj.ID;
                    ObjGrabar.Acta = obj.Acta;
                    ObjGrabar.EstadoPenal = obj.EstadoPenal.Value;
                    ObjGrabar.SubEstadoPenal = obj.SubEstadoPenal;
                    ObjGrabar.Usuario = obj.Usuario;
                    ObjGrabar.Notas = obj.Notas;
                    ObjGrabar.Estado = obj.Estado.Value;
                    ObjGrabar.DescPenal = obj.Descripcion;
                    ObjGrabar.DescSub = obj.Sub;
                    try
                    {
                        List.Add(ObjGrabar);
                    }
                    catch (Exception ex)
                    {

                        throw ex;
                    }

                }
                
              

            }
            return List;
        }
        public List<AnotacionActaPenal> ToList(string SomeThing)
        {
            DataDataContext db = new DataDataContext();
            List<AnotacionActaPenal> List = new List<AnotacionActaPenal>();  
            var Select = (from c in db.AnotacionActaPenal
                          where c.ID.ToString().Contains(SomeThing) || c.Acta.ToString().Contains(SomeThing)
                          || c.EstadosPenal.Descripcion.Contains(SomeThing)    || c.SubEstadosPenal.Descripcion.Contains(SomeThing)

                          select new
                          {
                              c.ID,
                              c.Notas,
                              c.EstadoPenal,
                              c.EstadosPenal.Descripcion,
                              c.SubEstadoPenal,
                              Sub = c.SubEstadosPenal.Descripcion,
                              c.Acta,
                              c.Estado,
                              c.Usuario
                          });
            if (Select.Count() > 0)
            {
                foreach (var obj in Select)
                {
                    AnotacionActaPenal ObjGrabar = new AnotacionActaPenal();
                    ObjGrabar.ID = obj.ID;
                    ObjGrabar.Acta = obj.Acta;
                    ObjGrabar.EstadoPenal = obj.EstadoPenal.Value;
                    ObjGrabar.SubEstadoPenal = obj.SubEstadoPenal;
                    ObjGrabar.Usuario = obj.Usuario;
                    ObjGrabar.Notas = obj.Notas;
                    ObjGrabar.Estado = obj.Estado.Value;
                    ObjGrabar.DescPenal = obj.Descripcion;
                    ObjGrabar.DescSub = obj.Sub;
                    try
                    {
                        List.Add(ObjGrabar);
                    }
                    catch (Exception ex)
                    {

                        throw ex;
                    }
                   
                }



            }
            return List;
        }
    }
}
