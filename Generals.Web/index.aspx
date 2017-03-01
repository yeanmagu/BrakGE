<%@ Page Title="" Language="C#" MasterPageFile="~/FrontEnd.Master" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="BrakGeWeb.index" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="js/jquery-3.0.0.min.js"></script>
<%--    <script src="js/jquery-2.1.1.min.js"></script>--%>
    <script src="js/toastr.min.js"></script>
    <link href="css/toastr.css" rel="stylesheet" />
    <script type="text/javascript">
        //function EjemploMetodo(idItem) {
        //    var param1 = "demo";
        //    PageMethods.Metodo1(onMetodo1Ok, onMetodo1Error);
        //}

        //function onMetodo1Ok(resultado) {
        //    // Acciones para realizar con resultado
        //    alert(resultado);
        //}

        //function onMetodo1Error(error) {
        //    alert(error.get_message());
        //}

        function llamar(id)
        {  
            $.ajax({
                    type: "POST",
                    data: "{ idItem: '" + id + "'}",
                    url: "AgregarCarrito.aspx/Metodo1",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (msg) {
                        alert("Producto Agregado Al Carrito");
                    displayToastr("Producto  Agregado Al Carrito", success);
                },
                error: function (msg) { "No se Pudo Agregar el Producto al Carrito" }
            });   
        }
        function displayToastr(msj, type) {
           
            toastr.options =
            {
                "closeButton": false,
                "debug": true,
                "newestOnTop": false,
                "progressBar": true,
                "positionClass": "toast-top-full-width",
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

            if (type == "info") {
                // Display a info toast, with no title
                toastr.info(msj)
            } else if (type == "warning") {
                // Display a warning toast, with no title
                toastr.warning(msj)
            } else if (type == "success") {
                // Display a success toast, with a title
                toastr.success(msj)
            } else if (type == "error") {
                // Display an error toast, with a title
                toastr.error(msj)
            }
        }
    </script>
    <script type="text/javascript">
      
    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:ScriptManager ID="sm1" runat="server" EnablePageMethods="True">
    </asp:ScriptManager>
       <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
     <!-- ######## Start body page content ########-->               
        <section id="slider" ><!--slider-->
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div id="slider-carousel" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#slider-carousel" data-slide-to="0" class="active"></li>
                            <li data-target="#slider-carousel" data-slide-to="1"></li>
                            <li data-target="#slider-carousel" data-slide-to="2"></li>
                        </ol>
                        
                        <div class="carousel-inner">
                            <div class="item active">

                                <div class="col-sm-12">
                                    <img src="custom/images/slide/slide1.jpg" class="girl img-responsive" alt="" />
                                </div>
                            </div>
                            <div class="item">

                                <div class="col-sm-12">
                                    <img src="custom/images/slide/slide2.jpg" class="girl img-responsive" alt="" />
                                </div>
                            </div>
                            <div class="item ">
                                <div class="col-sm-12">
                                    <img src="custom/images/slide/slide3.jpg" class="girl img-responsive" alt="" />
                                </div>
                            </div>

                            
                        </div>
                        
                        <a href="#slider-carousel" class="left control-carousel hidden-xs theleft" data-slide="prev">
                            <i class="fa fa-angle-left"></i>
                        </a>
                        <a href="#slider-carousel" class="right control-carousel hidden-xs theright"  data-slide="next">
                            <i class="fa fa-angle-right"></i>
                        </a>
                    </div>                          
                </div>
            </div>
        </div>
        </section><!--/slider-->
        <section >
            <div class="container" >
                <div class="row">
                    <div class="col-sm-12">
                        <div class="blog-post-area">
                            <h2 class="title text-center" style="color:#333 !important;">Articulos de la tienda</h2>
                               <div class="col-md-10 mrg pull-left">
                                      <div class="searchbox">
						                <div class="input-group custom-search-form">
							                <%--<input type="text" class="form-control" placeholder="Search..">--%>
                                            <asp:TextBox  CssClass="form-control input-sm" ID="TxtBusqueda" runat="server" OnTextChanged="TxtBusqueda_TextChanged" AutoPostBack="True" placeholder="Buscar.." ></asp:TextBox>
							                <span class="input-group-btn">
								                <button class="btn btn-primary mybtn" id="Buscar" runat="server" onserverclick="TxtBusqueda_TextChanged" type="button"><i class="fa fa-search"></i></button>
							                </span>
						                </div>
                                              
					                </div>
                                    
                                </div>
                              <div class="col-md-2 mrg pull-right">
                                         
                                          <asp:ImageButton ID="btnCoti" ImageUrl="images/car.fw.png"  ToolTip="Ver carrito " Height="36px" Width="36px" runat="server" OnClick="btnCoti_Click" />
                                </div>
                           
                        </div><!--/blog-post-area-->
                    </div>  
                    <div class="col-md-12">
                            <asp:Panel ID="PanelImagenes" runat="server"></asp:Panel>
                    </div>
                </div>
            </div>
        </section>

    <!-- ######## End body page content   ########-->
             <asp:TextBox ID="Msj1" runat="server" CssClass="visible"></asp:TextBox>
            <asp:TextBox ID="Type1" runat="server" CssClass="visible"></asp:TextBox>
            </ContentTemplate>
        </asp:UpdatePanel>
            <asp:Button ID="BtnProd" Style="display:none;" runat="server"/>
      <ajaxToolkit:ModalPopupExtender ID="ModalItems" runat="server" TargetControlID="BtnProd" 
        BackgroundCssClass="modalBackground " PopupControlID="PnlItem">

      </ajaxToolkit:ModalPopupExtender>
      <asp:Panel ID="PnlItem" runat="server" style="display:none; background:white; width:90%; height:auto">
               <asp:UpdatePanel ID="UpdatePanel3" runat="server">
                    <ContentTemplate>
                          <div class="modal-header">
                                <h3 >Agregar Al Carrito</h3>
                          </div>
                          <div class="modal-body">
                                <%--<div class="container-fluid well">--%>
                                    <%--<div class="panel">--%>
                                        <div class="row">
                                            
                                        </div> 
                                    <%--</div>--%>
                                       
                                <%--</div>--%>
                  
                          </div>
                          <div class="modal-footer">
                                                       <asp:Button  ID="AddCart" CommandArgument="AddCart" CommandName="AddCart" runat="server"   Text="Cerrar" />
                              
                               
                          </div>
                    </ContentTemplate>
               </asp:UpdatePanel>
     </asp:Panel>
        <script type="text/javascript">

            function bPostaBack() {
                displayToastr();
                var stateObj = { foo: "bar" };
                history.pushState(stateObj, "page 2", "Index.aspx");

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



            function displayToastr() {
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
            $('#<%=Msj1.ClientID%>').val("");
            $('#<%=Type1.ClientID%>').val("");
        }
    </script>
</asp:Content>

 