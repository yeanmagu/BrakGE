<%@ Page Title="" Language="C#" MasterPageFile="~/FrontEnd.Master" AutoEventWireup="true" CodeBehind="articulos.aspx.cs" Inherits="BrakGeWeb.articulos" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
     <!-- ######## Start body page content ########-->
            <div class="container" style="margin-top:140px !important;" >
                <div class="row">
                    <div class="col-sm-12">
                    <div class="blog-post-area">
                        <h2 class="title text-center" style="color:#333 !important;">Articulos de la tienda</h2>
                        <asp:Panel ID="PanelImagenes" runat="server"></asp:Panel>
                        
                         <%--  <div class="features_items"><!--features_items-->
                    <div class="col-sm-4">
                            <div class="product-image-wrapper">
                                <div class="single-products">
                                    <div class="productinfo text-center">
                                        <img src="custom/i/p/23.jpg" alt="" width="225px" height="350px" />
                                        <h2>50.000</h2>
                                        <p>articulo</p>
                                        <p>20 Unidades <br>
                                            <a href="datalleproducto.aspx" class="btn btn-success">Ver Detalles</a>
                                        </p>
                                        <!--<a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>-->
                                    </div>
                                    <div class="product-overlay">
                                        <div class="overlay-content">

                                            <a href="custom/i/p/23.jpg"><i class="fa fa-search fa-5x" aria-hidden="true"></i>
                        </a>
                                            <p>Entrega Inmediata <br>
                                            Whatsapp: 3017605480
                                            </p>
                                            <h2>$ {{ articulo.precio }}</h2>
                                            <p>{{ articulo.nombre }}</p>
                                            <p>{{ articulo.cantidad}} Unidades</p>
                                            <p>{{ articulo.oferta }}% de descuento</p>
                                            <!-- <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>-->
                                        </div>
                                    </div>
                                </div>
                                <!--<div class="choose">
                                    <ul class="nav nav-pills nav-justified">
                                        <li><a href="#"><i class="fa fa-plus-square"></i>Add to wishlist</a></li>
                                        <li><a href="#"><i class="fa fa-plus-square"></i>Add to compare</a></li>
                                    </ul>
                                </div>-->
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="product-image-wrapper">
                                <div class="single-products">
                                    <div class="productinfo text-center">
                                        <img src="custom/i/p/bolso1.jpg" alt="" width="225px" height="350px" />
                                        <h2>50.000</h2>
                                        <p>articulo</p>
                                        <p>20 Unidades <br>
                                            <a href="datalleproducto.aspx" class="btn btn-success">Ver Detalles</a>
                                        </p>
                                        <!--<a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>-->
                                    </div>
                                    <div class="product-overlay">
                                        <div class="overlay-content">

                                            <a href="custom/i/p/bolso1.jpg"><i class="fa fa-search fa-5x" aria-hidden="true"></i>
                        </a>
                                            <p>Entrega Inmediata <br>
                                            Whatsapp: 3017605480
                                            </p>
                                            <h2>$ {{ articulo.precio }}</h2>
                                            <p>{{ articulo.nombre }}</p>
                                            <p>{{ articulo.cantidad}} Unidades</p>
                                            <p>{{ articulo.oferta }}% de descuento</p>
                                            <!-- <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>-->
                                        </div>
                                    </div>
                                </div>
                                <!--<div class="choose">
                                    <ul class="nav nav-pills nav-justified">
                                        <li><a href="#"><i class="fa fa-plus-square"></i>Add to wishlist</a></li>
                                        <li><a href="#"><i class="fa fa-plus-square"></i>Add to compare</a></li>
                                    </ul>
                                </div>-->
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="product-image-wrapper">
                                <div class="single-products">
                                    <div class="productinfo text-center">
                                        <img src="custom/i/p/zap2.jpg" alt="" width="225px" height="350px" />
                                        <h2>50.000</h2>
                                        <p>articulo</p>
                                        <p>20 Unidades <br>
                                            <a href="datalleproducto.aspx" class="btn btn-success">Ver Detalles</a>
                                        </p>
                                        <!--<a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>-->
                                    </div>
                                    <div class="product-overlay">
                                        <div class="overlay-content">

                                            <a href="custom/i/p/zap2.jpg"><i class="fa fa-search fa-5x" aria-hidden="true"></i>
                        </a>
                                            <p>Entrega Inmediata <br>
                                            Whatsapp: 3017605480
                                            </p>
                                            <h2>$ {{ articulo.precio }}</h2>
                                            <p>{{ articulo.nombre }}</p>
                                            <p>{{ articulo.cantidad}} Unidades</p>
                                            <p>{{ articulo.oferta }}% de descuento</p>
                                            <!-- <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>-->
                                        </div>
                                    </div>
                                </div>
                                <!--<div class="choose">
                                    <ul class="nav nav-pills nav-justified">
                                        <li><a href="#"><i class="fa fa-plus-square"></i>Add to wishlist</a></li>
                                        <li><a href="#"><i class="fa fa-plus-square"></i>Add to compare</a></li>
                                    </ul>
                                </div>-->
                            </div>
                        </div>
                        

                        <div class="col-sm-4">
                            <div class="product-image-wrapper">
                                <div class="single-products">
                                    <div class="productinfo text-center">
                                        <img src="custom/i/p/23.jpg" alt="" width="225px" height="350px" />
                                        <h2>50.000</h2>
                                        <p>articulo</p>
                                        <p>20 Unidades <br>
                                            <a href="datalleproducto.aspx" class="btn btn-success">Ver Detalles</a>
                                        </p>
                                        <!--<a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>-->
                                    </div>
                                    <div class="product-overlay">
                                        <div class="overlay-content">

                                            <a href="custom/i/p/23.jpg"><i class="fa fa-search fa-5x" aria-hidden="true"></i>
                        </a>
                                            <p>Entrega Inmediata <br>
                                            Whatsapp: 3017605480
                                            </p>
                                            <h2>$ {{ articulo.precio }}</h2>
                                            <p>{{ articulo.nombre }}</p>
                                            <p>{{ articulo.cantidad}} Unidades</p>
                                            <p>{{ articulo.oferta }}% de descuento</p>
                                            <!-- <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>-->
                                        </div>
                                    </div>
                                </div>
                                <!--<div class="choose">
                                    <ul class="nav nav-pills nav-justified">
                                        <li><a href="#"><i class="fa fa-plus-square"></i>Add to wishlist</a></li>
                                        <li><a href="#"><i class="fa fa-plus-square"></i>Add to compare</a></li>
                                    </ul>
                                </div>-->
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="product-image-wrapper">
                                <div class="single-products">
                                    <div class="productinfo text-center">
                                        <img src="custom/i/p/bolso1.jpg" alt="" width="225px" height="350px" />
                                        <h2>50.000</h2>
                                        <p>articulo</p>
                                        <p>20 Unidades <br>
                                            <a href="datalleproducto.aspx" class="btn btn-success">Ver Detalles</a>
                                        </p>
                                        <!--<a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>-->
                                    </div>
                                    <div class="product-overlay">
                                        <div class="overlay-content">

                                            <a href="custom/i/p/bolso1.jpg"><i class="fa fa-search fa-5x" aria-hidden="true"></i>
                        </a>
                                            <p>Entrega Inmediata <br>
                                            Whatsapp: 3017605480
                                            </p>
                                            <h2>$ {{ articulo.precio }}</h2>
                                            <p>{{ articulo.nombre }}</p>
                                            <p>{{ articulo.cantidad}} Unidades</p>
                                            <p>{{ articulo.oferta }}% de descuento</p>
                                            <!-- <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>-->
                                        </div>
                                    </div>
                                </div>
                                <!--<div class="choose">
                                    <ul class="nav nav-pills nav-justified">
                                        <li><a href="#"><i class="fa fa-plus-square"></i>Add to wishlist</a></li>
                                        <li><a href="#"><i class="fa fa-plus-square"></i>Add to compare</a></li>
                                    </ul>
                                </div>-->
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="product-image-wrapper">
                                <div class="single-products">
                                    <div class="productinfo text-center">
                                        <img src="i/p/zap2.jpg" alt="" width="225px" height="350px" />
                                        <h2>50.000</h2>
                                        <p>articulo</p>
                                        <p>20 Unidades <br>
                                            <a href="datalleproducto.aspx" class="btn btn-success">Ver Detalles</a>
                                        </p>
                                        <!--<a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>-->
                                    </div>
                                    <div class="product-overlay">
                                        <div class="overlay-content">

                                            <a href="i/p/zap2.jpg"><i class="fa fa-search fa-5x" aria-hidden="true"></i>
                        </a>
                                            <p>Entrega Inmediata <br>
                                            Whatsapp: 3017605480
                                            </p>
                                            <h2>$ {{ articulo.precio }}</h2>
                                            <p>{{ articulo.nombre }}</p>
                                            <p>{{ articulo.cantidad}} Unidades</p>
                                            <p>{{ articulo.oferta }}% de descuento</p>
                                            <!-- <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>-->
                                        </div>
                                    </div>
                                </div>
                                <!--<div class="choose">
                                    <ul class="nav nav-pills nav-justified">
                                        <li><a href="#"><i class="fa fa-plus-square"></i>Add to wishlist</a></li>
                                        <li><a href="#"><i class="fa fa-plus-square"></i>Add to compare</a></li>
                                    </ul>
                                </div>-->
                            </div>
                        </div>
                                              
                   
                        
                    </div>--%><!--features_items-->
                    
                    

      
                        
                    </div><!--/blog-post-area-->

                    
                </div>  
                </div>
            </div>
        <%--</section>--%>

    <!-- ######## End body page content   ########-->
</asp:Content>
