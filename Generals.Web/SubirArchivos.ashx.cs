using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BrakGeWeb
{
    /// <summary>
    /// Summary description for SubirArchivos
    /// </summary>
    public class SubirArchivos : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
          HttpFileCollection files = context.Request.Files;
          for (int i = 0; i < files.Count; i++)
          {
              HttpPostedFile file=files[i];
              string fileName=context.Server.MapPath("~/File/Items/"+ Guid.NewGuid()+"." + System.IO.Path.GetExtension(file.FileName));
              file.SaveAs(fileName);
          }
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}