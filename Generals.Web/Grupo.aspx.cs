using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.Entities;
using Generals.business.Common;

namespace BrakGeWeb
{
    public partial class Grupo : PaginaBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                if (!IsPostBack)
                {
                    //ValidarAutorizacion();
                    Session["Titulo"] = "Categorias";
                    FillGrupo();
                    pnlGrid.Visible = true;
                    pnlDatos.Visible = false;
                    PnlSubGrupo.Visible = false;
                }
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.errorGeneral;
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }

     
        private void FillGrupo()
        {
            try
            {
                Session["ListGrupo"] = BllGrupo.ToList();
                if (!string.IsNullOrEmpty(Session["ListGrupo"].ToString()))
                {
                    GridGrupo.DataSource = (List<BllGrupo>)Session["ListGrupo"];
                    GridGrupo.DataBind();
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
                    BllGrupo Row = new BllGrupo();

                    List<BllGrupo> Rows = new List<BllGrupo>();

                    Rows = (List<BllGrupo>)Session["ListGrupo"];
                 

                    if (Rows.Exists(b => b.Id.ToString() == e.CommandArgument.ToString()))
                    {
                        Row = Rows.Where(b => b.Id.ToString() == e.CommandArgument.ToString()).First();
                        TxtId.Text = Row.Id.ToString();
                        TxtNombre.Text = Row.Descripcion;                       
                        Estado.Checked = Row.Estado;

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
                if (e.CommandName != "Page")
                {
                    //bool r = BllGrupo.Delete(int.Parse(e.CommandArgument.ToString()));
                    //if (r == true)
                    //{
                    //    FillGrupo();
                    //    Msj1.Text = Constantes.Eliminado;
                    //    Type1.Text = "success";
                    //    pnlGrid.Visible = true;
                    //    pnlDatos.Visible = false;
                    //}
                }
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
            try { 
                
                CleanControl(this.Controls); TxtId.Enabled = true;
               
            }
            catch (Exception ex) {
                Msj1.Text = Constantes.ErrorLimpiando;
                Type1.Text = "warning";
                Log.EscribirError(ex); }
        }

        private void GuardarTipo()
        {
            try
            {
                if (BllGrupo.ExisteDescri(TxtNombre.Text) == false)
                {
                    BllGrupo ObjGrabar = new BllGrupo();
                    
                    ObjGrabar.Descripcion = TxtNombre.Text;
                    ObjGrabar.Estado = Estado.Checked;
                    ObjGrabar.IdUsuario = int.Parse(Usuario.id_usuario.ToString());
                    ObjGrabar.IdEmpresa = int.Parse(Session["IdEmpresa"].ToString());
                    int r = BllGrupo.Add(ObjGrabar);
                    if (r > 0)
                    {
                        FillGrupo();
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
                }
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
                if (BllGrupo.GetById(int.Parse(TxtId.Text)).Id>0)
                {
                    var obj = BllGrupo.GetById(int.Parse(TxtId.Text));
                    obj.Descripcion = TxtNombre.Text;
                    obj.Estado = Estado.Checked;
                    obj.IdUsuario = int.Parse(Usuario.id_usuario.ToString());
                    int r = BllGrupo.Update(obj);
                    if (r > 0)
                    {
                        FillGrupo();
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

                }else
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
                Session["ListGrupo"] = BllGrupo.ToList(TxtBusqueda.Text.Trim());
                if (!string.IsNullOrEmpty(Session["ListGrupo"].ToString()))
                {
                    GridGrupo.DataSource = (List<BllGrupo>)Session["ListGrupo"];
                    GridGrupo.DataBind();
                  

                }
                else
                {
                    FillGrupo();
                    
                }
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorAlConsultarDatos;
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }

        protected void GridGrupo_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try
            {
                GridGrupo.PageIndex = e.NewPageIndex;
                GridGrupo.DataSource = (List<BllGrupo>)Session["ListGrupo"];
                GridGrupo.DataBind();
            }
            catch (Exception ex) { Log.EscribirError(ex); ScriptManager.RegisterStartupScript(this.Page, this.GetType(), "script", "displayToastr('" + Constantes.ErrorAlCargarGrid + "','" + "error');", true); }
        }

        protected void Nuevo_Click(object sender, EventArgs e)
        {
            pnlGrid.Visible = false;
            pnlDatos.Visible = true;
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


        protected void AddSubGrupo_Command(object sender, CommandEventArgs e)
        {
            try
            {

                PnlSubGrupo.Visible = true;
                pnlDatos.Visible = false;
                pnlGrid.Visible = false;
                TxtId.Text = e.CommandArgument.ToString();
                FillSubGrupo();
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }
        protected void GuardarSubGrupo()
        {
            try
            {
                var obj = new BllSubGrupo();
                if (IDSubGrupo.Text=="")
                {
                    obj.Idgrupo = int.Parse(TxtId.Text);
                    obj.Descripcion = Subgrupo.Text;
                    obj.Estado = EstadoSub.Checked;
                    int r = BllSubGrupo.Add(obj);
                    if (r > 0)
                    {
                        FillGrupo();
                        IDSubGrupo.Text = r.ToString();
                        Msj1.Text = Constantes.Guardado;
                        Type1.Text = "success";

                        LimpiarControles(PnlSubGrupo.Controls);
                        FillSubGrupo(); ;

                    }
                    else
                    {
                        Msj1.Text = Constantes.ErrorAlGuardar;
                        Type1.Text = "error";

                    }
                }
            }
            catch (Exception ex)
            {

                Log.EscribirError(ex);
            }
        }
        //funcion para guardar la imagen de la empresa
        private void FillSubGrupo()
        {
            try
            {
                Session["ListSubGrupo"] = BllSubGrupo.ToListByGrupo(int.Parse(TxtId.Text));
                if (!string.IsNullOrEmpty(Session["ListSubGrupo"].ToString()))
                {
                    GridSubGrupo.DataSource = (List<BllSubGrupo>)Session["ListSubGrupo"];
                    GridSubGrupo.DataBind();
                }
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.errorGeneral;
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }
        
        protected void EditarSub_Command(object sender, CommandEventArgs e)
        {
            try
            {
                if (e.CommandName != "Page")
                {
                    BllSubGrupo Row = new BllSubGrupo();

                    List<BllSubGrupo> Rows = new List<BllSubGrupo>();

                    Rows = (List<BllSubGrupo>)Session["ListSubGrupo"];


                    if (Rows.Exists(b => b.Id.ToString() == e.CommandArgument.ToString()))
                    {
                        Row = Rows.Where(b => b.Id.ToString() == e.CommandArgument.ToString()).First();
                        IDSubGrupo.Text = Row.Id.ToString();
                        Subgrupo.Text = Row.Descripcion;
                        EstadoSub.Checked = Row.Estado;

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

        protected void DesactivarSub_Command(object sender, CommandEventArgs e)
        {
            try
            {
                if (e.CommandName != "Page")
                {
                    BllSubGrupo Row = new BllSubGrupo();

                    List<BllSubGrupo> Rows = new List<BllSubGrupo>();

                    Rows = (List<BllSubGrupo>)Session["ListSubGrupo"];


                    if (Rows.Exists(b => b.Id.ToString() == e.CommandArgument.ToString()))
                    {
                        Row = Rows.Where(b => b.Id.ToString() == e.CommandArgument.ToString()).First();

                        Row.Estado = false;
                        BllSubGrupo.Update(Row);
                        FillSubGrupo(); 
                        Msj1.Text = Constantes.Actualizar;
                        Type1.Text = "success";

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

        protected void LimpiarSub_ServerClick(object sender, EventArgs e)
        {
            
        }

        protected void GuardaSub_ServerClick(object sender, EventArgs e)
        {
            
        }
        protected void ModificarSub()
        {
            var obj = new BllSubGrupo();
           obj=BllSubGrupo.GetById(int.Parse(IDSubGrupo.Text));
            obj.Descripcion = Subgrupo.Text;
            obj.Estado = EstadoSub.Checked;
            int r = BllSubGrupo.Update(obj);
            if (r > 0)
            {
                FillGrupo();
                
                Msj1.Text = Constantes.Guardado;
                Type1.Text = "success";
                FillSubGrupo();;
                LimpiarControles(PnlSubGrupo.Controls);
                pnlGrid.Visible = false;
                pnlDatos.Visible = false;

            }
            else
            {
                Msj1.Text = Constantes.ErrorAlGuardar;
                Type1.Text = "error";

            }
        }
        protected void CancelarSub_ServerClick(object sender, EventArgs e)
        {
            
        }

        protected void BtnGuardarSub_Click(object sender, EventArgs e)
        {
            if (IDSubGrupo.Text == "")
            {
                GuardarSubGrupo();
                pnlGrid.Visible = false;
                pnlDatos.Visible = false;
                PnlSubGrupo.Visible = true;
            }
            else
            {
                ModificarSub();
            }
        }

        protected void LimpiarSub_Click(object sender, EventArgs e)
        {
            try
            {
                Metodos.CleanControl(PnlSubGrupo.Controls);
            }
            catch (Exception ex)
            {

                Log.EscribirError(ex);
            }
        }

        protected void CancelarSub_Click(object sender, EventArgs e)
        {
            pnlGrid.Visible = true;
            pnlDatos.Visible = false;
            PnlSubGrupo.Visible = false;
            TxtId.Text = "";
        }

       
    }
}