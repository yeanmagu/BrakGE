//using System;
//using System.Configuration;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.IO;
//using Microsoft.Office.Interop.Word;
//using Generals.business.Entities;

//namespace Generals.business.Components
//{
//    public class DocumentManager
//    {
//        private object _fileName = "";
//        private object _readOnly = false;
//        private object _isVisible = true;
//        private object _missing = System.Reflection.Missing.Value;
//        private Microsoft.Office.Interop.Word.ApplicationClass _word;
//        private Microsoft.Office.Interop.Word.Document _document;
//        private String _RepositoryPath;
//        private String _WorkingFolder;
//        private String _TemplatesFolder;

//        public String WorkingFolder { get { return _WorkingFolder; } }

//        public class BookMarks
//        {
//            private String _Name;
//            private String _Value;

//            public String Name { get { return _Name; } }
//            public String Value { get { return _Value; } }
            
//            public BookMarks(String Name, String Value)
//            {
//                _Name = Name;
//                _Value = Value;
//            }
//        }

//        public Boolean CreateWordDocument(Documentos.Documento Documento, List<BookMarks> BookMarks)
//        {
//            Boolean result = false;
//            String outputPath = _WorkingFolder + "\\" + Documento.ruta;
//            String outputFile = outputPath + "\\" + Documento.archivo;
//            String templateFile = null;

//            CheckLists.Documento template = CheckLists.GetDocumento(Documento.idChecklist);

//            if (template != null)
//                  templateFile = _TemplatesFolder + "\\" + template.Template;

//            if (File.Exists(templateFile))
//            {

//                if (!Directory.Exists(outputPath))
//                    Directory.CreateDirectory(outputPath);

//                if (!File.Exists(outputFile))
//                {
//                    File.Copy(templateFile, outputFile, true);

//                    if (File.Exists(outputFile))
//                    {
//                        _fileName = outputFile;

//                        try
//                        {
//                            _word = new ApplicationClass();
//                            _document = _word.Documents.Open(ref _fileName,
//                                                            ref _missing, ref _readOnly,
//                                                            ref _missing, ref _missing, ref _missing,
//                                                            ref _missing, ref _missing, ref _missing,
//                                                            ref _missing, ref _missing, ref _isVisible,
//                                                            ref _missing, ref _missing, ref _missing, ref _missing);

//                            _document.Activate();

//                            foreach (BookMarks bookMark in BookMarks)
//                            {
//                                object obookMark = bookMark.Name;
//                                _document.Bookmarks.get_Item(ref obookMark).Range.Text = bookMark.Value;
//                            }

//                            _document.Save();
//                            //_document.Close(ref _missing, ref _missing, ref _missing);

//                            result = true;
//                        }
//                        catch (Exception exception)
//                        {
//                            throw new ApplicationException("No fue posible generar el documento por la siguiente excepción: " + exception.Message);
//                        }
//                        finally
//                        {
//                            //if (_word != null)
//                            //    _word.Application.Quit(ref _missing, ref _missing, ref _missing);
//                        }
//                    }
//                    else
//                        throw new ApplicationException("No fue posible generar el archivo " + outputFile);
//                }
//            }
//            else
//                throw new ApplicationException("El Archivo de Template " + (String.IsNullOrEmpty(templateFile) ? "[null]" : templateFile) + " no existe!");

//            return result;
//        }

//        public DocumentManager()
//        {
//            _RepositoryPath = ConfigurationManager.AppSettings["Repository"].ToString();

//            if (!String.IsNullOrEmpty(_RepositoryPath))
//            {
//                if (Directory.Exists(_RepositoryPath))
//                {
//                    _WorkingFolder = _RepositoryPath + "\\" + ConfigurationManager.AppSettings["WorkingFolder"].ToString();
//                    _TemplatesFolder = _RepositoryPath + "\\" + ConfigurationManager.AppSettings["TemplatesFolder"].ToString();

//                    if (!Directory.Exists(_WorkingFolder)) throw new ApplicationException("La ruta " + _WorkingFolder + " del Directorio de Trabajo no existe!");
//                    if (!Directory.Exists(_TemplatesFolder)) throw new ApplicationException("La ruta " + _TemplatesFolder + " del Directorio de Templates no existe!");
//                }
//                else
//                    throw new ApplicationException("La ruta " + _RepositoryPath + " del Repositorio no existe!");
//            }
//            else
//                throw new ApplicationException("DocumentManager no configurado! Por favor configure la ruta del Repositorio.");
//        }
//    }
//}
