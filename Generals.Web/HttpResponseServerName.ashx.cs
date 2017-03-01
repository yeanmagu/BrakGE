using System;
using System.Web;
using System.Collections.Specialized;

/// <summary>
/// 
/// Using this module in your website requires that you add the following
/// syntax into your web.config file:
/// 
///     <system.webServer>
///          <modules>
///            <add name="HttpResponseServerName" type="HttpResponseServerName"/>
///          </modules>
///     </system.webServer>
///     
/// </summary>
public class HttpResponseServerName : IHttpModule
{
    public void Init(HttpApplication context)
    {
        context.PreSendRequestHeaders += OnPreSendRequestHeaders; 
    }

    public void Dispose()
    { }

    void OnPreSendRequestHeaders(object sender, EventArgs e)
    {
        try
        {
            if (HttpContext.Current != null)
            {
                // Modify Http Response Header "Server"
                //HttpContext.Current.Response.Headers.Set("Server", "AyP-Inversiones Web Server"); este
                //HttpContext.Current.Response.AddHeader("Server", "AyP-Inversiones Web Server");

                // Remove Http Response Header "Server"
                //HttpContext.Current.Response.Headers.Remove("Server");
                //HttpContext.Current.Response.Headers.Remove("Etag"); este
                //HttpContext.Current.Response.Headers.Remove("X-Powered-By"); este
                //HttpContext.Current.Response.Headers.Remove("P3P"); este
            }
        }
        catch 
        {
            
        }        
    }
}