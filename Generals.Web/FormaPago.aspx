<%@ Page Title="Administración  Forma de Pagos" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="FormaPago.aspx.cs" Inherits="BrakGeWeb.FormaPago" %>
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
					        <%--<div class="panel-control">--%>
                               <%--  <div class="col-md-12 col-centered" >
                                    <header class="header">--%>
<%--                                    <h4>                        --%>
                                        <!-- setea un asp:label con variables de sesion para poner el titulo dinamicanmente -->
                                        <asp:Label ID="Tittle" runat="server" Text="Forma de Paago" Font-Size="Large" BorderColor="#3366FF"></asp:Label>                                       
                                  <%--  </h4>--%>

                                    <%--</header>	
		    				   
                                 </div>	--%>
					        <%--</div>--%>
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
                                                                            <asp:GridView ID="GridFormaPago" runat="server" CssClass="table table-striped table-bordered dataTable no-footer dtr-inline" cellspacing="0" width="100%" role="grid"  style="width: 100%;" PageSize="10" AllowPaging="True" AllowSorting="True" OnPageIndexChanging="GridFormaPago_PageIndexChanging" GridLines="None" AutoGenerateColumns="false"  >
                                                                                <pagersettings firstpagetext="Primero &nbsp;" lastpagetext="Última &nbsp;" nextpagetext="Siguiente &nbsp;"  previouspagetext="Anterior &nbsp;" Mode="NextPreviousFirstLast" />
                                                                                    <AlternatingRowStyle BackColor="#F4F4F4" />
                                                                                    <Columns>  
                                                                    
                                                                                        <asp:BoundField DataField="Id" HeaderText="Código" SortExpression="Id">
                                                                                        <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                                                        </asp:BoundField>
                                                                                        <asp:BoundField DataField="Descripcion" HeaderText="Descripcion" 
                                                                                            SortExpression="Descripcion" />
                                                               
                                                                                       <asp:BoundField DataField="DiasCredito" HeaderText="DiasCredito" 
                                                                                            SortExpression="DiasCredito" />
                                                                                        <asp:TemplateField HeaderStyle-HorizontalAlign="Center" HeaderText="Actions">

                                                                                            <ItemTemplate> 
                                                                       
                                                                                           <asp:ImageButton ID="Editar"  ToolTip=" Editar" ImageUrl="~/images/Edit.png" ImageAlign="AbsMiddle"   CssClass="celdasMedidor"
                                                                                                      runat="server"  CommandArgument='<%# Eval("Id") %>' CommandName="IdSolicitud"  OnCommand="BtnSelect_Command" />
                                                                                            <asp:ImageButton ID="Delete" ImageUrl="~/images/delete.png" CssClass="celdasMedidor" ImageAlign="AbsMiddle" runat="server"   CausesValidation="true" CommandArgument='<%# Eval("Id") %>' 
                                                                                                        CommandName="TCCode"  OnClientClick="return confirm('Deseas Desactivar este Registro?');" ToolTip="Eliminar"
                                                                                                                OnCommand="btneliminarGridView_Command" /> 
                                                                                                              
                                                                                            </ItemTemplate>
                                                                   
                                                                                        </asp:TemplateField>                                                              
                                                                                    </Columns>
                                                                        </asp:GridView>
                                                                    </div>
                                                                </div>                                            
                                                               <div class="row">
                                                                     <div class="col-md-12"> 
                                                                             <asp:Button ID="Nuevo" runat="server" Text="Nuevo" CssClass="btn btn-purple" OnClick="Nuevo_Click" />
                                                                  
                                                                         <asp:HyperLink ID="HyperLink1" runat="server" CssClass="btn btn-purple" NavigateUrl="~/Default.aspx">Cerrar</asp:HyperLink>
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
                                                        <div class="panel-heading">
				                                            <h3 class="panel-title">FormaPago</h3>         
				                                        </div>
                                                        <div class="panel-body">
                                                                <div class="row">
                                                                        <div class="form-group col-md-6">
                                                                            <label>Descripción:</label>
                                                                            <asp:TextBox  CssClass="form-control" ID="TxtNombre" runat="server" MaxLength="150" ></asp:TextBox>
                                                                            <asp:TextBox  CssClass="form-control" ID="TxtId" runat="server" Visible="false" ReadOnly="true" ></asp:TextBox>
                                                                            <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ErrorMessage="*"
                                                                                                ControlToValidate="TxtNombre" ForeColor="#ff0000" ValidationGroup="Grabar" SetFocusOnError="true"></asp:RequiredFieldValidator>
                                                                        </div>
                                                
                                                                        <div class="form-group col-md-2">
                                                                            <label>Días Credito</label>
                                                                          <%--  <input  type="text" runat="server" id="DiasCredito"  class="form-control"  />--%>  <asp:TextBox  CssClass="form-control" ID="DiasCredito" runat="server" MaxLength="2" ></asp:TextBox>
                                                   
                                                                        </div>
                                                                        <div class="form-group col-md-2">
                                                                            <label>Porcentaje Descuento</label>
                                                                        <asp:TextBox  CssClass="form-control" ID="PorcentajeDescuento" runat="server" MaxLength="2" ></asp:TextBox>
                                                                        </div>
                                                                        <div class="form-group col-md-2">
                                                                             <label>Porcentaje Credito</label>
                                                                           <asp:TextBox  CssClass="form-control" ID="PorcentajeCredito" runat="server" MaxLength="2" ></asp:TextBox>
                                                                        </div>
                                                                   </div>
                                                                     <div class="row">
                                                                         <div class="form-group col-md-12">
                                                                             <label>Explicación</label>
                                                                             <asp:TextBox ID="Explicacion"  CssClass="form-control" TextMode="MultiLine" runat="server"></asp:TextBox>
                                                                         </div>
                                                                     </div>
                                    
                               
                                   
                                                            <div class="row">
                                                                    <div class="col-md-12">
                                                                        <asp:Button ID="btnGuardar" runat="server" Text="Guardar" OnClick="BtnGuardar_Click" CssClass="btn btn-purple" />
                                                                        <asp:Button ID="btnLimpiar" runat="server" Text="Limpiar" OnClick="Limpiar_Click" CssClass="btn btn-purple" />
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
            history.pushState(stateObj, "page 2", "FormaPago.aspx");

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
