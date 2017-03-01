using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;

namespace Generals.business.Entities
{
    public class BllInventario
    {
        public int Id { get; set; }
        public int IdItem { get; set; }
        public int CantidadAnterior { get; set; }
        
        public int CantidadDespachada { get; set; }
        public int CantidadDisponible { get; set; }
        public decimal  Precio { get; set; }
        public List<FotosItems> Url { get; set; }
        public string NombreItem { get; set; }
        public string Categoria { get; set; }
        public int IdBodega { get; set; }
        public int GrupoItem { get; set; }
        public string Codigo { get; set; }
        public string Talla { get; set; }
        public  int Add(BllInventario obj)
        {
            var db = new DataDataContext();
            var tp = new Inventario
            {
                
                IdItem = obj.IdItem,
                CantidadDespachada = obj.CantidadDespachada,
                CantidadAnterior = obj.CantidadAnterior,               
                CantidadDisponible = obj.CantidadDisponible,
                IdBodega = obj.IdBodega
            };

            db.Inventario.InsertOnSubmit(tp);
            db.SubmitChanges();
            var firstOrDefault = db.Inventario.FirstOrDefault(m => m.ID == db.Inventario.Max(pl => pl.ID));
            if (firstOrDefault != null)
                tp.ID = firstOrDefault.ID;
            return tp.ID;
        }
        public string UrlItem { get; set; }
        public  int Update(BllInventario obj)
        {
            var db = new DataDataContext();

            var @select = (from c in db.Inventario where c.ID == obj.Id select c);

            foreach (var objGrabar in @select)
            {
                objGrabar.CantidadDespachada = obj.CantidadDespachada;
                objGrabar.IdItem = obj.IdItem;
                objGrabar.CantidadAnterior = obj.CantidadAnterior;
                objGrabar.CantidadDisponible = obj.CantidadDisponible;
                IdBodega = obj.IdBodega;
            }
            db.SubmitChanges();

            return 1;
        }
        
        public  BllInventario GetById(int id)
        {
            var db = new DataDataContext();
            var objGrabar = new BllInventario();
            var select = (from c in db.Inventario where c.ID == id select c);
            if (!@select.Any()) return objGrabar;
            var obj = @select.First();
            objGrabar.Id = obj.ID;
            objGrabar.IdItem = obj.IdItem;
            objGrabar.CantidadAnterior = obj.CantidadAnterior.Value;
            objGrabar.CantidadDespachada = obj.CantidadDespachada.Value;
            objGrabar.CantidadDisponible = obj.CantidadDisponible;
            objGrabar.IdBodega = obj.IdBodega;
            return objGrabar;
        }
        public BllInventario GetBy(int id,int idBod)
        {
            var db = new DataDataContext();
            var objGrabar = new BllInventario();
            var select = (from c in db.Inventario where c.ID == id && c.IdBodega==idBod select c);
            if (!@select.Any()) return objGrabar;
            var obj = @select.First();
            objGrabar.Id = obj.ID;
            objGrabar.IdItem = obj.IdItem;
            objGrabar.CantidadAnterior = obj.CantidadAnterior.Value;
            objGrabar.CantidadDespachada = obj.CantidadDespachada.Value;
            objGrabar.CantidadDisponible = obj.CantidadDisponible;
            objGrabar.IdBodega = obj.IdBodega;
            return objGrabar;
        }
        public BllInventario GetById(int iditem,int idBodega)
        {
            var db = new DataDataContext();
            var objGrabar = new BllInventario();
            var select = (from c in db.Inventario where c.IdItem == iditem && c.IdBodega==idBodega  select c);
            if (!@select.Any()) return objGrabar;
            var obj = @select.First();
            objGrabar.Id = obj.ID;
            objGrabar.IdItem = obj.IdItem;
            objGrabar.CantidadAnterior = obj.CantidadAnterior.Value;
            objGrabar.CantidadDespachada = obj.CantidadDespachada.Value;
            objGrabar.CantidadDisponible = obj.CantidadDisponible;
            objGrabar.IdBodega = obj.IdBodega;
            return objGrabar;
        }

        public  List<BllInventario> ToList()
        {
            var db = new DataDataContext();
            
            var list = new List<BllInventario>();
            var select = (from c in db.Inventario select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllInventario();
                objGrabar.Id = obj.ID;
                objGrabar.IdItem = obj.IdItem;
                objGrabar.CantidadAnterior = obj.CantidadAnterior.Value;
                objGrabar.CantidadDespachada = obj.CantidadDespachada.Value;
                objGrabar.CantidadDisponible = obj.CantidadDisponible;
                objGrabar.IdBodega = obj.IdBodega;

                list.Add(objGrabar);
            }

            return list;
        }
        public List<BllInventario> ToListByCodigo(string codigo)
        {
            var db = new DataDataContext();

            var list = new List<BllInventario>();
            var select = (from c in db.Inventario where c.Item.Codigo==codigo
                          select c);

            foreach (var obj in select)
            {
                var objGrabar = new BllInventario();
                objGrabar.Id = obj.ID;
                objGrabar.IdItem = obj.IdItem;
                objGrabar.CantidadAnterior = obj.CantidadAnterior.Value;
                objGrabar.CantidadDespachada = obj.CantidadDespachada.Value;
                objGrabar.CantidadDisponible = obj.CantidadDisponible;
                objGrabar.IdBodega = obj.IdBodega;
                objGrabar.NombreItem = obj.Item.Descripcion;
                objGrabar.Talla = obj.Item.Talla.Descripcion;
                list.Add(objGrabar);
            }

            return list;
        }
        public  List<BllInventario> ToList(string something)
        {
            var db = new DataDataContext();
            
            var list = new List<BllInventario>();
            var @select = (from c in db.Inventario
                          where c.IdItem.ToString().Contains(something)
                              || c.Item.Codigo.Contains(something) || c.Item.Descripcion.Contains(something)
                              || c.Item.Color.Descripcion.Contains(something) ||c.Item.SubGrupo1.Grupo.Descripcion.Contains(something)
                          select c);

            foreach (var obj in @select)
            {
                var objGrabar = new BllInventario();
                objGrabar.Id = obj.ID;
                objGrabar.IdItem = obj.IdItem;
                objGrabar.CantidadAnterior = obj.CantidadAnterior.Value;
                objGrabar.CantidadDespachada = obj.CantidadDespachada.Value;
                objGrabar.CantidadDisponible = obj.CantidadDisponible;
                objGrabar.IdBodega = obj.IdBodega;
                list.Add(objGrabar);
            }

            return list;
        }
        public  bool ExisteDescri(int desc)
        {
            var db = new DataDataContext();
            new Inventario();
            var @select = (from c in db.Inventario where c.IdItem == desc select c);
            if (@select.Any())
            {
                return true;
            }
            else
            {
                return false;
            }

        }
        public List<BllInventario> ToListIndex()
        {
            var db = new DataDataContext();

            var list = new List<BllInventario>();
            var select = (from c in db.Inventario select c).GroupBy(test => test.Item.Codigo).Select(grp => grp.First()).ToList();

            foreach (var obj in select)
            {
                var objGrabar = new BllInventario();
                objGrabar.Id = obj.ID;
                objGrabar.IdItem = obj.IdItem;
                objGrabar.CantidadAnterior = obj.CantidadAnterior.Value;
                objGrabar.CantidadDespachada = obj.CantidadDespachada.Value;
                objGrabar.CantidadDisponible += (from c in db.Inventario where c.Item.Codigo == obj.Item.Codigo select c.CantidadDisponible).Sum();
                objGrabar.IdBodega = obj.IdBodega;
                objGrabar.NombreItem = obj.Item.Descripcion ;
                objGrabar.Precio = obj.Item.Precio;
               objGrabar.Codigo=obj.Item.Codigo;
                objGrabar.Talla=obj.Item.Talla.Descripcion;
                objGrabar.Categoria = obj.Item.SubGrupo1.Grupo.Descripcion;
                var urls= (from c in db.FotosItems where c.IdItem==obj.Item.ID select c).ToList();
                if (urls.Count()>0)
                {
                    objGrabar.UrlItem = urls.First().Url;
                    objGrabar.Url = obj.Item.FotosItems.ToList();
                }
              
                objGrabar.GrupoItem = obj.Item.SubGrupo1.Grupo.ID;
                list.Add(objGrabar);
            }

            return list;
        }
        public BllInventario GetByIdItem(int id)
        {
            var db = new DataDataContext();
            var objGrabar = new BllInventario();
            var select = (from c in db.Inventario where c.IdItem == id select c);
            if (!@select.Any()) return objGrabar;
            var obj = @select.First();
            objGrabar.Id = obj.ID;
            objGrabar.IdItem = obj.IdItem;
            objGrabar.CantidadAnterior = obj.CantidadAnterior.Value;
            objGrabar.CantidadDespachada = obj.CantidadDespachada.Value;
            objGrabar.CantidadDisponible = obj.CantidadDisponible;
            objGrabar.NombreItem = obj.Item.Descripcion + " " + obj.Item.Color.Descripcion;
            objGrabar.Precio = obj.Item.Precio;
            objGrabar.Categoria = obj.Item.SubGrupo1.Grupo.Descripcion;
            var urls = (from c in db.FotosItems where c.IdItem == obj.Item.ID select c).ToList();
            if (urls.Count() > 0)
            {
                objGrabar.UrlItem = urls.First().Url;
                objGrabar.Url = obj.Item.FotosItems.ToList();
            }

            objGrabar.GrupoItem = obj.Item.SubGrupo1.Grupo.ID;
            return objGrabar;
        }
        public List<BllInventario> ToListIndex(int cat)
        {
            var db = new DataDataContext();

            var list = new List<BllInventario>();
            var select = (from c in db.Inventario where c.Item.SubGrupo1.Grupo.ID == cat select c).GroupBy(test => test.Item.Codigo).Select(grp => grp.First()).ToList(); ;

            foreach (var obj in select)
            {
                var objGrabar = new BllInventario();
                objGrabar.Id = obj.ID;
                objGrabar.IdItem = obj.IdItem;
                objGrabar.CantidadAnterior = obj.CantidadAnterior.Value;
                objGrabar.CantidadDespachada = obj.CantidadDespachada.Value;
                objGrabar.CantidadDisponible += (from c in db.Inventario where c.Item.Codigo == obj.Item.Codigo select c.CantidadDisponible).Sum();
                objGrabar.IdBodega = obj.IdBodega;
                objGrabar.Codigo = obj.Item.Codigo;
                objGrabar.Talla = obj.Item.Talla.Descripcion;
                objGrabar.NombreItem=obj.Item.Descripcion;
                objGrabar.Precio=obj.Item.Precio;
                var urls = (from c in db.FotosItems where c.IdItem == obj.Item.ID select c).ToList();
                if (urls.Count() > 0)
                {
                    objGrabar.UrlItem = urls.First().Url;
                    objGrabar.Url = obj.Item.FotosItems.ToList();
                }
                objGrabar.GrupoItem=obj.Item.SubGrupo1.Grupo.ID;
                objGrabar.Categoria=obj.Item.SubGrupo1.Grupo.Descripcion;
                list.Add(objGrabar);
            }

            return list;
        }
        public List<BllInventario> ToListIndexSub(int cat)
        {
            var db = new DataDataContext();

            var list = new List<BllInventario>();
            var select = (from c in db.Inventario where c.Item.Subgrupo == cat select c).GroupBy(test => test.Item.Codigo).Select(grp => grp.First()).ToList(); ;

            foreach (var obj in select)
            {
                var objGrabar = new BllInventario();
                objGrabar.Id = obj.ID;
                objGrabar.IdItem = obj.IdItem;
                objGrabar.CantidadAnterior = obj.CantidadAnterior.Value;
                objGrabar.CantidadDespachada = obj.CantidadDespachada.Value;
                objGrabar.CantidadDisponible += (from c in db.Inventario where c.Item.Codigo == obj.Item.Codigo select c.CantidadDisponible).Sum();
                objGrabar.IdBodega = obj.IdBodega;
                objGrabar.Codigo = obj.Item.Codigo;
                objGrabar.Talla = obj.Item.Talla.Descripcion;
                objGrabar.NombreItem = obj.Item.Descripcion;
                objGrabar.Precio = obj.Item.Precio;
                var urls = (from c in db.FotosItems where c.IdItem == obj.Item.ID select c).ToList();
                if (urls.Count() > 0)
                {
                    objGrabar.UrlItem = urls.First().Url;
                    objGrabar.Url = obj.Item.FotosItems.ToList();
                }
                objGrabar.GrupoItem = obj.Item.SubGrupo1.Grupo.ID;
                objGrabar.Categoria = obj.Item.SubGrupo1.Grupo.Descripcion;
                list.Add(objGrabar);
            }

            return list;
        }
        public List<BllInventario> ToListBySomething(string something)
        {
            var db = new DataDataContext();

            var list = new List<BllInventario>();
            var select = (from c in db.Inventario
                          where c.IdItem.ToString().Contains(something)
                              || c.Item.Codigo.Contains(something) || c.Item.Descripcion.Contains(something)
                              || c.Item.Color.Descripcion.Contains(something) || c.Item.SubGrupo1.Grupo.Descripcion.Contains(something)
                          select c).GroupBy(test => test.Item.Codigo).Select(grp => grp.First()).ToList();

            foreach (var obj in select)
            {
                var objGrabar = new BllInventario();
                objGrabar.Id = obj.ID;
                objGrabar.IdItem = obj.IdItem;
                objGrabar.CantidadAnterior = obj.CantidadAnterior.Value;
                objGrabar.CantidadDespachada = obj.CantidadDespachada.Value;
                //objGrabar.CantidadDisponible = obj.CantidadDisponible;
                objGrabar.CantidadDisponible +=(from c in db.Inventario where c.Item.Codigo==obj.Item.Codigo select c.CantidadDisponible).Sum();
                objGrabar.IdBodega = obj.IdBodega;
                objGrabar.NombreItem = obj.Item.Descripcion;
                objGrabar.Precio = obj.Item.Precio;
                objGrabar.Codigo = obj.Item.Codigo;
                objGrabar.Talla = obj.Item.Talla.Descripcion;
                objGrabar.Categoria = obj.Item.SubGrupo1.Grupo.Descripcion;
                var urls = (from c in db.FotosItems where c.IdItem == obj.Item.ID select c).ToList();
                if (urls.Count() > 0)
                {
                    objGrabar.UrlItem = urls.First().Url;
                    objGrabar.Url = obj.Item.FotosItems.ToList();
                }

                objGrabar.GrupoItem = obj.Item.SubGrupo1.Grupo.ID;
                list.Add(objGrabar);
            }

            return list;
        }
    }
}
