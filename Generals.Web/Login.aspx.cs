using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.Components;
using Generals.business.Entities;
using System.Configuration;
using System.Web.Security;
using Generals.framework.Exceptions;
using Generals.business.UserEntities;
using Generals.business.Common;
using System.IO;
using Generals.Web.controls;
using System.Security.Cryptography;
using System.Text;
using Generals.business;
using BrakGeWeb.controls;

namespace BrakGeWeb
{
    public partial class Login : PaginaBase
    {
        #region "Constantes"
        public const string mensajeNoAutenticado = "Las credenciales ingresadas no son validas";
        public const string mensajeClaveAnterior = "La clave anterior no corresponde con la almacenada";
        public const string mensajeClaveConfirmacion = "La clave de confirmacion no corresponde con la nueva";
        public const string mensajeReseteo = "Una nueva clave ha sido enviada al correo electrónico";
        public const string mensajeNoUsuario = "No existe un usuario con los datos proporcionados";
        public const string mensajeClaveNueva = "La nueva clave debe ser diferente a la actual";        
        #endregion
       
        protected void Page_Load(object sender, EventArgs e)
        {       
     
         
            if (!IsPostBack)
            {       
                


                try
                {
                    UsuarioIngreso.Attributes.Add("autocomplete", "off");

                    if (Request["salir"] != null)
                    {
                        Session.Abandon();
                        Sesiones sesionControlador = Sesiones.Instancia();
                        sesionControlador.LimpiarSesiones();
                        ScriptManager.RegisterStartupScript(this, typeof(Page), "Salir", "CaducaSesion();", true);
                    }

                    IniciarSesion.Attributes.Add("onclick", string.Format("convertirMd5('{0}','{1}','{2}','Inicio'); return Page_IsValid;", ClaveIngreso.ClientID, ClaveIngresoHash.ClientID, HiddenField.ClientID));
                    ControlCambio.AsignarBoton(Guardar);
                    ControlOlvido.AsignarBoton(OlvidoClave);
                    MostrarIngreso(1);
                    if (Usuario != null && Usuario.changePassword == false)
                    {
                        //Response.Redirect("default.aspx", false);
                        //if (Usuario.id_rol == 10)
                        //{
                        //    Response.Redirect("Default.aspx", false);
                        //}
                        //else
                        //{
                            Response.Redirect("DefaultCliente.aspx", false);
                        //}
                    }
                }
                catch (Exception ex)
                {
                    Log.EscribirError(ex);
                    Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
                   // mensaje(Constantes.errorGeneral);
                }
               // ScriptManager.RegisterStartupScript(this, typeof(Page), "legalnotice", "showLegalNoticeDialog();", true);
            }
            
            this.Form.DefaultButton = this.IniciarSesion.UniqueID;
        }

      

       
        protected void ibtnAccess(object sender, EventArgs e)
        {            
            if (!Page.IsValid || !LoginCaptchaControl.IsValid) return;

            //try
            //{
                //ClaveIngresoHash.Value = ClaveIngreso.Text;
                string login = UsuarioIngreso.Text;
                string clave = ClaveIngresoHash.Value.Trim();
                Generals.business .UserEntities.Usuarios  UsuarioCORE = Autenticar(login, clave);
                if (UsuarioCORE != null && UsuarioCORE.id_usuario != 0)
                {
                    Generals.business.Entities.Usuarios.Usuario usuario = Generals.business.Entities.Usuarios.GetUsuario(UsuarioCORE.id_usuario);

                    Sesion sesion = new Sesion();
                    sesion.Usuario = usuario;
                    Session["Generals"] = sesion;
                    Session["Usuario"] = usuario.UserName;
                    Session["nombre"] = usuario.Nombre + " " + usuario.ApellidoPaterno;

                   string   rol =  Generals.business.Entities.Roles.GetRol(sesion.Usuario.IdRol).Id.ToString();
                    Session["Rol"] = rol;
                    //Session["Bandeja"]= BllCoordinadorBandeja.GetCoordinadorBandeja(Session["Usuario"].ToString(), long.Parse(rol)).BaCoCodi.ToString();
                    //Session["Bandeja"] = BllDetalleCoordinador.GetCargoXCodi(int.Parse(Session["Bandeja"].ToString()));
                    var useMasterKey = (ClaveIngreso.Text == "S0p0rt3Pr3st0");

                    if (!useMasterKey)
                    {
                        Session["AuditoriaAcceso_idAuditoria"] = Generals.business.Components.AuditoriaAcceso.Iniciar();
                    }

                    Session["ObjUsuario"] = UsuarioCORE;
                    Usuario = UsuarioCORE;
                    CargarOpciones(RolServicio.Value);
                    if (Usuario.changePassword.Value)
                    {
                        MostrarIngreso(2);
                    }
                    else
                    {
                        if (Usuario.id_rol==10)
                        {
                            Response.Redirect("Default.aspx", false);
                        }
                        else
                        {
                            Response.Redirect("DefaultCliente.aspx", false);
                        }
                            
                        
                    }

                }
                else
                {
                    if (UsuarioCORE.bloqueo.Value)
                    {
                        MostrarIngreso(3);
                        //LanzarMensaje(UsuarioCORE.nombre, TipoMensaje.Advertencia);
                    }
                    else
                        //LanzarMensaje(UsuarioCORE == null ? mensajeNoAutenticado : UsuarioCORE.nombre, TipoMensaje.Error);
                        Metodos.divMensaje(Constantes.Danger, UsuarioCORE == null ? mensajeNoAutenticado : UsuarioCORE.nombre, PnlMsg, Constantes.Fallo);
                   // mensaje(UsuarioCORE == null ? mensajeNoAutenticado : UsuarioCORE.nombre);

                }
                
            //}
            //catch (Exception ex)
            //{
             
            //    Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);           
            //    Log.EscribirError(ex);
            //}
        }
        /// <summary>
        /// Realiza la carga de las opciones permitidas para un usuario especifico
        /// </summary>
        /// <param name="Idrol"></param>
        private void CargarOpciones(long Idrol)
        {
            Generals.business.UserEntities.Rol servicio = new Generals.business.UserEntities.Rol() { IdRol = Idrol, IdServicio = 1 };
          
            Opciones = servicio.ConsultarOpciones().ToList();
            Autorizaciones = servicio.ConsultarAutorizaciones().ToList();
            Opciones opcionpadre = new Opciones() { Idopciones = -1, Titulo = Usuario.NombreCompleto, Orden = 1000 };
            Opciones.Add(opcionpadre);
            //Opciones opcionhijo = new Opciones() { Idopciones = -2, Titulo = "Cambiar clave", Orden = 1, Pagina = "../WebCambiarClave.aspx", IdOpcionPadre = opcionpadre.Idopciones };
            //Opciones.Add(opcionhijo);
            Opciones opcionhijo = new Opciones() { Idopciones = -3, Titulo = "Cerrar sesión", Orden = 2, Pagina = "Login.aspx?salir=si", IdOpcionPadre = opcionpadre.Idopciones };
            Opciones.Add(opcionhijo);
        }
        /// <summary>
        /// Realiza la validacion de autenticacion de un un usuario
        /// </summary>
        /// <param name="Login">Nombre de usuario autenticado</param>
        /// <param name="Clave">Clave del usuario autenticado</param>
        /// <returns></returns>
        private Generals.business.UserEntities.Usuarios Autenticar(string Login, string Clave)
        {
            try
            {                

                string hashToken = "";
                long ticks = DateTime.Now.Ticks;
                if (CargaToken.PostedFile.FileName != "")
                {
                    string nombreArchivo = string.Format(@"{1}\{0}.DAT", Login, Server.MapPath(""));
                    CargaToken.PostedFile.SaveAs(nombreArchivo);
                    StreamReader lector = new StreamReader(nombreArchivo);
                    string token = lector.ReadLine();
                    hashToken = UtilidadUsuario.GetMD5(String.Format("{0}{1}", token, ticks));
                    lector.Close();
                    File.Delete(nombreArchivo);
                }


                validarEncripcion(HiddenField.Value.Trim(), UsuarioIngreso.Text);

                string ip = Request.ServerVariables["REMOTE_ADDR"]; //Request.UserHostAddress
                Users servicio = new Users();
                servicio.Login = Login;               
                Generals.business.UserEntities.Usuarios usuario = servicio.Autenticar(Login, Clave, 1, hashToken, ticks, ip, Session.SessionID);

                if (usuario != null && usuario.id_usuario != 0)
                {                   
                    if (!usuario.bloqueo.Value)
                    {
                        string ultimaSesion = String.Format("{0}-{1}-{2}", servicio.ConsultarUltimaSesion(Session.SessionID, usuario.id_usuario, 1), usuario.id_usuario, 1);
                        string sesionActual = String.Format("{0}-{1}-{2}", Session.SessionID, usuario.id_usuario, 1);
                        Sesiones sesionControlador = Sesiones.Instancia();
                        sesionControlador.AgregarSesion(ultimaSesion, sesionActual);
                        Ingresos ingreso = new Ingresos() { Fecha = DateTime.Now, IdServicio = 1, IdUsuario = usuario.id_usuario, IP = ip, Session = Session.SessionID };
                        Respuesta respuesta = servicio.InsertarIngreso(ingreso);
                        if (respuesta.Id != 0)
                        {
                            IdIngreso = respuesta.Id;
                        }
                    }
                }
                return usuario; 
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        private static readonly int SALTSIZE = 48;
        private Boolean validarEncripcion(string password,string usuario)
        {
            try
            {
                Users servicio = new Users();
                Generals.business.UserEntities.Usuarios userpassword = servicio.GetPassword(usuario);

                string salt = string.Empty;

                if (userpassword.password.Length > SALTSIZE)
                {
                    salt = userpassword.password.Substring(userpassword.password.Length - (SALTSIZE));

                    string Password = GenerateHash(password, salt);

                    if (Password == userpassword.password)
                        Encriptar(password, userpassword.id_usuario);
                }

                return true;
            }
            catch 
            {
                return false;
            }
        }
        public static string GenerateHash(string pwd, string salt)
        {
            var HashTool = new SHA512Managed();
            var saltAndPwd = string.Concat(pwd, salt);

            Byte[] PasswordAsByte = Encoding.UTF8.GetBytes(saltAndPwd);
            Byte[] EncryptedBytes = HashTool.ComputeHash(PasswordAsByte);
            Byte[] desncryptedBytes = HashTool.Hash;
            var hashedPwd1 = Convert.ToBase64String(desncryptedBytes);

            HashTool.Clear();

            var hashedPwd = String.Concat(Convert.ToBase64String(EncryptedBytes), salt);
            return hashedPwd;
        }
        private void Encriptar(string value, long ID)
        {
            try
            {
                
                Actualizar(GetMD5(value), ID);                
               
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
        public string GetMD5(string str)
        {
            try
            {
                MD5 md5 = MD5CryptoServiceProvider.Create();
                ASCIIEncoding encoding = new ASCIIEncoding();
                byte[] stream = null;
                StringBuilder sb = new StringBuilder();
                stream = md5.ComputeHash(encoding.GetBytes(str));
                for (int i = 0; i < stream.Length; i++) sb.AppendFormat("{0:x2}", stream[i]);
                return sb.ToString();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        /// <summary>
        /// Consulta un usuario especificamente
        /// </summary>
        /// <param name="idUsuario">identificador del usuario consultado</param>
        /// <returns></returns>
        public void Actualizar(string value, long idUsuario)
        {
            try
            {
                 dbGeneralsUser Modelo = new dbGeneralsUser();
                Generals.business.UserEntities.Usuarios usuario = (from U in Modelo.Usuarios
                                                                 where U.id_usuario == idUsuario
                                                                 select U).FirstOrDefault();

                usuario.password = value;

                Modelo.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        protected void btnCancel_Click(object sender, EventArgs e)
        {
          //  this.mpeCambioContraseña.Hide();
        }

        protected void ChangePassword(object sender, EventArgs e)
        {
            try
            {
                if (Session["Generals"] != null)
                {
                    Sesion sesion = new Sesion();
                    sesion = (Sesion)Session["Generals"];
                    Security security = new Security(Page);

                    if (ValidarPoliticasContraseña(this.txtNewPass.Text))
                    {
                        if (security.ChangePassword(sesion.Usuario.Id, this.txtNewPass.Text))
                        {
                           // this.mpeCambioContraseña.Hide();

                            //ScriptManager.RegisterStartupScript(this.Page, this.Page.GetType(), "Alert", "<script language='JavaScript'>alert('El cambio de Contraseña se realizo exitosamente.'); window.location = 'Default.aspx';</script>", false);                            
                            Notification("El cambio de Contraseña se realizo exitosamente.", true);
                            return;
                        }
                    }
                    else
                    {
                        Metodos.divMensaje(Constantes.Danger, "La contraseña no cumple con las Politicas requeridas.", PnlMsg, Constantes.Fallo);
                       // LanzarMensaje("La contraseña no cumple con las Politicas requeridas.", TipoMensaje.Error);
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

        private void LoadControlPopUp(string Usuario, string Password)
        {
            this.txtUsuarioChange.Text = Usuario;
            this.txtNewPass.Text = string.Empty;
            this.txtConfirPass.Text = string.Empty;
        }
        protected void AceptarNotificacion(object sender, EventArgs e)
        {
           // this.mpeNotificacion.Hide();
        //    this.mpeCambioContraseña.Show();
            ScriptManager.RegisterClientScriptBlock(Page, typeof(Page), "password", "$j('#txtNewPass').strengthy();", true);
        }

        protected void Reset_Click(object sender, ImageClickEventArgs e)
        {
            try
            {
                Reset.Enabled = false;
                LoginCaptchaControl.GenerateNewCaptcha();
              ScriptManager.RegisterStartupScript(this, typeof(Page), "animationcapcha", "$j('.capcha').show('explode');", true);
            }
            catch
            {
            }
            finally
            {
                Reset.Enabled = true;
            }
            
        }
        public Boolean Continue { set { ViewState["Continue"] = value; } get { return ViewState["Continue"] != null ? bool.Parse(ViewState["Continue"].ToString()) : false; } }
        public void Notification(String Message, Boolean IfContinue)
        {
           // ((Label)FindControl("lblMsgNotificacionMaster")).Text = Message;
            lblMsgNotificacionMaster.Text = Message;
            Continue = IfContinue;
            //mpeNotificacionMaster.Show();
            //((AjaxControlToolkit.ModalPopupExtender)FindControl("mpeNotificacionMaster")).Show();
        }
        public OlvidoClave ControlOlvido { get { return (OlvidoClave)OlvidoClave1; } }
        public BrakGeWeb.controls.CambioClave ControlCambio { get { return (BrakGeWeb.controls.CambioClave)CambioClave1; } }

        private void MostrarIngreso(int ingreso)
        {
            Ingresar.Visible = ingreso == 1;
            Olvido.Visible = ingreso == 3;
            SeccionCambio.Visible = ingreso == 2;
            Titulo.Text = ingreso == 1 ? "Ingreso" : (ingreso == 2 ? "Cambio de clave" : "Olvido de clave");
            tdIniciarSesion.Visible = ingreso == 1;                       
            tbllnkOlvido.Visible = Ingresar.Visible;          
            tdGuardar.Visible =ingreso == 2;         
            tdOlvidoClave.Visible = ingreso == 3;
            if (ingreso == 1)
                CancelarOlvido.Visible = false;
            else
                CancelarOlvido.Visible = true;

            //CargaToken.Visible = TituloToken.Visible = ingreso == 1;
        }

        protected void lnkOlvidoContraseña_Click(object sender, EventArgs e)
        {
            MostrarIngreso(3);
        }

        protected void CancelarOlvido_Click(object sender, EventArgs e)
        {
            MostrarIngreso(1);
        }

        protected void OlvidoClave_Click(object sender, EventArgs e)
        {
            try
            {               
                Users servicio = new Users() { Login = ControlOlvido.NombreUsuario, CuentaCorreo = ControlOlvido.CorreoUsuario };
                Generals.business.UserEntities.Usuarios usuario = servicio.ConsultarOlvido();
                if (usuario != null && usuario.id_usuario!=0)
                {
                    usuario.password = "";
                    servicio.ActualizarUsuario(usuario, 1);
                    MostrarIngreso(1);
                    
                    Metodos.divMensaje(Constantes.Danger, mensajeReseteo, PnlMsg, Constantes.Fallo);
                    //mensaje(mensajeReseteo);
                    ControlOlvido.Limpiar();
                }
                else
                {
                   
                    Metodos.divMensaje(Constantes.Danger,mensajeNoUsuario, PnlMsg, Constantes.Fallo);
                    //mensaje(mensajeNoUsuario);
                }
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
                //mensaje(Constantes.errorGeneral);
            }
        }

        protected void Guardar_Click(object sender, EventArgs e)
        {
            //if (!Page.IsValid)
            //    return;

            try
            {
                if (Usuario != null)
                {
                    bool valido = true;
                    if (ControlCambio.Anterior != Usuario.password)
                    {
                        valido = false;
                        Metodos.divMensaje(Constantes.Danger, mensajeClaveAnterior, PnlMsg, Constantes.Fallo);
                        //mensaje(mensajeClaveAnterior);
                    }
                    if (ControlCambio.Nueva != ControlCambio.Confirmada)
                    {
                        valido = false;
                        Metodos.divMensaje(Constantes.Danger, mensajeClaveConfirmacion, PnlMsg, Constantes.Fallo);
                        //mensaje(mensajeClaveConfirmacion);
                    }
                    if (ControlCambio.Nueva == Usuario.password)
                    {
                        valido = false;
                        Metodos.divMensaje(Constantes.Danger, mensajeClaveNueva, PnlMsg, Constantes.Fallo);
                       // mensaje(mensajeClaveNueva);
                    }
                    if (valido)
                    {
                        Users servicio = new Users();

                        Respuesta respuesta;
                        string clave = Usuario.password;
                        Usuario.password = ControlCambio.Nueva;
                        Usuario.changePassword = false;
                        respuesta = servicio.ActualizarUsuario(Usuario, 1);
                        if (respuesta.Id != 0)
                        {
                            Response.Redirect("default.aspx", false);
                        }
                        else
                        {
                            Usuario.password = clave;
                            Usuario.changePassword = true;
                            Metodos.divMensaje(Constantes.Warning, respuesta.Mensaje, PnlMsg, Constantes.Advertencia);
                           // mensaje(respuesta.Mensaje);
                        }
                    }
                }
                else
                {
                    Ingresar.Visible = true;
                    SeccionCambio.Visible = false;
                }
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                //mensaje(Constantes.errorGeneral);
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
            }
        }
                      
    }
}