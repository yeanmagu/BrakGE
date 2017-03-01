<%@ Page Title="Usuarios" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="WebUsuarios.aspx.cs" Inherits="BrakGeWeb.WebUsuarios" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="Scripts/EventForms.js"></script>
        <style>
        .formgrid {
            display:block;
        }
        .formdata {
     
        }
    </style>
   <style>
       .novisible
       {
           display:none;
       }
   </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <style>
        .formgrid {
            display:block;
        }
        .formdata {
            
        }
    </style>
      <div class="row">
              <div class="col-md-12 ">
                    <div class="panel panel-purple ">
				    <!--Panel heading-->
				        <div class="panel-heading">
                             <h3 class="panel-title">Usuarios</h3>  
                               
				        </div>                          
				        <!--Panel body-->
				        <div class="panel-body">
					        <!--Tabs content-->
                              <div id="tabFactura" class="tab-pane active in">
                                  <hr />
                                  <div class="row">
                                         <div class="col-md-12">
                                                <div class="row" >
                                                    <div class="col-md-12">
                                                        <div class="table-responsive">
                                                            <div class="panel formgrid" >                          
                                                                <div class="panel-body">
                                                                    <asp:UpdatePanel runat="server" ID="updateGrid" UpdateMode="Conditional">
                                                                        <ContentTemplate>  
                                                                            <div class="col-md-12">
                                                                                <div class="table-responsive">
                                                                                    <div class="dataTables_filter" id="demo-dt-basic_filter"><label>Buscar:<asp:TextBox  CssClass="form-control input-sm" ID="TxtBusqueda" runat="server" AutoPostBack="True" OnTextChanged="TxtBusqueda_TextChanged"  ></asp:TextBox>  </div>
                                                                                    <asp:GridView ID="ResultadoUsuarios" runat="server" EmptyDataText="No Existe Informacion para Mostrar"
                                                                                        AutoGenerateColumns="False" EnableModelValidation="True" CellPadding="0" CellSpacing="0"
                                                                                        BorderWidth="1" GridLines="None" OnRowCommand="ResultadoUsuarios_RowCommand"
                                                                                        DataKeyNames="Id_Usuario" AllowPaging="True" OnPageIndexChanging="ResultadoUsuarios_PageIndexChanging"
                                                                                        OnRowDataBound="ResultadoUsuarios_RowDataBound" Width="100%" CssClass="datatable" BorderColor="#CCCCCC">                                
                                                                                        <pagersettings firstpagetext="Primero &nbsp;" lastpagetext="Última &nbsp;" nextpagetext="Siguiente &nbsp;" 
                                                                                             previouspagetext="Anterior &nbsp;" Mode="NextPreviousFirstLast" />
                                                                    
                                                                                        <Columns>
                                                                                            <asp:BoundField HeaderText="Id" DataField="Id_Usuario" SortExpression="Id_Usuario" />
                                                                                            <asp:BoundField HeaderText="Usuario" DataField="username" SortExpression="username" />
                                                                                            <asp:BoundField HeaderText="Ident." DataField="numero_identificacion" SortExpression="numero_identificacion" />
                                                                                            <asp:BoundField HeaderText="Nombre" DataField="NombreCompleto" SortExpression="NombreCompleto" />
                                                                                            <asp:BoundField HeaderText="Rol" SortExpression="Rol" DataField="Rol" />
                                                                                            <asp:BoundField HeaderText="E-mail" DataField="correo_electronico" SortExpression="correo_electronico" />
                                                                                            <asp:TemplateField HeaderText="activo" SortExpression="activo" ItemStyle-CssClass="alignCenter">
                                                                                                <ItemTemplate>
                                                                                                    <asp:CheckBox ID="CheckBox1" Enabled="false" runat="server" Checked='<%# Bind("Activo") %>' />
                                                                                                </ItemTemplate>
                                                                                            </asp:TemplateField>
                                                                                            <asp:ButtonField ButtonType="Link" HeaderText="Editar" ItemStyle-CssClass="alignCenter"
                                                                                                Text="<img src='Autenticacion/Login/Editar.png' border=0>" CommandName="Editar">
                                                                                                <ItemStyle HorizontalAlign="Center" />
                                                                                            </asp:ButtonField>
                                                                                           <%-- <asp:ButtonField ButtonType="Link" HeaderText="Cambiar Clave" ItemStyle-CssClass="alignCenter" 
                                                                                                Text="<img src='images/pass.fw.png' border=0>" CommandName="Cambiar">
                                                                                                <ItemStyle HorizontalAlign="Center" />
                                                                                            </asp:ButtonField>--%>
                                                                                        </Columns>                                           
                                                                                    </asp:GridView>
                                                                                </div >
                                                                                <asp:Button ID="Nuevo" runat="server" OnClick="Nuevo_Click" Text="Nuevo" CssClass="btn btn-purple" Font-Bold="false" />
                                                                            </div>                              
                                                                            <div class="col-md-12 " style="display:none;">
                                                                              <div class="row" >
                                                                                    <div class="form-group col-md-3">
                                                                                        <label>Usuario</label>
                                                                                        <asp:TextBox ID="UsuarioFiltro" runat= "server" BorderColor="#CCCCCC" BorderStyle="Solid" BorderWidth="1px" CssClass="form-control" 
                                                                                                        Font-Names="Trebuchet MS" Font-Size="12px"  MaxLength="100" >
                                                                                        </asp:TextBox>
                                                                                    </div>
                                                                                    <div class="form-group col-md-3">
                                                                                         <label>Identificación</label>
                                                                                          <asp:TextBox ID="IdentificacionFiltro" runat= "server" BorderColor="#CCCCCC" BorderStyle="Solid" BorderWidth="1px" CssClass="form-control" 
                                                                                                        Font-Names="Trebuchet MS" Font-Size="12px" MaxLength="10" >
                                                                                          </asp:TextBox>
                                                                                     </div>
                                                                                    <div class="form-group col-md-3">
                                                                                        <label>Nombre</label>
                                                                                        <asp:TextBox ID="NombresFiltro" runat= "server" BorderColor="#CCCCCC" 
                                                                                                        BorderStyle="Solid" BorderWidth="1px" CssClass="form-control" 
                                                                                                        Font-Names="Trebuchet MS" Font-Size="12px" MaxLength="100" ></asp:TextBox>
                                                                                    </div>
                                                                                    <div class="form-group col-md-3">
                                                                                        <label>Apellido</label>
                                                                                        <asp:TextBox ID="ApellidosFiltro" runat= "server" BorderColor="#CCCCCC" 
                                                                                                        BorderStyle="Solid" BorderWidth="1px" CssClass="form-control" 
                                                                                                        Font-Names="Trebuchet MS" Font-Size="12px" MaxLength="100" ></asp:TextBox>
                                                                                    </div>
                                                                             </div>
                                                                              <div class="row">
                                                                                 <div class="form-group col-md-3">
                                                                                     <label>Rol</label>
                                                                                     <asp:DropDownList ID="RolFiltro" runat="server" DataTextField="desc_rol" DataValueField="Id_Rol"
                                                                                                        CssClass="form-control" >
                                                                                                    </asp:DropDownList>
                                                                                 </div>
                                                                                 <div class="form-group col-md-3">
                                                                                      <label>Estado</label>
                                                                                     <asp:DropDownList ID="EstadoFiltro" runat="server"  CssClass="form-control">
                                                                                     </asp:DropDownList>
                                                                                 </div>
                                                                                 <div class="form-group col-md-3">
                                                                                     <div class="input-group">
                                                                                        <div class="input-group-addon">@</div>
                                                                                        <asp:TextBox ID="CuentaCorreoFiltro" runat= "server" BorderColor="#CCCCCC" 
                                                                                                        BorderStyle="Solid" BorderWidth="1px" CssClass="form-control" 
                                                                                                        Font-Names="Trebuchet MS" Font-Size="12px" MaxLength="100"></asp:TextBox>
                                                                                     </div>
                                                                                 </div>  
                                                                             </div>
                                                
                                                                              <div class="row">
                                                                                  <div class="col-md-12">
                                                                                        <asp:Button ID="Buscar" runat="server" OnClick="Buscar_Click" Text="Buscar"  Font-Bold="false" />                                        
                                                                                        <asp:Button ID="Todos" runat="server" OnClick="Todos_Click" Text="Todos" Font-Bold="false" />                                        
                                                                                        <asp:Button ID="Limpiar" runat="server" OnClick="Limpiar_Click" Text="Limpiar" ValidationGroup="Actualizar" Font-Bold="false"  />
                                            
                                                                                        <asp:Button ID="Salir" runat="server" OnClick="Salir_Click" Text="Salir"  Font-Bold="false"  />    
                                                                                  </div>
                                                                              </div>

                                    
                                                                              <div class="row" >
                                                                                <div class="col-md-12" >
                                                                                    <asp:Panel class="alignRight" ID="MarcoExportar" runat="server" DefaultButton="Exportar"          BorderColor="White" BorderStyle="Ridge">
                                            
                                                     
                                                                                        <br />
                                                                                        <div class="pretty danger btn">
                                                                                            <asp:Button ID="Exportar" runat="server" Text="Exportar" Width="143px" CssClass="botonf" 
                                                                                             Height="32px" Font-Bold="false" ForeColor="White" OnClick="Exportar_Click" />
                                                                                        </div>                                
                                                                                     </asp:Panel>
                                                                                </div>
                                                                                <br />
                                                                            </div>
                                                                            </div>
                                                                        </ContentTemplate>
                                                                    </asp:UpdatePanel>
                        
                                                                </div>
                                                              </div>
                      
                                                        </div>
                                                            </div>
                                                        </div>
                                                        <%-- fin seccion de registros en gridview --%>  
                                               
                                             <%-- fin seccion de registros en gridview --%>  
                                                <%-- inicio de insercion de datos --%>

                                                <%-- seccion nuevos registros --%>   
                                                <div class="row">
        
                                                    <asp:UpdatePanel runat="server" ID="UpdateNew" UpdateMode="Conditional">
                                                         <ContentTemplate>
                                                            <div class="row">
                                                                <div class="col-md-12" >
                                                                <div class="panel formdata" >
                                                                     <div class="panel-heading">
				                                                        <h3 class="panel-title">Datos del Usuario</h3>         
				                                                     </div>
                                                                     <div class="panel-body">
                                                                        <div class="row" >
                                                                           <div class="col-md-12 ">
                                                                                <%-- formulario de insersion de registros --%>                        
                                                                                <div class="row">
                                                                                    <div class="col-md-12 ">
                                                                                        <div class="row">
                                                                                            <div class="form-group col-md-3">
                                                                                                <label>Usuario</label>
                                                                                                <asp:TextBox ID="UsuarioEdicion" runat= "server" CssClass="form-control"  MaxLength="100" ></asp:TextBox>
                                                                                                <asp:RequiredFieldValidator ID="RequeridoUsuario" runat="server" ControlToValidate="UsuarioEdicion" Display="Dynamic" ErrorMessage="El campo Usuario es obligatorio" ToolTip="El campo Usuario es obligatorio" ValidationGroup="Guardar">*</asp:RequiredFieldValidator>
                                                                                                <asp:ValidatorCalloutExtender ID="ValidatorCalloutExtender1" runat="server" Enabled="True" TargetControlID="RequeridoUsuario">
                                                                                                </asp:ValidatorCalloutExtender>
                                                                                            </div>
                                                                                            <div class="form-group col-md-3">
                                                                                                <label>Identificación</label>
                                                                                                <asp:TextBox ID="IdentificacionEdicion" runat= "server"  CssClass="form-control" 
                                                                                                                        MaxLength="10" ></asp:TextBox>
                                                                                                                        <asp:RegularExpressionValidator ID="ExpresionIdentificacion0" runat="server" ControlToValidate="IdentificacionEdicion" Display="Dynamic" ErrorMessage="El campo Identificación es inválido" Text="*" ToolTip="El campo Identificación es inválido" ValidationExpression="^(([0-9]{6,8})||([0-9]{10,10}))$" ValidationGroup="Guardar" />
                                                                                                                        <asp:ValidatorCalloutExtender ID="ExpresionIdentificacion0_ValidatorCalloutExtender" runat="server" Enabled="True" TargetControlID="ExpresionIdentificacion0">
                                                                                                                        </asp:ValidatorCalloutExtender>
                                                                                                                        <asp:ValidatorCalloutExtender ID="ValidatorCalloutExtender15" runat="server" Enabled="True" TargetControlID="RequeridoIdentificacion">
                                                                                                                        </asp:ValidatorCalloutExtender>
                                                                                                                        <div onkeydown="return ValidarFormato(event, '[0-9]');">
                                                                                                                            <asp:RequiredFieldValidator ID="RequeridoIdentificacion" runat="server" ControlToValidate="IdentificacionEdicion"
                                                                                                                                ErrorMessage="El campo Identificación es obligatorio" ToolTip="El campo Identificación es obligatorio"
                                                                                                                                ValidationGroup="Guardar" Display="Dynamic">*</asp:RequiredFieldValidator>
                                                                                                                        </div>
                                                                                            </div>
                                                                                            <div class="form-group col-md-3">
                                                                                                <label>Nombres</label>
                                                                                                <asp:TextBox ID="NombresEdicion" runat= "server"  CssClass="form-control" 
                                                                                                                        MaxLength="100" ></asp:TextBox>
                                                                                                                        <asp:RequiredFieldValidator ID="RequeridoNombres0" runat="server" ControlToValidate="NombresEdicion" Display="Dynamic" ErrorMessage="El campo Nombres es obligatorio" ToolTip="El campo Nombres es obligatorio" ValidationGroup="Guardar">*</asp:RequiredFieldValidator>
                                                                                                                        <asp:ValidatorCalloutExtender ID="RequeridoNombres0_ValidatorCalloutExtender" runat="server" Enabled="True" TargetControlID="RequeridoNombres0">
                                                                                                                        </asp:ValidatorCalloutExtender>
                                                                                            </div>
                                                                                            <div class="form-group col-md-3">
                                                                                                <label>Apellidos</label>
                                                                                                <asp:TextBox ID="ApellidosEdicion" runat= "server"  CssClass="form-control" 
                                                                                                                        MaxLength="100" ></asp:TextBox>
                                                                                                                        <asp:RequiredFieldValidator ID="RequeridoApellidos" runat="server" ControlToValidate="ApellidosEdicion" Display="Dynamic" ErrorMessage="El campo Apellidos es obligatorio" ToolTip="El campo Apellidos es obligatorio" ValidationGroup="Guardar">*</asp:RequiredFieldValidator>
                                                                                                                        <asp:ValidatorCalloutExtender ID="RequeridoApellidos_ValidatorCalloutExtender" runat="server" Enabled="True" TargetControlID="RequeridoApellidos">
                                                                                                                        </asp:ValidatorCalloutExtender>
                                                                                            </div>
                                                                                            </div><!--end row  -->
                                                                                        <div class="row">
                                                                                            <div class="form-group col-md-3">
                                                                                                <label>Id Oficina</label>
                                                                                                <asp:TextBox ID="txtidoficina" runat= "server" CssClass="form-control" 
                                                                                                                MaxLength="10"></asp:TextBox>
                                                                                                                    <asp:RegularExpressionValidator ID="RegularExpressionValidator3" runat="server" ControlToValidate="txtidoficina" Display="Dynamic" ErrorMessage="El campo Oficina es inválido" Text="*" ToolTip="El campo Oficina es inválido" ValidationExpression="^(([0-9]{6,8})||([0-9]{1,4}))$" ValidationGroup="Guardar" />
                                                                                                                    <asp:ValidatorCalloutExtender ID="RegularExpressionValidator3_ValidatorCalloutExtender" runat="server" Enabled="True" TargetControlID="RegularExpressionValidator3">
                                                                                                                    </asp:ValidatorCalloutExtender>
                                                                                                                    <asp:ValidatorCalloutExtender ID="ValidatorCalloutExtender17" runat="server" Enabled="True" TargetControlID="RequiredFieldValidator3">
                                                                                                                    </asp:ValidatorCalloutExtender>
                                                                                                                    <div onkeydown="return ValidarFormato(event, '[0-9]');">
                                                                                                                        <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ControlToValidate="txtidoficina"
                                                                                                                            ErrorMessage="El campo Oficina es obligatorio" ToolTip="El campo Oficina es obligatorio"
                                                                                                                            ValidationGroup="Guardar" Display="Dynamic">*</asp:RequiredFieldValidator>
                                                                                                                    </div>
                    
                                                                                            </div>
                                                                                            <div class="form-group col-md-3">
                                                                                                <label>Rol</label>
                                                                                                <asp:DropDownList ID="RolEdicion" runat="server" AutoPostBack="True" DataTextField="desc_rol" DataValueField="Id_Rol" OnSelectedIndexChanged="RolEdicion_SelectedIndexChanged"  CssClass="form-control">
                                                                                                                    </asp:DropDownList>
                                                                                                                    <asp:RequiredFieldValidator ID="RequeridoRol" runat="server" ControlToValidate="RolEdicion" Display="Dynamic" ErrorMessage="El campo Rol es obligatorio" InitialValue="0" ToolTip="El campo Rol es obligatorio" ValidationGroup="Guardar">*</asp:RequiredFieldValidator>
                                                                                                                    <asp:ValidatorCalloutExtender ID="RequeridoRol_ValidatorCalloutExtender" runat="server" Enabled="True" TargetControlID="RequeridoRol">
                                                                                                                    </asp:ValidatorCalloutExtender>

                                                                                            </div>
                                                                                            <div class="form-group col-md-3">
                                                                                                <label>Telefono</label>
                                                                                                <asp:TextBox ID="txtTelefono" runat= "server" CssClass="form-control" 
                                                                                                                MaxLength="10" ></asp:TextBox>
                                                                                                                    <asp:RegularExpressionValidator ID="RegularExpressionValidator4" runat="server" ControlToValidate="txtTelefono" Display="Dynamic" ErrorMessage="El campo telèfono es inválido" Text="*" ToolTip="El campo telèfono es inválido" ValidationExpression="^(([0-9]{6,8})||([0-9]{1,10}))$" ValidationGroup="Guardar" />
                                                                                                                    <asp:ValidatorCalloutExtender ID="RegularExpressionValidator4_ValidatorCalloutExtender" runat="server" Enabled="True" TargetControlID="RegularExpressionValidator4">
                                                                                                                    </asp:ValidatorCalloutExtender>
                                                                                                                    <asp:ValidatorCalloutExtender ID="ValidatorCalloutExtender19" runat="server" Enabled="True" TargetControlID="RequiredFieldValidator1">
                                                                                                                    </asp:ValidatorCalloutExtender>
                                                                                                                    <div onkeydown="return ValidarFormato(event, '[0-9]');">
                                                                                                                        <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="txtTelefono"
                                                                                                                            ErrorMessage="El campo telèfono es obligatorio" ToolTip="El campo telèfono es obligatorio"
                                                                                                                            ValidationGroup="Guardar" Display="Dynamic">*</asp:RequiredFieldValidator>
                                                                                                                    </div>
                                                                                            </div>
                                                                                            <div class="form-group col-md-3">
                                                                                                <label>E-mail</label>
                                                                                                <div class="input-group">
                                                                                                <div class="input-group-addon">@</div>
                                                                                                <asp:TextBox ID="CuentaCorreoEdicion" runat= "server"  CssClass="form-control" 
                                                                                                                MaxLength="100" ></asp:TextBox></div>
                                                                                                                    <asp:RequiredFieldValidator ID="RequeridoCuentaCorreo0" runat="server" ControlToValidate="CuentaCorreoEdicion" Display="Dynamic" ErrorMessage="El campo E-mail es obligatorio" ToolTip="El campo E-mail es obligatorio" ValidationGroup="Guardar">*</asp:RequiredFieldValidator>
                                                                                                                    <asp:ValidatorCalloutExtender ID="RequeridoCuentaCorreo0_ValidatorCalloutExtender" runat="server" Enabled="True" TargetControlID="RequeridoCuentaCorreo0">
                                                                                                                    </asp:ValidatorCalloutExtender>
                                                                                                                    <asp:RegularExpressionValidator ID="ExpresionCuentaCorreo" ControlToValidate="CuentaCorreoEdicion"
                                                                                                                        ErrorMessage="El campo E-mail es inválido" ToolTip="El campo E-mail es inválido"
                                                                                                                        ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*" ValidationGroup="Guardar"
                                                                                                                        Text="*" runat="server" Display="Dynamic" />
                                                                                                                    <asp:ValidatorCalloutExtender ID="ValidatorCalloutExtender11" runat="server" Enabled="True"
                                                                                                                        TargetControlID="ExpresionCuentaCorreo">
                                                                                                                    </asp:ValidatorCalloutExtender>
                                                                                            </div>
                                                                                        </div><!--end row  -->               
                                                                                        <div class="row">
                                                                                                <div class="form-group col-md-3">
                                                                                                    <label >Estado</label> 
                                                                                                    <div class="input-group">                                        
                                                                                                        <span class="input-group-addon">
                                                                                                            <asp:CheckBox ID="Activo" runat="server"  />
                                                                                                        </span>
                                                                                                    <label class="form-control">Activo</label> 
                                                                                                    </div><!-- /input-group -->
                                                                                                </div>
                                                                                                <div class="form-group col-md-3">
                                                                                                <label>Clave</label>
                                                                                                <div class="input-group">                                        
                                                                                                        <span class="input-group-addon">
                                                                                                            <asp:CheckBox ID="ResetearClave" runat="server" Text="" />
                                                                                                        </span>
                                                                                                    <label class="form-control">Resetear</label> 
                                                                                                    </div><!-- /input-group -->
                                                                                            </div>
                                                                                                <div class="form-group col-md-3">
                                                                                                <label>Password</label>
                                                                                                    <div class="input-group">                                        
                                                                                                        <span class="input-group-addon">
                                                                                                            <asp:CheckBox ID="chkpaswordusuario" runat="server" Checked="true" />
                                                                                                        </span>
                                                                                                    <label class="form-control">Usuario como password</label> 
                                                                                                    </div><!-- /input-group -->
                                                                                            </div>
                                                                                                <div class="form-group col-md-3">
                                                                                                <label>Token</label><br />
                                                                                                <asp:LinkButton ID="Generar" runat="server" ForeColor="White" Font-Bold="true"  OnClick="Generar_Click" CssClass="btn btn-purple">Generar</asp:LinkButton>
                        
                                                                                            </div>
                                                                                        </div>      
                                                    
                                                                                        <!--end row  -->
                                                                                    </div>
                                                                                </div>
                                                                                <br />
                                                                                <div class="row">
                                                                                    <div class="col-md-12">                    
                                                                                        <asp:Button ID="Guardar" runat="server"  CssClass="btn btn-purple"  Font-Bold="false" Text="Guardar" OnClick="Guardar_Click" ValidationGroup="Guardar" />
                                                                                        <asp:Button ID="LimpiarEdicion" runat="server" CssClass="btn btn-purple" Text="Limpiar" OnClick="LimpiarEdicion_Click" />
                                                                                        <asp:Button ID="CancelarEdicion" runat="server" CssClass="btn btn-purple" Text="Cancelar" OnClick="CancelarEdicion_Click" />                                            
                                                                                    </div>
                                                                                </div>
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

                                         </div>
                                  </div>
                              </div>
                        </div>
                     </div>                      
				</div>
               
			</div>






 
    <asp:UpdatePanel ID="UpdatePanel2" runat="server">
        <ContentTemplate>

      
        
    <asp:Panel runat="server" ID="DatosEdicion" Width="100%" DefaultButton="Guardar" BorderStyle="Outset" CssClass="novisible">                        
                        <asp:UpdatePanel ID="UpdatePanel1" runat="server">
                            <ContentTemplate>
                                <table class="tabla field" style="width:100%; display:none;" >                                    
                                </table>                                
                            </ContentTemplate>
                            <Triggers>
                                <asp:PostBackTrigger ControlID="Generar" />
                                <asp:PostBackTrigger ControlID="Exportar" />
                            </Triggers>
                        </asp:UpdatePanel>
                    </asp:Panel> 

         
             <script type="text/javascript">
                 Sys.Application.add_load(BindEvents);
                </script>

        </ContentTemplate>
    </asp:UpdatePanel>
    <asp:UpdateProgress ID="UpdateProgressBasico" runat="server" AssociatedUpdatePanelID="UpdatePanel1">
        <ProgressTemplate>
            <asp:Panel ID="PanelProgress" runat="server" CssClass="progress">
                <div class="progressContainer">
                    <div class="progressHeader">
                     <asp:Image ID="Image1" runat="server" ImageUrl="~/images/cargando_v2.gif" />
                    </div>
                    <div class="progressBody">
                        <div class="alignCenter">
                                <label class="label-primary">  Por favor espere mientras la operación se realiza....</label>
                        </div>
                    </div>
                </div>
            </asp:Panel>
        </ProgressTemplate>
    </asp:UpdateProgress>
</asp:Content>
