<%@ Page Title="Registrar Pagos" Language="C#" MasterPageFile="~/Modal.Master" AutoEventWireup="true" CodeBehind="RegistrarPagos.aspx.cs" Inherits="BrakGeWeb.RegistrarPagos" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
<script src="Scripts/EventForms.js"></script>
    <script src="js/jquery-3.0.0.min.js"></script>
<%--    <script src="js/jquery-2.1.1.min.js"></script>--%>
    <script src="js/toastr.min.js"></script>
    <link href="css/toastr.css" rel="stylesheet" />
    <style type="text/css">
        .visible
        {
            display:none !important;
        }
        #content{
            width:80%;
        }
        .fecha{
                border: 1px solid #000 !important;
                                                     
        }
          .modalBackground 
            {
                background-color: Black;
                filter: alpha(opacity=90);
                opacity: 0.8;
                z-index: 10000;
            }
    </style>
    <script type="text/javascript">
        function Print(NroFact,NA) {

            window.open("ImprimirAcuerdo.aspx?IF=" + NroFact+"&NA="+NA, "directories=no, location=no, menubar=no, scrollbars=yes, statusbar=no, tittlebar=no, width=400, height=400");

        }
        function BindEvents()
        {
            $(document).ready(function ()
            {

            });
           
        }
       
    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <asp:ToolkitScriptManager ID="ToolkitScriptManager1" runat="server"></asp:ToolkitScriptManager>
     <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <div class="row">
              <div class="col-md-12 ">
                    <div class="panel panel-purple ">
				    <!--Panel heading-->
				        <div class="panel-heading">
					        <h3 class="panel-title">Regsitrar Pago</h3>  
				        </div>
				        <!--Panel body-->
				        <div class="panel-body">
					        <!--Tabs content-->
                              <div id="tabFactura" class="tab-pane active in">
                                  <hr />
                                  <div class="row">
                                         <div class="col-md-12">
                                           <asp:Panel ID="pnlGrid" runat="server">                                                    
                                                    <div class="row" >
                                                        <div class="col-md-12">
                                                              <div class="panel formgrid" >                          
                                                                  <div class="panel-body">                  
                                                                        <div class="row">
                                                                            <div class="col-md-12">
                                                                                <div class="searchbox">
						                                                            <div class="input-group custom-search-form">
							                                                            <%--<input type="text" class="form-control" placeholder="Search..">--%>
                                                                                        <asp:TextBox  CssClass="form-control input-sm" ID="TxtBusqueda" runat="server" OnTextChanged="TxtBusqueda_TextChanged" AutoPostBack="True" placeholder="Buscar.." ></asp:TextBox>
							                                                            <span class="input-group-btn">
								                                                            <button class="text-muted" id="Buscar" runat="server" onserverclick="TxtBusqueda_TextChanged" type="button"><i class="fa fa-search"></i></button>
							                                                            </span>
						                                                            </div>
					                                                            </div>
                                                                                  <%--  <div class="dataTables_filter" id="demo-dt-basic_filter"><label>Buscar:<asp:TextBox  CssClass="form-control input-sm" ID="TxtBusqueda" runat="server" OnTextChanged="TxtBusqueda_TextChanged" AutoPostBack="True"  ></asp:TextBox>  </div>  --%>                    
                                                                                    <asp:GridView ID="GridDocumentos" runat="server" CssClass="table table-striped table-bordered dataTable no-footer dtr-inline" cellspacing="0"  role="grid"  PageSize="10" AllowPaging="True" AllowSorting="True" AutoGenerateColumns="false" >
                                                                                            <pagersettings firstpagetext="Primero &nbsp;" lastpagetext="Última &nbsp;" nextpagetext="Siguiente &nbsp;"  previouspagetext="Anterior &nbsp;" Mode="NextPreviousFirstLast" />
                                                                                                <AlternatingRowStyle BackColor="#F4F4F4" />
                                                                                                <Columns>                                       
                                                                                                    <asp:BoundField DataField="Id" HeaderText="Código" SortExpression="Id">
                                                                                                    <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                                                                    </asp:BoundField>
                                                                                                    <asp:BoundField DataField="Cliente" HeaderText="Cliente"    SortExpression="Cliente" />
                                                                                                    <asp:BoundField DataField="TipoMovimiento" HeaderText="Movimiento"    SortExpression="TipoMovimiento" />
                                                                                                    <asp:BoundField DataField="FormaPago" HeaderText="Forma de Pago"    SortExpression="FormaPago" />
                                                                                                    <asp:BoundField DataField="EstadoDocumento" HeaderText="Estado"    SortExpression="EstadoDocumento" />
                                                                                                    <asp:BoundField DataField="EstadoPago" HeaderText="EP"    SortExpression="EstadoPago" />
                                                                                                    <asp:TemplateField HeaderText="SaldoCapital" Visible ="true" SortExpression="Saldo Capital">
                                                                                                            <ItemTemplate>
                                                                                                                <asp:Label ID="lbl_SaldoCapital" runat="server" Text='<%# (String.Format("{0:C}", Eval("Total")))  %>'></asp:Label>
                                                                                                            </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderStyle-HorizontalAlign="Center" HeaderText="Actions">
                                                                                                        <ItemTemplate>     
                                                                                                                      
                                                                                                           <asp:ImageButton ID="Cobrar"  ToolTip="Cobrar"          ImageUrl="~/images/payment.png" CssClass="img-border"   Height="24px" Width="24px" ImageAlign="Middle"
                                                                                                                runat="server"  CommandArgument='<%# Eval("Id") %>' CommandName="IdSolicitud"  OnCommand="BtnSelect_Command" />
                                                                                                           
                                                                                                              
                                                                                                        </ItemTemplate>
                                                                   
                                                                                                    </asp:TemplateField>                                                              
                                                                                                </Columns>
                                                                                    </asp:GridView>
                                                                            </div>
                                                                        </div>  
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </asp:Panel>
                                            
                                         </div>
                                  </div>
                                    
                              </div>
                              
                        </div>
                     </div>                      
				</div>
               
			</div>
            
            <asp:TextBox ID="Msj1" runat="server" CssClass="visible"></asp:TextBox>
            <asp:TextBox ID="Type1" runat="server" CssClass="visible"></asp:TextBox>
            <script type="text/javascript" >
                Sys.Application.add_load(BindEvents);
            </script>
         
        </ContentTemplate>
          
    </asp:UpdatePanel>
        <asp:Button ID="btnInicial" Style="display:none;" runat="server"/>
         <ajaxToolkit:ModalPopupExtender ID="ModalCancelar" runat="server" TargetControlID="btnInicial" 
            BackgroundCssClass="modalBackground " PopupControlID="PanelModal">

        </ajaxToolkit:ModalPopupExtender>
      <asp:Panel ID="PanelModal" runat="server" style="display:none; background:white; width:90%; height:95%">
               <asp:UpdatePanel ID="UpdatePanel2" runat="server">
                    <ContentTemplate>
                          <div class="modal-header">
                            <h3 id="myModalLabel">Registrar Pago</h3>
                          </div>
                          <div class="modal-body  panel-body">
                                <div class="container-fluid well">
                                     <div class="panel-body"> 
                                        <div class="row">
                                            <div class="col-md-12">
                                                <asp:GridView ID="Detalle" runat="server" CssClass="table table-striped table-bordered dataTable no-footer dtr-inline" AllowPaging="True" 
                                                    AllowSorting="True" GridLines="None"   AutoGenerateColumns="False"   PageSize="5" OnPageIndexChanging="Detalle_PageIndexChanging" OnRowDataBound="Detalle_RowDataBound">
                                                        <pagersettings firstpagetext="Primero &nbsp;" lastpagetext="Última &nbsp;" nextpagetext="Siguiente &nbsp;"  previouspagetext="Anterior &nbsp;" Mode="NextPreviousFirstLast" />
                                                            <AlternatingRowStyle BackColor="#F4F4F4" />
                                                            <Columns>
                                                                                                   
                                                                <asp:TemplateField HeaderText="NroCuota" Visible ="true" SortExpression="Nro Cuota" >
                                                                    <ItemTemplate>
                                                                        <asp:Label ID="lbl_NroCuota" runat="server" Text='<%# Eval("NroCuota") %>'></asp:Label>
                                                                        </ItemTemplate>
                                                                              
                                                                </asp:TemplateField>
                                                                    <asp:TemplateField HeaderStyle-HorizontalAlign="Center" Visible ="true" HeaderText="Fecha Pago">
                                                                    <ItemTemplate>
                                                                        <asp:Label ID="lbl_Fecha" runat="server" Text='<%# Eval("Fecha") %>'></asp:Label>
                                                                        </ItemTemplate>
                                                                                  
                                                                        <HeaderStyle HorizontalAlign="Center" />
                                                                </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="SaldoCapital" Visible ="true" SortExpression="Saldo Capital">
                                                                        <ItemTemplate>
                                                                        <asp:Label ID="lbl_SaldoCapital" runat="server" Text='<%# (String.Format("{0:C}", Eval("SaldoCapital")))  %>'></asp:Label>
                                                                        </ItemTemplate>
                                                                  
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderText="Valor" Visible ="true" SortExpression="Valor a Pagar">
                                                                    <ItemTemplate>
                                                                        <asp:Label ID="lbl_Valor" runat="server" Text='<%# (String.Format("{0:C}", Eval("Valor"))) %>' ></asp:Label>
                                                                        </ItemTemplate>
                                                                    
                                                                </asp:TemplateField>
                                                                <asp:TemplateField HeaderText="SaldoPendiente" Visible ="true" SortExpression="Saldo Pendiente">
                                                                        <ItemTemplate>
                                                                        <asp:Label ID="lbl_SaldoPendiente" runat="server" Text='<%# (String.Format("{0:C}", Eval("SaldoPendiente"))) %>'></asp:Label>
                                                                        </ItemTemplate>                                                                     
                                                                </asp:TemplateField>
                                                                <asp:BoundField DataField="Estado" HeaderText="Estado"    SortExpression="Estado" />
                                                                    <asp:TemplateField HeaderStyle-HorizontalAlign="Center" HeaderText="">
                                                                    <ItemTemplate>                       
                                                                        <asp:ImageButton ID="Cuota"  ToolTip="Cancelar esta cuota"          ImageUrl="~/images/payment.png" CssClass="img-circle"  Height="24px" Width="24px" ImageAlign="Middle"
                                                                            runat="server"  CommandArgument='<%# Eval("Id") %>' CommandName="IdSolicitud"  OnCommand="Cuota_Command" />
                                                                    </ItemTemplate>
                                                                   
                                                                </asp:TemplateField> 
                                                            </Columns>
                                                </asp:GridView>
                                            </div>
                                        </div>
                                        <div class="row">
                                               
                                                <div class="col-md-2 form-group">
                                                     <label>Nro. Factura</label>
                                                     <asp:TextBox ID="NroFactura" runat="server" CssClass="form-control" ReadOnly="true"></asp:TextBox>
                                                     <asp:TextBox ID="Id" runat="server" CssClass="form-control" visible="false"></asp:TextBox>
                                                </div>
                                                <div class="col-md-2 form-group">
                                                <label>Nro. Acuerdo</label>
                                                    <asp:TextBox ID="NroAcuerdo" runat="server" CssClass="form-control" Text="0" ReadOnly="true"></asp:TextBox>
                                                </div>
                                                <div class="col-md-2 form-group">
                                                    <label>Nro. Cuota</label>
                                                    <asp:TextBox ID="NroCuota" runat="server" CssClass="form-control" ReadOnly="true" Text="0">  </asp:TextBox>
                                                </div>
                                               
                                                <div class="col-md-2 form-group" >
                                                       <label>Modo Pago</label>
                                                    <asp:DropDownList ID="ModoPago" runat="server" CssClass="form-control">
                                                        <asp:ListItem>Efectivo</asp:ListItem>
                                                        <asp:ListItem>Tarjeta Debito</asp:ListItem>
                                                        <asp:ListItem>Tarjeta Credito</asp:ListItem>
                                                        <asp:ListItem>Cheque</asp:ListItem>
                                                    </asp:DropDownList>
                                                </div>
                                                 <div class="col-md-2 form-group" >
                                                    <label>Fecha</label>
                                                    <asp:TextBox ID="Fecha" runat="server" CssClass="form-control fecha" ReadOnly="true"></asp:TextBox>
                                                </div>
                                        </div>
                                        <div class="row">
                                                 <div class="col-md-2 form-group">
                                                          <label>Total</label>
                                                    <asp:TextBox ID="Total" runat="server" CssClass="form-control" ReadOnly="true" ></asp:TextBox>
                                                     <asp:TextBox ID="TotalGuardar" runat="server" CssClass="form-control" Text="0" Visible="false"></asp:TextBox>
                                                </div>
                                                <div class="col-md-2 form-group">
                                                <label>Efectivo</label>
                                                    <asp:TextBox ID="Efectivo" runat="server" CssClass="form-control" Text="0" OnTextChanged="Efectivo_TextChanged" AutoPostBack="true" ></asp:TextBox>
                                                     <asp:TextBox ID="EfectivoGuardar" runat="server" CssClass="form-control" Text="0" Visible="false"></asp:TextBox>
                                                </div>
                                                <div class="col-md-2 form-group">
                                                    <label>Cambio</label>
                                                    <asp:TextBox ID="Cambio" runat="server" CssClass="form-control" ReadOnly="true" Text="0">  </asp:TextBox>
                                                     <asp:TextBox ID="CambioGuardar" runat="server" CssClass="form-control" Text="0" Visible="false"></asp:TextBox>
                                                </div>  
                                               
                                        </div>     
                                        <div class="row">
                                                <label>Notas</label>
                                                    <asp:TextBox ID="Notas" runat="server" CssClass="form-control" TextMode="MultiLine" Text="">  </asp:TextBox>
                                         </div>   
                                    </div>
                                         
                                </div>
                  
                          </div>
                          <div class="modal-footer">

                              <asp:Button  ID="GuardarRecibo" runat="server" OnClick="GuardarRecibo_Click"   CssClass="btn btn-purple" Text="Guardar" />
                              <asp:Button  ID="Imprimir" runat="server" OnClick="BtnImprimir_Click"  CssClass="btn btn-purple" Text="Imprimir" />
                               <asp:Button  ID="CancelarRecibo" runat="server" OnClick="CancelarRecibo_Click"  CssClass="btn btn-purple" Text="Cancelar" />
                               <asp:Button  ID="CloseCliente" runat="server" OnClick="CloseCliente_Click"  CssClass="btn btn-purple" Text="Cerrar" />
                          </div>
                        
                    </ContentTemplate>
               </asp:UpdatePanel>
     </asp:Panel>
     <!-- Modal -->
      <script src="js/jquery-3.0.0.min.js"></script>
<%--    <script src="js/jquery-2.1.1.min.js"></script>--%>
    <script src="js/toastr.min.js"></script>
    <link href="css/toastr.css" rel="stylesheet" />
    <script type="text/javascript">

        function bPostaBack() {
            displayToastr();
            var stateObj = { foo: "bar" };
            history.pushState(stateObj, "page 2", "RegistrarPagos.aspx");

        }

        function aPostBack() {

            displayToastr();

        }
        Sys.Application.add_init(appl_init);

        function appl_init() {
            var pgRegMgr = Sys.WebForms.PageRequestManager.getInstance();
            pgRegMgr.add_beginRequest(BHandler);
            pgRegMgr.add_endRequest(EHandler);
        }

        function BHandler() {
            bPostaBack();
        }

        function EHandler() {
            aPostBack();
        }

       
       
        function displayToastr()
        {
            var Ms = $('#<%=Msj1.ClientID%>').val();
             var typ = $('#<%=Type1.ClientID%>').val();
            toastr.options =
            {

                "closeButton": false,
                "debug": true,
                "newestOnTop": false,
                "progressBar": true,
                "positionClass": "toast-bottom-full-width",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "5000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
            if (typ == "info") {
                // Display a info toast, with no title
                toastr.info(Ms)
                Ms = '';
                typ = '';
            } else if (typ == "warning") {
                // Display a warning toast, with no title
                toastr.warning(Ms)
                Ms = '';
                typ = '';
            } else if (typ == "success") {
                // Display a success toast, with a title
                toastr.success(Ms)
                Ms = '';
                typ = '';
            } else if (typ == "error") {
                // Display an error toast, with a title
                toastr.error(Ms)
                Ms = '';
                typ = '';
            }
            $('#<%=Msj1.ClientID%>').val("") ;
            $('#<%=Type1.ClientID%>').val("") ;
        }
    </script>
</asp:Content>
