<%@ Page Title="Facturación" Language="C#" MasterPageFile="~/Modal.Master" AutoEventWireup="true" CodeBehind="Facturacion.aspx.cs" Inherits="BrakGeWeb.Facturacion" %>
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
     <script>
         function Print(NroFact)
         {

             window.open("FacturaImpr.aspx?Id=" + NroFact, "directories=no, location=no, menubar=no, scrollbars=yes, statusbar=no, tittlebar=no, width=400, height=400");
            
        }
        function BindEvents() {

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
                            <h3 class="panel-title">Facturación</h3>  
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
				                                                        <h3 class="panel-title">Facturas</h3>         
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
                                                                                        <asp:GridView ID="GridDocumentos" runat="server" CssClass="table table-striped table-bordered dataTable no-footer dtr-inline" cellspacing="0"  role="grid"  PageSize="10" AllowPaging="True" AllowSorting="True" AutoGenerateColumns="false" OnPageIndexChanging="GridDocumentos_PageIndexChanging" >
                                                                                            <pagersettings firstpagetext="Primero &nbsp;" lastpagetext="Última &nbsp;" nextpagetext="Siguiente &nbsp;"  previouspagetext="Anterior &nbsp;" Mode="NextPreviousFirstLast" />
                                                                                                <AlternatingRowStyle BackColor="#F4F4F4" />
                                                                                                <Columns>                                       
                                                                                                    <asp:BoundField DataField="Id" HeaderText="Código" SortExpression="Id">
                                                                                                    <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                                                                    </asp:BoundField>
                                                                                                    <asp:BoundField DataField="Cliente" HeaderText="Cliente"    SortExpression="Cliente" />
                                                                                                    <asp:BoundField DataField="TipoMovimiento" HeaderText="TipoMovimiento"    SortExpression="TipoMovimiento" />
                                                                                                    <asp:BoundField DataField="FormaPago" HeaderText="FormaPago"    SortExpression="FormaPago" />
                                                                                                    <asp:BoundField DataField="EstadoDocumento" HeaderText="EstadoDocumento"    SortExpression="EstadoDocumento" />
                                                                
                                                                                                    <asp:TemplateField HeaderStyle-HorizontalAlign="Center" HeaderText="Actions">
                                                                                                        <ItemTemplate>     
                                                                                                                    <asp:ImageButton ID="Imprimir" runat="server"   ImageUrl="~/images/print.png" CssClass="celdasMedidor"  ImageAlign="Middle" CausesValidation="true" CommandArgument='<%# Eval("Id") %>' 
                                                                                                                        CommandName="TCCode"  ToolTip="Imprimir"
                                                                                                                             OnCommand="Imprimir_Command" />      
                                                                                                            <%--<asp:ImageButton ID="Editar"  ToolTip=" Editar"          ImageUrl="~/images/Edit.png" CssClass="celdasMedidor"  ImageAlign="Middle"
                                                                                                              runat="server"  CommandArgument='<%# Eval("Id") %>' CommandName="IdSolicitud"  OnCommand="BtnSelect_Command" />--%>
                                                                                                           <asp:ImageButton ID="BtnAnular" runat="server"   ImageUrl="~/images/delete.png" CssClass="celdasMedidor"  ImageAlign="Middle" CausesValidation="true" CommandArgument='<%# Eval("Id") %>' 
                                                                                                                        CommandName="TCCode"  ToolTip="Crar Nota de Devolucion" OnCommand="BtnAnular_Command" />  
                                                                                                           <asp:ImageButton ID="CrearReclamo" runat="server"   ImageUrl="~/images/delete.png" CssClass="celdasMedidor"  ImageAlign="Middle" CausesValidation="true" CommandArgument='<%# Eval("Id") %>' 
                                                                                                                        CommandName="Reclamo"  ToolTip="Crar Reclamo" OnCommand="CrearReclamo_Command" />                                                                                                                         
                                                                                                        </ItemTemplate>
                                                                   
                                                                                                    </asp:TemplateField>                                                              
                                                                                                </Columns>
                                                                                    </asp:GridView>
                                                                                </div>
                                                                            </div>                                            
                                                                           <div class="row">
                                                                                 <div class="col-md-12"> 
                                                                                    <button runat="server" id="BtnNuevo"  onserverclick="Nuevo_Click"  class="btn btn-purple" ><span class="icon">
		                                                                            <i class="fa fa-file"> </i></span> &nbsp; Nuevo</button>
                                              
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
                                                                                      <div class="searchbox">
						                                                                    <div class="input-group custom-search-form">
                                                                                                <asp:TextBox  CssClass="form-control input-sm" ID="Documento" runat="server" OnTextChanged="Documento_TextChanged" AutoPostBack="True" placeholder="Buscar.." ></asp:TextBox>
							                                                                    <span class="input-group-btn">
								                                                                    <button class="text-muted" id="Button8" runat="server" onserverclick="Documento_TextChanged" type="button"><i class="fa fa-search"></i></button>
							                                                                    </span>
						                                                                    </div>
					                                                                    </div>
                                                                                <asp:TextBox  CssClass="form-control" ID="IdCliente"  runat="server" style="display:none;"></asp:TextBox>
                                                                                  <asp:TextBox  CssClass="form-control" ID="Id"  runat="server" style="display:none;"></asp:TextBox>
                                           
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
                                                                                   <label>Numero Cotizacion</label>
                                                                                 <asp:TextBox  CssClass="form-control" ID="NumeroCotizacion" runat="server" ReadOnly="true"  ></asp:TextBox>
                                                                            </div>
                                                                            <div class="form-group col-md-2">
                                                                                   <label>Bodega</label>
                                                                                      <asp:RequiredFieldValidator ID="RequiredFieldValidator4" runat="server"  ErrorMessage="Bodega de  Requerido" Text="*"  InitialValue="0"
                                                                                     ControlToValidate="Bodega" ForeColor="#ff0000" ValidationGroup="Grabar" SetFocusOnError="true"></asp:RequiredFieldValidator>

                                                                                <asp:DropDownList ID="Bodega" runat="server" CssClass="form-control" OnSelectedIndexChanged="Bodega_SelectedIndexChanged" AutoPostBack="true" ></asp:DropDownList>  
                                                                            </div>
                                                                            <div class="form-group col-md-2">
                                                                                <label>Movimiento:</label> 
                                                                                <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server"  ErrorMessage="Tipo de Movimiento Requerido" Text="*"  InitialValue="0"
                                                                                     ControlToValidate="TipoMovimiento" ForeColor="#ff0000" ValidationGroup="Grabar" SetFocusOnError="true"></asp:RequiredFieldValidator>

                                                                                <asp:DropDownList ID="TipoMovimiento" runat="server" CssClass="form-control" ></asp:DropDownList>
                                                                                
                                                                            </div>
                                                                            <div class="form-group col-md-2">                                                 
                                                                                   <label>Forma De Pago:</label> 
                                                                                <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server"  ErrorMessage="Forma de  Requerido" Text="*"  InitialValue="0"
                                                                                     ControlToValidate="FormaDePago" ForeColor="#ff0000" ValidationGroup="Grabar" SetFocusOnError="true"></asp:RequiredFieldValidator>

                                                                                <asp:DropDownList ID="FormaDePago" runat="server" CssClass="form-control" ></asp:DropDownList>
                                                                            </div>                                              
                                                                            <div class="form-group col-md-2">
                                                                                 <label>Fecha</label>    
                                                                                <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server"  ErrorMessage="Fecha  Requerido" Text="*" 
                                                                                     ControlToValidate="Fecha" ForeColor="#ff0000" ValidationGroup="Grabar" SetFocusOnError="true"></asp:RequiredFieldValidator>
                                                                                      <asp:CalendarExtender ID="CalendarExtender4" runat="server" CssClass="form-control" PopupButtonID="Fecha" TargetControlID="Fecha"  Format="MM/dd/yyyy"/>
                                                                                   <asp:TextBox  CssClass="form-control"  ID="Fecha" runat="server" ReadOnly="true"  ></asp:TextBox>
                                                                            </div>
                                                                       <%--     <div class="col-md-2">
                                                                                <br />
                                                                                 <asp:Button ID="btnPopUp" runat="server" Text="Nuevo Cliente"  class="btn btn-purple " OnClick="btnPopUp_Click"/>                                               
                                                                            </div> --%>                                        
                                                                        </div>
                                                                    </div>                                             
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12" >
                                                            <div class="panel" >
                                                                    <div class="panel-heading">
				                                                        <h3 class="panel-title">Agregar Productos</h3>         
				                                                    </div>
                                                                    <div class="panel-body">

                                                                        <div class="row" id="PanelItem" runat="server">
                                                                            <div class="form-group col-md-2">
                                                                                 <label>Codigo</label>
                                                                                  <asp:RequiredFieldValidator ID="RequiredFieldValidator6" runat="server"  ErrorMessage="Fecha  Requerido" Text="*" 
                                                                                     ControlToValidate="CodigoItem" ForeColor="#ff0000" ValidationGroup="Grabar" SetFocusOnError="true"></asp:RequiredFieldValidator>

                                              
                                                                                 <div class="searchbox">
						                                                                <div class="input-group custom-search-form">
							                                                                <%--<input type="text" class="form-control" placeholder="Search..">--%>
                                                                                            <asp:TextBox  CssClass="form-control" ID="CodigoItem" OnTextChanged="CodigoItem_TextChanged"  runat="server" AutoPostBack="true" ></asp:TextBox>
							                                                                <span class="input-group-btn">
								                                                                <button class="text-muted" id="Button3" runat="server" onserverclick="SearchItem_ServerClick" type="button"><i class="fa fa-search"></i></button>
							                                                                </span>
						                                                                </div>
					                                                                </div>
                                                                                     <asp:TextBox ID="IdItem" CssClass="form-control" runat="server" Visible="false"></asp:TextBox>
                                            
                                                                            </div>
                                                                            <div class="form-group col-md-2">
                                                                                <label>Nombre</label>
                                                                                <asp:TextBox ID="NOmbreItem" CssClass="form-control" runat="server" ReadOnly="true"></asp:TextBox>
                                                                            </div>
                                                                             <div class="form-group col-md-2">
                                                                                <label>Categoria</label>
                                                                                 <asp:TextBox ID="CategoriaItem" CssClass="form-control" runat="server" ReadOnly="true"></asp:TextBox>
                                                                            </div>
                                                                             <div class="form-group col-md-2">
                                                                                <label>Precio</label>
                                                                                 <asp:TextBox ID="PrecioItem" CssClass="form-control" runat="server" ReadOnly="true"></asp:TextBox>
                                                                            </div>
                                                                             <div class="form-group col-md-2">
                                                                                <label>Color</label>
                                                                                 <asp:TextBox ID="ColorItem" CssClass="form-control" runat="server" ReadOnly="true"></asp:TextBox>
                                                                            </div>
                                                                             <div class="form-group col-md-2">
                                                                                <label>Modelo</label>
                                                                                 <asp:TextBox ID="ModeloItem" CssClass="form-control" runat="server" ReadOnly="true"></asp:TextBox>
                                                                            </div>
                                                                            <div class="form-group col-md-2">
                                                                                   <label>Tamaño</label>

                                                                                 <asp:TextBox ID="TamañoItem" CssClass="form-control"  runat="server" ReadOnly="true"></asp:TextBox> 
                                                                            </div>
                                                                              <div class="form-group col-md-2">                                                 
                                                                                   <label>Iva :</label> 
                                                                                 <asp:TextBox ID="IvaItem" CssClass="form-control" runat="server" ReadOnly="true" ></asp:TextBox>&nbsp;

                                                                            </div> 
                                                                            <div class="form-group col-md-2">
                                                                                <label>Cantidad Existente:</label> 
                                                                                  <asp:TextBox ID="CantidadExistente" CssClass="form-control" runat="server" ReadOnly="true"></asp:TextBox>
                                                                            </div>
                                                                            <div class="form-group col-md-2">                                                 
                                                                                   <label>Cantidad :</label> 
                                                                                 <asp:TextBox ID="Cantidad" CssClass="form-control" runat="server" ></asp:TextBox>&nbsp;

                                                                            </div>                                              
                                                                              <div class="col-md-2">
                                                                                <br />
                                                                              <%--  <asp:Button  ID="Items" runat="server" OnClick="Items_Click"  CssClass="btn btn-purple" Text="Buscar Producto" />--%>
                                              
                                                                            </div>
                                                                              <div class="col-md-2">
                                                                                  <br />
                                                                                   <asp:Button  ID="AddItem" runat="server" OnClick="AddItem_Click"  CssClass="btn btn-purple" Text="Añadir Producto" />
                                                                              </div>
                                                                        </div>
                                                                        <div class="row">
                                                                             <div class="col-md-12">
                                                                                   <asp:GridView ID="Detalle" runat="server" CssClass="table table-striped table-bordered dataTable no-footer dtr-inline" AllowPaging="True" OnRowEditing="Detalle_RowEditing" OnRowCancelingEdit="Detalle_RowCancelingEdit"    
                                                                                       AllowSorting="True" GridLines="None"  ShowFooter="True" AutoGenerateColumns="False"  OnRowDataBound="Detalle_RowDataBound" OnRowUpdating="Detalle_RowUpdating">
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
                                                                                                    <asp:TemplateField HeaderText="Precio" Visible ="true" SortExpression="Precio">
                                                                                                        <ItemTemplate>
                                                                                                            <asp:Label ID="lbl_Precio" runat="server" Text='<%# (String.Format("{0:C}", Eval("Precio"))) %>' ></asp:Label>
                                                                                                          </ItemTemplate>
                                                                                                        <EditItemTemplate>
                                                                                                            <asp:TextBox runat="server" Text='<%# Bind("Precio") %>' ReadOnly="true" ID="TxtPrecio" CssClass="form-control"> </asp:TextBox>
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
                                                                                                    <asp:TemplateField HeaderText="%Descuento" Visible ="true" SortExpression="Iva">
                                                                                                          <ItemTemplate>
                                                                                                            <asp:Label ID="lbl_DsctoPorcentaje" runat="server" Text='<%# Eval("DsctoPorcentaje") %>'></asp:Label>
                                                                                                          </ItemTemplate>
                                                                                                        <EditItemTemplate>
                                                                                                            <asp:TextBox runat="server" Text='<%# Bind("DsctoPorcentaje") %>'  ID="TxtDsctoPorcentaje" CssClass="form-control"></asp:TextBox>
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
                                                                                                                 <asp:TextBox ID="txtSubtotal" runat="server"  Text='<%# Bind("Subtotal") %>'  CssClass="form-control"></asp:TextBox>
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
                                                                                                    <asp:TemplateField HeaderStyle-HorizontalAlign="Center" Visible ="true" HeaderText="Editar" ShowHeader="False">
                                                                                                        <EditItemTemplate>
                                                                                                            <asp:LinkButton runat="server" Text="Update" CommandName="Update" CausesValidation="True" ID="LinkButton1"></asp:LinkButton>&nbsp;<asp:LinkButton runat="server" Text="Cancel" CommandName="Cancel" CausesValidation="False" ID="LinkButton2"></asp:LinkButton>
                                                                                                        </EditItemTemplate>
                                                                                                        <ItemTemplate>
                                                                                                            <asp:LinkButton runat="server" Text="Editar" CommandName="Edit" CausesValidation="False" ID="LinkButton1"></asp:LinkButton>

                                                                                                        </ItemTemplate>
                                                                                                        <HeaderStyle HorizontalAlign="Center" />
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="Actions">
                                                                                                        <ItemTemplate>


                                                                                                            <asp:ImageButton ID="DeleteItem" runat="server" CausesValidation="true" CommandArgument='<%# Eval("IdProducto") %>'
                                                                                                                CommandName="TCCode" OnClientClick="return confirm('Deseas Eliminar este Registro?');" ToolTip="Eliminar"
                                                                                                                OnCommand="DeleteItem_Command" ImageUrl="~/images/delete.png" CssClass="celdasMedidor" />

                                                                                                        </ItemTemplate>

                                                                                                        <HeaderStyle HorizontalAlign="Center"></HeaderStyle>
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
                                                                                   <label>Vendedor</label>
                                                                                    <asp:RequiredFieldValidator ID="RequiredFieldValidator7" runat="server"  ErrorMessage="Vendedor de  Requerido" Text="*"  InitialValue="0"
                                                                                     ControlToValidate="Vendedor" ForeColor="#ff0000" ValidationGroup="Grabar" SetFocusOnError="true"></asp:RequiredFieldValidator>

                                                                                <asp:DropDownList ID="Vendedor" runat="server" CssClass="form-control"  ></asp:DropDownList>  
                                                                             </div>      
                                       
                                        
                                                                        </div>
                                                                        <div class="row">
                                                                             
                                                                        </div>
                                        
                                                                    </div>                                             
                                                            </div>
                                                        </div>
                                                     </div>
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                     
                                                              <asp:Button ID="btnGuardar" runat="server" Text="Guardar" OnClick="BtnGuardar_Click" CssClass="btn btn-purple" />
                                                              <asp:Button ID="btnLimpiar" runat="server" Text="Limpiar" OnClick="Limpiar_Click" CssClass="btn btn-purple" />
                                                              <asp:Button ID="btnCancelar" runat="server" Text="Cancelar" OnClick="Cancelar_Click" CssClass="btn btn-purple" />
                                                              <asp:Button ID="Imprimir" runat="server" Text="Imprimir" OnClick="Imprimir_Click" CssClass="btn btn-purple" />
                                                              <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="https://www.zonapagos.com/t_mcbtovar/pagos.asp" CssClass="btn btn-purple"  Target="_blank">Pago En Linea</asp:HyperLink>
                                                
                                                
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
     <ajaxToolkit:ModalPopupExtender ID="ModalPopupExtender1" runat="server" TargetControlID="btnInicial" 
        BackgroundCssClass="modalBackground " PopupControlID="PanelModal">

    </ajaxToolkit:ModalPopupExtender>
      <asp:Panel ID="PanelModal" runat="server" style="display:none; background:white; width:90%; height:auto">
               <asp:UpdatePanel ID="UpdatePanel2" runat="server">
                    <ContentTemplate>
                             <div class="row" id="NuevoProv" runat="server">
                          <div class="modal-header">
               
                            <h3 id="myModalLabel"> Nuevo Cliente</h3>
                          </div>
                          <div class="modal-body">
                                <div class="container-fluid well">
                                    <div class="row-fluid">
                                                <div class="row">
                                                <div class="col-md-2 form-group" >
                                                    <label>Tipo de Persona</label>                                       
                                                    <%--<asp:RequiredFieldValidator ID="RequiredFieldValidator11" runat="server" ErrorMessage="Tipo Persona Requerido" ControlToValidate="TipoPersona" ForeColor="Red" Text="*"></asp:RequiredFieldValidator>--%>
                                                    <asp:DropDownList ID="TipoPersona" runat="server" CssClass="form-control"></asp:DropDownList>
                                                </div>
                                                <div class="col-md-2 form-group">
                                                          <label>Tipo de Documento</label>
                                                    <asp:DropDownList ID="TipoDocumento" CssClass="form-control" runat="server"></asp:DropDownList>
                                                </div>
                                                <div class="col-md-2 form-group">
                                                <label>Nro. Documento</label>
                                                    <asp:TextBox ID="NroDocumento" runat="server" CssClass="form-control"></asp:TextBox>
                                                </div>
                                                <div class="col-md-2 form-group">
                                                    <label>Nombre</label>
                                                    <asp:TextBox ID="Nombre" runat="server" CssClass="form-control"> </asp:TextBox>
                                                </div>
                                                <div class="col-md-2 form-group">
                                                     <label>Apellido</label>
                                                    <asp:TextBox ID="Apellido" runat="server" CssClass="form-control"></asp:TextBox>

                                                </div>
                                                <div class="col-md-2 form-group" >

                                                </div>
                                            </div>
                                                <div class="row">                                        
                                                            <div class="form-group col-md-2">
                                                                <label>Fecha Nacimiento:</label>
                                                                <asp:TextBox  CssClass="form-control fecha" ID="FechaNacimiento"  runat="server" MaxLength="150" ></asp:TextBox>
                                                                <asp:RequiredFieldValidator ID="RequiredFieldValidator11" runat="server" ErrorMessage="*"
                                                                     ControlToValidate="FechaNacimiento" ForeColor="#ff0000" ValidationGroup="Grabar" SetFocusOnError="true" ></asp:RequiredFieldValidator>
                                                                <asp:CalendarExtender ID="CalendarExtender1" runat="server" CssClass="form-control" PopupButtonID="FechaNacimiento" TargetControlID="FechaNacimiento"  Format="MM/dd/yyyy"/>
                                                            </div>
                                                            <div class="form-group col-md-2">
                                                                <label>Departamento Residencia:</label>
                                                               <asp:DropDownList ID="Departamento" runat="server" CssClass="form-control" OnSelectedIndexChanged="Departamento_SelectedIndexChanged" AutoPostBack="true"> </asp:DropDownList>
                                                            </div>
                                                            <div class="form-group col-md-2">
                                                                <label>Ciudad Residencia:</label>
                                                               <asp:DropDownList ID="CmbCiudad" runat="server" CssClass="form-control"  ></asp:DropDownList>
                                         
                                           
                                                            </div> 
                                                            <div class="form-group col-md-2">
                                                                <label>Dirección:</label>
                                                              <asp:TextBox  CssClass="form-control" ID="TextBox12" runat="server" MaxLength="150" ></asp:TextBox>
                                           
                                                            </div>
                                                            <div class="form-group col-md-2">
                                                                <label>Email:</label>
                                                                <asp:TextBox  CssClass="form-control fecha" ID="TextBox13" runat="server" TextMode="Email" MaxLength="150" Height="34px" ></asp:TextBox>
                                            
                                                            </div>
                                                            <div class="form-group col-md-2">
                                                                <label>Telefono:</label>
                                                                <asp:TextBox  CssClass="form-control" ID="TextBox14" runat="server" MaxLength="150" ></asp:TextBox>
                                            
                                              
                                                            </div>   
                                                        </div>
                                                <div class="row">                                        
                                                    <div class="form-group col-md-2">
                                                        <label>Celular:</label>
                                                        <asp:TextBox  CssClass="form-control" ID="Celular"  runat="server" MaxLength="150" ></asp:TextBox>
                                                    </div>
                                                    <div class="form-group col-md-2">
                                                     <br />
                                                        <label ><input type="checkbox"  runat="server" id="Regimen" /> Regimen Simplificado</label>
                                                    </div>
                                                    <div class="form-group col-md-2">
                                                         <br />
                                                      <label><input type="checkbox"  runat="server" id="AutoRetenedores" /> Autoretenedores</label>
                                         
                                           
                                                    </div> 
                                                    <div class="form-group col-md-2">
                                                        <br />
                                                        <label ><input type="checkbox"  runat="server" id="AUI"/> Aplica AUI</label>                                           
                                                    </div>
                                                    <div class="form-group col-md-2">
                                                         <br />
                                                       <label ><input type="checkbox"  runat="server" id="RecibirEmail" /> RecibirEmail</label>
                                            
                                                    </div>
                                         
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                         <label>Notas:</label>
                                                        <asp:TextBox  CssClass="form-control" ID="Nota"  runat="server" TextMode="MultiLine" ></asp:TextBox>
                                                    </div>
                                                </div>
                                   
                                    </div>
                                </div>
                  
                          </div>
                          <div class="modal-footer">

                              <asp:Button  ID="GuardarCliente1" runat="server" OnClick="GuardarCliente_Click"   CssClass="btn btn-purple" Text="Guardar" />
                               <asp:Button  ID="CancelarCliente" runat="server" OnClick="CancelarCliente_Click"  CssClass="btn btn-purple" Text="Cancelar" />
                               <asp:Button  ID="CloseCliente" runat="server" OnClick="CloseCliente_Click"  CssClass="btn btn-purple" Text="Cerrar" />
                          </div>
                        </div>
                        <div class="row" id="BuscarProv" runat="server">
                            <div class="col-md-12">
                              <div class="modal-header">
                                <h3 >Clientes</h3>
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
     <!-- Modal -->
       <asp:Button ID="BtnProd" Style="display:none;" runat="server"/>
      <ajaxToolkit:ModalPopupExtender ID="ModalItems" runat="server" TargetControlID="BtnProd" 
        BackgroundCssClass="modalBackground " PopupControlID="PnlItem">

      </ajaxToolkit:ModalPopupExtender>
      <asp:Panel ID="PnlItem" runat="server" style="display:none; background:white; width:90%; height:auto">
               <asp:UpdatePanel ID="UpdatePanel3" runat="server">
                    <ContentTemplate>
                          <div class="modal-header">
                                <h3 >Items</h3>
                          </div>
                          <div class="modal-body">
                                <%--<div class="container-fluid well">--%>
                                    <%--<div class="panel">--%>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="searchbox">
						                            <div class="input-group custom-search-form">
                                                        <asp:TextBox  CssClass="form-control input-sm" ID="ItemBusqueda" runat="server" OnTextChanged="ItemBusqueda_TextChanged" AutoPostBack="True" placeholder="Buscar.." ></asp:TextBox>
							                            <span class="input-group-btn">
								                            <button class="text-muted" id="Button1" runat="server" onserverclick="ItemBusqueda_TextChanged" type="button"><i class="fa fa-search"></i></button>
							                            </span>
						                            </div>
					                            </div>

                                                    <asp:GridView ID="GridItem" runat="server" CssClass="table table-striped table-bordered dataTable no-footer dtr-inline" cellspacing="0"  role="grid"  style="width: 100%;" PageSize="10" AllowPaging="True"
                                                         AllowSorting="True"  GridLines="None" AutoGenerateColumns="false" EmptyDataText="No hay Productos para Mostrar" >
                                                        <pagersettings firstpagetext="Primero &nbsp;" lastpagetext="Última &nbsp;" nextpagetext="Siguiente &nbsp;"  previouspagetext="Anterior &nbsp;" Mode="NextPreviousFirstLast" />
                                                            <AlternatingRowStyle BackColor="#F4F4F4" />
                                                            <Columns>  
                                                                <asp:BoundField DataField="Id" HeaderText="Id" SortExpression="Id" ControlStyle-CssClass="visible" />                                     
                                                                <asp:BoundField DataField="Codigo" HeaderText="Codigo" SortExpression="Codigo">
                                                              
                                                                </asp:BoundField>
                                                                <asp:BoundField DataField="Descripcion" HeaderText="Descripcion" 
                                                                    SortExpression="Descripcion" />
                                                                     <asp:BoundField DataField="DescSubgrupo" HeaderText="SubGrupo" 
                                                                    SortExpression="DescSubgrupo" />
                                                                   <asp:BoundField DataField="Precio" HeaderText="Precio"     DataFormatString="{0:n3}"
                                                                    SortExpression="Precio" />
                                                               
                                                               
                                                                <asp:TemplateField HeaderStyle-HorizontalAlign="Center" >

                                                                    <ItemTemplate> 
                                                            <asp:ImageButton ID="SelectItem" ControlStyle-CssClass="btn btn-sm btn-primary" ImageUrl="~/images/Selecet.png"     CssClass="celdasMedidor"
                                                                          runat="server"  CommandArgument='<%# Eval("Id") %>' CommandName="IdSolicitud"  OnCommand="SelectItem_Command" />
                                                               
                                                                                                              
                                                                    </ItemTemplate>
                                                                   
                                                                </asp:TemplateField>                                                              
                                                            </Columns>
                                                </asp:GridView>
                                            </div>
                                        </div> 
                                    <%--</div>--%>
                                       
                                <%--</div>--%>
                  
                          </div>
                          <div class="modal-footer">
                                <asp:Button  ID="Button2" runat="server" OnClick="Button2_Click"  CssClass="btn btn-purple" Text="Cerrar" />
                          </div>
                    </ContentTemplate>
               </asp:UpdatePanel>
     </asp:Panel>
    
      
      <!-- Modal -->
       <asp:Button ID="BtnAk" Style="display:none;" runat="server"/>
      <ajaxToolkit:ModalPopupExtender ID="ModalAn" runat="server" TargetControlID="BtnAk" 
        BackgroundCssClass="modalBackground " PopupControlID="PnlAn">
      </ajaxToolkit:ModalPopupExtender>
      <asp:Panel ID="PnlAn" runat="server" style="display:none; background:white; width:50%; height:auto">
               <asp:UpdatePanel ID="UpdatePanel4" runat="server">
                    <ContentTemplate>
                          <div class="modal-header">
                            <h3>Anular Documento</h3>
                          </div>
                          <div class="modal-body">
                                <div class="container-fluid well">
                                       <div class="row">
                                            <div class="col-md-12">
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                                <div class="form-group">
                                                                      <label>Motivo de Anulación</label>
                                                                    
                                                                   <asp:TextBox ID="NotaAnuladas" ReadOnly="true" CssClass="form-control note-editor" TextMode="MultiLine"  runat="server"></asp:TextBox>
                                                                    <asp:TextBox ID="NotaAnula"  CssClass="form-control note-editor" TextMode="MultiLine"  runat="server"></asp:TextBox>
                                                                </div>    
                                                        </div>
                                                    </div> 
                                                <div class="row">
                                                    <asp:Panel ID="Panel1" runat="server"></asp:Panel>
                                                </div>
                                            </div>
                                        </div> 
                                </div>
                  
                          </div>
                          <div class="modal-footer">
                                <asp:Button  ID="Button5" runat="server" OnClick="CerrarAnulacion_Click"  CssClass="btn btn-purple" Text="Cerrar" />
                                <asp:Button  ID="Button4" runat="server" OnClick="Anular_Click"  CssClass="btn btn-purple" Text="Anular" />  
                          </div>
                    </ContentTemplate>
               </asp:UpdatePanel>
     </asp:Panel>
      <script src="js/jquery-3.0.0.min.js"></script>
<%--    <script src="js/jquery-2.1.1.min.js"></script>--%>
    <script src="js/toastr.min.js"></script>
    <link href="css/toastr.css" rel="stylesheet" />
    <script type="text/javascript">

        function bPostaBack() {
            displayToastr();
            var stateObj = { foo: "bar" };
            history.pushState(stateObj, "page 2", "Facturacion.aspx");

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
