<%@ Page Title="Cotizar Pedidos Cliente" Language="C#" MasterPageFile="~/FrontCliente.Master" AutoEventWireup="true" CodeBehind="CotizarPedidosCliente.aspx.cs" Inherits="BrakGeWeb.CotizarPedidosCliente" %>  
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
<script src="Scripts/EventForms.js"></script>
    <script src="js/jquery-3.0.0.min.js"></script>
    <script src="js/toastr.min.js"></script>
    <link href="css/toastr.css" rel="stylesheet" />
    <%--<link href="template/css/bootstrap.min.css" rel="stylesheet" />--%>
<%--    <link href="template/css/nifty.css" rel="stylesheet" />
    <link href="template/css/nifty.min.css" rel="stylesheet" />--%>
    <%--  <link href="Content/custom.css" rel="stylesheet" /> --%>
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
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
     <asp:ToolkitScriptManager ID="ToolkitScriptManager1" runat="server"></asp:ToolkitScriptManager>
     <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
                                                <asp:Panel ID="pnlDatos" runat="server">
                                                    <div class="row">
                                                        <div class="col-md-12" >
                                                            <div class="panel  panel-purple" >
                                                                     <div class="panel-heading">
				                                                        <h3 class="panel-title">Datos Basicos</h3>         
				                                                    </div>
                                                                    <div class="panel-body">  
                                                                        <div class="row">
                                                                            <div class="form-group col-md-2">
                                                                                 <label>Nro. Documento</label>
                                                                                  <asp:RequiredFieldValidator ID="RequiredFieldValidator5" runat="server"  ErrorMessage="Fecha  Requerido" Text="*" 
                                                                                     ControlToValidate="Documento" ForeColor="#ff0000" ValidationGroup="Grabar" SetFocusOnError="true"></asp:RequiredFieldValidator>
                                                                                        <%--<div class="searchbox">
						                                                                    <div class="input-group custom-search-form">
                                                                                                <asp:TextBox  CssClass="form-control input-sm" ID="Documento" runat="server" OnTextChanged="Documento_TextChanged" AutoPostBack="True" placeholder="Buscar.." ></asp:TextBox>
							                                                                    <span class="input-group-btn">
								                                                                    <button class="text-muted" id="Button8" runat="server" onserverclick="Documento_TextChanged" type="button"><i class="fa fa-search"></i></button>
							                                                                    </span>
						                                                                    </div>
					                                                                    </div>--%>
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
                                                                                      <asp:RequiredFieldValidator ID="RequiredFieldValidator4" runat="server"  ErrorMessage="Bodega de  Requerido" Text="*"  InitialValue="0"
                                                                                     ControlToValidate="Bodega" ForeColor="#ff0000" ValidationGroup="Grabar" SetFocusOnError="true"></asp:RequiredFieldValidator>

                                                                                <asp:DropDownList ID="Bodega" runat="server" Enabled="false" CssClass="form-control"  ></asp:DropDownList>  
                                                                            </div>
                                                                            <div class="form-group col-md-2">
                                                                                <label>Movimiento:</label> 
                                                                                <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server"  ErrorMessage="Tipo de Movimiento Requerido" Text="*"  InitialValue="0"
                                                                                     ControlToValidate="TipoMovimiento" ForeColor="#ff0000" ValidationGroup="Grabar" SetFocusOnError="true"></asp:RequiredFieldValidator>

                                                                                <asp:DropDownList ID="TipoMovimiento" runat="server" CssClass="form-control" Enabled="false" ></asp:DropDownList>
                                                                                  <asp:TextBox  CssClass="form-control" ID="TxtId" runat="server" ReadOnly="true" Visible="false" ></asp:TextBox>
                                                                            </div>
                                                                            <div class="form-group col-md-2">                                                 
                                                                                   <label>Forma De Pago:</label> 
                                                                                <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server"  ErrorMessage="Forma de  Requerido" Text="*"  InitialValue="0"
                                                                                     ControlToValidate="FormaDePago" ForeColor="#ff0000" ValidationGroup="Grabar" SetFocusOnError="true"></asp:RequiredFieldValidator>

                                                                                <asp:DropDownList ID="FormaDePago" runat="server" CssClass="form-control"  ></asp:DropDownList>
                                                                            </div>                                              
                                                                            <div class="form-group col-md-2">
                                                                                 <label>Fecha</label>    
                                                                                <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server"  ErrorMessage="Fecha  Requerido" Text="*" 
                                                                                     ControlToValidate="Fecha" ForeColor="#ff0000" ValidationGroup="Grabar" SetFocusOnError="true"></asp:RequiredFieldValidator>
                                                                                   <asp:CalendarExtender ID="CalendarExtender4" runat="server" CssClass="form-control demo-a-purple" PopupButtonID="Fecha" TargetControlID="Fecha"  Format="MM/dd/yyyy"/>
                                                                                   <asp:TextBox  CssClass="form-control" ReadOnly="true" ID="Fecha" runat="server"   ></asp:TextBox>
                                                                            </div>
                                                                            
                                        
                                                                        </div>
                                                                    </div>                                             
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12" >
                                                            <div class="panel panel-purple" >
                                                                    <div class="panel-heading">
				                                                        <h3 class="panel-title">Productos</h3>         
				                                                    </div>
                                                                    <div class="panel-body">
                                                                        <div class="row">
                                                                             <div class="col-md-12">
                                                                                   <asp:GridView ID="Detalle" runat="server" CssClass="table table-striped table-bordered dataTable no-footer dtr-inline" AllowPaging="True" OnRowEditing="Detalle_RowEditing" OnRowCancelingEdit="Detalle_RowCancelingEdit"    
                                                                                       AllowSorting="True" GridLines="None"  ShowFooter="True" AutoGenerateColumns="False"  OnRowDataBound="Detalle_RowDataBound" OnRowUpdating="Detalle_RowUpdating">
                                                                                            <pagersettings firstpagetext="Primero &nbsp;" lastpagetext="Última &nbsp;" nextpagetext="Siguiente &nbsp;"  previouspagetext="Anterior &nbsp;" Mode="NextPreviousFirstLast" />
                                                                                                <AlternatingRowStyle BackColor="#F4F4F4" />
                                                                                                <Columns>
                                                                                                    <asp:TemplateField HeaderStyle-HorizontalAlign="Center" HeaderText="Id Producto" Visible ="true" SortExpression="IdProducto">
                                                                                                        <ItemTemplate>
                                                                                                            <asp:Label ID="lbl_IdProd" runat="server" Text='<%# Eval("IdProducto") %>'></asp:Label>
                                                                                                          </ItemTemplate>
                                                                                                        <EditItemTemplate>
                                                                                                            <asp:TextBox runat="server" Text='<%# Bind("IdProducto") %>' ReadOnly="true" ID="TxtIdProducto" CssClass="form-control"></asp:TextBox>
                                                                                                        </EditItemTemplate>
                                                                  
                                                                                                    </asp:TemplateField>
                                                                                                     <asp:TemplateField HeaderStyle-HorizontalAlign="Center" HeaderText="Codigo" Visible ="true" SortExpression="Iva">
                                                                                                          <ItemTemplate>
                                                                                                            <asp:Label ID="lbl_DsctoPorcentaje" runat="server" Text='<%# Eval("Codigo") %>'></asp:Label>
                                                                                                          </ItemTemplate>
                                                                                                        <EditItemTemplate>
                                                                                                            <asp:TextBox runat="server" Text='<%# Bind("Codigo") %>'  ID="TxtDsctoPorcentaje" CssClass="form-control" ReadOnly="true"></asp:TextBox>
                                                                                                        </EditItemTemplate>
                                                                  
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderStyle-HorizontalAlign="Center" HeaderText="Producto" Visible ="true" SortExpression="Producto">
                                                                                                        <ItemTemplate>
                                                                                                            <asp:Label ID="lbl_Prod" runat="server" Text='<%# Eval("Producto") %>'></asp:Label>
                                                                                                          </ItemTemplate>
                                                                                                        <EditItemTemplate>
                                                                                                            <asp:TextBox runat="server" Text='<%# Bind("Producto") %>' ReadOnly="true" ID="TxtProducto" CssClass="form-control"></asp:TextBox>
                                                                                                        </EditItemTemplate>
                                                                  
                                                                                                    </asp:TemplateField>
                                                                                                    
                                                                                                    <asp:TemplateField HeaderStyle-HorizontalAlign="Center" HeaderText="Precio " Visible ="true" SortExpression="Precio">
                                                                                                        <ItemTemplate>
                                                                                                            <asp:Label ID="lbl_Precio" runat="server" Text='<%# (String.Format("{0:C}", Eval("Precio"))) %>' ></asp:Label>
                                                                                                          </ItemTemplate>
                                                                                                        <EditItemTemplate>
                                                                                                            <asp:TextBox runat="server" Text='<%# Bind("Precio") %>'  ID="TxtPrecio" ReadOnly="true" CssClass="form-control"> </asp:TextBox>
                                                                                                        </EditItemTemplate>
                                                                    
                                                                                                    </asp:TemplateField>
                                                                                                    <%-- <asp:TemplateField HeaderStyle-HorizontalAlign="Center" HeaderText="Iva" Visible ="true" SortExpression="Iva">
                                                                                                          <ItemTemplate>
                                                                                                            <asp:Label ID="lbl_IvaPorcentaje" runat="server" Text='<%# Eval("IvaPorcentaje") %>'></asp:Label>
                                                                                                          </ItemTemplate>
                                                                                                        <EditItemTemplate>
                                                                                                            <asp:TextBox runat="server" Text='<%# Bind("IvaPorcentaje") %>' ReadOnly="true" ID="TxtIvaPorcentaje" CssClass="form-control"></asp:TextBox>
                                                                                                        </EditItemTemplate>
                                                                  
                                                                                                    </asp:TemplateField>--%>
                                                                                                    <asp:TemplateField HeaderStyle-HorizontalAlign="Center" Visible ="true" HeaderText="Talla">
                                                                                                           <ItemTemplate>
                                                                                                            <asp:Label ID="lbl_Descuento" runat="server" Text='<%# Eval("Talla") %>' DataFormatString="{0:C3}"></asp:Label>
                                                                                                          </ItemTemplate>
                                                                                                           <EditItemTemplate>
                                                                                                                 <asp:TextBox ID="txtDescuento" runat="server"  Text='<%# Bind("Talla") %>' ReadOnly="true" CssClass="form-control"></asp:TextBox>
                                                                                                            </EditItemTemplate>  
                                                                                                           <HeaderStyle HorizontalAlign="Center" />
                                                                                                    </asp:TemplateField> 
                                                                                                    <asp:TemplateField HeaderStyle-HorizontalAlign="Center" Visible ="true" HeaderText="Existente">
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
                                                                                                    
                                                                                                     <asp:TemplateField HeaderStyle-HorizontalAlign="Center" Visible ="true" HeaderText="Editar" ShowHeader="False">
                                                                                                        <EditItemTemplate>
                                                                                                            <asp:LinkButton runat="server" Text="Editar| " CommandName="Update" CausesValidation="True" ID="LinkButton1"></asp:LinkButton>&nbsp;<asp:LinkButton runat="server" Text="Cancelar" CommandName="Cancel" CausesValidation="False" ID="LinkButton2"></asp:LinkButton>
                                                                                                        </EditItemTemplate>
                                                                                                        <ItemTemplate>
                                                                                                            <asp:LinkButton runat="server" Text="Editar" CommandName="Edit" CausesValidation="False" ID="LinkButton1"></asp:LinkButton>

                                                                                                        </ItemTemplate>
                                                                                                        <HeaderStyle HorizontalAlign="Center" />
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="Otras Tallas">
                                                                                                        <ItemTemplate>


                                                                                                            <asp:ImageButton ID="MostrarOtrasTallas" runat="server" CausesValidation="true" CommandArgument='<%# Eval("Codigo") %>'
                                                                                                                CommandName="OtrasTallas"  ToolTip="Ver Otras Tallas"
                                                                                                                OnCommand="MostrarOtrasTallas_Command" ImageUrl="~/images/See.png" Width="20px" CssClass="celdasMedidor" />

                                                                                                        </ItemTemplate>

                                                                                                        <HeaderStyle HorizontalAlign="Center"></HeaderStyle>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="">
                                                                                                        <ItemTemplate>


                                                                                                            <asp:ImageButton ID="DeleteItem" runat="server" CausesValidation="true" CommandArgument='<%# Eval("IdProducto") %>'
                                                                                                                CommandName="TCCode" OnClientClick="return confirm('Deseas Eliminar este Registro?');" ToolTip="Eliminar"
                                                                                                                OnCommand="DeleteItem_Command" ImageUrl="~/images/delete.png" Width="20px" CssClass="celdasMedidor" />

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
                                                            <div class="panel panel-purple" >
                                                                    <div class="panel-heading">
				                                                        <h3 class="panel-title">Total Cotización</h3>         
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
                                                                             
                                                                        </div>
                                                                        <div class="row">
                                                                            <div class="col-md-12">
                                                                                 <asp:Button ID="BtnGuardar" runat="server" Text="Generar Pedido" OnClick="BtnGuardar_Click" CssClass="btn btn-primary" />                                                            
                                                                                 <asp:Button ID="btnLimpiar" runat="server" Text="Limpiar" OnClick="Limpiar_Click" CssClass="btn btn-primary" />
                                                                                  <asp:Button ID="btnCancelar" runat="server" Text="Cancelar" OnClick="Cancelar_Click" CssClass="btn btn-primary" />
                                                                                  <asp:Button ID="Imprimir" runat="server" Text="Imprimir" OnClick="Imprimir_Click" CssClass="btn btn-primary" />
                                                                            </div>
                                                                        </div>
                                        
                                                                    </div>                                             
                                                            </div>
                                                        </div>
                                                     </div>
                                                   

                                                </asp:Panel>
            
                                       
            
            
            <asp:TextBox ID="Msj1" runat="server" CssClass="visible"></asp:TextBox>
            <asp:TextBox ID="Type1" runat="server" CssClass="visible"></asp:TextBox>
            <script type="text/javascript" >
                Sys.Application.add_load(BindEvents);
            </script>
        </ContentTemplate>
          
    </asp:UpdatePanel>
       <asp:Button ID="btnInicial" Style="display:none;" runat="server"/>
          <!-- Modal -->
       <asp:Button ID="BtnProd" Style="display:none;" runat="server"/>
      <ajaxToolkit:ModalPopupExtender ID="ModalItems" runat="server" TargetControlID="BtnProd" 
        BackgroundCssClass="modalBackground " PopupControlID="PnlItem">

      </ajaxToolkit:ModalPopupExtender>
      <asp:Panel ID="PnlItem" runat="server" style="display:none; background:white; width:90%; height:auto">
               <asp:UpdatePanel ID="UpdatePanel3" runat="server">
                    <ContentTemplate>
                          <div class="modal-header">
                                <h3 >Productos </h3>
                          </div>
                          <div class="modal-body">
                                <%--<div class="container-fluid well">--%>
                                    <%--<div class="panel">--%>
                                        <div class="row">
                                            <div class="col-md-12">
                                               <%-- <div class="searchbox">
						                            <div class="input-group custom-search-form">
                                                        <asp:TextBox  CssClass="form-control input-sm" ID="ItemBusqueda" runat="server" OnTextChanged="ItemBusqueda_TextChanged" AutoPostBack="True" placeholder="Buscar.." ></asp:TextBox>
							                            <span class="input-group-btn">
								                            <button class="text-muted" id="Button1" runat="server" onserverclick="ItemBusqueda_TextChanged" type="button"><i class="fa fa-search"></i></button>
							                            </span>
						                            </div>
					                            </div>--%>

                                                    <asp:GridView ID="GridItem" runat="server" CssClass="table table-striped table-bordered dataTable no-footer dtr-inline" cellspacing="0"  role="grid"  style="width: 100%;" PageSize="10" AllowPaging="True"
                                                         AllowSorting="True"  GridLines="None" AutoGenerateColumns="false" EmptyDataText="No hay Productos para Mostrar" OnPageIndexChanging="GridItem_PageIndexChanging" >
                                                        <pagersettings firstpagetext="Primero &nbsp;" lastpagetext="Última &nbsp;" nextpagetext="Siguiente &nbsp;"  previouspagetext="Anterior &nbsp;" Mode="NextPreviousFirstLast" />
                                                            <AlternatingRowStyle BackColor="#F4F4F4" />
                                                            <Columns>  
                                                                <asp:BoundField DataField="Id" HeaderText="Id" SortExpression="Id" ControlStyle-CssClass="visible" />                                     
                                                                <asp:BoundField DataField="Codigo" HeaderText="Codigo" SortExpression="Codigo">
                                                              
                                                                </asp:BoundField>
                                                                <asp:BoundField DataField="Descripcion" HeaderText="Descripcion" 
                                                                    SortExpression="Descripcion" />
                                                                    <%-- <asp:BoundField DataField="DescSubgrupo" HeaderText="SubGrupo" 
                                                                    SortExpression="DescSubgrupo" />--%>
                                                                   <asp:BoundField DataField="Precio" HeaderText="Precio"     DataFormatString="{0:n3}"
                                                                    SortExpression="Precio" />
                                                                        <asp:BoundField DataField="Talla" HeaderText="Talla"     
                                                                    SortExpression="Talla" />
                                                               
                                                                <asp:TemplateField HeaderStyle-HorizontalAlign="Center" >

                                                                    <ItemTemplate> 
                                                            <asp:ImageButton ID="SelectItem" ControlStyle-CssClass="btn btn-sm btn-primary" ImageUrl="~/images/Selecet.png"   Height="20px" Width="20px"  CssClass="celdasMedidor"
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
      
      <script src="js/jquery-3.0.0.min.js"></script>
<%--    <script src="js/jquery-2.1.1.min.js"></script>--%>
    <script src="js/toastr.min.js"></script>
    <link href="css/toastr.css" rel="stylesheet" />
    <script type="text/javascript">

        function bPostaBack() {
            displayToastr();
            var stateObj = { foo: "bar" };
            history.pushState(stateObj, "page 2", "CotizarPedidosCliente.aspx");

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
