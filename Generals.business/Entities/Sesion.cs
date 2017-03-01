using System;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Generals.business.Data;

namespace Generals.business.Entities
{    
    public class Sesion
    {
        
        private Usuarios.Usuario _Usuario;
       
        public Usuarios.Usuario Usuario
        {
            get { return _Usuario; }
            set { _Usuario = value; }
        }

       

    }
}
