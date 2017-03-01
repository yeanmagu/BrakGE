using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Security.Cryptography;
using System.IO;
using System.Reflection;
using System.Xml.Serialization;
//using Olimpia.Objects.Security.Encryption;
namespace Generals.business.Common
{
    /// <summary>
    /// This class can generate random passwords, which do not include ambiguous 
    /// characters, such as I, l, and 1. The generated password will be made of
    /// 7-bit ASCII symbols. Every four characters will include one lower case
    /// character, one upper case character, one number, and one special symbol
    /// (such as '%') in a random order. The password will always start with an
    /// alpha-numeric character; it will not start with a special symbol (we do
    /// this because some back-end systems do not like certain special
    /// characters in the first position).
    /// </summary>
    public class UtilidadUsuario
    {
        public static string GetMD5(string str)
        {
            MD5 md5 = MD5CryptoServiceProvider.Create();
            ASCIIEncoding encoding = new ASCIIEncoding();
            byte[] stream = null;
            StringBuilder sb = new StringBuilder();
            stream = md5.ComputeHash(encoding.GetBytes(str));
            for (int i = 0; i < stream.Length; i++) sb.AppendFormat("{0:x2}", stream[i]);
            return sb.ToString();
        }

        
        public static string ConvertHexToString(string HexValue)
        {
            string StrValue = "";
            while (HexValue.Length > 0)
            {
                StrValue += System.Convert.ToChar(System.Convert.ToUInt32(HexValue.Substring(0, 2), 16)).ToString();
                HexValue = HexValue.Substring(2, HexValue.Length - 2);
            }
            return StrValue.Replace("\0","");
        }

       

        private static String ByteToHexString(byte[] data)
        {
            StringBuilder sb = new StringBuilder();
            foreach (Byte b in data)
            {
                sb.Append(b.ToString("X2"));
            }
            return sb.ToString();
        }

        public static string ConvertStringToHex(string asciiString)
        {
            string hex = "";
            foreach (char c in asciiString)
            {
                int tmp = c;
                hex += String.Format("{0:x2}", (uint)System.Convert.ToUInt32(tmp.ToString()));
            }
            return hex;
        }

        private static byte[] HexStringToByte(string hexString)
        {
            if (hexString.Length % 2 != 0)
                hexString = hexString + "0";
            int NumberChars = hexString.Length;
            byte[] bytes = new byte[NumberChars / 2];

            for (int i = 0; i < NumberChars / 2; i++)
            {
                bytes[i] = Convert.ToByte(hexString.Substring(i * 2, 2), 16);
            }
            return bytes;
        }

        public static string Encriptar(string cadena, string llave1, string llave2)
        {
            if (!string.IsNullOrEmpty(cadena))
            {
                byte[] data = System.Text.ASCIIEncoding.ASCII.GetBytes(cadena);
                byte[] rgbKey = System.Text.ASCIIEncoding.ASCII.GetBytes(llave1);
                byte[] rgbIV = System.Text.ASCIIEncoding.ASCII.GetBytes(llave2);

                //1024-bit encryption
                MemoryStream memoryStream = new MemoryStream(1024);
                DESCryptoServiceProvider desCryptoServiceProvider = new DESCryptoServiceProvider();
                CryptoStream cryptoStream = new CryptoStream(memoryStream,
                desCryptoServiceProvider.CreateEncryptor(rgbKey, rgbIV),
                CryptoStreamMode.Write);
                cryptoStream.Write(data, 0, data.Length);
                cryptoStream.FlushFinalBlock();
                byte[] result = new byte[(int)memoryStream.Position];
                memoryStream.Position = 0;
                memoryStream.Read(result, 0, result.Length);
                cryptoStream.Close();
                string toDecrypt = System.Convert.ToBase64String(result);
                return toDecrypt;
            }
            else
                return ""; 
        }

        public static string Encriptar(string cadena)
        {
            return Encriptar(cadena, "56565656", "78787878");
        }

        public static string Desencriptar(string cadena, string llave1, string llave2)
        {
            byte[] data = System.Convert.FromBase64String(cadena);
            byte[] rgbKey = System.Text.ASCIIEncoding.ASCII.GetBytes(llave1);
            byte[] rgbIV = System.Text.ASCIIEncoding.ASCII.GetBytes(llave2);
            MemoryStream memoryStream = new MemoryStream(data.Length);
            DESCryptoServiceProvider desCryptoServiceProvider =
            new DESCryptoServiceProvider();
            CryptoStream cryptoStream = new CryptoStream(memoryStream,
            desCryptoServiceProvider.CreateDecryptor(rgbKey, rgbIV),
            CryptoStreamMode.Read);
            memoryStream.Write(data, 0, data.Length);
            memoryStream.Position = 0;
            string decrypted = "";
            decrypted = new StreamReader(cryptoStream).ReadToEnd();
            cryptoStream.Close();
            return decrypted;
        }

        public static string Desencriptar(string cadena)
        {
            return Desencriptar(cadena, "56565656", "78787878");
        }

        // Define default min and max password lengths.
        private static int DEFAULT_MIN_PASSWORD_LENGTH = 8;
        private static int DEFAULT_MAX_PASSWORD_LENGTH = 10;

        // Define supported password characters divided into groups.
        // You can add (or remove) characters to (from) these groups.
        private static string PASSWORD_CHARS_LCASE = "abcdefgijkmnopqrstwxyz";
        private static string PASSWORD_CHARS_UCASE = "ABCDEFGHJKLMNPQRSTWXYZ";
        private static string PASSWORD_CHARS_NUMERIC = "23456789";
        private static string PASSWORD_CHARS_SPECIAL = "*$-+?_&=!%{}/";

        /// <summary>
        /// Generates a random password.
        /// </summary>
        /// <returns>
        /// Randomly generated password.
        /// </returns>
        /// <remarks>
        /// The length of the generated password will be determined at
        /// random. It will be no shorter than the minimum default and
        /// no longer than maximum default.
        /// </remarks>
        public static string Generate()
        {
            return Generate(DEFAULT_MIN_PASSWORD_LENGTH,
                            DEFAULT_MAX_PASSWORD_LENGTH);
        }

        /// <summary>
        /// Generates a random password of the exact length.
        /// </summary>
        /// <param name="length">
        /// Exact password length.
        /// </param>
        /// <returns>
        /// Randomly generated password.
        /// </returns>
        public static string Generate(int length)
        {
            return Generate(length, length);
        }

        /// <summary>
        /// Generates a random password.
        /// </summary>
        /// <param name="minLength">
        /// Minimum password length.
        /// </param>
        /// <param name="maxLength">
        /// Maximum password length.
        /// </param>
        /// <returns>
        /// Randomly generated password.
        /// </returns>
        /// <remarks>
        /// The length of the generated password will be determined at
        /// random and it will fall with the range determined by the
        /// function parameters.
        /// </remarks>
        public static string Generate(int minLength,
                                      int maxLength)
        {
            // Make sure that input parameters are valid.
            if (minLength <= 0 || maxLength <= 0 || minLength > maxLength)
                return null;

            // Create a local array containing supported password characters
            // grouped by types. You can remove character groups from this
            // array, but doing so will weaken the password strength.
            char[][] charGroups = new char[][] 
        {
            PASSWORD_CHARS_LCASE.ToCharArray(),
            PASSWORD_CHARS_UCASE.ToCharArray(),
            PASSWORD_CHARS_NUMERIC.ToCharArray(),
            PASSWORD_CHARS_SPECIAL.ToCharArray()
        };

            // Use this array to track the number of unused characters in each
            // character group.
            int[] charsLeftInGroup = new int[charGroups.Length];

            // Initially, all characters in each group are not used.
            for (int i = 0; i < charsLeftInGroup.Length; i++)
                charsLeftInGroup[i] = charGroups[i].Length;

            // Use this array to track (iterate through) unused character groups.
            int[] leftGroupsOrder = new int[charGroups.Length];

            // Initially, all character groups are not used.
            for (int i = 0; i < leftGroupsOrder.Length; i++)
                leftGroupsOrder[i] = i;

            // Because we cannot use the default randomizer, which is based on the
            // current time (it will produce the same "random" number within a
            // second), we will use a random number generator to seed the
            // randomizer.

            // Use a 4-byte array to fill it with random bytes and convert it then
            // to an integer value.
            byte[] randomBytes = new byte[4];

            // Generate 4 random bytes.
            RNGCryptoServiceProvider rng = new RNGCryptoServiceProvider();
            rng.GetBytes(randomBytes);

            // Convert 4 bytes into a 32-bit integer value.
            int seed = (randomBytes[0] & 0x7f) << 24 |
                        randomBytes[1] << 16 |
                        randomBytes[2] << 8 |
                        randomBytes[3];

            // Now, this is real randomization.
            Random random = new Random(seed);

            // This array will hold password characters.
            char[] password = null;

            // Allocate appropriate memory for the password.
            if (minLength < maxLength)
                password = new char[random.Next(minLength, maxLength + 1)];
            else
                password = new char[minLength];

            // Index of the next character to be added to password.
            int nextCharIdx;

            // Index of the next character group to be processed.
            int nextGroupIdx;

            // Index which will be used to track not processed character groups.
            int nextLeftGroupsOrderIdx;

            // Index of the last non-processed character in a group.
            int lastCharIdx;

            // Index of the last non-processed group.
            int lastLeftGroupsOrderIdx = leftGroupsOrder.Length - 1;

            // Generate password characters one at a time.
            for (int i = 0; i < password.Length; i++)
            {
                // If only one character group remained unprocessed, process it;
                // otherwise, pick a random character group from the unprocessed
                // group list. To allow a special character to appear in the
                // first position, increment the second parameter of the Next
                // function call by one, i.e. lastLeftGroupsOrderIdx + 1.
                if (lastLeftGroupsOrderIdx == 0)
                    nextLeftGroupsOrderIdx = 0;
                else
                    nextLeftGroupsOrderIdx = random.Next(0,
                                                         lastLeftGroupsOrderIdx);

                // Get the actual index of the character group, from which we will
                // pick the next character.
                nextGroupIdx = leftGroupsOrder[nextLeftGroupsOrderIdx];

                // Get the index of the last unprocessed characters in this group.
                lastCharIdx = charsLeftInGroup[nextGroupIdx] - 1;

                // If only one unprocessed character is left, pick it; otherwise,
                // get a random character from the unused character list.
                if (lastCharIdx == 0)
                    nextCharIdx = 0;
                else
                    nextCharIdx = random.Next(0, lastCharIdx + 1);

                // Add this character to the password.
                password[i] = charGroups[nextGroupIdx][nextCharIdx];

                // If we processed the last character in this group, start over.
                if (lastCharIdx == 0)
                    charsLeftInGroup[nextGroupIdx] =
                                              charGroups[nextGroupIdx].Length;
                // There are more unprocessed characters left.
                else
                {
                    // Swap processed character with the last unprocessed character
                    // so that we don't pick it until we process all characters in
                    // this group.
                    if (lastCharIdx != nextCharIdx)
                    {
                        char temp = charGroups[nextGroupIdx][lastCharIdx];
                        charGroups[nextGroupIdx][lastCharIdx] =
                                    charGroups[nextGroupIdx][nextCharIdx];
                        charGroups[nextGroupIdx][nextCharIdx] = temp;
                    }
                    // Decrement the number of unprocessed characters in
                    // this group.
                    charsLeftInGroup[nextGroupIdx]--;
                }

                // If we processed the last group, start all over.
                if (lastLeftGroupsOrderIdx == 0)
                    lastLeftGroupsOrderIdx = leftGroupsOrder.Length - 1;
                // There are more unprocessed groups left.
                else
                {
                    // Swap processed group with the last unprocessed group
                    // so that we don't pick it until we process all groups.
                    if (lastLeftGroupsOrderIdx != nextLeftGroupsOrderIdx)
                    {
                        int temp = leftGroupsOrder[lastLeftGroupsOrderIdx];
                        leftGroupsOrder[lastLeftGroupsOrderIdx] =
                                    leftGroupsOrder[nextLeftGroupsOrderIdx];
                        leftGroupsOrder[nextLeftGroupsOrderIdx] = temp;
                    }
                    // Decrement the number of unprocessed groups.
                    lastLeftGroupsOrderIdx--;
                }
            }

            // Convert password characters into a string and return the result.
            return new string(password);
        }

        /// <summary>
        /// Asigna por reflexion a la propiedad de una entidad su valor correspondiente
        /// </summary>
        /// <param name="objetoBase">Objeto base para la asignacion</param>
        /// <param name="Propiedad">Propiedad a actualizar</param>
        /// <param name="valor">Valor que se debe asignar</param>        
        public static  void asignarValorPropiedad(object objetoBase, string Propiedad, object valor)
        {
            int i = Propiedad.IndexOf(".");
            string propiedadHijo;
            if (i != -1)
            {
                propiedadHijo = Propiedad.Substring(i + 1);
            }
            else
            {
                propiedadHijo = "";
            }
            PropertyInfo propiedadInfo;
            int j = propiedadHijo.IndexOf(".");
            if (j == -1)
            {
                propiedadInfo = objetoBase.GetType().GetProperty(propiedadHijo);
                if (valor != null)
                {
                    switch (propiedadInfo.PropertyType.ToString())
                    {
                        case "System.String":
                            propiedadInfo.SetValue(objetoBase, valor, null);
                            break;
                        case "System.Int32":
                            propiedadInfo.SetValue(objetoBase, int.Parse(valor.ToString()), null);
                            break;
                        case "System.Decimal":
                            propiedadInfo.SetValue(objetoBase, decimal.Parse(valor.ToString()), null);
                            break;
                        default:
                            propiedadInfo.SetValue(objetoBase, valor, null);
                            break;
                    }
                }
                else
                    propiedadInfo.SetValue(objetoBase, null, null);
            }
            else
            {
                string strtemporal = propiedadHijo.Substring(0, j);
                object objetoreferencia = null;
                //Propiedad normal de navegacion directa
                propiedadInfo = objetoBase.GetType().GetProperty(strtemporal);
                objetoreferencia = propiedadInfo.GetValue(objetoBase, null);
                if (objetoreferencia == null)
                {
                    objetoreferencia = Activator.CreateInstance(propiedadInfo.PropertyType);
                    propiedadInfo.SetValue(objetoBase, objetoreferencia, null);
                }
                asignarValorPropiedad(objetoreferencia, propiedadHijo, valor);
            }
        }

        public  List<string> Serializar<T>(IEnumerable<T> Lista)
        {
            List<string> lista = new List<string>();
            foreach (T item in Lista)
            {
                lista.Add(SerializarToXml(item));
            }
            return lista;
        }

        public static string Rellenar(string caracter, int longitud, string cadena)
        {
            return new string(caracter[0], Math.Max((longitud - cadena.Length), 0))+ cadena;
        }

        public  string SerializarToXml( object obj)
        {
            try
            {
                StringWriter strWriter = new StringWriter();
                XmlSerializer serializer = new XmlSerializer(obj.GetType());

                serializer.Serialize(strWriter, obj);
                string resultXml = strWriter.ToString();
                strWriter.Close();

                return resultXml;
            }
            catch
            {
                return string.Empty;
            }
        }

        //Deserializar un XML a un objeto T
        public  T DeserializarTo<T>( string xmlSerializado)
        {
            try
            {
                XmlSerializer xmlSerz = new XmlSerializer(typeof(T));

                using (StringReader strReader = new StringReader(xmlSerializado))
                {
                    object obj = xmlSerz.Deserialize(strReader);
                    return (T)obj;
                }
            }
            catch { return default(T); }
        }

        /// <summary>
        /// Obtiene de la notificacion el valor definido por la propiedad
        /// </summary>
        /// <param name="objetoBase">Objeto base de busqyeda de los valores</param>
        /// <param name="Propiedad">Propiedad del objeto de consulta</param>
        /// <returns></returns>
        public static object obtenerValorPropiedad(object objetoBase, string Propiedad)
        {
            try
            {
                int i = Propiedad.IndexOf(".");
                string propiedadHijo;
                if (i != -1)
                {
                    propiedadHijo = Propiedad.Substring(i + 1);
                }
                else
                {
                    propiedadHijo = "";
                }
                PropertyInfo propiedadInfo;
                int j = propiedadHijo.IndexOf(".");
                object valor = null;
                if (j == -1)
                {
                    
                    propiedadInfo = objetoBase.GetType().GetProperty(propiedadHijo);
                    valor = propiedadInfo.GetValue(objetoBase, null);
                    return valor;
                }
                else
                {
                    string strpropiedadtmp = propiedadHijo.Substring(0, j);
                    propiedadInfo = objetoBase.GetType().GetProperty(strpropiedadtmp);
                    valor = propiedadInfo.GetValue(objetoBase, null);
                }
                if (valor == null)
                    return null;
                else
                    return obtenerValorPropiedad(valor, propiedadHijo);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }


}
