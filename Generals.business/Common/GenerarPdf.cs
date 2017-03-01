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
using System.Web.UI.WebControls;

namespace Generals.business.Common
{
    public class GenerarPdf : PaginaBase
    {
        
        static int idx = 0;
        public string Filename { get; set; }

        //se cambio de variable estaticas a variables normales
         BllEmpresas.Empresas Emp = new BllEmpresas.Empresas();
        
         BllActas.Actas Act = new BllActas.Actas();
         List<BllActas.Actas> Actas = new List<BllActas.Actas>();
         BllDocumentos.Documentos Doc = new BllDocumentos.Documentos();
         List<BllDocumentos.Documentos> Docu = new List<BllDocumentos.Documentos>();
         List<BllDocumentos.Documentos> ListDocu = new List<BllDocumentos.Documentos>();
         BllActa_Medidor.Acta_Medidor Me = new BllActa_Medidor.Acta_Medidor();
         List<BllAC_Sellos.AC_Sellos> Sellos = new List<BllAC_Sellos.AC_Sellos>();
         List<BllAnomalias.Anomalias> Ano = new List<BllAnomalias.Anomalias>();
         List<BllCensoActas.CensoActas> Cen = new List<BllCensoActas.CensoActas>();
         List<BllMaterialeses.Materiales> Mat = new List<BllMaterialeses.Materiales>();
         
         BllProcesoSimpli.ProcesoSimpli Pro = new BllProcesoSimpli.ProcesoSimpli();
         BllActa_Liquidacion.Acta_Liquidacion Liq = new BllActa_Liquidacion.Acta_Liquidacion();
         List<BllConsumo.Consumo> Co = new List<BllConsumo.Consumo>();
             
        public static string GenerarLiquidacion(int acta, int conse, string user)
        {
            try
            {
                string filename = "";     
                    BllActas.Actas Act = new BllActas.Actas();
                    BllActa_Liquidacion.Acta_Liquidacion Liq = new BllActa_Liquidacion.Acta_Liquidacion();
                    List<BllConsumo.Consumo> Co = new List<BllConsumo.Consumo>();
                    Liq = BllActa_Liquidacion.GetActa(conse);
                    Co = BllConsumo.CargarGridView(acta);

                    Act = BllActas.GetActa(acta);
                  

                    Document document = new Document(PageSize.LETTER, 90, 50, 30, 65);
                    document.SetMargins(25f, 25f, 25f, 25f);
                    //  iTextSharp.text.Font NormalFont = FontFactory.GetFont("Arial", 12, Font.NORMAL, Color.Black);
                    filename = "Li" + acta.ToString() + ".pdf"; ;

                    string saveAs = (@"~\File\Documentos\Liquidacion\" + filename);
                    using (System.IO.MemoryStream memoryStream1 = new System.IO.MemoryStream())
                    {
                        PdfWriter writer = PdfWriter.GetInstance(document, new System.IO.FileStream(HttpContext.Current.Server.MapPath(saveAs), FileMode.Create));
                      
                        Phrase phrase = null;
                        PdfPCell cell = null;
                        PdfPTable table = null;
                        BaseColor color = BaseColor.YELLOW;

                        document.Open();


                        //Header Table
                        table = new PdfPTable(1);
                        table.TotalWidth = 700f;
                        table.LockedWidth = true;
                        table.SetWidths(new float[] { 8f });
                        table.WidthPercentage = 100;
                        //Company Logo
                        cell = ImageCell("~/images/Liquidacion.png", 50f, PdfPCell.ALIGN_CENTER);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        document.Add(table);

                        table = new PdfPTable(8);
                        table.HorizontalAlignment = Element.ANCHOR;
                        table.SetWidths(new float[] { 10f, 10f, 10f, 10f, 10f, 10f, 10f, 10f });
                        table.SpacingBefore = 10f;
                        table.WidthPercentage = 100;
                        cell = PhraseCarta(new Phrase("Nro. Consecutivo:", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        cell.BorderColor = BaseColor.GRAY;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase(Liq.AcLiCodi.ToString(), FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        cell.BorderColor = BaseColor.GRAY;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase("Nro. Acta: ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        cell.BorderColor = BaseColor.GRAY;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase(Act._number.ToString(), FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        cell.BorderColor = BaseColor.GRAY;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase("Fecha:", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        cell.BorderColor = BaseColor.GRAY;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase(String.Format("{0:dd/MM/yyyy}", DateTime.Now.ToShortDateString()), FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        cell.BorderColor = BaseColor.GRAY;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase("Metodo de Liquidación:", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        cell.BorderColor = BaseColor.GRAY;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase(Liq.DescLiqu, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        cell.BorderColor = BaseColor.GRAY;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase("Titular: ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        cell.BorderColor = BaseColor.GRAY;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase(Act.nombreTitularContrato + " " + Act.apellido1TitularContrato + " " + Act.apellido2TitularContrato, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        cell.BorderColor = BaseColor.GRAY;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase("Nic:", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        cell.BorderColor = BaseColor.GRAY;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase(Act.nic, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        cell.BorderColor = BaseColor.GRAY;
                        table.AddCell(cell);

                        cell = PhraseCarta(new Phrase("Valor Tarifa ($/kWh):", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        cell.BorderColor = BaseColor.GRAY;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase(Math.Round(float.Parse(Act.ValorTarifa.ToString()), 3).ToString(), FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        cell.BorderColor = BaseColor.GRAY;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase("E.C.D.F. (kWh): ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        cell.BorderColor = BaseColor.GRAY;
                        table.AddCell(cell);
                        float total = (float.Parse(Act.ValorEcdf.ToString()) * float.Parse(Act.ValorTarifa.ToString()));
                        cell = PhraseCarta(new Phrase(Math.Round(float.Parse(Act.ValorEcdf.ToString()), 0).ToString(), FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        cell.BorderColor = BaseColor.GRAY;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase("Total :", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        cell.BorderColor = BaseColor.GRAY;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase(String.Format("{0:C2}", (Math.Round(total)), 2), FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        cell.BorderColor = BaseColor.GRAY;
                        table.AddCell(cell);
                        document.Add(table);

                        table = new PdfPTable(6);
                        table.HorizontalAlignment = Element.ANCHOR;
                        table.SetWidths(new float[] { 10f, 10f, 10f, 10f, 10f, 10f });
                        table.SpacingBefore = 10f;
                        table.WidthPercentage = 100;

                        PdfPTable nested = new PdfPTable(2);
                        nested.SetWidths(new float[] { 10f, 10f });
                        // nested.SpacingBefore = 8f;
                        nested.WidthPercentage = 30;
                        cell = PhraseCell(new Phrase("CONSUMOS ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_CENTER);
                        cell.Colspan = 2;
                        cell.BorderColor = BaseColor.GRAY;
                        cell.BackgroundColor = BaseColor.GRAY;
                        nested.AddCell(cell);
                        cell = PhraseCarta(new Phrase("Fecha", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_CENTER);
                        cell.Colspan = 1;
                        cell.BorderColor = BaseColor.GRAY;
                        nested.AddCell(cell);
                        cell = PhraseCarta(new Phrase("Valor", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_CENTER);
                        cell.Colspan = 1;
                        cell.BorderColor = BaseColor.GRAY;
                        nested.AddCell(cell);
                        foreach (var item in Co)
                        {
                            cell = PhraseCarta(new Phrase(item.ConsFech, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_CENTER);
                            cell.Colspan = 1;
                            cell.BorderColor = BaseColor.GRAY;
                            nested.AddCell(cell);
                            cell = PhraseCarta(new Phrase(item.ConsValo.ToString(), FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_CENTER);
                            cell.Colspan = 1;
                            cell.BorderColor = BaseColor.GRAY;
                            nested.AddCell(cell);
                        }
                        PdfPCell nesthousing = new PdfPCell(nested);
                        nesthousing.Padding = 0f;
                        nesthousing.Colspan = 2;
                        table.AddCell(nesthousing);

                        PdfPTable nested1 = new PdfPTable(6);

                        nested1.HorizontalAlignment = Element.ALIGN_RIGHT;
                        nested1.SetWidths(new float[] { 10f, 10f, 10f, 10f, 10f, 10f });
                        // nested1.SpacingBefore = 8f;
                        nested1.WidthPercentage = 70;
                        cell = PhraseCell(new Phrase("CÁLCULO DE LA E.C.D.F. ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_CENTER);
                        cell.Colspan = 6;
                        cell.BorderColor = BaseColor.GRAY;
                        cell.BackgroundColor = BaseColor.GRAY;
                        nested1.AddCell(cell);
                        if (Liq.AcLiMeLi == "01" || Liq.AcLiMeLi == "01" || Liq.AcLiMeLi == "03" || Liq.AcLiMeLi == "06" || Liq.AcLiMeLi == "11" || Liq.AcLiMeLi == "09")
                        {

                            if (Liq.AcLiMeLi == "01")
                            {
                                cell = PhraseCarta(new Phrase("Carga Contratada (Kw)", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_CENTER);
                                cell.Colspan = 2;
                                cell.BorderColor = BaseColor.GRAY;
                                nested1.AddCell(cell);
                            }
                            else
                            {
                                cell = PhraseCarta(new Phrase("Consumo Mensual Calculado (kWh)", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_CENTER);
                                cell.Colspan = 2;
                                cell.BorderColor = BaseColor.GRAY;
                                nested1.AddCell(cell);
                            }

                            cell = PhraseCarta(new Phrase("Factor Util. (%)", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_CENTER);
                            cell.Colspan = 1;
                            cell.BorderColor = BaseColor.GRAY;
                            nested1.AddCell(cell);
                            cell = PhraseCarta(new Phrase("Meses", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_CENTER);
                            cell.Colspan = 1;
                            cell.BorderColor = BaseColor.GRAY;
                            nested1.AddCell(cell);
                            cell = PhraseCarta(new Phrase("CO(kWh)", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_CENTER);
                            cell.Colspan = 1;
                            nested1.AddCell(cell);
                            cell = PhraseCarta(new Phrase("E.C.D.F. (kWh)", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_CENTER);
                            cell.Colspan = 1;
                            cell.BorderColor = BaseColor.GRAY;
                            nested1.AddCell(cell);

                            if (Liq.AcLiMeLi == "01")
                            {
                                cell = PhraseCarta(new Phrase(Liq.AcLiCaCo.ToString(), FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_CENTER);
                                cell.Colspan = 2;
                                cell.BorderColor = BaseColor.GRAY;
                                nested1.AddCell(cell);
                            }
                            if (Liq.AcLiMeLi == "03")
                            {
                                cell = PhraseCarta(new Phrase(Liq.AcLiKwCe.ToString(), FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_CENTER);
                                cell.Colspan = 2;
                                cell.BorderColor = BaseColor.GRAY;
                                nested1.AddCell(cell);
                            }
                            if (Liq.AcLiMeLi == "06")
                            {
                                cell = PhraseCarta(new Phrase(Liq.AcLiCoPo.ToString(), FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_CENTER);
                                cell.Colspan = 2;
                                cell.BorderColor = BaseColor.GRAY;
                                nested1.AddCell(cell);
                            }
                            if (Liq.AcLiMeLi == "09")
                            {
                                cell = PhraseCarta(new Phrase(Liq.AcLiPrEs.ToString(), FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_CENTER);
                                cell.Colspan = 2;
                                cell.BorderColor = BaseColor.GRAY;
                                nested1.AddCell(cell);
                            }
                            if (Liq.AcLiMeLi == "11")
                            {
                                cell = PhraseCarta(new Phrase(Liq.AcLiPoEr.ToString(), FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_CENTER);
                                cell.Colspan = 2;
                                cell.BorderColor = BaseColor.GRAY;
                                nested1.AddCell(cell);
                            }

                            cell = PhraseCarta(new Phrase(Liq.AcLiPoUt.ToString(), FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_CENTER);
                            cell.Colspan = 1;
                            cell.BorderColor = BaseColor.GRAY;
                            nested1.AddCell(cell);
                            cell = PhraseCarta(new Phrase(Liq.AcLiMese.ToString(), FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_CENTER);
                            cell.Colspan = 1;
                            cell.BorderColor = BaseColor.GRAY;
                            nested1.AddCell(cell);
                            cell = PhraseCarta(new Phrase(Liq.AcLiCoTo.ToString(), FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_CENTER);
                            cell.Colspan = 1;
                            cell.BorderColor = BaseColor.GRAY;
                            nested1.AddCell(cell);
                            cell = PhraseCarta(new Phrase(Math.Round(float.Parse(Act.ValorEcdf.ToString()), 0).ToString(), FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_CENTER);
                            cell.Colspan = 1;
                            cell.BorderColor = BaseColor.GRAY;
                            nested1.AddCell(cell);
                            cell = PhraseCarta(new Phrase("- ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_CENTER);

                            cell.BorderColor = BaseColor.GRAY;
                            cell.Colspan = 1;
                            nested1.AddCell(cell);
                            cell = PhraseCarta(new Phrase("-  ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_CENTER);
                            cell.Colspan = 1;
                            cell.BorderColor = BaseColor.GRAY;
                            nested1.AddCell(cell);
                            cell = PhraseCarta(new Phrase(" - ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_CENTER);
                            cell.Colspan = 1;
                            cell.BorderColor = BaseColor.GRAY;
                            nested1.AddCell(cell);


                        }
                        else
                        {
                            cell = PhraseCarta(new Phrase(" ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_CENTER);
                            cell.Colspan = 3;
                            cell.BorderColor = BaseColor.GRAY;
                            nested1.AddCell(cell);
                            cell = PhraseCarta(new Phrase("Fase 1", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_CENTER);
                            cell.Colspan = 1;
                            cell.BorderColor = BaseColor.GRAY;
                            nested1.AddCell(cell);
                            cell = PhraseCarta(new Phrase("Fase 2", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_CENTER);
                            cell.Colspan = 1;
                            cell.BorderColor = BaseColor.GRAY;
                            nested1.AddCell(cell);
                            cell = PhraseCarta(new Phrase("Fase 3", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_CENTER);
                            cell.Colspan = 1;
                            cell.BorderColor = BaseColor.GRAY;
                            nested1.AddCell(cell);
                            cell = PhraseCarta(new Phrase("Amperaje", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_CENTER);
                            cell.Colspan = 3;
                            cell.BorderColor = BaseColor.GRAY;
                            nested1.AddCell(cell);
                            cell = PhraseCarta(new Phrase(Liq.AcLifa1.ToString(), FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_CENTER);
                            cell.Colspan = 1;
                            cell.BorderColor = BaseColor.GRAY;
                            nested1.AddCell(cell);
                            cell = PhraseCarta(new Phrase(Liq.AcLifa2.ToString(), FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_CENTER);
                            cell.Colspan = 1;
                            cell.BorderColor = BaseColor.GRAY;
                            nested1.AddCell(cell);
                            cell = PhraseCarta(new Phrase(Liq.AcLifa3.ToString(), FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_CENTER);
                            cell.Colspan = 1;
                            cell.BorderColor = BaseColor.GRAY;
                            nested1.AddCell(cell);
                            cell = PhraseCarta(new Phrase("Voltaje", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_CENTER);
                            cell.Colspan = 3;
                            cell.BorderColor = BaseColor.GRAY;
                            nested1.AddCell(cell);
                            cell = PhraseCarta(new Phrase(Liq.AcLiVolt.ToString(), FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_CENTER);
                            cell.Colspan = 1;
                            cell.BorderColor = BaseColor.GRAY;
                            nested1.AddCell(cell);
                            cell = PhraseCarta(new Phrase(Liq.AcLiVolt2.ToString(), FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_CENTER);
                            cell.Colspan = 1;
                            cell.BorderColor = BaseColor.GRAY;
                            nested1.AddCell(cell);
                            cell = PhraseCarta(new Phrase(Liq.AcLiVolt3.ToString(), FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_CENTER);
                            cell.Colspan = 1;
                            cell.BorderColor = BaseColor.GRAY;
                            nested1.AddCell(cell);

                            cell = PhraseCarta(new Phrase("Carga Encontrada (Kw)", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_CENTER);
                            cell.Colspan = 3;

                            cell.BackgroundColor = BaseColor.GRAY;
                            nested1.AddCell(cell);
                            cell = PhraseCarta(new Phrase("Factor Util.(%)", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_CENTER);
                            cell.Colspan = 1;
                            cell.BackgroundColor = BaseColor.GRAY;
                            nested1.AddCell(cell);
                            cell = PhraseCarta(new Phrase("Meses", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_CENTER);
                            cell.Colspan = 1;
                            cell.BackgroundColor = BaseColor.GRAY;
                            nested1.AddCell(cell);
                            cell = PhraseCarta(new Phrase("E.C.D.F. (kWh)", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_CENTER);
                            cell.Colspan = 1;
                            cell.BackgroundColor = BaseColor.GRAY;
                            nested1.AddCell(cell);

                            cell = PhraseCarta(new Phrase(Liq.AcLiCaCo.ToString(), FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_CENTER);
                            cell.Colspan = 3;
                            cell.BorderColor = BaseColor.GRAY;
                            nested1.AddCell(cell);

                            cell = PhraseCarta(new Phrase(Liq.AcLiPoUt.ToString(), FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_CENTER);
                            cell.Colspan = 1;
                            cell.BorderColor = BaseColor.GRAY;
                            nested1.AddCell(cell);
                            cell = PhraseCarta(new Phrase(Liq.AcLiMese.ToString(), FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_CENTER);
                            cell.Colspan = 1;
                            cell.BorderColor = BaseColor.GRAY;
                            nested1.AddCell(cell);
                            cell = PhraseCarta(new Phrase(Math.Round(float.Parse(Act.ValorEcdf.ToString()), 0).ToString(), FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_CENTER);
                            cell.Colspan = 1;
                            cell.BorderColor = BaseColor.GRAY;
                            nested1.AddCell(cell);

                            cell = PhraseCarta(new Phrase("- ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_CENTER);
                            cell.BorderColor = BaseColor.GRAY;
                            cell.Colspan = 3;


                            nested1.AddCell(cell);
                            cell = PhraseCarta(new Phrase("- ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_CENTER);
                            cell.BorderColor = BaseColor.GRAY;
                            cell.Colspan = 1;
                            nested1.AddCell(cell);
                            cell = PhraseCarta(new Phrase("-  ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_CENTER);
                            cell.BorderColor = BaseColor.GRAY;
                            cell.Colspan = 1;
                            nested1.AddCell(cell);
                            cell = PhraseCarta(new Phrase(" - ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_CENTER);
                            cell.BorderColor = BaseColor.GRAY;
                            cell.Colspan = 1;
                            nested1.AddCell(cell);


                        }

                        PdfPCell nesthousing1 = new PdfPCell(nested1);
                        nesthousing1.Padding = 0f;
                        nesthousing1.Colspan = 4;
                        table.AddCell(nesthousing1);

                        document.Add(table);

                        table = new PdfPTable(6);
                        table.HorizontalAlignment = Element.ANCHOR;
                        table.SetWidths(new float[] { 10f, 10f, 10f, 10f, 10f, 10f });
                        table.SpacingBefore = 8f;
                        table.WidthPercentage = 100;
                        cell = PhraseCarta(new Phrase("MÉTODO UTILIZADO PARA EL CALCULO DE LA ENERGÍA CONSUMIDA DEJADA DE FACTURAR", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_CENTER);
                        cell.Colspan = 6;
                        cell.BackgroundColor = BaseColor.GRAY;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase(Liq.AcLiDeMe, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_JUSTIFIED);
                        cell.Colspan = 6;
                        cell.BorderColor = BaseColor.GRAY;
                        table.AddCell(cell);
                        document.Add(table);

                        table = new PdfPTable(6);
                        table.HorizontalAlignment = Element.ANCHOR;
                        table.SetWidths(new float[] { 10f, 10f, 10f, 10f, 10f, 10f });
                        table.SpacingBefore = 8f;
                        table.WidthPercentage = 100;
                        cell = PhraseCarta(new Phrase("REEMPLAZANDO LOS VALORES EN LA FORMULA MATEMÁTICA TENEMOS:", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_CENTER);
                        cell.Colspan = 6;
                        cell.BackgroundColor = BaseColor.GRAY;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase(Liq.AcliDeFo, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_JUSTIFIED);
                        cell.Colspan = 6;
                        cell.BorderColor = BaseColor.GRAY;
                        table.AddCell(cell);

                        document.Add(table);

                        table = new PdfPTable(6);

                        table.HorizontalAlignment = Element.ANCHOR;
                        table.SetWidths(new float[] { 10f, 10f, 10f, 10f, 10f, 10f });
                        table.SpacingBefore = 8f;
                        table.WidthPercentage = 100;
                        cell = PhraseCarta(new Phrase("OBSERVACIONES", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_CENTER);
                        cell.Colspan = 6;
                        cell.BackgroundColor = BaseColor.GRAY;
                        table.AddCell(cell);

                        cell = PhraseCarta(new Phrase(Liq.AcLiObse, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_JUSTIFIED);
                        cell.Colspan = 6;
                        cell.BorderColor = BaseColor.GRAY;
                        table.AddCell(cell);

                        document.Add(table);


                        document.Close();
                    
                    byte[] bytes = memoryStream1.ToArray();
                        memoryStream1.Close();
                        GuardarDoc(acta, 13, saveAs, user);
                        return saveAs;
                    }
                
            }
            catch (Exception ex)
            {

                Log.EscribirTraza("Error al generar PDF Liquidacion " + acta.ToString());
                throw ex;
            }
        }
        protected static void GuardarDoc(int acta, int tipo, string Url, string usuario)
        {
            try
            {
                BllDocumentos.Documentos Doc = new BllDocumentos.Documentos();
                Doc.DocuActa = acta;
                Doc.DocuTiDo = tipo;
                Doc.DocuUrLo = Url;
                Doc.DocuUsCa = usuario;
                Doc.DocuFeCa = DateTime.Now;
                Doc.Insert();
            }
            catch (Exception ex)
            {
                Log.EscribirTraza("Error al guardar Documento Tipo " + tipo +" Acta: "+ acta.ToString());
                throw ex;
            }
        }
        public static string GenerarCarta(int acta, int conse, string usuario, bool evol)
        {
            try
            {
                

                    BllActas.Actas Act = new BllActas.Actas();
                    BllProcesoSimpli.ProcesoSimpli Pro = new BllProcesoSimpli.ProcesoSimpli();
                    List<BllAnomalias.Anomalias> Ano = new List<BllAnomalias.Anomalias>();
                    BllEmpresas.Empresas Emp = new BllEmpresas.Empresas();

                    Act = BllActas.GetActa(acta);
                    Ano = BllAnomalias.CargarGridView(acta);
                    Pro = BllProcesoSimpli.GetPerson(conse);
                    Emp = BllEmpresas.GetPerson(Pro.Oficina);
                    string filename = "";
                    string irregularidades = "";
                    foreach (var item in Ano)
                    {
                        irregularidades += item.AcAnDesc + ",";
                    }

                    Document document = new Document(PageSize.LETTER, 90, 50, 30, 65);
                    document.SetMargins(25f, 25f, 25f, 25f);
                    //  iTextSharp.text.Font NormalFont = FontFactory.GetFont("Arial", 12, Font.NORMAL, Color.Black);
                    if (Act.protocolo == 0)
                    {
                        filename = "PSE" + acta.ToString() + ".pdf"; ;
                    }
                    else
                    {
                        filename = "PSP" + acta.ToString() + ".pdf"; ;
                    }

                    string saveAs = (@"~\File\Documentos\ProcesoSimplificado\" + filename);
                    using (System.IO.MemoryStream memoryStream1 = new System.IO.MemoryStream())
                    {
                        PdfWriter writer = PdfWriter.GetInstance(document, new System.IO.FileStream(HttpContext.Current.Server.MapPath(saveAs), FileMode.Create));
                        Phrase phrase = null;
                        PdfPCell cell = null;
                        PdfPTable table = null;
                        BaseColor color = BaseColor.YELLOW;

                        document.Open();

                        int para = 1;
                        //Header Table
                        table = new PdfPTable(1);
                        table.TotalWidth = 700f;
                        table.LockedWidth = true;
                        table.SetWidths(new float[] { 8f });
                        table.WidthPercentage = 100;
                        //Company Logo
                        cell = ImageCell("~/images/Electricaribe.png", 50f, PdfPCell.ALIGN_CENTER);
                        cell.Colspan = 8;
                        table.AddCell(cell);

                        document.Add(table);

                        string dia = DateTime.Now.ToString("D", new CultureInfo("es-ES"));


                        table = new PdfPTable(8);
                        table.HorizontalAlignment = Element.ANCHOR;
                        table.SetWidths(new float[] { 10f, 10f, 10f, 10f, 10f, 10f, 10f, 10f });
                        table.SpacingBefore = 8f;
                        table.WidthPercentage = 100;
                        cell = PhraseCarta(new Phrase(Emp.EmprMuni.ToUpper()+", " + dia.ToUpper(), FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);

                        cell = PhraseCarta(new Phrase("Radicación # :" + Pro.NoRaPrec, FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_RIGHT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase("Señor(a):", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);

                        cell = PhraseCarta(new Phrase(Pro.Cliente, FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        if (Act.codigoTarifa.Contains("RS") || Act.codigoTarifa.Contains("RS"))
                        {
                            cell = PhraseCarta(new Phrase("REPRESENTANTE SUSCRIPTOR COMUNITARIO BARRIO " + Act.localidad, FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 8;
                            table.AddCell(cell);
                        }
                        cell = PhraseCarta(new Phrase("DIRECCIÓN:", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase(Pro.DireProce, FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 6;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase("NIC:", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase(Act.nic, FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 6;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase("DEPARTAMENTO:", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase(Emp.EmprDpto.ToUpper(), FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 6;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase("MUNICIPIO:", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase(Emp.EmprMuni.ToUpper(), FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 6;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase("LOCALIDAD:", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase(Act.localidad.ToUpper(), FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 6;
                        table.AddCell(cell);
                        document.Add(table);

                        table = new PdfPTable(8);
                        table.HorizontalAlignment = Element.ANCHOR;
                        table.SetWidths(new float[] { 10f, 10f, 10f, 10f, 10f, 10f, 10f, 10f });
                        table.SpacingBefore = 10f;
                        table.WidthPercentage = 100;

                        cell = PhraseCarta(new Phrase("Referencia:", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase("Fundamento y Soportes de la factura de energía consumida dejada de facturar " + Pro.NoFaProc, FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 6;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase(" ", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        cell = PhraseCarta(new Phrase(" ", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        cell = PhraseCarta(new Phrase("Cordial Saludo,", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase(" ", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        cell = PhraseCarta(new Phrase(" ", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        if (Act.codigoTarifa.Contains("RS") || Act.codigoTarifa.Contains("RS"))
                        {
                            cell = PhraseCarta(new Phrase("La empresa Electricaribe S.A E.S.P., en ejercicio de las facultades conferidas por la Ley 142 de 1994, el Contrato de Condiciones Uniformes y demás normas que regulan la prestación del Servicio Público Domiciliario de Energía Eléctrica, el día " + Act._clientCloseTs.ToShortDateString() + " realizó una revisión de las instalación eléctrica del(os) totalizador(es) del Barrio Subnormal " + Act.localidad + ", ubicado en el municipio " + Act.municipio.ToUpper() + ", del departamento " + Act.departamento + ", identificado(s) en el sistema comercial, con el(os) NIC " + Act.nic + ", así como también su punto de conexión. ", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 8;
                            table.AddCell(cell);
                            document.Add(table);

                            table = new PdfPTable(8);
                            table.HorizontalAlignment = Element.ANCHOR;
                            table.SetWidths(new float[] { 10f, 10f, 10f, 10f, 10f, 10f, 10f, 10f });
                            table.SpacingBefore = 10f;
                            table.WidthPercentage = 100;

                            cell = PhraseCarta(new Phrase(@"La revisión técnica se realizó conforme a lo establecido en el numeral 6 de la cláusula denominada “RESPONSABILIDAD ESPECIALES DE ELECTRICARIBE” y la cláusula “APLICACIÓN ACUERDO DE CONDICIONES UNIFORMES” del contrato especial de suministro de energía celebrado con el Suscriptor Comunitario del Barrio Subnormal que Ud. representa, así como lo establecido en la cláusulas 43 “VERIFICACIÓN EN SITIO DE INSTALACIÓN Y DE EQUIPOS PARA MEDICIÓN DE ENERGÍA ELÉCTRICA”  del Contrato de Condiciones Uniformes de ELECTRICARIBE y lo aplicable de la cláusula 44 “GARANTÍAS PARA LA VERIFICACIÓN EN SITIO” del mismo contrato, a cuya remisión hace la cláusula “APLICACIÓN ACUERDO DE CONDICIONES UNIFORMES” del contrato suscrito entre ELECTRICARIBE y el Suscriptor Comunitario del Barrio Subnormal que Ud. representa, en todo aquello que resulte compatible con este contrato. ", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 8;
                            table.AddCell(cell);
                            cell = PhraseCarta(new Phrase(" ", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 8;
                            table.AddCell(cell);
                            cell = PhraseCarta(new Phrase("Para efectos de acreditar las actuaciones desarrolladas en la vista, se levantó el acta de revisión  No. " + Act._number + " en la cual se dejó constancia de todo lo anterior y de la siguiente anomalía técnica: " + irregularidades.ToUpper() + ".  Constancia de dicha visita  fue entregada al usuario al momento de culminar la visita. ", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 8;
                            table.AddCell(cell);

                            document.Add(table);
                        }
                        else
                        {
                            cell = PhraseCarta(new Phrase("La empresa Electricaribe S.A E.S.P. en ejercicio de las facultades conferidas por la Ley 142 de 1994, el Contrato de Condiciones Uniformes y demás normas que regulan la prestación " +
                            " del Servicio Público Domiciliario de Energía Eléctrica, realizó una revisión de la instalación eléctrica   el día " +
                           Act._clientCloseTs.ToString("D", new CultureInfo("es-ES")).ToUpper() + " en las instalaciones eléctricas del inmueble ubicado en la " + Act.direccion + " del Municipio de " + Act.municipio.ToUpper() + ",  identificado en el sistema comercial, " +
                           "con el NIC " + Act.nic + ", levantándose acta de revisión e instalación eléctrica No. " + Act._number.ToString() + " en la cual se dejó constancia de la anomalía técnica detectada y de haber comunicado al cliente/usuario el derecho que tiene de ser asistido por un técnico particular. ", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_JUSTIFIED);
                            cell.Colspan = 8;
                            table.AddCell(cell);
                            document.Add(table);

                            table = new PdfPTable(8);
                            table.HorizontalAlignment = Element.ANCHOR;
                            table.SetWidths(new float[] { 10f, 10f, 10f, 10f, 10f, 10f, 10f, 10f });
                            table.SpacingBefore = 10f;
                            table.WidthPercentage = 100;
                            cell = PhraseCarta(new Phrase("La revisión técnica se realizó conforme a lo establecido en las cláusulas 43 “VERIFICACIÓN EN SITIO DE INSTALACIÓN Y DE EQUIPOS PARA MEDICIÓN DE ENERGÍA ELÉCTRICA” y 44 “GARANTÍAS PARA LA VERIFICACIÓN EN SITIO” del Contrato de Condiciones Uniformes de ELECTRICARIBE y las normas técnicas, concediéndoles incluso al usuario el derecho de ser asistido por un técnico particular. ", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_JUSTIFIED);
                            cell.Colspan = 8;
                            table.AddCell(cell);

                            document.Add(table);
                        }



                        if (Act.protocolo != 0)
                        {
                            table = new PdfPTable(8);
                            table.HorizontalAlignment = Element.ANCHOR;
                            table.SetWidths(new float[] { 10f, 10f, 10f, 10f, 10f, 10f, 10f, 10f });
                            table.SpacingBefore = 10f;
                            table.WidthPercentage = 100;
                            cell = PhraseCarta(new Phrase("En desarrollo de esta visita técnica se realizó un censo de carga, se tomaron fotografías y filmaciones de los equipos revisados, se retiró el medidor No. " + Pro.NoMeProc + ", marca " + Pro.MaMePrec + ", el cual se depositó en una bolsa de seguridad para garantizar la cadena de custodia del equipo hasta ser entregado en el Laboratorio. ", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_JUSTIFIED);
                            cell.Colspan = 8;
                            table.AddCell(cell);
                            cell = PhraseCarta(new Phrase(" ", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 8;
                            table.AddCell(cell);
                            cell = PhraseCarta(new Phrase("Para efectos de acreditar las actuaciones desarrolladas en la vista, se levantó el acta de revisión  No. " + Act._number + " en la cual se dejó constancia de todo lo anterior y de la siguiente anomalía técnica: " + irregularidades.ToUpper() + ".  Constancia de dicha visita  fue entregada al usuario al momento de culminar la visita. ", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 8;
                            table.AddCell(cell);
                            cell = PhraseCarta(new Phrase(" ", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 8;
                            table.AddCell(cell);
                            cell = PhraseCarta(new Phrase("El medidor retirado  fue remitido al laboratorio " + Pro.LaboProc.ToUpper() + "debidamente acreditado ante el Organismo Nacional de Acreditación de Colombia (ONAC), quién siguiendo todos los procedimientos acreditados adelantó la revisión de este equipo.", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 8;
                            //cell = PhraseCarta(new Phrase(Pro.AnLaProce, FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                            //cell.Colspan = 8;
                            //table.AddCell(cell);

                            table.AddCell(cell);
                            document.Add(table);
                        }

                        table = new PdfPTable(8);
                        table.HorizontalAlignment = Element.ANCHOR;
                        table.SetWidths(new float[] { 10f, 10f, 10f, 10f, 10f, 10f, 10f, 10f });
                        table.SpacingBefore = 8f;
                        table.WidthPercentage = 100;
                        cell = PhraseCarta(new Phrase("Teniendo en cuenta lo anterior, ELECTRICARIBE procedió a la valoración de las siguientes pruebas y soportes, los cuales se encuentran adjuntos al presente documento, para su conocimiento: ", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_JUSTIFIED);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        document.Add(table);

                        table = new PdfPTable(8);
                        table.HorizontalAlignment = Element.ANCHOR;
                        table.SetWidths(new float[] { 10f, 10f, 10f, 10f, 10f, 10f, 10f, 10f });
                        table.SpacingBefore = 10f;
                        table.WidthPercentage = 100;
                        cell = PhraseCarta(new Phrase(para.ToString() + ".     Acta de Revisión: Dentro del expediente, se encuentra como prueba documental el Acta de Revisión con Orden de Servicio No. " +
                            Act._number + " de fecha  " + String.Format("{0:dd/MM/yyyy}", Act._clientCloseTs.ToShortDateString()) + " en la cual se plasmaron los resultados evidenciados en la revisión técnica desarrollada en las " +
                            "instalaciones eléctricas del inmueble en mención, en está acta se consignó la anomalía consistente en: " + irregularidades.ToUpper() + " datos del cliente, datos del predio, " +
                            "censo de carga de los aparatos eléctricos susceptibles de conexión encontrándose " + Act.censoCargaInstalada + " kW.", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_JUSTIFIED);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        para++;
                        document.Add(table);
                        table = new PdfPTable(8);
                        table.HorizontalAlignment = Element.ANCHOR;
                        table.SetWidths(new float[] { 10f, 10f, 10f, 10f, 10f, 10f, 10f, 10f });
                        table.SpacingBefore = 10f;
                        table.WidthPercentage = 100;
                        cell = PhraseCarta(new Phrase(para.ToString() + ".     Fotografías  que evidencian la Anomalía Técnica detectada: En desarrollo de la revisión se obtuvieron registros fotográficos que soportan el procedimiento adelantado el día de la revisión técnica y evidencian la anomalía detectada.", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_JUSTIFIED);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        para++;
                        document.Add(table);
                        table = new PdfPTable(8);
                        table.HorizontalAlignment = Element.ANCHOR;
                        table.SetWidths(new float[] { 10f, 10f, 10f, 10f, 10f, 10f, 10f, 10f });
                        table.SpacingBefore = 10f;
                        table.WidthPercentage = 100;
                        cell = PhraseCarta(new Phrase(para.ToString() + ".     Formato de Liquidación: Es la cuantificación de la energía consumida dejada de facturar,  a causa de la anomalía detectada, conforme al método de liquidación establecido para este caso en particular.", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_JUSTIFIED);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        para++;
                        document.Add(table);
                        if (Act.codigoTarifa.Contains("RS") || Act.codigoTarifa.Contains("RS"))
                        {

                            table = new PdfPTable(8);
                            table.HorizontalAlignment = Element.ANCHOR;
                            table.SetWidths(new float[] { 10f, 10f, 10f, 10f, 10f, 10f, 10f, 10f });
                            table.SpacingBefore = 8f;
                            table.WidthPercentage = 100;
                            cell = PhraseCarta(new Phrase("De la valoración de todas estas pruebas, se puede establecer la existencia de la siguiente anomalía: " + irregularidades.ToUpper() + ". Esta anomalía técnica evidentemente afecta la medida, ya que le impide al medidor registrar la totalidad de la energía que efectivamente se consume en el inmueble, lo cual da lugar al cobro de un energía consumida dejada de facturar, tal y como lo establecen las cláusulas 46 y 47 del Contrato de Condiciones Uniformes de ELECTRICARIBE, aplicable por expresa remisión del contrato suscrito entre ELECTRICARIBE y el Suscriptor Comunitario del Barrio Subnormal que Ud. representa, tal y como se indicó anteriormente.  ", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 8;
                            table.AddCell(cell);
                        }
                        else
                        {
                            //table = new PdfPTable(8);
                            //table.HorizontalAlignment = Element.ANCHOR;
                            //table.SetWidths(new float[] { 10f, 10f, 10f, 10f, 10f, 10f, 10f, 10f });
                            //table.SpacingBefore = 10f;
                            //table.WidthPercentage = 100;
                            //cell = PhraseCarta(new Phrase(para.ToString()+".     Informe Técnico: Documento que amplia y complementa lo consignado en el acta de revisión con orden de servicio No. " +
                            //    Act._number + ".", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_JUSTIFIED);
                            //cell.Colspan = 8;
                            //table.AddCell(cell);para ++;
                            //document.Add(table);

                            if (evol)
                            {
                                table = new PdfPTable(8);
                                table.HorizontalAlignment = Element.ANCHOR;
                                table.SetWidths(new float[] { 10f, 10f, 10f, 10f, 10f, 10f, 10f, 10f });
                                table.SpacingBefore = 8f;
                                table.WidthPercentage = 100;
                                cell = PhraseCarta(new Phrase(para.ToString() + ".     Registro de Evolución de Consumos del suministro obtenido  del sistema de Gestión Comercial de Electricaribe  S.A E.S.P: El registro obtenido del sistema de gestión comercial de Electricaribe,  contiene los consumos facturados al cliente identificado con el NIC " + Act.nic + ".", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_JUSTIFIED);
                                cell.Colspan = 8;
                                table.AddCell(cell);
                                para++;
                                document.Add(table);
                            }
                            if (Act.protocolo != 0)
                            {
                                table = new PdfPTable(8);
                                table.HorizontalAlignment = Element.ANCHOR;
                                table.SetWidths(new float[] { 10f, 10f, 10f, 10f, 10f, 10f, 10f, 10f });
                                table.SpacingBefore = 8f;
                                table.WidthPercentage = 100;
                                cell = PhraseCarta(new Phrase("6.     Informe de calibración número " + Pro.InCaPrec + ": Documento emitido por el laboratorio " + Pro.LaboProc.ToUpper() + " debidamente acreditado por el Organismo Nacional de Acreditación en Colombia (ONAC), que describe las  condiciones técnicas que inciden en el registro de la energía consumida  en el suministro.", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_JUSTIFIED);
                                cell.Colspan = 8;
                                table.AddCell(cell);
                                document.Add(table);
                            }
                        }


                        table = new PdfPTable(8);
                        table.HorizontalAlignment = Element.ANCHOR;
                        table.SetWidths(new float[] { 10f, 10f, 10f, 10f, 10f, 10f, 10f, 10f });
                        table.SpacingBefore = 10f;
                        table.WidthPercentage = 100;
                        cell = PhraseCarta(new Phrase("FUNDAMENTOS PARA  DETERMINAR  EL CONSUMO FACTURABLE NO MEDIDO O REGISTRADO.", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);

                        cell = PhraseCarta(new Phrase(" ", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase("De conformidad con lo establecido en la presente comunicación, se prueba por parte de Electricaribe S.A. E.S.P. la existencia de la anomalía técnica encontrada en el inmueble en mención, la cual originó la existencia de una energía consumida dejada de facturar.", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_JUSTIFIED);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        document.Add(table);

                        table = new PdfPTable(8);
                        table.HorizontalAlignment = Element.ANCHOR;
                        table.SetWidths(new float[] { 10f, 10f, 10f, 10f, 10f, 10f, 10f, 10f });
                        table.SpacingBefore = 10f;
                        table.WidthPercentage = 100;
                        cell = PhraseCarta(new Phrase("Determinación del Consumo Facturable  No Medido o Registrado por acción u omisión del usuario:", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);

                        cell = PhraseCarta(new Phrase(" ", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase("El Consumo Facturable no medido o registrado por causa de la anomalía detectada, se determinará por período de facturación (C2), que será la diferencia entre el consumo calculado para el inmueble en condiciones normales (C1) y el consumo medido por ELECTRICARIBE y efectivamente facturado durante el tiempo que permaneció la conducta irregular, si no se logra determinar esto último, durante los últimos cinco (5) meses, (C0), será  la  sumatoria  de los  consumos facturados  irregulares  antes  de la revisión,  según la siguiente fórmula:", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_JUSTIFIED);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase(" ", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase("C2 = C1 – C0", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase("C1= CI x FU x Número de Horas (kWh.), donde:", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase("CI= Carga Encontrada Medida, Censo de Carga o Carga Contratada", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        document.Add(table);

                        table = new PdfPTable(8);
                        table.HorizontalAlignment = Element.ANCHOR;
                        table.SetWidths(new float[] { 10f, 10f, 10f, 10f, 10f, 10f, 10f, 10f });
                        table.SpacingBefore = 10f;
                        table.WidthPercentage = 100;
                        cell = PhraseCarta(new Phrase("Valoración del  Consumo No Registrado:.", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);

                        cell = PhraseCarta(new Phrase(" ", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase("El Consumo No Registrado por acción u omisión del usuario (C2), se valorará a la tarifa vigente (VL) correspondiente al mes de detección del uso no autorizado de energía eléctrica, por el tiempo de permanencia del mismo en meses (TM), según la siguiente fórmula:", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_JUSTIFIED);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase(" ", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase("VC = C2 x VL x TM", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase(" ", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase("La tarifa vigente (VL) será la que corresponda al sector de consumo, incluyendo el costo del servicio y los factores aplicables según la reglamentación existente (contribuciones o subsidios).", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase(" ", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase("Si no se puede establecer el tiempo de permanencia del uso no autorizado del servicio de energía eléctrica (TM) se tomará como rango 720 horas, multiplicado por cinco (5) meses.", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase(" ", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase("De acuerdo a lo consignado en el formato de liquidación adjunto, se procede a cuantificar la energía consumida  dejada  de  facturar  en pesos  de  acuerdo a la tarifa vigente al  momento de la detección de la  irregularidad, así:", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase(" ", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        string total = ((Math.Round(float.Parse(Act.ValorEcdf.ToString()), 2) * Math.Round(float.Parse(Act.ValorTarifa.ToString()), 3))).ToString();
                        total = Math.Round(float.Parse(total), 2).ToString();
                        cell = PhraseCarta(new Phrase("(C2) Energía consumida dejada de facturar=   " + (Math.Round(float.Parse(Act.ValorEcdf.ToString()), 2)).ToString() + " kWh", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase("(VL) Tarifa vigente ($/kWh)=  " + Math.Round(float.Parse(Act.ValorTarifa.ToString()), 3), FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase("Importe del Consumo = " + (Math.Round(float.Parse(Act.ValorEcdf.ToString()), 2)).ToString() + "kWh x " + Math.Round(float.Parse(Act.ValorTarifa.ToString()), 3) + " $/kWh = $" + total, FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase(" ", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase("Adjunto encontrará la factura con la descripción detallada de los conceptos facturados en la misma. ", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase(" ", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase("La empresa Electricaribe S.A. E.S.P., conforme a sus políticas  comerciales, le ofrece  algunos planes  para que usted pueda financiar esta deuda; en virtud a ello le solicitamos se sirva hacer presencia en los centros de atención más cercano a  su  residencia o llamar la línea  de atención 115.", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase("Según lo dispuesto en el inciso 2º del artículo 130 de la ley 142 de 1994 modificado por artículo 18 de la Ley 689 de 2001, el propietario, el suscriptor y usuario del servicio son solidarios en los derechos y obligaciones derivados del contrato de servicios públicos. ", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase("Si usted no está de acuerdo con lo registrado en la factura adjunta podrá presentar las reclamaciones por escrito que considere necesarias, los recursos de ley conforme lo establece la Ley 142 de 1.994, en el centro de atención más cercano a  su  residencia. ", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase(" ", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase("Atentamente,", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase(" ", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase(" ", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);

                        string FIRMA = Emp.EmprFiDi;
                        if (FIRMA != "")
                        {
                            cell = ImageCell(@"~\FirmasDigitales\" + FIRMA, 40f, PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 8;
                            table.AddCell(cell);
                        }

                        document.Add(table);
                        document.Close();
                  
                    byte[] bytes = memoryStream1.ToArray();
                        memoryStream1.Close();
                        GuardarDoc(acta, 16, saveAs, usuario);
                        //GenerarAviso(acta, Pro.Oficina, usuario);
                        return saveAs;
                    }
                
            }
            catch (Exception ex)
            {

                Log.EscribirTraza("Error al generar PDF  Carta Acta Nro: " + acta.ToString());
                throw ex;
            }
        }

        public static string GenerarAviso(int acta, int oficina,string usuario)
        {
            try
            {      
                    string filename = "";

                BllActas.Actas Act = new BllActas.Actas();
                BllProcesoSimpli.ProcesoSimpli Pro = new BllProcesoSimpli.ProcesoSimpli();
                List<BllAnomalias.Anomalias> Ano = new List<BllAnomalias.Anomalias>();
                BllEmpresas.Empresas Emp = new BllEmpresas.Empresas();

                Act = BllActas.GetActa(acta);
                Ano = BllAnomalias.CargarGridView(acta);
                Pro = BllProcesoSimpli.GetPorceXActa(acta);
                Emp = BllEmpresas.GetPerson(oficina);

                BllMensajeria.Mensajeria Mensa = BllMensajeria.GetActa(acta);
                Document document = new Document(PageSize.LETTER, 90, 50, 30, 65);
                    document.SetMargins(25f, 25f, 25f, 25f);
                    //  iTextSharp.text.Font NormalFont = FontFactory.GetFont("Arial", 12, Font.NORMAL, Color.Black);
                    filename = "AV" + acta.ToString() + ".pdf"; ;                    

                    string saveAs = (@"~\File\Documentos\ProcesoSimplificado\" + filename);
                    using (System.IO.MemoryStream memoryStream1 = new System.IO.MemoryStream())
                    {
                        PdfWriter writer = PdfWriter.GetInstance(document, new System.IO.FileStream(HttpContext.Current.Server.MapPath(saveAs), FileMode.Create));
                        Phrase phrase = null;
                        PdfPCell cell = null;
                        PdfPTable table = null;
                        BaseColor color = BaseColor.YELLOW;

                        document.Open();

                        
                        int para = 1;
                        //Header Table
                        table = new PdfPTable(1);
                        table.TotalWidth = 700f;
                        table.LockedWidth = true;
                        table.SetWidths(new float[] { 8f });
                        table.WidthPercentage = 100;
                        //Company Logo
                        cell = ImageCell("~/images/Electricaribe.png", 50f, PdfPCell.ALIGN_CENTER);
                        cell.Colspan = 8;
                        table.AddCell(cell);

                        document.Add(table);

                        string dia = DateTime.Now.ToString("D", new CultureInfo("es-ES"));


                        table = new PdfPTable(8);
                        table.HorizontalAlignment = Element.ANCHOR;
                        table.SetWidths(new float[] { 10f, 10f, 10f, 10f, 10f, 10f, 10f, 10f });
                        table.SpacingBefore = 8f;
                        table.WidthPercentage = 100;
                        cell = PhraseCarta(new Phrase(Emp.EmprMuni.ToUpper() + ", " + dia.ToUpper(), FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell); 
                        cell = PhraseCarta(new Phrase("Señor(a):", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase("Cliente, suscriptor y/o usuario", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);

                        cell = PhraseCarta(new Phrase(Pro.Cliente, FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);                            
                        cell = PhraseCarta(new Phrase("DIRECCIÓN:", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase(Pro.DireProce, FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 6;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase("NIC:", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase(Act.nic, FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 6;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase("DEPARTAMENTO:", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase(Emp.EmprDpto.ToUpper(), FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 6;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase("MUNICIPIO:", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase(Emp.EmprMuni.ToUpper(), FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 6;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase("LOCALIDAD:", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        table.AddCell(cell);
                        cell = PhraseCarta(new Phrase(Act.localidad.ToUpper(), FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 6;
                        table.AddCell(cell);
                        document.Add(table);

                        table = new PdfPTable(8);
                        table.HorizontalAlignment = Element.ANCHOR;
                        table.SetWidths(new float[] { 10f, 10f, 10f, 10f, 10f, 10f, 10f, 10f });
                        table.SpacingBefore = 10f;
                        table.WidthPercentage = 100;

                        cell = PhraseCarta(new Phrase("Ref.: Aviso de suspensión del servicio – Proceso para la determinación, liquidación y cobro de consumos dejados de facturar por  irregularidades o anomalías técnicas No. "+ Act._number+Act.nic, FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        document.Add(table);





                        table = new PdfPTable(8);
                        table.HorizontalAlignment = Element.ANCHOR;
                        table.SetWidths(new float[] { 10f, 10f, 10f, 10f, 10f, 10f, 10f, 10f });
                        table.SpacingBefore = 8f;
                        table.WidthPercentage = 100;
                        cell = PhraseCarta(new Phrase("Estimado usuario, ", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        document.Add(table);
                        string total; //= ((Math.Round(float.Parse(Act.ValorEcdf.ToString()), 2) * Math.Round(float.Parse(Act.ValorTarifa.ToString()), 3))).ToString();
                        total = Math.Round(float.Parse(Pro.ValorTotal.ToString()), 0).ToString();    

                        table = new PdfPTable(8);
                        table.HorizontalAlignment = Element.ANCHOR;
                        table.SetWidths(new float[] { 10f, 10f, 10f, 10f, 10f, 10f, 10f, 10f });
                        table.SpacingBefore = 8f;
                        table.WidthPercentage = 100;
                        cell = PhraseCarta(new Phrase("Luego de haber agotado el procedimiento establecido en la cláusula 49 del Contrato de Condiciones Uniformes  "+
                                "“LIQUIDACIÓN    Y   FACTURACIÓN     DE  LOS     CONSUMOS    DEJADOS     DE  FACTURAR    POR     UNA "+
                                "IRREGULARIDAD TÉCNICA, POR UN HECHO AJENO A LA EMPRESA O POR ACCIÓN U OMISIÓN DEL "+
                                "USUARIO”, ELECTRICARIBE hizo entrega junto con este documento de la factura No. "+Act.nic+ Pro.SimboloVariable+", por la suma de "+
                                
                                " $"+total+" por concepto de energía consumida dejada de facturar, cuya fecha de vencimiento para pago es el día "   +DateTime.Parse(Pro.Fechavencimiento).ToString("D", new CultureInfo("es-ES"))
                                , FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_JUSTIFIED);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        document.Add(table);

                        table = new PdfPTable(8);
                        table.HorizontalAlignment = Element.ANCHOR;
                        table.SetWidths(new float[] { 10f, 10f, 10f, 10f, 10f, 10f, 10f, 10f });
                        table.SpacingBefore = 8f;
                        table.WidthPercentage = 100;
                        cell = PhraseCarta(new Phrase("El artículo 140 de la Ley 142 de 1994 establece que la falta de pago dentro del término que fije la Empresa dará lugar a la suspensión del servicio de energía. Por su parte, la cláusula 63 del mismo contrato en el literal “a)” del numeral 3 “Suspensión por incumplimiento del contrato”, establece la procedencia de dicha medida por la falta de pago oportuno, “salvo que exista reclamación o recurso”."
                                , FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_JUSTIFIED);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        document.Add(table);

                        table = new PdfPTable(8);
                        table.HorizontalAlignment = Element.ANCHOR;
                        table.SetWidths(new float[] { 10f, 10f, 10f, 10f, 10f, 10f, 10f, 10f });
                        table.SpacingBefore = 8f;
                        table.WidthPercentage = 100;
                        cell = PhraseCarta(new Phrase("Teniendo en cuenta lo anterior, si a la fecha de vencimiento de la factura no ha sido cancelada, reclamada o recurrida, ELECTRICARIBE procederá con la suspensión del servicio de energía por incumplimiento del contrato, tal y como lo establecen las normas antes citadas. "
                                , FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_JUSTIFIED);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        document.Add(table);

                        table = new PdfPTable(8);
                        table.HorizontalAlignment = Element.ANCHOR;
                        table.SetWidths(new float[] { 10f, 10f, 10f, 10f, 10f, 10f, 10f, 10f });
                        table.SpacingBefore = 8f;
                        table.WidthPercentage = 100;
                        cell = PhraseCarta(new Phrase("En contra de la decisión contenida en el presente aviso de suspensión, son procedentes los recursos de reposición ante ELECTRICARIBE y apelación ante la Superintendencia de Servicios Públicos Domiciliarios, dentro de los cinco (5) días siguientes a la fecha de su conocimiento, tal y como lo establece el artículo 154 de la Ley 142 de 1994. En caso de padecer una situación de vulnerabilidad que pueda afectar sus derechos fundamentales con ocasión de la suspensión, deberá acreditarlo dentro del plazo de interposición de los recursos.  "
                                , FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_JUSTIFIED);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        document.Add(table);

                    table = new PdfPTable(8);
                    table.HorizontalAlignment = Element.ANCHOR;
                    table.SetWidths(new float[] { 10f, 10f, 10f, 10f, 10f, 10f, 10f, 10f });
                    table.SpacingBefore = 8f;
                    table.WidthPercentage = 100;

                    cell = PhraseCarta(new Phrase("Cordialmente, ", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                    cell.Colspan = 8;
                    table.AddCell(cell);
                    string FIRMA = Emp.EmprFiDi;
                        if (FIRMA != "")
                        {
                            cell = ImageCell(@"~\FirmasDigitales\" + FIRMA, 40f, PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 8;
                            table.AddCell(cell);
                        }
                        cell = PhraseCarta(new Phrase("User: "+usuario, FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);

                        cell = PhraseCarta(new Phrase("Dicha factura  fue acompañada de la liquidación de la energía facturada y demás documentos soportes de dicho cobro. Así mismo, se indicó que contra la factura y sus anexos resultaban procedente la presentación de reclamaciones y recursos en los términos del artículo 154 de la Ley 142 de 1994. ", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_JUSTIFIED);
                        cell.Colspan = 8;
                        table.AddCell(cell);

                   
                    document.Add(table);
                        table = new PdfPTable(1);
                    table.SpacingBefore = 8f;
                    table.SetWidths(new float[] { 8f });
                        table.WidthPercentage = 100;
                        //Company Logo
                        cell = ImageCell("~/images/BannerAvis.png", 40f, PdfPCell.ALIGN_CENTER);
                        cell.Colspan = 8;
                        table.AddCell(cell);

                        document.Add(table);
                    document.Close();
                   
                    byte[] bytes = memoryStream1.ToArray();
                        memoryStream1.Close();
                        GuardarDoc(acta, 21, saveAs, usuario);
                        return saveAs;
                    }
                
            }
            catch (Exception ex)
            {

                Log.EscribirTraza("Error al generar PDF  Aviso" + acta.ToString());
                throw ex;
            }
        }

        public static string GenerarGuia(int acta, string usuario)
        {
            try
            {
                string filename = "";
                string saveAs = "";
                
                    BllActas.Actas Act = new BllActas.Actas();
                    BllProcesoSimpli.ProcesoSimpli Pro = new BllProcesoSimpli.ProcesoSimpli();
                    List<BllAnomalias.Anomalias> Ano = new List<BllAnomalias.Anomalias>();
                    BllEmpresas.Empresas Emp = new BllEmpresas.Empresas();

                    Act = BllActas.GetActa(acta);      
                    Pro = BllProcesoSimpli.GetPorceXActa(acta);
                    Emp = BllEmpresas.GetPerson(Pro.Oficina);
                   
                    BllMensajeria.Mensajeria Mensa = BllMensajeria.GetActa(acta);            
                    Document document = new Document(PageSize.LETTER, 90, 50, 30, 65);
                    document.SetMargins(25f, 25f, 25f, 25f);
                    //  iTextSharp.text.Font NormalFont = FontFactory.GetFont("Arial", 12, Font.NORMAL, Color.Black);
                    filename = "GE" + acta.ToString() + ".pdf"; ;

                     saveAs = (@"~\File\Documentos\Actas\" + filename);
                    using (System.IO.MemoryStream memoryStream1 = new System.IO.MemoryStream())
                    {
                        PdfWriter writer = PdfWriter.GetInstance(document, new System.IO.FileStream(HttpContext.Current.Server.MapPath(saveAs), FileMode.Create));
                        Phrase phrase = null;
                        PdfPCell cell = null;
                        PdfPTable table = null;
                        BaseColor color = BaseColor.YELLOW;

                        document.Open();
                       
                        string dia = "";
                        for (int i = 0; i < 3; i++)
                        {
                            
                            if(i == 0)
                            {
                                dia = "USUARIO";
                            }else if (i == 1)
                            {
                                dia = "EMPRESA DE MENSAJERIA";
                            }
                            else
                            {
                                dia = "ELECTRICARIBE";
                            }
                            table = new PdfPTable(1);
                            table.TotalWidth = 700f;
                            table.LockedWidth = true;
                            table.SetWidths(new float[] { 8f });
                            table.WidthPercentage = 100;
                            table.SpacingBefore = 10f;
                            //Company Logo
                            cell = ImageCell("~/images/Guia.png", 50f, PdfPCell.ALIGN_CENTER);
                            cell.Colspan = 8;
                            table.AddCell(cell);

                            document.Add(table);

                            table = new PdfPTable(6);
                            table.HorizontalAlignment = Element.ANCHOR;
                            table.SetWidths(new float[] { 10f, 10f, 10f, 10f, 10f, 10f });
                            table.SpacingBefore = 10f;
                            table.WidthPercentage = 100;
                            cell = PhraseCarta(new Phrase(dia, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_CENTER);
                            cell.Colspan = 6;
                            cell.BorderColor = BaseColor.GRAY;                                
                            table.AddCell(cell);                              
                            document.Add(table);

                            table = new PdfPTable(12);
                            table.HorizontalAlignment = Element.ANCHOR;
                            table.SetWidths(new float[] { 10f, 10f, 10f, 10f, 10f, 10f, 10f, 10f, 10f, 10f, 10f, 10f });
                            table.SpacingBefore = 20f;
                            table.WidthPercentage = 100;


                           
                            cell = PhraseCarta(new Phrase("Cliente: ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 1;
                            cell.BorderColor = BaseColor.BLACK;
                            cell.Padding = 2;
                            table.AddCell(cell);
                            cell = PhraseCarta(new Phrase(Act.nombreTitularContrato + " " + Act.apellido1TitularContrato + " " + Act.apellido2TitularContrato, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 3; cell.Padding = 2; cell.BorderColor = BaseColor.BLACK;
                            table.AddCell(cell);
                            cell = PhraseCarta(new Phrase("NIC: ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 1; cell.Padding = 2; cell.BorderColor = BaseColor.BLACK;
                            table.AddCell(cell);
                            cell = PhraseCarta(new Phrase(Act.nic, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 3; cell.Padding = 2; cell.BorderColor = BaseColor.BLACK;
                            table.AddCell(cell);
                            cell = PhraseCarta(new Phrase("Radicado: ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 1; cell.BorderColor = BaseColor.BLACK; cell.Padding = 2;
                            table.AddCell(cell);
                            cell = PhraseCarta(new Phrase(Act._number.ToString() + Act.nic, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 3; cell.Padding = 2; cell.BorderColor = BaseColor.BLACK;
                            table.AddCell(cell);

                            cell = PhraseCarta(new Phrase("Dirección: ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 1; cell.Padding = 2; cell.BorderColor = BaseColor.BLACK;
                            table.AddCell(cell);
                            cell = PhraseCarta(new Phrase(Pro.DireProce, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 3; cell.Padding = 2; cell.BorderColor = BaseColor.BLACK;
                            table.AddCell(cell);



                            cell = PhraseCarta(new Phrase("Empresa : ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 1; cell.Padding = 2; cell.BorderColor = BaseColor.BLACK;
                            table.AddCell(cell);
                            cell = PhraseCarta(new Phrase(Mensa.DescOper, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 3; cell.Padding = 2; cell.BorderColor = BaseColor.BLACK;
                            table.AddCell(cell);
                            cell = PhraseCarta(new Phrase("Fecha : ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 1; cell.Padding = 2; cell.BorderColor = BaseColor.BLACK;
                            table.AddCell(cell);
                            cell = PhraseCarta(new Phrase(Mensa.MensFeSi.ToString("dd/MM/yyyy", new CultureInfo("es-ES")), FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 3; cell.Padding = 2; cell.BorderColor = BaseColor.BLACK;
                            table.AddCell(cell);

                            //  cell.AddElement(imageCode39)    
                            PdfPTable tabla = new PdfPTable(3);
                            //a la tabla le asignamos un 100% de anchura
                            tabla.SpacingBefore = 10f;
                            tabla.WidthPercentage = 100;
                            //alineamos la tabla a la izquierda porque si  
                            //no la tabla solo ocuparia el 80% del ancho   
                            //total del documento, es decir, centrandolo.
                            tabla.HorizontalAlignment = Element.ALIGN_LEFT;
                            //debido a que varios namespaces tienen  
                            //el objeto Image, hay que hacer la referencia  
                            //completa.          
                            //Tambien creamos una nueva instancia de 
                            //imagen diciendole donde esta la imagen.  
                            //esto sirve para convertir un codigo de barras en una imagen  
                            PdfContentByte cb = writer.DirectContent;
                            PdfPCell celda = new PdfPCell();
                            //creamos un codigo de barras    
                            Barcode39 codigoBarras = new Barcode39();
                            //creamos una imagen en la que guardaremos el codigo de barras
                            iTextSharp.text.Image barcode;
                            //asignamos las propiedades necesarias a la celda       
                            // celda.FixedHeight = 100;
                            celda.Colspan = 3;
                            celda.Padding = 1;
                            celda.BorderColor = BaseColor.WHITE;
                            celda.BorderWidth = 1f;
                            //propiedades del codigo de barras   
                            codigoBarras.CodeType = Barcode128.CODABAR;
                            codigoBarras.Code = Pro.NoRaPrec;
                            //conversion del objeto barcode al tipo image   
                            barcode = codigoBarras.CreateImageWithBarcode(cb, null, null);
                            barcode.ScaleAbsolute(250f, 30f);
                            celda.AddElement(barcode);
                            tabla.AddCell(celda);

                            document.Add(tabla);


                            document.Add(table);


                            table = new PdfPTable(6);
                            table.HorizontalAlignment = Element.ANCHOR;
                            table.SetWidths(new float[] { 10f, 10f, 10f, 10f, 10f, 10f });
                            table.SpacingBefore = 10f;
                            table.WidthPercentage = 100;
                            cell = PhraseCarta(new Phrase("-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_JUSTIFIED);
                            cell.Colspan = 6;                 
                            table.AddCell(cell);
                            document.Add(table);

                        }
                        
                        //Header Table
                       
                        document.Close();
                       
                    byte[] bytes = memoryStream1.ToArray();
                        memoryStream1.Close();
                        GuardarDoc(acta, 22, saveAs, usuario);
                        
                    }        
                
                return saveAs;
            }
            catch (Exception ex)
            {  
                Log.EscribirTraza("Error al generar PDF  Guia- "+ acta.ToString());
                throw ex;
            }
        }
        public static void GenerarActa(int number, string usuario)
        {
            try
            {

                BllActas.Actas Act = new BllActas.Actas();
                BllDocumentos.Documentos Doc = new BllDocumentos.Documentos();
                List<BllDocumentos.Documentos> Docu = new List<BllDocumentos.Documentos>();
                List<BllDocumentos.Documentos> ListDocu = new List<BllDocumentos.Documentos>();
                BllActa_Medidor.Acta_Medidor Me = new BllActa_Medidor.Acta_Medidor();
                List<BllAC_Sellos.AC_Sellos> Sellos = new List<BllAC_Sellos.AC_Sellos>();
                List<BllAnomalias.Anomalias> Ano = new List<BllAnomalias.Anomalias>();
                List<BllCensoActas.CensoActas> Cen = new List<BllCensoActas.CensoActas>();
                List<BllMaterialeses.Materiales> Mat = new List<BllMaterialeses.Materiales>();
                BllDocumentos.Documentos Firma = new BllDocumentos.Documentos();
                BllDocumentos.Documentos Huella = new BllDocumentos.Documentos();
                List<BllTrabajosEjecutados.TrabajosEjecutados> Tra = new List<BllTrabajosEjecutados.TrabajosEjecutados>();
                Act = BllActas.GetActa(number);
                Docu = BllDocumentos.GetCargoXActa(Act._number);
                Me = BllActa_Medidor.GetMedidorEncontrado(number);
                Sellos = BllAC_Sellos.GetAC_SellosXNumeroActa((number));
                Cen = BllCensoActas.CargarGridView(number);
                Ano = BllAnomalias.CargarGridView(number);
                Firma = BllDocumentos.GetFirmaOperario(number, 10);
                Tra = BllTrabajosEjecutados.CargarGridView(number);
                Mat = BllMaterialeses.CargarGridView(number);
                Document document = new Document(PageSize.LETTER, 90, 50, 30, 65);
                    document.SetMargins(25f, 25f, 25f, 25f);
                    //  iTextSharp.text.Font NormalFont = FontFactory.GetFont("Arial", 12, Font.NORMAL, Color.Black);
                    string saveAs = "";
                    string filename = number.ToString() + ".pdf"; ;
                    saveAs = (@"~\File\Documentos\Actas\" + filename);
                    using (System.IO.MemoryStream memoryStream = new System.IO.MemoryStream())
                    {
                        if (File.Exists(saveAs))
                        {
                            idx += 1;
                            saveAs = string.Format("{0}.{1}.pdf", saveAs, idx);
                        }
                        PdfWriter writer = PdfWriter.GetInstance(document, new System.IO.FileStream(HttpContext.Current.Server.MapPath(saveAs), FileMode.Create));
                        Phrase phrase = null;
                        PdfPCell cell = null;
                        PdfPTable table = null;
                        BaseColor color = BaseColor.YELLOW;

                        document.Open();


                        //Header Table
                        table = new PdfPTable(1);
                        table.TotalWidth = 700f;
                        table.LockedWidth = true;
                        table.SetWidths(new float[] { 8f });
                        table.WidthPercentage = 100;
                        //Company Logo
                        cell = ImageCell(@"~\File\Documentos\Actas\Acta.png", 50f, PdfPCell.ALIGN_CENTER);
                        cell.Colspan = 8;
                        table.AddCell(cell);                                     
                        document.Add(table);

                        table = new PdfPTable(8);
                        table.HorizontalAlignment = Element.ANCHOR;
                        table.SetWidths(new float[] { 10f, 10f, 10f, 10f, 10f, 10f, 10f, 10f });
                        table.SpacingBefore = 8f;
                        table.WidthPercentage = 100;
                        //table.TotalWidth = 0f;
                        //document.Add(table);

                        cell = PhraseCell(new Phrase("ACTA DE REVISIÓN NÚMERO :  " + Act._number.ToString(), FontFactory.GetFont("Arial", 14, iTextSharp.text.Font.BOLD, BaseColor.BLUE)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        cell.BorderColor = BaseColor.WHITE;
                        cell.BackgroundColor = BaseColor.WHITE;
                        table.AddCell(cell);

                        //cell = PhraseCell(new Phrase("Número OS:  " + Act._number.ToString(), FontFactory.GetFont("Arial", 14, iTextSharp.text.Font.BOLD, BaseColor.BLUE)), PdfPCell.ALIGN_RIGHT);
                        //cell.Colspan = 4;
                        //cell.BorderColor = BaseColor.WHITE;
                        //cell.BackgroundColor = BaseColor.WHITE;
                        //table.AddCell(cell);
                        document.Add(table);
                        //Employee Details
                        table = new PdfPTable(8);
                        table.HorizontalAlignment = Element.ANCHOR;
                        table.SetWidths(new float[] { 10f, 10f, 10f, 10f, 10f, 10f, 10f, 10f });
                        table.SpacingBefore = 8f;
                        table.WidthPercentage = 100;
                        string atendioVisita;
                        if (Act.relacionReceptorVisita == "El titular")
                        {
                            atendioVisita = Act.nombreTitularContrato + " " + Act.apellido1TitularContrato + " " + Act.apellido2TitularContrato + "con C.C. " + Act.cedulaTitularContrato;
                        }
                        else
                        {
                            atendioVisita = Act.nombreReceptorVisita + " " + Act.apellido1ReceptorVisita + " " + Act.apellido2ReceptorVisita + "con C.C." + Act.cedulaReceptorVisita;
                        }
                        cell = PhraseCell(new Phrase("A los " + Act._clientCloseTs.Day + " días del mes  " + Act._clientCloseTs.Month + " del " + Act._clientCloseTs.Year + ", siendo las " + Act._clientCloseTs.ToShortTimeString() + "  se hace presente en el inmueble identificado comercialmente con el NIC " + Act.nic +
                             " la siguiente persona " + Act.nombreOperario + " " + Act.apellido1Operario + " " + Act.apellido2Operario + " en representación de Electricaribe " + Act.codigoEmpresa + " y en presencia del señor(a) "
                            + atendioVisita + ", en calidad de clientes/usuario, con el fin de efectuar una revisión de los equipos de"
                            + " medida e instalaciones eléctricas del inmueble con el NIC indicado, cuyo resultado ha sido el siguiente:", FontFactory.GetFont("Arial", 9, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        cell.BorderColor = BaseColor.WHITE;
                        table.AddCell(cell);
                        document.Add(table);
                        /*DATOS DEL SUMINISTRO*/
                        table = new PdfPTable(8);
                        //table.LockedWidth = true;
                        table.HorizontalAlignment = Element.ANCHOR;
                        table.SetWidths(new float[] { 4f, 4f, 4f, 4f, 4f, 4f, 4f, 4f });
                        table.SpacingBefore = 10f;
                        table.WidthPercentage = 100;
                        //table.TotalWidth = 10f;
                        //Employee Details
                        cell = PhraseCell(new Phrase("Datos del suministro", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        cell.BackgroundColor = BaseColor.GRAY;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Nic:  ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Act.nic, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Tipo Cliente:  ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Act.tipoCliente, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Estrato:  ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Act.estrato.ToString(), FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("C. Contratada(W): ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Act.cargaContratada.ToString(), FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);

                        document.Add(table);


                        /*DATOS DEL SUMINISTRO*/
                        table = new PdfPTable(8);
                        //table.LockedWidth = true;
                        table.HorizontalAlignment = Element.ANCHOR;
                        table.SetWidths(new float[] { 4f, 4f, 4f, 4f, 4f, 4f, 4f, 4f });
                        table.SpacingBefore = 10f;
                        table.WidthPercentage = 100;
                        //table.TotalWidth = 10f;
                        //Employee Details
                        cell = PhraseCell(new Phrase("Localización", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        cell.BackgroundColor = BaseColor.GRAY;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Departamento:  ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Act.departamento, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Municipio:  ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Act.municipio, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Localidad:  ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Act.localidad, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Tipo Via: ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Act.tipoVia, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);

                        cell = PhraseCell(new Phrase("Calle: ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Act.calle, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Duplicador:  ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Act.duplicador, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Num. Puerta:  ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Act.numeroPuerta, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        
                        cell = PhraseCell(new Phrase("Piso:  ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Act.piso, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Ref. Dir.: ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Act.referenciaDireccion, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Acceso : ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Act.acceso, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Dirección : ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Act.direccion, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        table.AddCell(cell);

                        cell = PhraseCell(new Phrase("Fotografías Fachada : ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 3;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Ver Anexo", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.ITALIC, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 5;
                        table.AddCell(cell);
                        /*titular contrato*/

                        cell = PhraseCell(new Phrase("Titular Contrato", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        cell.BackgroundColor = BaseColor.GRAY;
                        table.AddCell(cell);

                        cell = PhraseCell(new Phrase("Nombre:  ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Act.nombreTitularContrato, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 3;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Apellidos:  ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Act.apellido1TitularContrato + " " + Act.apellido2TitularContrato, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 3;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Cedula: ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Act.cedulaTitularContrato, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);

                        cell = PhraseCell(new Phrase("Telefono fijo: ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Act.telefonoFijoTitularContrato, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);

                        cell = PhraseCell(new Phrase("Telefono Movil:  ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Act.cedulaTitularContrato, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Email:  ", FontFactory.GetFont("Arial", 7, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Act.emailTitularContrato, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 3;
                        table.AddCell(cell);
                        /*persona que atiende visita*/
                        cell = PhraseCell(new Phrase("Persona que atendio Visita", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        cell.BackgroundColor = BaseColor.GRAY;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Relación con el titular:  ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Act.relacionReceptorVisita, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Nombre : ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Act.nombreReceptorVisita + " " + Act.apellido1ReceptorVisita + " " + Act.apellido2ReceptorVisita, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Cedula : ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Act.cedulaReceptorVisita, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Soliccita Técnico? : ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Act.solicitaTecnicoReceptorVisita, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Aporta Testigo? : ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Act.aportaTestigo, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 7;
                        table.AddCell(cell);


                        /*Aparatos encontrados*/
                        cell = PhraseCell(new Phrase("Aparatos", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        cell.BackgroundColor = BaseColor.GRAY;
                        table.AddCell(cell);

                        cell = PhraseCell(new Phrase("Aparatos Encontrados", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        cell.BackgroundColor = BaseColor.LIGHT_GRAY;
                        table.AddCell(cell);

                        cell = PhraseCell(new Phrase("Datos del medidor", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        cell.BackgroundColor = BaseColor.GRAY;
                        table.AddCell(cell);


                        cell = PhraseCell(new Phrase("Revisión Medidor:  ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.tipoRevision, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 7;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Número medidor : ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.numero, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Marca : ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.marca, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Tipo : ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.tipo, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Tecnología : ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.tecnologia, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);

                        cell = PhraseCell(new Phrase("Lecturas", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        cell.BackgroundColor = BaseColor.WHITE;
                        table.AddCell(cell);


                        cell = PhraseCell(new Phrase("Fecha última lectura:  ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.lecturaUltimaFecha, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Última lectura : ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.lecturaUltima, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Fecha lectura actual : ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Act._clientCloseTs.ToShortDateString(), FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Lectura actual : ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.lecturaActual, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Kh/Kd : ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        cell.BackgroundColor = BaseColor.GRAY;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Kd/Kh : ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.kdkh_tipo, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 3;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Valor : ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.kdkh_value, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 3;
                        table.AddCell(cell);

                        cell = PhraseCell(new Phrase("Otros : ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Dígitos : ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.digitos, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 3;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Decimales : ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.decimales, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 3;
                        table.AddCell(cell);

                        cell = PhraseCell(new Phrase("Dígitos : ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.digitos, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Decimales : ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.decimales, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        //document.Add(table);
                        cell = PhraseCell(new Phrase("N° Fases : ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.nFases, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("V. Nominal : ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.voltajeNominal, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Rango Min. Corriente : ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.rangoCorrienteMin, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Rango Max. Corriente : ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.rangoCorrienteMax, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Fotografías Aparato : ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Ver Anexo", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.ITALIC, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        document.Add(table);


                        /*Sellos*/
                        table = new PdfPTable(8);
                        //table.LockedWidth = true;
                        table.HorizontalAlignment = Element.ANCHOR;
                        table.SetWidths(new float[] { 4f, 4f, 4f, 4f, 4f, 4f, 4f, 4f });
                        table.SpacingBefore = 10f;
                        table.WidthPercentage = 100;
                        //table.TotalWidth = 10f;
                        //Employee Details
                        cell = PhraseCell(new Phrase("Sellos", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_CENTER);
                        cell.Colspan = 8;
                        cell.BackgroundColor = BaseColor.GRAY;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Sellos Encontrados", FontFactory.GetFont("Arial", 9, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_CENTER);
                        cell.Colspan = 8;
                        cell.BackgroundColor = BaseColor.GRAY;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Número Medidor", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLUE)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        cell.BackgroundColor = BaseColor.LIGHT_GRAY;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Número Sello", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLUE)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        cell.BackgroundColor = BaseColor.LIGHT_GRAY;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Estado", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLUE)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        cell.BackgroundColor = BaseColor.LIGHT_GRAY;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Posición ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLUE)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        cell.BackgroundColor = BaseColor.LIGHT_GRAY;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Color ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLUE)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        cell.BackgroundColor = BaseColor.LIGHT_GRAY;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Tipo Sello", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLUE)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        cell.BackgroundColor = BaseColor.LIGHT_GRAY;
                        table.AddCell(cell);
                        if (Sellos.Count() > 0)
                        {
                            foreach (var item in Sellos)
                            {
                                if (item.AcSeTipo == 1)
                                {
                                    cell = PhraseCell(new Phrase(item.AcSeNuMe, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                                    cell.Colspan = 1;

                                    table.AddCell(cell);
                                    cell = PhraseCell(new Phrase(item.AcSeNuSe, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                                    cell.Colspan = 1;

                                    table.AddCell(cell);
                                    cell = PhraseCell(new Phrase(item.AcSeEsta, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                                    cell.Colspan = 2;

                                    table.AddCell(cell);
                                    cell = PhraseCell(new Phrase(item.AcSePosi, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                                    cell.Colspan = 1;

                                    table.AddCell(cell);
                                    cell = PhraseCell(new Phrase(item.AcSeColo, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                                    cell.Colspan = 1;

                                    table.AddCell(cell);
                                    cell = PhraseCell(new Phrase(item.AcSeTiSe, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                                    cell.Colspan = 2;

                                    table.AddCell(cell);
                                }
                            }
                        }
                        else
                        {
                            cell = PhraseCell(new Phrase("Sin información para mostrar", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 8;


                        }
                        cell = PhraseCell(new Phrase("Sellos Instalados", FontFactory.GetFont("Arial", 9, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_CENTER);
                        cell.Colspan = 8;
                        cell.BackgroundColor = BaseColor.GRAY;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Número Medidor", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLUE)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        cell.BackgroundColor = BaseColor.LIGHT_GRAY;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Número Sello", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLUE)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        cell.BackgroundColor = BaseColor.LIGHT_GRAY;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Estado", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLUE)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        cell.BackgroundColor = BaseColor.LIGHT_GRAY;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Posición ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLUE)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        cell.BackgroundColor = BaseColor.LIGHT_GRAY;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Color ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLUE)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        cell.BackgroundColor = BaseColor.LIGHT_GRAY;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Tipo Sello", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLUE)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        cell.BackgroundColor = BaseColor.LIGHT_GRAY;
                        table.AddCell(cell);
                        if (Sellos.Count() > 0)
                        {
                            foreach (var item in Sellos)
                            {
                                if (item.AcSeTipo == 2)
                                {
                                    cell = PhraseCell(new Phrase(item.AcSeNuMe, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                                    cell.Colspan = 1;

                                    table.AddCell(cell);
                                    cell = PhraseCell(new Phrase(item.AcSeNuSe, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                                    cell.Colspan = 1;

                                    table.AddCell(cell);
                                    cell = PhraseCell(new Phrase(item.AcSeEsta, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                                    cell.Colspan = 2;

                                    table.AddCell(cell);
                                    cell = PhraseCell(new Phrase(item.AcSePosi, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                                    cell.Colspan = 1;

                                    table.AddCell(cell);
                                    cell = PhraseCell(new Phrase(item.AcSeColo, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                                    cell.Colspan = 1;

                                    table.AddCell(cell);
                                    cell = PhraseCell(new Phrase(item.AcSeTiSe, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                                    cell.Colspan = 2;

                                    table.AddCell(cell);
                                }
                            }
                        }
                        else
                        {
                            cell = PhraseCell(new Phrase("Sin información para mostrar", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 8;


                        }
                        cell = PhraseCell(new Phrase("Fotografías Sello : ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 3;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Ver Anexo", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.ITALIC, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 5;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(" ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.ITALIC, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Mediciones encontradas comunes", FontFactory.GetFont("Arial", 9, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_CENTER);
                        cell.Colspan = 8;
                        cell.BackgroundColor = BaseColor.GRAY;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Mediciones", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("I(Neutro):", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.corrienteN_mec, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        table.AddCell(cell);

                        cell = PhraseCell(new Phrase("I(F+N):", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.corrienteFN_mec, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("V(N-T):", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.voltageNT_mec, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);


                        cell = PhraseCell(new Phrase("Fasee R", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("V(F-N):", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.voltageFNR_mec, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        table.AddCell(cell);

                        cell = PhraseCell(new Phrase("V(F-T):", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.voltageFTR_mec, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("I(Fase):", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.corrienteR_mec, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);

                        cell = PhraseCell(new Phrase("Fasee S", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("V(F-N):", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.voltageFNS_mec, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        table.AddCell(cell);

                        cell = PhraseCell(new Phrase("V(F-T):", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.voltageFTS_mec, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("I(Fase):", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.corrienteS_mec, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);

                        cell = PhraseCell(new Phrase("Fasee T", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("V(F-N):", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.voltageFNT_mec, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        table.AddCell(cell);

                        cell = PhraseCell(new Phrase("V(F-T):", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.voltageFTT_mec, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("I(Fase):", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.corrienteT_mec, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Fotografías  : ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 3;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Ver Anexo", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.ITALIC, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 5;
                        table.AddCell(cell);
                        /*pruebas de exactitud*/

                        cell = PhraseCell(new Phrase("Pruebas de exactitud (Alta)", FontFactory.GetFont("Arial", 9, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_CENTER);
                        cell.Colspan = 8;
                        cell.BackgroundColor = BaseColor.GRAY;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Tipo prueba", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 4;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.pruebaAlta, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 4;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Fase R", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("V(F-N):", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.voltageFNR_alta, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        table.AddCell(cell);

                        cell = PhraseCell(new Phrase("I(Fase):", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.corrienteR_alta, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Resultados (% Error):", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.errorPruebaR_alta, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);

                        cell = PhraseCell(new Phrase("Fase S", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("V(F+N):", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.voltageFNS_alta, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        table.AddCell(cell);

                        cell = PhraseCell(new Phrase("I(Fase):", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.corrienteS_alta, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Resultados (% Error):", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.errorPruebaS_alta, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Fotografías Pruebas exactitud (Alta)  : ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 3;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Ver Anexo", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 5;
                        table.AddCell(cell);



                        /*pruebas de exactitud*/

                        cell = PhraseCell(new Phrase("Pruebas de exactitud (Baja)", FontFactory.GetFont("Arial", 9, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_CENTER);
                        cell.Colspan = 8;
                        cell.BackgroundColor = BaseColor.GRAY;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Tipo prueba", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 4;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.pruebaBaja, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 4;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Fase R", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("V(F-N):", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.voltageFNR_baja, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        table.AddCell(cell);

                        cell = PhraseCell(new Phrase("I(Fase):", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.corrienteR_baja, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Resultados (% Error):", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.errorPruebaR_baja, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);

                        cell = PhraseCell(new Phrase("Fase S", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("V(F+N):", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.voltageFNS_baja, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        table.AddCell(cell);

                        cell = PhraseCell(new Phrase("I(Fase):", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.corrienteS_baja, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Resultados (% Error):", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.errorPruebaS_baja, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Fotografías Pruebas exactitud (Alta)  : ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 3;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Ver Anexo", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 5;
                        table.AddCell(cell);


                        /*pruebas de exactitud*/

                        cell = PhraseCell(new Phrase("Pruebas de dosificación ", FontFactory.GetFont("Arial", 9, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_CENTER);
                        cell.Colspan = 8;
                        cell.BackgroundColor = BaseColor.GRAY;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Tipo prueba", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 4;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.pruebaDosificacion, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 4;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Fase R", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("V(F-N):", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.voltageFNR_dosif, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        table.AddCell(cell);

                        cell = PhraseCell(new Phrase("I(Fase):", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.corrienteR_dosif, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Resultados (% Error):", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.errorPruebaR_dosif, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);


                        cell = PhraseCell(new Phrase("Lectura inicial:", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.lecturaInicialR_dosif, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 3;
                        table.AddCell(cell);

                        cell = PhraseCell(new Phrase("Lectura final:", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.lecturaFinalR_dosif, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 3;
                        table.AddCell(cell);

                        cell = PhraseCell(new Phrase("Fotografías Pruebas exactitud (Alta)  : ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 3;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Ver Anexo", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.ITALIC, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 5;

                        table.AddCell(cell);

                        /*pruebas de exactitud*/

                        cell = PhraseCell(new Phrase("Pruebas de Funcionamiento ", FontFactory.GetFont("Arial", 9, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_CENTER);
                        cell.Colspan = 8;
                        cell.BackgroundColor = BaseColor.GRAY;
                        table.AddCell(cell);


                        cell = PhraseCell(new Phrase("Pulso o giro normal?:", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.giroNormal, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);

                        cell = PhraseCell(new Phrase("Continuidad:", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.continuidad, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Display:", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.display, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);


                        cell = PhraseCell(new Phrase("Estado conexiones:", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.estadoConexiones, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);

                        cell = PhraseCell(new Phrase("Prueba Puentes:", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.pruebaPuentes, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);

                        cell = PhraseCell(new Phrase("Estado integrador: ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.estadoIntegrador, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        cell = PhraseCell(new Phrase("Retirar Medidor?: ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Me.retirado, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 1;
                        table.AddCell(cell);
                        table.AddCell(cell);

                        document.Add(table);

                        /*Sellos*/
                        table = new PdfPTable(8);
                        //table.LockedWidth = true;
                        table.HorizontalAlignment = Element.ANCHOR;
                        table.SetWidths(new float[] { 4f, 4f, 4f, 4f, 4f, 4f, 4f, 4f });
                        table.SpacingBefore = 10f;
                        table.WidthPercentage = 100;
                        cell = PhraseCell(new Phrase("Anomalias", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        cell.BackgroundColor = BaseColor.GRAY;
                        table.AddCell(cell);
                        if (Ano.Count() > 0)
                        {
                            foreach (var item in Ano)
                            {
                                cell = PhraseCell(new Phrase(item.AcAnDesc, FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                                cell.Colspan = 8;
                                table.AddCell(cell);
                            }
                        }
                        else
                        {
                            cell = PhraseCell(new Phrase("Sin anomalia encontrada.", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLUE)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 8;
                            table.AddCell(cell);
                        }
                        cell = PhraseCell(new Phrase("Observaciones", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        cell.BackgroundColor = BaseColor.GRAY;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Act.obsAnomalia, FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;

                        table.AddCell(cell);
                        document.Add(table);


                        /*TRABAJOS EJECUTADOS*/
                        table = new PdfPTable(8);
                        //table.LockedWidth = true;
                        table.HorizontalAlignment = Element.ANCHOR;
                        table.SetWidths(new float[] { 4f, 4f, 4f, 4f, 4f, 4f, 4f, 4f });
                        table.SpacingBefore = 10f;
                        table.WidthPercentage = 100;
                        //table.TotalWidth = 10f;
                        //Employee Details
                        cell = PhraseCell(new Phrase("Trabajos Ejecutados", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_CENTER);
                        cell.Colspan = 8;
                        cell.BackgroundColor = BaseColor.GRAY;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Acciones", FontFactory.GetFont("Arial", 9, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_CENTER);
                        cell.Colspan = 8;
                        cell.BackgroundColor = BaseColor.GRAY;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Codigo", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLUE)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 4;
                        cell.BackgroundColor = BaseColor.LIGHT_GRAY;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Descripción", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLUE)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 4;
                        cell.BackgroundColor = BaseColor.LIGHT_GRAY;
                        table.AddCell(cell);

                        if (Tra.Count() > 0)
                        {
                            foreach (var item in Tra)
                            {

                                cell = PhraseCell(new Phrase(item.CodigoAccion, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                                cell.Colspan = 4;
                                table.AddCell(cell);
                                cell = PhraseCell(new Phrase(item.DescripcionAccion, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                                cell.Colspan = 4;

                                table.AddCell(cell);


                            }
                        }
                        else
                        {
                            cell = PhraseCell(new Phrase("Sin información para mostrar", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 8;
                            table.AddCell(cell);

                        }
                        cell = PhraseCell(new Phrase(" ", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Materiales", FontFactory.GetFont("Arial", 9, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_CENTER);
                        cell.Colspan = 8;
                        cell.BackgroundColor = BaseColor.GRAY;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Codigo", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLUE)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 3;
                        cell.BackgroundColor = BaseColor.LIGHT_GRAY;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Descripción", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLUE)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 3;
                        cell.BackgroundColor = BaseColor.LIGHT_GRAY;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Cantidad", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLUE)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        cell.BackgroundColor = BaseColor.LIGHT_GRAY;
                        table.AddCell(cell);
                        if (Mat.Count() > 0)
                        {
                            foreach (var item in Mat)
                            {

                                cell = PhraseCell(new Phrase(item.CodigoMaterial, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                                cell.Colspan = 3;
                                table.AddCell(cell);
                                cell = PhraseCell(new Phrase(item.Descripcion, FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                                cell.Colspan = 3;

                                table.AddCell(cell);
                                cell = PhraseCell(new Phrase(item.Cantidad.ToString(), FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                                cell.Colspan = 2;

                                table.AddCell(cell);

                            }
                        }
                        else
                        {
                            cell = PhraseCell(new Phrase("Sin información para mostrar", FontFactory.GetFont("Arial", 8, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 8;
                            table.AddCell(cell);

                        }

                        document.Add(table);

                        table = new PdfPTable(8);
                        //table.LockedWidth = true;
                        table.HorizontalAlignment = Element.ANCHOR;
                        table.SetWidths(new float[] { 4f, 4f, 4f, 4f, 4f, 4f, 4f, 4f });
                        table.SpacingBefore = 10f;
                        table.WidthPercentage = 100;
                        cell = PhraseCell(new Phrase("Censo de Carga", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        cell.BackgroundColor = BaseColor.GRAY;
                        table.AddCell(cell);

                        if (Cen.Count() > 0)
                        {
                            cell = PhraseCell(new Phrase("Item", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 4;
                            cell.BackgroundColor = BaseColor.GRAY;
                            table.AddCell(cell);
                            cell = PhraseCell(new Phrase("Cant", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 4;
                            cell.BackgroundColor = BaseColor.GRAY;
                            table.AddCell(cell);
                            foreach (var item in Cen)
                            {
                                cell = PhraseCell(new Phrase(item.AcCeItem, FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                                cell.Colspan = 4;
                                table.AddCell(cell);
                                cell = PhraseCell(new Phrase(item.AcCeNoIt.ToString(), FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                                cell.Colspan = 4;
                                table.AddCell(cell);
                            }
                        }
                        else
                        {
                            cell = PhraseCell(new Phrase("Sin Censo encontrado.", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 8;

                            table.AddCell(cell);
                        }
                        cell = PhraseCell(new Phrase("Tipo", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Act.tipoCenso, FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Carga Instalada (kW):", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Act.censoCargaInstalada.ToString(), FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.NORMAL, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 2;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Cierre y Observaciones", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;
                        cell.BackgroundColor = BaseColor.GRAY;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase(Act.observaciones, FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 8;

                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Firma Operario", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 4;
                        table.AddCell(cell);
                        cell = PhraseCell(new Phrase("Firma Atendio Visita", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.BLACK)), PdfPCell.ALIGN_LEFT);
                        cell.Colspan = 4;
                        table.AddCell(cell);
                        if (Firma.DocuUrLo != null)
                        {
                            //if (File.Exists(Firma.DocuUrLo))
                            //{
                            cell = ImageCell(Firma.DocuUrLo, 20f, PdfPCell.ALIGN_LEFT);

                            //cell = ImageCell(Firma.DocuUrLo, 20f, PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 8;
                            cell.BorderColor = BaseColor.LIGHT_GRAY;
                            table.AddCell(cell);
                            //}
                            //else
                            //{
                            //    cell = PhraseCell(new Phrase("No se a podido encontrar la firma.", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                            //    cell.Colspan = 8;

                            //    table.AddCell(cell);
                            //}
                        }
                        else
                        {
                            cell = PhraseCell(new Phrase("Sin Firma en la base de datos", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 8;
                            cell.BorderColor = BaseColor.LIGHT_GRAY;
                            table.AddCell(cell);
                        }

                        Firma = BllDocumentos.GetFirmaOperario(Act._number, 9);
                        if (Firma.DocuUrLo != null)
                        {
                            //if (File.Exists(Firma.DocuUrLo))
                            //{
                            cell = ImageCell(Firma.DocuUrLo, 20f, PdfPCell.ALIGN_LEFT);

                            //cell = ImageCell(Firma.DocuUrLo, 20f, PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 4;
                            cell.BorderColor = BaseColor.LIGHT_GRAY;
                            table.AddCell(cell);
                            //}
                            //else
                            //{
                            //    cell = PhraseCell(new Phrase("No se a podido encontrar la firma.", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                            //    cell.Colspan = 4;

                            //    table.AddCell(cell);
                            //}

                        }
                        else
                        {
                            cell = PhraseCell(new Phrase("Sin Firma en la base de datos", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                            cell.Colspan = 4;

                            table.AddCell(cell);
                        }
                        document.Add(table);
                        document.NewPage();
                        ListDocu = Docu.Where(b => b.DocuTiDo == 1).ToList();
                        if (ListDocu.Count() > 0)
                        {
                            table = new PdfPTable(8);
                            //table.LockedWidth = true;
                            //table.HorizontalAlignment = Element.ANCHOR;
                            table.SetWidths(new float[] { 4f, 4f, 4f, 4f, 4f, 4f, 4f, 4f });
                            table.SpacingBefore = 10f;
                            table.WidthPercentage = 100;

                            ListDocu = Docu.Where(b => b.DocuTiDo == 1).ToList();
                            if (ListDocu.Count() > 0)
                            {
                                cell = PhraseCell(new Phrase("Anexo Fotografías Fachada", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                                cell.Colspan = 8;
                                cell.BackgroundColor = BaseColor.GRAY;
                                table.AddCell(cell);
                                int nro = 0;
                                if (ListDocu.Count() % 2 == 0)
                                {
                                    foreach (var item in ListDocu)
                                    {

                                        //if (File.Exists(item.DocuUrLo))
                                        //{
                                        cell = ImageCellFir(item.DocuUrLo, 20f, PdfPCell.ALIGN_JUSTIFIED);
                                        cell.Colspan = 4;
                                        table.AddCell(cell);
                                        //}
                                        //else
                                        //{
                                        //    cell = PhraseCell(new Phrase("No se a encontrado el archivo...", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                                        //    cell.Colspan = 4;
                                        //    table.AddCell(cell);
                                        //}




                                    }
                                }
                                else
                                {

                                    for (int j = 0; j < ListDocu.Count; j++)
                                    {
                                        var item = ListDocu[j];

                                        if (j == (ListDocu.Count - 1) && (j + 1) % 2 != 0)
                                        {
                                            //if (File.Exists(item.DocuUrLo))
                                            //{
                                            cell = ImageCellFir(item.DocuUrLo, 20f, PdfPCell.ALIGN_JUSTIFIED);
                                            cell.Colspan = 8;
                                            table.AddCell(cell);
                                            //}
                                            //else
                                            //{
                                            //    cell = PhraseCell(new Phrase("No se a encontrado el archivo...", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                                            //    cell.Colspan = 8;

                                            //    table.AddCell(cell);
                                            //}

                                        }
                                        else
                                        {
                                            //if (File.Exists(item.DocuUrLo))
                                            //{
                                            cell = ImageCellFir(item.DocuUrLo, 20f, PdfPCell.ALIGN_JUSTIFIED);
                                            cell.Colspan = 4;
                                            table.AddCell(cell);
                                            //}
                                            //else
                                            //{
                                            //    cell = PhraseCell(new Phrase("No se a encontrado el archivo...", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                                            //    cell.Colspan = 4;

                                            //    table.AddCell(cell);
                                            //}
                                        }
                                    }
                                }
                                document.Add(table);

                            }

                        }
                        ListDocu = Docu.Where(b => b.DocuTiDo == 3).ToList();
                        //   ListDocu =  new List<BllDocumentos.Documentos>();
                        if (ListDocu.Count() > 0)
                        {
                            table = new PdfPTable(8);
                            //table.LockedWidth = true;
                            table.HorizontalAlignment = Element.ALIGN_JUSTIFIED;
                            table.SetWidths(new float[] { 4f, 4f, 4f, 4f, 4f, 4f, 4f, 4f });
                            table.SpacingBefore = 10f;
                            table.WidthPercentage = 100;


                            if (ListDocu.Count() > 0)
                            {
                                cell = PhraseCell(new Phrase("Anexo Fotografías Aparato", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                                cell.Colspan = 8;
                                cell.BackgroundColor = BaseColor.GRAY;
                                table.AddCell(cell);
                                int nro = 0;
                                if (ListDocu.Count() % 2 == 0)
                                {
                                    foreach (var item in ListDocu)
                                    {

                                        //if (File.Exists(item.DocuUrLo))
                                        //{
                                        //    cell = ImageCellFir(item.DocuUrLo, 20f, PdfPCell.ALIGN_JUSTIFIED);
                                        cell.Colspan = 4;
                                        table.AddCell(cell);
                                        //}
                                        //else
                                        //{
                                        //    cell = PhraseCell(new Phrase("No se a encontrado el archivo...", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                                        //    cell.Colspan = 4;

                                        //    table.AddCell(cell);
                                        //}

                                    }
                                }
                                else
                                {

                                    for (int j = 0; j < ListDocu.Count; j++)
                                    {
                                        var item = ListDocu[j];

                                        if (j == (ListDocu.Count - 1) && (j + 1) % 2 != 0)
                                        {
                                            //if (File.Exists(item.DocuUrLo))
                                            //{
                                            cell = ImageCellFir(item.DocuUrLo, 20f, PdfPCell.ALIGN_JUSTIFIED);
                                            cell.Colspan = 8;
                                            table.AddCell(cell);
                                            //}
                                            //else
                                            //{
                                            //    cell = PhraseCell(new Phrase("No se a encontrado el archivo...", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                                            //    cell.Colspan = 8;

                                            //    table.AddCell(cell);
                                            //}

                                        }
                                        else
                                        {
                                            //if (File.Exists(item.DocuUrLo))
                                            //{
                                            cell = ImageCellFir(item.DocuUrLo, 20f, PdfPCell.ALIGN_JUSTIFIED);
                                            cell.Colspan = 4;
                                            table.AddCell(cell);
                                            //}
                                            //else
                                            //{
                                            //    cell = PhraseCell(new Phrase("No se a encontrado el archivo...", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                                            //    cell.Colspan = 4;

                                            //    table.AddCell(cell);
                                            //}
                                        }
                                    }
                                }
                                document.Add(table);

                            }

                        }
                        // ListDocu = new List<BllDocumentos.Documentos>();
                        ListDocu = Docu.Where(b => b.DocuTiDo == 2).ToList();
                        if (ListDocu.Count() > 0)
                        {
                            table = new PdfPTable(8);
                            //table.LockedWidth = true;
                            table.HorizontalAlignment = Element.ALIGN_JUSTIFIED;
                            table.SetWidths(new float[] { 4f, 4f, 4f, 4f, 4f, 4f, 4f, 4f });
                            table.SpacingBefore = 10f;
                            table.WidthPercentage = 100;

                            ListDocu = Docu.Where(b => b.DocuTiDo == 2).ToList();
                            if (ListDocu.Count() > 0)
                            {
                                cell = PhraseCell(new Phrase("Anexo Fotografías Anomalia", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                                cell.Colspan = 8;
                                cell.BackgroundColor = BaseColor.GRAY;
                                table.AddCell(cell);
                                //document.Add(table);
                                int nro = 0;
                                if (ListDocu.Count() % 2 == 0)
                                {
                                    foreach (var item in ListDocu)
                                    {
                                        //if (File.Exists(item.DocuUrLo))
                                        //{
                                        cell = ImageCellFir(item.DocuUrLo, 20f, PdfPCell.ALIGN_JUSTIFIED);
                                        cell.Colspan = 4;
                                        table.AddCell(cell);
                                        //}
                                        //else
                                        //{
                                        //    cell = PhraseCell(new Phrase("No se a encontrado el archivo...", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                                        //    cell.Colspan = 4;

                                        //    table.AddCell(cell);
                                        //}




                                    }
                                }
                                else
                                {

                                    for (int j = 0; j < ListDocu.Count; j++)
                                    {
                                        var item = ListDocu[j];

                                        if (j == (ListDocu.Count - 1) && (j + 1) % 2 != 0)
                                        {
                                            //if (File.Exists(item.DocuUrLo))
                                            //{
                                            cell = ImageCellFir(item.DocuUrLo, 20f, PdfPCell.ALIGN_JUSTIFIED);
                                            cell.Colspan = 8;
                                            table.AddCell(cell);
                                            //}
                                            //else
                                            //{
                                            //    cell = PhraseCell(new Phrase("No se a encontrado el archivo...", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                                            //    cell.Colspan = 8;

                                            //    table.AddCell(cell);
                                            //}

                                        }
                                        else
                                        {
                                            //if (File.Exists(item.DocuUrLo))
                                            //{
                                            cell = ImageCellFir(item.DocuUrLo, 20f, PdfPCell.ALIGN_JUSTIFIED);
                                            cell.Colspan = 4;
                                            table.AddCell(cell);
                                            //}
                                            //else
                                            //{
                                            //    cell = PhraseCell(new Phrase("No se a encontrado el archivo...", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                                            //    cell.Colspan = 4;

                                            //    table.AddCell(cell);
                                            //}
                                        }
                                    }
                                }
                                document.Add(table);
                            }

                        }
                        // ListDocu = new List<BllDocumentos.Documentos>();
                        ListDocu = Docu.Where(b => b.DocuTiDo == 4).ToList();
                        if (ListDocu.Count() > 0)
                        {
                            table = new PdfPTable(8);
                            //table.LockedWidth = true;
                            table.HorizontalAlignment = Element.ALIGN_JUSTIFIED;
                            table.SetWidths(new float[] { 4f, 4f, 4f, 4f, 4f, 4f, 4f, 4f });
                            table.SpacingBefore = 10f;
                            table.WidthPercentage = 100;

                            ListDocu = Docu.Where(b => b.DocuTiDo == 4).ToList();
                            if (ListDocu.Count() > 0)
                            {
                                cell = PhraseCell(new Phrase("Anexo Fotografías Mediciones", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                                cell.Colspan = 8;
                                cell.BackgroundColor = BaseColor.GRAY;
                                table.AddCell(cell);
                                int nro = 0;
                                if (ListDocu.Count() % 2 == 0)
                                {
                                    foreach (var item in ListDocu)
                                    {
                                        //if (File.Exists(item.DocuUrLo))
                                        //{
                                        cell = ImageCellFir(item.DocuUrLo, 20f, PdfPCell.ALIGN_JUSTIFIED);
                                        cell.Colspan = 4;
                                        table.AddCell(cell);
                                        //}
                                        //else
                                        //{
                                        //    cell = PhraseCell(new Phrase("No se a encontrado el archivo...", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                                        //    cell.Colspan = 4;

                                        //    table.AddCell(cell);
                                        //}




                                    }
                                }
                                else
                                {

                                    for (int j = 0; j < ListDocu.Count; j++)
                                    {
                                        var item = ListDocu[j];

                                        if (j == (ListDocu.Count - 1) && (j + 1) % 2 != 0)
                                        {
                                            //if (File.Exists(item.DocuUrLo))
                                            //{
                                            cell = ImageCellFir(item.DocuUrLo, 20f, PdfPCell.ALIGN_JUSTIFIED);
                                            cell.Colspan = 8;
                                            table.AddCell(cell);
                                            //}
                                            //else
                                            //{
                                            //    cell = PhraseCell(new Phrase("No se a encontrado el archivo...", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                                            //    cell.Colspan = 8;

                                            //    table.AddCell(cell);
                                            //}

                                        }
                                        else
                                        {
                                            //if (File.Exists(item.DocuUrLo))
                                            //{
                                            cell = ImageCellFir(item.DocuUrLo, 20f, PdfPCell.ALIGN_JUSTIFIED);
                                            cell.Colspan = 4;
                                            table.AddCell(cell);
                                            //}
                                            //else
                                            //{
                                            //    cell = PhraseCell(new Phrase("No se a encontrado el archivo...", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                                            //    cell.Colspan = 4;

                                            //    table.AddCell(cell);
                                            //}
                                        }
                                    }
                                }
                                document.Add(table);
                            }

                        }
                        // ListDocu = new List<BllDocumentos.Documentos>();
                        ListDocu = Docu.Where(b => b.DocuTiDo == 5).ToList();
                        if (ListDocu.Count() > 0)
                        {
                            table = new PdfPTable(8);
                            //table.LockedWidth = true;
                            table.HorizontalAlignment = Element.ALIGN_JUSTIFIED;
                            table.SetWidths(new float[] { 4f, 4f, 4f, 4f, 4f, 4f, 4f, 4f });
                            table.SpacingBefore = 10f;
                            table.WidthPercentage = 100;

                            ListDocu = Docu.Where(b => b.DocuTiDo == 5).ToList();
                            if (ListDocu.Count() > 0)
                            {

                                cell = PhraseCell(new Phrase("Anexo Fotografías Pruebas Alta", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                                cell.Colspan = 8;
                                cell.BackgroundColor = BaseColor.GRAY;
                                table.AddCell(cell);

                                int nro = 0;
                                if (ListDocu.Count() % 2 == 0)
                                {
                                    foreach (var item in ListDocu)
                                    {
                                        //if (File.Exists(item.DocuUrLo))
                                        //{
                                        cell = ImageCellFir(item.DocuUrLo, 20f, PdfPCell.ALIGN_JUSTIFIED);
                                        cell.Colspan = 4;
                                        table.AddCell(cell);
                                        //}
                                        //else
                                        //{
                                        //    cell = PhraseCell(new Phrase("No se a encontrado el archivo...", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                                        //    cell.Colspan = 4;

                                        //    table.AddCell(cell);
                                        //}




                                    }
                                }
                                else
                                {

                                    for (int j = 0; j < ListDocu.Count; j++)
                                    {
                                        var item = ListDocu[j];

                                        if (j == (ListDocu.Count - 1) && (j + 1) % 2 != 0)
                                        {
                                            //if (File.Exists(item.DocuUrLo))
                                            //{
                                            cell = ImageCellFir(item.DocuUrLo, 20f, PdfPCell.ALIGN_JUSTIFIED);
                                            cell.Colspan = 8;
                                            table.AddCell(cell);
                                            //}
                                            //else
                                            //{
                                            //    cell = PhraseCell(new Phrase("No se a encontrado el archivo...", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                                            //    cell.Colspan = 8;

                                            //    table.AddCell(cell);
                                            //}

                                        }
                                        else
                                        {
                                            //if (File.Exists(item.DocuUrLo))
                                            //{
                                            cell = ImageCellFir(item.DocuUrLo, 20f, PdfPCell.ALIGN_JUSTIFIED);
                                            cell.Colspan = 4;
                                            table.AddCell(cell);
                                            //}
                                            //else
                                            //{
                                            //    cell = PhraseCell(new Phrase("No se a encontrado el archivo...", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                                            //    cell.Colspan = 4;

                                            //    table.AddCell(cell);
                                            //}
                                        }
                                    }
                                }
                                document.Add(table);
                            }

                        }
                        // ListDocu = new List<BllDocumentos.Documentos>();
                        ListDocu = Docu.Where(b => b.DocuTiDo == 6).ToList();
                        if (ListDocu.Count() > 0)
                        {
                            table = new PdfPTable(8);
                            //table.LockedWidth = true;
                            table.HorizontalAlignment = Element.ALIGN_JUSTIFIED;
                            table.SetWidths(new float[] { 4f, 4f, 4f, 4f, 4f, 4f, 4f, 4f });
                            table.SpacingBefore = 10f;
                            table.WidthPercentage = 100;


                            if (ListDocu.Count() > 0)
                            {
                                cell = PhraseCell(new Phrase("Anexo Fotografías Pruebas Baja", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                                cell.Colspan = 8;
                                cell.BackgroundColor = BaseColor.GRAY;
                                table.AddCell(cell);

                               
                                if (ListDocu.Count() % 2 == 0)
                                {
                                    foreach (var item in ListDocu)
                                    {
                                        //if (File.Exists(item.DocuUrLo))
                                        //{
                                        cell = ImageCellFir(item.DocuUrLo, 20f, PdfPCell.ALIGN_JUSTIFIED);
                                        cell.Colspan = 4;
                                        table.AddCell(cell);
                                        //}
                                        //else
                                        //{
                                        //    cell = PhraseCell(new Phrase("No se a encontrado el archivo...", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                                        //    cell.Colspan = 4;

                                        //    table.AddCell(cell);
                                        //}




                                    }
                                }
                                else
                                {

                                    for (int j = 0; j < ListDocu.Count; j++)
                                    {
                                        var item = ListDocu[j];

                                        if (j == (ListDocu.Count - 1) && (j + 1) % 2 != 0)
                                        {
                                            //if (File.Exists(item.DocuUrLo))
                                            //{
                                            cell = ImageCellFir(item.DocuUrLo, 20f, PdfPCell.ALIGN_JUSTIFIED);
                                            cell.Colspan = 8;
                                            table.AddCell(cell);
                                            //}
                                            //else
                                            //{
                                            //    cell = PhraseCell(new Phrase("No se a encontrado el archivo...", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                                            //    cell.Colspan = 8;

                                            //    table.AddCell(cell);
                                            //}

                                        }
                                        else
                                        {
                                            //if (File.Exists(item.DocuUrLo))
                                            //{
                                            cell = ImageCellFir(item.DocuUrLo, 20f, PdfPCell.ALIGN_JUSTIFIED);
                                            cell.Colspan = 4;
                                            table.AddCell(cell);
                                            //}
                                            //else
                                            //{
                                            //    cell = PhraseCell(new Phrase("No se a encontrado el archivo...", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                                            //    cell.Colspan = 4;

                                            //    table.AddCell(cell);
                                            //}
                                        }
                                    }
                                }
                                document.Add(table);
                            }
                        }
                        // ListDocu = new List<BllDocumentos.Documentos>();
                        ListDocu = Docu.Where(b => b.DocuTiDo == 7).ToList();
                        if (ListDocu.Count() > 0)
                        {
                            table = new PdfPTable(8);
                            //table.LockedWidth = true;
                            table.HorizontalAlignment = Element.ALIGN_JUSTIFIED;
                            table.SetWidths(new float[] { 4f, 4f, 4f, 4f, 4f, 4f, 4f, 4f });
                            table.SpacingBefore = 10f;
                            table.WidthPercentage = 100;


                            if (ListDocu.Count() > 0)
                            {
                                cell = PhraseCell(new Phrase("Anexo Fotografías Pruebas Dosificación", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                                cell.Colspan = 8;
                                cell.BackgroundColor = BaseColor.GRAY;
                                table.AddCell(cell);

                                if (ListDocu.Count() % 2 == 0)
                                {
                                    foreach (var item in ListDocu)
                                    {
                                        //if (File.Exists(item.DocuUrLo))
                                        //{
                                        cell = ImageCellFir(item.DocuUrLo, 20f, PdfPCell.ALIGN_JUSTIFIED);
                                        cell.Colspan = 4;
                                        table.AddCell(cell);
                                        //}
                                        //else
                                        //{
                                        //    cell = PhraseCell(new Phrase("No se a encontrado el archivo...", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                                        //    cell.Colspan = 4;

                                        //    table.AddCell(cell);
                                        //}




                                    }
                                }
                                else
                                {

                                    for (int j = 0; j < ListDocu.Count; j++)
                                    {
                                        var item = ListDocu[j];

                                        if (j == (ListDocu.Count - 1) && (j + 1) % 2 != 0)
                                        {
                                            //if (File.Exists(item.DocuUrLo))
                                            //{
                                            cell = ImageCellFir(item.DocuUrLo, 20f, PdfPCell.ALIGN_JUSTIFIED);
                                            cell.Colspan = 8;
                                            table.AddCell(cell);
                                            //}
                                            //else
                                            //{
                                            //    cell = PhraseCell(new Phrase("No se a encontrado el archivo...", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                                            //    cell.Colspan = 8;

                                            //    table.AddCell(cell);
                                            //}

                                        }
                                        else
                                        {
                                            //if (File.Exists(item.DocuUrLo))
                                            //{
                                            cell = ImageCellFir(item.DocuUrLo, 20f, PdfPCell.ALIGN_JUSTIFIED);
                                            cell.Colspan = 4;
                                            table.AddCell(cell);
                                            //}
                                            //else
                                            //{
                                            //    cell = PhraseCell(new Phrase("No se a encontrado el archivo...", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                                            //    cell.Colspan = 4;

                                            //    table.AddCell(cell);
                                            //}
                                        }
                                    }
                                }
                                document.Add(table);
                            }

                        }
                        //  ListDocu = new List<BllDocumentos.Documentos>();
                        ListDocu = Docu.Where(b => b.DocuTiDo == 8).ToList();
                        if (ListDocu.Count() > 0)
                        {
                            table = new PdfPTable(8);
                            //table.LockedWidth = true;
                            table.HorizontalAlignment = Element.ALIGN_JUSTIFIED;
                            table.SetWidths(new float[] { 4f, 4f, 4f, 4f, 4f, 4f, 4f, 4f });
                            table.SpacingBefore = 10f;
                            table.WidthPercentage = 100;


                            if (ListDocu.Count() > 0)
                            {
                                cell = PhraseCell(new Phrase("Anexo Fotografías Envio Laboratorio", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                                cell.Colspan = 8;
                                cell.BackgroundColor = BaseColor.GRAY;
                                table.AddCell(cell);


                                if (ListDocu.Count() % 2 == 0)
                                {
                                    foreach (var item in ListDocu)
                                    {
                                        //if (File.Exists(item.DocuUrLo))
                                        //{
                                        cell = ImageCellFir(item.DocuUrLo, 20f, PdfPCell.ALIGN_JUSTIFIED);
                                        cell.Colspan = 4;
                                        table.AddCell(cell);
                                        //}
                                        //else
                                        //{
                                        //    cell = PhraseCell(new Phrase("No se a encontrado el archivo...", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                                        //    cell.Colspan = 4;

                                        //    table.AddCell(cell);
                                        //}




                                    }
                                }
                                else
                                {

                                    for (int j = 0; j < ListDocu.Count; j++)
                                    {
                                        var item = ListDocu[j];

                                        if (j == (ListDocu.Count - 1) && (j + 1) % 2 != 0)
                                        {
                                            //if (File.Exists(item.DocuUrLo))
                                            //{
                                            cell = ImageCellFir(item.DocuUrLo, 20f, PdfPCell.ALIGN_JUSTIFIED);
                                            cell.Colspan = 8;
                                            table.AddCell(cell);
                                            //}
                                            //else
                                            //{
                                            //    cell = PhraseCell(new Phrase("No se a encontrado el archivo...", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                                            //    cell.Colspan = 8;

                                            //    table.AddCell(cell);
                                            //}

                                        }
                                        else
                                        {
                                            //if (File.Exists(item.DocuUrLo))
                                            //{
                                            cell = ImageCellFir(item.DocuUrLo, 20f, PdfPCell.ALIGN_JUSTIFIED);
                                            cell.Colspan = 4;
                                            table.AddCell(cell);
                                            //}
                                            //else
                                            //{
                                            //    cell = PhraseCell(new Phrase("No se a encontrado el archivo...", FontFactory.GetFont("Arial", 10, iTextSharp.text.Font.BOLD, BaseColor.WHITE)), PdfPCell.ALIGN_LEFT);
                                            //    cell.Colspan = 4;

                                            //    table.AddCell(cell);
                                            //}
                                        }
                                    }
                                }
                                document.Add(table);
                            }

                        }
                        document.Close();
                    
                    byte[] bytes = memoryStream.ToArray();
                        memoryStream.Close();
                        GuardarDoc(number, 15, saveAs, usuario);

                    }

                
            }

            catch (Exception ex)
            {
                Log.EscribirError(ex);
                Log.EscribirTraza("Error al generar PDF  Acta "+ number.ToString());
                throw ex;
            }

        }

        private static void DrawLine(PdfWriter writer, float x1, float y1, float x2, float y2, iTextSharp.text.BaseColor color)
        {
            PdfContentByte contentByte = writer.DirectContent;
            contentByte.SetColorStroke(color);
            contentByte.MoveTo(x1, y1);
            contentByte.LineTo(x2, y2);
            contentByte.Stroke();
        }
        private static PdfPCell PhraseCell(Phrase phrase, int align)
        {
            PdfPCell cell = new PdfPCell(phrase);
            cell.BorderColor = BaseColor.LIGHT_GRAY;
            cell.VerticalAlignment = Element.ALIGN_TOP;
            cell.HorizontalAlignment = align;
            cell.PaddingBottom = 2f;
            cell.PaddingTop = 0f;
            return cell;
        }
        private static PdfPCell PhraseCarta(Phrase phrase, int align)
        {
            PdfPCell cell = new PdfPCell(phrase);
            cell.BorderColor = BaseColor.WHITE;
            cell.VerticalAlignment = Element.ALIGN_TOP;
            cell.HorizontalAlignment = align;
            cell.PaddingBottom = 2f;
            cell.PaddingTop = 0f;
            return cell;
        }
        private static PdfPCell ImageCell(string path, float scale, int align)
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
            return cell;
        }


        private static PdfPCell ImageCellPie(string path, float scale, int align)
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
        private static PdfPCell ImageCellFir(string path, float scale, int align)
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
        private static void WriteTextToDocument(BaseFont bf,iTextSharp.text.Rectangle tamPagina,PdfContentByte over, PdfGState gs,string texto)

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
        public static  string GenerarMensajeria(int acta)
        {
            
            //Lista de archivos para concatenar 
            List<string> lista = new List<string>();
            List<BllDocumentos.Documentos> Doc1 = BllDocumentos.GetDocMensaActa(acta);
            foreach (var item in Doc1)
            {
                lista.Add(HttpContext.Current.Server.MapPath( item.DocuUrLo));
            }
                     
            //‘ Nombre del documento resultante;
            string filename = "MS" + acta.ToString() + ".pdf"; ;

            //    string saveAs = (@"~\File\Documentos\" + filename);
            string sFileJoin = HttpContext.Current.Server.MapPath(@"~\File\Documentos\Guias\" + filename);

            Document Doc = new Document();

            try
            {

                FileStream fs = new FileStream(sFileJoin, FileMode.Create, FileAccess.Write, FileShare.None);

                PdfCopy copy = new PdfCopy(Doc, fs);
                //Marca de agua
                 

                Doc.Open();

                PdfReader Rd;

               
                int  n;

                foreach (var file in lista)
                {

                    Rd = new PdfReader(file);

                    PdfStamper stamp = null;

                    stamp = new PdfStamper(Rd, fs);

                    BaseFont bf = BaseFont.CreateFont(@"c:\windows\fonts\arial.ttf", BaseFont.CP1252, true);

                    PdfGState gs = new PdfGState();

                    gs.FillOpacity = 0.35F;

                    gs.StrokeOpacity = 0.35F;

                    for (int nPag = 1; nPag <= Rd.NumberOfPages; nPag++)

                    {

                        iTextSharp.text.Rectangle tamPagina = Rd.GetPageSizeWithRotation(nPag);

                        PdfContentByte over = stamp.GetOverContent(nPag);

                        over.BeginText();

                        WriteTextToDocument(bf, tamPagina, over, gs, acta.ToString() + "Pag "+ nPag.ToString() + "De" + Rd.NumberOfPages.ToString());

                        over.EndText();

                    }
                    n = Rd.NumberOfPages;


                    int page = 0;

                    while (page < n)
                    {

                        page += 1;

                        copy.AddPage(copy.GetImportedPage(Rd, page));

                    }

                    copy.FreeReader(Rd);

                    Rd.Close();

                }
                return sFileJoin;

            }
            catch (Exception ex)
            {

                Log.EscribirError(ex);
                Log.EscribirTraza("Error al generar documentos de mensajeria para el acta" + acta.ToString());
                return "";
            }
            finally
            {
 
               // ‘ Cerramos el documento;

                Doc.Close();
               
            }

        }
        public static string GenerarMensajeria(List<string> acta,string Usuario)
        {

            //Lista de archivos para concatenar 
            List<string> lista = new List<string>();
            List<BllDocumentos.Documentos> Doc1 = new List<BllDocumentos.Documentos>(); 

            foreach (var item in acta)
            {
                Doc1=BllDocumentos.GetDocMensaActa(int.Parse(item));
                foreach (var D in Doc1)
                {
                    lista.Add(HttpContext.Current.Server.MapPath(D.DocuUrLo));
                }
            }
            

            //‘ Nombre del documento resultante;
            string filename = "MS" + Usuario +DateTime.Now.Day.ToString() + DateTime.Now.Month.ToString() + DateTime.Now.Year.ToString() + DateTime.Now.Hour.ToString() 
                + DateTime.Now.Minute.ToString() + DateTime.Now.Second.ToString() +
                ".pdf"; ;

            //    string saveAs = (@"~\File\Documentos\" + filename);
            string sFileJoin = (@"~\File\Documentos\Guias\" + filename);

            Document Doc = new Document();

            try
            {

                FileStream fs = new FileStream(HttpContext.Current.Server.MapPath(sFileJoin), FileMode.Create, FileAccess.Write, FileShare.None);

                PdfCopy copy = new PdfCopy(Doc, fs);

                Doc.Open();

                PdfReader Rd;

                int n;

                foreach (var file in lista)
                {


                    if (File.Exists(file))
                    {
                        Rd = new PdfReader(file);

                        //PdfStamper stamp = null;

                        //stamp = new PdfStamper(Rd, fs);

                        //BaseFont bf = BaseFont.CreateFont(@"c:\windows\fonts\arial.ttf", BaseFont.CP1252, true);

                        //PdfGState gs = new PdfGState();

                        //gs.FillOpacity = 0.35F;

                        //gs.StrokeOpacity = 0.35F;

                        //for (int nPag = 1; nPag <= Rd.NumberOfPages; nPag++)

                        //{

                        //    iTextSharp.text.Rectangle tamPagina = Rd.GetPageSizeWithRotation(nPag);

                        //    PdfContentByte over = stamp.GetOverContent(nPag);

                        //    over.BeginText();

                        //    WriteTextToDocument(bf, tamPagina, over, gs, acta.ToString() + "Pag " + nPag.ToString() + "De" + Rd.NumberOfPages.ToString());

                        //    over.EndText();

                        //}
                        n = Rd.NumberOfPages;

                        PdfReader pdfReader = new PdfReader(Rd);
                        PdfStamper pdfStamper = new PdfStamper(pdfReader, fs);

                        for (int page1 = 1; page1 <= pdfReader.NumberOfPages; page1++)
                        {
                            PdfContentByte pdfContent = pdfStamper.GetOverContent(page1);
                            Rectangle mediabox = pdfReader.GetPageSize(page1);

                            pdfContent.BeginText();
                            pdfContent.ShowTextAligned(0, "someText",mediabox.Width - 20, mediabox.Height - 20, 0);
                            pdfContent.EndText();


                        }

                        pdfStamper.Close();
                        int page = 0;

                        while (page < n)
                        {

                            page += 1;

                            copy.AddPage(copy.GetImportedPage(Rd, page));

                        }

                        copy.FreeReader(Rd);

                        Rd.Close();
                    }
                    

                }
                return sFileJoin;

            }
            catch (Exception ex)
            {

                Log.EscribirError(ex);
                Log.EscribirTraza("Error al generar documentos de mensajeria para el acta" + acta.ToString());
                return "";
            }
            finally
            {

                // ‘ Cerramos el documento;

                Doc.Close();

            }

        }

     
    
    }
}

