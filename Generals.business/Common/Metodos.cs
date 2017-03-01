using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;   
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.UserEntities;
using System.Data;
using System.Web;
using Generals.business.Entities;
using Generals.business.Data;
using System.IO;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
namespace Generals.business.Common
{
   public class Metodos   
    {
       
        public static  void CleanControl(ControlCollection controles)
        {
            foreach (Control control in controles)
            {
                if (control is TextBox)
                    ((TextBox)control).Text = string.Empty;
                else if (control is DropDownList)
                    ((DropDownList)control).ClearSelection();
                else if (control is RadioButtonList)
                    ((RadioButtonList)control).ClearSelection();
                else if (control is CheckBoxList)
                    ((CheckBoxList)control).ClearSelection();
                else if (control is RadioButton)
                    ((RadioButton)control).Checked = false;
                else if (control is CheckBox)
                    ((CheckBox)control).Checked = false;
                else if (control.HasControls())
                    //Esta linea detécta un Control que contenga otros Controles
                    //Así ningún control se quedará sin ser limpiado.
                    CleanControl(control.Controls);
            }
        }
        public static void divMensaje(string clase, string msg, Panel PnlMsg,string Icon)
        {
            try
            {
                Literal OpenDiv = new Literal();
                Literal CloseDiv = new Literal();
                OpenDiv.Text = "<div class='" + clase + "'><span class=' " + Icon + "' role='alert' aria-hidden='true'> <span class='sr-only'></span></span> &nbsp;";
                CloseDiv.Text = msg + "</div>";

                PnlMsg.Controls.Add(OpenDiv);
                PnlMsg.Controls.Add(CloseDiv);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public static string QuitarEnter(string cadena)
        {
            try
            {
                if (cadena == null)
                {
                   return cadena = "";
                }
                cadena = cadena.Replace("\r\n", "");
                cadena = cadena.Replace("\t", "");
                cadena = cadena.Replace("\n", "");
                cadena = cadena.Replace("\r", "");
                cadena = cadena.Replace(";", "");

                return cadena;
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
        public static string LimpiarCadena(string cadena)
        {
            try
            {
                if (cadena == null)
                {
                  return  cadena = "";
                }
                cadena = cadena.Replace("\r\n", "");
                cadena = cadena.Replace("\n", "");
                cadena = cadena.Replace("\r", "");
                cadena = cadena.Replace("\t", "");
                cadena = cadena.Replace(";", "");

                return cadena;
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
        public static void DivMenu(string clase, string link, string textoLink, Panel menu, string icon)
        {
            try
            {
                Literal OpenDiv = new Literal();
                Literal CloseDiv = new Literal();
                //OpenDiv.Text = "<div class='col-md-4 center enlinea'><a class='" + clase + "' href='" + link + "' > <i class='" + icon + "'></i> <lablel class='lblMenu'>" + textoLink + "</label></a>";
                OpenDiv.Text = "<div class='col-md-4 center enlinea'><a class='" + clase + "' href='" + link + "' >  <lablel class='lblMenu'>" + textoLink + "</label></a>";
                CloseDiv.Text = "</div>";

                menu.Controls.Add(OpenDiv);
                menu.Controls.Add(CloseDiv);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static void TitMenu(string textoLink, Panel menu)
        {
            try
            {
                Literal OpenDiv = new Literal();
                Literal CloseDiv = new Literal();
                OpenDiv.Text = "<div class='accordion' id='accordion2'><div class='accordion-group'><div class='accordion-heading' ><a class='accordion-toggle' data-toggle='collapse' data-parent='#accordion2' href='#collapseOne'> " + textoLink + " </a></div>";
                OpenDiv.Text = OpenDiv.Text + " <div id='collapseOne' class='accordion-body collapse in'> <div class='accordion-inner'>  ";
                CloseDiv.Text = "</div></div> </div></div>";

                menu.Controls.Add(OpenDiv);
                menu.Controls.Add(CloseDiv);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public static void FillCategorias(Panel cta)
        {
            try
            {
                 var items = BllGrupo.ToList();
                
         
                Literal OpenDiv = new Literal();
                Literal CloseDiv = new Literal();
                OpenDiv.Text="";
                foreach (var item in items)
                {
                     OpenDiv.Text +=" <li><a href='articulos.aspx?Cat="+item.Id+"' >"+item.Descripcion+"</a> </li>";
                
                }

                cta.Controls.Add(OpenDiv);
            }
            catch (Exception ex)
            {
                
                Log.EscribirError(ex);
            }
        }
        public static void CargarImagenes(Panel content, int cat)
        {
            try
            {
                var items=new BllInventario();
                var obj = new List<BllInventario>();
                if (cat==0)
                {
                    obj = items.ToListIndex();
                }
                else
                {
                    obj = items.ToListIndex(cat);
                }
               
                Literal OpenDiv = new Literal();
                Literal CloseDiv = new Literal();

                  OpenDiv.Text ="<div class='col-sm-12 ' style='border-left:thin solid #FFF'>";
                  OpenDiv.Text +=" <div class='features_items'><!--features_items-->";
                  OpenDiv.Text +="    <h2 class='title text-center miTitle'></h2>";
                   //OpenDiv.Text +=" <div class='row'>";
                     
                foreach (var item in obj)
                {
                   OpenDiv.Text +=" <div class='col-sm-3'>";
                        OpenDiv.Text += "    <div class='product-image-wrapper'>";
                                 OpenDiv.Text += "  <div class='single-products'>";
                                     OpenDiv.Text += "  <div class='productinfo text-center'>";
                                     if (item.Url!=null)
                                     {
                                         OpenDiv.Text += "  <img src='" + item.Url.First().Url + "' alt='" + item.NombreItem.ToUpper() + "' width='225px' height='230px' />";
                                     }
                                     else
                                     {
                                         OpenDiv.Text += "<img src='images/no.png' alt='Imagen del producto no disponible' width='225px' height='230px' />";
                                     }
                                    
                                         OpenDiv.Text += " <h4>" + String.Format("{0:C2}", item.Precio) + "</h4>";
                                         OpenDiv.Text += " <p >Codigo: " + item.Codigo + "</p>";
                                         OpenDiv.Text += " <p >" + item.NombreItem.ToUpper() + "</p>";
                                         //OpenDiv.Text += " <p >Talla: " + item.Talla + " </p>";
                                         OpenDiv.Text += " <p >Disponibles: " + item.CantidadDisponible + " <br></p>";
                                   OpenDiv.Text += "  </div>";
                                   OpenDiv.Text += "  <div class='product-overlay'>";
                                   OpenDiv.Text += "  <div class='overlay-content'>";
                                   if (item.Url != null)
                                   {
                                       OpenDiv.Text += "<a href='" + item.Url.First().Url + "'><i class='fa fa-search fa-5x' aria-hidden='true'></i></a>"; ;
                                   }
                                   else
                                   {
                                       OpenDiv.Text += "<a href='#'><i class='fa fa-search fa-5x' aria-hidden='true'></i></a>";
                                   }

                                   OpenDiv.Text += "<p>Entrega Inmediata <br> Whatsapp: 3017605480 </p>";
                                   OpenDiv.Text += " <h4>" + String.Format("{0:C2}", item.Precio) + "</h4>";
                                   //OpenDiv.Text += " <p > Codigo: " + item.Codigo + "</p>";
                                   //OpenDiv.Text += " <p>" + item.NombreItem.ToUpper() +"</p>";
                                   //OpenDiv.Text += " <p> Talla: " + item.Talla + " </p>";
                                   OpenDiv.Text += " <p> Disponibles: " + item.CantidadDisponible + " <br></p>";
                                   //OpenDiv.Text += "<a href='detalleproducto.aspx?Id=" + item.IdItem + "' class='btn btn-success' style='margin-bottom:10px;'>Ver Detalles</a>  ";
                                   //OpenDiv.Text += "<button onclick='llamar(" + item.IdItem + ");' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</button>";
                                   var it = new BllInventario();
                                   var ListIt = it.ToListByCodigo(item.Codigo);
                                   var  Text="Tallas Disponibles:";
                                   foreach (var itemTa in ListIt)
                                   {
                                       Text +=itemTa.Talla+"-";
                                       //OpenDiv.Text += " <p> Disponibles: " + item.CantidadDisponible + " <br></p>";
                                       //
                                   }
                                   //OpenDiv.Text += " <p> Tallas Disponbles: " + itemTa.Talla + " :" + itemTa.CantidadDisponible + " <button onclick='llamar(" + itemTa.IdItem + "); return false' class='btn btn-default add-to-cart' tooltip='Agregar Al Carrito'><i class='fa fa-shopping-cart'></i></button> </p>";
                                   OpenDiv.Text += " <p>"+Text+"</p>";
                                   //OpenDiv.Text += "<button onclick='llamar(" + item.IdItem + "); return false' class='btn btn-default add-to-cart' style='margin-bottom:10px; tooltip='Agregar Al Carrito'><i class='fa fa-shopping-cart'></i></button>";
                                   OpenDiv.Text += "<asp:Button  ID='AddCart"+item.IdItem+"' CommandArgument='" + item.IdItem + "' CommandName='AddCart' runat='server' OnClick='AddCart_Click'   Text='Agregar Al Carrito' />";
                                   OpenDiv.Text += "<br/><a href='detalleproducto.aspx?Id=" + item.IdItem + "' class='btn btn-success' style='margin-bottom:10px;'>Ver Detalles</a>  ";
                                   OpenDiv.Text += "</div>";
                                   OpenDiv.Text += "</div>";
                                 OpenDiv.Text += "</div>";
                               
                             OpenDiv.Text += "</div>";
                         OpenDiv.Text += "</div>";
                }

                CloseDiv.Text += "</div></div>";
                content.Controls.Add(OpenDiv);
                content.Controls.Add(CloseDiv);

            }
            catch (Exception ex)
            {

                Log.EscribirError(ex);
            }
        }

        public static void CargarImagenesBySub(Panel content, int cat)
        {
            try
            {
                var items = new BllInventario();
                var obj = new List<BllInventario>();
                if (cat == 0)
                {
                    obj = items.ToListIndex();
                }
                else
                {
                    obj = items.ToListIndexSub(cat);
                }

                Literal OpenDiv = new Literal();
                Literal CloseDiv = new Literal();

                OpenDiv.Text = "<div class='col-sm-12 ' style='border-left:thin solid #FFF'>";
                OpenDiv.Text += " <div class='features_items'><!--features_items-->";
                OpenDiv.Text += "    <h2 class='title text-center miTitle'></h2>";
                //OpenDiv.Text +=" <div class='row'>";

                foreach (var item in obj)
                {
                    OpenDiv.Text += " <div class='col-sm-3'>";
                    OpenDiv.Text += "    <div class='product-image-wrapper'>";
                    OpenDiv.Text += "  <div class='single-products'>";
                    OpenDiv.Text += "  <div class='productinfo text-center'>";
                    if (item.Url != null)
                    {
                        OpenDiv.Text += "  <img src='" + item.Url.First().Url + "' alt='" + item.NombreItem.ToUpper() + "' width='225px' height='230px' />";
                    }
                    else
                    {
                        OpenDiv.Text += "<img src='images/no.png' alt='Imagen del producto no disponible' width='225px' height='230px' />";
                    }

                    OpenDiv.Text += " <h4>" + String.Format("{0:C2}", item.Precio) + "</h4>";
                    OpenDiv.Text += " <p >Codigo: " + item.Codigo + "</p>";
                    OpenDiv.Text += " <p >" + item.NombreItem.ToUpper() + "</p>";
                    //OpenDiv.Text += " <p >Talla: " + item.Talla + " </p>";
                    OpenDiv.Text += " <p >Disponibles: " + item.CantidadDisponible + " <br></p>";
                    OpenDiv.Text += "  </div>";
                    OpenDiv.Text += "  <div class='product-overlay'>";
                    OpenDiv.Text += "  <div class='overlay-content'>";
                    if (item.Url != null)
                    {
                        OpenDiv.Text += "<a href='" + item.Url.First().Url + "'><i class='fa fa-search fa-5x' aria-hidden='true'></i></a>"; ;
                    }
                    else
                    {
                        OpenDiv.Text += "<a href='#'><i class='fa fa-search fa-5x' aria-hidden='true'></i></a>";
                    }

                    OpenDiv.Text += "<p>Entrega Inmediata <br> Whatsapp: 3017605480 </p>";
                    OpenDiv.Text += " <h4>" + String.Format("{0:C2}", item.Precio) + "</h4>";
                    //OpenDiv.Text += " <p > Codigo: " + item.Codigo + "</p>";
                    //OpenDiv.Text += " <p>" + item.NombreItem.ToUpper() +"</p>";
                    //OpenDiv.Text += " <p> Talla: " + item.Talla + " </p>";
                    OpenDiv.Text += " <p> Disponibles: " + item.CantidadDisponible + " <br></p>";
                    //OpenDiv.Text += "<a href='detalleproducto.aspx?Id=" + item.IdItem + "' class='btn btn-success' style='margin-bottom:10px;'>Ver Detalles</a>  ";
                    //OpenDiv.Text += "<button onclick='llamar(" + item.IdItem + ");' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</button>";
                    var it = new BllInventario();
                    var ListIt = it.ToListByCodigo(item.Codigo);
                    var Text = "Tallas Disponibles:";
                    foreach (var itemTa in ListIt)
                    {
                        Text += itemTa.Talla + "-";
                        //OpenDiv.Text += " <p> Disponibles: " + item.CantidadDisponible + " <br></p>";
                        //
                    }
                    //OpenDiv.Text += " <p> Tallas Disponbles: " + itemTa.Talla + " :" + itemTa.CantidadDisponible + " <button onclick='llamar(" + itemTa.IdItem + "); return false' class='btn btn-default add-to-cart' tooltip='Agregar Al Carrito'><i class='fa fa-shopping-cart'></i></button> </p>";
                    OpenDiv.Text += " <p>" + Text + "</p>";
                    //OpenDiv.Text += "<button onclick='llamar(" + item.IdItem + "); return false' class='btn btn-default add-to-cart' style='margin-bottom:10px; tooltip='Agregar Al Carrito'><i class='fa fa-shopping-cart'></i></button>";
                    OpenDiv.Text += "<asp:Button  ID='AddCart" + item.IdItem + "' CommandArgument='" + item.IdItem + "' CommandName='AddCart' runat='server' OnClick='AddCart_Click'   Text='Agregar Al Carrito' />";
                    OpenDiv.Text += "<br/><a href='detalleproducto.aspx?Id=" + item.IdItem + "' class='btn btn-success' style='margin-bottom:10px;'>Ver Detalles</a>  ";
                    OpenDiv.Text += "</div>";
                    OpenDiv.Text += "</div>";
                    OpenDiv.Text += "</div>";

                    OpenDiv.Text += "</div>";
                    OpenDiv.Text += "</div>";
                }

                CloseDiv.Text += "</div></div>";
                content.Controls.Add(OpenDiv);
                content.Controls.Add(CloseDiv);

            }
            catch (Exception ex)
            {

                Log.EscribirError(ex);
            }
        }
        public static void CargarImagenesSimilares(Panel content,int cat)
        {
            try
            {
                var items = new BllInventario();
                var obj = new List<BllInventario>();
                obj = items.ToListIndex(cat);
                Literal OpenDiv = new Literal();
                Literal CloseDiv = new Literal();

                OpenDiv.Text ="<div id='recommended-item-carousel' class='carousel slide' data-ride='carousel'>";
                OpenDiv.Text += "	<div class='carousel-inner'>";
                OpenDiv.Text += "	<div class='item active'> ";
                foreach (var item in obj)
                {
                    OpenDiv.Text += "	<div class='col-sm-3'>";//---
                    OpenDiv.Text += "<div class='product-image-wrapper'>";
                    OpenDiv.Text += "<div class='single-products'>";
                    OpenDiv.Text += "	<div class='productinfo text-center'>";
                    if (item.Url!=null)
                    {
                        OpenDiv.Text += "	<img src='" + item.Url.First().Url + "' alt='" + item.NombreItem.ToUpper() + "'>"; ;
                    }
                    else
                    {
                        OpenDiv.Text += "	<img src='images/no.png' alt='Imagen del Producto No Disponible'>";
                    }

                    OpenDiv.Text += "		<h2>" + String.Format("{0:C2}", item.Precio) + "</h2>";
                    OpenDiv.Text += " <p> Codigo: " + item.Codigo + "</p>";
                    OpenDiv.Text += " <p>" + item.NombreItem.ToUpper().Substring(0,31) + "</p>";
                    OpenDiv.Text += " <p> Talla: " + item.Talla + " </p>";
                    OpenDiv.Text += "			<a href='detalleproducto.aspx?Id="+item.IdItem+"' type='button' class='btn btn-default add-to-cart'><i class='fa fa-newspaper-o'></i>Ver Detalles</a>";
                    OpenDiv.Text += "		</div>";
                    OpenDiv.Text += "		</div>";
                    OpenDiv.Text += "		</div>";
                    OpenDiv.Text += "		</div>";//-----
                }
                    
                OpenDiv.Text += "       </div>";
                OpenDiv.Text += "	</div>";
                OpenDiv.Text += "</div>";

                content.Controls.Add(OpenDiv);
                //content.Controls.Add(CloseDiv);

            }
            catch (Exception ex)
            {

                Log.EscribirError(ex);
            }
        }
        public static void CargarImagenesByBusqueda(Panel content, string cat)
        {
            try
            {
                var items = new BllInventario();
                var obj = new List<BllInventario>();
                if (cat == "")
                {
                    obj = items.ToListIndex();
                }
                else
                {
                    obj = items.ToListBySomething(cat);
                }

                Literal OpenDiv = new Literal();
                Literal CloseDiv = new Literal();

                //OpenDiv.Text = "<div class='row'>";
                //OpenDiv.Text += "<div class='col-md-12'>";
                //OpenDiv.Text += "<div class='row'>";
                OpenDiv.Text = "<div class='col-sm-12 padding-right' style='border-left:thin solid #FFF'>";
                OpenDiv.Text += " <div class='features_items'><!--features_items-->";
                OpenDiv.Text += "    <h2 class='title text-center miTitle'></h2>";
                //OpenDiv.Text +="         <span>Articulos</span>   </h2>";

                foreach (var item in obj)
                {
                    OpenDiv.Text += " <div class='col-sm-3'>";
                    OpenDiv.Text += "    <div class='product-image-wrapper'>";
                    OpenDiv.Text += "  <div class='single-products'>";
                    OpenDiv.Text += "  <div class='productinfo text-center'>";
                    if (item.Url != null)
                    {
                        OpenDiv.Text += "  <img src='" + item.Url.First().Url + "' alt='" + item.NombreItem.ToUpper() + "' width='225px' height='230px' />";
                    }
                    else
                    {
                        OpenDiv.Text += "<img src='images/no.png' alt='Imagen del producto no disponible' width='225px' height='230px' />";
                    }

                    OpenDiv.Text += " <h4>" + String.Format("{0:C2}", item.Precio) + "</h4>";
                    OpenDiv.Text += " <p >Codigo: " + item.Codigo + "</p>";
                    OpenDiv.Text += " <p >" + item.NombreItem.ToUpper() + "</p>";
                    //OpenDiv.Text += " <p >Talla: " + item.Talla + " </p>";
                    OpenDiv.Text += " <p >Disponibles: " + item.CantidadDisponible + " <br></p>";
                    OpenDiv.Text += "  </div>";
                    OpenDiv.Text += "  <div class='product-overlay'>";
                    OpenDiv.Text += "  <div class='overlay-content'>";
                    if (item.Url != null)
                    {
                        //OpenDiv.Text += "<a href='" + item.Url.First().Url + "'><i class='fa fa-search fa-5x' aria-hidden='true'></i></a>"; ;
                    }
                    else
                    {
                        OpenDiv.Text += "<a href='#'><i class='fa fa-search fa-5x' aria-hidden='true'></i></a>";
                    }

                    OpenDiv.Text += "<p>Entrega Inmediata <br> Whatsapp: 3017605480 </p>";
                    OpenDiv.Text += " <h4>" + String.Format("{0:C2}", item.Precio) + "</h4>";
                    //OpenDiv.Text += " <p > Codigo: " + item.Codigo + "</p>";
                    //OpenDiv.Text += " <p>" + item.NombreItem.ToUpper() + "</p>";
                    var it = new BllInventario();
                    var ListIt = it.ToListByCodigo(item.Codigo);
                    var Text = "Tallas Disponibles:";
                    foreach (var itemTa in ListIt)
                    {
                        Text += itemTa.Talla + "-";
                        //OpenDiv.Text += " <p> Disponibles: " + item.CantidadDisponible + " <br></p>";
                        //
                    }
                    //OpenDiv.Text += " <p> Tallas Disponbles: " + itemTa.Talla + " :" + itemTa.CantidadDisponible + " <button onclick='llamar(" + itemTa.IdItem + "); return false' class='btn btn-default add-to-cart' tooltip='Agregar Al Carrito'><i class='fa fa-shopping-cart'></i></button> </p>";
                    OpenDiv.Text += " <p>" + Text + "</p>";
                    OpenDiv.Text += "<button onclick='llamar(" + item.IdItem + "); return false' class='btn btn-default add-to-cart' style='margin-bottom:10px; tooltip='Agregar Al Carrito'><i class='fa fa-shopping-cart'></i></button>";
                    OpenDiv.Text += "<br/><a href='detalleproducto.aspx?Id=" + item.IdItem + "' class='btn btn-success' style='margin-bottom:10px;'>Ver Detalles</a>  ";
                    //OpenDiv.Text += "<button onclick='llamar(" + item.IdItem + ");' class='btn btn-default add-to-cart'><i class='fa fa-shopping-cart'></i>Add to cart</button>";
                    OpenDiv.Text += "</div>";
                    OpenDiv.Text += "</div>";
                    OpenDiv.Text += "</div>";

                    OpenDiv.Text += "</div>";
                    OpenDiv.Text += "</div>";
                }

                CloseDiv.Text += "</div></div>";
                content.Controls.Add(OpenDiv);
                content.Controls.Add(CloseDiv);

            }
            catch (Exception ex)
            {

                Log.EscribirError(ex);
            }
        }

    }
}
