using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web.UI;
using Generals.business.Common;
using Generals.business.UserEntities;
using System.Web.UI.WebControls;
using System.Data;
using System.Web;
using Generals.business.Data;


namespace Generals.business.Entities
{
    public class PaginaBase : Page
    {
        /// <summary>
        /// Usuario autenticado en la aplicacion
        /// </summary>
        public UserEntities.Usuarios Usuario { get { return Session["ObjUsuario"] != null ? (UserEntities.Usuarios)Session["ObjUsuario"] : null; } set { Session.Add("ObjUsuario", value); } }

        public int? IdIngreso { get { return Session["idingreso"] != null ? (int)Session["idingreso"] : (int?)null; } set { Session.Add("idingreso", value); } }
        /// <summary>
        /// Autorizaciones relacionadas al rol del usuario autenticado
        /// </summary>
        public List<AutorizacionesOpcion> Autorizaciones { get { return (List<AutorizacionesOpcion>)Session["autorizaciones"]; } set { Session.Add("autorizaciones", value); } }
        /// Realiza la visualizacion de un mensaje
        /// <summary>
        /// Opciones relacionadas al rol del usuario autenticado
        /// </summary>
        public List<Opciones> Opciones { get { return (List<Opciones>)Session["opciones"]; } set { Session.Add("opciones", value); } }

        public long? RolServicio { get { return Usuario.IdRol; } }
        /// </summary>
        /// <param name="mensaje">Mensaje que se visualiza en pantalla</param>
        public void LanzarMensaje(string mensaje, TipoMensaje tipoMensaje)
        {
            string nombreScript = string.Format("{0}alert{1}", mensaje[0], mensaje[mensaje.Length - 1]);
            string titulo = "";
            string tipo = "";
            switch (tipoMensaje)
            {
                case TipoMensaje.Advertencia:
                    titulo = "Advertencia";
                    tipo = "warning";
                    break;
                case TipoMensaje.Error:
                    titulo = "Error";
                    tipo = "error";
                    break;
                case TipoMensaje.Exito:
                    titulo = "Satisfactorio";
                    tipo = "success";
                    break;
                case TipoMensaje.Campos:
                    titulo = "Campos obligatorios";
                    tipo = "error";
                    break;
                default:
                    break;
            }
            ScriptManager.RegisterStartupScript(this, typeof(Page), nombreScript, string.Format("showDialog('{0}','{1}' ,'{2}');", titulo, mensaje, tipo), true);
        }

        // Validar fecha
        public static bool IsDate(string Texto) {
            bool isDate = true;
            try { DateTime DateValue = DateTime.ParseExact(Texto, "dd/MM/yyyy", null); }
            catch {
                isDate = false;
            }
            return isDate;
        }

        //mensaje
        public void mensaje(string pi_mensaje){
            ScriptManager.RegisterClientScriptBlock(this.Page, this.Page.GetType(), "alert", "alert('" + pi_mensaje + "');", true);
        }
        public void CambiarEstiloCabecera(GridViewRow fila)
        {
            fila.Cells[0].CssClass = "rounded-company";
            fila.Cells[fila.Cells.Count - 1].CssClass = "rounded-q4";
            for (int i = 1; i < fila.Cells.Count - 1; i++)
            {
                fila.Cells[i].CssClass = "rounded";
            }
            GridView padre = (GridView)fila.Parent.Parent;
            if (!padre.Columns[fila.Cells.Count - 1].Visible)
            {
                bool modificado = false;
                int cont = fila.Cells.Count - 2;
                while (!modificado)
                {
                    if (padre.Columns[cont].Visible)
                    {
                        fila.Cells[cont].CssClass = "rounded-q4";
                        modificado = true;
                    }
                    cont--;
                }
            }
        }

        public void CleanControl(ControlCollection controles)
        {
            foreach (Control control in controles)
            {
                if (control is TextBox)
                    ((TextBox)control).Text = string.Empty;
                else if (control is DropDownList)
                    ((DropDownList)control).ClearSelection();
                else if (control is RadioButtonList)
                    ((RadioButtonList)control).ClearSelection();
                else if (control is CheckBoxList)
                    ((CheckBoxList)control).ClearSelection();
                else if (control is RadioButton)
                    ((RadioButton)control).Checked = false;
                else if (control is CheckBox)
                    ((CheckBox)control).Checked = false;
                else if (control.HasControls())
                    //Esta linea detécta un Control que contenga otros Controles
                    //Así ningún control se quedará sin ser limpiado.
                    CleanControl(control.Controls);
            }
        }

        public string PartirCadena(string cadena)
        {
            string retorno = "";
            if (cadena.Length > 30)
            {
                int longitud = cadena.Length;
                while (longitud > 30)
                {
                    retorno += (retorno.Length == 0 ? string.Empty : " ") + cadena.Substring(0, 30);
                    cadena = cadena.Substring(30);
                    longitud = cadena.Length;
                }
                retorno += ' ' + cadena;
            }
            else
                retorno = cadena;
            return retorno;
        }

        public void Exportar<T>(IEnumerable<T> Lista, GridView Tabla, string Titulo)
        {
            Exportar(Lista, Tabla, Titulo, Response);
        }
        public void Exportar<T>(IEnumerable<T> Lista, GridView Tabla, string Titulo, HttpResponse response)
        {
            try
            {
                DataTable dt = ConvertirLista(Lista, Tabla);
                ExportarDatos(response, dt, Titulo);
            }
            catch (System.Threading.ThreadAbortException)
            {
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                LanzarMensaje(Constantes.errorGeneral, TipoMensaje.Error);
            }
        }
        /// <summary>
        /// Convierte una lista generica en un DataTable
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="lista">Lista generica a transformar</param>
        /// <returns>DataTable</returns>
        public DataTable ConvertirLista<T>(IEnumerable<T> lista, GridView resultados)
        {
            var tabla = new DataTable();
            System.Reflection.PropertyInfo[] propiedades = typeof(T).GetProperties();
            for (int i = 0; i < resultados.Columns.Count; i++)
            {
                if (resultados.Columns[i].Visible)
                {
                    string campo = resultados.Columns[i].SortExpression;
                    if (!string.IsNullOrEmpty(campo))
                    {
                        tabla.Columns.Add(new DataColumn(resultados.Columns[i].HeaderText, typeof(string)));
                    }
                }
            }
            foreach (var objeto in lista)
            {
                var row = tabla.NewRow();
                for (int i = 0; i < resultados.Columns.Count; i++)
                {
                    string campo = resultados.Columns[i].SortExpression;
                    if (!string.IsNullOrEmpty(campo) && resultados.Columns[i].Visible)
                    {
                        object valor = null;
                        if (campo.IndexOf('.') == -1)
                        {
                            System.Reflection.PropertyInfo info = propiedades.Where(p => p.Name == campo).FirstOrDefault();
                            switch (resultados.Columns[i].SortExpression)
                            {
                                case "Roles":
                                    valor = RolUsuarioServicio(objeto);
                                    break;
                                case "Usuarios":
                                    valor = UtilidadUsuario.obtenerValorPropiedad(info.GetValue(objeto, null), "Usuarios.Login");
                                    break;
                                case "Comercios":
                                    valor = UtilidadUsuario.obtenerValorPropiedad(info.GetValue(objeto, null), "Comercios.Nombre");
                                    break;
                                case "Ciudades":
                                    valor = UtilidadUsuario.obtenerValorPropiedad(info.GetValue(objeto, null), "Ciudades.Nombre");
                                    break;
                                case "Estados":
                                    valor = UtilidadUsuario.obtenerValorPropiedad(info.GetValue(objeto, null), "Estados.Nombre");
                                    break;
                                case "Mes":
                                    valor = meses[int.Parse(info.GetValue(objeto, null).ToString()) - 1];
                                    break;
                                default:
                                    valor = info.GetValue(objeto, null);
                                    break;
                            }
                        }
                        else
                        {
                            valor = Common.UtilidadUsuario.obtenerValorPropiedad(objeto, "A." + campo);
                        }
                        if (valor != null)
                        {
                            if (valor.GetType() == typeof(int) || valor.GetType() == typeof(decimal))
                                row[resultados.Columns[i].HeaderText] = string.Format("{0:N0}", valor).Replace(".", "").Replace(",", "");
                            else if (valor.GetType() == typeof(DateTime))
                                row[resultados.Columns[i].HeaderText] = string.Format("{0:dd/MM/yyyy HH:mm}", valor);
                            else
                                row[resultados.Columns[i].HeaderText] = valor.ToString();
                        }
                    }
                }
                tabla.Rows.Add(row);
            }
            return tabla;
        }

        /// <summary>
        /// Extrae el rol del usuario para el servicio de pines
        /// </summary>
        /// <param name="Origen"></param>
        /// <returns></returns>
        public string RolUsuarioServicio(Object Origen)
        {
            return ((Generals.business.UserEntities.Roles[])DataBinder.Eval(Origen, "Roles")).Where(p => p.IdServicio == 1).FirstOrDefault().desc_rol;
        }
        public string[] meses
        {
            get
            {
                return new string[] { "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" };
            }
        }
        /// <summary>
        /// Exporta archivos generados a Excel
        /// </summary>
        /// <param name="Response">Objeto response para efectuar la exportación del archivo</param>
        /// <param name="dtResultado">DataTable con la información que va a ser salvada</param>
        /// <param name="filenameHeader">Nombre del Archivo</param>
        private void ExportarDatos(HttpResponse Response, DataTable dtResultado, string filenameHeader)
        {
            try
            {
                if (dtResultado.Rows.Count > 0)
                {
                    Response.Clear();
                    Response.Charset = "UTF-8";
                    Response.AddHeader("Content-Disposition", String.Format("attachment; filename=\"Export {0}{1:yyyy-MM-dd}.xls\"", filenameHeader, DateTime.Now));
                    Response.ContentType = "application/vnd.ms-excel";
                    Response.Write(InformeBinario(dtResultado));
                    Response.Flush();
                }
                else
                {
                    LanzarMensaje("No existen datos para exportar", Common.TipoMensaje.Advertencia);
                    return;
                }

                Response.End();
            }
            finally
            {
                dtResultado = null;
            }
        }
        public static string InformeBinario(DataTable tabla)
        {
            System.Text.StringBuilder excelDoc = new System.Text.StringBuilder();
            const string startExcelXML = "<xml version>\r\n<Workbook " +
                  "xmlns=\"urn:schemas-microsoft-com:office:spreadsheet\"\r\n" +
                  " xmlns:o=\"urn:schemas-microsoft-com:office:office\"\r\n " +
                  "xmlns:x=\"urn:schemas-    microsoft-com:office:" +
                  "excel\"\r\n xmlns:ss=\"urn:schemas-microsoft-com:" +
                  "office:spreadsheet\">\r\n <Styles>\r\n " +
                  "<Style ss:ID=\"Default\" ss:Name=\"Normal\">\r\n " +
                  "<Alignment ss:Vertical=\"Bottom\"/>\r\n <Borders/>" +
                  "\r\n <Font/>\r\n <Interior/>\r\n <NumberFormat/>" +
                  "\r\n <Protection/>\r\n </Style>\r\n " +
                  "<Style ss:ID=\"BoldColumn\">\r\n <Font " +
                  "x:Family=\"Swiss\" ss:Bold=\"1\"/>\r\n </Style>\r\n " +
                  "<Style     ss:ID=\"StringLiteral\">\r\n <NumberFormat" +
                  " ss:Format=\"@\"/>\r\n </Style>\r\n <Style " +
                  "ss:ID=\"Decimal\">\r\n <NumberFormat " +
                  "ss:Format=\"0.0000\"/>\r\n </Style>\r\n " +
                  "<Style ss:ID=\"Integer\">\r\n <NumberFormat " +
                  "ss:Format=\"0\"/>\r\n </Style>\r\n <Style " +
                  "ss:ID=\"DateLiteral\">\r\n <NumberFormat " +
                  "ss:Format=\"mm/dd/yyyy;@\"/>\r\n </Style>\r\n " +
                  "</Styles>\r\n ";
            const string endExcelXML = "</Workbook>";
            int rowCount = 0;
            int sheetCount = 1;
            excelDoc.Append(startExcelXML);
            excelDoc.Append(String.Format("<Worksheet ss:Name=\"Sheet{0}\">", sheetCount));
            excelDoc.Append("<Table>");
            excelDoc.Append("<Row>");
            for (int x = 0; x < tabla.Columns.Count; x++)
            {
                excelDoc.Append("<Cell ss:StyleID=\"BoldColumn\"><Data ss:Type=\"String\">");
                excelDoc.Append(tabla.Columns[x].ColumnName);
                excelDoc.Append("</Data></Cell>");
            }
            excelDoc.Append("</Row>");
            foreach (DataRow x in tabla.Rows)
            {
                rowCount++;
                //if the number of rows is > 64000 create a new page to continue output
                if (rowCount == 64000)
                {
                    rowCount = 0;
                    sheetCount++;
                    excelDoc.Append("</Table>");
                    excelDoc.Append(" </Worksheet>");
                    excelDoc.Append(String.Format("<Worksheet ss:Name=\"Sheet{0}\">", sheetCount));
                    excelDoc.Append("<Table>");
                }
                excelDoc.Append("<Row>"); //ID=" + rowCount + "
                for (int y = 0; y < tabla.Columns.Count; y++)
                {
                    Type rowType = x[y].GetType();
                    switch (rowType.ToString())
                    {
                        case "System.String":
                            string XMLstring = x[y].ToString();
                            XMLstring = XMLstring.Trim();
                            XMLstring = XMLstring.Replace("&", "&");
                            XMLstring = XMLstring.Replace(">", ">");
                            XMLstring = XMLstring.Replace("<", "<");
                            excelDoc.Append("<Cell ss:StyleID=\"StringLiteral\">" +
                                           "<Data ss:Type=\"String\">");
                            excelDoc.Append(XMLstring);
                            excelDoc.Append("</Data></Cell>");
                            break;
                        case "System.DateTime":
                            //Excel has a specific Date Format of YYYY-MM-DD followed by  
                            //the letter 'T' then hh:mm:sss.lll Example 2005-01-31T24:01:21.000
                            //The Following Code puts the date stored in XMLDate 
                            //to the format above
                            DateTime XMLDate = (DateTime)x[y];
                            string XMLDatetoString = ""; //Excel Converted Date
                            XMLDatetoString = String.Format("{0}-{1}-{2}T{3}:{4}:{5}.000", XMLDate.Year, (XMLDate.Month < 10 ? "0" +
                                                                               XMLDate.Month : XMLDate.Month.ToString()), (XMLDate.Day < 10 ? "0" +
                                                                               XMLDate.Day : XMLDate.Day.ToString()), (XMLDate.Hour < 10 ? "0" +
                                                                               XMLDate.Hour : XMLDate.Hour.ToString()), (XMLDate.Minute < 10 ? "0" +
                                                                               XMLDate.Minute : XMLDate.Minute.ToString()), (XMLDate.Second < 10 ? "0" +
                                                                               XMLDate.Second : XMLDate.Second.ToString()));
                            excelDoc.Append("<Cell ss:StyleID=\"DateLiteral\">" +
                                         "<Data ss:Type=\"DateTime\">");
                            excelDoc.Append(XMLDatetoString);
                            excelDoc.Append("</Data></Cell>");
                            break;
                        case "System.Boolean":
                            excelDoc.Append("<Cell ss:StyleID=\"StringLiteral\">" +
                                        "<Data ss:Type=\"String\">");
                            excelDoc.Append(x[y].ToString());
                            excelDoc.Append("</Data></Cell>");
                            break;
                        case "System.Int16":
                        case "System.Int32":
                        case "System.Int64":
                        case "System.Byte":
                            excelDoc.Append("<Cell ss:StyleID=\"Integer\">" +
                                    "<Data ss:Type=\"Number\">");
                            excelDoc.Append(x[y].ToString());
                            excelDoc.Append("</Data></Cell>");
                            break;
                        case "System.Decimal":
                        case "System.Double":
                            excelDoc.Append("<Cell ss:StyleID=\"Decimal\">" +
                                  "<Data ss:Type=\"Number\">");
                            excelDoc.Append(x[y].ToString());
                            excelDoc.Append("</Data></Cell>");
                            break;
                        case "System.DBNull":
                            excelDoc.Append("<Cell ss:StyleID=\"StringLiteral\">" +
                                  "<Data ss:Type=\"String\">");
                            excelDoc.Append("");
                            excelDoc.Append("</Data></Cell>");
                            break;
                        default:
                            throw (new Exception(rowType + " not handled."));
                    }
                }
                excelDoc.Append("</Row>");
            }
            excelDoc.Append("</Table>");
            excelDoc.Append(" </Worksheet>");
            excelDoc.Append(endExcelXML);
            return excelDoc.ToString();
        }

        /// <summary>
        /// Realiza la validacion de acceso a la pagina especifica por parte del usuario
        /// </summary>
        public void ValidarAutorizacion()
        {
            string sesionactual = String.Format("{0}-{1}-{2}", Session.SessionID, Usuario.id_usuario, 1);
            Sesiones sesionControlador = Sesiones.Instancia();
            sesionControlador.ValidarSesion(sesionactual, ((PaginaBase)Page));
            string ruta = this.Request.Url.Segments[this.Request.Url.Segments.Length - 1];
            string nombreArhivo=null;
           // nombreArhivo ="../"+ruta;
            nombreArhivo =  ruta;
            Opciones opcion = Opciones.FirstOrDefault(p => p.Pagina == nombreArhivo && (string.IsNullOrEmpty(p.Parametros) ? true : p.Parametros == this.Request.QueryString.ToString()));            

            if (opcion == null)
            {
                Response.Redirect("Default.aspx", false);
            }
            else
            {
                Generals.business.UserEntities.Ingreso servicio = new Generals.business.UserEntities.Ingreso();
                Navegaciones navegacion = new Navegaciones() { Fecha = DateTime.Now };
                if (IdIngreso != null)
                {
                    string mensaje = "";
                    navegacion.IdIngreso = IdIngreso.Value;
                    navegacion.Pagina = ruta;
                    servicio.InsertarNavegacion(navegacion, ref mensaje);
                }
                ScriptManager.RegisterStartupScript(this, typeof(Page), "redireccion", "Redireccionar('../portal.htm');", true);
            }
        }

        public void ValidarForma(Button boton)
        {
            boton.Attributes.Add("onclick", string.Format("validarForma('{0}', '{1}'); return Page_IsValid;", boton.ClientID, boton.ValidationGroup));
        }
       
        /// <summary>
        /// Metodo generico para salir de una opcion de menu
        /// </summary>
        protected void SalirOpcion()
        {
            Response.Redirect("Default.aspx", false);
        }
        /// <summary>
        /// Obtiene el id seleccionado de un combo cargado con registros referenciales
        /// </summary>
        /// <param name="combo">Objeto que se evalua</param>
        /// <returns></returns>
        public int? ObtenerSeleccionCombo(DropDownList combo)
        {
            return Seleccionado(combo) ? int.Parse(combo.SelectedItem.Value) : (int?)null;
        }
        /// <summary>
        /// Verifica la seleccion de un valor de una lista de seleccion
        /// </summary>
        /// <param name="combo">Combo que se verifica</param>
        /// <returns>true si es seleccionado, false si no</returns>
        protected bool Seleccionado(DropDownList combo)
        {
            return combo.SelectedIndex != -1 && combo.SelectedIndex != 0;
        }
        /// <summary>
        /// Retorna el elemento seleccione aplicado por defecto a los combos
        /// </summary>
        /// <returns></returns>
        public ListItem ObtenerSeleccione()
        {
            return new ListItem(Constantes.Seleccione, "0");
        }



        
    }
}
