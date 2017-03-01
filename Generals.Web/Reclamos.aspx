<%@ Page Title="Reclamos" Language="C#" MasterPageFile="~/Modal.Master" AutoEventWireup="true" CodeBehind="Reclamos.aspx.cs" Inherits="BrakGeWeb.Reclamos" %>  
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
            <div class="row">
              <div class="col-md-12 ">
                    <div class="panel panel-purple ">
				    <!--Panel heading-->
				        <div class="panel-heading">
                            <h3 class="panel-title">Reclamaciones</h3> 
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
                                                                       <div class="panel-heading">
				                                                        <h3 class="panel-title">Reclamos

				                                                        </h3>         
				                                                    </div>                       
                                                                      <div class="panel-body">                  
                                                                            <div class="row">
                                                                                <div class="col-md-12">
                                                                                    <div class="searchbox">
						                                                                <div class="input-group custom-search-form">
							                                                                
                                                                                            <asp:TextBox  CssClass="form-control input-sm" ID="TxtBusqueda" runat="server" OnTextChanged="TxtBusqueda_TextChanged" AutoPostBack="True" placeholder="Buscar.." ></asp:TextBox>
							                                                                <span class="input-group-btn">
								                                                                <button class="text-muted" id="Buscar" runat="server" onserverclick="TxtBusqueda_TextChanged" type="button"><i class="fa fa-search"></i></button>
							                                                                </span>
						                                                                </div>
					                                                                </div>                   
                                                                                        <asp:GridView ID="GridDocumentos" runat="server" CssClass="table table-striped table-bordered dataTable no-footer dtr-inline" cellspacing="0"  role="grid"  PageSize="10" AllowPaging="True"  OnRowDataBound="GridDocumentos_RowDataBound" AllowSorting="True" AutoGenerateColumns="false"  OnPageIndexChanging="GridDocumentos_PageIndexChanging">
                                                                                            <pagersettings firstpagetext="Primero &nbsp;" lastpagetext="Última &nbsp;" nextpagetext="Siguiente &nbsp;"  previouspagetext="Anterior &nbsp;" Mode="NextPreviousFirstLast"  />
                                                                                                <AlternatingRowStyle BackColor="#F4F4F4" />
                                                                                                <Columns>                                       
                                                                                                    <asp:BoundField DataField="Id" HeaderText="Código" SortExpression="Id">
                                                                                                    <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                                                                    </asp:BoundField>
                                                                                                     <asp:BoundField DataField="IdFactura" HeaderText="Nro Factura"    SortExpression="IdFactura" />
                                                                                                    <asp:BoundField DataField="Cliente" HeaderText="Cliente"    SortExpression="Cliente" />                                                                                                     
                                                                                                    <asp:BoundField DataField="FechaReclamacion" HeaderText="Fecha"    SortExpression="FechaReclamacion" />
                                                                                                    <asp:BoundField DataField="Estado" HeaderText="Estado"    SortExpression="Estado" />
                                                                
                                                                                                    <asp:TemplateField HeaderStyle-HorizontalAlign="Center" HeaderText="Actions">
                                                                                                        <ItemTemplate>         
                                                                                                            <asp:ImageButton ID="Ver"  ToolTip="Ver Reclamacion"      ImageUrl="~/images/Selecet.png" CssClass="celdasMedidor"  ImageAlign="Middle"
                                                                                                              runat="server"  CommandArgument='<%# Eval("Id") %>' CommandName="VerDatos"  OnCommand="BtnSelect_Command" />
                                                                                                           <%--<asp:ImageButton ID="BtnAnular" runat="server"   ImageUrl="~/images/delete.png" CssClass="celdasMedidor"  ImageAlign="Middle" CausesValidation="true" CommandArgument='<%# Eval("Id") %>' 
                                                                                                                        CommandName="TCCode"  ToolTip="Anular"
                                                                                                                             OnCommand="BtnAnular_Command" />  --%>
                                                                                                            
                                                                                                        </ItemTemplate>
                                                                   
                                                                                                    </asp:TemplateField>                                                              
                                                                                                </Columns>
                                                                                    </asp:GridView>
                                                                                </div>
                                                                            </div>                                            
                                                                           <div class="row">
                                                                                 <div class="col-md-12"> 
                                                                                    <%--<button runat="server" id="BtnNuevo"  onserverclick="Nuevo_Click"  class="btn btn-purple" ><span class="icon">
		                                                                            <i class="fa fa-file"> </i></span> &nbsp; Nuevo</button>--%>
                                              
                                                                                     <button class="btn btn-purple" id="Cerrar" runat="server" onserverclick="Cerrar_ServerClick">
                                                                                         <span class="icon">
		                                                                            <i class="fa fa-sign-out" > </i></span>&nbsp; Cerrar</button>
                                                                                </div>
                                                                            </div>
                                                                    </div>
                                                                </div>
                          
                                                            </div>
                                                        </div>
                                                </asp:Panel>
                                                <asp:Panel ID="pnlDatos" runat="server">
                                                    <div class="row">
                                                        <div class="col-md-12" >
                                                            <div class="panel" >
                                                                     <div class="panel-heading">
				                                                        <h3 class="panel-title">Datos Basicos</h3>         
				                                                    </div>
                                                                    <div class="panel-body">  
                                                                        <div class="row">
                                                                            <div class="form-group col-md-2">
                                                                                 <label>Nro. Documento</label>
                                                                                  <asp:RequiredFieldValidator ID="RequiredFieldValidator5" runat="server"  ErrorMessage="Fecha  Requerido" Text="*" 
                                                                                     ControlToValidate="Documento" ForeColor="#ff0000" ValidationGroup="Grabar" SetFocusOnError="true"></asp:RequiredFieldValidator>
                                                                                    
                                                                                   <asp:TextBox  CssClass="form-control" ID="Documento" ReadOnly="true" runat="server" ></asp:TextBox>
                                                                                <asp:TextBox  CssClass="form-control" ID="IdCliente"  runat="server" style="display:none;"></asp:TextBox>
                                                                                  <asp:TextBox  CssClass="form-control" ID="IdDocumentoAnterior"  runat="server" style="display:none;"></asp:TextBox>
                                           
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
                                                                            <div class="form-group col-md-2">
                                                                                   <label>Bodega</label>
                                                                                     
                                                                                <asp:TextBox ID="TxtBodega" runat="server" ReadOnly="true" CssClass="form-control" ></asp:TextBox>  
                                                                            </div>
                                                                            <div class="form-group col-md-2">
                                                                                <label>Movimiento:</label> 
                                                                                <asp:TextBox ID="TxtTipoMovimiento" runat="server" CssClass="form-control" ReadOnly="true" ></asp:TextBox>
                                                                                  <asp:TextBox  CssClass="form-control" ID="TxtId" runat="server" ReadOnly="true" Visible="false" ></asp:TextBox>
                                                                            </div>
                                                                            <div class="form-group col-md-2">                                                 
                                                                                   <label>Forma De Pago:</label> 
                                                                                <asp:TextBox ID="TxtFormaDePago" runat="server" CssClass="form-control"  ReadOnly="true"></asp:TextBox>
                                                                            </div>                                              
                                                                            <div class="form-group col-md-2">
                                                                                 <label>Fecha</label>  
                                                                                   
                                                                                   <asp:TextBox  CssClass="form-control" ReadOnly="true" ID="Fecha" runat="server"   ></asp:TextBox>
                                                                            </div>
                                                                            
                                        
                                                                        </div>
                                                                    </div>                                             
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12" >
                                                            <div class="panel" >
                                                                    <div class="panel-heading">
				                                                        <h3 class="panel-title">Productos</h3>         
				                                                    </div>
                                                                    <div class="panel-body">
                                                                        <div class="row">
                                                                             <div class="col-md-12">
                                                                                   <asp:GridView ID="Detalle" runat="server" CssClass="table table-striped table-bordered dataTable no-footer dtr-inline" AllowPaging="True" 
                                                                                       AllowSorting="True" GridLines="None"  ShowFooter="True" AutoGenerateColumns="False"  OnRowDataBound="Detalle_RowDataBound" >
                                                                                            <pagersettings firstpagetext="Primero &nbsp;" lastpagetext="Última &nbsp;" nextpagetext="Siguiente &nbsp;"  previouspagetext="Anterior &nbsp;" Mode="NextPreviousFirstLast" />
                                                                                                <AlternatingRowStyle BackColor="#F4F4F4" />
                                                                                                <Columns>
                                                                                                    <asp:TemplateField HeaderText="Id Producto" Visible ="true" SortExpression="IdProducto">
                                                                                                        <ItemTemplate>
                                                                                                            <asp:Label ID="lbl_IdProd" runat="server" Text='<%# Eval("IdProducto") %>'></asp:Label>
                                                                                                          </ItemTemplate>
                                                                                                        <EditItemTemplate>
                                                                                                            <asp:TextBox runat="server" Text='<%# Bind("IdProducto") %>' ReadOnly="true" ID="TxtIdProducto" CssClass="form-control"></asp:TextBox>
                                                                                                        </EditItemTemplate>
                                                                  
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="Producto" Visible ="true" SortExpression="Producto">
                                                                                                        <ItemTemplate>
                                                                                                            <asp:Label ID="lbl_Prod" runat="server" Text='<%# Eval("Producto") %>'></asp:Label>
                                                                                                          </ItemTemplate>
                                                                                                        <EditItemTemplate>
                                                                                                            <asp:TextBox runat="server" Text='<%# Bind("Producto") %>' ReadOnly="true" ID="TxtProducto" CssClass="form-control"></asp:TextBox>
                                                                                                        </EditItemTemplate>
                                                                  
                                                                                                    </asp:TemplateField>
                                                                                                     <asp:TemplateField HeaderText="%Descuento" Visible ="true" SortExpression="Iva">
                                                                                                          <ItemTemplate>
                                                                                                            <asp:Label ID="lbl_DsctoPorcentaje" runat="server" Text='<%# Eval("DsctoPorcentaje") %>'></asp:Label>
                                                                                                          </ItemTemplate>
                                                                                                        <EditItemTemplate>
                                                                                                            <asp:TextBox runat="server" Text='<%# Bind("DsctoPorcentaje") %>'  ID="TxtDsctoPorcentaje" CssClass="form-control"></asp:TextBox>
                                                                                                        </EditItemTemplate>
                                                                  
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="Precio Venta" Visible ="true" SortExpression="Precio">
                                                                                                        <ItemTemplate>
                                                                                                            <asp:Label ID="lbl_Precio" runat="server" Text='<%# (String.Format("{0:C}", Eval("Precio"))) %>' ></asp:Label>
                                                                                                          </ItemTemplate>
                                                                                                        <EditItemTemplate>
                                                                                                            <asp:TextBox runat="server" Text='<%# Bind("Precio") %>'  ID="TxtPrecio" ReadOnly="true" CssClass="form-control"> </asp:TextBox>
                                                                                                        </EditItemTemplate>
                                                                    
                                                                                                    </asp:TemplateField>
                                                                                                     <asp:TemplateField HeaderText="Iva" Visible ="true" SortExpression="Iva">
                                                                                                          <ItemTemplate>
                                                                                                            <asp:Label ID="lbl_IvaPorcentaje" runat="server" Text='<%# Eval("IvaPorcentaje") %>'></asp:Label>
                                                                                                          </ItemTemplate>
                                                                                                        <EditItemTemplate>
                                                                                                            <asp:TextBox runat="server" Text='<%# Bind("IvaPorcentaje") %>' ReadOnly="true" ID="TxtIvaPorcentaje" CssClass="form-control"></asp:TextBox>
                                                                                                        </EditItemTemplate>
                                                                  
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderStyle-HorizontalAlign="Center" Visible ="true" HeaderText="Cantidad Existente">
                                                                                                        <ItemTemplate>
                                                                                                            <asp:Label ID="lbl_CantExistente" runat="server" Text='<%# Eval("CantExistente") %>'></asp:Label>
                                                                                                          </ItemTemplate>
                                                                                                           <EditItemTemplate>
                                                                                                                 <asp:TextBox ID="TxtCantExistente" runat="server" Text='<%# Bind("CantExistente") %>' ReadOnly="true" CssClass="form-control"></asp:TextBox>
                                                                                                            </EditItemTemplate>  
                                                                                                           <HeaderStyle HorizontalAlign="Center" />
                                                                                                    </asp:TemplateField>
                                                                                                    <%--<asp:BoundField DataField="CantidadExistente" HeaderText="Cantidad Existente" SortExpression="CantidadExistente" />--%>
                                                                                                    <asp:TemplateField HeaderStyle-HorizontalAlign="Center" Visible ="true" HeaderText="Cantidad">
                                                                                                        <ItemTemplate>
                                                                                                            <asp:Label ID="lbl_Cantidad" runat="server" Text='<%# Eval("Cantidad") %>'></asp:Label>
                                                                                                          </ItemTemplate>
                                                                                                           <EditItemTemplate>
                                                                                                                 <asp:TextBox ID="TxtCantidad" runat="server" Text='<%# Bind("Cantidad") %>' CssClass="form-control"></asp:TextBox>
                                                                                                            </EditItemTemplate>  
                                                                                                           <HeaderStyle HorizontalAlign="Center" />
                                                                                                    </asp:TemplateField> 
                                                                                                    <asp:TemplateField HeaderStyle-HorizontalAlign="Center" Visible ="true" HeaderText="Subtotal">
                                                                                                           <ItemTemplate>
                                                                                                            <asp:Label ID="lbl_Subtotal" runat="server" Text='<%#(String.Format("{0:C}", Eval("Subtotal"))) %>' DataFormatString="{0:C3}"></asp:Label>
                                                                                                          </ItemTemplate>
                                                                                                           <EditItemTemplate>
                                                                                                                 <asp:TextBox ID="txtSubtotal" runat="server"  Text='<%# Bind("Subtotal") %>' ReadOnly="true" CssClass="form-control"></asp:TextBox>
                                                                                                            </EditItemTemplate>  
                                                                                                           <HeaderStyle HorizontalAlign="Center" />
                                                                                                    </asp:TemplateField> 
                                                                                                    <asp:TemplateField HeaderStyle-HorizontalAlign="Center" Visible ="true" HeaderText="Descuento">
                                                                                                           <ItemTemplate>
                                                                                                            <asp:Label ID="lbl_Descuento" runat="server" Text='<%#(String.Format("{0:C}", Eval("Descuento"))) %>' DataFormatString="{0:C3}"></asp:Label>
                                                                                                          </ItemTemplate>
                                                                                                           <EditItemTemplate>
                                                                                                                 <asp:TextBox ID="txtDescuento" runat="server"  Text='<%# Bind("Descuento") %>' ReadOnly="true" CssClass="form-control"></asp:TextBox>
                                                                                                            </EditItemTemplate>  
                                                                                                           <HeaderStyle HorizontalAlign="Center" />
                                                                                                    </asp:TemplateField> 
                                                                                                   
                                                                                                </Columns>
                                                                                    </asp:GridView>
                                                                             </div>
                                                                        </div>
                                                                    </div>                                             
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12" >
                                                            <div class="panel" >
                                                                    <div class="panel-heading">
				                                                        <h3 class="panel-title">Total Movimiento</h3>         
				                                                    </div>
                                                                    <div class="panel-body">
                                                                        <div class="row">
                                                                            <div class="form-group col-md-2">
                                                                                 <label>Total Sub</label>
                                                                                  <asp:RequiredFieldValidator ID="RequiredFieldValidator10" runat="server"  ErrorMessage="Fecha  Requerido" Text="*" 
                                                                                     ControlToValidate="Documento" ForeColor="#ff0000" ValidationGroup="Grabar" SetFocusOnError="true"></asp:RequiredFieldValidator>

                                                                                   <asp:TextBox  CssClass="form-control" ID="TotalSub"  runat="server" ReadOnly="true" Text="0" ></asp:TextBox>
                                                                                   <asp:TextBox  CssClass="form-control" Visible="false" ID="TotalSubGuardar"  runat="server" ReadOnly="true" Text="0" ></asp:TextBox>
                                                                            </div>
                                                                            <div class="form-group col-md-2">
                                                                                <label>Total Descuentos</label>
                                                                                <asp:TextBox ID="TotalDescuentos" CssClass="form-control" runat="server" ReadOnly="true" Text="0"></asp:TextBox>
                                                                                <asp:TextBox ID="TotalDescuentosGuardar" Visible="false" CssClass="form-control" runat="server" ReadOnly="true" Text="0"></asp:TextBox>
                                                                            </div>
                                                                             <div class="form-group col-md-2">
                                                                                <label>Iva</label>
                                                                                 <asp:TextBox ID="TotalIva" CssClass="form-control" runat="server" ReadOnly="true" Text="0"></asp:TextBox>
                                                                                 <asp:TextBox ID="TotalIvaGuardar" Visible="false" CssClass="form-control" runat="server" ReadOnly="true" Text="0"></asp:TextBox>
                                                                            </div>
                                                                             <div class="form-group col-md-2">
                                                                                <label>Total</label>
                                                                                 <asp:TextBox ID="Total" CssClass="form-control" runat="server" ReadOnly="true" Text="0"></asp:TextBox>
                                                                                     <asp:TextBox ID="TotalGuardar" Visible="false" CssClass="form-control" runat="server" ReadOnly="true" Text="0"></asp:TextBox>
                                                                            </div>
                                                                             <div class="col-md-4">
                                                                                   <label>Usuario</label>
                                                                                    <asp:RequiredFieldValidator ID="RequiredFieldValidator7" runat="server"  ErrorMessage="Vendedor de  Requerido" Text="*"  InitialValue="0"
                                                                                     ControlToValidate="Vendedor" ForeColor="#ff0000" ValidationGroup="Grabar" SetFocusOnError="true"></asp:RequiredFieldValidator>

                                                                                <asp:DropDownList ID="Vendedor" runat="server" CssClass="form-control"  ></asp:DropDownList>  
                                                                             </div>
                                                                        </div>
                                                                       <div class="row">
                                                                               <div class="form-group col-md-12">
                                                                                <label>Motivo de Reclamación</label>
                                                                                <asp:TextBox ID="Motivo" CssClass="form-control" runat="server"  TextMode="MultiLine"></asp:TextBox>
                                                                                
                                                                            </div>
                                                                        </div>
                                        
                                                                    </div>                                             
                                                            </div>
                                                        </div>
                                                     </div>
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                             <asp:Button ID="btnGuardar" runat="server" Text="Crear Reclamo"  OnClientClick="return confirm('Esta seguro que desea Reclamar Esta Factura?');"  OnClick="BtnGuardar_Click" CssClass="btn btn-purple" />
                                                            <asp:Button ID="CerrarReclamo" runat="server" Text="Cerrar Reclamo" Visible="false"  OnClientClick="return confirm('Esta seguro que desea cerrar este Reclamo?');"  OnClick="CerrarReclamo_Click" CssClass="btn btn-purple" />
                                                            <asp:Button ID="Devolver" runat="server" Text="Generar Devolución" Visible="false" OnClientClick="return confirm('Esta seguro que desea Devolver este Reclamo?');"  OnClick="Devolver_Click" CssClass="btn btn-purple" />
                                                             <asp:Button ID="btnLimpiar" runat="server" Text="Limpiar" OnClick="Limpiar_Click" CssClass="btn btn-purple" />
                                                              <asp:Button ID="btnCancelar" runat="server" Text="Cancelar" OnClick="Cancelar_Click" CssClass="btn btn-purple" />
                                                              <%--<asp:Button ID="Imprimir" runat="server" Text="Imprimir" OnClick="Imprimir_Click" CssClass="btn btn-purple" />--%>
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
    
      <script src="js/jquery-3.0.0.min.js"></script>
<%--    <script src="js/jquery-2.1.1.min.js"></script>--%>
    <script src="js/toastr.min.js"></script>
    <link href="css/toastr.css" rel="stylesheet" />
    <script type="text/javascript">

        function bPostaBack() {
            displayToastr();
            var stateObj = { foo: "bar" };
            history.pushState(stateObj, "page 2", "Reclamos.aspx");

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
