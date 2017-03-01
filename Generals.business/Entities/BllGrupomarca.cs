using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;

namespace Generals.business.Entities
{
    public class BllGrupomarca
    {
        public int IdGrupo { get; set; }
        public int IdMarca { get; set; }
        public string Grupo { get; set; }
        public string Marca { get; set; }


        public static int Add(BllGrupomarca obj)
        {
            var db = new DataDataContext();
            var tp = new GrupoMarca();
            {
                tp.IDGrupo = obj.IdGrupo;
                tp.IDMarca = obj.IdMarca;
            };

           
            return 1;
        }

        public static int Delete(BllGrupomarca obj)
        {
            var db = new DataDataContext();
            var objGrabar = new BllGrupomarca();

            var @select = (db.GrupoMarcas.Single(marca => marca.IDMarca == obj.IdMarca && marca.IDGrupo == obj.IdGrupo));

            db.GrupoMarcas.DeleteOnSubmit(@select);
            db.SubmitChanges();

            return 1;
        }

        public static BllGrupomarca GetById(BllGrupomarca id)
        {
            var db = new DataDataContext();
            var objGrabar = new BllGrupomarca();
            var select = (from c in db.GrupoMarcas where c.IDMarca == id.IdMarca && c.IDGrupo==id.IdGrupo select c);
            if (!@select.Any()) return objGrabar;
            var obj = @select.First();
            objGrabar.IdMarca = obj.IDMarca;
            objGrabar.IdGrupo = obj.IDGrupo;
            objGrabar.Marca = obj.Marca.Descripcion;
            objGrabar.Grupo = obj.Grupo.Descripcion;
            return objGrabar;
        }

        public static List<BllGrupomarca> ToList()
        {
            var db = new DataDataContext();
           
            var list = new List<BllGrupomarca>();
            var select = (from c in db.GrupoMarcas select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllGrupomarca();
                objGrabar.IdMarca = obj.IDMarca;
                objGrabar.IdGrupo = obj.IDGrupo;
                objGrabar.Marca = obj.Marca.Descripcion;
                objGrabar.Grupo = obj.Grupo.Descripcion;

                list.Add(objGrabar);
            }

            return list;
        }
        public static List<BllGrupomarca> ToList(int something)
        {
            var db = new DataDataContext();
         
            var list = new List<BllGrupomarca>();
            var @select = (from c in db.GrupoMarcas
                          where c.IDMarca==(something)
                          select c);

            foreach (var obj in @select)
            {
                var objGrabar = new BllGrupomarca();
                objGrabar.IdMarca = obj.IDMarca;
                objGrabar.IdGrupo = obj.IDGrupo;
                objGrabar.Marca = obj.Marca.Descripcion;
                objGrabar.Grupo = obj.Grupo.Descripcion;

                list.Add(objGrabar);
            }

            return list;
        }
        public static bool ExisteDescri(BllGrupomarca desc)
        {
            var db = new DataDataContext();
            new BllGrupomarca();
            var @select = (from c in db.GrupoMarcas where c.IDMarca == desc.IdMarca && c.IDGrupo==desc.IdGrupo select c);
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
