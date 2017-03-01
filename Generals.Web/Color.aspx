<%@ Page Title="Color" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Color.aspx.cs" Inherits="BrakGeWeb.Color" %>
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
                                        <asp:Label ID="Tittle" runat="server" Text="Administrar Colores" Font-Size="Large" BorderColor="#3366FF"></asp:Label>                                       
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
                                                                                        <asp:TextBox  CssClass="form-control input-sm" ID="TxtBusqueda" runat="server" OnTextChanged="TxtBusqueda_TextChanged" AutoPostBack="True" placeholder="Buscar.." ></asp:TextBox>
							                                                            <span class="input-group-btn">
								                                                            <button class="text-muted" id="Buscar" runat="server" onserverclick="TxtBusqueda_TextChanged" type="button"><i class="fa fa-search"></i></button>
							                                                            </span>
						                                                            </div>
					                                                            </div>
                                                                                <br />                  
                                                                                    <asp:GridView ID="GridColor" runat="server" CssClass="table table-striped table-bordered "  role="grid"  PageSize="10" AllowPaging="True" AllowSorting="True" OnPageIndexChanging="GridColor_PageIndexChanging"  AutoGenerateColumns="false" >
                                                                                        <pagersettings firstpagetext="Primero &nbsp;" lastpagetext="Última &nbsp;" nextpagetext="Siguiente &nbsp;"  previouspagetext="Anterior &nbsp;" Mode="NextPreviousFirstLast" />
                                                                                            
                                                                                            <Columns>                                       
                                                                                                <asp:BoundField DataField="Id" HeaderText="ID" SortExpression="Id">
                                                                                                <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                                                                </asp:BoundField>
                                                                                                <asp:BoundField DataField="CodigoColor" HeaderText="Codigo" 
                                                                                                    SortExpression="CodigoColor" />
                                                                                                <asp:BoundField DataField="Descripcion" HeaderText="Descripcion" 
                                                                                                    SortExpression="Descripcion" />
                                                                                                <asp:TemplateField HeaderStyle-HorizontalAlign="Center" HeaderText="Actions">

                                                                                                    <ItemTemplate>         
                                                                                  <%--              <asp:ImageButton ID="Editar" ControlStyle-CssClass="btn btn-xs btn-default add-tooltip fa fa-pencil" ToolTip=" Editar"
                                                                                                          runat="server"  CommandArgument='<%# Eval("Id") %>' CommandName="IdSolicitud"  OnCommand="BtnSelect_Command" />
                                                                                                       <asp:ImageButton ID="btneliminarGridView" runat="server" ControlStyle-CssClass="btn btn-xs btn-default add-tooltip fa fa-trash"  CausesValidation="true" CommandArgument='<%# Eval("Id") %>' 
                                                                                                                    CommandName="TCCode"  OnClientClick="return confirm('Deseas Eliminar este Registro?');" ToolTip="Eliminar"
                                                                                                                         OnCommand="btneliminarGridView_Command" />  --%>
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
                                                                       <%-- <button runat="server" id="BtnNuevo"  onserverclick="Nuevo_Click"  class="btn btn-purple" ><span class="icon">
		                                                                <i class="fa fa-file"> </i></span> &nbsp; Nuevo</button>--%>
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
                                                    <div class="col-md-12" >
                                                        <div class="panel formdata" >
                                                              
                                                                <div class="panel-body">
                                                                    <div class="row">
                                                                        <div class="form-group col-md-4">
                                                                            <label>Codigo Color:</label>
                                                                            <asp:TextBox  CssClass="form-control" ID="CodigoColor" runat="server" MaxLength="150" ></asp:TextBox>
                                                                            <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ErrorMessage="*"
                                                                                                ControlToValidate="CodigoColor" ForeColor="#ff0000" ValidationGroup="Grabar" SetFocusOnError="true"></asp:RequiredFieldValidator> 
                                                                        </div> 
                                                                        <div class="form-group col-md-6">
                                                                            <label>Descripción:</label>
                                                                            <asp:TextBox  CssClass="form-control" ID="Descripcion" runat="server" MaxLength="150" ></asp:TextBox>
                                                                            <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ErrorMessage="*"
                                                                                                ControlToValidate="Descripcion" ForeColor="#ff0000" ValidationGroup="Grabar" SetFocusOnError="true"></asp:RequiredFieldValidator>
                                                                              <asp:TextBox  CssClass="form-control" ID="TxtId" runat="server" ReadOnly="true" Visible="false" ></asp:TextBox>
                                                                        </div>                                              
                                      
                                                                    </div>
                                                                    <hr />
                                                                    <div class="row">
                                                                            <div class="col-md-12">
                                                     
                                                                              <%--  <button runat="server" id="Guardar"  onserverclick="BtnGuardar_Click" validationgroup="Grabar"  class="btn btn-purple" ><span class="icon"><i class="fa fa-plus"></i></span>&nbsp; Guardar
                                                                                </button>
                                                                                <button runat="server" id="Limpiar"  onserverclick="Limpiar_Click"  class="btn btn-purple" ><span class="icon"><i class="fa fa-paint-brush"></i></span>&nbsp; Limpiar
                                                                                </button>
                                                                                <button runat="server" id="Cancelar"  onserverclick="Cancelar_Click"  class="btn btn-purple"><span class="icon"><i class="fa fa-rotate-right"></i></span>&nbsp;Cancelar
                                                                                </button>--%>
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
           <%-- <script type="text/javascript" >
                Sys.Application.add_load(BindEvents);
            </script>--%>
         
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
            history.pushState(stateObj, "page 2", "Color.aspx");

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
