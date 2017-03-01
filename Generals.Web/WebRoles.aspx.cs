using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.UserEntities;
using Generals.business.Entities;
using Generals.business.Common;
namespace BrakGeWeb
{
    public partial class WebRoles : PaginaBase
    {
        BllRoles.Perfile ro = new BllRoles.Perfile();
        BllRoles obj = new BllRoles();
        #region "Constantes"
        /// <summary>
        /// Mensaje de insercion correcta del usuario
        /// </summary>
        public const string mensajeInsertado = "Se ingresó correctamente el rol {0}";
        /// <summary>
        /// Mensaje de actualizacion correcta del usuario
        /// </summary>
        public const string mensajeActualizado = "Se actualizó correctamente el rol {0}";
        public const string mensajeOpciones = "Es obligatoria la selección de por lo menos una opción";
        public const string cadenaAutorizacion = "Autorizacion";
        public const string cadenaInterno = "Interno";
        #endregion

        #region "Propiedades"
        /// <summary>
        /// Lista de Roles consultads segun el filtro
        /// </summary>
        public List<Generals.business.UserEntities.Roles> ListaRoles { get { return (List<Generals.business.UserEntities.Roles>)Session["roles"]; } set { Session.Add("roles", value); } }
        public List<Opciones> ListaOpciones { get { return (List<Opciones>)Session["opcionesedicion"]; } set { Session.Add("opcionesedicion", value); } }
        public List<AutorizacionesOpcion> ListaAutorizaciones { get { return (List<AutorizacionesOpcion>)Session["autorizacionesedicion"]; } set { Session.Add("autorizacionesedicion", value); } }
        /// <summary>
        /// Modo de acceso para controlar el evento de persistencia
        /// </summary>
        public ModoRegistro Modo { get { return (ModoRegistro)ViewState["modo"]; } set { ViewState.Add("modo", value.GetHashCode()); } }
        /// <summary>
        /// Identificador del usuario que se encuentra en edicion
        /// </summary>
        public long IdRolEdicion { get { return (long)ViewState["idrol"]; } set { ViewState.Add("idrol", value); } }


        #endregion

        #region "Métodos Privados"

        /// <summary>
        /// Realiza la consulta de Roles de acuerdo a los filtros establecidos
        /// </summary>
        private void Consultar()
        {

            Generals.business.UserEntities.Rol servicio = new Generals.business.UserEntities.Rol();
            servicio.Nombre = NombreFiltro.Text;
            servicio.IdServicio = 1;
            ListaRoles = new List<Generals.business.UserEntities.Roles>();
            List<Generals.business.UserEntities.Roles> roles = servicio.ConsultarRoles().ToList();
            if (base.Autorizaciones.Where(p => p.Codigo == "ROLINTERNO").Count() != 0)
            {
                ListaRoles = roles.Where(p => p.Interno == true).ToList();
            }
            if (base.Autorizaciones.Where(p => p.Codigo == "ROLEXTERNO").Count() != 0)
            {
                ListaRoles.AddRange(roles.Where(p => p.Interno == false).ToList());
            }
            ResultadoRoles.PageIndex = 0;
            updateGrid.Update();
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarGrid();", true);

        }

        /// <summary>
        /// Asigna visualmente los resultados de la consulta a la tabla de Roles
        /// </summary>
        private void VisualizarResultado(bool Mensaje)
        {
            MarcoExportar.Visible = ListaRoles.Count != 0;
            if (ListaRoles.Count == 0 && Mensaje)
            {
                Metodos.divMensaje(Constantes.Warning, Constantes.noRegistros, PnlMsg, Constantes.Advertencia);
                //mensaje(Constantes.noRegistros);
                updateGrid.Update();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarGrid();", true);
            }
            else
            {
                ResultadoRoles.DataSource = ListaRoles;
                ResultadoRoles.DataBind();
                updateGrid.Update();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarGrid();", true);
            }
        }


        /// <summary>
        /// Prepara los controles de edicion de usuario para insercion
        /// </summary>
        private void NuevoRol()
        {
            Modo = ModoRegistro.Nuevo;
            NombreEdicion.Text = "";
            RequiereTokenEdicion.Checked = false;
            LlenarTipoRol(-1);
            NivelCreadorEdicion.SelectedIndex = 0;
            LimpiarEdicion.Visible = true;
        }

        /// <summary>
        /// Realiza la actualizacion o insercion de un usuario
        /// </summary>
        private bool GuardarRol()
        {

            Generals.business.UserEntities.Rol servicio = new Generals.business.UserEntities.Rol();
            Generals.business.UserEntities.Roles Rol = new Generals.business.UserEntities.Roles();
            Rol.desc_rol = NombreEdicion.Text;
            Rol.NivelCreador = short.Parse(NivelCreadorEdicion.SelectedValue);
            Rol.RequiereToken = RequiereTokenEdicion.Checked;
            Rol.Interno = TipoRolEdicion.SelectedItem.Text == cadenaInterno;
            List<Opciones> opciones = new List<Opciones>();
            List<AutorizacionesOpcion> autorizaciones = new List<AutorizacionesOpcion>();
            ValidarOpcionesSeleccionadas(ArbolOpciones.Nodes[0], opciones, autorizaciones);
            if (opciones.Count == 0)
            {
                Metodos.divMensaje(Constantes.Warning, mensajeOpciones, PnlMsg, Constantes.Advertencia);
                //mensaje(mensajeOpciones);

                return false;
            }
            foreach (var item in opciones)
                Rol.Opciones.Add(item);
            foreach (var item in autorizaciones)
                Rol.AutorizacionesOpcion.Add(item);

            //Rol.Opciones =  opciones.ToArray();
            //Rol.AutorizacionesOpcion = autorizaciones.ToArray();
            Rol.IdServicio = 1;
            long idrol = 0;
            servicio.IdServicio = Rol.IdServicio;
            string Mensaje = "";
            if (Modo == ModoRegistro.Modificacion)
            {
                Rol.IdUsuarioModificacion = Usuario.id_usuario;
                Rol.id_rol = IdRolEdicion;
                idrol = servicio.ActualizarRol(Rol, ref Mensaje);
                if (obj.Exits(idrol) == 1)
                {
                    ro.Id = idrol;
                    ro.Descripcion = Rol.desc_rol;
                    obj.UpdateCargo(ro);
                }
            }
            else
            {
                Rol.IdUsuarioCreacion = Usuario.id_usuario;
                Rol.IdUsuarioModificacion = Usuario.id_usuario;
                idrol = servicio.InsertarRol(Rol, ref Mensaje);
                if (obj.Exits(idrol) == 0)
                {
                    ro.Id = idrol;
                    ro.Descripcion = Rol.desc_rol;
                    obj.add(ro);
                }
            }
            if (idrol != 0)
            {
                mensaje(string.Format((Modo == ModoRegistro.Nuevo ? mensajeInsertado : mensajeActualizado), Rol.desc_rol));
                Búsqueda.Visible = true;
                //Edicion.Visible = false;
                CargarRoles();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarGrid();", true);
                return true;
            }
            else
            {
                mensaje(Mensaje);
            }
            return false;
            CleanControl(this.Controls);
            updateGrid.Update();
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarGrid();", true);
        }

        private void CargarRoles()
        {
            try
            {
                Generals.business.UserEntities.Rol servicio = new Generals.business.UserEntities.Rol();
                servicio.IdServicio = 1;
                List<Generals.business.UserEntities.Roles> roles = servicio.ConsultarRoles().ToList();
                Generals.business.UserEntities.Roles roldefecto = new Generals.business.UserEntities.Roles();

                roldefecto.id_rol = 0;
                roldefecto.desc_rol = Constantes.Seleccione;
                roles.Insert(0, roldefecto);
                NivelCreadorEdicion.DataSource = roles;
                NivelCreadorEdicion.DataBind();

                ListaOpciones = servicio.ConsultarOpciones().ToList();
                ListaAutorizaciones = servicio.ConsultarAutorizaciones().ToList();
                updateGrid.Update();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarGrid();", true);

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private void LlenarArbol(List<Opciones> listaOriginal, long? idPadre, TreeNode nodoPadre)
        {
            List<Opciones> listaNueva = listaOriginal.Where(p => idPadre.HasValue ? p.IdOpcionPadre == idPadre.Value : p.IdOpcionPadre == null).ToList();
            foreach (Opciones opcion in listaNueva)
            {
                TreeNode nodo = new TreeNode(opcion.Titulo);
                nodo.Value = opcion.Idopciones.ToString();
                nodoPadre.ChildNodes.Add(nodo);
                List<AutorizacionesOpcion> autorizaciones = ListaAutorizaciones.Where(p => p.IdOpciones == opcion.Idopciones).ToList();
                foreach (AutorizacionesOpcion autorizacion in autorizaciones)
                {
                    TreeNode nodoAutorizacion = new TreeNode(autorizacion.Titulo);
                    nodoAutorizacion.Target = cadenaAutorizacion;
                    nodoAutorizacion.Value = autorizacion.IdAutorizacion.ToString();
                    nodo.ChildNodes.Add(nodoAutorizacion);
                }
                LlenarArbol(listaOriginal, opcion.Idopciones, nodo);
                UpdateNew.Update();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarDatos();", true);
            }
        }

        private void CargarOpciones(bool interno)
        {
            ArbolOpciones.Nodes.Clear();

            //ServicioCORE.COREClient servicio = new ServicioCORE.COREClient();
            //filtro.IdServicio = ServicioPortal.IdServicio;
            string visibilidad = interno ? "I" : "E";
            List<Opciones> opciones = ListaOpciones.Where(p => p.Visibilidad == visibilidad || p.Visibilidad == "N").ToList();
            TreeNode nodo = new TreeNode("Opciones");
            nodo.Value = "0";
            ArbolOpciones.Nodes.Add(nodo);
            LlenarArbol(opciones, null, nodo);
            ArbolOpciones.ExpandAll();
            UpdateNew.Update();
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarDatos();", true);
        }

        private void SeleccionarNodos(TreeNode nodo, List<Opciones> lista, List<AutorizacionesOpcion> listaAutorizaciones)
        {

            if (nodo.Target != cadenaAutorizacion)
            {
                if (lista != null)
                {
                    nodo.Checked = lista.Where(p => p.Idopciones.ToString() == nodo.Value).Count() != 0;
                }
                else
                {
                    nodo.Checked = false;
                }
                for (int i = 0; i < nodo.ChildNodes.Count; i++)
                    SeleccionarNodos(nodo.ChildNodes[i], lista, listaAutorizaciones);
            }
            else
            {
                if (listaAutorizaciones != null)
                    nodo.Checked = listaAutorizaciones.Where(p => p.IdAutorizacion.ToString() == nodo.Value).Count() != 0;
                else
                    nodo.Checked = false;

            }

        }

        private void ValidarOpcionesSeleccionadas(TreeNode nodo, List<Opciones> listaOpciones, List<AutorizacionesOpcion> listaAutorizaciones)
        {
            if (nodo.Checked && nodo.Value != "0")
            {
                if (nodo.Target != cadenaAutorizacion)
                {
                    Opciones opcion = new Opciones();
                    opcion.Idopciones = int.Parse(nodo.Value);
                    opcion.Titulo = "";
                    //opcion.Codigo = "";
                    listaOpciones.Add(opcion);
                    UpdateNew.Update();
                    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarDatos();", true);
                }
                else
                {
                    AutorizacionesOpcion autorizacion = new AutorizacionesOpcion();
                    autorizacion.IdAutorizacion = int.Parse(nodo.Value);
                    autorizacion.Titulo = "";
                    autorizacion.Codigo = "";
                    listaAutorizaciones.Add(autorizacion);
                    UpdateNew.Update();
                    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarDatos();", true);
                }
            }
            for (int i = 0; i < nodo.ChildNodes.Count; i++)
            {
                ValidarOpcionesSeleccionadas(nodo.ChildNodes[i], listaOpciones, listaAutorizaciones);
                UpdateNew.Update();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarDatos();", true);
            }
        }

        private void LlenarTipoRol(int seleccionado)
        {
            TipoRolEdicion.Items.Clear();
            TipoRolEdicion.Items.Add(new ListItem(cadenaInterno, "0"));
            TipoRolEdicion.Items.Add(new ListItem("Externo", "1"));
            TipoRolEdicion.SelectedIndex = seleccionado;
            List<AutorizacionesOpcion> autorizaciones = Autorizaciones.Where(p => p.Codigo == "ROLEXTERNO" || p.Codigo == "ROLINTERNO").ToList();
            TipoRolEdicion.Enabled = autorizaciones.Count() != 0;
            if (autorizaciones.Count() == 1)
            {
                TipoRolEdicion.Items.RemoveAt(autorizaciones.Where(p => p.Codigo == "ROLINTERNO").Count());
                TipoRolEdicion.SelectedIndex = 0;
                UpdateNew.Update();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarDatos();", true);
            }
            if (TipoRolEdicion.SelectedIndex != -1)
            {
                CargarOpciones(TipoRolEdicion.SelectedItem.Text == cadenaInterno);
                UpdateNew.Update();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarDatos();", true);
            }
            else {
                ArbolOpciones.Nodes.Clear();
                UpdateNew.Update();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarDatos();", true);
            }


        }
        private void ConfigurarOpcionesMarterPage()
        {
            //  Master.MostrarPanelObservaciones = false;
            //  Master.MostrarPanelValidaciones = false;
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

                    Session["titulo"] = "Perfiles";
                    //ConfigurarOpcionesMarterPage();
                    ValidarAutorizacion();
                    ValidarForma(Guardar);
                    Búsqueda.Visible = true;
                    //Edicion.Visible = false;
                    MarcoExportar.Visible = false;

                    CargarRoles();
                    Consultar();
                    VisualizarResultado(true);
                }
            }
            catch (Exception ex)
            {

                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
                //mensaje(Constantes.errorGeneral);
                Log.EscribirError(ex);
            }
        }

        /// <summary>
        /// Manejo del clic boton de consulta de Roles
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void Buscar_Click(object sender, EventArgs e)
        {
            try
            {
                Consultar();
                VisualizarResultado(true);
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
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
                updateGrid.Update();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarGrid();", true);
            }
        }

        private void LimpiarBusqueda()
        {
            NombreFiltro.Text = "";
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
                NuevoRol();
                Búsqueda.Visible = false;
                UpdateNew.Update();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarDatos();", true);
                //Edicion.Visible = true;
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
                updateGrid.Update();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarGrid();", true);
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
                if (GuardarRol())
                {
                    Consultar();
                    VisualizarResultado(false);
                    updateGrid.Update();
                    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarDatos();", true);
                }
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
                updateGrid.Update();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarDatos();", true);
            }
        }

        /// <summary>
        /// Manejo de la seleccion de edicion de Rol en la tabla de resultados
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void ResultadoRoles_RowCommand(object sender, GridViewCommandEventArgs e)
        {
            if (e.CommandName == "Editar")
            {
                IdRolEdicion = (long)ResultadoRoles.DataKeys[int.Parse(e.CommandArgument.ToString())]["Id_Rol"];
                Generals.business.UserEntities.Roles Rol = ListaRoles.Find(p => p.id_rol == IdRolEdicion);
                Modo = ModoRegistro.Modificacion;
                NombreEdicion.Text = Rol.desc_rol;
                NivelCreadorEdicion.SelectedValue = Rol.NivelCreador.ToString();
                RequiereTokenEdicion.Checked = Rol.RequiereToken;
                LlenarTipoRol(Rol.Interno ? 0 : 1);

                Generals.business.UserEntities.Rol servicio = new Generals.business.UserEntities.Rol();
                servicio.IdServicio = 1;
                servicio.IdRol = IdRolEdicion;
                SeleccionarNodos(ArbolOpciones.Nodes[0], servicio.ConsultarOpcionesRol().ToList(), servicio.ConsultarAutorizaciones().ToList());
                Búsqueda.Visible = false;
                //Edicion.Visible = true;
                LimpiarEdicion.Visible = false;
                UpdateNew.Update();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarDatos();", true);
            }
        }

        /// <summary>
        /// Manejo de la paginacion de la tabla de resultados
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void ResultadoRoles_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            ResultadoRoles.PageIndex = e.NewPageIndex;
            VisualizarResultado(false);
        }

        /// <summary>
        /// Manejo del clic del boton de limpiar controles de edicion de Rol
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void LimpiarEdicion_Click(object sender, EventArgs e)
        {
            NuevoRol();
            UpdateNew.Update();
            ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarDatos();", true);
        }

        /// <summary>
        /// Manejo de clic del boton de cancelacion de edicion de usuario
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void CancelarEdicion_Click(object sender, EventArgs e)
        {
            Búsqueda.Visible = true;
            //Edicion.Visible = false;
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
            Response.Redirect("Default.aspx", false);
        }

        /// <summary>
        /// Manejo de clic del boton exportar de los resultados
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void Exportar_Click(object sender, EventArgs e)
        {
            Exportar(ListaRoles, ResultadoRoles, "Roles");
        }

        protected void ResultadoRoles_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.Header)
            {
                CambiarEstiloCabecera(e.Row);
                UpdateNew.Update();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarDatos();", true);
            }
            if (e.Row.RowType == DataControlRowType.DataRow)
            {
                e.Row.Cells[1].Text = PartirCadena(e.Row.Cells[1].Text);
                UpdateNew.Update();
                ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarDatos();", true);
            }
        }

        protected void TipoRolEdicion_SelectedIndexChanged(object sender, EventArgs e)
        {
            try
            {
                CargarOpciones(TipoRolEdicion.SelectedItem.Text == cadenaInterno);
                if (Modo == ModoRegistro.Modificacion)
                {
                    Generals.business.UserEntities.Roles Rol = ListaRoles.Find(p => p.id_rol == IdRolEdicion);
                    SeleccionarNodos(ArbolOpciones.Nodes[0], Rol.Opciones.ToList(), Rol.AutorizacionesOpcion.ToList());
                    UpdateNew.Update();
                    ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "mostrarDatos();", true);
                }
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Metodos.divMensaje(Constantes.Danger, Constantes.errorGeneral, PnlMsg, Constantes.Fallo);
            }
        }
        #endregion

        protected void NivelCreadorEdicion_SelectedIndexChanged(object sender, EventArgs e)
        {

        }
    }
}