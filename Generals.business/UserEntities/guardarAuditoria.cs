using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Generals.business.UserEntities
{
    /// <summary>
    /// Administracion de la tabla de auditoria sobre las tablas
    /// </summary>
  public  class guardarAuditoria:Layer
  {
      #region "Atributos"
      /// <summary>
      /// Filtro por fecha de creacion desde
      /// </summary>
      private DateTime? _fechacreaciondesde;
      /// <summary>
      /// Filtro por fecha de creacion hasta
      /// </summary>
      private DateTime? _fechacreacionhasta;
      private int? _idservicio;
      #endregion

      #region "Propiedades"
      /// <summary>
      /// Filtro por fecha de creacion desde
      /// </summary>
      public DateTime? FechaCreacionDesde { get { return _fechacreaciondesde; } set { _fechacreaciondesde = value; } }
      /// <summary>
      /// Filtro por fecha de creacion hasta
      /// </summary>
      public DateTime? FechaCreacionHasta { get { return _fechacreacionhasta; } set { _fechacreacionhasta = value; } }
      public int? IdServicio { get { return _idservicio; } set { _idservicio = value; } }
      #endregion

      #region "Métodos Públicos"
      /// <summary>
        /// Realiza la consulta de la auditoria 
        /// </summary>
        /// <returns></returns>
        public List<Auditoria> Consultar()
        {
            DateTime? fechaCreacionHasta;
            fechaCreacionHasta = FechaCreacionHasta;
            if (FechaCreacionHasta.HasValue)
            {
                fechaCreacionHasta = FechaCreacionHasta.Value.AddDays(1);                
            }    
            return (from A in Modelo.Auditoria
                    where (FechaCreacionDesde.HasValue ? A.Fecha >= FechaCreacionDesde.Value : true)
                        && (fechaCreacionHasta.HasValue ? A.Fecha < fechaCreacionHasta.Value : true)
                       // && (IdServicio.HasValue ? IdServicio.Value== A.IdServicio : true)
                        orderby A.Fecha descending
                    select A).ToList();
        }

        public void ActualizarUltimo(string tabla, string parametro, int idservicio)
        {
            try
            {
                Auditoria auditoria = (from A in Modelo.Auditoria
                                                where (A.Tabla == tabla)
                                                    && (A.Identificador == parametro)
                                                orderby A.Fecha descending
                                                select A).FirstOrDefault();
                if (auditoria != null)
                {
                    auditoria.IdServicio = idservicio;
                    Modelo.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                Common.Log.EscribirError(ex);
            }
        }

        #endregion
    }
}
