using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.UserEntities;
using System.Web.Security;

namespace BrakGeWeb.Controles
{
    /// <summary>
    /// Control de usuario que representa las opciones de menu segun rol
    /// </summary>
    public partial class Menu : System.Web.UI.UserControl
    {
        #region "Propiedades"
        /// <summary>
        /// Opciones permitidas al usuario segun el rol
        /// </summary>
        public List<Opciones> Opciones { get { return (List<Opciones>)Session["opciones"]; } }
        #endregion

        #region "Métodos Privados"
        /// <summary>
        /// Manejo de la carga de la pagina
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                if (Opciones != null)
                {
                    List<Opciones> menu = Opciones;
                    List<Opciones> menuprincipal = menu.FindAll(p => p.IdOpcionPadre == null || p.IdOpcionPadre == 0);
                    Literal openLista = new Literal();
                    Literal closeLista = new Literal();


                    openLista.Text = "<ul id='mainnav-menu' class='list-group'>";
                    closeLista.Text = "</ul>";
                    pnl.Controls.Add(openLista);


                    ArmarMenu(menu, menuprincipal, mnuOpciones.Items);

                    pnl.Controls.Add(closeLista);
                }
            }
        }


        /// <summary>
        /// Creación del menu con las opciones activas
        /// </summary>
        /// <param name="listaOriginal"></param>
        /// <param name="Lista"></param>
        /// <param name="Destino"></param>
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
                li.Text = "<li><a href=\"" + menu.Pagina + "\">" + menu.Titulo + "</a><ul class='collapse'>";
                pnl.Controls.Add(li);

                foreach (var hij in hijos)
                {
                    if (hij.IdOpcionPadre == menu.IdOpcionPadre)
                    {
                        li2.Text = "<li>asdsad" + menu.Titulo + "<li>";
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

        /// <summary>
        /// Manejo del clic del boton salir
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void Salir_Click(object sender, EventArgs e)
        {
            FormsAuthentication.SignOut();
            Session.Abandon();
            Response.Redirect("Login.aspx", false);
        }
        #endregion
    }
}