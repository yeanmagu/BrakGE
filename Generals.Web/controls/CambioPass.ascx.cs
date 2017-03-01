using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Generals.Web.controls
{
    public partial class CambioPass : System.Web.UI.UserControl
    {
        public string Anterior { get { return ClaveAnteriorHash.Value; } set { ClaveAnteriorHash.Value = value; } }
        public string Nueva { get { return ClaveNuevaHash.Value; } set { ClaveNuevaHash.Value = value; } }
        public string Confirmada { get { return ClaveConfirmadaHash.Value; } set { ClaveConfirmadaHash.Value = value; } }

        protected void Page_Load(object sender, EventArgs e)
        {

        }

        public void AsignarBoton(Button Boton)
        {
            Boton.Attributes.Add("onclick", string.Format("convertirMd5('{0}','{1}','{7}','{6}'); convertirMd5('{2}','{3}','{7}', ''); convertirMd5('{4}','{5}','{7}',''); return Page_IsValid;", ClaveAnterior.ClientID, ClaveAnteriorHash.ClientID, ClaveNueva.ClientID, ClaveNuevaHash.ClientID, ClaveConfirmada.ClientID, ClaveConfirmadaHash.ClientID, Boton.ValidationGroup, HiddenField.ClientID));
            Boton.Attributes.Add("style", string.Format("height:33px !important;width:114px;"));

            Boton.CssClass = "btn btn-default btn-primary btn-block";
            Session["claveNueva"] = ClaveNueva.Text;
            Session["claveVieja"] = ClaveAnterior.Text;
            AnteriorRequerida.ValidationGroup = Boton.ValidationGroup;
            ConfirmacionRequerida.ValidationGroup = Boton.ValidationGroup;
            NuevaRequerida.ValidationGroup = Boton.ValidationGroup;
            ExpresionClaveConfirmar.ValidationGroup = Boton.ValidationGroup;
            ExpresionClaveNueva.ValidationGroup = Boton.ValidationGroup;
        }
    }
}