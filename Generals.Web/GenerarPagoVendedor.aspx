<%@ Page Title="Generar Pago Vendedor" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="GenerarPagoVendedor.aspx.cs" Inherits="BrakGeWeb.GenerarPagoVendedor" %>
<%@ Register Assembly="Microsoft.ReportViewer.WebForms, Version=11.0.0.0, Culture=neutral, PublicKeyToken=89845dcd8080cc91" Namespace="Microsoft.Reporting.WebForms" TagPrefix="rsweb" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
<script src="Scripts/EventForms.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
     <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
              <div class="row">
              <div class="col-md-12 ">
                    <div class="panel panel-purple ">
				    <!--Panel heading-->
				        <div class="panel-heading">
                            <h3 class="panel-title">Generar Pago Vendedor
                            </h3>  
				        </div>
                       
				        <!--Panel body-->
				        <div class="panel-body">
                                  <div class="row">
                                         <div class="col-md-12">
                                              <div class="col-md-2 form-group">
                                                  <label>Vendedor</label>  <asp:RequiredFieldValidator ID="RequiredFieldValidator5" runat="server"  ErrorMessage="Vendedor  Requerido" Text="*" 
                                                                                     ControlToValidate="Vendedor" ForeColor="#ff0000" ValidationGroup="Generar" SetFocusOnError="true"></asp:RequiredFieldValidator>
                                                  <asp:DropDownList ID="Vendedor" runat="server" CssClass="form-control" ></asp:DropDownList>  
                                              </div>  
                                             <div class="col-md-2 form-group">
                                                    <label>Fecha Inicial</label>  <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server"  ErrorMessage="Fecha  Requerido" Text="*" 
                                                                                     ControlToValidate="FechaInicial" ForeColor="#ff0000" ValidationGroup="Generar" SetFocusOnError="true"></asp:RequiredFieldValidator>
                                                       <asp:TextBox  CssClass="form-control fecha" ID="FechaInicial"  runat="server"  TextMode="Date" Height="34px"> ></asp:TextBox>
                                              </div>
                                             <div class="col-md-2 form-group">
                                                    <label>Fecha Final</label> <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server"  ErrorMessage="Fecha  Requerido" Text="*" 
                                                                                     ControlToValidate="FechaFinal" ForeColor="#ff0000" ValidationGroup="Generar" SetFocusOnError="true"></asp:RequiredFieldValidator>
                                                       <asp:TextBox  CssClass="form-control fecha" ID="FechaFinal"  runat="server"  TextMode="Date" Height="34px"></asp:TextBox>
                                              </div>
                                             <div class="col-md-6 form-group">
                                                         <label>&nbsp;</label>
                                                 <br />
                                                 <asp:Button ID="Generar" runat="server" Text="Consultar" OnClick="Generar_Click"  CssClass="btn btn-purple" ValidationGroup="Generar"/>
                                             </div> 
                                         </div>
                                         <div class="col-md-12">
                                                <rsweb:ReportViewer ID="ReportViewer2" runat="server" Font-Names="Verdana" Font-Size="8pt" WaitMessageFont-Names="Verdana" WaitMessageFont-Size="14pt" Height="800px" Width="100%">
                                                    <LocalReport ReportPath="Reportes\InformeVentas.rdlc" >
                                                        <DataSources>
                                                            <rsweb:ReportDataSource Name="DatosEmpresa" DataSourceId="ObjEmpresa"></rsweb:ReportDataSource>
                                                            <rsweb:ReportDataSource Name="DatosDocumento" DataSourceId="ObjDatos"></rsweb:ReportDataSource>
                                                        </DataSources>
                                                    </LocalReport>
                                                   <%-- <localreport reportpath="Reportes\InformeVentas.rdlc" ReportEmbeddedResource="" >
                                                         <datasources>
                                                          
                                                             <rsweb:ReportDataSource DataSourceId="ObjectDataSource3" Name="inventario" />  
                                                             <rsweb:ReportDataSource DataSourceId="ObjectDataSource4" Name="DatosEmpresa" />
                                                         </datasources>
                                                     </localreport>--%>
                                                 </rsweb:ReportViewer>

                                             <%-- <asp:ObjectDataSource ID="ObjectDataSource4" runat="server" OldValuesParameterFormatString="original_{0}" SelectMethod="GetData" TypeName="BrakGeWeb.Datasets.facturaTableAdapters.DatosEmpresaTableAdapter">
                             
                                                     <SelectParameters>
                                                         <asp:Parameter DefaultValue="1" Name="Id" Type="Int32" />
                                                     </SelectParameters>
                             
                                                  </asp:ObjectDataSource>
   
                                                  <asp:ObjectDataSource ID="ObjectDataSource3" runat="server" OldValuesParameterFormatString="original_{0}" SelectMethod="GetData" TypeName="BrakGeWeb.Datasets.InventarioTableAdapters.SP_ExistenciaTableAdapter">
                             
                                                      <SelectParameters>
                                                          <asp:ControlParameter ControlID="Bodega" PropertyName="SelectedValue" DefaultValue="0" Name="bod" Type="Int32"></asp:ControlParameter>
                                                          <asp:ControlParameter ControlID="Codigo" PropertyName="Text" DefaultValue="0" Name="codigoItem" Type="String"></asp:ControlParameter>


                                                      </SelectParameters>
                             
                                                  </asp:ObjectDataSource>--%>
                                             <asp:ObjectDataSource runat="server" ID="ObjDatos" OldValuesParameterFormatString="original_{0}" SelectMethod="GetData" TypeName="BrakGeWeb.Datasets.InformeDeGananciasTableAdapters.GenerarGananciasTableAdapter">
                                                 <SelectParameters>
                                                     <asp:ControlParameter ControlID="Vendedor" PropertyName="SelectedValue" Name="Documento" Type="Int32"></asp:ControlParameter>
                                                     <asp:ControlParameter ControlID="FechaInicial" PropertyName="Text" Name="fechaIn" Type="DateTime"></asp:ControlParameter>
                                                     <asp:ControlParameter ControlID="FechaFinal" PropertyName="Text" Name="fechaFin" Type="DateTime"></asp:ControlParameter>
                                                 </SelectParameters>
                                             </asp:ObjectDataSource>
                                             <asp:ObjectDataSource runat="server" ID="ObjEmpresa" OldValuesParameterFormatString="original_{0}" SelectMethod="GetData" TypeName="BrakGeWeb.Datasets.facturaTableAdapters.DatosEmpresaTableAdapter">
                                                 <SelectParameters>
                                                     <asp:Parameter DefaultValue="1" Name="Id" Type="Int32"></asp:Parameter>
                                                 </SelectParameters>
                                             </asp:ObjectDataSource>
                                         </div>

                                  </div>
                             
                        </div>
                     </div>                      
				</div>
               
			</div>
           
           
            
            <div id="pnl">
                <asp:Panel ID="PnlMsg" runat="server"  Width="100%"></asp:Panel>
            </div>
        </ContentTemplate>
    </asp:UpdatePanel>
</asp:Content>
