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



namespace BrakGeWeb
{
    public partial class Principal : System.Web.UI.MasterPage
    {
        public Boolean isGestion { set { ViewState["isGestion"] = value; } get { return ViewState["isGestion"] != null ? bool.Parse(ViewState["isGestion"].ToString()) : false; } }

        #region Attributes

        private Generals.business.Entities.Usuarios.Usuario usuario;       
        #endregion Attributes

        #region Properties

        public string Observaciones { set { ((TextBox)FindControl("txtObservaciones")).Text = value; } get { return ((TextBox)FindControl("txtObservaciones")).Text; } }
        public bool MostrarLabelRequerido { set { ((Label)FindControl("lblValObservaciones")).Visible = value; } get { return ((Label)FindControl("lblValObservaciones")).Visible; } }
        public bool ValidarObservaciones { set { ((RequiredFieldValidator)FindControl("rfvObservaciones")).Enabled = value; } get { return ((RequiredFieldValidator)FindControl("rfvObservaciones")).Enabled; } }
        public string Mensaje { set { ((Label)FindControl("lblMensaje")).Text = value; } get { return ((Label)FindControl("lblMensaje")).Text; } }
        public string ConfigurarEtiqueta { set { ((Label)FindControl("lblObservaciones")).Text = value; } }
        public bool MostrarPanelObservaciones { set { ((Panel)FindControl("pnlObservaciones")).Visible = value; } get { return ((Panel)FindControl("pnlObservaciones")).Visible; } }
        public bool MostrarPanelValidaciones { set { ((Panel)FindControl("pnlValidaciones")).Visible = value; } get { return ((Panel)FindControl("pnlValidaciones")).Visible; } }

        public int IdEtapa { set { ViewState["IdEtapa"] = value; } get { return ViewState["IdEtapa"] != null ? int.Parse(ViewState["IdEtapa"].ToString()) : 0; } }
        public string IdActividad { set { ViewState["IdActividad"] = value; } get { return ViewState["IdActividad"] != null ? ViewState["IdActividad"].ToString() : String.Empty; } }
        public string AvisoSistema { set { ViewState["AvisoSistema"] = value; } get { return ViewState["AvisoSistema"] != null ? ViewState["AvisoSistema"].ToString() : String.Empty; } }
        public string Comentario { set { ViewState["Comentario"] = value; } get { return ViewState["Comentario"] != null ? ViewState["Comentario"].ToString() : String.Empty; } }
        public DateTime FechaRegistro { get { return DateTime.Now; } }
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

        #region Methods
        public void Notification(String Message, Boolean IfContinue)
        {
            ((Label)FindControl("lblMsgNotificacionMaster")).Text = Message;
            Continue = IfContinue;
            ((AjaxControlToolkit.ModalPopupExtender)FindControl("mpeNotificacionMaster")).Show();
        }

        public void LoadSourceRadioButtonList(RadioButtonList RadioButtonList, string nombreCatalogo)
        {
            try
            {
                
            }
            catch (Exception ex)
            {
                throw new Exception("Ocurrio un error al Cargar el Catalogo " + nombreCatalogo, ex);
            }
        }
        public void SelectValueRadio(RadioButtonList RadioButtonList, string value)
        {
            ListItem item = RadioButtonList.Items.FindByValue(value);

            if (item != null)
            {
                RadioButtonList.ClearSelection();
                item.Selected = true;
            }
        }
        public void SelectValueDropDownList(DropDownList DropDownList, string value)
        {
            ListItem item = DropDownList.Items.FindByValue(value);

            if (item != null)
            {
                DropDownList.ClearSelection();
                item.Selected = true;
            }
        }
        public void SelectValueCheckBoxList(CheckBoxList checkBoxList, string value)
        {
            ListItem item = checkBoxList.Items.FindByValue(value);

            if (item != null)
            {
                checkBoxList.ClearSelection();
                item.Selected = true;
            }
        }
        public void SaveBitacora()
        {
            try
            {
                
            }
            catch (Exception ex)
            {                
                //Exception e = new Exception("Error al intentar registar la Bitacora.", ex);
                //ExceptionManager.HandleException(e, 1, 5000, 1);
                ((Label)FindControl("lblMensaje")).Text = ex.Message;
                throw ex;
            }
        }
        public void TsSaveBitacora()
        {
            try
            {
               
            }
            catch (Exception ex)
            {
                //Exception e = new Exception("Error al intentar registar la Bitacora.", ex);
                //ExceptionManager.HandleException(e, 1, 5000, 1);
                ((Label)FindControl("lblMensaje")).Text = ex.Message;
                throw ex;
            }
        }

        public void SaveBitacora(string observacion, long idsolicitud, int etapa, string  idactividad, long idusuario)
        {
            try
            {
               
                
            }
            catch (Exception ex)
            {
                //Exception e = new Exception("Error al intentar registar la Bitacora.", ex);
                //ExceptionManager.HandleException(e, 1, 5000, 1);
                ((Label)FindControl("lblMensaje")).Text = ex.Message;
                throw ex;
            }
        }

        public void SaveBitacora(long Id_Solcitud)
        {
            try
            {
               
            }
            catch (Exception ex)
            {
                Exception e = new Exception("Error al intentar registar la Bitacora.", ex);
                ExceptionManager.HandleException(e, 1, 5000, 1);
                ((Label)FindControl("lblMensaje")).Text = ex.Message;
            }
        }


 public void OcultarPanel(bool mostrar)
      {
        //    try
        //    {
        //        pnlObservaciones.Visible = mostrar;
        //    }
        //    catch (Exception ex)
        //    {
        //        Exception e = new Exception("Error al intentar ocultar panel.", ex);
        //        ExceptionManager.HandleException(e, 1, 5000, 1);
        //        ((Label)FindControl("lblMensaje")).Text = ex.Message;
        //    }
      }
        public decimal ToDecimal(string Value)
        {
            if (Value.Length == 0)
                return 0;
            else
                return Decimal.Parse(Value.Replace(" ", ""), NumberStyles.AllowThousands | NumberStyles.AllowDecimalPoint | NumberStyles.AllowCurrencySymbol);
        }
        public decimal ToDecimalCulture(string value)
        {
            if (value.Length == 0)
                return 0;
            else
            {
                CultureInfo culture = CultureInfo.CreateSpecificCulture("en-US");
                return decimal.Parse(value, culture);
            }
        }
        public string GetCurrentPageName()
        {
            string sPath = System.Web.HttpContext.Current.Request.Url.AbsolutePath;
            System.IO.FileInfo oInfo = new System.IO.FileInfo(sPath);
            string sRet = oInfo.Name;
            return sRet;
        }
        private void ValidadPermisosSolicitud()
        {
            
        }
        #endregion Methods
        #region Eventos
        protected void Page_Load(object sender, EventArgs e)
        {

            //NavigationMenu.Orientation =  Orientation.Horizontal;

            if (Session["Generals"] != null)
            {
                SesionController = ((Sesion)(Page.Session["Generals"])) ;
                
            }
            else
                Response.Redirect("login.aspx");

            usuario = SesionController.Usuario;

          
            if (usuario == null)
                Response.Redirect("login.aspx");

            //string namePage = GetCurrentPageName();
            Principal m = (Principal)sender;
            ((Label)m.FindControl("lblUsuario")).Text = usuario.Nombre; //controller.Usuario.NombreCompleto;
            ((Label)m.FindControl("lblPerfil")).Text = "Perfil: " + Generals.business.Entities.Roles.GetRol(usuario.IdRol).Descripcion;
            Session["Rol"] = Generals.business.Entities.Roles.GetRol(usuario.IdRol).Descripcion;
          //  Response.Redirect(url);
            //ScriptManager.RegisterOnSubmitStatement(this, GetType(), "Loading", "if (typeof(ValidatorOnSubmit) == 'function' && ValidatorOnSubmit() == false) return false; else $find('mpeLoading').show();");

           


            if (Request.QueryString["Activity"] != null)
            {
                Activity = Request.QueryString["Activity"].ToString();

            }


            ValidadPermisosSolicitud();
          
         
            //if (usuario.Organizacion != "AyP-Inversiones")
            //    NavigationMenu.Items[2].Enabled = false;
            //if (usuario.IdRol != 7 && usuario.IdRol != 49)
            //    NavigationMenu.Items[2].NavigateUrl = "CiberExpress.aspx";
            //else
            //    NavigationMenu.Items[2].NavigateUrl = "FiltroCiberExpress.aspx";

            //NavigationMenu.Items[1].NavigateUrl = "Busquedas.aspx?Id=" + usuario.Id + "&Rol=" + usuario.IdRol;

            //validarPermisosRol();
         

        }

        //private void validarPermisosRol()
        //{
        //    AyPInversiones.business.Data.BBVADataContext DataContext = new AyPInversiones.business.Data.BBVADataContext();

        //    var seleccion = from i in DataContext.Opciones
        //                    join c in DataContext.OpcionesRol on i.Idopciones equals c.IdOpcion
        //                    where c.IdRol == SesionController.Usuario.IdRol
        //                    select new { i.Idopciones, c.Activo, i.Name };

        //    if (seleccion != null && seleccion.Count() > 0)
        //    {
        //        foreach (MenuItem m in NavigationMenu.Items)
        //        {
        //            m.Enabled = false;
        //            foreach (var op in seleccion)
        //            {
        //                if (op.Idopciones.ToString() == m.Value)
        //                {
        //                    m.Enabled = op.Activo ?? false;
        //                }
        //                if (op.Name == "FiltroCiberExpress.aspx")
        //                    m.NavigateUrl = "FiltroCiberExpress.aspx";
        //            }

        //        }

        //    }

        //    NavigationMenu.Visible = false;
        //    foreach (MenuItem m in NavigationMenu.Items)
        //    {
        //        if (m.Enabled)
        //        {
        //            NavigationMenu.Visible = true;
        //            return;
        //        }

        //    }




        //}
        protected void lnkLogout_Click(object sender, EventArgs e)
        {
            FormsAuthentication.SignOut();
            Session.Abandon();
        }
        #endregion

        

      }
}
