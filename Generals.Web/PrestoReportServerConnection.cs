using System;
using System.Configuration;
using System.Net;
using Microsoft.Reporting.WebForms;  

namespace Generals.Web
{
    public class GeneralsReportServerConnection : IReportServerConnection
    {
        private string _UserName;
        private string _PassWord;
        private string _DomainName;
        private Uri url= new Uri(ConfigurationManager.AppSettings["ReportServer"].ToString());
        private int tiemout = 300;
        
        public GeneralsReportServerConnection()
        {
            _UserName = ConfigurationManager.AppSettings["ReportUser"];
            _PassWord = ConfigurationManager.AppSettings["ReportPassword"];
            _DomainName = ConfigurationManager.AppSettings["Domain"];
        }

        
        public System.Security.Principal.WindowsIdentity ImpersonationUser
        {
            get
            {
                return null;
            }
        }
        public ICredentials NetworkCredentials
        {
            get
            {
                return new NetworkCredential(_UserName, _PassWord, _DomainName);
                //return new NetworkCredential(_UserName, _PassWord);
            }
        }
        public bool GetFormsCredentials(out Cookie authCookie, out string user, out string password, out string authority)
        {
            authCookie = null;
            user = password = authority = null;
            return false;
        }
        public Uri ReportServerUrl {
            get
            {
                return url;
            }
        }
        public int Timeout {
            get
            {
                return tiemout;
            }
        }


    }
}
