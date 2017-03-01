<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="OlvidoClave.ascx.cs"
    Inherits="BrakGeWeb.controls.OlvidoClave" %>

<div class="form-group">
     <label> <asp:Label runat="server" ID="EtiquetaNombre"></asp:Label></label>
    <asp:TextBox ID="Usuario" runat="server" MaxLength="20" ValidationGroup="Cambio" Width="100%" 
                SkinID="formulario" CssClass="form-control"></asp:TextBox>
     <asp:RequiredFieldValidator ID="UsuarioRequerido" runat="server" ControlToValidate="Usuario"
                Display="Dynamic" ErrorMessage="Ingrese el nombre de usuario" ToolTip="Ingrese el nombre de usuario"
                ValidationGroup="Olvido">*</asp:RequiredFieldValidator>
                  <%--<asp:ValidatorCalloutExtender ID="ValidatorCalloutExtender1" runat="server"
                Enabled="True" TargetControlID="UsuarioRequerido">
            </asp:ValidatorCalloutExtender>--%>
</div>

<div class="form-group">
    <label>
    E-mail</label>
            <asp:TextBox ID="Correo" runat="server" MaxLength="50" ValidationGroup="Cambio" CssClass="form-control" SkinID="formulario" Width="100%">
            </asp:TextBox>   
         

<asp:RequiredFieldValidator ID="CorreoRequerido" runat="server" ControlToValidate="Correo"
                Display="Dynamic" ErrorMessage="Ingrese el E-mail del usuario" ToolTip="Ingrese el E-mail del usuario"
                ValidationGroup="Olvido">*</asp:RequiredFieldValidator>
            <asp:RegularExpressionValidator ID="ExpresionCuentaCorreo" ControlToValidate="Correo"
                ErrorMessage="El campo E-mail es inválido" ToolTip="El campo E-mail es inválido"
                ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*" ValidationGroup="Olvido"
                Text="*" runat="server" Display="Dynamic" >
             </asp:RegularExpressionValidator>
              <%--<asp:ValidatorCalloutExtender ID="Nombre_ValidatorCalloutExtenderr" runat="server"
                Enabled="True" TargetControlID="CorreoRequerido">
            </asp:ValidatorCalloutExtender>--%>
            <%--<asp:ValidatorCalloutExtender ID="Email_ValidatorCalloutExtender" runat="server"
                Enabled="True" TargetControlID="ExpresionCuentaCorreo">
            </asp:ValidatorCalloutExtender> --%>  

</div>
