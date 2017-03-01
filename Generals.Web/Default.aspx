<%@ Page Title="" Language="C#" MasterPageFile="~/MastePage.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="BrakGeWeb.Default" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="js/jquery-3.0.0.min.js"></script>
<%--    <script src="js/jquery-2.1.1.min.js"></script>--%>
    <script src="js/toastr.min.js"></script>
    <link href="css/toastr.css" rel="stylesheet" />
    <script type="text/javascript">        
        function displayToastr(msj, type)
        {
           
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
          
            if (type=="info") {
                // Display a info toast, with no title
                toastr.info(msj)
            } else if (type == "warning")
            {
                // Display a warning toast, with no title
                toastr.warning(msj)
            } else if (type == "success") {
                // Display a success toast, with a title
                toastr.success(msj)
            } else if(type == "error"){
                // Display an error toast, with a title
                toastr.error(msj)
            }
        }
    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div id="page-content">
        <div class="row">
              <div class="col-md-12 ">
                    <div class="panel panel-purple ">
				    <!--Panel heading-->
				        <div class="panel-heading">                 					   
                                        <asp:Label ID="Tittle" runat="server" Text="Panel de Control" Font-Size="Large" BorderColor="#3366FF"></asp:Label>                                                                       
				        </div>                                 
				        <!--Panel body-->
				        <div class="panel-body">
					        <!--Tabs content-->
                              <div id="tabFactura" class="tab-pane active in">                                  
                                         <div class="col-md-12">
                                                <div class="row row-centered flot " >        
                                                    <div class="col-md-12 col-centered content-login"  >
                                                        <div class="row">
                                                            <asp:Panel ID="pnlmenu" runat="server" Visible="false"> </asp:Panel>    
                                                        </div>

                                                    </div>    
                                                 </div>
                                         </div>
                              </div>
                              
                        </div>
                     </div>                      
				</div>                
			</div>     		   
	</div>
    		
					<!--===================================================-->
					<!--End Tiles - Bright Version-->
					
					
					
				
</asp:Content>
