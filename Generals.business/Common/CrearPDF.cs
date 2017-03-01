using iTextSharp;
using iTextSharp.text;
using iTextSharp.text.pdf;

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Generals.business.Entities;
using System.Globalization;
using System.Data;
using System.Web;
//using System.Web.UI.WebControls;
using Generals.business.Data;

namespace Generals.business.Common
{
    public  class CrearPDF : PaginaBase
    {

       
        public string GenerarFactura(int NroFact)
        {
            try
            {
                string filename = "";
                var db = new DataDataContext();
                var df = db.Sp_Report_Doc(NroFact);
                var dc=df.FirstOrDefault();
                var de = db.DatosEmpresa(1).FirstOrDefault();
                Document document = new Document(PageSize.LETTER, 100, 50, 30, 65);
                document.SetMargins(20f, 20f, 20f, 20f);
                //  iTextSharp.text.Font NormalFont = FontFactory.GetFont("TIMES_ROMAN", 12, Font.NORMAL, Color.Black);
                var id = Guid.NewGuid();
                filename = id+ ".pdf"; ;
                BaseFont bfTimes = BaseFont.CreateFont(BaseFont.TIMES_ROMAN, BaseFont.CP1252, false);
                //Font times = new Font(bfTimes, 12, Font.ITALIC, Color.RED);

                string saveAs = (@"~\File\Documentos\Facturas\" + filename);
                PdfPCell cell = null;
                PdfPTable table = null;
                BaseColor color = BaseColor.YELLOW;

                using (FileStream msReport = new FileStream(HttpContext.Current.Server.MapPath(saveAs), FileMode.Create))
                {
                    //step 1
                    using (Document pdfDoc = new Document(PageSize.LETTER, 10f, 10f, 140f, 10f))
                    {
                        try
                        {
                            // step 2
                            PdfWriter pdfWriter = PdfWriter.GetInstance(pdfDoc, msReport);
                            pdfWriter.PageEvent = new Common.ITextEvents();

                            //open the stream 
                            pdfDoc.Open();


                            table = new PdfPTable(12);
                            table.HorizontalAlignment = Element.ANCHOR;
                            table.SetWidths(new float[] { 10f, 10f, 10f, 10f, 10f, 10f, 10f, 10f, 10f, 10f, 10f, 10f });
                            table.SpacingBefore = 8f;
                            table.WidthPercentage = 100;
                            cell = PhraseCarta(new Phrase("DATOS DEL CLIENTE", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_CENTER);
                            cell.Colspan = 12;
                            cell.BackgroundColor = BaseColor.GRAY;
                            table.AddCell(cell);


                            cell = PhraseCarta(new Phrase("Nro Documento:", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 2;
                            table.AddCell(cell);

                            cell = PhraseCarta(new Phrase(dc.NroDocumento, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 2;
                            table.AddCell(cell);

                            cell = PhraseCarta(new Phrase("Nombre:", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 2;
                            table.AddCell(cell);

                            cell = PhraseCarta(new Phrase(dc.Cliente, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 2;
                            table.AddCell(cell);

                            cell = PhraseCarta(new Phrase("Telefono:", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 2;
                            table.AddCell(cell);

                            cell = PhraseCarta(new Phrase(dc.Celular, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 2;
                            table.AddCell(cell);


                            /******************************************************************/

                            cell = PhraseCarta(new Phrase("Dirección:", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 2;
                            table.AddCell(cell);

                            cell = PhraseCarta(new Phrase(dc.Direccion, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 2;
                            table.AddCell(cell);

                            cell = PhraseCarta(new Phrase("Ciudad:", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 2;
                            table.AddCell(cell);

                            cell = PhraseCarta(new Phrase(dc.Nombre, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 2;
                            table.AddCell(cell);

                            cell = PhraseCarta(new Phrase("", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 2;
                            table.AddCell(cell);

                            cell = PhraseCarta(new Phrase("", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 2;
                            table.AddCell(cell);

                            /********************************************************/

                            cell = PhraseCarta(new Phrase("DETALLE ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_CENTER);

                            cell.BackgroundColor = BaseColor.GRAY;
                            cell.Colspan = 12;
                            table.AddCell(cell);

                            cell = PhraseCarta(new Phrase("Producto", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);

                            cell.BackgroundColor = BaseColor.GRAY;
                            cell.Colspan = 4;
                            table.AddCell(cell);
                            cell = PhraseCarta(new Phrase("Cantidad", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 2;
                            cell.BackgroundColor = BaseColor.GRAY;
                            table.AddCell(cell);
                            cell = PhraseCarta(new Phrase("Valor Unitario", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 2;

                            cell.BackgroundColor = BaseColor.GRAY;
                            table.AddCell(cell);



                            cell = PhraseCarta(new Phrase("Iva", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                            cell.BackgroundColor = BaseColor.GRAY;
                            cell.Colspan = 2;
                            table.AddCell(cell);

                            cell.BackgroundColor = BaseColor.GRAY;

                            cell = PhraseCarta(new Phrase("Valor Total", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 2;
                            cell.BackgroundColor = BaseColor.GRAY;
                            table.AddCell(cell);

                            df = db.Sp_Report_Doc(NroFact);

                            foreach (var item in df)
                            {
                                cell = PhraseCarta(new Phrase(item.Item, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                                cell.Colspan = 4;
                                table.AddCell(cell);

                                cell = PhraseCarta(new Phrase(item.Cantidad.ToString(), FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                                cell.Colspan = 2;
                                table.AddCell(cell);

                                cell = PhraseCarta(new Phrase(item.Precio.ToString(), FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                                cell.Colspan = 2;
                                table.AddCell(cell);

                                cell = PhraseCarta(new Phrase(item.Porcentaje.ToString(), FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                                cell.Colspan = 2;
                                table.AddCell(cell);

                                cell = PhraseCarta(new Phrase((item.Precio * ((item.Precio / 100) * item.Precio) + item.Precio).ToString(), FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                                cell.Colspan = 2;
                                table.AddCell(cell);


                            }

                            pdfDoc.Add(table);


                            pdfDoc.Close();

                        }
                        catch (Exception ex)
                        {
                            //handle exception
                        }

                        finally
                        {


                        }

                    }

                }
                //using (System.IO.MemoryStream memoryStream1 = new System.IO.MemoryStream())
                //{
                //    PdfWriter writer = PdfWriter.GetInstance(document, new System.IO.FileStream(HttpContext.Current.Server.MapPath(saveAs), FileMode.Create));
                //    writer.PageEvent = new Common.ITextEvents();
                   

                //    document.Open();

                //    //Header Table
                 

                //    //table = new PdfPTable(6);
                //    //table.HorizontalAlignment = Element.ANCHOR;
                //    //table.SetWidths(new float[] { 10f, 10f, 10f, 10f, 10f, 10f });
                //    //table.SpacingBefore = 10f;
                //    //table.WidthPercentage = 100;

                //    //PdfPTable nested = new PdfPTable(1);
                //    //nested.SetWidths(new float[] { 10f});
                //    //// nested.SpacingBefore = 8f;
                //    //nested.WidthPercentage = 20;
                //    //cell = ImageCell("~/" + de.Logo, 50f, PdfPCell.ALIGN_CENTER);
                //    //cell.Colspan = 1;
                    
                //    //nested.AddCell(cell);
                   
                //    //PdfPCell nesthousing = new PdfPCell(nested);
                //    //nesthousing.Padding = 0f;
                //    //nesthousing.Colspan = 2;
                //    //table.AddCell(nesthousing);

                //    //PdfPTable nested1 = new PdfPTable(5);

                //    //nested1.HorizontalAlignment = Element.ALIGN_RIGHT;
                //    //nested1.SetWidths(new float[] { 10f, 10f, 10f, 10f, 10f });
                //    //// nested1.SpacingBefore = 8f;
                //    //nested1.WidthPercentage = 60;
                //    //cell = PhraseCell(new Phrase(de.Nombre, FontFactory.GetFont("TIMES_ROMAN", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                //    //cell.Colspan = 3;
                //    ////cell.BorderColor = BaseColor.WHITE;
                //    ////cell.BackgroundColor = BaseColor.GRAY;
                //    //nested1.AddCell(cell);
                //    //cell = PhraseCell(new Phrase("FACTURA DE VENTA", FontFactory.GetFont("TIMES_ROMAN", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_CENTER);
                //    //cell.Colspan = 2;
                //    //cell.BorderColor = BaseColor.WHITE;
                //    //cell.BackgroundColor = BaseColor.GRAY;
                //    //nested1.AddCell(cell);



                //    //cell = PhraseCell(new Phrase(de.Direccion, FontFactory.GetFont("TIMES_ROMAN", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                //    //cell.Colspan = 3;
                //    ////cell.BorderColor = BaseColor.GRAY;
                //    //nested1.AddCell(cell);

                //    //cell = PhraseCell(new Phrase("Número: " + NroFact, FontFactory.GetFont("TIMES_ROMAN", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                //    //cell.Colspan = 2;
                //    //cell.BorderColor = BaseColor.GRAY;
                //    //nested1.AddCell(cell);
                //    //cell = PhraseCell(new Phrase(de.Telefono, FontFactory.GetFont("TIMES_ROMAN", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                //    //cell.Colspan = 3;
                //    ////cell.BorderColor = BaseColor.GRAY;
                //    //nested1.AddCell(cell);
                //    //cell = PhraseCell(new Phrase(" " , FontFactory.GetFont("TIMES_ROMAN", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                //    //cell.Colspan = 2;
                //    //cell.BorderColor = BaseColor.GRAY;
                //    //nested1.AddCell(cell);
                //    //cell = PhraseCell(new Phrase("Nit: " + de.NIT, FontFactory.GetFont("TIMES_ROMAN", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                //    //cell.Colspan = 3;
                //    ////cell.BorderColor = BaseColor.GRAY;
                //    //nested1.AddCell(cell);
                //    //cell = PhraseCell(new Phrase(" " , FontFactory.GetFont("TIMES_ROMAN", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                //    //cell.Colspan = 2;
                //    //cell.BorderColor = BaseColor.GRAY;
                //    //nested1.AddCell(cell);

                //    //cell = PhraseCell(new Phrase(de.PaginaWeb, FontFactory.GetFont("TIMES_ROMAN", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                //    //cell.Colspan = 3;
                //    ////cell.BorderColor = BaseColor.GRAY;
                //    //nested1.AddCell(cell);
                //    //cell = PhraseCell(new Phrase(de.Resolucion, FontFactory.GetFont("TIMES_ROMAN", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                //    //cell.Colspan =3;
                //    ////cell.BorderColor = BaseColor.GRAY;
                //    //nested1.AddCell(cell);
                //    //cell = PhraseCell(new Phrase(" " , FontFactory.GetFont("TIMES_ROMAN", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                //    //cell.Colspan = 2;
                //    //cell.BorderColor = BaseColor.GRAY;
                //    //nested1.AddCell(cell);

                //    //PdfPCell nesthousing1 = new PdfPCell(nested1);
                //    //nesthousing1.Padding = 0f;
                //    //nesthousing1.Colspan = 6;
                //    //table.AddCell(nesthousing1);


                //    //document.Add(table);


                //    table = new PdfPTable(12);
                //    table.HorizontalAlignment = Element.ANCHOR;
                //    table.SetWidths(new float[] { 10f, 10f, 10f, 10f, 10f, 10f, 10f, 10f, 10f, 10f, 10f, 10f });
                //    table.SpacingBefore = 8f;
                //    table.WidthPercentage = 100;
                //    cell = PhraseCarta(new Phrase("DATOS DEL CLIENTE", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_CENTER);
                //    cell.Colspan = 12;
                //    cell.BackgroundColor = BaseColor.GRAY;
                //    table.AddCell(cell);


                //    cell = PhraseCarta(new Phrase("Nro Documento:", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                //    cell.Colspan = 2;
                //    table.AddCell(cell);

                //    cell = PhraseCarta(new Phrase(dc.NroDocumento, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                //    cell.Colspan = 2;
                //    table.AddCell(cell);

                //    cell = PhraseCarta(new Phrase("Nombre:", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                //    cell.Colspan = 2;
                //    table.AddCell(cell);

                //    cell = PhraseCarta(new Phrase(dc.Cliente, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                //    cell.Colspan = 2;
                //    table.AddCell(cell);

                //    cell = PhraseCarta(new Phrase("Telefono:", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                //    cell.Colspan = 2;
                //    table.AddCell(cell);

                //    cell = PhraseCarta(new Phrase(dc.Celular, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                //    cell.Colspan = 2;
                //    table.AddCell(cell);


                //    /******************************************************************/

                //    cell = PhraseCarta(new Phrase("Dirección:", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                //    cell.Colspan = 2;
                //    table.AddCell(cell);

                //    cell = PhraseCarta(new Phrase(dc.Direccion, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                //    cell.Colspan = 2;
                //    table.AddCell(cell);

                //    cell = PhraseCarta(new Phrase("Ciudad:", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                //    cell.Colspan = 2;
                //    table.AddCell(cell);

                //    cell = PhraseCarta(new Phrase(dc.Nombre, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                //    cell.Colspan = 2;
                //    table.AddCell(cell);

                //    cell = PhraseCarta(new Phrase("", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                //    cell.Colspan = 2;
                //    table.AddCell(cell);

                //    cell = PhraseCarta(new Phrase("", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                //    cell.Colspan = 2;
                //    table.AddCell(cell);

                //    /********************************************************/

                //    cell = PhraseCarta(new Phrase("DETALLE ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_CENTER);

                //    cell.BackgroundColor = BaseColor.GRAY;
                //    cell.Colspan =12;
                //    table.AddCell(cell);

                //    cell = PhraseCarta(new Phrase("Producto", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);

                //    cell.BackgroundColor = BaseColor.GRAY;
                //    cell.Colspan = 4;
                //    table.AddCell(cell);
                //    cell = PhraseCarta(new Phrase("Cantidad", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                //    cell.Colspan = 2;
                //    cell.BackgroundColor = BaseColor.GRAY;
                //    table.AddCell(cell);
                //    cell = PhraseCarta(new Phrase("Valor Unitario", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                //    cell.Colspan = 2;

                //    cell.BackgroundColor = BaseColor.GRAY;
                //    table.AddCell(cell);



                //    cell = PhraseCarta(new Phrase("Iva", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                //    cell.BackgroundColor = BaseColor.GRAY;
                //    cell.Colspan = 2;
                //    table.AddCell(cell);

                //    cell.BackgroundColor = BaseColor.GRAY;

                //    cell = PhraseCarta(new Phrase("Valor Total", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                //    cell.Colspan = 2;
                //    cell.BackgroundColor = BaseColor.GRAY;
                //    table.AddCell(cell);

                //    df = db.Sp_Report_Doc(NroFact);

                //    foreach (var item in df)
                //    {
                //         cell = PhraseCarta(new Phrase(item.Item, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                //    cell.Colspan =4;
                //    table.AddCell(cell);

                //    cell = PhraseCarta(new Phrase(item.Cantidad.ToString(), FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                //    cell.Colspan = 2;
                //    table.AddCell(cell);

                //    cell = PhraseCarta(new Phrase(item.Precio.ToString(), FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                //    cell.Colspan = 2;
                //    table.AddCell(cell);

                //    cell = PhraseCarta(new Phrase(item.Porcentaje.ToString(), FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                //    cell.Colspan = 2;
                //    table.AddCell(cell);

                //    cell = PhraseCarta(new Phrase((item.Precio*((item.Precio/100)*item.Precio)+item.Precio).ToString(), FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                //    cell.Colspan = 2;
                //    table.AddCell(cell);

                   
                //    }

                //    document.Add(table);

                   


                //    document.Close();

                //    byte[] bytes = memoryStream1.ToArray();
                //    memoryStream1.Close();

                //    return saveAs;
                //}
                return saveAs;
            }
            catch (Exception ex)
            {

                Log.EscribirTraza("Error al generar PDF Factura Nro: " + NroFact.ToString());
                throw ex;
            }
        }
        public  void DrawLine(PdfWriter writer, float x1, float y1, float x2, float y2, iTextSharp.text.BaseColor color)
        {
            PdfContentByte contentByte = writer.DirectContent;
            contentByte.SetColorStroke(color);
            contentByte.MoveTo(x1, y1);
            contentByte.LineTo(x2, y2);
            contentByte.Stroke();
        }
        public  PdfPCell PhraseCell(Phrase phrase, int align)
        {
            PdfPCell cell = new PdfPCell(phrase);
            //cell.BorderColor = BaseColor.WHITE;
            cell.BorderColor = new BaseColor(0, 0, 0, 0);
            cell.VerticalAlignment = Element.ALIGN_TOP;
            cell.HorizontalAlignment = align;
            cell.PaddingBottom = 2f;
            cell.PaddingTop = 0f;
            return cell;
        }
        public  PdfPCell PhraseCarta(Phrase phrase, int align)
        {
            PdfPCell cell = new PdfPCell(phrase);
            cell.BorderColor = BaseColor.WHITE;
            cell.VerticalAlignment = Element.ALIGN_TOP;
            cell.HorizontalAlignment = align;
            cell.PaddingBottom = 2f;
            cell.PaddingTop = 0f;
            return cell;
        }
        public  PdfPCell ImageCell(string path, float scale, int align)
        {

            iTextSharp.text.Image image = iTextSharp.text.Image.GetInstance(HttpContext.Current.Server.MapPath(path));

            image.ScalePercent(scale);
            image.WidthPercentage = 100;
            PdfPCell cell = new PdfPCell(image);
            //  cell.BorderColor = BaseColor.WHITE; 
            cell.BorderColor = new BaseColor(0, 0, 0, 0);
            cell.VerticalAlignment = PdfPCell.ALIGN_TOP;
            cell.HorizontalAlignment = align;
            cell.PaddingBottom = 0f;
            cell.PaddingTop = 0f;
            return cell;
        }


        public  PdfPCell ImageCellPie(string path, float scale, int align)
        {


            iTextSharp.text.Image image = iTextSharp.text.Image.GetInstance(HttpContext.Current.Server.MapPath(path));
            image.ScalePercent(scale);
            image.WidthPercentage = 100;
            PdfPCell cell = new PdfPCell(image);
            cell.BorderColor = BaseColor.WHITE;
            cell.VerticalAlignment = PdfPCell.ALIGN_TOP;
            cell.HorizontalAlignment = align;
            cell.PaddingBottom = 0f;
            cell.PaddingTop = 0f;

            image.SetAbsolutePosition(480, 737);

            return cell;
        }
        public  PdfPCell ImageCellFir(string path, float scale, int align)
        {
            iTextSharp.text.Image image;
            image = iTextSharp.text.Image.GetInstance(HttpContext.Current.Server.MapPath(path));

            //image.ScalePercent(scale);
            image.ScaleAbsolute(260f, 200f);
            //  image.Width = 300;

            PdfPCell cell = new PdfPCell(image);
            cell.BorderColor = BaseColor.WHITE;
            cell.VerticalAlignment = PdfPCell.ALIGN_CENTER;
            cell.HorizontalAlignment = align;
            cell.PaddingBottom = 1f;
            cell.PaddingTop = 1f;
            cell.PaddingLeft = 1f;
            cell.PaddingRight = 1f;
            return cell;
        }

        class HeaderFooter : PdfPageEventHelper
        {
            /** Alternating phrase for the header. */
            Phrase[] header = new Phrase[2];
            /** Current page number (will be reset for every chapter). */
            int pagenumber;

            /**
             * Initialize one of the headers.
             * @see com.itextpdf.text.pdf.PdfPageEventHelper#onOpenDocument(
             *      com.itextpdf.text.pdf.PdfWriter, com.itextpdf.text.Document)
             */
            public override void OnOpenDocument(PdfWriter writer, Document document)
            {
                header[0] = new Phrase("Movie history");
            }

            /**
             * Initialize one of the headers, based on the chapter title;
             * reset the page number.
             * @see com.itextpdf.text.pdf.PdfPageEventHelper#onChapter(
             *      com.itextpdf.text.pdf.PdfWriter, com.itextpdf.text.Document, float,
             *      com.itextpdf.text.Paragraph)
             */
            public override void OnChapter(
              PdfWriter writer, Document document,
              float paragraphPosition, Paragraph title)
            {
                header[1] = new Phrase(title.Content);
                pagenumber = 1;
            }

            /**
             * Increase the page number.
             * @see com.itextpdf.text.pdf.PdfPageEventHelper#onStartPage(
             *      com.itextpdf.text.pdf.PdfWriter, com.itextpdf.text.Document)
             */
            public override void OnStartPage(PdfWriter writer, Document document)
            {
                pagenumber++;
            }

            /**
             * Adds the header and the footer.
             * @see com.itextpdf.text.pdf.PdfPageEventHelper#onEndPage(
             *      com.itextpdf.text.pdf.PdfWriter, com.itextpdf.text.Document)
             */
            public override void OnEndPage(PdfWriter writer, Document document)
            {
                iTextSharp.text.Rectangle rect = writer.GetBoxSize("art");
                switch (writer.PageNumber % 2)
                {
                    case 0:
                        ColumnText.ShowTextAligned(writer.DirectContent,
                          Element.ALIGN_RIGHT,
                          header[0],
                          rect.Right, rect.Top, 0
                        );
                        break;
                    case 1:
                        ColumnText.ShowTextAligned(
                          writer.DirectContent,
                          Element.ALIGN_LEFT,
                          header[1],
                          rect.Left, rect.Top, 0
                        );
                        break;
                }
                ColumnText.ShowTextAligned(
                  writer.DirectContent,
                  Element.ALIGN_CENTER,
                  new Phrase(String.Format("page {0}", pagenumber)),
                  (rect.Left + rect.Right) / 2,
                  rect.Bottom - 18, 0
                );
            }
        }
        public static void WriteTextToDocument(BaseFont bf, iTextSharp.text.Rectangle tamPagina, PdfContentByte over, PdfGState gs, string texto)
        {

            over.SetGState(gs);

            over.SetRGBColorFill(220, 220, 220);

            over.SetTextRenderingMode(PdfContentByte.TEXT_RENDER_MODE_STROKE);

            over.SetFontAndSize(bf, 46);

            Single anchoDiag =

                (Single)Math.Sqrt(Math.Pow((tamPagina.Height - 120), 2)

                + Math.Pow((tamPagina.Width - 60), 2));

            Single porc =

                (Single)100 * (anchoDiag / bf.GetWidthPoint(texto, 46));

            over.SetHorizontalScaling(porc);

            double angPage = (-1)

            * Math.Atan((tamPagina.Height - 60) / (tamPagina.Width - 60));

            over.SetTextMatrix((float)Math.Cos(angPage),

                        (float)Math.Sin(angPage),

                        (float)((-1F) * Math.Sin(angPage)),

                        (float)Math.Cos(angPage),

                        30F,

                        (float)tamPagina.Height - 60);

            over.ShowText(texto);


        }


        public void CreatePDF()
        {
            string fileName = string.Empty;

            DateTime fileCreationDatetime = DateTime.Now;

            fileName = string.Format("{0}.pdf", fileCreationDatetime.ToString(@"yyyyMMdd") + "_" + fileCreationDatetime.ToString(@"HHmmss"));

            string pdfPath = Server.MapPath(@"~\File\Documentos\Facturas\") + fileName;

            using (FileStream msReport = new FileStream(pdfPath, FileMode.Create))
            {
                //step 1
                using (Document pdfDoc = new Document(PageSize.A4, 10f, 10f, 140f, 10f))
                {
                    try
                    {
                        // step 2
                        PdfWriter pdfWriter = PdfWriter.GetInstance(pdfDoc, msReport);
                        pdfWriter.PageEvent = new Common.ITextEvents();

                        //open the stream 
                        pdfDoc.Open();

                        for (int i = 0; i < 10; i++)
                        {
                            Paragraph para = new Paragraph("Hello world. Checking Header Footer", new Font(Font.FontFamily.HELVETICA, 22));

                            para.Alignment = Element.ALIGN_CENTER;

                            pdfDoc.Add(para);

                            pdfDoc.NewPage();
                        }

                        pdfDoc.Close();

                    }
                    catch (Exception ex)
                    {
                        //handle exception
                    }

                    finally
                    {


                    }

                }

            }
        }
    }
}
