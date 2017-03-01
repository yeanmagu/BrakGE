<%@ Page Title="Administración Clientes" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="GestionCientes.aspx.cs" Inherits="BrakGeWeb.GestionCientes" %>
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
        .fecha{
                border: 1px solid #000 !important;
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
					       <h3 class="panel-title">Administrar Clientes</h3> 
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
                                                                           <h3 class="panel-title">Clientes </h3>                          
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
                                                                                        <asp:GridView ID="GridCliente" runat="server" CssClass="table table-striped table-bordered dataTable no-footer dtr-inline" cellspacing="0" role="grid"  PageSize="10" AllowPaging="True" AllowSorting="True" OnPageIndexChanging="GridCliente_PageIndexChanging" GridLines="None" AutoGenerateColumns="false"  >
                                                                                            <pagersettings firstpagetext="Primero &nbsp;" lastpagetext="Última &nbsp;" nextpagetext="Siguiente &nbsp;"  previouspagetext="Anterior &nbsp;" Mode="NextPreviousFirstLast" />
                                                                                                <AlternatingRowStyle BackColor="#F4F4F4" />
                                                                                                <Columns>  
                                                                                                    <asp:BoundField DataField="Id" HeaderText="Id" SortExpression="Id" ControlStyle-CssClass="visible" />                                     
                                                                                                    <asp:BoundField DataField="NroDocumento" HeaderText="Nro. Documento" SortExpression="NroDocumento">
                                                              
                                                                                                    </asp:BoundField>
                                                                                                    <asp:BoundField DataField="Nombre" HeaderText="Nombre" 
                                                                                                        SortExpression="Nombre" />
                                                                                                            <asp:BoundField DataField="Apellidos" HeaderText="Apellido" 
                                                                                                        SortExpression="Apellidos" />
                                                                                                        <asp:BoundField DataField="Tipo" HeaderText="Tipo Cliente" 
                                                                                                        SortExpression="Tipo" />
                                                                                                    <asp:BoundField DataField="TipoPersona" HeaderText="Tipo" 
                                                                                                        SortExpression="TipoTipoPersona" />
                                                                                                    <asp:BoundField DataField="Email" HeaderText="Email" 
                                                                                                        SortExpression="Email" />
                                                                                                    <asp:BoundField DataField="Ciudad" HeaderText="Ciudad" 
                                                                                                        SortExpression="Ciudad" />
                                                                                                        <asp:CheckBoxField DataField="Estado" HeaderText="Activo" SortExpression="Activo"  />
                                                               
                                                                                                    <asp:TemplateField HeaderStyle-HorizontalAlign="Center" HeaderText="Actions">

                                                                                                        <ItemTemplate> 
                                                                       
                                                                                                            <%--  <asp:LinkButton ID="LinkEdit" ControlStyle-CssClass="btn btn-sm btn-primary add-tooltip fa fa-pencil"  runat="server"  CommandArgument='<%# Eval("Id") %>' CommandName="Edit" OnClick="LinkEdit_Click"  ToolTip=" Editar" ></asp:LinkButton> 
                                                                                                            <asp:LinkButton ID="LinkDesativar" ControlStyle-CssClass="btn btn-sm btn-danger add-tooltip fa fa-trash"  runat="server"  CommandArgument='<%# Eval("Id") %>' CommandName="IdSolicitud"  OnCommand="BtnSelect_Command" ToolTip="Desactivar"></asp:LinkButton> --%>
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
				                                                        <h3 class="panel-title">Cliente</h3>         
				                                                    </div>
                                                                    <div class="panel-body">
                                                                        <div class="row">                                        
                                                                            <div class="form-group col-md-2">
                                                                                <label>Tipo Cliente:</label>
                                                                                <asp:DropDownList ID="Tipo" runat="server" CssClass="form-control"  AutoPostBack="true" OnSelectedIndexChanged="TipoPersona_SelectedIndexChanged"></asp:DropDownList>
                                                                                <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ErrorMessage="*"
                                                                                        ControlToValidate="Tipo" ForeColor="#ff0000" ValidationGroup="Grabar" SetFocusOnError="true" InitialValue="0"></asp:RequiredFieldValidator>
                                           
                                                                            </div>
                                                                            <div class="form-group col-md-2">
                                                                                <label>Tipo Persona:</label>
                                                                                <asp:DropDownList ID="TipoPersona" runat="server" CssClass="form-control"></asp:DropDownList>
                                                                                <asp:RequiredFieldValidator ID="RequiredFieldValidator4" runat="server" ErrorMessage="*"
                                                                                        ControlToValidate="TipoPersona" ForeColor="#ff0000" ValidationGroup="Grabar" SetFocusOnError="true" InitialValue="0"></asp:RequiredFieldValidator>
                                           
                                                                            </div>
                                                                            <div class="form-group col-md-2">
                                                                                <label>Tipo Documento:</label>
                                                                                <asp:DropDownList ID="TipoDocumento" runat="server" CssClass="form-control"></asp:DropDownList>
                                                                                <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ErrorMessage="*"
                                                                                        ControlToValidate="TipoDocumento" ForeColor="#ff0000" ValidationGroup="Grabar" SetFocusOnError="true" InitialValue="0"></asp:RequiredFieldValidator>
                                           
                                                                            </div> 
                                                                            <div class="form-group col-md-2">
                                                                                <label>Nro. Documento:</label>
                                                                                <asp:TextBox  CssClass="form-control" ID="NroDocumento" runat="server" MaxLength="150" ></asp:TextBox>
                                                                                <asp:RequiredFieldValidator ID="RequiredFieldValidator5" runat="server" ErrorMessage="*"
                                                                                        ControlToValidate="NroDocumento" ForeColor="#ff0000" ValidationGroup="Grabar" SetFocusOnError="true" ></asp:RequiredFieldValidator>
                                           
                                                                            </div>
                                                                            <div class="form-group col-md-2">
                                                                                <label>Nombre:</label>
                                                                                <asp:TextBox  CssClass="form-control" ID="Nombre" runat="server" MaxLength="150" ></asp:TextBox>
                                                                                <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ErrorMessage="*"
                                                                                                    ControlToValidate="Nombre" ForeColor="#ff0000" ValidationGroup="Grabar" SetFocusOnError="true"></asp:RequiredFieldValidator>
                                                                                    <asp:TextBox  CssClass="form-control" ID="TxtId" runat="server" ReadOnly="true" Visible="false" ></asp:TextBox>
                                                                            </div>
                                                                            <div class="form-group col-md-2">
                                                                                <label>Apellido:</label>
                                                                                <asp:TextBox  CssClass="form-control" ID="Apellido" runat="server" MaxLength="150" ></asp:TextBox>
                                                                                <asp:RequiredFieldValidator ID="RequiredFieldValidator6" runat="server" ErrorMessage="*"
                                                                                                    ControlToValidate="Nombre" ForeColor="#ff0000" ValidationGroup="Grabar" SetFocusOnError="true"></asp:RequiredFieldValidator>
                                            
                                                                            </div>   
                                                                        </div>
                                                                        <div class="row">                                        
                                                                            <div class="form-group col-md-2">
                                                                                <label>Fecha Nacimiento:</label>
                                                                                <asp:TextBox  CssClass="form-control fecha" ID="FechaNacimiento" TextMode="Date" Height="34px" runat="server" MaxLength="150" ></asp:TextBox>
                                                                                <asp:RequiredFieldValidator ID="RequiredFieldValidator7" runat="server" ErrorMessage="*"
                                                                                        ControlToValidate="FechaNacimiento" ForeColor="#ff0000" ValidationGroup="Grabar" SetFocusOnError="true" ></asp:RequiredFieldValidator>
                                           
                                                                            </div>
                                                                            <div class="form-group col-md-2">
                                                                                <label>Departamento Residencia:</label>
                                                                                <asp:DropDownList ID="Departamento" runat="server" CssClass="form-control" OnSelectedIndexChanged="Departamento_SelectedIndexChanged" AutoPostBack="true"></asp:DropDownList>
                                                                            </div>
                                                                            <div class="form-group col-md-2">
                                                                                <label>Ciudad Residencia:</label>
                                                                                <asp:DropDownList ID="Ciudad" runat="server" CssClass="form-control"></asp:DropDownList>
                                         
                                           
                                                                            </div> 
                                                                            <div class="form-group col-md-2">
                                                                                <label>Dirección:</label>
                                                                                <asp:TextBox  CssClass="form-control" ID="Direccion" runat="server" MaxLength="150" ></asp:TextBox>
                                           
                                                                            </div>
                                                                            <div class="form-group col-md-2">
                                                                                <label>Email:</label>
                                                                                <asp:TextBox  CssClass="form-control fecha" ID="Email" runat="server" TextMode="Email" MaxLength="150" Height="34px" ></asp:TextBox>
                                            
                                                                            </div>
                                                                            <div class="form-group col-md-2">
                                                                                <label>Telefono:</label>
                                                                                <asp:TextBox  CssClass="form-control" ID="Telefono" runat="server" MaxLength="150" ></asp:TextBox>
                                            
                                              
                                                                            </div>   
                                                                        </div>
                                                                        <div class="row">                                        
                                                                            <div class="form-group col-md-2">
                                                                                <label>Celular:</label>
                                                                                <asp:TextBox  CssClass="form-control" ID="Celular"  runat="server" MaxLength="150" ></asp:TextBox>
                                                                            </div>
                                                                            <div class="form-group col-md-2">
                                                                                <br />
                                                                                <label ><input type="checkbox"  runat="server" id="Regimen"> Regimen Simplificado</label>
                                                                            </div>
                                                                            <div class="form-group col-md-2">
                                                                                    <br />
                                                                                <label><input type="checkbox"  runat="server" id="AutoRetenedores" > Autoretenedores</label>
                                         
                                           
                                                                            </div> 
                                                                            <div class="form-group col-md-2">
                                                                                <br />
                                                                                <label ><input type="checkbox"  runat="server" id="AUI"> Aplica AUI</label>                                           
                                                                            </div>
                                                                            <div class="form-group col-md-2">
                                                                                    <br />
                                                                                <label ><input type="checkbox"  runat="server" id="RecibirEmail"> RecibirEmail</label>
                                            
                                                                            </div>
                                                                            <div class="form-group col-md-2">
                                                                                    <br />
                                                                                <label ><input type="checkbox"  runat="server" id="Activo" checked> Activo</label>
                                            
                                                                            </div> 
                                                                        </div>
                                                                        <div class="row">                                        
                                                                            <div class="form-group col-md-2" id="DiasCredito" runat="server">
                                                                                <label>Dias Credito :</label>
                                                                                <asp:TextBox  CssClass="form-control" ID="TxtDiasCredito"  Height="34px" runat="server" TextMode="Number" ></asp:TextBox>
                                                                            </div>
                                                                           <%-- <div class="form-group col-md-2" id="FechaFin" runat="server" >
                                                                                <label>Fecha Fin Contrato:</label>
                                                                                <asp:TextBox  CssClass="form-control" ID="FechaFinContrato" Height="34px" runat="server" TextMode="Date" ></asp:TextBox>
                                                                            </div>--%>
                                                                            
                                                                        </div>
                                                                        <div class="row">
                                                                            <div class="col-md-12">
                                                                                    <label>Notas:</label>
                                                                                <asp:TextBox  CssClass="form-control" ID="Nota"  runat="server" TextMode="MultiLine" ></asp:TextBox>
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
            history.pushState(stateObj, "page 2", "GestionCientes.aspx");

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
