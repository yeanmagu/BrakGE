using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.Entities;
using Generals.business.Common;

namespace BrakGeWeb
{
    public partial class TipoPersona : PaginaBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                if (!IsPostBack)
                {
                    //ValidarAutorizacion();
                    Session["Titulo"] = "Tipo Persona";
                    FillTipoPersona();
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

     
        private void FillTipoPersona()
        {
            try
            {
                Session["ListTipoPerso"] = BllTipoPersona.ToList();
                if (!string.IsNullOrEmpty(Session["ListTipoPerso"].ToString()))
                {
                    GridTipoPersona.DataSource = (List<BllTipoPersona>)Session["ListTipoPerso"];
                    GridTipoPersona.DataBind();
                }
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorAlCargarGrid;
                Type1.Text = "error";
                Log.EscribirError(ex);
                Log.EscribirError(ex);
            }
        }
        
        protected void BtnSelect_Command(object sender, CommandEventArgs e)
        {
            try
            {
                if (e.CommandName != "Page")
                {
                    BllTipoPersona Row = new BllTipoPersona();

                    List<BllTipoPersona> Rows = new List<BllTipoPersona>();

                    Rows = (List<BllTipoPersona>)Session["ListTipoPerso"];
                 

                    if (Rows.Exists(b => b.Id.ToString() == e.CommandArgument.ToString()))
                    {
                        Row = Rows.Where(b => b.Id.ToString() == e.CommandArgument.ToString()).First();
                        TxtId.Text = Row.Id.ToString();
                        TxtNombre.Text = Row.Descripcion;                       
                        ChkEstado.Checked = Row.Estado;
                        pnlGrid.Visible = false;
                        pnlDatos.Visible = true;
                       

                    }
                }
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorAlConsultarDatos;
                Type1.Text = "error";
                Log.EscribirError(ex); Log.EscribirError(ex);  }
        }

        protected void btneliminarGridView_Command(object sender, CommandEventArgs e)
        {
            try
            {
                if (e.CommandName != "Page")
                {
                    bool r = BllTipoPersona.Delete(int.Parse(e.CommandArgument.ToString()));
                    if (r == true)
                    {
                        FillTipoPersona();
                        Msj1.Text = Constantes.Eliminado;
                        Type1.Text = "success";
                       
                    }
                }
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorEliminando;
                Type1.Text = "error";
                Log.EscribirError(ex);
                Log.EscribirError(ex);

            }
        }

        protected void BtnLimpiar_Click(object sender, EventArgs e)
        {
            try { 
                
                CleanControl(this.Controls); TxtId.Enabled = true;
               
            }
            catch (Exception ex) { Log.EscribirError(ex); Msj1.Text = Constantes.ErrorLimpiando;
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }

        private void GuardarTipo()
        {
            try
            {
                if (BllTipoPersona.ExisteDescri(TxtNombre.Text) == false)
                {
                    BllTipoPersona ObjGrabar = new BllTipoPersona();
                    
                    ObjGrabar.Descripcion = TxtNombre.Text;
                    ObjGrabar.Estado = ChkEstado.Checked;

                    int r = BllTipoPersona.Add(ObjGrabar);
                    if (r > 0)
                    {
                        FillTipoPersona();
                        TxtId.Text = r.ToString();
                        Msj1.Text = Constantes.Guardado;
                        Type1.Text = "success";

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
        protected void Modificar()
        {
            try
            {
                if (BllTipoPersona.GetById(int.Parse(TxtId.Text)).Id>0)
                {
                    var obj = BllTipoPersona.GetById(int.Parse(TxtId.Text));
                    obj.Descripcion = TxtNombre.Text;
                    obj.Estado = ChkEstado.Checked;

                    int r = BllTipoPersona.Update(obj);
                    if (r > 0)
                    {
                        FillTipoPersona();
                        TxtId.Text = r.ToString();
                        Msj1.Text = Constantes.Actualizar;
                        Type1.Text = "Success";

                    }
                    else
                    {
                        Msj1.Text = Constantes.ErrorAlActualizar;
                        Type1.Text = "error";
                    }
                }
            }
            catch (Exception ex)
            {
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
                Msj1.Text = Constantes.errorGeneral;
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }


        /*Modificar*/
    
        protected void TxtBusqueda_TextChanged(object sender, EventArgs e)
        {
            try
            {
                Session["ListTipoPerso"] = BllTipoPersona.ToList(TxtBusqueda.Text.Trim());
                if (!string.IsNullOrEmpty(Session["ListTipoPerso"].ToString()))
                {
                    GridTipoPersona.DataSource = (List<BllTipoPersona>)Session["ListTipoPerso"];
                    GridTipoPersona.DataBind();
                  

                }
                else
                {
                    FillTipoPersona();
                    
                }
            }
            catch (Exception ex)
            {
                Msj1.Text = Constantes.ErrorAlConsultarDatos;
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }

        protected void GridTipoPersona_PageIndexChanging(object sender, GridViewPageEventArgs e)
        {
            try
            {
                GridTipoPersona.PageIndex = e.NewPageIndex;
                GridTipoPersona.DataSource = (List<BllTipoPersona>)Session["ListTipoPerso"];
                GridTipoPersona.DataBind();
            }
            catch (Exception ex) { Log.EscribirError(ex); Msj1.Text = Constantes.ErrorAlCargarGrid;
                Type1.Text = "error";
                Log.EscribirError(ex);
            }
        }

        protected void Nuevo_Click(object sender, EventArgs e)
        {
            pnlGrid.Visible = false;
            pnlDatos.Visible = true;
        }

        protected void Limpiar_Click(object sender, EventArgs e)
        {
            LimpiarControles();
        }
        protected void LimpiarControles()
        {
            try
            {
                CleanControl(this.Controls); TxtId.Enabled = true;
            }
            catch (Exception ex)
            {
                Log.EscribirError(ex);
            }
        }
        protected void Cancelar_Click(object sender, EventArgs e)
        {
            pnlGrid.Visible = true;
            pnlDatos.Visible = false;
            LimpiarControles();
        }

        //funcion para guardar la imagen de la empresa




    }
}