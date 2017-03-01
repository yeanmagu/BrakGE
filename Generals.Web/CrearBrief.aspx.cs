using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.Entities;
using Generals.business.Common;
using System.Web;
using System.IO;

namespace BrakGeWeb
{
    public partial class CrearBrief : PaginaBase
    {
        private BllBrief Brief= new BllBrief();
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                if (!IsPostBack)
                {
                    //ValidarAutorizacion();
                    Session["Titulo"] = "Crear Brief";
                    FillBdegas();
                   FillBrief();
                    pnlGrid.Visible = true;
                    pnlDatos.Visible = false;
                }
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.errorGeneral;
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }
        protected void FillBdegas()
        {
            try
            {
                CmbBodega.DataSource = BllBodega.ToList();
                CmbBodega.DataTextField = "Nombre";
                CmbBodega.DataValueField = "Id";
                CmbBodega.DataBind();
                CmbBodega.Items.Insert(0, new ListItem("Seleccione Bodega", "0"));
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);

            }
        }
        //protected void FillSw()
        //{
        //    try
        //    {
        //        CmbSw.DataSource = BllSw.ToList();
        //        CmbSw.DataTextField = "Descripcion";
        //        CmbSw.DataValueField = "Id";
        //        CmbSw.DataBind();
        //        CmbSw.Items.Insert(0, new ListItem("Seleccione Sw", "0"));
        //    }
        //    catch (Exception ex)
        //    {
        //        Log.EscribirError(ex);

        //    }
        //}
        private void FillBrief()
        {
            try
            {
                Session["ListBrief"] = Brief.ToList();
                if (!string.IsNullOrEmpty(Session["ListBrief"].ToString()))
                {
                    GridBrief.DataSource = (List<BllBrief>)Session["ListBrief"];
                    GridBrief.DataBind();
                }
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.errorGeneral;
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }

        protected void BtnSelect_Command(object sender, CommandEventArgs e)
        {
            try
            {
                if (e.CommandName != "Page")
                {
                    BllBrief Row = new BllBrief();

                    List<BllBrief> Rows = new List<BllBrief>();

                    Rows = (List<BllBrief>)Session["ListBrief"];


                    if (Rows.Exists(b => b.Id.ToString() == e.CommandArgument.ToString()))
                    {
                        Row = Rows.Where(b => b.Id.ToString() == e.CommandArgument.ToString()).First();
                        TxtId.Text = Row.Id.ToString();
                        Descripcion.Text = Row.Descripcion;
                        // ChkEstado.Checked = Row.Estado;
                        CmbBodega.SelectedValue = Row.IdBodega.ToString();
                        //CmbSw.SelectedValue = Row.IdSw.ToString();
                        //Notas.Text = Row.Notas;

                        pnlGrid.Visible = false;
                        pnlDatos.Visible = true;

                    }
                }
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Msj1.Text = Constantes.ErrorAlConsultarDatos;
                Type1.Text = "warning";
            }
        }

        protected void btneliminarGridView_Command(object sender, CommandEventArgs e)
        {
            try
            {
                //if (e.CommandName != "Page")
                //{
                //       bool r = Brief.Delete(int.Parse(e.CommandArgument.ToString()));
                //    if (r == true)
                //    {
                //        //FillTipoMovimiento();
                //        Msj1.Text = Constantes.Eliminado;
                //        Type1.Text = "success";
                //        pnlGrid.Visible = true;
                //        pnlDatos.Visible = false;
                //    }
                //}
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorEliminando;
                Type1.Text = "error";
                Log.EscribirError(ex);

            }
        }

        protected void BtnLimpiar_Click(object sender, EventArgs e)
        {
            try
            {

                CleanControl(this.Controls); TxtId.Enabled = true;

            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorLimpiando;
                Type1.Text = "warning";
                Log.EscribirError(ex);
            }
        }

        protected void btnUpload_Click(object sender, EventArgs e)
        {
            string msj = "";
            HttpFileCollection hfCollection = HttpContext.Current.Request.Files;
            for (int i = 0; i < hfCollection.Count; i++)
            {
                HttpPostedFile hPostedFile = hfCollection[i];
                if (hPostedFile.ContentLength > 0)
                {
                    var name=Guid.NewGuid();
                    string save = (@"File/Documentos/" + name + Path.GetExtension(hPostedFile.FileName));
                    try
                    {
                        hPostedFile.SaveAs(Server.MapPath(save));
                        msj = "<b>File: </b>" + hPostedFile.FileName + " <b>Size:</b> " + hPostedFile.ContentLength + " <b>Type:</b> " + hPostedFile.ContentType + " Uploaded Successfully <br/>";
                        var  Obj = new BllFotosBrief();
                       
                        Obj.IdBrief = int.Parse(TxtId.Text);
                        Obj.Url = save;                        
                        Obj.Add(Obj);
                    }
                    catch (Exception ex)
                    {

                        throw ex;
                    }

                }
            }
            //mensaje(msj);
            Msj1.Text = msj;
            Type1.Text = "warning";

            Response.Redirect("CrearBrief.aspx");
        }
        private void GuardarTipo()
        {
            try
            {
                 BllBrief ObjGrabar = new BllBrief();
                //if (ObjGrabar.GetById(iTxtId.Text) == false)
                //{
                   


                    ObjGrabar.Descripcion = Descripcion.Text;
                    ObjGrabar.IdCliente = int.Parse(IdCliente.Text);
                    ObjGrabar.IdBodega = int.Parse(CmbBodega.SelectedValue);
                    //ObjGrabar.IdSw = int.Parse(CmbSw.SelectedValue);
                    ObjGrabar.Estado = 1;
                    ObjGrabar.Usuario = (Usuario.username);
                    ObjGrabar.FechaCreacion = DateTime.Parse(Fecha.Text);
                    ObjGrabar.FechaSistema = DateTime.Now;

                    int r = Brief.Add(ObjGrabar);
                    if (r > 0)
                    {
                        //FillTipoMovimiento();
                        TxtId.Text = r.ToString();
                        Msj1.Text = Constantes.Guardado;
                        Type1.Text = "success";

                        LimpiarControles(pnlDatos.Controls);
                        pnlGrid.Visible = true;
                        pnlDatos.Visible = false;

                    }
                    else
                    {
                        Msj1.Text = Constantes.ErrorAlGuardar;
                        Type1.Text = "error";

                    }
                //}
                //else
                //{
                //    Msj1.Text = Constantes.Existe;
                //    Type1.Text = "error";
                //}
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorAlGuardar;
                Type1.Text = "error";

                Log.EscribirError(ex);
            }
        }
        protected void Modificar()
        {
            try
            {
                if (Brief.GetById(int.Parse(TxtId.Text)).Id > 0)
                {
                    var ObjGrabar = Brief.GetById(int.Parse(TxtId.Text));
                    ObjGrabar.Descripcion = Descripcion.Text;
                    ObjGrabar.IdCliente = int.Parse(IdCliente.Text);
                    ObjGrabar.IdBodega = int.Parse(CmbBodega.SelectedValue);
                    //ObjGrabar.IdSw = int.Parse(CmbSw.SelectedValue);
                    ObjGrabar.Estado = 1;
                    ObjGrabar.Usuario = (Usuario.username);
                    ObjGrabar.FechaCreacion = DateTime.Parse(Fecha.Text);
                    ObjGrabar.FechaSistema = DateTime.Now;

                    int r = Brief.Update(ObjGrabar);
                    if (r > 0)
                    {
                        //FillTipoMovimiento();
                        TxtId.Text = r.ToString();
                        Msj1.Text = Constantes.Actualizar;
                        Type1.Text = "success";

                        pnlGrid.Visible = true;
                        pnlDatos.Visible = false;
                    }
                    else
                    {
                        Msj1.Text = Constantes.ErrorAlActualizar;
                        Type1.Text = "error";
                        ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "displayToastr('" + Constantes.ErrorAlCargarGrid + "','" + "error');", true);
                    }
                }
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorAlActualizar;
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }
        /*Guardar*/
        protected void BtnGuardar_Click(object sender, EventArgs e)
        {
            try
            {
                if (TxtId.Text == "")
                {
                    GuardarTipo();

                }
                else
                {
                    Modificar();
                }
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }


        /*Modificar*/

        protected void TxtBusqueda_TextChanged(object sender, EventArgs e)
        {
            try
            {
                Session["ListBrief"] = Brief.ToList(TxtBusqueda.Text.Trim());
                if (!string.IsNullOrEmpty(Session["ListBrief"].ToString()))
                {
                    GridBrief.DataSource = (List<BllBrief>)Session["ListBrief"];
                    GridBrief.DataBind();


                }
                else
                {
                    //FillTipoMovimiento();

                }
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorAlConsultarDatos;
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }

        protected void GridBrief_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try
            {
                GridBrief.PageIndex = e.NewPageIndex;
                GridBrief.DataSource = (List<BllBrief>)Session["ListBrief"];
                GridBrief.DataBind();
            }
            catch (Exception ex) { Log.EscribirError(ex); ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "displayToastr('" + Constantes.ErrorAlCargarGrid + "','" + "error');", true); }
        }

        protected void Nuevo_Click(object sender, EventArgs e)
        {
            pnlGrid.Visible = false;
            pnlDatos.Visible = true;
            Upload.Visible=true;
        }

        protected void Limpiar_Click(object sender, EventArgs e)
        {
            LimpiarControles(pnlDatos.Controls);
        }
        protected void LimpiarControles(ControlCollection controles)
        {
            try
            {
                CleanControl(controles); TxtId.Enabled = true;
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorLimpiando;
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }
        protected void Cancelar_Click(object sender, EventArgs e)
        {
            pnlGrid.Visible = true;
            pnlDatos.Visible = false;
            LimpiarControles(pnlDatos.Controls);
        }

        protected void Cerrar_ServerClick(object sender, EventArgs e)
        {
            Response.Redirect("Default.aspx");
        }

        protected void Departamento_SelectedIndexChanged(object sender, EventArgs e)
        {
            try
            {

            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorAlCargarCombos;
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }

        protected void BuscarCliente(BllPersonas Cli)
        {
            IdCliente.Text = Cli.Id.ToString();
            Cliente.Text = Cli.Nombre;
            Direccion.Text = Cli.Direccion;
            Ciudad.Text = Cli.Ciudad;
            Telefono.Text = Cli.Telefono;
            Email.Text = Cli.Email;
            Documento.Text = Cli.NroDocumento;
        }

        protected void Documento_TextChanged(object sender, EventArgs e)
        {
            try
            {
                if (Documento.Text != "")
                {
                    var Cli = BllPersonas.GetByDocument(Documento.Text);
                    if (Cli.Id > 0)
                    {
                        BuscarCliente(Cli);
                    }
                    else
                    {
                        Msj1.Text = "Cliente No existe";
                        Type1.Text = "error";

                    }

                }
            }
            catch (Exception ex)
            {

                Log.EscribirError(ex);
                Log.EscribirTraza(ex.Message);
            }
        }
    }
}