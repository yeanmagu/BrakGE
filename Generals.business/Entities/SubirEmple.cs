using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Generals.business.Data;

namespace Generals.business
{
    public class SubirEmple
    {
        public class Emple {
            
            private string _Name;
            private string _BirthDate;
            private string _Type; 
            private string _Department;
            private string _id;

            public string id { get { return _id; } set { _id = value; } }
            public string Name { get { return _Name; } set { _Name = value; } }
            public string BirthDate { get { return _BirthDate; } set { _BirthDate = value; } }
            public string Type { get { return _Type; } set { _Type = value; } }
            public string Department { get { return _Department; } set { _Department = value; } }

            //public Emple();
            public Emple(string id,string Name, string BirthDate, string Type, string Department) {
                _id = id;
                _Name = Name;
                _BirthDate = BirthDate;
                _Type = Type;
                _Department = Department;
            }

        }

    }
}
