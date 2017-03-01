using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Generals.business;
using Generals.business.Common;
using iTextSharp;
using iTextSharp.text;
using iTextSharp.text.pdf;
using System.IO;

namespace BrakGeWeb
{
    public partial class Itext : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            using (MemoryStream ms = new MemoryStream())
            {
           
            iTextSharp.text.Document doc = new iTextSharp.text.Document(iTextSharp.text.PageSize.A4, 36, 36, 54, 54);
            iTextSharp.text.pdf.PdfWriter writer = iTextSharp.text.pdf.PdfWriter.GetInstance(doc, ms);
            writer.PageEvent = new HeaderFooter();
            doc.Open();
           
            // make your document content..
                               
            doc.Close();
            writer.Close();

            // output
            Response.ContentType = "application/pdf;";
            Response.AddHeader("Content-Disposition", "attachment; filename=clientfilename.pdf");
            byte[] pdf = ms.ToArray();
            Response.OutputStream.Write(pdf, 0, pdf.Length);
            }
            
        }
        class HeaderFooter : PdfPageEventHelper
        {
             public override void OnEndPage(PdfWriter writer, Document document)
            {

                // Make your table header using PdfPTable and name that tblHeader
             var tblHeader = new PdfPTable(1);
             tblHeader.WriteSelectedRows(0, -1, document.Left + document.LeftMargin, document.Top, writer.DirectContent);
          
                // Make your table footer using PdfPTable and name that tblFooter
                var tblFooter = new PdfPTable(1);
                tblFooter.WriteSelectedRows(0, -1, document.Left + document.LeftMargin, writer.PageSize.GetBottom(document.BottomMargin), writer.DirectContent);
            }
        }
    }
}