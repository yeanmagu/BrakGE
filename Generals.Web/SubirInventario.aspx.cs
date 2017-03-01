using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business;
using Generals.business.Entities;
using System.IO;
namespace BrakGeWeb
{
    public partial class SubirInventario : PaginaBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        List<string[]> lista = new List<string[]>();
        protected void Subir_ServerClick(object sender, EventArgs e)
        {
            try
            {
                Boolean fileOK = false;
                Label8.InnerText="Subiendo Archivo";
                String path = Server.MapPath("~/File/");
                if (FileUpload1.HasFile)
                {
                    String fileExtension = System.IO.Path.GetExtension(FileUpload1.FileName).ToLower();
                    String[] allowedExtensions = { ".xls", ".txt" };
                    for (int i = 0; i < allowedExtensions.Length; i++)
                    {
                        if (fileExtension == allowedExtensions[i])
                        {
                            fileOK = true;
                        }
                    }
                }

                if (fileOK)
                {
                    try
                    {
                        FileUpload1.PostedFile.SaveAs(path + FileUpload1.FileName);
                        Label8.InnerText = "File uploaded!";
                        string path1 = path + FileUpload1.FileName;
                        lista = parseCSV(path1);
                        cargarListas(lista);
                    }
                    catch (Exception ex)
                    {
                        Label8.InnerText = "File could not be uploaded.";
                    }
                }
                else
                {
                    Label8.InnerText = "Cannot accept files of this type.";
                }
            }
            catch (Exception ex)
            {
                
                throw ex;
            }
        }


        public void cargarListas(List<string[]> lista)
        {
            try
            {
                // List<string[]> fila=lista;


              var Item = new BllItem();
                int insert = 0;
                string[] vector;
                for (int c = 1; c < lista.Count; c++)
                {
                    // 22 codigo depto, 23 desc dpto
                    vector = lista[c];
                    string Codigo = vector[0].ToString();
                    string Descripcion =vector[1].ToString();;
                    string precio = vector[2].ToString();;
                    string precioV=vector[3].ToString();
                    string Idsubgrupo = vector[5].ToString();

                    string Color=vector[8].ToString();
                    Color=ValidarColor(Color,vector[c].ToString());
                    string modelo=vector[9].ToString();
                    string Talla=vector[10].ToString();
                    Talla=ValidarTalla(Talla,c+1.ToString());
                    string Marca=vector[11].ToString();
                    Marca=ValidarMarca(Marca);
                    string cantidadExis=vector[12].ToString();
                    string proveedor = vector[13].ToString();
                    string comisionPorventa = vector[14].ToString();
                    string referenciaProveedor=vector[15].ToString();
                    Item.Codigo = Codigo;
                    Item.Descripcion = Descripcion;
                    Item.Precio = decimal.Parse(precioV);
                    Item.IdSubGrupo = int.Parse(Idsubgrupo);
                    Item.PrecioCompra=decimal.Parse(precio);
                    Item.MaxDescuento = 10;
                    Item.CantidadMinima=0;
                    Item.IdColor=int.Parse(Color);
                    Item.Modelo=modelo;
                    Item.IdTalla=int.Parse(Talla);
                    Item.IdMarca=int.Parse(Marca);
                    Item.CantidadExistente=int.Parse(cantidadExis);
                    Item.IdProveedor =int.Parse( proveedor);
                    Item.ComisionPorVenta=decimal.Parse(comisionPorventa);
                    Item.ReferenciaProveedor=referenciaProveedor;
                    Item.IdUsuario=10400;
                    Item.IdIva=2;

                    //if (BllItem.ExisteDescri(Item.Codigo))
                    //{
                        var r=BllItem.Add(Item);
                        if (r>0)
                        {
                            var Inventario=new BllInventario();
                            Inventario.IdItem=r;
                            Inventario.IdBodega=1;
                            Inventario.CantidadDisponible=Item.CantidadExistente;
                            Inventario.CantidadDespachada=0;
                            Inventario.CantidadAnterior=0;
                            Inventario.Precio=Item.Precio;
                            Inventario.Add(Inventario);
                        }
                    //}
                    //else
                    //{
                    //   Item=  BllItem.GetByCodigo(Item.Codigo);
                    //   var Inventario = new BllInventario();
                    //   if (Inventario.IdItem==Item.Id && Inventario.IdBodega==1)
                    //   {
                    //       Inventario.IdItem = Item.Id;
                    //       Inventario.IdBodega = 1;
                    //       Inventario.CantidadDisponible = Item.CantidadExistente;
                    //       Inventario.CantidadDespachada = 0;
                    //       Inventario.CantidadAnterior = 0;
                    //       Inventario.Precio = Item.Precio;
                    //       Inventario.Add(Inventario);
                    //   }
                      
                    //}

                }

            }

            catch (Exception ex) {Label8.InnerText= ex.Message; }

        }
        protected string ValidarColor(string Color,string Posi)
        {
            try
            {
                var color = new BllColor();
                if (!BllColor.ExisteDescri(Color))
                {
                    color.Descripcion=Color;
                    color.IdEmpresa=1;
                    color.Estado=true;
                    color.CodigoColor=Posi;
                    color.IdUsuario=10400;
                    var r =BllColor.Add(color);
                    return r.ToString();
                    
                }
                else
                {
                   var r= BllColor.GetId(Color);
                    return r.ToString();
                }
            }
            catch (Exception)
            {
                
                throw;
            }
        }
        protected string ValidarTalla(string Talla, string Posi)
        {
            try
            {
                var talla = new BllTalla();
                if (!BllTalla.ExisteDescri(Talla))
                {
                    talla.Descripcion = Talla;
                    talla.IdEmpresa = 1;
                    talla.Estado = true;
                    talla.CodigoTalla = Posi;
                    talla.IdUsuario=10400;
                    var r = BllTalla.Add(talla);
                    return r.ToString();

                }
                else
                {
                    var r = BllTalla.GetId(Talla);
                    return r.ToString();
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        protected string ValidarMarca(string Marca)
        {
            try
            {
                var marca = new BllMarcas();
                if (!BllMarcas.ExisteDescri(Marca))
                {
                    marca.Descripcion = Marca;
                    marca.IdEmpresa = 1;
                    marca.IdUsuario = 10400;
                    marca.Fecha = DateTime.Now;
                    
                    var r = BllMarcas.Add(marca);
                    return r.ToString();

                }
                else
                {
                    var r = BllMarcas.GetId(Marca);
                    return r.ToString();
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

        public List<string[]> parseCSV(string path)
        {

            List<string[]> parsedData = new List<string[]>();
            char separador = (char)9;

            //if (opt2.Checked)
            //{
            //    separador = ';';
            //}
            //if (opt3.Checked)
            //{
            //    separador = (char)9;
            //}

            try
            {
                using (StreamReader readFile = new StreamReader(path))
                {
                    string line;
                    string[] row;

                    while ((line = readFile.ReadLine()) != null)
                    {
                        row = line.Split(separador);
                        if (row.Length == 16)
                        {
                            parsedData.Add(row);
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                //mensaje(Constantes.errorGeneral);
            }
            return parsedData;

        }
    }
}