using System;
using System.Web.Security;
using Generals.business.Entities;
using Generals.business.Common;
using System.Collections.Generic;
using Generals.business.UserEntities;

namespace BrakGeWeb
{
    public class Global : System.Web.HttpApplication
    {
        #region Events

        protected void Application_Start(object sender, EventArgs e)
        {
            try
            {
                //var compressJs = ConfigurationManager.AppSettings["CompressJs"];
                //if (string.IsNullOrEmpty(compressJs)) return;

                //if (Convert.ToBoolean(compressJs))
                //{
                //    //compress javascript files
                //    //var scripts = new string[] { "masterpage.js", "Validaciones.js", "DialogoExpedienteDigital.js", "ReasignarSolicitudes.js" };
                //    var backUpDir = Server.MapPath(Path.Combine("Scripts", Path.GetRandomFileName()));

                //    Directory.CreateDirectory(backUpDir);
                //    var scripts = Directory.GetFiles(Server.MapPath("/"), "*.js", SearchOption.AllDirectories);

                //    foreach (var scriptPath in scripts)
                //    {
                //        //var scriptPath = Server.MapPath(Path.Combine("Scripts", s));
                //        var fullScript = File.ReadAllText(scriptPath);
                //        var comppressedScript = Yahoo.Yui.Compressor.JavaScriptCompressor.Compress(fullScript, true, true, false, false, 0,
                //                                    Encoding.UTF8, CultureInfo.InvariantCulture);

                //        File.Move(scriptPath, Path.Combine(backUpDir, scriptPath));
                //        File.WriteAllText(scriptPath, comppressedScript);
                //    }
                //}

                //Cabeceras();
                //Application.Add("sesiones", new Hashtable());
            }
            catch(Exception ex) {
                ex.ToString();
            }            
        }

        //void Application_BeginRequest(object sender, EventArgs e)
        //{
        //    bool error = false;
        //    string direccion = HttpContext.Current.Request.Url.AbsoluteUri;
        //    if (HttpContext.Current.Request.QueryString.Count != 0 && direccion.IndexOf(".aspx") != -1)
        //    {
        //        int cantidad = HttpContext.Current.Request.QueryString.Count;
        //        if (HttpContext.Current.Request.QueryString["salir"] != null)
        //            cantidad--;
        //        if (HttpContext.Current.Request.QueryString["archivo"] != null)
        //            cantidad--;
        //        if (HttpContext.Current.Request.QueryString["tipoarchivo"] != null)
        //            cantidad--;
        //        if (cantidad != 0)
        //        {
        //            int g = HttpContext.Current.Request.Url.AbsoluteUri.IndexOf("?");
        //            if (direccion.IndexOf("CaptchaImage.aspx") < 0)
        //            {
        //                error = true;
        //                HttpContext.Current.Response.Redirect(HttpContext.Current.Request.Url.AbsoluteUri.Substring(0, g));
        //            }
        //        }
        //    }
        //    if (!error)
        //    {
        //        string path = HttpContext.Current.Request.Url.AbsolutePath;
        //        if (HttpContext.Current.Request.ServerVariables["HTTPS"] == "on")
        //        {
        //            //if (SecurePath.IsSecure(path))
        //            //{
        //            //    //do nothing
        //            //}
        //            //else
        //            //{
        //            //    HttpContext.Current.Response.Redirect(HttpContext.Current.Request.Url.AbsoluteUri.Replace("https://", "http://"));
        //            //    return;
        //            //}
        //        }
        //        else
        //        {
        //            if (SecurePath.IsSecure(path) && ConfigurationManager.AppSettings["HTTPS"] == "1")
        //            {
        //                //Redirect to https version
        //                HttpContext.Current.Response.Redirect(HttpContext.Current.Request.Url.AbsoluteUri.Replace("http://", "https://"));
        //            }
        //        }
        //    }
        //    if (ConfigurationManager.AppSettings["CABECERAS"] == "1")
        //        ((HttpApplication)sender).Response.Buffer = false;


        //    var RedirectToHttps = ConfigurationManager.AppSettings["RedirectToHttps"];
        //    if (string.IsNullOrEmpty(RedirectToHttps)) return;

        //    if (Convert.ToBoolean(RedirectToHttps))
        //    {
        //        if (!Request.IsSecureConnection)
        //        {
        //            string redirectUrl = Request.Url.ToString().Replace("http:", "https:");
        //            Response.Redirect(redirectUrl);
        //        }
        //    }
        //}
       

        private List<string> headersToCloak;
        private void Cabeceras()
        {
            this.headersToCloak = new List<string>
                                      {
                                              "Server",
                                              "X-AspNet-Version",
                                              "X-AspNetMvc-Version",
                                              "X-Powered-By",
                                      };
        }


        protected void Application_AuthenticateRequest(object sender, EventArgs e)
        {
        }

        protected void Application_Error(object sender, EventArgs e)
        {
            try
            {
            //    if (System.Web.HttpContext.Current != null)
            //    {
            //        HttpContext context = HttpContext.Current;
            //        Exception exOriginal = Context.Server.GetLastError();
            //        Exception genericEx = null;

            //        if (genericEx == null)
            //            genericEx = exOriginal.InnerException != null ? exOriginal.InnerException : exOriginal;

            //        if (genericEx != null)
            //        {
            //            Log.EscribirError(genericEx);
            //            Session["LAST_ERROR"] = genericEx;
            //            string param = string.Format("?LAST_URL={0}", Request.Url.ToString());
            //            string pageError = "Errors.aspx" + param;
            //            Response.Redirect(pageError, true);
            //        }
            //    }
            }
            catch (Exception ex)
            {
                FormsAuthentication.SignOut();
                Log.EscribirError(ex);
                Response.Redirect("Errors.aspx", true);

            }
        }
        
        protected void Application_PreRequestHandlerExecute(Object sender, EventArgs e)
        {
            
        }
        void Session_Start(object sender, EventArgs e)
        {
           
            var ulrActual = Request.RawUrl.ToLower();
            //if (!ulrActual.Contains("login.aspx"))
            //    Response.Redirect(FormsAuthentication.LoginUrl, true);
            //    Sesiones sesionControlador = Sesiones.Instancia();
            //    sesionControlador.LimpiarSesiones();
            //    Session["Generals"] = null;
            //    Session["SesionController"] = null;
                //FormsAuthentication.SignOut();
        }

        protected void Session_End(object sender, EventArgs e)
        {
            try
            {
                if (Session["Generals"] == null)
                    return;
                var idUsuario = ((Sesion)Session["Generals"]).Usuario.Id;
                Generals.business.Components.Security.EndUserSession(idUsuario);

                Application.Remove(idUsuario.ToString());
                if (Session["AuditoriaAcceso_idAuditoria"] != null)
                {
                    var idAuditoria = (int)Session["AuditoriaAcceso_idAuditoria"];
                   Generals.business.Components.AuditoriaAcceso.Finalizar(idAuditoria);
                }
            }
            catch(Exception ex)
            {
                throw ex;
               
            }
                               
        }

        protected void Application_End(object sender, EventArgs e)
        {
            if (Session["Generals"] == null)
                return;
            var idUsuario = ((Sesion)Session["Generals"]).Usuario.Id;
            Generals.business.Components.Security.EndUserSession(idUsuario);

            if (Session["AuditoriaAcceso_idAuditoria"] != null)
            {
                var idAuditoria = (int)Session["AuditoriaAcceso_idAuditoria"];
                Generals.business .Components .AuditoriaAcceso.Finalizar(idAuditoria);
            }
        }

        #endregion Events
    }
}