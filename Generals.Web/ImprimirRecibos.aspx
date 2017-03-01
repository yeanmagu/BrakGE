<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ImprimirRecibos.aspx.cs" Inherits="BrakGeWeb.ImprimirRecibos" %>
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
                             <localreport reportpath="Reportes\Recibos.rdlc" ReportEmbeddedResource="" >
                                 <datasources>
                                     <rsweb:ReportDataSource DataSourceId="ObjectDataSource3" Name="DatosEmpresa" />  
                                     <rsweb:ReportDataSource DataSourceId="ObjectDataSource4" Name="AcuerdoPago" />
                                 </datasources>
                             </localreport>
                         </rsweb:ReportViewer>
                        
                         <asp:ObjectDataSource ID="ObjectDataSource3" runat="server" OldValuesParameterFormatString="original_{0}" SelectMethod="GetData" TypeName="BrakGeWeb.Datasets.facturaTableAdapters.DatosEmpresaTableAdapter">
                             
                             <SelectParameters>
                                 <asp:Parameter DefaultValue="1" Name="Id" Type="Int32" />
                             </SelectParameters>
                             
                          </asp:ObjectDataSource>
   
                          <asp:ObjectDataSource ID="ObjectDataSource4" runat="server" OldValuesParameterFormatString="original_{0}" SelectMethod="GetData" TypeName="BrakGeWeb.Datasets.RecibosTableAdapters.Sp_ImprmirReciboTableAdapter">

                                <SelectParameters>
                                    <asp:QueryStringParameter QueryStringField="NA" Name="Id" Type="Int32"></asp:QueryStringParameter>

                              </SelectParameters>
                             
                          </asp:ObjectDataSource>
    </div>
    </form>
</body>
</html>
