<%@ Page Title="Roles" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="WebRoles.aspx.cs" Inherits="BrakGeWeb.WebRoles" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

<script src="Scripts/EventForms.js"></script>

    <style>
       .novisible
       {
           display:none;
       }
   </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
<asp:UpdatePanel ID="UpdatePanel2" runat="server">
    <ContentTemplate>
        <div class="row">
              <div class="col-md-12 ">
                    <div class="panel panel-purple ">
				    <!--Panel heading-->
				        <div class="panel-heading">
                           <h3 class="panel-title">Roles</h3>  
                               
				        </div>
                       
				        <!--Panel body-->
				        <div class="panel-body">
					        <!--Tabs content-->
                              <div id="tabFactura" class="tab-pane active in">
                                  <hr />
                                  <div class="row">
                                         <div class="col-md-12">
                                               <!-- inicio de las busquedas-->

                                            <div class="row" >
                                            <div class="col-md-12">
                                                    <div class="panel formgrid" >
                          
                                                        <div class="panel-body">
                                                            <asp:UpdatePanel runat="server" ID="updateGrid" UpdateMode="Conditional">
                                                                <ContentTemplate>
                                
                                                    <asp:Panel ID="Búsqueda" runat="server" Width="100%" DefaultButton="Buscar" >
                                                        <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="searchbox">
						                                        <div class="input-group custom-search-form">
							                                        <%--<input type="text" class="form-control" placeholder="Search..">--%>
                                                                    <asp:TextBox  CssClass="form-control input-sm" ID="NombreFiltro" runat="server" OnTextChanged="Buscar_Click" AutoPostBack="True" placeholder="Buscar.." ></asp:TextBox>
							                                        <span class="input-group-btn">
								                                        <button class="text-muted" id="Button1" runat="server" onserverclick="Buscar_Click" type="button"><i class="fa fa-search"></i></button>
							                                        </span>
						                                        </div>
					                                        </div>
                                                            <div class="alignRight" id="MarcoExportar" runat="server">
                                                                
                                                                    <asp:GridView ID="ResultadoRoles" runat="server" EmptyDataText="No Existe Informacion para Mostrar"
                                                                        AutoGenerateColumns="False" Width="100%" OnRowCommand="ResultadoRoles_RowCommand"
                                                                        DataKeyNames="Id_Rol" AllowPaging="True" OnPageIndexChanging="ResultadoRoles_PageIndexChanging"
                                                                        OnRowDataBound="ResultadoRoles_RowDataBound" CellPadding="4" ForeColor="#333333"
                                                                        GridLines="None">
                             
                                                                        <Columns>
                                                                            <asp:BoundField HeaderText="Id" DataField="Id_Rol" SortExpression="Id_Rol" />
                                                                            <asp:BoundField HeaderText="Rol" DataField="desc_rol" SortExpression="desc_rol" />
                                                                            <asp:TemplateField HeaderText="Requiere token" SortExpression="RequiereToken" ItemStyle-CssClass="alignCenter">
                                                                                <ItemTemplate>
                                                                                    <asp:CheckBox ID="CheckToken" Enabled="false" runat="server" Checked='<%# Bind("RequiereToken") %>' />
                                                                                </ItemTemplate>
                                                                                <ItemStyle CssClass="alignCenter" />
                                                                            </asp:TemplateField>
                                                                            <asp:TemplateField HeaderText="Interno" SortExpression="Interno" ItemStyle-CssClass="alignCenter">
                                                                                <ItemTemplate>
                                                                                    <asp:CheckBox ID="CheckInterno" Enabled="false" runat="server" Checked='<%# Bind("Interno") %>' />
                                                                                </ItemTemplate>
                                                                                <ItemStyle CssClass="alignCenter" />
                                                                            </asp:TemplateField>
                                                                            <asp:ButtonField ButtonType="Link" HeaderText="Editar" Text="<img src='Autenticacion/Login/Editar.png' border=0>"
                                                                                CommandName="Editar">
                                                                                <ItemStyle HorizontalAlign="Center" />
                                                                            </asp:ButtonField>
                                                                        </Columns>
                                                                        <EditRowStyle BackColor="#2461BF" />
                                                                        <FooterStyle BackColor="Gray" ForeColor="White" Font-Bold="True" />
                                                                        <PagerSettings FirstPageText="First" LastPageText="Last" 
                                                                        Mode="NextPreviousFirstLast" NextPageText="Next" PreviousPageText="Prev" />
                                                                        <PagerStyle BackColor="Gray" ForeColor="White" HorizontalAlign="Center" BorderColor="Silver" BorderStyle="Solid" />
                                                                        <RowStyle BackColor="#EFEFEF" BorderColor="#CCCCCC" BorderStyle="Solid" />
                                                                        <SelectedRowStyle BackColor="#D1DDF1" Font-Bold="True" ForeColor="#333333" />
                                                                        <HeaderStyle BackColor="Gray" Font-Bold="True" ForeColor="White" />
                                                                        <SortedAscendingCellStyle BackColor="#F5F7FB" />
                                                                        <SortedAscendingHeaderStyle BackColor="#6D95E1" />
                                                                        <SortedDescendingCellStyle BackColor="#E9EBEF" />
                                                                        <SortedDescendingHeaderStyle BackColor="#4870BE" />
                                                                    </asp:GridView>
                                                               
                                                                <div class="pretty danger btn">
                                                                        <asp:Button ID="Exportar" runat="server" Text="Exportar" Visible="false"  OnClick="Exportar_Click" />
                                                                        <asp:Button ID="Nuevo" runat="server" Text="Nuevo" CssClass="btn btn-purple" OnClick="Nuevo_Click" />
                                                                        <asp:Button ID="Salir" runat="server" OnClick="Salir_Click" Text="Salir" CssClass="btn btn-purple" />
                                                                        <asp:Button ID="Buscar" runat="server" Text="Buscar" OnClick="Buscar_Click" CssClass="btn btn-purple" Visible="false" />
                                                                        <asp:Button ID="Limpiar" runat="server" Visible="false" Text="Limpiar" ValidationGroup="Actualizar" OnClick="Limpiar_Click" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </asp:Panel>
                                                    <br />

                                                                </ContentTemplate>
                                                            </asp:UpdatePanel>
                        
                                                        </div>
                                                      </div>
                                                    </div>
                                                </div>
                                            <!-- end row-->
                                            <!-- fin de las busquedas-->



                                            <div class="row">
        
                                            <asp:UpdatePanel runat="server" ID="UpdateNew" UpdateMode="Conditional">
                                                 <ContentTemplate>
                                                    <div class="row">
                                                        <div class="col-md-12" >
                                                        <div class="panel formdata" >
                                                             <div class="panel-heading">
				                                                <h3 class="panel-title">Datos del Rol</h3>         
				                                             </div>
                                                             <div class="panel-body">
                                                                <div class="row" >
                
                                                                     <div class="col-md-12 ">
                                                                            <%-- formulario de insersion de registros --%>                        
                                                                                 <!-- inico de insercio y edicion de datos-->
                                                            <asp:Panel runat="server" ID="DatosEdicion" DefaultButton="Guardar" Width="100%">  
                                                                <div class="row">
                                
                                                                    <div class="col-md-12 caja" >
                                                                        <div class="row" >
                                                                            <div class=" form-group col-md-3">
                                                                                <label>Rol</label>
                                                                                <asp:TextBox ID="NombreEdicion" runat="server"  MaxLength="50"  CssClass="form-control"></asp:TextBox>
                                                                                            <asp:RequiredFieldValidator ID="RequeridoNombre" runat="server" ControlToValidate="NombreEdicion"
                                                                                                ErrorMessage="El campo Rol es obligatorio" ToolTip="El campo Rol es obligatorio"
                                                                                                ValidationGroup="Guardar" Display="Dynamic">*</asp:RequiredFieldValidator>
                                                                            </div>
                                                                            <div class="form-group col-md-3">
                                                                                    <label>Rol Padre</label>
                                                                                    <asp:DropDownList ID="NivelCreadorEdicion" runat="server"  DataTextField="desc_rol"  DataValueField="Id_Rol" AutoPostBack="False" CssClass="form-control" >
                                                                                    </asp:DropDownList>
                                                                                    <asp:RequiredFieldValidator ID="RequeridoNivel" runat="server" ControlToValidate="NivelCreadorEdicion"  Display="Dynamic" InitialValue="0" ErrorMessage="El campo Rol padre es obligatorio"
                                                                                        ToolTip="El campo Rol padre es obligatorio" ValidationGroup="Guardar">*</asp:RequiredFieldValidator>
                                                                            </div>
                                                                            <div class="col-md-3">
                                                                                <label>Requiere token</label>
                                                                                <div class="input-group">                                        
                                                                                      <span class="input-group-addon">
                                                                                            <asp:CheckBox ID="RequiereTokenEdicion" runat="server"  />
                                                                                      </span>
                                                                                      <label class="form-control">Si</label> 
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-md-3">
                                                                                <label>Tipo</label><br />
                                                                                <asp:RadioButtonList ID="TipoRolEdicion" runat="server" AutoPostBack="true" RepeatDirection="Horizontal"  OnSelectedIndexChanged="TipoRolEdicion_SelectedIndexChanged" >
                                                                                    <asp:ListItem Value="0">Interno</asp:ListItem>
                                                                                    <asp:ListItem Value="1">Externo</asp:ListItem>
                                                                                </asp:RadioButtonList>
                                                                                <asp:RequiredFieldValidator ID="RequeridoTipo" runat="server" ControlToValidate="TipoRolEdicion" Display="Dynamic" ErrorMessage="El campo Tipo es obligatorio" ToolTip="El campo Tipo es obligatorio" ValidationGroup="Guardar">*</asp:RequiredFieldValidator>
                                                                            </div> 
                                                                        </div>
                                                                        <div class="row">
                                                                            <div class="col-md-12">
                                                                                <label>Opciones</label><br />
                                                                                <asp:TreeView ID="ArbolOpciones" runat="server" Width="100%" ShowCheckBoxes="All" onclick="OnCheckBoxCheckChanged();" ExpandDepth="1" ForeColor="Purple">
                                                                                </asp:TreeView>
                                                                            </div>
                                                                        </div>
                                                                        <div class="row">
                                                                            <div class="col-md-12">
                                                                                <asp:Button ID="Guardar" runat="server" Text="Guardar" CssClass="btn btn-purple" OnClick="Guardar_Click" ValidationGroup="Guardar" />
                                                                                <asp:Button ID="LimpiarEdicion" runat="server" CssClass="btn btn-purple" Text="Limpiar" OnClick="LimpiarEdicion_Click" />
                                                                                <asp:Button ID="CancelarEdicion" runat="server" CssClass="btn btn-purple" Text="Cancelar" OnClick="CancelarEdicion_Click" />
                                                                            </div>
                                                                        </div>
                                                                        <br />
                                                                    </div>
                                                                </div>
                                                                <br />
                                                            </asp:Panel>
          
                                                    <%-- end formulario de insersion de registros --%>                        
                        
                                                                     </div>
                                                                </div>
                                                             </div>
                                                        </div>
                                                     </div>
                                                    </div>
                                                    <div id="pnl">
                                                        <asp:Panel ID="PnlMsg" runat="server"  Width="100%"></asp:Panel>
                                                    </div>

                                                            <script type="text/javascript">
                                                                Sys.Application.add_load(BindEvents);
                                                            </script>
                                                  </ContentTemplate>
            
                                           </asp:UpdatePanel>
                                        </div>


       
                                        <!-- fin de insercio y edicion de datos-->                                                 
                                         </div>
                                  </div>
                              </div>
                        </div>
                     </div>                      
				</div>
               
			</div>
       
    </ContentTemplate>
        <Triggers>
            <asp:PostBackTrigger ControlID="Exportar" />
        </Triggers>
</asp:UpdatePanel>
    <asp:UpdateProgress ID="UpdateProgressBasico" runat="server" AssociatedUpdatePanelID="UpdatePanel2">        
        <ProgressTemplate>
            <asp:Panel ID="PanelProgress" runat="server" CssClass="progress">
                <div class="row">
                    <div class="progressContainer">
                        <div class="progressHeader">
                             <asp:Image ID="Image2" runat="server" ImageUrl="~/images/cargando_v2.gif" />
                            <br />
                        </div>
                        <div class="progressBody">
                            <div class="alignCenter">
                               
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                </div>
            </asp:Panel>
        </ProgressTemplate>
    </asp:UpdateProgress>
</asp:Content>
