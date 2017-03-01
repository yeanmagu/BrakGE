using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business.UserEntities;
using System.Web.UI.WebControls;
using System.Data;
using System.Web;
using Generals.business.Data;
namespace Generals.business.Common
{
    public class Constantes
    {
        public const string Seleccione = "Seleccione ...";
        public const string Ninguna = "Ninguna";
        public const string noRegistros = "No existen registros para la consulta solicitada";
        public const string noDiligenciado = "El campo {0} no se encuentra diligenciado";        
        public const string errorGeneral = "Ha ocurrido un error general de comunicación en el sistema, por favor comuníquese con el administrador";
        public const string nombreAplicacion = "Pines";
        public const string falloTemporal = "Error temporal";
        public const string Guardado = "Registro Guardado con Exito";
        public const string DocumentoGenerado = "Documento Generado Exitosamente";
        public const string DocumentoNoGenerado = "Documento No Pudo Ser Generado ";
        public const string ErrorAlGuardar = "Registro No Pudo Ser Guardado";
        public const string PermisoUsuario = "Usuario no tiene permisos para modificar este archivo";
        public const string Actualizar = "Registro Actualizado con Éxito";
        public const string ErrorAlActualizar = "Registro No Pudo Ser Actualizado";
        public const string Existe = "Ya existe un registro en este N°id";
        public const string Eliminado = "Registro eliminado correctamente";
        public const string ErrorEliminando = "No se puede eliminar porque se encuentran datos asociados a este Registro";
        public const string ExisteDoc = "Documento Registrado No existe";
        public const string TimeOut = "Tiempo de espera para modificaciones ha  Caducado";
        public const string DocVAcio = "Digite el Nro de Documento";
        public const string ParametroVacio = "Digite el Parámetro  requerido para la Búsqueda";
        public const string FormatoFecha = "El Formato de Fecha No es Valido, mm/dd/yyyy";
        public const string ValiCombos = "Seleccione una opción  válida...!";
        public const string NoExisteRe = "No existen registro asociado al código";
        public const string ErrorLimpiando = "Error Limpiando Los campos";
        public const string TiempoEspera = "Tiempo de espera para modificaciones ha expirado";
        public const string FalloAlCargarRe = "Error al cargar vista previa de impresión.";
        public const string ErrorAlCargarGrid = "No se  Pudo cargar la grilla de datos";
        public const string ErrorAlConsultarDatos = "Error al consultar Datos Guardados previamente.";
        public const string ErrorAlCargarCombos = "Error al Cargar Datos de los combos";
        public const string ErrorAlConsultarDoc = "Fallo al consultar Documento";
        public const string RespuestaNoValida = "Respuesta no valida para el item de Chequeo. ";
        public const string Succes = "alert alert-success";
        public const string Warning = "alert alert-warning";
        public const string Danger = "alert alert-danger";
        public const string Ok = "fa fa-check-square";
        public const string Fallo = "fa fa-times";
        public const string Advertencia = "fa fa-exclamation-triangle";
        public const string Ecdf = "El Valor del E.C.D.F no puede ser Cero";
        public const string ErrorAsignando = "Ha ocurrido un error de comunicacion con el sistemaal reasignar las actas";

        public const string RechazoDefini = "Acta rechazada Definitivamente con exito";
        
    }    
}
