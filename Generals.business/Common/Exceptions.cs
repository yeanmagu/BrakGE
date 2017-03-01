using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Generals.business.Utilities
{
    class Exceptions
    {
        private String _message;
        private String _source;
        private String _type;
        private Exception _exception;

        public Exception Exception
        {
            get { return _exception; }
        }

        public String Message
        {
            get { return _message; }
        }

        public String Source
        {
            get { return _source; }
        }

        public String Type
        {
            get { return _type; }
        }

        public Exceptions(String Source, String Type, String FriendlyMessage, Exception exception)
        {
            _source = Source;
            _type = Type;
            _message = FriendlyMessage;
            _exception = exception;
        }

    }
}
