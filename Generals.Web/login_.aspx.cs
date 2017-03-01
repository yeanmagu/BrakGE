using System;
using System.Collections;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;
using Generals.business.Components;
using Generals.business.Entities;
using Generals.framework.Exceptions;
using Generals.business.Common;

namespace BBVA.Finalista
{
    public partial class login_ : PaginaBase 
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                txtUsuario.Text = String.Empty;
                txtPassword.Text = String.Empty;
                lblMensaje.Text = String.Empty;
                lblMensaje.Visible = false;
                Session.Clear();

                ScriptManager.RegisterStartupScript(this, typeof(Page), "legalnotice", "showLegalNoticeDialog();", true);
            }
            else
            {
                if (Continue)
                    Response.Redirect("default.aspx");
            }
         }
        protected void ibtnAccess(object sender, ImageClickEventArgs e)
        {
            Session["Presto"] = null;
          
            if (!Page.IsValid || !LoginCaptchaControl.IsValid) return;            
            
            try
            {
               
                Security security = new Security(Page);

                if (security.Login(txtUsuario.Text, txtPassword.Text) )
                {
                    Sesion sesion = new Sesion();

                    if (Session["Presto"] != null)
                    {
                        sesion = (Sesion)Session["Presto"];

                        if (Application.Get(sesion.Usuario.Id.ToString()) == null)
                            Application.Add(sesion.Usuario.Id.ToString(),1);
                        else if (int.Parse(Application.Get(sesion.Usuario.Id.ToString()).ToString()) == 0)
                            Application.Set(sesion.Usuario.Id.ToString(),1);
                        else
                        {                           
                            //ScriptManager.RegisterStartupScript(this.Page, this.Page.GetType(), "Alert", "<script language='JavaScript'>alert('ya existe una session abierta con este Usuario !'); window.location = 'default.aspx';</script>", false);
                            Notification("ya existe una session abierta con este Usuario !",true);
                            return;
                        }

                        if (Context.User.Identity.Name == Session.SessionID)
                        {
                            Response.Redirect("Default.aspx", false);
                            return;
                        }                        
                    }
                    else
                    {
                        sesion = new Sesion();
                    }
                    var UseUniqueSession = ConfigurationManager.AppSettings["UseUniqueSession"];
                    if (!string.IsNullOrEmpty(UseUniqueSession))
                    {
                        if (Convert.ToBoolean(UseUniqueSession))
                        {
                            if (Security.UserIsLogged(sesion.Usuario.Id))
                            {
                                //ScriptManager.RegisterStartupScript(this.Page, this.Page.GetType(), "Alert", "<script language='JavaScript'>alert('ya existe una session abierta con este Usuario !'); window.location = 'default.aspx';</script>", false);
                                Notification("ya existe una session abierta con este Usuario !", true);
                                //lblMensaje.Text = "ya existe una session abierta con este Usuario o el Usuario está Bloqueado!";
                                //lblMensaje.Visible = true;
                                txtUsuario.Focus();
                                return;
                            }
                        }
                    }

                    var changePassword = Security.UserNeedChangePassword(sesion.Usuario.Id);
                    if (sesion.Usuario._changePassword.Value == true || changePassword != "")
                    {
                        Label5.Text = changePassword;
                        LoadControlPopUp(sesion.Usuario.Nombre + " " + sesion.Usuario.ApellidoPaterno, sesion.Usuario.Password);
                        this.mpeNotificacion.Show();
                        //ScriptManager.RegisterClientScriptBlock(Page, typeof(Page), "password", "$j('#txtNewPass').strengthy();", true);
                    }
                    //else if (sesion.Usuario.Rol.Descripcion == "Administrador")
                    //{
                    //    Security.BeginUserSession(sesion.Usuario.Id);
                    //    FormsAuthentication.RedirectFromLoginPage(Session.SessionID, true);
                    //    Response.Redirect("admin/CaseManagement.aspx");
                    //}
                    else
                    {
                            Security.BeginUserSession(sesion.Usuario.Id);
                            FormsAuthentication.RedirectFromLoginPage(Session.SessionID, true);
                            Response.Redirect("Default.aspx", false);
                      
                    }
                    
                }
                else
                {                  
                    var msg = "Usuario o Contraseña Invalida o Usuario Inactivo!";

                    //ScriptManager.RegisterStartupScript(this.Page, this.Page.GetType(), "Alert", "<script language='JavaScript'>alert('" + msg + "!'); window.location = 'default.aspx';</script>", false);
                    Notification(msg, true);
                    //lblMensaje.Text = msg;
                    //lblMensaje.Visible = true;
                    txtUsuario.Focus();
                }
            }
            catch (Exception ex)
            {
                //ScriptManager.RegisterStartupScript(this.Page, this.Page.GetType(), "Alert", "<script language='JavaScript'>alert('" + ex.Message + "!'); window.location = 'default.aspx';</script>", false);
                Notification(ex.Message, true);
                //lblMensaje.Text = "Ocurrio un error al intentar accesar al sistema. " + ex.Message;
                //lblMensaje.Visible = true;
            }
        }

        protected void btnCancel_Click(object sender, EventArgs e)
        {
            this.mpeCambioContraseña.Hide();
        }

        protected void ChangePassword(object sender, EventArgs e)
        {
            try
            {
                if (Session["Presto"] != null)
                {
                    Sesion sesion = new Sesion();
                    sesion = (Sesion)Session["Presto"];
                    Security security = new Security(Page);

                    if (ValidarPoliticasContraseña(this.txtNewPass.Text))
                    {
                        if (security.ChangePassword(sesion.Usuario.Id, this.txtNewPass.Text))
                        {
                            this.mpeCambioContraseña.Hide();

                            //ScriptManager.RegisterStartupScript(this.Page, this.Page.GetType(), "Alert", "<script language='JavaScript'>alert('El cambio de Contraseña se realizo exitosamente.'); window.location = 'Default.aspx';</script>", false);                            
                            Notification("El cambio de Contraseña se realizo exitosamente.", true);
                            return;
                        }
                    }
                    else {
                        LanzarMensaje("La contraseña no cumple con las Politicas requeridas.", TipoMensaje.Error);
                        //ScriptManager.RegisterStartupScript(this.Page, this.Page.GetType(), "Alert", "alert('La contraseña no cumple con las Politicas requeridas.');", true);
                    }
                }
            }
            catch (Exception ex)
            {
                ExceptionManager.HandleException(ex, 1, 5000, 1);
                throw (ex);
            }
        }

        private bool ValidarPoliticasContraseña(string contraseña)
        {
            try
            {
                var r = new RegexStringValidator(@"^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$");
                r.Validate(contraseña);
                return true;
            }
            catch
            {
                return false;
            }          
        }

        private void LoadControlPopUp(string Usuario,string Password)
        {
            this.txtUsuarioChange.Text = Usuario;
            this.txtNewPass.Text =string.Empty ;
            this.txtConfirPass.Text = string.Empty;        
        }
        protected void AceptarNotificacion (object sender, EventArgs e)
        {
            this.mpeNotificacion.Hide();
            this.mpeCambioContraseña.Show();
            ScriptManager.RegisterClientScriptBlock(Page, typeof(Page), "password", "$j('#txtNewPass').strengthy();", true);
        }

        protected void Reset_Click(object sender, ImageClickEventArgs e)
        {
            LoginCaptchaControl.GenerateNewCaptcha();
            //ScriptManager.RegisterStartupScript(this, typeof(Page), "animationcapcha", "$j('.capcha').show('explode');", true);
        }
        public Boolean Continue { set { ViewState["Continue"] = value; } get { return ViewState["Continue"] != null ? bool.Parse(ViewState["Continue"].ToString()) : false; } }
        public void Notification(String Message, Boolean IfContinue)
        {
            ((Label)FindControl("lblMsgNotificacionMaster")).Text = Message;
            Continue = IfContinue;
            ((AjaxControlToolkit.ModalPopupExtender)FindControl("mpeNotificacionMaster")).Show();
        }

        
    }
}