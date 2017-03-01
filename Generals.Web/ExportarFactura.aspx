<%@ Page Language="C#" AutoEventWireup="true" EnableEventValidation="false" %>

<%@ Import Namespace="System" %>;
<%@ Import Namespace="System.Collections.Generic" %>;
<%@ Import Namespace="System.Linq" %>;
<%@ Import Namespace="System.Web" %>;
<%@ Import Namespace="System.Web.UI" %>;
<%@ Import Namespace="System.Web.UI.WebControls" %>;
<%@ Import Namespace="Generals.business.Entities" %>;
<%@ Import Namespace="Generals.framework.Exceptions" %>;
<%@ Import Namespace="Generals.business.UserEntities" %>;
<%@ Import Namespace="Generals.business.Common" %>;
<%@ Import Namespace="Generals.business.Data" %>;
<%@ Import Namespace="Generals.business.Entities" %>;
<%@ Import Namespace="System.Drawing" %>;
<%@ Import Namespace="System.Web.Script.Serialization" %>;
<%@ Import Namespace="AjaxControlToolkit" %>;
<%@ Import Namespace="Microsoft.Reporting.WebForms" %>;
<%@ Import Namespace="System.Security.Cryptography" %>;
<%@ Import Namespace="System.Text" %>;
<%@ Import Namespace="Generals.business" %>;
<%@ Import Namespace="System.Globalization" %>;
<%@ Import Namespace="System.Web.UI.HtmlControls" %>;
<%@ Import Namespace="System.Web.UI.WebControls.WebParts" %>;
<%@ Import Namespace="System.Xml.Linq" %>;
<%@ Import Namespace="System.Data" %>;
<%@ Import Namespace="System.Data.SqlClient" %>;
<%@ Import Namespace="System.Data.Sql" %>;
<%@ Import Namespace="System.Data.SqlTypes" %>;
<%@ Import Namespace="System.IO" %>;
<%@ Import Namespace="System.Reflection" %>;
<%@ Import Namespace="System.Threading" %>;

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
  <script language="c#" runat="server">

      public void Page_Load(object sender, EventArgs e)
      {
          //hello, world!
          var id = Request.QueryString.Get("Id");
          var Pdf= new CrearPDF();
            string url =Pdf.GenerarFactura(int.Parse(id));
          Pdf.CreatePDF();
            String path = HttpContext.Current.Server.MapPath(url);

            System.IO.FileInfo toDownload =
                         new System.IO.FileInfo(path);

            if (toDownload.Exists)
            {
                Response.Clear();
                Response.AddHeader("Content-Disposition",
                           "attachment; filename=" + toDownload.Name);
                Response.AddHeader("Content-Length",
                           toDownload.Length.ToString());
                Response.ContentType = "application/octet-stream";
                Response.WriteFile(url);
                Response.End();
               if(System.IO.File.Exists(path) )
                {
                    // Use a try block to catch IOExceptions, to
                    // handle the case of the file already being
                    // opened by another process.
                    try
                    {
                        System.IO.File.Delete(path);
                    }
                    catch (System.IO.IOException ex)
                    {
                        Console.WriteLine(ex.Message);
                        Response.Write(ex.ToString());
                        return;
                    }
                }
                 
            }else
            {
                Response.Write("No se a Encontrado El Archivo");
            }
      }

      protected void CrearLista(object lis)
      {
          
      }
  

 </script>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
    </div>
    </form>
</body>
</html>
