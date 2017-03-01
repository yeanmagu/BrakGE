using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;

namespace Generals.business.Entities
{
    public class BllSubGrupo
    {
        public int Id { get; set; }
        public string Descripcion { get; set; }
        public bool Estado { get; set; }
        public int Idgrupo { get; set; }

        public string Grupo { get; set; }

        public static int Add(BllSubGrupo obj)
        {
            var db = new DataDataContext();
            var tp = new SubGrupo
            {
                IdGrupo = obj.Idgrupo,
                Descripcion = obj.Descripcion,
                Estado = true
            };

            db.SubGrupos.InsertOnSubmit(tp);
            db.SubmitChanges();
            var firstOrDefault = db.SubGrupos.FirstOrDefault(m => m.ID == db.SubGrupos.Max(pl => pl.ID));
            if (firstOrDefault != null)
                tp.ID = firstOrDefault.ID;
            return tp.ID;
        }

        public static int Update(BllSubGrupo obj)
        {
            var db = new DataDataContext();
            var @select = (from c in db.SubGrupos where c.ID == obj.Id select c);

            foreach (var objGrabar in @select)
            {
                objGrabar.IdGrupo = obj.Idgrupo;
                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.Estado = obj.Estado;
            }
            db.SubmitChanges();

            return 1;
        }

        public static BllSubGrupo GetById(int id)
        {
            var db = new DataDataContext();
            var objGrabar = new BllSubGrupo();
            var select = (from c in db.SubGrupos where c.ID == id select c);
            if (!@select.Any()) return objGrabar;
            var obj = @select.First();
            objGrabar.Id = obj.ID;
            objGrabar.Idgrupo = obj.IdGrupo.Value;
            objGrabar.Descripcion = obj.Descripcion;
            objGrabar.Estado = obj.Estado.Value;
            objGrabar.Grupo = obj.Grupo.Descripcion;
            return objGrabar;
        }
        public static List<BllSubGrupo> ToListByGrupo(int idGrupo)
        {
            var db = new DataDataContext();

            var list = new List<BllSubGrupo>();
            var select = (from c in db.SubGrupos where c.IdGrupo==idGrupo select c );

            foreach (var obj in select)
            {
                var objGrabar = new BllSubGrupo();
                objGrabar.Id = obj.ID;
                objGrabar.Idgrupo = obj.IdGrupo.Value;
                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.Estado = obj.Estado.Value;
                objGrabar.Grupo = obj.Grupo.Descripcion;

                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BllSubGrupo> ToList()
        {
            var db = new DataDataContext();
          
            var list = new List<BllSubGrupo>();
            var select = (from c in db.SubGrupos select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllSubGrupo();
                objGrabar.Id = obj.ID;
                objGrabar.Idgrupo = obj.IdGrupo.Value;
                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.Estado = obj.Estado.Value;
                objGrabar.Grupo = obj.Grupo.Descripcion;

                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BllSubGrupo> ToList(string something)
        {
            var db = new DataDataContext();
          
            var list = new List<BllSubGrupo>();
            var @select = (from c in db.SubGrupos
                          where c.ID.ToString().Contains(something)
                              || c.Descripcion.Contains(something)
                          select c);

            foreach (var obj in @select)
            {
                var objGrabar = new BllSubGrupo();
                objGrabar.Id = obj.ID;
                objGrabar.Idgrupo = obj.IdGrupo.Value;
                objGrabar.Descripcion = obj.Descripcion;
                objGrabar.Estado = obj.Estado.Value;
                objGrabar.Grupo = obj.Grupo.Descripcion;

                list.Add(objGrabar);
            }

            return list;
        }
        public static bool ExisteDescri(string desc,int grupo)
        {
            var db = new DataDataContext();
            new SubGrupo();
            var @select = (from c in db.SubGrupos where c.Descripcion == desc && c.IdGrupo==grupo select c);
            if (@select.Any())
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
