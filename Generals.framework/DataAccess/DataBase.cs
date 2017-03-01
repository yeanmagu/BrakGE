using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using System.Data.Common;
using Microsoft.Practices.EnterpriseLibrary.Common.Configuration;
using Microsoft.Practices.EnterpriseLibrary.Data;

namespace Generals.framework.DataAccess
{
    /// <summary>
    /// Clase que nos permite el Manejo de Base de Datos.
    /// </summary>
    public class DataBase
    {
        #region Methods

        /// <summary>
        /// Método que nos permite Ejecutar un Stored Procedure que recibe un array de Parametros de Entrada y que Regresa
        /// un DataSet.
        /// </summary>
        /// <param name="connectionString">Nombre de la Conexion a la Base de Datos establecida.</param>
        /// <param name="nameStoredProcedure">Nombre del Stored Procedure a Ejecutar.</param>
        /// <param name="arrayParametersIn">Array de Parametros de Entrada.</param>
        /// <returns>DataSet con la información encontrada en caso contrario regresa una Excepcion.</returns>
        public static DataSet ExecuteDataSet(string connectionString, string nameStoredProcedure, ParameterIn[] arrayParametersIn)
        {
            try
            {
                Database db;
                DataSet ds = new DataSet();

                if (string.IsNullOrEmpty(connectionString))
                    db = EnterpriseLibraryContainer.Current.GetInstance<Database>();
                else
                    db = EnterpriseLibraryContainer.Current.GetInstance<Database>(connectionString);

                using (DbCommand dbCommand = db.GetStoredProcCommand(nameStoredProcedure))
                {
                    foreach (ParameterIn parameter in arrayParametersIn)
                        db.AddInParameter(dbCommand, parameter.Name, parameter.DBType, parameter.Value);

                    ds = db.ExecuteDataSet(dbCommand);
                }

                return ds;                
            }
            catch (Exception ex)
            {
                throw (ex);
            }
        }
        /// <summary>
        /// Método que nos permite Ejecutar un SP sin parametros.
        /// </summary>
        /// <param name="connectionString">Nombre de la Conexion a la Base de Datos establecida.</param>
        /// <param name="nameStoredProcedure">Nombre del Stored Procedure a Ejecutar.</param>
        /// <returns>DataSet con la información encontrada en caso contrario regresa una Excepcion.</returns>
        public static DataSet ExecuteDataSet(string connectionString, string nameStoredProcedure)
        {
            try
            {
                Database db;
                DataSet ds = new DataSet();

                if (string.IsNullOrEmpty(connectionString))
                    db = EnterpriseLibraryContainer.Current.GetInstance<Database>();
                else
                    db = EnterpriseLibraryContainer.Current.GetInstance<Database>(connectionString);

                using (DbCommand dbCommand = db.GetStoredProcCommand(nameStoredProcedure))
                {
                    ds = db.ExecuteDataSet(dbCommand);
                }

                return ds;
            }
            catch (Exception ex)
            {
                throw (ex);
            }
        }

        /// <summary>
        /// Método que nos permite Ejecutar un Stored Procedure que recibe un array de Parametros de Salida y que Regresa
        /// un ArrayList con los Valores Obtenidos de cada Parametro de Salida.
        /// </summary>
        /// <param name="connectionString">Nombre de la Conexion a la Base de Datos establecida.</param>
        /// <param name="nameStoredProcedure">Nombre del Stored Procedure a Ejecutar.</param>
        /// <param name="arrayParametersOut">Array de Parametros de Salida.</param>
        /// <returns></returns>
        public static ArrayList ExecuteNonQuery(string connectionString, string nameStoredProcedure, ParameterOut[] arrayParametersOut)
        {
            try
            {
                Database db;
                ArrayList arrayListParametersOut = new ArrayList();

                if (string.IsNullOrEmpty(connectionString))
                    db = EnterpriseLibraryContainer.Current.GetInstance<Database>();
                else
                    db = EnterpriseLibraryContainer.Current.GetInstance<Database>(connectionString);

                using (DbCommand dbCommand = db.GetStoredProcCommand(nameStoredProcedure))
                {
                    foreach (ParameterOut parameterOut in arrayParametersOut)
                        db.AddOutParameter(dbCommand, parameterOut.Name, parameterOut.DBType, parameterOut.Size);

                    db.ExecuteNonQuery (dbCommand);

                    foreach (ParameterOut parameterOut in arrayParametersOut)
                        arrayListParametersOut.Add(db.GetParameterValue(dbCommand, parameterOut.Name));
                }

                return arrayListParametersOut;
            }
            catch (Exception ex)
            {
                throw (ex);
            }
        }
        /// <summary>
        /// Método que nos permite ejecutar Stored Procedure que realizan Insert, Update y Delete en la BD.
        /// </summary>
        /// <param name="connectionString">Nombre de la Conexion a la Base de Datos establecida.</param>
        /// <param name="nameStoredProcedure">Nombre del Stored Procedure a Ejecutar.</param>
        /// <param name="arrayParametersIn">Array de Parametros de Entrada.</param>
        public static int ExecuteNonQuery(string connectionString, string nameStoredProcedure, ParameterIn[] arrayParametersIn)
        {
            try
            {
                Database db;

                if (string.IsNullOrEmpty(connectionString))
                    db = DatabaseFactory.CreateDatabase();
                else
                    db = DatabaseFactory.CreateDatabase(connectionString);

                DbCommand dbCommand = db.GetStoredProcCommand(nameStoredProcedure);

                dbCommand.CommandTimeout = 3600;

                foreach (ParameterIn parameterIn in arrayParametersIn)
                    db.AddInParameter(dbCommand, parameterIn.Name, parameterIn.DBType, parameterIn.Value);

                return db.ExecuteNonQuery(dbCommand);
            }
            catch (Exception ex)
            {
                throw (ex);
            }
        }

        #endregion Methods
    }
}
