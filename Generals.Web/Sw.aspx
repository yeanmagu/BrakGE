<%@ Page Title="Sw" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Sw.aspx.cs" Inherits="BrakGeWeb.Sw" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
<script src="Scripts/EventForms.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
     
     <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <asp:Panel ID="pnlGrid" runat="server">
                <div class="row">
                    <div class="row" >
                        <div class="col-md-12">
                          <div class="table-responsive">
                              <div class="panel formgrid" >                          
                                  <div class="panel-body">                  
                                        <div class="row">
                                            <div class="col-md-12">
                                                    <div class="dataTables_filter" id="demo-dt-basic_filter"><label>Buscar:<asp:TextBox  CssClass="form-control input-sm" ID="TxtBusqueda" runat="server" OnTextChanged="TxtBusqueda_TextChanged" AutoPostBack="True"  ></asp:TextBox>  </div>                      
                                                    <asp:GridView ID="GridSw" runat="server" CssClass="table table-striped" AutoGenerateColumns="False" Width="100%" PageSize="5" AllowPaging="True" AllowSorting="True" OnPageIndexChanging="GridSw_PageIndexChanging" GridLines="None" >
                                                        <pagersettings firstpagetext="Primero &nbsp;" lastpagetext="Última &nbsp;" nextpagetext="Siguiente &nbsp;"  previouspagetext="Anterior &nbsp;" Mode="NextPreviousFirstLast" />
                                                            <AlternatingRowStyle BackColor="#F4F4F4" />
                                                            <Columns>                                       
                                                                <asp:BoundField DataField="Id" HeaderText="Código" SortExpression="Id">
                                                                <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                                </asp:BoundField>
                                                                <asp:BoundField DataField="Descripcion" HeaderText="Descripcion" 
                                                                    SortExpression="Descripcion" />
                                                                <asp:TemplateField HeaderText="activo" SortExpression="activo" ItemStyle-CssClass="alignCenter">
                                                                    <ItemTemplate>
                                                                        <asp:CheckBox ID="chkActivo" Enabled="false" runat="server" Checked='<%# Eval("Estado") %>' />
                                                                    </ItemTemplate>
                                                                </asp:TemplateField>
                                                               <asp:TemplateField HeaderStyle-HorizontalAlign="Center" HeaderText="Actions">
                                                                    <ItemTemplate>         
                                                                        <asp:ImageButton ID="Editar"  ToolTip=" Editar"          ImageUrl="~/images/Edit.png" CssClass="celdasMedidor"  ImageAlign="Middle"
                                                                          runat="server"  CommandArgument='<%# Eval("Id") %>' CommandName="IdSolicitud"  OnCommand="BtnSelect_Command" />
                                                                       <asp:ImageButton ID="BtnAnular" runat="server"   ImageUrl="~/images/delete.png" CssClass="celdasMedidor"  ImageAlign="Middle" CausesValidation="true" CommandArgument='<%# Eval("Id") %>' 
                                                                                    CommandName="TCCode"  ToolTip="Anular"
                                                                                         OnCommand="btneliminarGridView_Command" />  
                                                                                                              
                                                                    </ItemTemplate>
                                                                   
                                                                </asp:TemplateField> 
                                                            </Columns>
                                                </asp:GridView>
                                            </div>
                                        </div>                                            
                                       <div class="row">
                                            <div class="col-md-12">
                                                   <asp:Button ID="Nuevo" runat="server" Text="Nuevo" OnClick="Nuevo_Click"  CssClass="btn btn-purple"/>
                                                <a href="Default.aspx" id="Button1" class="btn btn-purple" >Cerrar</a>
                                            </div>
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
                                         <div class="panel-heading">
				                            <h3 class="panel-title">Gestión  Tipo de Proceso</h3>         
				                         </div>
                                         <div class="panel-body">
                                            <div class="row">
                                                <div class="form-group col-md-3">
                                                    <label>Código:</label>
                                                    <asp:TextBox  CssClass="form-control" ID="TxtId" runat="server" ReadOnly="true" ></asp:TextBox>
                                                   
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label>Descripción:</label>
                                                    <asp:TextBox  CssClass="form-control" ID="TxtNombre" runat="server" MaxLength="150" ></asp:TextBox>
                                                    <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ErrorMessage="*"
                                                                        ControlToValidate="TxtNombre" ForeColor="#ff0000" ValidationGroup="Grabar" SetFocusOnError="true"></asp:RequiredFieldValidator>
                                                </div>
                                                <div class="form-group col-md-3">
                                                    <label for="ChkEstado">Activo:</label>
                                                    <asp:CheckBox ID="ChkEstado" runat="server"  />
                                                </div>
                                                
                                           </div>
                                             <div class="row">
                                                 <div class="col-md-12">
                                                     <asp:Button ID="Guardar" runat="server" Text="Guardar" OnClick="BtnGuardar_Click" />
                                                     <asp:Button ID="Limpiar" runat="server" Text="Limpiar" OnClick="Limpiar_Click" />
                                                     <asp:Button ID="Cancelar" runat="server" Text="Cancelar" OnClick="Cancelar_Click" />
                                                 </div>
                                             </div>
                                        </div>
                                    </div>
                                 </div>
               
            </div>
            </asp:Panel>
           
            
            <div id="pnl">
                <asp:Panel ID="PnlMsg" runat="server"  Width="100%"></asp:Panel>
            </div>
        </ContentTemplate>
    </asp:UpdatePanel>
</asp:Content>
