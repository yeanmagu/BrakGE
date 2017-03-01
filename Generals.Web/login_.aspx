<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="login_.aspx.cs" Inherits="BBVA.Finalista.login_" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>
<%@ Register TagPrefix="captcha" Namespace="WebControlCaptcha" Assembly="WebControlCaptcha" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>Bienvenido a Presto | Cibergestion</title>
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
    <link href="~/Styles/Site.css" rel="stylesheet" type="text/css" />
    <link href="styles/presto.css" rel="stylesheet" type="text/css" />
    <script src="Scripts/Validaciones.js" type="text/javascript"></script>
    <style type="text/css">
        .strengthy-valid
        {
            background: rgba(0, 200, 0, 0.7);
        }
        label.error, .strengthy-error, .strengthy-valid
        {
            display: inline-block;
            padding: 0 2px;
            margin: 0 0 0 5px;
            color: white;
        }
        .strengthy-error, .error
        {
            background: rgba(200, 0, 0, 0.7);
        }
        .strengthy-show-toggle
        {
            padding: 0;
            margin: 0;
        }
        .style4
        {
            width: 144px;
            height: 385px;
        }
        .style5
        {
            width: 42px;
        }
        body
        {
            margin: 8px;
        }
        #PageContainer
        {
            text-align: left;
            display: inline-block;
        }
        .style11
        {
            width: 160px;
        }
        .style12
        {
            padding: inherit;
            margin: inherit;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 11px;
            text-align: left;
            color: #333333;
        }
        .capcha input
        {
            width: 100% !important;
        }
        .style13
        {
            width: 30%;
        }
    </style>
    <script src="Scripts/jquery.min.js" type="text/javascript"></script>
    <script src="Scripts/jquery-ui/js/jquery-ui-1.8.13.custom.min.js" type="text/javascript"></script>
    <%--    <link href="Scripts/jquery-ui/css/blitzer/jquery-ui-1.8.13.custom.css" rel="stylesheet"
        type="text/css" />--%>
    <link href="Scripts/jquery-ui/css/custom-theme/jquery-ui-1.8.22.custom.css" rel="stylesheet"
        type="text/css" />
    <script src="Scripts/jquery.strengthy.js" type="text/javascript"></script>
    <script>
        var $j = jQuery.noConflict();

        function showLegalNoticeDialog() {
            $j(document).ready(function () {
                $j("#legalNoticeDialog").dialog({
                    modal: true,
                    width: 500,
                    buttons: {
                        "Aceptar y Continuar": function () {
                            $j(this).dialog("close");
                        }
                    }
                });

                //$j("#AceptarButton").click(function() {
                //    $j('#txtNewPass').strengthy();
                //});
            });
        }
    </script>
</head>
<body>
    <div id="legalNoticeDialog" title="Terminos y condiciones de uso" style="display: none">
        <p>
            Este sistema es propiedad privada de cibergestion s.a, El sistema es para uso autorizado
            únicamente. No hay garantías de privacidad explícitas o implícitas para usuarios
            (autorizados o no autorizados). Cualquier uso de este sistema y todos los archivos
            en este sistema pueden ser interceptados, monitoreados, grabados, copiados, auditados,
            inspeccionados por los administradores del sistema. Al usar este sistema, el usuario
            consiente dicha intercepción, monitoreo, grabación, copia, auditoría e inspección.
        </p>
        <p>
            El uso no autorizado o inadecuado del sistema puede resultar en penalidades criminales
            y civiles, y sanciones administrativas o disciplinarias. Al continuar usando este
            sistema usted indica su conocimiento y consentimiento a estos términos y condiciones
            de uso. Abandone inmediatamente el sistema si usted no está de acuerdo con las condiciones
            establecidas en este mensaje de advertencia.
        </p>
    </div>
    <form id="Form1" runat="server">
    <asp:ToolkitScriptManager ID="ToolkitScriptManager1" EnablePageMethods="true" EnableScriptGlobalization="true"
        EnableScriptLocalization="true" runat="server">
    </asp:ToolkitScriptManager>
    <div class="page">
        <div style="background: #094FA4">
        </div>
        <div style="height: 80px;">
            <div class="title">
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img alt="" src="images/Bbva.gif" style="height: 50px; width: 118px" />
            </div>
        </div>
        <div class="main">
            <table width="97%">
                <tr>
                    <td align="center">
                        <asp:Image ID="Image1" runat="server" Height="377px" ImageUrl="~/images/LogoAzul.png"
                            Width="528px" />
                    </td>
                    <td valign="top">
                        <table align="center" width="225px" border="0">
                            <tr>
                                <td class="Title1" align="center" colspan="2">
                                    Acceso al Sistema
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <center>
                                        <table width="100%">
                                            <tr>
                                                <td  align ="left" class="textL">
                                                    Usuario:
                                                </td>
                                                <td>
                                                    <asp:TextBox ID="txtUsuario" runat="server" Width="96px" BorderColor="#CCCCCC" BorderStyle="Solid"
                                                        BorderWidth="1px" CssClass="style12" AutoCompleteType="Disabled"></asp:TextBox>
                                                    <asp:RequiredFieldValidator ID="rfvUsuario" runat="server" ControlToValidate="txtUsuario"
                                                        ErrorMessage="Usuario Requerido!" Font-Size="Small">*</asp:RequiredFieldValidator>
                                                    <asp:ValidatorCalloutExtender ID="rfvUsuario_ValidatorCalloutExtender" runat="server"
                                                        Enabled="True" TargetControlID="rfvUsuario">
                                                    </asp:ValidatorCalloutExtender>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="textL">
                                                    Contraseña:
                                                </td>
                                                <td class="style11">
                                                    <asp:TextBox ID="txtPassword" runat="server" Width="96px" BorderColor="#CCCCCC" BorderStyle="Solid"
                                                        BorderWidth="1px" TextMode="Password" CssClass="style12" AutoCompleteType="Disabled"></asp:TextBox>
                                                    <asp:RequiredFieldValidator ID="rfvPassword" runat="server" ControlToValidate="txtPassword"
                                                        ErrorMessage="Contraseña Requerida!" Font-Size="Small">*</asp:RequiredFieldValidator>
                                                    <asp:ValidatorCalloutExtender ID="rfvPassword_ValidatorCalloutExtender" runat="server"
                                                        Enabled="True" TargetControlID="rfvPassword">
                                                    </asp:ValidatorCalloutExtender>
                                                </td>
                                            </tr>
                                        </table>
                                    </center>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <%--  <center>--%>
                                    <table width="100%">
                                        <tr>
                                            <td align="left">
                                                <asp:UpdatePanel ID="UpdatePanel3" runat="server">
                                                    <ContentTemplate>
                                                        <captcha:CaptchaControl ID="LoginCaptchaControl" runat="server" CaptchaWidth="225"
                                                            ValidationGroup="captcha" CssClass="capcha" Width="225px" />
                                                    </ContentTemplate>
                                                    <Triggers>
                                                        <asp:AsyncPostBackTrigger ControlID="Reset" EventName="Click" />
                                                        <%--<asp:AsyncPostBackTrigger ControlID="ibtAcceso" EventName="Click" />--%>
                                                    </Triggers>
                                                </asp:UpdatePanel>
                                            </td>
                                            <td>
                                                <asp:ImageButton ID="Reset" runat="server" Height="28px" ImageUrl="~/images/Refresh.png"
                                                    ValidationGroup="captcha" OnClick="Reset_Click" OnClientClick="$j('.capcha').hide('explode');"
                                                    Width="27px" />
                                            </td>
                                        </tr>
                                    </table>
                                    <%--  </center>--%>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" colspan="2">
                                    <table >
                                        <tr>
                                            <td style="width:230px" align="center">
                                                <asp:ImageButton ID="ibtAcceso" runat="server" ImageUrl="~/images/btnAccederAzul.jpg"
                                                    Height="28px" Width="100px" OnClick="ibtnAccess" />
                                            </td > 
                                            <td style="width:30px">
                                            </td>                                                                                    
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td  align="center" style="width:230px" >
                                    <asp:Label ID="lblMensaje" runat="server" Font-Size="Small"></asp:Label>
                                    <asp:ValidationSummary ID="vsErrores" runat="server" Font-Size="Small" />
                                </td>
                                <td style="width:30px">
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" align="center">
                                    <asp:LinkButton ID="lnkOlvidoContraseña" runat="server" Text="Olvidó su Contraseña?"
                                        CausesValidation="False" PostBackUrl="CambioContrasena.aspx"></asp:LinkButton>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" align="center">
                                    <asp:Image ID="imgverising" runat="server" ImageUrl="~/images/verising.png" />
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
            <table>
                <tr>
                    <td colspan="2">
                        <input id="btnShowNotificacion" runat="server" type="button" style="width: 1px; height: 15px;
                            visibility: hidden;" />
                        <asp:Panel ID="pnlNotificacion" runat="server" BackColor="White" Style="display: none">
                            <asp:UpdatePanel ID="UpdatePanel2" runat="server">
                                <ContentTemplate>
                                    <table class="text" width="400px">
                                        <tr>
                                            <td class="TitleImageUCHeder">
                                                <asp:Label ID="Label1" runat="server" Text="Notificación" CssClass="TextHeder"></asp:Label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center">
                                                <asp:Label ID="Label5" runat="server" Text="Por Politicas de Seguridad es Necesario Cambiar la Contraseña al Ingresar por Primera vez!!"
                                                    CssClass="text"></asp:Label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center">
                                                <input id="AceptarButton" runat="server" type="button" value="Aceptar" onserverclick="AceptarNotificacion"
                                                    cssclass="combo" style="width: 66px; height: 23px; font-family: Arial, Helvetica, sans-serif;
                                                    font-size: 11px;" causesvalidation="false" />
                                            </td>
                                        </tr>
                                    </table>
                                </ContentTemplate>
                            </asp:UpdatePanel>
                        </asp:Panel>
                        <asp:ModalPopupExtender ID="mpeNotificacion" runat="server" TargetControlID="btnShowNotificacion"
                            BehaviorID="mpeNotificacion" PopupControlID="pnlNotificacion" BackgroundCssClass="modalBackground"
                            DropShadow="true">
                        </asp:ModalPopupExtender>
                    </td>
                </tr>
            </table>
            <table>
                <tr>
                    <td colspan="2">
                        <input id="btnAlta" runat="server" type="button" style="width: 1px; height: 15px;
                            visibility: hidden;" />
                        <asp:Panel ID="pntmodal" runat="server" BackColor="White" Style="display: none">
                            <table class="text" width="600px">
                                <tr>
                                    <td class="TitleImageUCHeder" colspan="4">
                                        <asp:Label ID="lblTitle" runat="server" Text="Modificación de Contraseña" CssClass="TextHeder"></asp:Label>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="4">
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    </td>
                                    <td>
                                        <asp:Label ID="Label7" runat="server" Text="Usuario:" CssClass="text"></asp:Label>
                                    </td>
                                    <td>
                                        <asp:TextBox ID="txtUsuarioChange" runat="server" CssClass="text" Enabled="false"
                                            Width="300px" AutoCompleteType="Disabled"></asp:TextBox>
                                    </td>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    </td>
                                    <td>
                                        <asp:Label ID="Label3" runat="server" Text="Nueva Contraseña:" CssClass="text"></asp:Label>
                                    </td>
                                    <td>
                                        <asp:TextBox ID="txtNewPass" runat="server" CssClass="text" TextMode="Password" MaxLength="18"
                                            Height="20px"></asp:TextBox>
                                        <asp:Label ID="lblREAccion" runat="server" Text="*" ForeColor="Red"></asp:Label>
                                        <asp:RequiredFieldValidator ID="rfvAccion" runat="server" ErrorMessage="Nueva Contraseña"
                                            ControlToValidate="txtNewPass" Display="Dynamic" ValidationGroup="Guardar">&nbsp;</asp:RequiredFieldValidator>
                                        <asp:RegularExpressionValidator ID="revNewPass" runat="server" ErrorMessage="La contraseña no cumple con las Politicas requeridas."
                                            ControlToValidate="txtNewPass" ValidationExpression="^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$"
                                            ValidationGroup="Guardar" Display="Dynamic">&nbsp;</asp:RegularExpressionValidator>
                                    </td>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    </td>
                                    <td>
                                        <asp:Label ID="Label4" runat="server" Text="Confirme Contraseña:" CssClass="text"></asp:Label>
                                    </td>
                                    <td>
                                        <asp:TextBox ID="txtConfirPass" runat="server" CssClass="text" TextMode="Password"
                                            MaxLength="18"></asp:TextBox>
                                        <asp:Label ID="Label6" runat="server" Text="*" ForeColor="Red"></asp:Label>
                                        <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ErrorMessage="Confirme Contraseña"
                                            ControlToValidate="txtConfirPass" Display="Dynamic" ValidationGroup="Guardar">&nbsp;</asp:RequiredFieldValidator>
                                        <asp:CompareValidator ID="CompareValidator1" runat="server" ErrorMessage="La Contraseñas no Coinciden Intente de Nuevo"
                                            ControlToValidate="txtNewPass" ControlToCompare="txtConfirPass" Type="String"
                                            ValidationGroup="Guardar" Display="Dynamic">&nbsp;</asp:CompareValidator>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="4">
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="4">
                                        La Contraseña debe tener 8 caracteres minimo, entre ellas al menos 1 letra Mayuscula,
                                        1 letra Minuscula, 1 Número y un Caracter Especial [@#$%^&+=].
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="4">
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" colspan="4">
                                        <input id="btnAcept" runat="server" type="button" value="Aceptar" onserverclick="ChangePassword"
                                            class="button_start" style="width: 66px; height: 23px; font-family: Arial, Helvetica, sans-serif;
                                            font-size: 11px;" validationgroup="Guardar" />
                                        <asp:Button ID="btnCancel" runat="server" Text="Cancelar" Width="66px" Height="23px"
                                            OnClick="btnCancel_Click" CausesValidation="false" />
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="4">
                                        <asp:ValidationSummary ID="vsPageGuardar" runat="server" DisplayMode="List" ShowMessageBox="True"
                                            ShowSummary="False" HeaderText="Proporcione la siguiente información:" ValidationGroup="Guardar" />
                                    </td>
                                </tr>
                            </table>
                        </asp:Panel>
                        <asp:ModalPopupExtender ID="mpeCambioContraseña" runat="server" TargetControlID="btnAlta"
                            BehaviorID="ModalPopupExtender1" PopupControlID="pntmodal" BackgroundCssClass="modalBackground"
                            DropShadow="true">
                        </asp:ModalPopupExtender>
                    </td>
                </tr>
            </table>
            <table style="width: 100%;">
            <tr>
                <td align="left" valign="middle" width="25px" style="height: 19px;">
                    <asp:ModalPopupExtender ID="mpeNotificacionMaster" runat="server" TargetControlID="panNotificacionMaster"
                        BehaviorID="mpeNotificacionMaster" PopupControlID="panNotificacionMaster" BackgroundCssClass="modalBackground"
                        OkControlID="lnkContinuarMaster" OnOkScript="fnClickOK()">
                    </asp:ModalPopupExtender>
                    <asp:Panel ID="panNotificacionMaster" runat="server" Height="150px" Width="300px"
                        CssClass="ModalWindow" Style="display: block">
                        <table width="100%">
                            <tr>
                                <td class="TableTitle">
                                    Mensaje de Notificación
                                </td>
                            </tr>
                            <tr style="height: 20px">
                                <td>
                                </td>
                            </tr>
                            <tr valign="middle" align="center" style="height: 40px">
                                <td class="text" align="center">
                                    <asp:UpdatePanel ID="upNotification" runat="server">
                                        <ContentTemplate>
                                            <asp:Label ID="lblMsgNotificacionMaster" runat="server">Por favor oprima el boton para Continuar</asp:Label>
                                        </ContentTemplate>
                                    </asp:UpdatePanel>
                                </td>
                            </tr>
                            <tr style="height: 20px">
                                <td>
                                </td>
                            </tr>
                            <tr>
                                <td align="center">
                                    <asp:LinkButton ID="lnkContinuarMaster" runat="server" Text="Continuar" CausesValidation="false"></asp:LinkButton>
                                </td>
                            </tr>
                        </table>
                    </asp:Panel>
                </td>
            </tr>
        </table>
        </div>
        <div class="clear">
        </div>
        <div class="footer">
            <table width="100%">
                <tr>
                    <td class="footer" colspan="2">
                        Version 1.0
                    </td>
                </tr>
                <tr>
                    <td class="footer" colspan="2">
                        Presto es desarrollado por Grupo Cibergestión | Todos los derechos reservados ©
                        2010 - 2015
                    </td>
                </tr>
            </table>
        </div>
    </div>

    </form>
</body>
</html>
