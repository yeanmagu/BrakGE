using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

namespace Generals.business.UserEntities
{
    public class Respuesta
    {
        private string _mensaje;
        private int _id;
        private bool _nuevoUser;
       
        [DataMember]
        public int Id { get { return _id; } set { _id = value; } }
        [DataMember]
        public string Mensaje { get { return _mensaje; } set { _mensaje = value; } }
        [DataMember]
        public bool _NuevoUser { get { return _nuevoUser; } set { _nuevoUser = value; } }
    }

    public class RespuestaArchivo
    {
        private List<string> _mensaje;
        private List<string> _registros;
        private bool _cargado;
        private int _total;       

        [DataMember]
        public List<string> Registros { get { return _registros; } set { _registros = value; } }
        [DataMember]
        public List<string> Mensaje { get { return _mensaje; } set { _mensaje = value; } }
        [DataMember]
        public bool Cargado { get { return _cargado; } set { _cargado = value; } }      
        [DataMember]
        public int Total { get { return _total; } set { _total = value; } }
    }
}