using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Runtime.Serialization;

namespace Generals.business.UserEntities
{
    public partial class Usuarios
    {
        private long? _idrol;
        private string _rol;
        private bool? _relacionactiva;
        private bool? _superusuario;
        [DataMemberAttribute()]
        public long? IdRol
        {
            get
            {
                return _idrol;
            }
            set { _idrol = value; }
        }

        [DataMemberAttribute()]
        public bool? RelacionActiva
        {
            get
            {
                return _relacionactiva;
            }
            set { _relacionactiva = value; }
        }

        [DataMemberAttribute()]
        public string NombreCompleto
        {
            get
            {
                return  nombre  + " " + ap_paterno + " "+ ap_materno;
            }
            set { ; }
        }


        [DataMemberAttribute()]
        public bool? SuperUsuario
        {
            get
            {
                return _superusuario;
            }
            set { _superusuario = value; }
        }


        [DataMemberAttribute()]
        public string Rol
        {
            get
            {
                return _rol;
            }
            set { _rol = value; }
        }
    }
}
