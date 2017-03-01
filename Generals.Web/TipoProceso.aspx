<%@ Page Title="Tipo Proceso" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="TipoProceso.aspx.cs" Inherits="BrakGeWeb.TipoProceso" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
<script src="Scripts/EventForms.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
     <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
              <div class="row">
              <div class="col-md-12 ">
                    <div class="panel panel-purple ">
				    <!--Panel heading-->
				        <div class="panel-heading">
                            <h3 class="panel-title">Tipo de Proceso
                            </h3>  
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
                                                                                        <div class="dataTables_filter" id="demo-dt-basic_filter"><label>Buscar:<asp:TextBox  CssClass="form-control input-sm" ID="TxtBusqueda" runat="server" OnTextChanged="TxtBusqueda_TextChanged" AutoPostBack="True"  ></asp:TextBox>  </div>                      
                                                                                        <asp:GridView ID="GridTipoProceso" runat="server" CssClass="table table-striped" AutoGenerateColumns="False" Width="100%" PageSize="5" AllowPaging="True" AllowSorting="True" OnPageIndexChanging="GridTipoProceso_PageIndexChanging" GridLines="None" >
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
                                                                                                   <asp:TemplateField HeaderStyle-HorizontalAlign="Center">
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
                                                </asp:Panel>

                                                <asp:Panel ID="pnlDatos" runat="server">
                                                    <div class="row">
                                                                    <div class="col-md-12 caja" >
                                                                        <div class="panel formdata" >
                                                                            
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
                                                                                         <asp:Button ID="Guardar" runat="server" Text="Guardar" OnClick="BtnGuardar_Click" CssClass="btn btn-purple" />
                                                                                         <asp:Button ID="Limpiar" runat="server" Text="Limpiar" OnClick="Limpiar_Click" CssClass="btn btn-purple" />
                                                                                         <asp:Button ID="Cancelar" runat="server" Text="Cancelar" OnClick="Cancelar_Click" CssClass="btn btn-purple" />
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
           
           
            
            <div id="pnl">
                <asp:Panel ID="PnlMsg" runat="server"  Width="100%"></asp:Panel>
            </div>
        </ContentTemplate>
    </asp:UpdatePanel>
</asp:Content>
