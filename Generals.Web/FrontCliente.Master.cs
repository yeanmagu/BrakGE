using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.Common;
using Generals.business.Entities;
using Generals.business.UserEntities;

namespace BrakGeWeb
{
    public partial class FrontCliente : System.Web.UI.MasterPage
    {
        public List<Opciones> Opciones { get { return (List<Opciones>)Session["opciones"]; } }
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                if (Session["Usuario"]!=null)
                {
                    CrearMenu();
                }
                //else
                //{
                //    Response.Redirect("Login.aspx");
                //}
               
            }
        }

        protected void CrearMenu()
        {
            try
            {
                if (Opciones != null)
                {
                    List<Opciones> menu = Opciones;
                    List<Opciones> menuprincipal = menu.FindAll(p => p.IdOpcionPadre == null || p.IdOpcionPadre == 0);
                    Literal openLista = new Literal();
                    Literal closeLista = new Literal();

                      openLista.Text ="<div class='shop-menu pull-right'>";
                    openLista.Text += "<ul id='mainnav-menu' class='nav navbar-nav collapse navbar-collapse'>";
                    openLista.Text += "<li><a href='index.aspx'><i class='fa fa-home'></i>Inicio</a></li>";
                                openLista.Text += "<li><a href='Nosotros.aspx' ><i class='fa fa-users'></i>nosotros</a></li>";
                               openLista.Text += " <li class='dropdown'><a href='articulos.aspx'><i class='fa fa-tags'></i>Articulos<i class='fa fa-angle-down'></i></a>";
                                   openLista.Text += " <ul role='menu' class='sub-menu' >";
                                   var items = BllGrupo.ToList();


                                   
                                   foreach (var item in items)
                                   {
                                       openLista.Text += " <li><a href='articulos.aspx?Cat=" + item.Id + "' >" + item.Descripcion + "</a> </li>";

                                   }
                                    openLista.Text += "</ul>";
                                openLista.Text += "</li>";
                    closeLista.Text = "</ul></div>";
                    pnl.Controls.Add(openLista);


                    ArmarMenu(menu, menuprincipal, mnuOpciones.Items);

                    pnl.Controls.Add(closeLista);
                }
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }
        private void ArmarMenu(List<Opciones> listaOriginal, List<Opciones> Lista, MenuItemCollection Destino)
        {





            foreach (Opciones menu in Lista)
            {
                long idPadre = menu.Idopciones;
                List<Opciones> hijos = listaOriginal.FindAll(p => p.IdOpcionPadre == idPadre);

                MenuItem itemMenu = new MenuItem();
                itemMenu.Text = menu.Titulo;

                Literal li = new Literal();
                Literal li2 = new Literal();
                Literal eli = new Literal();
                li.Text = "<li dropdown><a href=\"" + menu.Pagina + "\">" + menu.Titulo + "</a><ul class='sub-menu'>";
                pnl.Controls.Add(li);

                foreach (var hij in hijos)
                {
                    if (hij.IdOpcionPadre == menu.IdOpcionPadre)
                    {
                        li2.Text = "<li>" + menu.Titulo + "<li>";
                    }


                }
                ArmarMenu(listaOriginal, hijos, itemMenu.ChildItems);

                eli.Text = "</ul></li>";
                pnl.Controls.Add(eli);



                //if (hijos.Count == 0 && menu.IdOpcionPadre == null)
                //{
                //    MenuItem itemMenu = new MenuItem();
                //    itemMenu.Text = menu.Titulo;




                //    if (!string.IsNullOrEmpty(menu.Pagina))
                //    {
                //        itemMenu.NavigateUrl = menu.Pagina;
                //    }
                //    if (!string.IsNullOrEmpty(menu.Parametros))
                //        itemMenu.NavigateUrl += "?" + menu.Parametros;


                //        Destino.Add(itemMenu);

                //}



                //if (hijos.Count > 0 || menu.IdOpcionPadre != null)
                //{
                //    MenuItem itemMenu = new MenuItem();
                //    itemMenu.Text = menu.Titulo;

                //    Literal li = new Literal();
                //    Literal eli = new Literal();

                //    if (menu.IdOpcionPadre == null)
                //    {
                //        li.Text = "<li>" + menu.Titulo + "<li>";
                //        pnl.Controls.Add(li);
                //    }
                //    else {
                //        li.Text = "<li>asdsadad</li>";
                //        pnl.Controls.Add(li);

                //    }

                //    //if (!string.IsNullOrEmpty(menu.Pagina))
                //    //{
                //    //    itemMenu.NavigateUrl = menu.Pagina;
                //    //}
                //    //if (!string.IsNullOrEmpty(menu.Parametros))
                //        ///itemMenu.NavigateUrl += "?" + menu.Parametros;
                //       // Destino.Add(itemMenu);

                //    //if (menu.IdOpcionPadre != null) {
                //    //    Literal li1 = new Literal();

                //    //    li1.Text = "<li>" + menu.Titulo + "</li>";
                //    //    pnl.Controls.Add(li1);
                //    //    ArmarMenu(listaOriginal, hijos, itemMenu.ChildItems);
                //    //}


                //    ArmarMenu(listaOriginal, hijos, itemMenu.ChildItems);



                //}

                //if (menu.IdOpcionPadre != null)
                //{
                //    MenuItem itemMenu = new MenuItem();
                //    itemMenu.Text = menu.Titulo;
                //    Literal li = new Literal();
                //    Literal eli = new Literal();
                //    li.Text = "<li>" + menu.Titulo + "</li>";
                //    pnl.Controls.Add(li);



                //    if (!string.IsNullOrEmpty(menu.Pagina))
                //    {
                //        itemMenu.NavigateUrl = menu.Pagina;
                //    }
                //    if (!string.IsNullOrEmpty(menu.Parametros))
                //        itemMenu.NavigateUrl += "?" + menu.Parametros;
                //    Destino.Add(itemMenu);
                //    ArmarMenu(listaOriginal, hijos, itemMenu.ChildItems);
                //}
            }
        }
        protected void fillCategorias()
        {
            try
            {
                //Metodos.FillCategorias(pnlMenu);
            }
            catch (Exception ex)
            {
                
                throw ex;
            }
        }
    }
}