using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace BrakGeWeb.controls
{
    public partial class OlvidoClave : System.Web.UI.UserControl
    {     
        public string NombreUsuario { get {return Usuario.Text ;} }
        public string CorreoUsuario { get { return Correo.Text; } }
        public string TituloUsuario { get { return ViewState["nombreusuarioclave"] == null ? "Nombre de usuario" : (string)ViewState["nombreusuarioclave"]; } set { ViewState.Add("nombreusuarioclave", value); } }
        public string ValidadorUsuario { get { return ViewState["validadorusuario"] == null ? "Nombre de usuario" : (string)ViewState["validadorusuario"]; } set { ViewState.Add("validadorusuario", value); } }
        public string Nom { get { return ViewState["nombreusuarioclave"] == null ? "Nombre de usuario" : (string)ViewState["nombreusuarioclave"]; } set { ViewState.Add("nombreusuarioclave", value); } }
        
        protected void Page_Load(object sender, EventArgs e)
        {
            EtiquetaNombre.Text = TituloUsuario;
        }

        public void Limpiar()
        {
            Usuario.Text = "";
            Correo.Text = "";
        }

        public void AsignarBoton(Button Boton)
        {
            Boton.Attributes.Add("onclick", string.Format("validarForma('', '{0}');" , Boton.ValidationGroup));
            UsuarioRequerido.ValidationGroup = Boton.ValidationGroup;
            CorreoRequerido.ValidationGroup = Boton.ValidationGroup;            
            ExpresionCuentaCorreo.ValidationGroup = Boton.ValidationGroup;
        }
    }
}