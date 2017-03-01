using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;
using System.Web.Security;
using Generals.business;
using Generals.business.Entities;
using System.Globalization;
using Generals.framework.Exceptions;
using System.Collections;
using Generals.framework.DataAccess;
using System.Data;
using System.Drawing;

namespace BrakGeWeb
{
    public partial class MastePage : System.Web.UI.MasterPage
    {
        #region Attributes

        private Generals.business.Entities.Usuarios.Usuario usuario = new Generals.business.Entities.Usuarios.Usuario();
        #endregion Attributes

        #region Properties

        public string Observaciones { set { ((TextBox)FindControl("txtObservaciones")).Text = value; } get { return ((TextBox)FindControl("txtObservaciones")).Text; } }
        public long IdUsuario { set { ViewState["IdUsuario"] = value; } get { return ViewState["IdUsuario"] != null ? long.Parse(ViewState["IdUsuario"].ToString()) : 0; } }
        public long IdSolicitud { set { ViewState["IdSolicitud"] = value; } get { return ViewState["IdSolicitud"] != null ? long.Parse(ViewState["IdSolicitud"].ToString()) : 0; } }
        public long IdRol { set { ViewState["IdRol"] = value; } get { return ViewState["IdRol"] != null ? long.Parse(ViewState["IdRol"].ToString()) : 0; } }
        public string Activity { set { ViewState["Activity"] = value; } get { return ViewState["Activity"] != null ? ViewState["Activity"].ToString() : String.Empty; } }

        public Boolean Continue { set { ViewState["Continue"] = value; } get { return ViewState["Continue"] != null ? bool.Parse(ViewState["Continue"].ToString()) : false; } }
        public string PostBackUrl { set { ((LinkButton)FindControl("lnkContinuarMaster")).PostBackUrl = value; } get { return ((LinkButton)FindControl("lnkContinuarMaster")).PostBackUrl; } }
        //public presto.business.Components.Controller controller { set { ViewState["controller"] = value; } get { return ViewState["controller"] != null ? (presto.business.Components.Controller)ViewState["controller"] : new presto.business.Components.Controller(Page); } }
        private Sesion SesionController { set { Session["SesionController"] = value; } get { return (Sesion)Session["SesionController"]; } }
        public long IdTasacion { set { ViewState["IdTasacion"] = value; } get { return ViewState["IdTasacion"] != null ? long.Parse(ViewState["IdTasacion"].ToString()) : 0; } }

        #endregion Properties    
        protected void Page_Load(object sender, EventArgs e)
        {

            username.Text = Session["nombre"].ToString();
            try
            {
                if (!IsPostBack)
                {

                    
                    //if (Session["Usuario"] != null)
                    //{

                    //}
                    //else
                    //{
                    //    Response.Redirect("Login.aspx");
                    //}
                    if (Session["Generals"] != null)
                    {
                        SesionController = ((Sesion)(Page.Session["Generals"]));
                        if (Session["Titulo"] != null)
                        {
                            Tittle.Text = Session["Titulo"].ToString();
                            //Tittle.ForeColor = Color.Black;

                        }
                    }
                    else
                        Response.Redirect("login.aspx");

                    usuario = SesionController.Usuario;
                    IdRol = SesionController.Usuario.IdRol;

                    if (usuario == null)
                        Response.Redirect("login.aspx");

                }
            }
            catch (Exception ex) { Label1.Text = ex.ToString(); }

        }
    }
}