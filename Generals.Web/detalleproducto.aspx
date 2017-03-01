<%@ Page Title="" Language="C#" MasterPageFile="~/FrontEnd.Master" AutoEventWireup="true" CodeBehind="detalleproducto.aspx.cs" Inherits="BrakGeWeb.detalleproducto" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <section style="margin-top:120px; !important" class="cnt">
		<div class="container">
			<div class="row">
						<div class="col-sm-12 padding-right">
							<div class="product-details "><!--product-details-->
								<div class="col-sm-4">
									<div class="view-product product-information">
										<img src="custom/i/p/bolso1.jpg" alt="" runat="server" id="imgItem">
									</div>


								</div>
								<div class="col-sm-8">

									<div class="product-information"><!--/product-information-->
										<!--<img src="custom/images/product-details/new.jpg" class="newarrival" alt="">-->
										<h2 id="NombreItem" runat="server">  Bolso amarillo limón mediano</h2>
										
										<img src="custom/images/product-details/rating.png" alt="">
										<span>
											<span runat="server" id="Precio"> $50000.00</span>
											<label>Cantidad:</label>
											<input type="text"  runat="server" id="CantidadDisponible">
											<!--<button type="button" class="btn btn-fefault cart">
												<i class="fa fa-shopping-cart"></i>
												Add to cart
											</button>-->
										</span>
										<%--<p><b>Oferta:</b> 10% de Descuento</p>--%>
										<p><b>Categoria:</b></p> <p id="Categoria" runat="server"></p>
										<!--<a href=""><img src="custom/images/product-details/share.png" class="share img-responsive" alt=""></a>-->
									</div><!--/product-information-->
									<div class="recommended_items"><!--recommended_items-->
										<br>
										<h2 class="title text-center">Otros Articulos</h2>
                                             <asp:Panel ID="PanelImagenes" runat="server"></asp:Panel>
										<%--<div id="recommended-item-carousel" class="carousel slide" data-ride="carousel">
											<div class="carousel-inner">   
												<div class="item active"> 																											<div class="col-sm-4">
															<div class="product-image-wrapper">
																<div class="single-products">
																	<div class="productinfo text-center">
																		<img src="custom/i/p/bagk1.jpg" alt="">
																		<h2>65000.0056</h2>
																		<p>bolso rojo en cuero croco</p>
																		<a href="detalleproducto.aspx" type="button" class="btn btn-default add-to-cart"><i class="fa fa-newspaper-o"></i>Ver Detalles</a>
																	</div>
																</div>
															</div>
														</div>

																											<div class="col-sm-4">
															<div class="product-image-wrapper">
																<div class="single-products">
																	<div class="productinfo text-center">
																		<img src="custom/i/p/bolso1.jpg" alt="">
																		<h2>50000.0056</h2>
																		<p>Bolso amarillo limón mediano</p>
																		<a href="detalleproducto.aspx" type="button" class="btn btn-default add-to-cart"><i class="fa fa-newspaper-o"></i>Ver Detalles</a>
																	</div>
																</div>
															</div>
														</div>

																											<div class="col-sm-4">
															<div class="product-image-wrapper">
																<div class="single-products">
																	<div class="productinfo text-center">
																		<img src="custom/i/p/bill1.jpg" alt="">
																		<h2>25000.0056</h2>
																		<p>Billeteras cierre en cuero</p>
																		<a href="detalleproducto.aspx" type="button" class="btn btn-default add-to-cart"><i class="fa fa-newspaper-o"></i>Ver Detalles</a>
																	</div>
																</div>
															</div>
														</div>

																									</div>


											</div>

										</div>--%>
									</div><!--/recommended_items-->
								</div>
							</div><!--/product-details-->





						</div>
			</div>
		</div>
	</section>
</asp:Content>
