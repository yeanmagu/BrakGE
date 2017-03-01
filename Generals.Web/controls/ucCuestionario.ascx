<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="ucCuestionario.ascx.cs"
    Inherits="Presto.BBVA.controls.ucCuestionario" %>
<link href="../Styles/presto.css" rel="stylesheet" type="text/css" />
<asp:GridView ID="gvCuestionario" runat="server" AutoGenerateColumns="False" Caption="Declaración Personal de Salud"
    CssClass="text">
    <HeaderStyle CssClass="TableTitle" />
    <Columns>
        <asp:TemplateField HeaderText="#XX" Visible="false">
            <ItemTemplate>
                <asp:Label ID="IDCuestionarioParticipanteLabel" Text='<%# Bind("IdCuestionarioparticipante") %>'
                    runat="server" Visible="false" />
                <asp:Label ID="lblID" Text='<%# Bind("Valor") %>' runat="server" Visible="false" />
            </ItemTemplate>
        </asp:TemplateField>
        <asp:BoundField HeaderText="&nbsp;&nbsp;# &nbsp;&nbsp;" DataField="Numera" />
        <asp:BoundField HeaderText="Descripción" DataField="Descripcion" ControlStyle-CssClass="coldescripcion" />
        <asp:TemplateField HeaderText="Titular" ItemStyle-HorizontalAlign="Center">
            <ItemTemplate>
                <asp:RadioButtonList ID="radbtnTitular" runat="server" RepeatDirection="Horizontal"
                    SelectedValue='<%# bind("RespuestaSolicitante") %>'>
                    <asp:ListItem Text="SI" Value="1" />
                    <asp:ListItem Text="NO" Value="2" />
                </asp:RadioButtonList>
            </ItemTemplate>
            <ControlStyle CssClass="anchoColumna3" />
        </asp:TemplateField><%--
        <asp:TemplateField HeaderText="Cónyuge / Codeudor" ItemStyle-HorizontalAlign="Center">
            <ItemTemplate>
                <asp:RadioButtonList ID="radbtnConyuge" runat="server" RepeatDirection="Horizontal"
                    SelectedValue='<%# bind("RespuestaConyuge") %>'>
                    <asp:ListItem Text="SI" Value="1" />
                    <asp:ListItem Text="NO" Value="2" />
                </asp:RadioButtonList>
            </ItemTemplate>
            <ControlStyle CssClass="anchoColumna3" />
        </asp:TemplateField>--%>
        <asp:TemplateField HeaderText="Codeudor" Visible="false">
            <ItemTemplate>
                <input type="radio" name="rdbTitular" value='<%# Eval("respuestacodeudor") %>' />
            </ItemTemplate>
            <ControlStyle CssClass="anchoColumna3" />
        </asp:TemplateField>
        <asp:TemplateField HeaderText="Detalles">
            <ItemTemplate>
                <asp:TextBox ID="txtDetalle" runat="server" Rows="3" TextMode="MultiLine" Text='<%# bind("Detalles") %>' />
            </ItemTemplate>
            <ControlStyle CssClass="detalles" />
        </asp:TemplateField>
    </Columns>
</asp:GridView>
<style type="text/css">
    .anchoColumna3
    {
        width: 50px !important;
    }
    .coldescripcion
    {
        /*width: 760px;*/
        text-align: justify;
    }
    .detalles
    {
        width: 250px;
    }
    
    .encabezado
    {
        color: White;
        background-image: url(../images/BarColombia.jpg);
        text-align: center;
        background-repeat: no-repeat;
    }
    #gvCuestionario
    {
        width: 100%;
    }
</style>
