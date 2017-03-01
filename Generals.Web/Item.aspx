<%@ Page Title="Administración de Productos y Servicios" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Item.aspx.cs" Inherits="BrakGeWeb.Item" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
<script src="Scripts/EventForms.js"></script>
    <script src="js/jquery-3.0.0.min.js"></script>
<%--    <script src="js/jquery-2.1.1.min.js"></script>--%>
    <script src="js/toastr.min.js"></script>
    <script src="js/jquery-1.11.2.min.js"></script>
    <script src="js/jquery-ui.js"></script>
    <link href="css/jquery-ui.css" rel="stylesheet" />
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

            function showimagepreview(input) {
                alert("Entro");
                if (input.files && input.files[0]) {
                    var reader = new FileReader();
                    reader.onload = function (e) {

                        document.getElementsByTagName("img")[0].setAttribute("src", e.target.result);
                    }
                    reader.readAsDataURL(input.files[0]);
                }
            }
            $(document).ready(function ()
            {
                $('#btnUpload').click(function ()
                {
                    
                    var files = $('#<%=FileUpload1.ClientID%>')[0].files;
                    alert(files.length);
                    if (files.length > 0)
                    {
                        var formData = new FormData();
                        for (var i = 0; i < files.length; i++)
                        {
                            formData.append(files[i].name, files[i]);
                        }
                        var progressbarLabel = $('#progressbar-label');
                        var progressbar = $('#progressbar');
                        $.ajax({
                            url: 'SubirArchivos.ashx',
                            method: 'post',
                            data: formData,
                            contentType: false,
                            processData: false,
                            success: function()
                            {
                                progressbarLabel.text('Complete');
                                progressbar.fadeOut(2000);


                            },
                            error: function (err) {
                                alert(err.statusText);
                            }
                        });
                        progressbarLabel.text('Cargando');
                        progressbar.progressbar({
                              value:false
                        }).fadeIn(500);
                    }
                });
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
					        <h3 class="panel-title">PRODUCTOS Y SERVICIOS</h3>  
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

                                                                                        <asp:GridView ID="GridItem" runat="server" CssClass="table table-striped table-bordered dataTable no-footer dtr-inline" cellspacing="0"  role="grid"  style="width: 100%;" PageSize="10" AllowPaging="True" AllowSorting="True" OnPageIndexChanging="GridItem_PageIndexChanging" GridLines="None" AutoGenerateColumns="false"  >
                                                                                            <pagersettings firstpagetext="Primero &nbsp;" lastpagetext="Última &nbsp;" nextpagetext="Siguiente &nbsp;"  previouspagetext="Anterior &nbsp;" Mode="NextPreviousFirstLast" />
                                                                                                <AlternatingRowStyle BackColor="#F4F4F4" />
                                                                                                <Columns>  
                                                                                                    <asp:BoundField DataField="Id" HeaderText="Id" SortExpression="Id" ControlStyle-CssClass="visible" />                                     
                                                                                                    <asp:BoundField DataField="Codigo" HeaderText="Codigo" SortExpression="Codigo" />                                                                   
                                                                                                    <asp:BoundField DataField="Descripcion" HeaderText="Descripcion" SortExpression="Descripcion" />
                                                                                                    <asp:BoundField DataField="DescSubgrupo" HeaderText="SubGrupo" SortExpression="DescSubgrupo" />
                                                                                                    <asp:TemplateField HeaderText="Precio Compra" Visible ="true" SortExpression="Precio">
                                                                                                        <ItemTemplate>
                                                                                                            <asp:Label ID="lbl_PrecioCompra" runat="server" Text='<%# (String.Format("{0:C}", Eval("PrecioCompra"))) %>' ></asp:Label>
                                                                                                          </ItemTemplate>
                                                                                                       
                                                                                                    </asp:TemplateField >
                                                                                                   <asp:TemplateField HeaderText="Precio Venta" Visible ="true" SortExpression="Precio ">
                                                                                                        <ItemTemplate>
                                                                                                            <asp:Label ID="lbl_Precio" runat="server" Text='<%# (String.Format("{0:C}", Eval("Precio"))) %>' ></asp:Label>
                                                                                                          </ItemTemplate>
                                                                                                       
                                                                                                    </asp:TemplateField >
                                                                                                    <asp:TemplateField HeaderStyle-HorizontalAlign="Center" HeaderText="Actions">

                                                                                                        <ItemTemplate> 
                                                                                                            <asp:ImageButton ID="Editar" ImageUrl="~/images/Edit.png" ToolTip=" Editar"
                                                                                                              runat="server"  CommandArgument='<%# Eval("Id") %>' CommandName="IdSolicitud" CssClass="celdasMedidor" OnCommand="BtnSelect_Command" />
                                                                                                            <asp:ImageButton ID="btneliminarGridView" runat="server" ImageUrl="~/images/delete.png" CssClass="celdasMedidor" CausesValidation="true" CommandArgument='<%# Eval("Id") %>' 
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
				                                                        <h3 class="panel-title">Item</h3>         
				                                                    </div>
                                                                    <div class="panel-body">
                                                                        <div class="row"> 
                                                                            <div class="form-group col-md-2">
                                                                                <label>Codigo:</label>
                                                                                <asp:TextBox  CssClass="form-control" ID="Codigo" runat="server" MaxLength="150" ></asp:TextBox>
                                                                                <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ErrorMessage="*"
                                                                                                    ControlToValidate="Codigo" ForeColor="#ff0000" ValidationGroup="Grabar" SetFocusOnError="true"></asp:RequiredFieldValidator>
                                                                                  <asp:TextBox  CssClass="form-control" ID="TxtId" runat="server" ReadOnly="true" Visible="false" ></asp:TextBox>
                                                                            </div>
                                                                            <div class="form-group col-md-2">
                                                                                <label>Descripción:</label>
                                                                                <asp:TextBox  CssClass="form-control" ID="Descripcion" runat="server" MaxLength="150" ></asp:TextBox>
                                                                            </div>
                                                                            <div class="form-group col-md-2">
                                                                                <label>Precio Compra:</label>
                                                                                 <asp:TextBox  CssClass="form-control" ID="Precio" runat="server"  ></asp:TextBox>
                                                                            </div>
                                                                            <div class="form-group col-md-2">
                                                                                <label>Precio Venta:</label>
                                                                                 <asp:TextBox  CssClass="form-control" ID="PrecioVenta" runat="server"  ></asp:TextBox>
                                                                            </div>
                                                                            <div class="form-group col-md-2">
                                                                                <label>Grupo:</label>
                                                                               <asp:DropDownList ID="Grupo" runat="server" CssClass="form-control" OnSelectedIndexChanged="Grupo_SelectedIndexChanged" AutoPostBack="true"></asp:DropDownList>
                                                                            </div>
                                                                            <div class="form-group col-md-2">
                                                                                <label>Subgrupo:</label>
                                                                               <asp:DropDownList ID="SubGrupo" runat="server" CssClass="form-control"></asp:DropDownList>
                                                                            </div> 
                                           
                                                                        </div>
                                                                        <div class="row">  
                                                                             <div class="form-group col-md-2">
                                                                                <label>Iva:</label>
                                                                               <asp:DropDownList ID="Iva" runat="server" CssClass="form-control"></asp:DropDownList>
                                                                            </div>                                       
                                                                            <div class="form-group col-md-2">
                                                                                <label>Maximo Descuento:</label>
                                                                                <asp:TextBox  CssClass="form-control" ID="MaximoDescuento"  runat="server"  ></asp:TextBox>
                                                                            </div>
                                                                            <div class="form-group col-md-2">
                                                                                     <label>Cantidad Maxima:</label>
                                                                                     <asp:TextBox  CssClass="form-control" ID="CantidadMaxima"  runat="server" ></asp:TextBox>
                                              
                                                                            </div>
                                                                            <div class="form-group col-md-2">
                                                                                      <label>Cantidad Minima:</label>
                                                                                      <asp:TextBox  CssClass="form-control" ID="CantidadMinima"  runat="server" ></asp:TextBox>
                                             
                                                                            </div>
                                                                            <div class="form-group col-md-2">
                                                                                     <label>Color:</label>
                                                                                     <asp:DropDownList ID="Color" runat="server" CssClass="form-control"></asp:DropDownList>
                                            
                                                                            </div>
                                                                            <div class="form-group col-md-2">
                                                                                     <label>Tamaño:</label>
                                                                                     <asp:DropDownList ID="Talla" runat="server" CssClass="form-control"></asp:DropDownList>
                                             
                                                                            </div>
                                        
                                                                        </div>
                                                                        <div class="row">
                                                                             <div class="form-group col-md-2">
                                                                                      <label>Modelo:</label>
                                                                                      <asp:TextBox  CssClass="form-control" ID="Modelo"  runat="server" ></asp:TextBox>
                                             
                                                                            </div>
                                                                            <div class="form-group col-md-2">
                                                                                      <label>Numero de Serie:</label>
                                                                                      <asp:TextBox  CssClass="form-control" ID="NumeroSerie"  runat="server" ></asp:TextBox>
                                             
                                                                            </div>
                                                                            <div class="form-group col-md-2">
                                                                                 <label>Fecha Vencimiento:</label>
                                                                                <asp:TextBox  CssClass="form-control  fecha" ID="FechaVencimiento"  runat="server" Height="34px" TextMode="Date" ></asp:TextBox>
                                                                            </div>
                                                                            <div class="form-group col-md-2">
                                                                                <br />
                                                                                 <label for="Stock">Maneja Stock  <asp:CheckBox ID="Stock" runat="server" /></label>
                                           
                                                                            </div>
                                                                            <div class="form-group col-md-2">
                                                                                 <label>Stock Actual:</label>
                                                                                  <asp:TextBox  CssClass="form-control" ID="StockActual"  runat="server"  ></asp:TextBox>
                                                                            </div>
                                                                            <div class="form-group col-md-2">
                                                                                 <label>Días reposición:</label>
                                                                                  <asp:TextBox  CssClass="form-control" ID="DiasReposicion"  runat="server" ></asp:TextBox>
                                                                            </div>
                                       
                                                                        </div>
                                                                        <div class="row">
                                                                            <div class="form-group col-md-2">
                                                                                 <label>Calificacion ABC:</label>
                                                                                <asp:TextBox  CssClass="form-control" ID="CalificacionABC" MaxLength="1" runat="server" ></asp:TextBox>
                                                                            </div>
                                                                             <div class="form-group col-md-2">
                                                                                 <label>Unidad:</label>
                                                                                <asp:TextBox  CssClass="form-control" ID="Unidad"  runat="server" ></asp:TextBox>
                                                                            </div>
                                                                            <div class="form-group col-md-2">
                                                                                 <label>Marca:</label>
                                                                                   <asp:DropDownList ID="Marca" runat="server" CssClass="form-control"></asp:DropDownList>
                                                                            </div>
                                                                             <div class="form-group col-md-2">
                                                                                 <label>Proveedor:</label>
                                                                                   <asp:DropDownList ID="Proveedor" runat="server" CssClass="form-control"></asp:DropDownList>
                                                                            </div>
                                                                            <div class="form-group col-md-2">
                                                                                 <label>Comision Por Venta:</label>
                                                                                <asp:TextBox  CssClass="form-control fecha" ID="ComisionPorVenta"  TextMode="Number" runat="server" ></asp:TextBox>
                                                                            </div>
                                                                        </div>
                                                                        <div class="row">
                                                                          <div class="col-md-12">
                                                                              <label>Notas</label>
                                                                              <asp:TextBox  CssClass="form-control" ID="Notas"  runat="server"  TextMode="MultiLine"></asp:TextBox>
                                                                          </div>
                                                                        </div>                              
                                                                        <div class="row" style="display:none">
                                                                          

                                                                         
                                                                                   Select Files:          
                                                                                <asp:FileUpload ID="FileUpload1" onchange="showimagepreview(this)" AllowMultiple="true" runat="server" />
                                                                                <br /> <br />
                                                                                <input type="button" id="btnUpload" value="Subir Imagenes" />
                                                                                   <br /> <br />
                                                                                <div style="width:300px" >
                                                                                    <div id="progressbar" style="position:relative; display:none">
                                                                                          <span id="progressbar-label" style="position:absolute; left:35%; top:20%"> Cargando....</span>
                                                                                    </div>
                                                                                </div>
                                                                            <div class="row">
                                                                                <div class="col-md-6">   
                                                                                         <img id="img" alt="" class="thumbnail" /> 
                                                                                </div>   
                                                                                  
                                                                            </div>

                                                                            </div>
                                                                        <div class="row">
                                                                                <div class="col-md-12">
                                                                                  <%--  <button runat="server" id="Guardar"  onserverclick="BtnGuardar_Click"  class="btn btn-purple" ><span class="icon"><i class="fa fa-plus"></i></span>&nbsp; Guardar
                                                                                    </button>
                                                                                    <button runat="server" id="Limpiar"  onserverclick="Limpiar_Click"  class="btn btn-purple" ><span class="icon"><i class="fa fa-paint-brush"></i></span>&nbsp; Limpiar
                                                                                    </button>
                                                                                    <button runat="server" id="Cancelar"  onserverclick="Cancelar_Click"  class="btn btn-purple"><span class="icon"><i class="fa fa-rotate-right"></i></span>&nbsp;Cancelar
                                                                                    </button>--%>
                                                                                    <asp:Button ID="BtnGuardar" runat="server" Text="Guardar"  OnClick="BtnGuardar_Click1" CssClass="btn btn-purple"/>
                                                                                        <asp:Button ID="BtnLimpiar" runat="server" Text="Limpiar"  OnClick="BtnLimpiar_Click1" CssClass="btn btn-purple"/>
                                                                                        <asp:Button ID="BtnCancelar" runat="server" Text="Cancelar"  OnClick="BtnCancelar_Click" CssClass="btn btn-purple"/>
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
            history.pushState(stateObj, "page 2", "Item.aspx");

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
        //$(document).ready(function () {
        //    $('#btnUpload').click(function () {

        //        var files = $('#FileUpload1')[0].files;
        //        alert(files.length);
        //        if (files.length > 0) {
        //            var formData = new FormData();
        //            for (var i = 0; i < files.length; i++) {
        //                formData.ap(files[i].name, files[i]);
        //            }
        //            var progressbarLabel = $('#progressbar-label');
        //            var progressbar = $('#progressbar');
        //            $.ajax({
        //                url: 'SubirArchivos.ashx',
        //                method: 'post',
        //                data: formData,
        //                contentType: false,
        //                processData: false,
        //                success: function () {
        //                    progressbarLabel.text('Complete');
        //                    progressbar.fadeOut(2000);


        //                },
        //                error: function (err) {
        //                    alert(err.statusText);
        //                }
        //            });
        //            progressbarLabel.text('Cargando');
        //            progressbar.progressbar({
        //                value: false
        //            }).fadeIn(500);
        //        }
        //    });
        //});

    </script>
</asp:Content>
