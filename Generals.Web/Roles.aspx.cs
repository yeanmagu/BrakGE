using System;
using System.Collections.Generic;
using System.Collections;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.UserEntities;
using Generals.business.Entities;
using Generals.business.Common;
namespace BrakGeWeb
{
    /// <summary>
    /// Pagina que administra la administracion de Roles
    /// </summary>
    public partial class Roles : PaginaBase
    {
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
            if (base.Autorizaciones.Where(p=> p.Codigo == "ROLINTERNO").Count() !=0)
            {
                ListaRoles = roles.Where(p => p.Interno == true).ToList();
            }
            if (base.Autorizaciones.Where(p => p.Codigo == "ROLEXTERNO").Count() != 0)
            {                                    
                ListaRoles.AddRange( roles.Where(p => p.Interno == false).ToList());
            }
            ResultadoRoles.PageIndex = 0;
        }

        /// <summary>
        /// Asigna visualmente los resultados de la consulta a la tabla de Roles
        /// </summary>
        private void VisualizarResultado(bool mensaje)
        {
            MarcoExportar.Visible = ListaRoles.Count != 0;
            if (ListaRoles.Count == 0 && mensaje)
            {
                LanzarMensaje(Constantes.noRegistros, TipoMensaje.Advertencia);
            }
            else
            {
                ResultadoRoles.DataSource = ListaRoles;
                ResultadoRoles.DataBind();
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
            Rol.Interno = TipoRolEdicion.SelectedItem.Text ==cadenaInterno;
            List<Opciones> opciones = new List<Opciones>();
            List<AutorizacionesOpcion> autorizaciones = new List<AutorizacionesOpcion>();
            ValidarOpcionesSeleccionadas(ArbolOpciones.Nodes[0], opciones,autorizaciones);
            if (opciones.Count==0)
            {
                LanzarMensaje(mensajeOpciones, TipoMensaje.Error);
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
            string mensaje = "";            
            if (Modo == ModoRegistro.Modificacion)
            {                
                Rol.IdUsuarioModificacion = Usuario.id_usuario;
                Rol.id_rol = IdRolEdicion;               
                idrol = servicio.ActualizarRol(Rol, ref mensaje);
            }
            else
            {
                Rol.IdUsuarioCreacion = Usuario.id_usuario;
                Rol.IdUsuarioModificacion = Usuario.id_usuario;                
                 idrol= servicio.InsertarRol(Rol,ref mensaje);
            }
            if (idrol != 0)
            {
                LanzarMensaje(string.Format((Modo == ModoRegistro.Nuevo ? mensajeInsertado : mensajeActualizado), Rol.desc_rol), TipoMensaje.Exito);
                Búsqueda.Visible = true;
                Edicion.Visible = false;
                CargarRoles();
                return true;
            }
            else
            {
                LanzarMensaje(mensaje, TipoMensaje.Error);
            }
            return false;
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
                List<AutorizacionesOpcion> autorizaciones = ListaAutorizaciones.Where(p=> p.IdOpciones == opcion.Idopciones).ToList();
                foreach (AutorizacionesOpcion autorizacion in autorizaciones)
                {
                    TreeNode nodoAutorizacion = new TreeNode(autorizacion.Titulo);
                    nodoAutorizacion.Target = cadenaAutorizacion;
                    nodoAutorizacion.Value = autorizacion.IdAutorizacion.ToString();                 
                        nodo.ChildNodes.Add(nodoAutorizacion);
                }
                LlenarArbol(listaOriginal,opcion.Idopciones,nodo);
            }
        }

        private void CargarOpciones(bool interno)
        {
            ArbolOpciones.Nodes.Clear();
          
            //ServicioCORE.COREClient servicio = new ServicioCORE.COREClient();
            //filtro.IdServicio = ServicioPortal.IdServicio;
            string visibilidad = interno ? "I" : "E";
            List<Opciones> opciones =  ListaOpciones.Where(p => p.Visibilidad == visibilidad || p.Visibilidad == "N").ToList();            
            TreeNode nodo = new TreeNode("Opciones");
            nodo.Value = "0";
            ArbolOpciones.Nodes.Add(nodo);
            LlenarArbol(opciones, null, nodo);
            ArbolOpciones.ExpandAll();
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
                }
                else
                {
                    AutorizacionesOpcion autorizacion = new AutorizacionesOpcion();
                    autorizacion.IdAutorizacion = int.Parse(nodo.Value);
                    autorizacion.Titulo = "";
                    autorizacion.Codigo = "";
                    listaAutorizaciones.Add(autorizacion);
                }
            }
            for (int i = 0; i < nodo.ChildNodes.Count; i++)
            {
                ValidarOpcionesSeleccionadas(nodo.ChildNodes[i], listaOpciones, listaAutorizaciones);
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
            }
            if (TipoRolEdicion.SelectedIndex != -1)
                CargarOpciones(TipoRolEdicion.SelectedItem.Text == cadenaInterno);
            else
                ArbolOpciones.Nodes.Clear();
        }
        private void ConfigurarOpcionesMarterPage()
        {
            Master.MostrarPanelObservaciones = false;
            Master.MostrarPanelValidaciones = false;
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
                    //ConfigurarOpcionesMarterPage();
                    ValidarAutorizacion();
                    ValidarForma(Guardar);
                    Búsqueda.Visible = true;
                    Edicion.Visible = false;
                    MarcoExportar.Visible = false;
                    CargarRoles();                    
                }
            }
            catch (Exception ex)
            {
                LanzarMensaje(Constantes.errorGeneral, TipoMensaje.Error);
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
                LanzarMensaje(Constantes.errorGeneral, TipoMensaje.Error);
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
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                LanzarMensaje(Constantes.errorGeneral, TipoMensaje.Error);
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
                Edicion.Visible = true;
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                LanzarMensaje(Constantes.errorGeneral, TipoMensaje.Error);
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
                }
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                LanzarMensaje(Constantes.errorGeneral, TipoMensaje.Error);
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
                Edicion.Visible = true;
                LimpiarEdicion.Visible = false;
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
        }

        /// <summary>
        /// Manejo de clic del boton de cancelacion de edicion de usuario
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void CancelarEdicion_Click(object sender, EventArgs e)
        {
            Búsqueda.Visible = true;
            Edicion.Visible = false;
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
            }
            if (e.Row.RowType == DataControlRowType.DataRow)
            {
                e.Row.Cells[1].Text = PartirCadena(e.Row.Cells[1].Text );
            }
        }

        protected void TipoRolEdicion_SelectedIndexChanged(object sender, EventArgs e)
        {
            try
            {
                CargarOpciones(TipoRolEdicion.SelectedItem.Text == cadenaInterno);
                if (Modo == ModoRegistro.Modificacion)
                {
                    Generals.business .UserEntities.Roles Rol = ListaRoles.Find(p => p.id_rol == IdRolEdicion);
                    SeleccionarNodos(ArbolOpciones.Nodes[0], Rol.Opciones.ToList(), Rol.AutorizacionesOpcion.ToList());
                }
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                LanzarMensaje(Constantes.errorGeneral, TipoMensaje.Error);
            }
        }
        #endregion
    }
}