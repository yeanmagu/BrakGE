using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Generals.business.Utilities
{
    class Application
    {
        private static Application _application;

        private String _path;

        public String Path
        {
            get { return _path; }
            set { _path = value; }
        }

        protected Application()
        {
        }

        public static Application getInstance()
        {
            if (_application == null)
                _application = new Application();

            return _application;
        }
    }
}
