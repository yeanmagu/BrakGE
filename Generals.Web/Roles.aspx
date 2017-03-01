<%@ Page Title="" Language="C#" MasterPageFile="~/Principal.Master" AutoEventWireup="true"
    CodeBehind="Roles.aspx.cs" Inherits="BrakGeWeb.Roles" %>

<%@ MasterType VirtualPath="~/Principal.Master" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<%@ Register Assembly="System.Web.Extensions, Version=1.0.61025.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35"
    Namespace="System.Web.UI" TagPrefix="asp" %>
<asp:Content ID="Content1" ContentPlaceHolderID="cphData1" runat="server">
    <%--  <asp:ScriptManager ID="ScriptManager1" runat="server">
    </asp:ScriptManager>--%>
    <asp:UpdatePanel ID="UpdatePanel2" runat="server">
        <ContentTemplate>
            <div align="center" style="width: 100%">
                <asp:Panel ID="Busqueda" runat="server" Width="80%" DefaultButton="Buscar" BorderStyle="Ridge">
                    <fieldset id="DatosBusqueda" runat="server" class="fieldsetSecundario" style="text-align: center;
                        background-color: #094fa4">
                        <asp:Label runat="server" ID="Titulo" Text="Datos de búsqueda" ForeColor="Black"></asp:Label>
                        <table style="border-style: ridge; border-color: #FFFFFF; width: 100%" align="center">
                            <tr>
                                <td>
                                    <asp:Label ID="Label23" runat="server" Text="Rol" ForeColor="Black"></asp:Label>
                                    <asp:TextBox ID="NombreFiltro" runat="server" MaxLength="100"></asp:TextBox>
                                </td>
                            </tr>
                            <tr>
                                <td class="alignCenter" >
                                    <asp:Button ID="Buscar" runat="server" Text="Buscar" OnClick="Buscar_Click" />
                                    <asp:Button ID="Limpiar" runat="server" Text="Limpiar" ValidationGroup="Actualizar"
                                        OnClick="Limpiar_Click" />
                                    <asp:Button ID="Nuevo" runat="server" Text="Nuevo" OnClick="Nuevo_Click" />
                                    <asp:Button ID="Salir" runat="server" OnClick="Salir_Click" Text="Salir" />
                                </td>
                            </tr>
                        </table>
                    </fieldset>
                    <fieldset id="Datosresultado" runat="server" style="t<div class="alignRight" id="MarcoExportar" runat="server">ext-align: left" class="fieldsetSecundario">
                        <div class="alignRight" id="MarcoExportar" runat="server">
                            <asp:GridView ID="ResultadoRoles" runat="server" EmptyDataText="No Existe Informacion para Mostrar"
                                AutoGenerateColumns="False" Width="100%" OnRowCommand="ResultadoRoles_RowCommand"
                                DataKeyNames="Id_Rol" AllowPaging="True" OnPageIndexChanging="ResultadoRoles_PageIndexChanging"
                                OnRowDataBound="ResultadoRoles_RowDataBound" CellPadding="4" ForeColor="#333333"
                                GridLines="None">
                                <AlternatingRowStyle BackColor="White" ForeColor="#284775" />
                                <Columns>
                                    <asp:BoundField HeaderText="Id" DataField="Id_Rol" SortExpression="Id_Rol" />
                                    <asp:BoundField HeaderText="Rol" DataField="desc_rol" SortExpression="desc_rol" />
                                    <asp:TemplateField HeaderText="Requiere token" SortExpression="RequiereToken" ItemStyle-CssClass="alignCenter">
                                        <ItemTemplate>
                                            <asp:CheckBox ID="CheckToken" Enabled="false" runat="server" Checked='<%# Bind("RequiereToken") %>' />
                                        </ItemTemplate>
                                        <ItemStyle CssClass="alignCenter" />
                                    </asp:TemplateField>
                                    <asp:TemplateField HeaderText="Interno" SortExpression="Interno" ItemStyle-CssClass="alignCenter">
                                        <ItemTemplate>
                                            <asp:CheckBox ID="CheckInterno" Enabled="false" runat="server" Checked='<%# Bind("Interno") %>' />
                                        </ItemTemplate>
                                        <ItemStyle CssClass="alignCenter" />
                                    </asp:TemplateField>
                                    <asp:ButtonField ButtonType="Link" HeaderText="Editar" Text="<img src='Autenticacion/Login/Editar.png' border=0>"
                                        CommandName="Editar">
                                        <ItemStyle HorizontalAlign="Center" />
                                    </asp:ButtonField>
                                </Columns>
                                <EditRowStyle BackColor="#999999" />
                                <FooterStyle BackColor="#5D7B9D" Font-Bold="True" ForeColor="White" />
                                <HeaderStyle BackColor="#5D7B9D" Font-Bold="True" ForeColor="White" />
                                <PagerStyle BackColor="#284775" ForeColor="White" HorizontalAlign="Center" />
                                <RowStyle BackColor="#F7F6F3" ForeColor="#333333" />
                                <SelectedRowStyle BackColor="#E2DED6" Font-Bold="True" ForeColor="#333333" />
                                <SortedAscendingCellStyle BackColor="#E9E7E2" />
                                <SortedAscendingHeaderStyle BackColor="#506C8C" />
                                <SortedDescendingCellStyle BackColor="#FFFDF8" />
                                <SortedDescendingHeaderStyle BackColor="#6F8DAE" />
                            </asp:GridView>
                            <asp:Button ID="Exportar" runat="server" Text="Exportar" OnClick="Exportar_Click" />
                        </div>
                    </fieldset>
                </asp:Panel>
                <fieldset id="Edicion" runat="server" style="width: 50%;" class="fieldsetSecundario">
                    <asp:Panel runat="server" ID="DatosEdicion" DefaultButton="Guardar" Width="100%"
                        BackColor="#094FA4">
                        <asp:Label runat="server" ID="Label4" Text="Datos de rol" SkinID="LabelTitulo" ForeColor="Black"></asp:Label>
                        <table style="border-style: ridge; border-color: #FFFFFF; width: 100%" cellpadding="0"
                            cellspacing="0">
                            <tr>
                                <td style="width: 40%" class="alignLeft">
                                    <asp:Label ID="Label31" runat="server" Text="Rol" ForeColor="Black"></asp:Label>
                                </td>
                                <td style="width: 60%" class="alignLeft">
                                    <asp:TextBox ID="NombreEdicion" runat="server" Width="90%" MaxLength="50"></asp:TextBox>
                                    <asp:RequiredFieldValidator ID="RequeridoNombre" runat="server" ControlToValidate="NombreEdicion"
                                        ErrorMessage="El campo Rol es obligatorio" ToolTip="El campo Rol es obligatorio"
                                        ValidationGroup="Guardar" Display="Dynamic">*</asp:RequiredFieldValidator>
                                </td>
                            </tr>
                            <tr>
                                <td class="alignLeft">
                                    <asp:Label ID="Label1" runat="server" Text="Rol padre" ForeColor="Black"></asp:Label>
                                </td>
                                <td class="alignLeft">
                                    <asp:DropDownList ID="NivelCreadorEdicion" runat="server" Width="91%" DataTextField="desc_rol"
                                        DataValueField="Id_Rol">
                                    </asp:DropDownList>
                                    <asp:RequiredFieldValidator ID="RequeridoNivel" runat="server" ControlToValidate="NivelCreadorEdicion"
                                        Display="Dynamic" InitialValue="0" ErrorMessage="El campo Rol padre es obligatorio"
                                        ToolTip="El campo Rol padre es obligatorio" ValidationGroup="Guardar">*</asp:RequiredFieldValidator>
                                </td>
                            </tr>
                            <tr>
                                <td class="alignLeft">
                                    <asp:Label ID="Label2" runat="server" Text="Requiere token" ForeColor="Black"></asp:Label>
                                </td>
                                <td class="alignLeft">
                                    <asp:CheckBox ID="RequiereTokenEdicion" runat="server" Text="Si" ForeColor="Black" />
                                </td>
                            </tr>
                            <tr>
                                <td class="alignLeft">
                                    <asp:Label ID="Label5" runat="server" Text="Tipo" ForeColor="Black"></asp:Label>
                                </td>
                                <td class="alignLeft">
                                    <table cellpadding="0" cellspacing="0">
                                        <tr>
                                            <td>
                                                <asp:RadioButtonList ID="TipoRolEdicion" runat="server" AutoPostBack="true" RepeatDirection="Horizontal"
                                                    OnSelectedIndexChanged="TipoRolEdicion_SelectedIndexChanged" ForeColor="Black">
                                                    <asp:ListItem Value="0">Interno</asp:ListItem>
                                                    <asp:ListItem Value="1">Externo</asp:ListItem>
                                                </asp:RadioButtonList>
                                            </td>
                                            <td>
                                                <asp:RequiredFieldValidator ID="RequeridoTipo" runat="server" ControlToValidate="TipoRolEdicion"
                                                    Display="Dynamic" ErrorMessage="El campo Tipo es obligatorio" ToolTip="El campo Tipo es obligatorio"
                                                    ValidationGroup="Guardar">*</asp:RequiredFieldValidator>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td class="alignLeft" colspan="2">
                                    <asp:TreeView ID="ArbolOpciones" runat="server" Width="100%" ShowCheckBoxes="All"
                                        onclick="OnCheckBoxCheckChanged();" ExpandDepth="1" ForeColor="Black">
                                    </asp:TreeView>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" class="alignCenter">
                                    <asp:Button ID="Guardar" runat="server" Text="Guardar" OnClick="Guardar_Click" ValidationGroup="Guardar" />
                                    <asp:Button ID="LimpiarEdicion" runat="server" Text="Limpiar" OnClick="LimpiarEdicion_Click" />
                                    <asp:Button ID="CancelarEdicion" runat="server" Text="Cancelar" OnClick="CancelarEdicion_Click" />
                                </td>
                            </tr>
                        </table>
                    </asp:Panel>
                </fieldset>
            </div>
        </ContentTemplate>
        <Triggers>
            <asp:PostBackTrigger ControlID="Exportar" />
        </Triggers>
    </asp:UpdatePanel>
    <asp:UpdateProgress ID="UpdateProgressBasico" runat="server" AssociatedUpdatePanelID="UpdatePanel2">
        <ProgressTemplate>
            <asp:Panel ID="PanelProgress" runat="server" CssClass="progress">
                <div class="progressContainer">
                    <div class="progressHeader">
                        Por favor espere mientras la operación se realiza....
                    </div>
                    <div class="progressBody">
                        <div class="alignCenter">
                            <asp:Image ID="Image1" runat="server" ImageUrl="~/images/cargando_v2.gif" />
                        </div>
                    </div>
                </div>
            </asp:Panel>
        </ProgressTemplate>
    </asp:UpdateProgress>
</asp:Content>
