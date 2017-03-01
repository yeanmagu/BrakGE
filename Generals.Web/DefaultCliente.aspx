<%@ Page Title="" Language="C#" MasterPageFile="~/FrontCliente.Master" AutoEventWireup="true" CodeBehind="DefaultCliente.aspx.cs" Inherits="BrakGeWeb.DefaultCliente" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
     
        <section id="slider"><!--slider-->
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
                            <asp:Panel ID="PanelImagenes" runat="server"></asp:Panel>
                        </div><!--/blog-post-area-->
                    </div>  
                </div>
            </div>
        </section>
    <!-- ######## End body page content   ########-->
</asp:Content>
