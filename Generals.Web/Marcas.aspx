<%@ Page Title="Marcas" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Marcas.aspx.cs" Inherits="BrakGeWeb.Marcas" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
<script src="Scripts/EventForms.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
     <asp:UpdatePanel ID="UpdatePanel1" runat="server">
        <ContentTemplate>
            <asp:Panel ID="pnlGrid" runat="server">
                    <div class="row" >
                        <div class="col-md-12">
                          <div class="table-responsive">
                              <div class="panel formgrid" >                          
                                  <div class="panel-body">                  
                                        <div class="row">
                                            <div class="col-md-12">
                                                    <div class="dataTables_filter" id="demo-dt-basic_filter"><label>Buscar:<asp:TextBox  CssClass="form-control input-sm" ID="TxtBusqueda" runat="server" OnTextChanged="TxtBusqueda_TextChanged" AutoPostBack="True"  ></asp:TextBox> </label> </div>
                                                <br />                      
                                                    <asp:GridView ID="GridMarcas" runat="server" CssClass="table table-striped table-bordered dataTable no-footer dtr-inline" cellspacing="0"  role="grid" aria-describedby="demo-dt-basic_info" 
                                                       
                                                         PageSize="10" AllowPaging="True" AllowSorting="True" OnPageIndexChanging="GridMarcas_PageIndexChanging" GridLines="None" AutoGenerateColumns="false" >
                                                        <pagersettings firstpagetext="Primero &nbsp;" lastpagetext="Última &nbsp;" nextpagetext="Siguiente &nbsp;"  previouspagetext="Anterior &nbsp;" Mode="NextPreviousFirstLast" />
                                                            <AlternatingRowStyle BackColor="#F4F4F4" />
                                                            <Columns>                                       
                                                                <asp:BoundField DataField="Id" HeaderText="Código" SortExpression="Id">
                                                                <FooterStyle HorizontalAlign="Center" VerticalAlign="Middle" />
                                                                </asp:BoundField>
                                                                <asp:BoundField DataField="Descripcion" HeaderText="Descripcion" 
                                                                    SortExpression="Descripcion"  />
                                                            <%--<asp:CheckBoxField DataField="Estado" HeaderText="Activo" SortExpression="Activo"  />--%>
                                                                <asp:TemplateField HeaderStyle-HorizontalAlign="Center" HeaderText="Actions">

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
                                                <button runat="server" id="BtnNuevo"  onserverclick="Nuevo_Click"  class="btn btn-purple" ><span class="icon">
		                                        <i class="fa fa-file"></i></span>Nuevo</button>
                                                <%--   <asp:Button ID="Nuevo" runat="server" Text="Nuevo" OnClick="Nuevo_Click" AccessKey />--%>
                                                 <button class="btn btn-purple">
                                                <a href="Default.aspx" id="Button1"  ><span class="icon">
		                                        <i class="fa fa-sign-out" ></i></span></a>Cerrar</button>
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
				                            <h3 class="panel-title">Marcas</h3>         
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
                                              
                                                
                                           </div>
                                             <div class="row">
                                                 <div class="col-md-12">

                                             <%--        <button runat="server" id="Guardar"  onserverclick="BtnGuardar_Click"  class="btn btn-purple" ><span class="icon">
		<i class="fa fa-plus"></i>
	</span>Guardar</button>
                                                      <button runat="server" id="Button2"  onserverclick="Limpiar_Click"  class="btn btn-purple" ><span class="icon">
		<i class="fa fa-paint-brush"></i>
	</span>Limpiar</button>
                                                   <button runat="server" id="Button3"  onserverclick="Cancelar_Click"  class="btn btn-purple" ><span class="icon">
		<i class="fa fa-rotate-right"></i>
	</span>Cancelar</button>--%>
                                                  <%--<button runat="server" id="Cancelar"  onserverclick="Cancelar_Click"  class="btn-active-mint" ><i class="icon-save"></i>Cancelar</button>--%>
                                                  <asp:Button ID="Guardar1" runat="server" Text="Guardar" OnClick="BtnGuardar_Click" CssClass="btn btn-purple"/>
                                                  <asp:Button ID="Limpiar" runat="server" Text="Limpiar" OnClick="Limpiar_Click" CssClass="btn btn-purple" />
                                                <asp:Button ID="Cancelar" runat="server" Text="Cancelar" OnClick="Cancelar_Click" CssClass="btn btn-purple" />
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
