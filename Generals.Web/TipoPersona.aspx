<%@ Page Title="Tipo Persona" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="TipoPersona.aspx.cs" Inherits="BrakGeWeb.TipoPersona" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
<script src="Scripts/EventForms.js"></script>
     <style type="text/css">
        .visible
        {
            display:none !important;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
     <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <div class="row">
              <div class="col-md-12 ">
                    <div class="panel panel-purple ">
				    <!--Panel heading-->
				        <div class="panel-heading">
                            <h3 class="panel-title">Tipo de Personas</h3>    
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
                                                                                        <asp:GridView ID="GridTipoPersona" runat="server" CssClass="table table-striped table-bordered dataTable no-footer dtr-inline" AutoGenerateColumns="False" Width="100%" PageSize="5" AllowPaging="True" AllowSorting="True" OnPageIndexChanging="GridTipoPersona_PageIndexChanging" GridLines="None" >
                                                                                            <pagersettings firstpagetext="Primero &nbsp;" lastpagetext="Última &nbsp;" nextpagetext="Siguiente &nbsp;"  previouspagetext="Anterior &nbsp;" Mode="NextPreviousFirstLast" />
                                                                                                <AlternatingRowStyle BackColor="#F4F4F4" />
                                                                                                <Columns>                                       
                                                                                                    <asp:BoundField DataField="Id" HeaderText="Código" SortExpression="Id">
                                                                                                    <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                                                                    </asp:BoundField>
                                                                                                    <asp:BoundField DataField="Descripcion" HeaderText="Descripcion" 
                                                                                                        SortExpression="Descripcion" />
                                                                                                    <asp:TemplateField HeaderText="activo" SortExpression="activo" ItemStyle-CssClass="alignCenter">
                                                                                                        <ItemTemplate>
                                                                                                            <asp:CheckBox ID="chkActivo" Enabled="false" runat="server" Checked='<%# Eval("Estado") %>' />
                                                                                                        </ItemTemplate>
                                                                                                    </asp:TemplateField>
                                                                                                    <asp:TemplateField HeaderStyle-HorizontalAlign="Center">
                                                                                                        <ItemTemplate>
                                                                                                            <asp:ImageButton ID="Editar" ImageUrl="~/images/Edit.png"  CssClass="celdasMedidor" ToolTip=" Editar"  
                                                                                                                runat="server"  CommandArgument='<%# Eval("Id") %>' CommandName="IdSolicitud"  OnCommand="BtnSelect_Command"  />
                                                                                                            <asp:ImageButton ID="btneliminarGridView" runat="server" ImageUrl="~/images/delete.png"  CausesValidation="true" CommandArgument='<%# Eval("Id") %>' 
                                                                                                                        CommandName="TCCode"  OnClientClick="return confirm('Deseas Eliminar este Registro?');" ToolTip="Eliminar"    CssClass="celdasMedidor"
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
                                                                             
                                                                             <div class="panel-body">
                                                                                <div class="row">
                                                                                    <div class="form-group col-md-3">
                                                                                        <label>Código:</label>
                                                                                        <asp:TextBox  CssClass="form-control" ID="TxtId" runat="server" ReadOnly="true" ></asp:TextBox>
                                                   
                                                                                    </div>
                                                                                    <div class="form-group col-md-6">
                                                                                        <label>Descripción:</label>
                                                                                        <asp:TextBox  CssClass="form-control" ID="TxtNombre" runat="server" MaxLength="150" ></asp:TextBox>
                                                                                        <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ErrorMessage="*"
                                                                                                            ControlToValidate="TxtNombre" ForeColor="#ff0000" ValidationGroup="Grabar" SetFocusOnError="true"></asp:RequiredFieldValidator>
                                                                                    </div>
                                                                                    <div class="form-group col-md-3">
                                                                                        <label for="ChkEstado">Activo:</label>
                                                                                        <asp:CheckBox ID="ChkEstado" runat="server"  />
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
            history.pushState(stateObj, "page 2", "TipoPersona.aspx");

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
