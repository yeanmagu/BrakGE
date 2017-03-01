<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="CambioPass.ascx.cs" Inherits="BrakGeWeb.controls.CambioPass" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>
<div class="col-md-12 caja" >
            <div class="panel formdata" >
                 <div class="panel-heading">
				    <h3 class="panel-title">Cambiar Clave</h3>         
				 </div>
                 <div class="panel-body">
                 <div class="row">
                     <div class="form-group col-md-4  sect">
                    <label>Clave Anterior:</label>
                     <asp:TextBox ID="ClaveAnterior" runat="server" CssClass="form-control"  Width="100%" TextMode="Password"
                ValidationGroup="Cambio" SkinID="formulario"> </asp:TextBox>
        
            <asp:RequiredFieldValidator ID="AnteriorRequerida" runat="server" ControlToValidate="ClaveAnterior"
                Display="Dynamic" ErrorMessage="Ingrese la contraseña anterior" ToolTip="Ingrese una contraseña"
                ValidationGroup="Cambio">*</asp:RequiredFieldValidator>
                 <asp:ValidatorCalloutExtender ID="ValidatorCalloutExtender4" runat="server" Enabled="True"
                    TargetControlID="AnteriorRequerida">
                </asp:ValidatorCalloutExtender>
                </div>
                
                 <div class="form-group col-md-4 sect">
                     <label>Nueva Clave</label>
                     <asp:TextBox ID="ClaveNueva" runat="server" CssClass="form-control"  TextMode="Password" Width="100%"
                ValidationGroup="Cambio" SkinID="formulario"> </asp:TextBox>
       
            <asp:RequiredFieldValidator ID="NuevaRequerida" runat="server" ControlToValidate="ClaveNueva"
                Display="Dynamic" ErrorMessage="Ingrese una contraseña nueva" ToolTip="Ingrese una contraseña"
                ValidationGroup="Cambio">* </asp:RequiredFieldValidator>
            <asp:RegularExpressionValidator ID="ExpresionClaveNueva" runat="server" ControlToValidate="ClaveNueva"
                Display="Dynamic" ErrorMessage="La longitud de la clave debe estar enter 8 y 20 caracteres, se requiere por lo menos un número, una letra mayúscula y una minúscula. No se admiten carácteres especiales."
                ToolTip="La longitud de la clave debe estar enter 8 y 20 caracteres, se requiere por lo menos un número, una letra mayúscula y una minúscula. No se admiten carácteres especiales." ValidationExpression="(?=^.{8,20}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]*"
                ValidationGroup="Cambio">*</asp:RegularExpressionValidator>
            <asp:ValidatorCalloutExtender ID="ValidatorCalloutExtender1" runat="server" Enabled="True"
                TargetControlID="NuevaRequerida">
            </asp:ValidatorCalloutExtender>
            <asp:ValidatorCalloutExtender ID="ValidatorCalloutExtender2" runat="server" Enabled="True"
                TargetControlID="ExpresionClaveNueva">
            </asp:ValidatorCalloutExtender>
                 </div>
                 
                     
                 <div class="form-group col-md-4 sect">
                     <label>Confirmar Clave</label>
                     <asp:TextBox ID="ClaveConfirmada" runat="server"  Width="100%" CssClass="form-control" TextMode="Password"
                ValidationGroup="Cambio" SkinID="formulario"> </asp:TextBox>
           
          
                <asp:RequiredFieldValidator ID="ConfirmacionRequerida" runat="server" ControlToValidate="ClaveConfirmada"
                    Display="Dynamic" ErrorMessage="Ingrese la confirmación de la contraseña" ToolTip="Ingrese una contraseña"
                    ValidationGroup="Cambio">* </asp:RequiredFieldValidator>
                <asp:RegularExpressionValidator ID="ExpresionClaveConfirmar" runat="server" ControlToValidate="ClaveConfirmada"
                    Display="Dynamic" ErrorMessage="La longitud de la clave debe estar enter 8 y 20 caracteres, se requiere por lo menos un número, una letra mayúscula y una minúscula. No se admiten carácteres especiales."
                    ToolTip="La longitud de la clave debe estar enter 8 y 20 caracteres, se requiere por lo menos un número, una letra mayúscula y una minúscula. No se admiten carácteres especiales." ValidationExpression="(?=^.{8,20}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]*"
                    ValidationGroup="Cambio">* </asp:RegularExpressionValidator>
                <asp:CompareValidator ID="compval" Display="dynamic" ControlToValidate="ClaveConfirmada"
                    ValidationGroup="Cambio" ControlToCompare="ClaveNueva" ForeColor="red" Type="String"
                    ErrorMessage="las contraseñas no Coinciden!" EnableClientScript="true" Text="*"
                    runat="server" />
                <asp:ValidatorCalloutExtender ID="Anterior_ValidatorCalloutExtenderr" runat="server"
                    Enabled="True" TargetControlID="ConfirmacionRequerida">
                </asp:ValidatorCalloutExtender>
                <asp:ValidatorCalloutExtender ID="Nueva_ValidatorCalloutExtender" runat="server"
                    Enabled="True" TargetControlID="ExpresionClaveConfirmar">
                </asp:ValidatorCalloutExtender>
                <asp:ValidatorCalloutExtender ID="ValidatorCalloutExtender3" runat="server" Enabled="True"
                    TargetControlID="compval">
                </asp:ValidatorCalloutExtender>
         
            La Contraseña debe tener 8 caracteres minimo.
                     </div>

                 </div>

                
    
       
            
        
<asp:HiddenField ID="ClaveAnteriorHash" runat="server" />
<asp:HiddenField ID="ClaveNuevaHash" runat="server" />
<asp:HiddenField ID="ClaveConfirmadaHash" runat="server" />
<asp:HiddenField ID="HiddenField" runat="server" />

