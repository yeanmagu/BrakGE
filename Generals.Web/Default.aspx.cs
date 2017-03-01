using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.Entities;
using Generals.framework.Exceptions;
using Generals.business.UserEntities;
using Generals.business.Common;

namespace BrakGeWeb
{
    public partial class Default : PaginaBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                if (!IsPostBack)
                {
                    crearMenu(Usuario.id_rol.Value);
                    Session["Titulo"] = "Inicio";
                    Session["IdEmpresa"] = BllUsuarios.GetUsuario(Usuario.id_usuario).Empresa;                 
                }
            }
            catch (Exception ex)
            {
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "displayToastr('" +ex.Message + "'," + "'error');", true);
               // mensaje(Constantes.errorGeneral); Log.EscribirError(ex);
            }
        }

        public void crearMenu(long Idrol)
        {
            try
            {
                string class1 = "caja blue";
                string icon = "fa fa-clock-o";
                int w = 0;
                Generals.business.UserEntities.Rol servicio = new Generals.business.UserEntities.Rol() { IdRol = Idrol, IdServicio = 1 };
                Opciones = servicio.ConsultarOpciones().ToList();
                Autorizaciones = servicio.ConsultarAutorizaciones().ToList();
                Opciones opcionpadre = new Opciones() { Idopciones = -1, Titulo = Usuario.NombreCompleto, Orden = 1000 };
                Opciones.Add(opcionpadre);
                Opciones opcionhijo = new Opciones();//{ Idopciones = -2, Titulo = "Cambiar clave", Orden = 1, Pagina = "RG/"+"../CambioClave.aspx", IdOpcionPadre = opcionpadre.Idopciones };
                //Opciones.Add(opcionhijo);
                opcionhijo = new Opciones() { Idopciones = -3, Titulo = "Cerrar sesión", Orden = 2, Pagina = "../Login.aspx?salir=si", IdOpcionPadre = opcionpadre.Idopciones };
                Opciones.Add(opcionhijo);
                foreach (var c in Opciones)
                {

                    if (!string.IsNullOrEmpty(c.Pagina) && (c.Name != "INICIO" && c.Name != "Usuarios" && c.Name != "Roles") && !string.IsNullOrEmpty(c.IdOpcionPadre.ToString()))
                    {
                        if (w == 0 && w < 7)
                        {
                            class1 = "caja blue";
                            icon = "fa fa-clock-o";
                            w = 1;
                        }
                        else if (w == 1 && w < 7)
                        {
                            class1 = "caja blue";
                            icon = "fa fa-list-ol";
                            w = 2;
                        }
                        else if (w == 2 && w < 7)
                        {
                            class1 = "caja blue";
                            icon = "fa fa-history";
                            w = 3;
                        }
                        else if (w == 3 && w < 7)
                        {
                            class1 = "caja blue";
                            icon = "fa fa-list-alt";
                            w = 4;
                        } if (w == 4 && w < 7)
                        {
                            class1 = "caja blue";
                            icon = "fa fa-group";
                            w = 5;
                        }
                        else if (w == 5 && w < 7)
                        {
                            class1 = "caja blue";
                            icon = "glyphicon glyphicon-folder-open";
                            w = 6;
                        }
                        else if (w == 6 && w < 7)
                        {
                            class1 = "caja blue";
                            icon = "glyphicon glyphicon-edit";
                            w = 7;
                        }
                        else if (w == 7)
                        {
                            class1 = "caja blue";
                            icon = "fa fa-rocket";
                            w = 0;
                        }
                        //Metodos.DivMenu(Constantes.cajaBlue, c.Pagina, c.Name, pnlmenu);
                        Metodos.DivMenu(class1, "Brakge/" + c.Pagina, c.Name, pnlmenu, icon);
                    }

                }

            }
            catch (Exception ex)
            {

                throw;
            }
        }
    }
}