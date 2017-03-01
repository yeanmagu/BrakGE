using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.Script.Services;
using Generals.business.Entities;
using Generals.business;
//using Bll.Data;
//using Bll;

namespace WebSiiSoNET.wServicios
{
    /// <summary>
    /// Descripción breve de WebServicePvd
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // Para permitir que se llame a este servicio web desde un script, usando ASP.NET AJAX, quite la marca de comentario de la línea siguiente. 
    [System.Web.Script.Services.ScriptService]
    public class WebServicePvd : System.Web.Services.WebService
    {


        //[WebMethod]
        //[ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = true)]
        //public List<BllMedicamentos.Medicamentos> CargarMedicamentos()
        //{
        //    BllMedicamentos b = new BllMedicamentos();
        //    return b.getMedicamentos();
        //}

        //[WebMethod]
        //[ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = true)]
        //public BllMedicamentos.Medicamentos CargarMedi(int codig)
        //{
        //    BllMedicamentos b = new BllMedicamentos();
        //    return b.getBuscar(codig);
        //}

        ////[WebMethod]
        ////[ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        ////public int registrarDSaliMed(DetalleSaliMedi.CargueMedicamentsDTO her)
        ////{
        ////    DetalleSaliMedi b = new DetalleSaliMedi();

        ////    return b.GuardarDSaliMed(her);
        ////}

        //[WebMethod]
        //[ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        //public int registrarDCargarMed(BllDetalleCargueMed.CargueMedicamentosDTO her)
        //{
        //    BllDetalleCargueMed b = new BllDetalleCargueMed();

        //    return b.GuardarDCagueMed(her);
        //}
        
        //[WebMethod]
        //public string HelloWorld()
        //{
        //    return "Hola a todos";
        //}


       

        //    [WebMethod]
        //    [ScriptMethod(ResponseFormat = ResponseFormat.Json, UseHttpGet = true)]
        //    public List<BllSedes.Sedes> CargarSedes()
        //    {
        //        BllSedes b = new BllSedes();
        //        return b.getSedes();
        //    }

          
    }
}
