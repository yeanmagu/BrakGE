using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using Generals.business.Entities;
using System.Web;
using Generals.framework.DataAccess;

namespace Generals.business.Components
{
    public class AuditoriaAcceso
    {        
        public static int Iniciar()
        {
            try
            {
                var listParameters = new List<ParameterIn>();
                var IdUsario = ((Sesion)HttpContext.Current.Session["Presto"]).Usuario.Id;
                var ipusuario = HttpContext.Current.Request.UserHostAddress;

                listParameters.Add(new ParameterIn("@IdUsuario", DbType.Int32, IdUsario));
                listParameters.Add(new ParameterIn("@IPUsuario", DbType.String, ipusuario));
                var idAuditoria = DataBase.ExecuteNonQuery(null, "sp_insertaAuditoriaAcceso", listParameters.ToArray());

                //HttpContext.Current.Session["AuditoriaAcceso_idAuditoria"] = idAuditoria;
                return idAuditoria;
            }
            catch {
                return -1;
            }
        }

        public static void Finalizar(int idAuditoria)
        {
            try
            {                
                var listParameters = new List<ParameterIn>();
                listParameters.Add(new ParameterIn("@idAuditoria", DbType.Int32, idAuditoria));

                DataBase.ExecuteDataSet(null, "sp_cerrarAuditoriaAcceso", listParameters.ToArray());
            }
            catch { }
        }
    }
}
