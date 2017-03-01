<%@ Page Title="Crear Brief" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="CrearBrief.aspx.cs" Inherits="BrakGeWeb.CrearBrief" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
<script src="Scripts/EventForms.js"></script>
    <script src="js/jquery-3.0.0.min.js"></script>
<%--    <script src="js/jquery-2.1.1.min.js"></script>--%>
    <script src="js/toastr.min.js"></script>
    <link href="css/toastr.css" rel="stylesheet" />
     <script src="js/jquery-1.3.2.js"></script>
    <script src="js/jquery.MultiFile.js"></script>
    <style type="text/css">
        .visible
        {
            display:none !important;
        }

       .MultiFile-label a 
       {  
            width: 50px !important;  
            height: 30px !important;  
            background-color: #fb4141 !important;  
            color: #FFF !important;  
            border: 0 !important;  
            padding: 3px 7px !important;  
            text-decoration: none !important;  
        }  
  
        .MultiFile-label a:hover 
        {  
                width: 50px !important;  
                height: 30px !important;  
                background-color: red !important;  
                color: #e5e5e5 !important;  
                border: 0 !important;  
                padding: 3px 7px !important;  
                text-decoration: none !important;  
            }  
  
        .MultiFile-list 
        {  
            height: 100% !important;  
            min-height:200px !important;
            width: 100% !important;  
            padding: 10px 16px !important;  
            border: dashed silver 1px !important;  
            background-color: #C3C0C0 !important;  
        }  
  
        .MultiFile-label 
        {  
            padding-top: 5px !important;  
            padding-bottom: 5px !important;  
            margin-top: 10px !important;  
        }  
  
        .Multifile-UploadAllButton 
        {  
            width: 75px;  
            height: 30px;  
            background-color: #6262e9;  
            color: #FFF;  
            border: 0;  
            text-decoration: none;  
            text-align: center;  
        }  
  
        .Multifile-UploadAllButton:hover 
            {  
                width: 75px;  
                height: 30px;  
                background-color: #2f2fe7;  
                color: #e5e5e5;  
                border: 0;  
                text-decoration: none;  
                text-align: center;  
                cursor: pointer;  
            }  
  
        .Multifile-UploadAll-div-Button {  
           height: 100% !important;  
            min-height:200px !important;
            width: 100% !important;  
            padding: 10px 16px !important;  
            border: dashed silver 1px !important;  
            background-color: #C3C0C0 !important;   
        }  
  
        .Multifile-vk-panel 
        {  
            width: 100% !important;  
            height: 100% !important;  
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
                            <h3 class="panel-title">Brief</h3>
				        </div>
				        <!--Panel body-->
				        <div class="panel-body">
					        <!--Tabs content-->
                              <div id="tabFactura" class="tab-pane active in">
                                  <hr />
                                  <div class="row">
                                         <div class="col-md-12">
                                                 <asp:Panel ID="pnlGrid" runat="server">
                                                         <div class="row">
                                                              <div class="col-md-12 caja" >
                                                                 <div class="panel formdata" >
                                                                     <div class="panel-body">  
                                                                            <div class="col-md-12 caja" >                   
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
                                                                                                <asp:GridView ID="GridBrief" runat="server" CssClass="table table-striped table-bordered dataTable no-footer dtr-inline" cellspacing="0"  role="grid"   PageSize="10" AllowPaging="True" AllowSorting="True" OnPageIndexChanging="GridBrief_PageIndexChanging" GridLines="None" AutoGenerateColumns="false"  EmptyDataText="No hay datos para mostrar" >
                                                                                                    <pagersettings firstpagetext="Primero &nbsp;" lastpagetext="Última &nbsp;" nextpagetext="Siguiente &nbsp;"  previouspagetext="Anterior &nbsp;" Mode="NextPreviousFirstLast" />
                                                                                                        <AlternatingRowStyle BackColor="#F4F4F4" />
                                                                                                        <Columns>  
                                                                    
                                                                                                            <asp:BoundField DataField="Id" HeaderText="Código" SortExpression="Id">
                                                                                                            <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                                                                            </asp:BoundField>
                                                                                                            <asp:BoundField DataField="Descripcion" HeaderText="Descripcion" 
                                                                                                                SortExpression="Descripcion" />
                                                               
                                                                                                        <%--   <asp:BoundField DataField="DescBodega" HeaderText="Bodega" 
                                                                                                                SortExpression="DescBodega" />--%>
                                                                                                            <asp:TemplateField HeaderStyle-HorizontalAlign="Center" HeaderText="Actions">

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
                                                        </div>
                                                    </asp:Panel>
                                                    <asp:Panel ID="pnlDatos" runat="server">
                                                        <div class="row">
                                                            <div class="col-md-12 caja" >
                                                                <div class="panel formdata" >
                               
                                                                        <div class="panel-body">
                                                                             <div class="row">
                                                                                    <div class="form-group col-md-2">
                                                                                         <label>Nro. Documento</label>
                                                                                          <asp:RequiredFieldValidator ID="RequiredFieldValidator5" runat="server"  ErrorMessage="Fecha  Requerido" Text="*" 
                                                                                             ControlToValidate="Documento" ForeColor="#ff0000" ValidationGroup="Grabar" SetFocusOnError="true"></asp:RequiredFieldValidator>

                                                                                           <asp:TextBox  CssClass="form-control" ID="Documento"  runat="server" AutoPostBack="true"  OnTextChanged="Documento_TextChanged"></asp:TextBox>
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
                                                                                         <label>Fecha</label>    
                                                                                        <asp:RequiredFieldValidator ID="RequiredFieldValidator6" runat="server"  ErrorMessage="Fecha  Requerido" Text="*" 
                                                                                             ControlToValidate="Fecha" ForeColor="#ff0000" ValidationGroup="Grabar" SetFocusOnError="true"></asp:RequiredFieldValidator>
                                                                                                                                                                              
                                                                                           <asp:TextBox  CssClass="form-control fecha"  ID="Fecha" runat="server"  TextMode="Date"  Height="34px" ></asp:TextBox>
                                                                                    </div>
                                                                                    <div class="form-group col-md-2">
                                                                                        <label >Bodega:</label>
                                                                                        <asp:DropDownList ID="CmbBodega"  CssClass="form-control" runat="server"></asp:DropDownList>
                                                                                    </div>
                                                                                    
                                                                                    <div class="form-group col-md-12">
                                                                                        <label>Descripcion</label>
                                                                                           <asp:TextBox  CssClass="form-control" ID="TxtId" runat="server" Visible="false" ReadOnly="true" ></asp:TextBox>
                                                                                            <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ErrorMessage="*"
                                                                                                                ControlToValidate="Descripcion" ForeColor="#ff0000" ValidationGroup="Grabar" SetFocusOnError="true"></asp:RequiredFieldValidator>
                                                                                        <asp:TextBox ID="Descripcion"  CssClass="form-control" TextMode="MultiLine" runat="server"></asp:TextBox>
                                                                                    </div>
                                        
                                                                                </div>
                                                                                <div class="row">
                                                                                    <div class="col-md-12">
                                                                                        <asp:Button ID="BtnGuardar" runat="server" Text="Guardar"  OnClick="BtnGuardar_Click" CssClass="btn btn-purple"/>
                                                                                        <asp:Button ID="BtnLimpiar" runat="server" Text="Limpiar"  OnClick="BtnLimpiar_Click" CssClass="btn btn-purple"/>
                                                                                        <asp:Button ID="BtnCancelar" runat="server" Text="Cancelar"  OnClick="Cancelar_Click" CssClass="btn btn-purple"/>
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
    <div runat="server" id="Upload">
            <div class="row">
                <div class="col-md-12">
                    <div class="table-responsive">
                        <div class="panel formgrid" >
                                <div class="panel-body">
                                    <div class="row">
                                        <div class="col-md-12"> 
                                                <div class="row">                                        
                                                    <div id="contenedor" runat="server" class="Multifile-vk-panel">  
                                                        <div>  
                                                            
                                                            <asp:FileUpload ID="FileUploadVKSample" runat="server" CssClass="multi" accept="gif|jpg|png|bmp" maxlength="7" />  
                                                        </div>  
                                                        <div id="Multifile" runat="server" class="Multifile-UploadAll-div-Button">  
                                                                                   
                                                            <%-- <asp:Button ID="btnVolver" runat="server" Text="Cerrar" CssClass="btn" OnClick="btnVolver_Click" />  --%>
                                                        </div>  
                                                    </div>
                                                        <asp:Button ID="btnUpload" runat="server" Text="Subir Imagenes" CssClass="btn btn-purple" OnClick="btnUpload_Click" />  
                                                </div>
                      
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
		    </div>
    </div>
       
    <script src="js/jquery-3.0.0.min.js"></script>
<%--    <script src="js/jquery-2.1.1.min.js"></script>--%>
    <script src="js/toastr.min.js"></script>
    <link href="css/toastr.css" rel="stylesheet" />
    <script type="text/javascript">

        function bPostaBack() {
            displayToastr();
            var stateObj = { foo: "bar" };
            history.pushState(stateObj, "page 2", "CrearBrief.aspx");

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

       <script type="text/javascript" lang="javascript">
           Sys.WebForms.PageRequestManager.getInstance().add_endRequest(EndRequestHandler);
           function EndRequestHandler(sender, args) {
               if (args.get_error() != undefined) {
                   args.set_errorHandled(true);
               }
           }
    </script>
</asp:Content>
