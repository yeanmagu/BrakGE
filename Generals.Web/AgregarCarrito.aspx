<%@ Page Title="" Language="C#" MasterPageFile="~/FrontEnd.Master" AutoEventWireup="true" CodeBehind="AgregarCarrito.aspx.cs" Inherits="BrakGeWeb.AgregarCarrito" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="js/jquery-3.0.0.min.js"></script>
<%--    <script src="js/jquery-2.1.1.min.js"></script>--%>
    <script src="js/toastr.min.js"></script>
    <link href="css/toastr.css" rel="stylesheet" />
    <script type="text/javascript">
        function EjemploMetodo(idItem) {
            var param1 = "demo";
            PageMethods.Metodo1(onMetodo1Ok, onMetodo1Error);
        }

        function onMetodo1Ok(resultado) {
            // Acciones para realizar con resultado
            alert(resultado);
        }

        function onMetodo1Error(error) {
            alert(error.get_message());
        }

        function llamar(id)
        {  
            $.ajax({
                type: "POST",
                data: "{ Nombre: '" +id + "'}" ,
                url: "index.aspx/Metodo1",
                contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(msg) {
                displayToastr(msg, success);
            },
            error: function (msg) { displayToastr(msg, error); }
        });   
        }   
    </script>
    <script type="text/javascript">
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
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:ScriptManager ID="sm1" runat="server" EnablePageMethods="True">
    </asp:ScriptManager>

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
                            <asp:Panel ID="PanelImagenes" runat="server"></asp:Panel>
                        </div><!--/blog-post-area-->
                    </div>  
                </div>
            </div>
        </section>

    <!-- ######## End body page content   ########-->
</asp:Content>
 