<%@ Page Title="Cuentas Pendientes" Language="C#" MasterPageFile="~/Modal.Master" AutoEventWireup="true" CodeBehind="CuentasPendientes.aspx.cs" Inherits="BrakGeWeb.CuentasPendientes" %>  
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
<script src="Scripts/EventForms.js"></script>
    <script src="js/jquery-3.0.0.min.js"></script>
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
        function BindEvents()
        {
            $(document).ready(function ()
            {

            });
           
        }
        function Print(NroFact)
        {
            window.open("FacturaImpr.aspx?Id=" + NroFact, "directories=no, location=no, menubar=no, scrollbars=yes, statusbar=no, tittlebar=no, width=400, height=400");

        }
    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
     <asp:ToolkitScriptManager ID="ToolkitScriptManager1" runat="server"></asp:ToolkitScriptManager>
     <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
             <div id="tabFactura" class="tab-pane active in">
                                  <div class="row">
                                         <div class="col-md-12">
                                            <asp:Panel ID="pnlGrid" runat="server">
                                                <div class="row" >
                                                    <div class="col-md-12">                            
                                                            <div class="panel panel-purple" >   
                                                                <div class="panel-heading">
				                                                    <h3 class="panel-title">Cuentas Pendientes

				                                                    </h3>         
				                                                </div>                       
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
                                                                                <asp:GridView ID="GridDocumentos" runat="server" CssClass="table table-striped table-bordered dataTable no-footer dtr-inline" cellspacing="0"  role="grid"  PageSize="10" AllowPaging="True" OnDataBound="GridDocumentos_DataBound" AllowSorting="True" AutoGenerateColumns="false"  OnPageIndexChanging="GridDocumentos_PageIndexChanging" 
                                                                                    EmptyDataText="NO EXISTEN FACTURAS PENDIENTES" EmptyDataRowStyle-BackColor="Gray" EmptyDataRowStyle-BorderColor="Gray" EmptyDataRowStyle-BorderStyle="Solid" EmptyDataRowStyle-ForeColor="White" EmptyDataRowStyle-HorizontalAlign="Center" EmptyDataRowStyle-VerticalAlign="Middle">
                                                                                    <pagersettings firstpagetext="Primero &nbsp;" lastpagetext="Última &nbsp;" nextpagetext="Siguiente &nbsp;"  previouspagetext="Anterior &nbsp;" Mode="NextPreviousFirstLast"  />
                                                                                        <AlternatingRowStyle BackColor="#F4F4F4" />
                                                                                        <Columns>                                       
                                                                                            <asp:BoundField DataField="Id" HeaderText="Código" SortExpression="Id">
                                                                                            <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                                                            </asp:BoundField>
                                                                                                <asp:BoundField DataField="NumeroCotizacion" HeaderText="Numero Cotizacion"    SortExpression="NumeroCotizacion" />
                                                                                            <asp:BoundField DataField="Cliente" HeaderText="Cliente"    SortExpression="Cliente" />
                                                                                                   
                                                                                                   
                                                                                            <asp:BoundField DataField="EstadoPago" HeaderText="Estado Pago"  SortExpression="EstadoPago" />
                                                                                                    
                                                                                                <asp:TemplateField HeaderText="Total" Visible ="true" SortExpression="Precio">
                                                                                                <ItemTemplate>
                                                                                                    <asp:Label ID="LblTotal" runat="server" Text='<%# (String.Format("{0:C}", Eval("SaldoTotal"))) %>' ></asp:Label>
                                                                                                </ItemTemplate>                                                                     
                                                                                            </asp:TemplateField>
                                                                                            <asp:TemplateField HeaderStyle-HorizontalAlign="Center" >
                                                                                                <ItemTemplate>         
                                                                                                    <asp:ImageButton ID="Editar"  ToolTip="Ver Detalle"      ImageUrl="~/images/Selecet.png" CssClass="celdasMedidor"  ImageAlign="Middle"
                                                                                                        runat="server"  CommandArgument='<%# Eval("Id") %>' CommandName="Aprobar"  OnCommand="BtnSelect_Command" />
                                                                                                </ItemTemplate>
                                                                                            </asp:TemplateField>                                                              
                                                                                        </Columns>
                                                                            </asp:GridView>
                                                                            <asp:Button ID="BtnNuevo1" runat="server" Text="Nuevo" OnClick="BtnNuevo1_Click" CssClass="btn btn-purple" />
                                                                            <asp:Button ID="BtxtCerar1" runat="server" Text="Cerrar" OnClick="Cerrar_ServerClick" CssClass="btn btn-purple" />
                                                                        </div>
                                                                    </div>                                            
                                                                         
                                                            </div>
                                                        </div>                          
                                                    </div>
                                                </div>
                                            </asp:Panel>
                                            <asp:Panel ID="pnlDatos" runat="server" Visible="false">
                                                    <div class="row">
                                                        <div class="col-md-12" >
                                                            <div class="panel panel-purple" >
                                                                     <div class="panel-heading">
				                                                        <h3 class="panel-title">Datos Factura</h3>         
				                                                    </div>
                                                                    <div class="panel-body">  
                                                                      
                                                                            <div class="row">
                                                                                <div class="form-group col-md-2">
                                                                                     <label>Nro. Documento</label>
                                                                                      <asp:RequiredFieldValidator ID="RequiredFieldValidator5" runat="server"  ErrorMessage="Fecha  Requerido" Text="*" 
                                                                                         ControlToValidate="Documento" ForeColor="#ff0000" ValidationGroup="Grabar" SetFocusOnError="true"></asp:RequiredFieldValidator>
                                                                                       
                                                                                     <div class="searchbox">
						                                                                        <div class="input-group custom-search-form">
                                                                                                    <asp:TextBox  CssClass="form-control input-sm" ID="Documento" runat="server" OnTextChanged="Documento_TextChanged" AutoPostBack="True" placeholder="Buscar.." ></asp:TextBox>
							                                                                        <span class="input-group-btn">
								                                                                        <button class="text-muted" id="Button8" runat="server" onserverclick="Documento_TextChanged" type="button"><i class="fa fa-search"></i></button>
							                                                                        </span>
						                                                                        </div>
					                                                                        </div>
                                                                                    <asp:TextBox  CssClass="form-control" ID="IdCliente"  runat="server" style="display:none;"></asp:TextBox>
                                                                                 
                                           
                                                                                </div>
                                                                                <div class="form-group col-md-2">
                                                                                    <label>Cliente</label>
                                                                                    <asp:TextBox ID="Cliente" CssClass="form-control" runat="server" ReadOnly="true"></asp:TextBox>
                                                                                </div>
                                                                                 <div class="form-group col-md-2">
                                                                                    <label>Direccion</label>
                                                                                     <asp:TextBox ID="Direccion" CssClass="form-control" runat="server" ReadOnly="true"></asp:TextBox>
                                                                                </div>
                                                                                 <div class="form-group col-md-2">
                                                                                    <label>Telefono</label>
                                                                                     <asp:TextBox ID="Telefono" CssClass="form-control" runat="server" ReadOnly="true"></asp:TextBox>
                                                                                </div>
                                                                                 <div class="form-group col-md-2">
                                                                                    <label>Ciudad</label>
                                                                                     <asp:TextBox ID="Ciudad" CssClass="form-control" runat="server" ReadOnly="true"></asp:TextBox>
                                                                                </div>
                                                                                 <div class="form-group col-md-2">
                                                                                    <label>Email</label>
                                                                                     <asp:TextBox ID="Email" CssClass="form-control" runat="server" ReadOnly="true"></asp:TextBox>
                                                                                </div>
                                                                                <div class="col-md-2">
                                                                                       <label>Codigo</label>
                                                                                     <asp:TextBox  CssClass="form-control" ID="TxtId" runat="server" ReadOnly="true"  ></asp:TextBox>
                                                                                </div>
                                                                                <div class="col-md-2">
                                                                                       <label>Numero Cotizacion</label>      <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server"  ErrorMessage="Forma de  Requerido" Text="*"  InitialValue="0"
                                                                                         ControlToValidate="NumeroCotizacion" ForeColor="#ff0000" ValidationGroup="Grabar" SetFocusOnError="true"></asp:RequiredFieldValidator>
                                                                                     <asp:TextBox  CssClass="form-control" ID="NumeroCotizacion" runat="server"   ></asp:TextBox>
                                                                                </div>                                              
                                                                                <div class="form-group col-md-2">
                                                                                     <label>Saldo Total</label>    
                                                                                    <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server"  ErrorMessage="Fecha  Requerido" Text="*" 
                                                                                         ControlToValidate="SaldoTotal" ForeColor="#ff0000" ValidationGroup="Grabar" SetFocusOnError="true"></asp:RequiredFieldValidator>
                                                                                   
                                                                                       <asp:TextBox  CssClass="form-control"  ID="SaldoTotal" runat="server" Text="0" OnTextChanged="SaldoTotal_TextChanged" AutoPostBack="true" ></asp:TextBox>
                                                                                    <asp:TextBox  CssClass="form-control"  ID="SaldoTotalGuardar" runat="server" Visible="false"  ></asp:TextBox>
                                                                                </div>
                                                                                <div class="form-group col-md-2">
                                                                                     <label>Saldo Pendiente</label>    
                                                                              
                                                                                   
                                                                                       <asp:TextBox  CssClass="form-control"  ID="SaldoPendiente" runat="server" Text="0" ReadOnly="true"  ></asp:TextBox>
                                                                                    <asp:TextBox  CssClass="form-control"  ID="SaldoPendienteGuardar" runat="server" Visible="false"  ></asp:TextBox>
                                                                                </div>
                                                                                <div class="col-md-12">
                                                                                  <label>Descripción De La Factura</label>      <asp:RequiredFieldValidator ID="RequiredFieldValidator4" runat="server"  ErrorMessage="Descricpcion  Requerido" Text="*" 
                                                                                         ControlToValidate="Descricpcion" ForeColor="#ff0000" ValidationGroup="Grabar" SetFocusOnError="true"></asp:RequiredFieldValidator>
                                                                                     <asp:TextBox  CssClass="form-control" ID="Descricpcion" runat="server"  TextMode="MultiLine" ></asp:TextBox>
                                                                                </div>
                                                                            </div>
                                                                            
                                                                           <div class="row">
                                                                                <div class="col-md-12">
                                                                                     <asp:Button ID="btnGuardar" runat="server" Text="Pagar Factura"  ValidationGroup="Grabar" OnClientClick="return confirm('Esta seguro que Desea agregar  esta Factura?');"  OnClick="BtnGuardar_Click" CssClass="btn btn-purple" />
                                                                                     <asp:Button ID="btnLimpiar" runat="server" Text="Limpiar" OnClick="Limpiar_Click" CssClass="btn btn-purple" />
                                                                                      <asp:Button ID="btnCancelar" runat="server" Text="Cancelar" OnClick="Cancelar_Click" CssClass="btn btn-purple" />
                                                                                      <asp:Button ID="Imprimir" runat="server" Text="Imprimir" OnClick="Imprimir_Click" CssClass="btn btn-purple" />
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
            <asp:TextBox ID="Msj1" runat="server" CssClass="visible"></asp:TextBox>
            <asp:TextBox ID="Type1" runat="server" CssClass="visible"></asp:TextBox>
            <script type="text/javascript" >
                Sys.Application.add_load(BindEvents);
            </script>
        </ContentTemplate>           
    </asp:UpdatePanel>
     <asp:Button ID="btnInicial" Style="display:none;" runat="server"/>
     <ajaxToolkit:ModalPopupExtender ID="ModalPopupExtender1" runat="server" TargetControlID="btnInicial" 
        BackgroundCssClass="modalBackground " PopupControlID="PanelModal">

    </ajaxToolkit:ModalPopupExtender>
      <asp:Panel ID="PanelModal" runat="server" style="display:none; background:white; width:90%; height:auto">
               <asp:UpdatePanel ID="UpdatePanel2" runat="server">
                    <ContentTemplate>                          
                        <div class="row" id="BuscarProv" runat="server">
                            <div class="col-md-12">
                              <div class="modal-header">
                                <h3 >Proveedores</h3>
                              </div>
                              <div class="modal-body">
                                    <%--<div class="container-fluid well">--%>
                                        <div class="panel-body">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="searchbox">
						                                <div class="input-group custom-search-form">
                                                            <asp:TextBox  CssClass="form-control input-sm" ID="BuscarProvedor" runat="server" OnTextChanged="BuscarProvedor_TextChanged" AutoPostBack="True" placeholder="Buscar.." ></asp:TextBox>
							                                <span class="input-group-btn">
								                                <button class="text-muted" id="Button6" runat="server" onserverclick="BuscarProvedor_TextChanged" type="button"><i class="fa fa-search"></i></button>
							                                </span>
						                                </div>
					                                </div>

                                                        <asp:GridView ID="GridProvedor" runat="server" CssClass="table table-striped table-bordered dataTable no-footer dtr-inline" cellspacing="0"  role="grid"  style="width: 100%;" PageSize="10" AllowPaging="True"
                                                             AllowSorting="True"  GridLines="None" AutoGenerateColumns="false" EmptyDataText="No hay Productos para Mostrar" OnPageIndexChanging="GridProvedor_PageIndexChanging">
                                                            <pagersettings firstpagetext="Primero &nbsp;" lastpagetext="Última &nbsp;" nextpagetext="Siguiente &nbsp;"  previouspagetext="Anterior &nbsp;" Mode="NextPreviousFirstLast" />
                                                                <AlternatingRowStyle BackColor="#F4F4F4" />
                                                                <Columns>  
                                                                    <asp:BoundField DataField="Id" HeaderText="Id" SortExpression="Id" ControlStyle-CssClass="visible" />                                     
                                                                    <asp:BoundField DataField="NroDocumento" HeaderText="NIT" SortExpression="NroDocumento">
                                                              
                                                                    </asp:BoundField>
                                                                    <asp:BoundField DataField="Nombre" HeaderText="Razon Social" SortExpression="Nombre" />
                                                                    <asp:BoundField DataField="Ciudad" HeaderText="Ciudad" SortExpression="Ciudad" />
                                                                    <asp:BoundField DataField="Direccion" HeaderText="Direccion" SortExpression="Direccion" />
                                                                    <asp:BoundField DataField="Telefono" HeaderText="Telefono" SortExpression="Telefono" />
                                                                    <asp:BoundField DataField="Tipo" HeaderText="Tipo" SortExpression="Tipo" />
                                                                    <asp:TemplateField HeaderStyle-HorizontalAlign="Center" >
                                                                        <ItemTemplate> 
                                                                            <asp:ImageButton ID="SelectProve" ControlStyle-CssClass="btn btn-sm btn-primary" ImageUrl="~/images/Selecet.png"     CssClass="celdasMedidor"
                                                                              runat="server"  CommandArgument='<%# Eval("Id") %>' CommandName="IdSolicitud"  OnCommand="SelectProve_Command" />
                                                                        </ItemTemplate>
                                                                    </asp:TemplateField>                                                              
                                                                </Columns>
                                                    </asp:GridView>
                                                </div>
                                            </div> 
                                        </div>
                                       
                                    <%--</div>--%>
                  
                              </div>
                              <div class="modal-footer">
                                    <asp:Button  ID="Button7" runat="server" OnClick="CloseCliente_Click"  CssClass="btn btn-purple" Text="Cerrar" />
                              </div>
                            </div>
                        </div>
                    </ContentTemplate>
               </asp:UpdatePanel>
     </asp:Panel> 
    <script src="js/jquery-3.0.0.min.js"></script>
    <%--<script src="js/jquery-2.1.1.min.js"></script>--%>
    <script src="js/toastr.min.js"></script>
    <link href="css/toastr.css" rel="stylesheet" />
    <script type="text/javascript">  
        function bPostaBack() {
            displayToastr();
            var stateObj = { foo: "bar" };
            history.pushState(stateObj, "page 2", "CuentasPendientes.aspx");

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
