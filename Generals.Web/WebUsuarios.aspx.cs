using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.Common;
using Generals.business.Entities;

namespace BrakGeWeb
{
    public partial class WebUsuarios : PaginaBase
    {
        #region "Constantes"
        /// <summary>
        /// Mensaje de insercion correcta del usuario
        /// </summary>
        public const string mensajeInsertado = "Se ingresó correctamente el usuario {0}";
        /// <summary>
        /// Mensaje de actualizacion correcta del usuario
        /// </summary>
        public const string mensajeActualizado = "Se actualizó correctamente el usuario {0}";
        /// <summary>
        /// Mensaje de advertencia de no generacion de token de usuario
        /// </summary>
        public const string noToken = "No se ha generado el token para el usuario";
        /// <summary>
        /// Mensaje de advertencia para cuando se solicita cambio de clave y no se guarda 
        /// </summary>
        public const string claveGuardar = "No se realizará el cambio de clave del usuario {0}";
        /// <summary>
        /// Mensaje de advertencia para cuando se solicita cambio de clave y no se guarda 
        /// </summary>
        public const string tokenGuardar = "No se realizará el cambio de token del usuario {0}";
        #endregion

        #region "Propiedades"
        public bool TokenModificado { get { return Session["tokenmodificado"] == null ? false : (bool)Session["tokenmodificado"]; } set { Session.Add("tokenmodificado", value); } }

        public List<Generals.business.UserEntities.Usuarios> ListaUsuarios { get { return (List<Generals.business.UserEntities.Usuarios>)Session["usuarios"]; } set { Session.Add("usuarios", value); } }
        /// <summary>
        /// Lista de usuarios consultados segun el filtro
        /// </summary>

        /// <summary>
        /// Lista de roles del servicio de pines
        /// </summary>
        public List<Generals.business.UserEntities.Roles> ListaRoles { get { return (List<Generals.business.UserEntities.Roles>)Session["roles"]; } set { Session.Add("roles", value); } }
        /// <summary>
        /// Modo de acceso para controlar el evento de persistenci
        /// </summary>
        public ModoRegistro Modo { get { return (ModoRegistro)ViewState["modo"]; } set { ViewState.Add("modo", value.GetHashCode()); } }
        /// <summary>
        /// Valor del token generado para el usuario en edicion
        /// </summary>
        public string Token { get { return (string)Session["token"]; } set { Session.Add("token", value); } }
        /// <summary>
        /// Identificador del usuario que se encuentra en edicion
        /// </summary>
        public long IdUsuarioEdicion { get { return (long)ViewState["idusuario"]; } set { ViewState.Add("idusuario", value); } }
        /// <summary>
        /// Identificador del rol de pines del usuario en edicion
        /// </summary>
        public long IdRolEdicion { get { return (long)ViewState["idroledicion"]; } set { ViewState.Add("idroledicion", value); } }
        /// <summary>
        /// Clave hash del usuario en edicion, se asigna vacia cuando se resetea la clave
        /// </summary>
        public string Clave { get { return (string)ViewState["clave"]; } set { ViewState.Add("clave", value); } }
        /// <summary>
        /// Bandera que indica si el usuario puede crear nuevos comercios
        /// </summary>
        public bool PuedeCrear { get { return (bool)ViewState["puedecrear"]; } set { ViewState.Add("puedecrear", value); } }
        /// <summary>
        /// Bandera que indica si el usuario puede actualizar los campos de riesgo
        /// </summary>
        public bool PuedeMantener { get { return (bool)ViewState["puedemantener"]; } set { ViewState.Add("puedemantener", value); } }

        #endregion

        #region "Métodos Públicos"

        #endregion
        BllUsuarios Dm = new BllUsuarios();
        BllRoles ro = new BllRoles();

        BllRoles.Perfile per = new BllRoles.Perfile();
        BllUsuarios.user usua = new BllUsuarios.user();
        #region "Métodos Privados"

        /// <summary>
        /// Realiza la consulta de usuarios de acuerdo a los filtros establecidos
        /// </summary>
        private void Consultar()
        {
            Generals.business.UserEntities.Users servicio = new Generals.business.UserEntities.Users();
            servicio.IdServicio = 1;
            servicio.Login = UsuarioFiltro.Text;
            servicio.Nombres = NombresFiltro.Text;
            servicio.Apellidos = ApellidosFiltro.Text;
            servicio.IdRol = ObtenerSeleccionCombo(RolFiltro);
            servicio.Mantenimiento = !PuedeCrear;
            servicio.IdServicio = 1;
            servicio.IdRolCreador = !PuedeCrear ? RolServicio.Value : (long?)null;
            servicio.Identificacion = IdentificacionFiltro.Text;
            int? activo = ObtenerSeleccionCombo(EstadoFiltro);
            servicio.Activo = activo.HasValue ? (activo.Value == 1 ? true : false) : (bool?)null;
            servicio.CuentaCorreo = CuentaCorreoFiltro.Text;

            ListaUsuarios = servicio.ConsultarUsuarios().ToList();
            ListaUsuarios = ListaUsuarios.Where(p => p.activo == p.activo).ToList();
            ResultadoUsuarios.PageIndex = 0;
        }

        //<summary>
        //Realiza la consulta de usuarios de acuerdo a los filtros establecidos
        //</summary>
        private void ConsultarTodos()
        {
            Generals.business.UserEntities.Users servicio = new Generals.business.UserEntities.Users();
            servicio.IdServicio = 1;
            ListaUsuarios = servicio.ConsultarUsuarios().ToList();
            //ListaUsuarios = ListaUsuarios.Where(p => p.activo.Value).ToList();
            ResultadoUsuarios.Columns[ResultadoUsuarios.Columns.Count - 1].Visible = true;

            //ResultadoUsuarios.PageIndex = 0;

        }

        //<summary>
        //Asigna visualmente los resultados de la consulta a la tabla de usuarios
        //</summary>
        private void VisualizarResultado(bool Mensaje)
        {
            MarcoExportar.Visible = ListaUsuarios.Count != 0;
            if (ListaUsuarios.Count == 0 && Mensaje)
            {
                Metodos.divMensaje(Constantes.Warning, Constantes.noRegistros, PnlMsg, Constantes.Advertencia);
                // mensaje(Constantes.noRegistros);
            }
            else
            {
                ResultadoUsuarios.DataSource = ListaUsuarios;
                ResultadoUsuarios.DataBind();
            }
        }

        /// <summary>
        /// Realiza la consulta de roles de usuario relacionados al servicio de pines
        /// </summary>
        private void CargarRoles()
        {

            Generals.business.UserEntities.Rol servicio = new Generals.business.UserEntities.Rol();
            servicio.IdRol = PuedeCrear ? RolServicio.Value : (long?)null;
            servicio.Mantenimiento = PuedeMantener && !PuedeCrear;
            servicio.IdServicio = 1;
            List<Generals.business.UserEntities.Roles> roles = servicio.ConsultarRoles().ToList();
            Generals.business.UserEntities.Roles roldefecto = new Generals.business.UserEntities.Roles();
            roldefecto.id_rol = 0;
            roldefecto.desc_rol = Constantes.Seleccione;
            roles.Insert(0, roldefecto);
            RolFiltro.DataSource = roles;
            RolFiltro.DataBind();
            RolEdicion.DataSource = roles;
            RolEdicion.DataBind();
            ListaRoles = roles;
        }
          
        private void HabilitarCampos()
        {
            NombresEdicion.Enabled = PuedeCrear;
            ApellidosEdicion.Enabled = PuedeCrear;
            RolEdicion.Enabled = PuedeCrear;
            //ComercioEdicion.Enabled = PuedeCrear;
            //ConveniosEdicion.Enabled = PuedeCrear;
            IdentificacionEdicion.Enabled = PuedeCrear;
            CuentaCorreoEdicion.Enabled = PuedeCrear;
            ResetearClave.Enabled = PuedeCrear || PuedeMantener;
            Generar.Enabled = PuedeCrear || PuedeMantener;
            Activo.Enabled = PuedeCrear || PuedeMantener;
        }

        /// <summary>
        /// Prepara los controles de edicion de usuario para insercion
        /// </summary>
        private void NuevoUsuario()
        {
            Modo = ModoRegistro.Nuevo;
            UsuarioEdicion.Enabled = true;
            UsuarioEdicion.Text = "";
            ApellidosEdicion.Text = "";
            NombresEdicion.Text = "";
            IdentificacionEdicion.Text = "";
            CuentaCorreoEdicion.Text = "";
            Clave = "";
            Token = "";
            ResetearClave.Enabled = true;
            Generar.Enabled = true;
            Activo.Enabled = true;
            //ComercioEdicion.SelectedIndex = 0;
            //ConveniosEdicion.Items.Clear();
            //ConveniosEdicion.Enabled = false;
            ResetearClave.Checked = false;

            RolEdicion.SelectedIndex = 0;
            Activo.Checked = true;
            LimpiarEdicion.Visible = true;
            //FilaResetear.Visible = false;
            // FilaGenerar.Visible = false;
            //rowGestoresEc.Visible = false;
        }

        /// <summary>
        /// Realiza la actualizacion o insercion de un usuario
        /// </summary>
        private bool GuardarUsuario()
        {
            if (!string.IsNullOrEmpty(Token) /*|| !FilaGenerar.Visible*/)
            {
                Generals.business.UserEntities.Users servicio = new Generals.business.UserEntities.Users();
                servicio.IdServicio = 1;
                servicio.PasswordUsuario = chkpaswordusuario.Checked;
                Generals.business.UserEntities.Usuarios usuarioComplejo = new Generals.business.UserEntities.Usuarios();
                usuarioComplejo.ap_paterno = ApellidosEdicion.Text;
                usuarioComplejo.id_oficina = long.Parse(txtidoficina.Text);
                usuarioComplejo.nombre = NombresEdicion.Text;
                usuarioComplejo.username = UsuarioEdicion.Text;
                usuarioComplejo.correo_electronico = CuentaCorreoEdicion.Text;
                usuarioComplejo.activo = Activo.Checked;
                usuarioComplejo.numero_identificacion = IdentificacionEdicion.Text;
                usuarioComplejo.tel_contacto = txtTelefono.Text;
                usuarioComplejo.Token = Token;
                if (ResetearClave.Checked)
                {
                    Clave = "";

                }
                usuarioComplejo.password = Clave;
                Generals.business.UserEntities.Respuesta respuesta = null;
                Generals.business.UserEntities.Roles rol = new Generals.business.UserEntities.Roles();
                rol.id_rol = ObtenerSeleccionCombo(RolEdicion).Value;
                rol.desc_rol = "";

                //Generals.business.UserEntities.Gestores_EC gestor = new Generals.business.UserEntities.Gestores_EC();
                //if (rowGestoresEc.Visible)
                //{ 

                //  gestor.Cedula = IdentificacionEdicion.Text;
                //  gestor.Correo = CuentaCorreoEdicion.Text;                  
                //  gestor.Nombre = NombresEdicion.Text + " " + ApellidosEdicion.Text;
                //  gestor.Oficina = txtOficina.Text;
                //  gestor.telefono  =txtTelefono.Text;
                //  gestor.Codigo_Oficina  = txtcodoficina.Text;
                //  gestor.IdCiudad = txtsucursal.Text;
                //  gestor.Cargo = txtCargo.Text;
                //  gestor.Zona = txtZona.Text; 

                //  usuarioComplejo.Gestores_EC.Add(gestor);

                //}

                if (Modo == ModoRegistro.Modificacion)
                {
                    if (IdRolEdicion != ObtenerSeleccionCombo(RolEdicion).Value)
                    {
                        usuarioComplejo.Roles.Add(rol);
                    }
                    else
                    {
                        usuarioComplejo.IdRol = rol.id_rol;
                    }

                    usuarioComplejo.id_rol = rol.id_rol;
                    usuarioComplejo.id_usuario = IdUsuarioEdicion;
                    //usuarioComplejo.id_usuario = Usuario.id_usuario;
                    usuarioComplejo.FechaModificacion = DateTime.Now;
                    usuarioComplejo.bloqueo = Usuario.bloqueo;
                    usuarioComplejo.Clave1 = Usuario.Clave1;
                    usuarioComplejo.Clave2 = Usuario.Clave2;
                    Generals.business.UserEntities.Usuarios usuarioActual = ListaUsuarios.Where(p => p.id_usuario == IdUsuarioEdicion).FirstOrDefault();
                    usuarioComplejo.changePassword = usuarioActual.changePassword;

                    //if (usuarioComplejo.Gestores_EC.Count >0)
                    //    usuarioComplejo.Gestores_EC.FirstOrDefault().Id_Usuario =IdUsuarioEdicion ;
                    respuesta = servicio.ActualizarUsuario(usuarioComplejo, 1);

                    if (BllUsuarios.GetUsuario(usuarioComplejo.id_usuario).ID != 0)
                    {
                        usua = BllUsuarios.GetUsuario(usuarioComplejo.id_usuario);
                        usua.Nombres = usuarioComplejo.NombreCompleto;
                        usua.ID = int.Parse(usuarioComplejo.id_usuario.ToString());
                        usua.FechaSistema = System.DateTime.Now;
                        usua.IdRol = int.Parse(usuarioComplejo.id_rol.ToString());
                        usua.Cedula = IdentificacionEdicion.Text;
                        usua.Email = CuentaCorreoEdicion.Text;
                        usua.Telefono = txtTelefono.Text;
                        usua.Username = usuarioComplejo.username;
                        usua.Activo = usuarioComplejo.activo.Value;
                        if (ro.Exits(usuarioComplejo.id_rol.Value) == 0)
                        {
                            per.Id = int.Parse(usuarioComplejo.id_rol.ToString());
                            per.Descripcion = Generals.business.Entities.Roles.GetRol(usuarioComplejo.id_rol.Value).Descripcion;
                            ro.add(per);
                        }
                        usua.Cedula = usuarioComplejo.numero_identificacion;
                        Dm.UpdateUsuario(usua);
                    }
                    else
                    {
                        usua.Nombres = usuarioComplejo.NombreCompleto;
                        usua.ID = int.Parse(usuarioComplejo.id_usuario.ToString());
                        usua.FechaSistema = System.DateTime.Now;
                        usua.IdRol = int.Parse(usuarioComplejo.id_rol.ToString());
                        usua.Cedula = IdentificacionEdicion.Text;
                        usua.Email = CuentaCorreoEdicion.Text;
                        usua.Telefono = txtTelefono.Text;
                        usua.Username = usuarioComplejo.username;
                        usua.Activo = usuarioComplejo.activo.Value;
                        usua.Cedula = usuarioComplejo.numero_identificacion;
                        if (ro.Exits(usuarioComplejo.IdRol.Value) == 0)
                        {
                            per.Id = int.Parse(usuarioComplejo.id_rol.ToString());
                            per.Descripcion = Generals.business.Entities.Roles.GetRol(usuarioComplejo.id_rol.Value).Descripcion;
                            per.IdUsuario=int.Parse(Usuario.id_usuario.ToString());
                            ro.add(per);
                        }
                        Dm.Add(usua);
                    }
                }
                else
                {
                    usuarioComplejo.password = "";
                    usuarioComplejo.bloqueo = false;
                    usuarioComplejo.Clave1 = "";
                    usuarioComplejo.Clave2 = "";
                    usuarioComplejo.IdRol = rol.id_rol;
                    usuarioComplejo.id_rol = rol.id_rol;
                    usuarioComplejo.IdUsuarioCreacion = int.Parse(Usuario.id_usuario.ToString());
                    usuarioComplejo.id_usuario = Usuario.id_usuario;
                    usuarioComplejo.FechaModificacion = DateTime.Now;
                    usuarioComplejo.fecha_alta = usuarioComplejo.FechaModificacion;

                    respuesta = servicio.InsertarUsuario(usuarioComplejo, 1);
                }
                if (respuesta.Id != 0)
                {

                    Metodos.divMensaje(Constantes.Warning, ((Modo == ModoRegistro.Nuevo ? mensajeInsertado : mensajeActualizado + " " + usuarioComplejo.username)), PnlMsg, Constantes.Advertencia);
                    //  mensaje(string.Format((Modo == ModoRegistro.Nuevo ? mensajeInsertado : mensajeActualizado), usuarioComplejo.username));
                    usua.Nombres = usuarioComplejo.NombreCompleto;
                    usua.ID = int.Parse(usuarioComplejo.id_usuario.ToString());
                    usua.FechaSistema = System.DateTime.Now;
                    usua.IdRol = int.Parse(usuarioComplejo.id_rol.ToString());
                    usua.Cedula = IdentificacionEdicion.Text;
                    usua.Email = CuentaCorreoEdicion.Text;
                    usua.Telefono = txtTelefono.Text;
                    usua.Username = usuarioComplejo.username;
                    usua.Activo = usuarioComplejo.activo.Value;
                    usua.Cedula = usuarioComplejo.numero_identificacion;
                    if (ro.Exits(usuarioComplejo.IdRol.Value) == 0)
                    {
                        per.Id = int.Parse(usuarioComplejo.id_rol.ToString());
                        per.Descripcion = Generals.business.Entities.Roles.GetRol(usuarioComplejo.id_rol.Value).Descripcion;
                        ro.add(per);
                    }

                    if (BllUsuarios.GetUsuario(usuarioComplejo.id_usuario).ID ==null)
                    {
                        Dm.Add(usua);
                    }
                    //Búsqueda.Visible = true;
                    //Edicion.Visible = false;
                    Modo = ModoRegistro.Consulta;
                    return true;
                }
                else
                    Metodos.divMensaje(Constantes.Warning, respuesta.Mensaje, PnlMsg, Constantes.Advertencia);
                // mensaje(respuesta.Mensaje);
                UpdateNew.Update();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarDatos();", true);
            }
            else
                Metodos.divMensaje(Constantes.Warning, noToken, PnlMsg, Constantes.Advertencia);
            //mensaje(noToken);
            UpdateNew.Update();
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarDatos();", true);
            return false;
        }

        /// <summary>
        /// Realiza el proceso de asignacion de valores a los controles que dependen
        /// de las propiedades del rol
        /// </summary>
        private void ModificarRol()
        {
            if (Seleccionado(RolEdicion))
            {
                Generals.business.UserEntities.Roles rol = ListaRoles.Where(p => p.id_rol == ObtenerSeleccionCombo(RolEdicion).Value).First();
                //RequeridoComercio.Enabled = ComercioEdicion.Enabled = !rol.Interno && PuedeCrear;
                //FilaGenerar.Visible = rol.RequiereToken;
            }
            else
            {
                // FilaGenerar.Visible = false;
            }
        }

        /// <summary>
        /// Realiza la generacion del token del usuario y se habilita para descarga
        /// </summary>
        private void GenerarToken()
        {
            Guid token = Guid.NewGuid();
            Token = token.ToString();
            TokenModificado = true;
            Response.Clear();
            Response.ContentType = "application/DAT";
            string filename = "token";
            Response.AddHeader("content-disposition", "attachment; filename=\"" + filename + ".dat\"");
            Response.Write(token.ToString());
            Response.End();
        }
        private void ConfigurarOpcionesMarterPage()
        {
            //Master.MostrarPanelObservaciones = false;
            //Master.MostrarPanelValidaciones = false;
        }
        /// <summary>
        /// Manejo de la carga de la pagina
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                if (!IsPostBack)
                {
                    Session["titulo"] = "Usuarios";
                    ConfigurarOpcionesMarterPage();
                   // ValidarAutorizacion();
                    //ValidarForma(Guardar);
                    EstadoFiltro.Items.Add(ObtenerSeleccione());
                    EstadoFiltro.Items.Add(new ListItem("Activo", "1"));
                    EstadoFiltro.Items.Add(new ListItem("Inactivo", "2"));
                    PuedeCrear = Autorizaciones.Where(p => p.Codigo == "USUCREACI").Count() != 0;
                    PuedeMantener = Autorizaciones.Where(p => p.Codigo == "USUMANTEN").Count() != 0;
                    CargarRoles();

                    MarcoExportar.Visible = false;
                    //Búsqueda.Visible = true;
                    //Edicion.Visible = false;
                    Nuevo.Visible = PuedeCrear;
                    Modo = ModoRegistro.Consulta;

                    Todos.Visible = Usuario.SuperUsuario.HasValue && Usuario.SuperUsuario.Value;
                    ConsultarTodos();
                    VisualizarResultado(true);
                    updateGrid.Update();
                    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarGrid();", true);
                }
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
                //mensaje(Constantes.errorGeneral);
            }
        }

        /// <summary>
        /// Manejo del clic boton de consulta de usuarios
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void Buscar_Click(object sender, EventArgs e)
        {
            try
            {
                Consultar();
                ResultadoUsuarios.Columns[ResultadoUsuarios.Columns.Count - 1].Visible = true;
                VisualizarResultado(true);
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
                // mensaje(Constantes.errorGeneral);
            }
        }

        protected void Todos_Click(object sender, EventArgs e)
        {
            try
            {
                LimpiarBusqueda();
                ConsultarTodos();
                ResultadoUsuarios.Columns[ResultadoUsuarios.Columns.Count - 1].Visible = true;
                VisualizarResultado(true);
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
                // mensaje(Constantes.errorGeneral);
            }
        }

        /// <summary>
        /// Manejo del clic del boton limpiar
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void Limpiar_Click(object sender, EventArgs e)
        {
            try
            {
                LimpiarBusqueda();
                updateGrid.Update();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarGrid();", true);
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
                // mensaje(Constantes.errorGeneral);
                updateGrid.Update();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarGrid();", true);
            }
        }



        private void LimpiarBusqueda()
        {
            UsuarioFiltro.Text = "";
            ApellidosFiltro.Text = "";
            CuentaCorreoFiltro.Text = "";
            NombresFiltro.Text = "";
            IdentificacionFiltro.Text = "";
            //if (ComercioFiltro.Enabled)
            //    ComercioFiltro.SelectedIndex = 0;
            RolFiltro.SelectedIndex = 0;
            EstadoFiltro.SelectedIndex = 0;
            MarcoExportar.Visible = false;
        }

        /// <summary>
        /// Manejo del clic del boton nuevo
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void Nuevo_Click(object sender, EventArgs e)
        {
            try
            {
                NuevoUsuario();
                UpdateNew.Update();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarDatos();", true);
                //Búsqueda.Visible = false;
                //Edicion.Visible = true;

            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
                //mensaje(Constantes.errorGeneral);
            }
        }

        /// <summary>
        /// Manejo del clic del boton guardar
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void Guardar_Click(object sender, EventArgs e)
        {
            try
            {
                Guardar.Enabled = false;
                if (GuardarUsuario())
                {
                    ConsultarTodos();
                    VisualizarResultado(false);
                }
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
                //mensaje(Constantes.errorGeneral);
                UpdateNew.Update();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarDatos();", true);
            }
            finally
            {
                Guardar.Enabled = true;
            }
        }

        /// <summary>
        /// Manejo de la seleccion del combo de roles
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void RolEdicion_SelectedIndexChanged(object sender, EventArgs e)
        {
            try
            {
                ModificarRol();
                //txtCargo.Text= "JECUTIVO COMERCIAL";
                //if (RolEdicion.SelectedValue=="4")
                //    rowGestoresEc.Visible =true;
                //else
                //    rowGestoresEc.Visible = false;

            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
                // mensaje(Constantes.errorGeneral);
            }
        }




        /// <summary>
        /// Manejo del clic del boton de generacion de tokens
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void Generar_Click(object sender, EventArgs e)
        {
            try
            {
                GenerarToken();
            }
            catch (System.Threading.ThreadAbortException ex1)
            {
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
                //LanzarMensaje(Constantes.errorGeneral, TipoMensaje.Error);
                // mensaje(Constantes.errorGeneral);
            }
        }

        /// <summary>
        /// Manejo de la seleccion de edicion de usuario en la tabla de resultados
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void ResultadoUsuarios_RowCommand(object sender, GridViewCommandEventArgs e)
        {
            try
            {
                if (e.CommandName == "Editar")
                {
                    IdUsuarioEdicion = long.Parse((ResultadoUsuarios.DataKeys[int.Parse(e.CommandArgument.ToString())]["Id_Usuario"]).ToString());
                    Generals.business.UserEntities.Usuarios usuario = ListaUsuarios.Find(p => p.id_usuario == IdUsuarioEdicion);
                    Modo = ModoRegistro.Modificacion;
                    this.Form.DefaultButton = Guardar.UniqueID;
                    UsuarioEdicion.Text = usuario.username;
                    UsuarioEdicion.Enabled = false;
                    LimpiarEdicion.Visible = false;
                    ApellidosEdicion.Text = usuario.ap_paterno;
                    NombresEdicion.Text = usuario.nombre;
                    CuentaCorreoEdicion.Text = usuario.correo_electronico;
                    txtidoficina.Text = usuario.id_oficina.ToString();
                    txtTelefono.Text = usuario.tel_contacto;
                    IdRolEdicion = usuario.IdRol.HasValue ? usuario.IdRol.Value : 0;
                    RolEdicion.SelectedValue = IdRolEdicion.ToString();
                    IdentificacionEdicion.Text = usuario.numero_identificacion;
                    Token = usuario.Token;
                    Clave = usuario.password;
                    ResetearClave.Checked = false;
                    Activo.Checked = usuario.activo.HasValue ? usuario.activo.Value : false;
                    TokenModificado = false;

                    HabilitarCampos();
                    ModificarRol();
                    //Búsqueda.Visible = false;
                    //Edicion.Visible = true;
                    //FilaResetear.Visible = true;
                    //if (BllUsuarios.GetUsuarios(usuario.username).UsuaCodi != 0)
                    //{
                    //    Dm = BllUsuarios.GetUsuarios(usuario.username);
                    //    txtEspecialidad.Text = Dm.Especialidad;
                    //    txtRegistroMedico.Text = Dm.RegistroMedico;
                    //    txtLicencia.Text = Dm.Licencia;

                    //}
                    UpdateNew.Update();
                    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarDatos();", true);
                }
                if (e.CommandName == "Cambiar")
                {
                    IdUsuarioEdicion = long.Parse((ResultadoUsuarios.DataKeys[int.Parse(e.CommandArgument.ToString())]["Id_Usuario"]).ToString());
                    Generals.business.UserEntities.Usuarios usuario = ListaUsuarios.Find(p => p.id_usuario == IdUsuarioEdicion);
                    Session["UsuarioModificacion"] = usuario;
                    Response.Redirect("CambioPassword.aspx", false);

                }
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
                //mensaje(Constantes.errorGeneral);
            }
        }
        /// <summary>
        /// Manejo de la paginacion de la tabla de resultados
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void ResultadoUsuarios_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try
            {
                ResultadoUsuarios.PageIndex = e.NewPageIndex;
                VisualizarResultado(false);
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
                //mensaje(Constantes.errorGeneral);
            }
        }

        /// <summary>
        /// Manejo del clic del boton de limpiar controles de edicion de usuario
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void LimpiarEdicion_Click(object sender, EventArgs e)
        {
            try
            {
                NuevoUsuario();
                UpdateNew.Update();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarDatos();", true);
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
                //mensaje(Constantes.errorGeneral);
                UpdateNew.Update();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarDatos();", true);
            }
        }

        /// <summary>
        /// Manejo de clic del boton de cancelacion de edicion de usuario
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void CancelarEdicion_Click(object sender, EventArgs e)
        {
            try
            {
                //Búsqueda.Visible = true;
                //Edicion.Visible = false;
                if (Clave == "" && Modo == ModoRegistro.Modificacion)
                {
                    Metodos.divMensaje(Constantes.Danger, string.Format(claveGuardar, UsuarioEdicion.Text), PnlMsg, Constantes.Fallo);
                    // mensaje(string.Format(claveGuardar, UsuarioEdicion.Text));
                    updateGrid.Update();
                    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarGrid();", true);
                }
                else if (TokenModificado && Modo == ModoRegistro.Modificacion)
                {
                    Metodos.divMensaje(Constantes.Danger, string.Format(tokenGuardar, UsuarioEdicion.Text), PnlMsg, Constantes.Fallo);
                    //mensaje(string.Format(tokenGuardar, UsuarioEdicion.Text));
                    updateGrid.Update();
                    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarGrid();", true);
                }
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
                //mensaje(Constantes.errorGeneral);
                UpdateNew.Update();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarGrid();", true);
            }

            updateGrid.Update();
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarGrid();", true);
        }

        /// <summary>
        /// Manejo de clic del boton salir de la pagina
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void Salir_Click(object sender, EventArgs e)
        {
            SalirOpcion();
        }

        /// <summary>
        /// Manejo de clic del boton exportar de los resultados
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void Exportar_Click(object sender, EventArgs e)
        {
            Exportar(ListaUsuarios, ResultadoUsuarios, "Usuarios");
        }

        protected void ResultadoUsuarios_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.Header)
            {
                CambiarEstiloCabecera(e.Row);
                updateGrid.Update();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarGrid();", true);
            }
            if (e.Row.RowType == DataControlRowType.DataRow)
            {
                e.Row.Cells[3].Text = PartirCadena(e.Row.Cells[3].Text);
                e.Row.Cells[5].Text = PartirCadena(e.Row.Cells[5].Text);
                updateGrid.Update();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarGrid();", true);
            }
        }
        #endregion

        protected void TxtBusqueda_TextChanged(object sender, EventArgs e)
        {
            try
            {
                // ConsultarXTodos();
                if (TxtBusqueda.Text != "")
                {
                    ConsultarTodos();
                    ListaUsuarios = ListaUsuarios.Where(p => p.NombreCompleto.ToString().Contains(TxtBusqueda.Text)
                        || p.correo_electronico.Contains(TxtBusqueda.Text)
                        || p.numero_identificacion.Contains(TxtBusqueda.Text) || p.tel_contacto.Contains(TxtBusqueda.Text)
                        || p.username.Contains(TxtBusqueda.Text)
                        || p.nombre.Contains(TxtBusqueda.Text) || p.Rol.Contains(TxtBusqueda.Text)).ToList();
                    ResultadoUsuarios.Columns[ResultadoUsuarios.Columns.Count - 1].Visible = true;
                    VisualizarResultado(true);
                    updateGrid.Update();
                    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarGrid();", true);
                }
                else
                {
                    ConsultarTodos();
                }


            }
            catch (Exception)
            {

                throw;
            }
        }

        private void ConsultarXTodos()
        {
            Generals.business.UserEntities.Users servicio = new Generals.business.UserEntities.Users();
            servicio.IdServicio = 1;
            servicio.Login = TxtBusqueda.Text;
            servicio.Nombres = TxtBusqueda.Text;
            servicio.Apellidos = TxtBusqueda.Text;
            //servicio.IdRol = ObtenerSeleccionCombo(RolFiltro);
            servicio.Mantenimiento = !PuedeCrear;
            servicio.IdServicio = 1;
            servicio.IdRolCreador = !PuedeCrear ? RolServicio.Value : (long?)null;
            servicio.Identificacion = TxtBusqueda.Text;
            //int? activo = ObtenerSeleccionCombo(TxtBusqueda.Text);
            //servicio.Activo = activo.HasValue ? (activo.Value == 1 ? true : false) : (bool?)null;
            servicio.CuentaCorreo = TxtBusqueda.Text;

            ListaUsuarios = servicio.ConsultarUsuarios().ToList();
            ListaUsuarios = ListaUsuarios.Where(p => p.activo == p.activo).ToList();
            ResultadoUsuarios.PageIndex = 0;
        }

        protected void BtnCambiarClave_Command(object sender, CommandEventArgs e)
        {

        }
    }
}