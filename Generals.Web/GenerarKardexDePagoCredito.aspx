<%@ Page Title="Generar Kardex Credito" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="GenerarKardexDePagoCredito.aspx.cs" Inherits="BrakGeWeb.GenerarKardexDePagoCredito" %>
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
     <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <div class="row">
              <div class="col-md-12 ">
                    <div class="panel panel-purple ">
				    <!--Panel heading-->
				        <div class="panel-heading">
					        <h3 class="panel-title">Generar Kardex De Pago</h3>  
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
                                                                                                    <asp:BoundField DataField="TipoMovimiento" HeaderText="TipoMovimiento"    SortExpression="TipoMovimiento" />
                                                                                                    <asp:BoundField DataField="FormaPago" HeaderText="FormaPago"    SortExpression="FormaPago" />
                                                                                                    <asp:BoundField DataField="EstadoDocumento" HeaderText="EstadoDocumento"    SortExpression="EstadoDocumento" />
                                                                
                                                                                                    <asp:TemplateField HeaderStyle-HorizontalAlign="Center" HeaderText="Actions">
                                                                                                        <ItemTemplate>     
                                                                                                                      
                                                                                                           <asp:ImageButton ID="Editar"  ToolTip=" Editar"          ImageUrl="~/images/Edit.png" CssClass="celdasMedidor"  ImageAlign="Middle"
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
                                            <asp:Panel ID="pnlDatos" runat="server">
                                                <div class="row">
                                                    <div class="col-md-12 caja" >
                                                        <div class="panel formdata" >
                                
                                                                <div class="panel-body">
                                                                     <div class="panel-heading">
					                                                        <h4 class="panel-title">Acuerdos </h4>  
				                                                        </div>
                                                                    <hr />
                                                                    <div class="row">
                                                                        <div class="col-md-12">
                                                                            <asp:GridView ID="GridAcuerdos" runat="server" CssClass="table table-striped table-bordered dataTable no-footer dtr-inline" CellSpacing="0" role="grid" AllowPaging="True" AllowSorting="True" AutoGenerateColumns="false" OnPageIndexChanging="GridAcuerdos_PageIndexChanging">
                                                                                <PagerSettings FirstPageText="Primero &nbsp;" LastPageText="Última &nbsp;" NextPageText="Siguiente &nbsp;" PreviousPageText="Anterior &nbsp;" Mode="NextPreviousFirstLast" />
                                                                                <AlternatingRowStyle BackColor="#F4F4F4" />
                                                                                <Columns>
                                                                                    <asp:BoundField DataField="Id" HeaderText="Código" SortExpression="Id"></asp:BoundField>
                                                                                    <asp:BoundField DataField="IdFactura" HeaderText="Id Factura" SortExpression="IdFactura" />
                                                                                    <asp:BoundField DataField="FechaAcuerdo" HeaderText="Fecha Acuerdo" SortExpression="FechaAcuerdo" />
                                                                                    <asp:BoundField DataField="NroCuotas" HeaderText="Nro. Cuotas" SortExpression="NroCuotas" />
                                                                                    <asp:BoundField DataField="ModoPago" HeaderText="Modo Pago" SortExpression="ModoPago" />
                                                                                    <asp:BoundField DataField="Usuario" HeaderText="Usuario" SortExpression="Usuario" />
                                                                                    <asp:CheckBoxField DataField="Estado" HeaderText="Estado"></asp:CheckBoxField>
                                                                                    <asp:TemplateField HeaderStyle-HorizontalAlign="Center" HeaderText="Editar">
                                                                                        <ItemTemplate>               
                                                                                            <asp:ImageButton ID="EditarAcuerdo"  ToolTip=" Editar"          ImageUrl="~/images/Edit.png" CssClass="celdasMedidor"  ImageAlign="Middle"
                                                                                                runat="server"  CommandArgument='<%# Eval("Id") %>' CommandName="EditarAcuerdo"  OnCommand="EditarAcuerdo_Command" />
                                                                                        </ItemTemplate>
                                                                                    </asp:TemplateField>                                                              
                                                                                 </Columns>
                                                                            </asp:GridView>
                                                                        </div>
                                                                        
                                                                    </div>
                                                                     <div class="panel-heading">
					                                                        <h4 class="panel-title">Datos Cliente</h4>  
				                                                        </div>
                                                                    <hr />
                                                                        <div class="row">
                                                                            <div class="form-group col-md-2">
                                                                                 <label>Nro. Documento</label>

                                                                                  <asp:TextBox  CssClass="form-control" ID="Documento"  runat="server" ReadOnly="true" ></asp:TextBox>
                                                                                <asp:TextBox  CssClass="form-control" ID="IdCliente"  runat="server" style="display:none;"></asp:TextBox>
                                                                                  <asp:TextBox  CssClass="form-control" ID="Id"  runat="server" style="display:none;"></asp:TextBox>
                                           
                                                                            </div>
                                                                            <div class="form-group col-md-2">
                                                                                <label>Cliente</label>
                                                                                <asp:TextBox ID="Cliente" CssClass="form-control" runat="server" ReadOnly="true" ></asp:TextBox>
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
                                                                                 <asp:TextBox ID="Bodega" CssClass="form-control" runat="server" ReadOnly="true"></asp:TextBox>
                                                                               
                                                                            </div>
                                                                            <div class="form-group col-md-2">
                                                                                <label>Movimiento:</label> 
                                                                                
                                                                                  <asp:TextBox  CssClass="form-control" ID="Movimiento" runat="server" ReadOnly="true"  ></asp:TextBox>
                                                                            </div>
                                                                            <div class="form-group col-md-2">                                                 
                                                                                   <label>Forma De Pago:</label> 
                                                                                  <asp:TextBox  CssClass="form-control" ID="FormaPago" runat="server" ReadOnly="true"  ></asp:TextBox>
                                                                            </div>                                              
                                                                            <div class="form-group col-md-2">
                                                                                 <label>Fecha</label>    
                                                                                   <asp:TextBox  CssClass="form-control"  ID="Fecha" runat="server"  ReadOnly="true" ></asp:TextBox>
                                                                            </div>
                                                                           
                                        
                                                                        </div>
                                                                        <div class="panel-heading">
					                                                        <h4 class="panel-title">Datos Factura</h4>  
				                                                        </div>
                                                                      <hr />
                                                                       <div class="row">
                                                                      <div class="form-group col-md-2">
                                                                            <label>Nro. Factura</label>        <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" SetFocusOnError="true" Display="Dynamic" ErrorMessage="RequiredFieldValidator" Text="*" ForeColor="Red" ControlToValidate="IdFactura" ValidationGroup="Generar"></asp:RequiredFieldValidator>
                                                                            <asp:TextBox  CssClass="form-control" ID="IdFactura"  runat="server" ReadOnly="true" ></asp:TextBox>
                                                                      </div>
                                                                      <div class="form-group col-md-2">
                                                                            <label>Valor total</label>
                                                                            <asp:TextBox  CssClass="form-control" ID="ValorTotal"  runat="server" ReadOnly="true" ></asp:TextBox>
                                                                          <asp:TextBox  CssClass="form-control" ID="ValorTotalGuardar"  runat="server" Visible="false" ReadOnly="true" ></asp:TextBox>
                                                                      </div>
                                                                      <div class="form-group col-md-2">
                                                                                <label>Fecha Acuerdo</label>     <asp:RequiredFieldValidator ID="RequiredFieldValidator4" runat="server" SetFocusOnError="true" Display="Dynamic" ErrorMessage="RequiredFieldValidator" Text="*" ForeColor="Red" ControlToValidate="FechaAcuerdo" ValidationGroup="Generar"></asp:RequiredFieldValidator>
                                                                                <asp:TextBox  CssClass="form-control" ID="FechaAcuerdo"  runat="server" TextMode="Date"  Height="34px" ></asp:TextBox>
                                                                             
                                                                      </div>
                                                                      <div class="form-group col-md-1">
                                                                                <label>Nro. Cuotas</label>  <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ErrorMessage="RequiredFieldValidator" Text="*" ForeColor="Red" ControlToValidate="ValorCuota" SetFocusOnError="true" Display="Dynamic" ValidationGroup="Generar"></asp:RequiredFieldValidator>
                                                                                <asp:TextBox  CssClass="form-control" ID="Nrocuotas"  TextMode="number" runat="server" ></asp:TextBox>
                                                                       </div>
                                                                       <div class="form-group col-md-2">
                                                                                <label>Valor Cuota</label>  <asp:RequiredFieldValidator ID="RequiredFieldValidator5" runat="server" ErrorMessage="RequiredFieldValidator" Text="*" ForeColor="Red" ControlToValidate="Nrocuotas" SetFocusOnError="true" Display="Dynamic" ValidationGroup="Generar"></asp:RequiredFieldValidator>
                                                                                <asp:TextBox  CssClass="form-control" ID="ValorCuota"   runat="server"  OnTextChanged="ValorCuota_TextChanged"></asp:TextBox>
                                                                           <asp:TextBox  CssClass="form-control" ID="ValorCuotaGuardar" Visible="false"  runat="server" ></asp:TextBox>
                                                                       </div>
                                                                       <div class="form-group col-md-2">
                                                                            <label>Modo de Pago</label>
                                                                           <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" SetFocusOnError="true" Display="Dynamic" ErrorMessage="RequiredFieldValidator" Text="*" ForeColor="Red" ControlToValidate="ModoPago" ValidationGroup="Generar"></asp:RequiredFieldValidator>
                                                                           <asp:DropDownList ID="ModoPago" runat="server" CssClass="form-control">
                                                                               <asp:ListItem Value="8">Semanal</asp:ListItem>
                                                                               <asp:ListItem Value="15">Quincenal</asp:ListItem>
                                                                               <asp:ListItem Value="30">Mensual</asp:ListItem>
                                                                           </asp:DropDownList>
                                                                            
                                                                       </div>
                                                                        <div class="form-group col-md-1">
                                                                            <br />
                                                                             <asp:Button ID="BtnGenerarPlan" runat="server" Text=" " OnClick="BtnGenerarPlan_Click" ValidationGroup="Generar" CssClass="btn btn-purple" />
                                                                        </div>
                                                                     </div>
                                                                    <hr />
                                                                       <div class="panel-heading">
					                                                        <h4 class="panel-title">Plan De Pagos</h4>  
				                                                        </div>
                                                                    <hr />
                                                                       <div class="row">
                                                                             <div class="col-md-12">
                                                                                   <asp:GridView ID="Detalle" runat="server" CssClass="table table-striped table-bordered dataTable no-footer dtr-inline" AllowPaging="True" 
                                                                                       AllowSorting="True" GridLines="None"  ShowFooter="True" AutoGenerateColumns="False"   PageSize="20" OnPageIndexChanging="Detalle_PageIndexChanging">
                                                                                            <pagersettings firstpagetext="Primero &nbsp;" lastpagetext="Última &nbsp;" nextpagetext="Siguiente &nbsp;"  previouspagetext="Anterior &nbsp;" Mode="NextPreviousFirstLast" />
                                                                                                <AlternatingRowStyle BackColor="#F4F4F4" />
                                                                                                <Columns>
                                                                                                   
                                                                                                    <asp:TemplateField HeaderText="NroCuota" Visible ="true" SortExpression="NroCuota">
                                                                                                        <ItemTemplate>
                                                                                                            <asp:Label ID="lbl_NroCuota" runat="server" Text='<%# Eval("NroCuota") %>'></asp:Label>
                                                                                                          </ItemTemplate>
                                                                                                        <EditItemTemplate>
                                                                                                            <asp:TextBox runat="server" Text='<%# Bind("NroCuota") %>' ReadOnly="true" ID="TxtNroCuota" CssClass="form-control"></asp:TextBox>
                                                                                                        </EditItemTemplate>
                                                                  
                                                                                                    </asp:TemplateField>
                                                                                                      <asp:TemplateField HeaderStyle-HorizontalAlign="Center" Visible ="true" HeaderText="Fecha Pago">
                                                                                                        <ItemTemplate>
                                                                                                            <asp:Label ID="lbl_Fecha" runat="server" Text='<%# Eval("Fecha") %>'></asp:Label>
                                                                                                          </ItemTemplate>
                                                                                                           <EditItemTemplate>
                                                                                                                 <asp:TextBox ID="TxtFecha" runat="server" Text='<%# Bind("Fecha") %>' ReadOnly="true" CssClass="form-control"></asp:TextBox>
                                                                                                            </EditItemTemplate>  
                                                                                                           <HeaderStyle HorizontalAlign="Center" />
                                                                                                    </asp:TemplateField>
                                                                                                     <asp:TemplateField HeaderText="SaldoCapital" Visible ="true" SortExpression="SaldoCapital">
                                                                                                          <ItemTemplate>
                                                                                                            <asp:Label ID="lbl_SaldoCapital" runat="server" Text='<%# (String.Format("{0:C}", Eval("SaldoCapital")))  %>'></asp:Label>
                                                                                                          </ItemTemplate>
                                                                                                        <EditItemTemplate>
                                                                                                            <asp:TextBox runat="server" Text='<%# Bind("SaldoCapital") %>' ReadOnly="true" ID="TxtSaldoCapital" CssClass="form-control"></asp:TextBox>
                                                                                                        </EditItemTemplate>
                                                                  
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="Valor" Visible ="true" SortExpression="Valor a Pagar">
                                                                                                        <ItemTemplate>
                                                                                                            <asp:Label ID="lbl_Valor" runat="server" Text='<%# (String.Format("{0:C}", Eval("Valor"))) %>' ></asp:Label>
                                                                                                          </ItemTemplate>
                                                                                                        <EditItemTemplate>
                                                                                                            <asp:TextBox runat="server" Text='<%# Bind("Valor") %>' ReadOnly="true" ID="TxtValor" CssClass="form-control"> </asp:TextBox>
                                                                                                        </EditItemTemplate>
                                                                    
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderText="SaldoPendiente" Visible ="true" SortExpression="SaldoPendiente">
                                                                                                          <ItemTemplate>
                                                                                                            <asp:Label ID="lbl_SaldoPendiente" runat="server" Text='<%# (String.Format("{0:C}", Eval("SaldoPendiente"))) %>'></asp:Label>
                                                                                                          </ItemTemplate>
                                                                                                        <EditItemTemplate>
                                                                                                            <asp:TextBox runat="server" Text='<%# Bind("SaldoPendiente") %>'  ReadOnly="true" ID="TxtSaldoPendiente" CssClass="form-control"></asp:TextBox>
                                                                                                        </EditItemTemplate>                                                                     
                                                                                                    </asp:TemplateField>

                                                                                                </Columns>
                                                                                    </asp:GridView>
                                                                             </div>
                                                                       </div>
                                                                       <div class="row">
                                                                            <div class="col-md-12">
                                                     
                                                
                                                                                  <asp:Button ID="btnGuardar" runat="server" Text="Guardar" OnClick="BtnGuardar_Click" CssClass="btn btn-purple" />
                                                                                                        <asp:Button ID="btnLimpiar" runat="server" Text="Limpiar" OnClick="Limpiar_Click" CssClass="btn btn-purple" />
                                                                                <asp:Button ID="BtnImprimir" runat="server" Text="Imprimir"  OnClick="BtnImprimir_Click" CssClass="btn btn-purple"/>
                                                                                  <asp:Button ID="btnCancelar" runat="server" Text="Cancelar" OnClick="Cancelar_Click" CssClass="btn btn-purple" />
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
      <script src="js/jquery-3.0.0.min.js"></script>
<%--    <script src="js/jquery-2.1.1.min.js"></script>--%>
    <script src="js/toastr.min.js"></script>
    <link href="css/toastr.css" rel="stylesheet" />
    <script type="text/javascript">

        function bPostaBack() {
            displayToastr();
            var stateObj = { foo: "bar" };
            history.pushState(stateObj, "page 2", "GenerarKardexDePagoCredito.aspx");

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
