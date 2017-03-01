using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using iTextSharp;
using iTextSharp.text;
using iTextSharp.text.pdf;
using System.Web;
using Generals.business.Data;
namespace Generals.business.Common
{
    public  class ITextEvents : PdfPageEventHelper
    {
        // This is the contentbyte object of the writer
        PdfContentByte cb;

        // we will put the final number of pages in a template
        PdfTemplate headerTemplate, footerTemplate;

        // this is the BaseFont we are going to use for the header / footer
        BaseFont bf = null;

        // This keeps track of the creation time
        DateTime PrintTime = DateTime.Now;


        #region Fields
        private string _header;
        #endregion

        #region Properties
        public string Header
        {
            get { return _header; }
            set { _header = value; }
        }
        #endregion
        public PdfPCell ImageCell(string path, float scale, int align)
        {

            iTextSharp.text.Image image = iTextSharp.text.Image.GetInstance(HttpContext.Current.Server.MapPath(path));

            image.ScalePercent(scale);
            image.WidthPercentage = 50;
            PdfPCell cell = new PdfPCell(image);
           cell.BorderColor = BaseColor.WHITE; 
            //cell.BorderColor = new BaseColor(0, 0, 0, 0);
            cell.VerticalAlignment = PdfPCell.ALIGN_LEFT;
            cell.HorizontalAlignment = align;

            cell.PaddingBottom = 0f;
            cell.PaddingTop = 0f;
            return cell;
        }

        public override void OnOpenDocument(PdfWriter writer, Document document)
        {
            try
            {
                PrintTime = DateTime.Now;
              
               
                bf = BaseFont.CreateFont(BaseFont.HELVETICA, BaseFont.CP1252, BaseFont.NOT_EMBEDDED);
                cb = writer.DirectContent;
                 
                //headerTemplate = cb.CreateTemplate(80, 80);
                //Originial
                headerTemplate = cb.CreateTemplate(100, 100);
                footerTemplate = cb.CreateTemplate(30, 30);
            }
            catch (DocumentException de)
            {

            }
            catch (System.IO.IOException ioe)
            {

            }
        }

        public override void OnEndPage(iTextSharp.text.pdf.PdfWriter writer, iTextSharp.text.Document document)
        {
            PdfPCell cell = null;
            base.OnEndPage(writer, document);
            var db = new DataDataContext();
            //var de = db.DatosEmpresa(1).FirstOrDefault();
            iTextSharp.text.Font baseFontNormal = new iTextSharp.text.Font(iTextSharp.text.Font.FontFamily.HELVETICA, 10f, iTextSharp.text.Font.BOLD, iTextSharp.text.BaseColor.BLACK);
            iTextSharp.text.Font Header = new iTextSharp.text.Font(iTextSharp.text.Font.FontFamily.HELVETICA, 10f, iTextSharp.text.Font.NORMAL, iTextSharp.text.BaseColor.WHITE);
            iTextSharp.text.Font baseFontBig = new iTextSharp.text.Font(iTextSharp.text.Font.FontFamily.HELVETICA, 12f, iTextSharp.text.Font.BOLD, iTextSharp.text.BaseColor.BLACK);

            Phrase p1Header = new Phrase("", baseFontNormal);


            //Create PdfTable object
            PdfPTable pdfTab = new PdfPTable(3);

         

            pdfTab = new PdfPTable(6);
            pdfTab.HorizontalAlignment = Element.ALIGN_CENTER;
            pdfTab.SetWidths(new float[] { 10f, 10f, 10f, 10f, 10f, 10f });
            pdfTab.SpacingBefore = 8f;
            pdfTab.WidthPercentage = 100;
           
            PdfPTable nested = new PdfPTable(1);
            nested.SetWidths(new float[] { 10f });
            // nested.SpacingBefore = 8f;
            nested.WidthPercentage = 100;
            cell = ImageCell("~/images/logo.png" , 12f, PdfPCell.ALIGN_LEFT);
            cell.Colspan = 1;
            cell.BorderColor = BaseColor.WHITE;
            nested.AddCell(cell);

            PdfPCell nesthousing = new PdfPCell(nested);
            nesthousing.Padding = 0f;
            nesthousing.Colspan = 2;
            nesthousing.BorderColor  = BaseColor.WHITE;
            pdfTab.AddCell(nesthousing);

            PdfPTable nested1 = new PdfPTable(5);

            nested1.HorizontalAlignment = Element.ALIGN_RIGHT;
            nested1.SetWidths(new float[] { 10f, 10f, 10f, 10f, 10f });
            // nested1.SpacingBefore = 8f;
            nested1.WidthPercentage = 60;
            cell = PhraseCell(new Phrase("PYG COMPARATIVO", baseFontNormal), PdfPCell.ALIGN_CENTER);
            cell.Colspan =5;
            //cell.BorderColor = BaseColor.WHITE;
            //cell.BackgroundColor = BaseColor.GRAY;
            nested1.AddCell(cell);




            cell = PhraseCell(new Phrase("AUTOCHEVROLET - NIT 16216035", baseFontNormal), PdfPCell.ALIGN_CENTER);
            cell.Colspan = 5;
            //cell.BorderColor = BaseColor.GRAY;
            nested1.AddCell(cell);


            cell = PhraseCell(new Phrase(" CRA. 10 # 19C 62 ", baseFontNormal), PdfPCell.ALIGN_CENTER);
            cell.Colspan = 5;
            //cell.BorderColor = BaseColor.GRAY;
            nested1.AddCell(cell);

         

            PdfPCell nesthousing1 = new PdfPCell(nested1);
            nesthousing1.Padding = 0f;
            nesthousing1.Colspan = 6;
            nesthousing1.BorderColor = BaseColor.WHITE;
            pdfTab.AddCell(nesthousing1);

            
            String text = "Pagina " + writer.PageNumber + " de ";
            {
                cb.BeginText();
                cb.SetFontAndSize(bf, 7);
                cb.SetTextMatrix(document.PageSize.GetRight(100), document.PageSize.GetTop(25));
                cb.ShowText(text);
                cb.EndText();
                float len = bf.GetWidthPoint(text, 7);
                //Adds "12" in Page 1 of 12
                cb.AddTemplate(headerTemplate, document.PageSize.GetRight(100) + len+1, document.PageSize.GetTop(25));
            }
            {
                cb.BeginText();
                cb.SetFontAndSize(bf, 7);
                cb.SetTextMatrix(document.PageSize.GetRight(100), document.PageSize.GetBottom(20));
                cb.ShowText(text);
                cb.EndText();
                float len = bf.GetWidthPoint(text, 7);
                cb.AddTemplate(footerTemplate, document.PageSize.GetRight(100) + len+1, document.PageSize.GetBottom(20));
            }
            
            pdfTab.TotalWidth = document.PageSize.Width-80f;
          
            pdfTab.WidthPercentage = 100;
            pdfTab.HorizontalAlignment = Element.ALIGN_RIGHT;

           
            //call WriteSelectedRows of PdfTable. This writes rows from PdfWriter in PdfTable
            //first param is start row. -1 indicates there is no end row and all the rows to be included to write
            //Third and fourth param is x and y position to start writing
            pdfTab.WriteSelectedRows(0, -1, 20, document.PageSize.Height - 5, writer.DirectContent);
            //set pdfContent value

            //Move the pointer and draw line to separate header section from rest of page
            cb.MoveTo(10, document.PageSize.Height - 60);
            cb.LineTo(document.PageSize.Width - 10, document.PageSize.Height - 60);
            cb.SetColorFill(BaseColor.BLUE);
           // cb.SetRGBColorFill(119, 58, 193);
            cb.Stroke();

            //Move the pointer and draw line to separate footer section from rest of page
            cb.MoveTo(10, document.PageSize.GetBottom(30));
            cb.LineTo(document.PageSize.Width - 10, document.PageSize.GetBottom(30));
            cb.SetColorFill(BaseColor.BLUE);
            cb.Stroke();
        }

        public override void OnCloseDocument(PdfWriter writer, Document document)
        {
            base.OnCloseDocument(writer, document);

            headerTemplate.BeginText();
            headerTemplate.SetFontAndSize(bf, 7);
            headerTemplate.SetTextMatrix(0, 0);
            headerTemplate.ShowText((writer.PageNumber - 1).ToString());
            headerTemplate.EndText();

            footerTemplate.BeginText();
            footerTemplate.SetFontAndSize(bf, 7);
            footerTemplate.SetTextMatrix(0, 0);
            footerTemplate.ShowText((writer.PageNumber - 1).ToString());
            footerTemplate.EndText();


        }
        public PdfPCell PhraseCell(Phrase phrase, int align)
        {
            PdfPCell cell = new PdfPCell(phrase);
            cell.BorderColor = BaseColor.WHITE;
            //cell.BorderColor = new BaseColor(0, 0, 0, 0);
            cell.VerticalAlignment = Element.ALIGN_TOP;
            cell.HorizontalAlignment = align;
            cell.PaddingBottom = 2f;
            cell.PaddingTop = 0f;
            return cell;
        }
    }
}
