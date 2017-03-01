using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Generals.business.Common
{
    /// <summary>
    /// Modo de edicion de entidades en pantalla
    /// </summary>
    public enum ModoRegistro
    { 
        Nuevo = 1
        ,Modificacion =2
        ,Regeneracion = 3
        ,Consulta=4
    }

    /// <summary>
    /// Estados de las solicitudes de generacion de pines
    /// </summary>
    public enum Estado
    { 
        EnProceso = 1
        ,Generado =2 
        ,Pendiente =3
        ,Cancelado = 4
        ,EnRegeneracion = 5
        ,NoAutorizado=6
        , PendienteRegeneracion = 7
        , Anulado = 8
    }

    /// <summary>
    /// Servicios ofrecidos por el portal
    /// </summary>
    //public enum Servicio
    //{ 
    //    Ninguno=0
    //    ,Pines=2
    //    ,Otro=3
    //    ,Citas =1
    //}

    /// <summary>
    /// Tipos de mensaje que se muestran en pantalla
    /// </summary>
    public enum TipoMensaje
    { 
        Error=1
        ,Advertencia=2
        ,Exito=3
        ,Campos=4

    }

    /// <summary>
    /// Diferentes operaciones realizadas automaticamente por el sistema
    /// </summary>
    public enum Operacion
    { 
        Generacion=1        
        ,CargueArchivo=2
        ,Conciliacion=3
        ,SMS = 4
    }

    /// <summary>
    /// Tipos de documentos de identificacion 
    /// </summary>
    //public enum TipoIdentificacion
    //{ 
    //    C=1
    //    ,E=4
    //    ,N=3
    //}

    /// <summary>
    /// Tipos de archivo cargados
    /// </summary>
    //public enum TipoArchivo
    //{
    //    C = 1
    //    ,
    //    M = 2   
    //    ,E=3
    //}

    /// <summary>
    /// Roles que requieren un tratamiento especial
    /// </summary>
    public enum Rol
    {
        Autorizador = 4
        ,
        Operador = 3
    }

}