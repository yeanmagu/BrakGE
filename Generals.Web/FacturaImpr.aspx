<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="FacturaImpr.aspx.cs" Inherits="BrakGeWeb.FacturaImpr" %>
<%@ Register Assembly="Microsoft.ReportViewer.WebForms, Version=11.0.0.0, Culture=neutral, PublicKeyToken=89845dcd8080cc91" Namespace="Microsoft.Reporting.WebForms" TagPrefix="rsweb" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>
<%@ OutputCache Location="None" NoStore="true"%>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
   
    <form id="form1" runat="server">
         <asp:ToolkitScriptManager ID="ToolkitScriptManager1" EnablePageMethods="true" EnableScriptGlobalization="true"
        EnableScriptLocalization="true" runat="server">
    </asp:ToolkitScriptManager>
    <div>
             <rsweb:ReportViewer ID="ReportViewer2" runat="server" Font-Names="Verdana" Font-Size="8pt" WaitMessageFont-Names="Verdana" WaitMessageFont-Size="14pt" Height="800px" Width="100%">
                             <localreport reportpath="Reportes\Factura.rdlc" ReportEmbeddedResource="" >
                                 <datasources>
                                    <%-- <rsweb:ReportDataSource DataSourceId="ObjectDataSource1" Name="DsTopDX" />
                                     <rsweb:ReportDataSource DataSourceId="ObjectDataSource2" Name="DsTopContingencia" />--%>
                                     <rsweb:ReportDataSource DataSourceId="ObjectDataSource3" Name="DatosDocumento" />  
                                     <rsweb:ReportDataSource DataSourceId="ObjectDataSource4" Name="DatosEmpresa" />
                                 </datasources>
                             </localreport>
                         </rsweb:ReportViewer>
                        
                         <asp:ObjectDataSource ID="ObjectDataSource4" runat="server" OldValuesParameterFormatString="original_{0}" SelectMethod="GetData" TypeName="BrakGeWeb.Datasets.facturaTableAdapters.DatosEmpresaTableAdapter">
                             
                             <SelectParameters>
                                 <asp:Parameter DefaultValue="1" Name="Id" Type="Int32" />
                             </SelectParameters>
                             
                          </asp:ObjectDataSource>
   
                          <asp:ObjectDataSource ID="ObjectDataSource3" runat="server" OldValuesParameterFormatString="original_{0}" SelectMethod="GetData" TypeName="BrakGeWeb.Datasets.facturaTableAdapters.Sp_Report_DocTableAdapter">
                             
                              <SelectParameters>
                                  <asp:QueryStringParameter QueryStringField="id" DefaultValue="1021" Name="Id" Type="Int32"></asp:QueryStringParameter>

                              </SelectParameters>
                             
                          </asp:ObjectDataSource>
    </div>
    </form>
</body>
</html>
