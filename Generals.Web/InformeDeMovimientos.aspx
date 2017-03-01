<%@ Page Title="Informe de Movimiento" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="InformeDeMovimientos.aspx.cs" Inherits="BrakGeWeb.InformeDeMovimientos" %>
<%@ Register Assembly="Microsoft.ReportViewer.WebForms, Version=11.0.0.0, Culture=neutral, PublicKeyToken=89845dcd8080cc91" Namespace="Microsoft.Reporting.WebForms" TagPrefix="rsweb" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <style>
        .fecha{
                border: 1px solid #000 !important;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
           <div class="row">
              <div class="col-md-12 ">
                    <div class="panel panel-primary ">
				    <!--Panel heading-->
				        <div class="panel-heading">
					        <%--<div class="panel-control">--%>
                               <%--  <div class="col-md-12 col-centered" >
                                    <header class="header">--%>
<%--                                    <h4>                        --%>
                                        <!-- setea un asp:label con variables de sesion para poner el titulo dinamicanmente -->
                                        <asp:Label ID="Tittle" runat="server" Text="Informe de Movimientos" Font-Size="Large" BorderColor="#3366FF"></asp:Label>                                       
                                  <%--  </h4>--%>

                                    <%--</header>	
		    				   
                                 </div>	--%>
					        <%--</div>--%>
				        </div>
                       
				        <!--Panel body-->
				        <div class="panel-body">
					        <!--Tabs content-->
                              <div id="tabFactura" class="tab-pane active in">                                
                                  <div class="col-md-12">
                                              <%--  <asp:Panel ID="pnlmsjFact" runat="server" CssClass="TextCaja"></asp:Panel> --%>
                                                <asp:Panel ID="pnlGridFac" runat="server" CssClass="panel-default">
                                                        <div class="row">
                                                                  <div class="form-group col-md-2">
                                                                        <label class="TextCaja">Fecha Inicial</label>  
                                                                            <asp:TextBox ID="FechaInicial" CssClass="form-control fecha" TextMode="Date" Height="32px" runat="server"></asp:TextBox>
                                                                  </div>
                                                                   <div class="form-group col-md-2">
                                                                      <label>Fecha Final</label>
                                                                      
                                                                        <asp:TextBox ID="FechaFinal" CssClass="form-control fecha" TextMode="Date" Height="32px" runat="server"></asp:TextBox>
                                                                  </div>
                                                                  <%-- <div class="form-group col-md-3">
                                                                        <label class="TextCaja">Bodega:</label>                    
                                                                          <asp:DropDownList ID="CmbBodega" CssClass="form-control TextCaja"  runat="server"  AutoPostBack="true">
                                      
                                                                       </asp:DropDownList>
                                                                                 
                                                                  </div>--%>
                                                                   <div class="form-group col-md-3">
                                                                       
                                                                        <label class="TextCaja">Tipo Movimiento:</label>                    
                                                                          <asp:DropDownList ID="TipoMov" CssClass="form-control TextCaja"  runat="server"  AutoPostBack="true">
                                      
                                                                       </asp:DropDownList>
                                                                  </div>                            
                                                        
                                                                </div>                    
                                 
                                                </asp:Panel>                   
                                            </div>
                                  <div class="col-md-12">           
                    <asp:Button ID="BtnGuardar" CssClass="btn btn-primary" runat="server" Text="Generar" OnClick="BtnGuardar_Click" ValidationGroup="Grabar" />              
                    <asp:Button ID="BtnLimpiar" CssClass="btn btn-primary" runat="server" Text="Limpiar"  />
                    <asp:Button ID="BtnCerrar" CssClass="btn btn-primary" runat="server" Text="Cerrar"  />              
                 </div>
                 <div class="row">
                    <div class="form-group col-md-12">

                        <rsweb:ReportViewer ID="REporteMovimientos" runat="server" Font-Names="Verdana" Font-Size="8pt" WaitMessageFont-Names="Verdana" WaitMessageFont-Size="14pt" Width="100%" Height="500px">
                            <LocalReport ReportPath="Reportes\InformeDeMovimiento.rdlc"  >
                                <DataSources>
                                    <rsweb:ReportDataSource DataSourceId="ObjectDataSource1" Name="DatosDocumento" />
                                     <rsweb:ReportDataSource DataSourceId="ObjectDataSource4" Name="DatosEmpresa" />
                                </DataSources>
                            </LocalReport>
                        </rsweb:ReportViewer>                              
                      
                        <asp:ObjectDataSource ID="ObjectDataSource1" runat="server" OldValuesParameterFormatString="original_{0}" SelectMethod="GetData" TypeName="BrakGeWeb.Datasets.InformeDeMovimientoTableAdapters.TotalVentasMesTableAdapter">

                            <SelectParameters>
                                <asp:ControlParameter ControlID="FechaInicial" PropertyName="Text" Name="FechaInicial" Type="DateTime"></asp:ControlParameter>
                                <asp:ControlParameter ControlID="FechaFinal" PropertyName="Text" Name="FechaFinal" Type="DateTime"></asp:ControlParameter>
                                <asp:ControlParameter ControlID="TipoMov" PropertyName="SelectedValue" Name="tipoMov" Type="Int32"></asp:ControlParameter>


                            </SelectParameters>
                        </asp:ObjectDataSource>
                         <asp:ObjectDataSource ID="ObjectDataSource4" runat="server" OldValuesParameterFormatString="original_{0}" SelectMethod="GetData" TypeName="BrakGeWeb.Datasets.facturaTableAdapters.DatosEmpresaTableAdapter">
                             
                             <SelectParameters>
                                 <asp:Parameter DefaultValue="1" Name="Id" Type="Int32" />
                             </SelectParameters>
                             
                          </asp:ObjectDataSource>
                      
                    </div>
                </div>
                               </div>
                              
                        </div>
                     </div>                      
				</div>
               
			</div>
           <script type="text/javascript">
              
            </script>
            
        </ContentTemplate>
         <Triggers>
           
            
        </Triggers>

    </asp:UpdatePanel>
</asp:Content>
