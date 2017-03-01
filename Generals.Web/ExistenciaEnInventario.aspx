<%@ Page Title="Existencia En Inventario" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="ExistenciaEnInventario.aspx.cs" Inherits="BrakGeWeb.ExistenciaEnInventario" %>
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
                            <h3 class="panel-title">Consultar Existencia En Inventario
                            </h3>  
				        </div>
                       
				        <!--Panel body-->
				        <div class="panel-body">
					        <!--Tabs content-->
                              <div id="tabFactura" class="tab-pane active in">
                                  <hr />
                                  <div class="row">
                                         <div class="col-md-12">
                                              <div class="col-md-2 form-group">
                                                  <label>Bodega</label>
                                                  <asp:DropDownList ID="Bodega" runat="server" CssClass="form-control" ></asp:DropDownList>  
                                              </div>  
                                             <div class="col-md-2 form-group">
                                                    <label>Codigo de Producto</label>
                                                       <asp:TextBox  CssClass="form-control" ID="Codigo"  runat="server"  Text="0" ></asp:TextBox>
                                              </div>
                                             <div class="col-md-8 form-group">
                                                         <label>&nbsp;</label>
                                                 <br />
                                                 <asp:Button ID="Generar" runat="server" Text="Consultar" OnClick="Generar_Click"  CssClass="btn btn-purple"/>
                                             </div> 
                                         </div>
                                         <div class="col-md-12">
                                                <rsweb:ReportViewer ID="ReportViewer2" runat="server" Font-Names="Verdana" Font-Size="8pt" WaitMessageFont-Names="Verdana" WaitMessageFont-Size="14pt" Height="800px" Width="100%">
                                                     <localreport reportpath="Reportes\Existencia.rdlc" ReportEmbeddedResource="" >
                                                         <datasources>
                                                            <%-- <rsweb:ReportDataSource DataSourceId="ObjectDataSource1" Name="DsTopDX" />
                                                             <rsweb:ReportDataSource DataSourceId="ObjectDataSource2" Name="DsTopContingencia" />--%>
                                                             <rsweb:ReportDataSource DataSourceId="ObjectDataSource3" Name="inventario" />  
                                                             <rsweb:ReportDataSource DataSourceId="ObjectDataSource4" Name="DatosEmpresa" />
                                                         </datasources>
                                                     </localreport>
                                                 </rsweb:ReportViewer>
                        
                                                 <asp:ObjectDataSource ID="ObjectDataSource4" runat="server" OldValuesParameterFormatString="original_{0}" SelectMethod="GetData" TypeName="BrakGeWeb.Datasets.facturaTableAdapters.DatosEmpresaTableAdapter">
                             
                                                     <SelectParameters>
                                                         <asp:Parameter DefaultValue="1" Name="Id" Type="Int32" />
                                                     </SelectParameters>
                             
                                                  </asp:ObjectDataSource>
   
                                                  <asp:ObjectDataSource ID="ObjectDataSource3" runat="server" OldValuesParameterFormatString="original_{0}" SelectMethod="GetData" TypeName="BrakGeWeb.Datasets.InventarioTableAdapters.SP_ExistenciaTableAdapter">
                             
                                                      <SelectParameters>
                                                          <asp:ControlParameter ControlID="Bodega" PropertyName="SelectedValue" DefaultValue="0" Name="bod" Type="Int32"></asp:ControlParameter>
                                                          <asp:ControlParameter ControlID="Codigo" PropertyName="Text" DefaultValue="0" Name="codigoItem" Type="String"></asp:ControlParameter>


                                                      </SelectParameters>
                             
                                                  </asp:ObjectDataSource>
                                         </div>

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
