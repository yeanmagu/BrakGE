<%@ Page Title="" Language="C#" MasterPageFile="~/Site2.Master" AutoEventWireup="true" CodeBehind="Errors.aspx.cs" Inherits="BrakGeWeb.Errors" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
       <form id="form1" runat="server" >
    <div class="page">
        <div style="background:#E93E58">
           
        </div>
        <div class="header">
            <div class="title">
                <img alt="" src="favicon.ico" style="height: 28px; width: 25px" />
            </div>
            <div class="clear hideSkiplink">
            </div>
        </div>
        <table width="100%" align="center">
            <tr >
                <td align="right" valign="top" rowspan="3" width="50%">
                    <img runat="server" id="SecurityErrorImg" alt="" src="images/security-icon-big.gif"
                        style="width: 30px; height: 30px" />
                    <img runat="server" id="ErrorAppImg" alt="" src="images/Error_App_Net.jpg" style="width: 30px;
                        height: 30px" />
                </td>
                <td valign="top" align="left">
                    <asp:Label runat="server" ID="lblMainMsj" CssClass="ErrorMessage" /><br />
                </td>
            </tr>
            <tr  >
                <td align="left" >
                    <asp:Literal runat="server" ID="ctrLink" />
                </td>
            </tr>
        </table>
        <div class="clear">
        </div>
    </div>
    <div class="footer">
        <table width="100%">
            <tr>
                <td class="footer" colspan="2">
                    version 1.0
                </td>
            </tr>
            <tr>
                <td class="footer" colspan="2">
                    Generals es desarrollado por Grupo Generals | Todos los derechos reservados ©
                    2014 - 2015
                </td>
            </tr>
        </table>
    </div>
    </form>
</asp:Content>
