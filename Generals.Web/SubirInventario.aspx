<%--<%@ Page Title="" Language="C#" MasterPageFile="~/FrontEnd.Master" AutoEventWireup="true" CodeBehind="SubirInventario.aspx.cs" Inherits="BrakGeWeb.SubirInventario" %>--%>
<%@ Page Title="Subir Inventario" Language="C#" MasterPageFile="~/FrontEnd.Master" AutoEventWireup="true" CodeBehind="SubirInventario.aspx.cs" Inherits="BrakGeWeb.SubirInventario" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <style type="text/css">
        fieldset.scheduler-border {
            border: 1px groove #ddd !important;
            padding: 0 1.4em 1.4em 1.4em !important;
            margin: 0 0 1.5em 0 !important;
            -webkit-box-shadow:  0px 0px 0px 0px #000;
                    box-shadow:  0px 0px 0px 0px #000;
        }

        legend.scheduler-border {
            font-size: 1em !important;
            font-weight: bold !important;
            text-align: left !important;

        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="container">
             <div class="row">
                     <div class="col-md-12">
                        <div class="panel panel-primary" >   
                                <div class="panel-heading">
				                    <h3 class="panel-title">Subir Inventario    
				                    </h3>         
				                </div> 
                        </div>
                        <div class="panel-body">                  
                             <div class="row">
                                      <div class="col-md-12">
                                          <fieldset class="scheduler-border">
                                                <legend class="scheduler-border">Subir Inventario Inicial</legend>                                                                                 
                                                       <asp:FileUpload ID="FileUpload1" CssClass="fa-file"  runat="server" />  
                                              
                                               <button id="Subir" runat="server" onserverclick="Subir_ServerClick"><i class="fa fa-upload fa-5x" ></i></button> 
                                              <label id="Label8" runat="server" class="alert-info">Esperando Archivo</label>              
                                          </fieldset>
                                      </div>

                                 <div class="col-md-12">
                                          <fieldset class="scheduler-border">
                                                <legend class="scheduler-border">Datos</legend>                                                                                 
                                                                         
                                          </fieldset>
                                      </div>
                             </div>             
                        </div>
                     </div>
             </div>
    </div>

</asp:Content>
