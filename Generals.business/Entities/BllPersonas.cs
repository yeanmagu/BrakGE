using System;
using System.Collections.Generic;
using System.Linq;
using Generals.business.Data;

namespace Generals.business.Entities
{
    public class BllPersonas
    {
        public int Id { get; set; }
        public int IdTipoDocumento { get; set; }
        public string NroDocumento { get; set; }
        public string Nombre { get; set; }
        public string Apellidos { get; set; }
        public string Telefono { get; set; }

        public string  Celular { get; set; }

        public DateTime FechaNacimiento { get; set; }
        public int IdCiudadResidencia { get; set; }
        public string Nota { get; set; }

        public int IdTipo { get; set; }
        public int IdTipoPersona { get; set; }
        public bool RegimenSimplificado { get; set; }
        public int IdEmpresa { get; set; }

        public bool Autoretenedores { get; set; }
        public bool AplicaAIU { get; set; }
        public string Contacto { get; set; }
        public bool RecibirEmail { get; set; }
        public DateTime? FechaCreacion { get; set; }
        public int IdUsuario { get; set; }
        public bool Estado { get; set; }
        public string Email { get; set; }
        public string Direccion { get; set; }

        public string Ciudad { get; set; }
        public string TipoDocumento { get; set; }
        public string Tipo { get; set; }
        public string TipoPersona { get; set; }
        public DateTime? FechaIngreso { get; set; }
        public DateTime? FechaFinContrato { get; set; }
        public int? DiasCreditoProv { get; set; }
        public static int Add(BllPersonas obj)
        {
            var db = new DataDataContext();
            var tp = new Personas();
            {
                tp.TipoDocumento = obj.IdTipoDocumento;
                tp.NroDocumento = obj.NroDocumento;
                tp.Nombre = obj.Nombre;
                tp.Apellidos = obj.Apellidos;
                tp.Telefono = obj.Telefono;
                tp.Celular = obj.Celular;
                tp.FechaNacimiento = obj.FechaNacimiento;
                tp.CiudadResidencia = obj.IdCiudadResidencia;
                tp.Nota = obj.Nota;
                tp.Tipo = obj.IdTipo;
                tp.TipoPersona = obj.IdTipoPersona;
                tp.RegimenSimplificado = obj.RegimenSimplificado;
                tp.IdEmpesa = obj.IdEmpresa;
                tp.Autoretenedores = obj.Autoretenedores;
                tp.AplicaAIU = obj.AplicaAIU;
                tp.Contacto =obj.Contacto;
                tp.RecibirEmail = obj.RecibirEmail;
                tp.FechaCreacion = obj.FechaCreacion.Value;
                tp.IdUsuario = obj.IdUsuario;
                tp.Estado = true;
                tp.Email = obj.Email;
                tp.Direccion = obj.Direccion;
                tp.FechaCreacion=DateTime.Now;
                tp.DiasCreditoProve=obj.DiasCreditoProv;
                //tp.FechaIngreso=obj.FechaIngreso;
                //tp.FechaFinContrato=obj.FechaFinContrato;
            };

            db.Personas.InsertOnSubmit(tp);
            db.SubmitChanges();
            var firstOrDefault = db.Personas.FirstOrDefault(m => m.ID == db.Personas.Max(pl => pl.ID));
            if (firstOrDefault != null)
                tp.ID = firstOrDefault.ID;
            return tp.ID;
        }

        public static int Update(BllPersonas obj)
        {
            var db = new DataDataContext();
           

            var @select = (from c in db.Personas where c.ID == obj.Id select c);

            foreach (var tp in @select)
            {
                tp.TipoDocumento = obj.IdTipoDocumento;
                tp.NroDocumento = obj.NroDocumento;
                tp.Nombre = obj.Nombre;
                tp.Apellidos = obj.Apellidos;
                tp.Telefono = obj.Telefono;
                tp.Celular = obj.Celular;
                tp.FechaNacimiento = obj.FechaNacimiento;
                tp.CiudadResidencia = obj.IdCiudadResidencia;
                tp.Nota = obj.Nota;
                tp.Tipo = obj.IdTipo;
                tp.TipoPersona = obj.IdTipoPersona;
                tp.RegimenSimplificado = obj.RegimenSimplificado;
                tp.IdEmpesa = obj.IdEmpresa;
                tp.Autoretenedores = obj.Autoretenedores;
                tp.AplicaAIU = obj.AplicaAIU;
                tp.Contacto = obj.Contacto;
                tp.RecibirEmail = obj.RecibirEmail;
                tp.FechaCreacion = obj.FechaCreacion.Value;
                tp.IdUsuario = obj.IdUsuario;
                tp.Estado = obj.Estado;
                tp.Email = obj.Email;
                tp.Direccion = obj.Direccion; tp.DiasCreditoProve = obj.DiasCreditoProv;
                //tp.FechaIngreso = obj.FechaIngreso;
                //tp.FechaFinContrato = obj.FechaFinContrato;
                
            }
            db.SubmitChanges();

            return 1;
        }

        public static BllPersonas GetById(int id)
        {
            var db = new DataDataContext();
            var tp = new BllPersonas();
            var select = (from c in db.Personas where c.ID == id select c);
            if (!@select.Any()) return tp;
            var obj = @select.First();
                tp.Id = obj.ID;
                tp.IdTipoDocumento = obj.TipoDocumento.Value;
                tp.NroDocumento = obj.NroDocumento;
                tp.Nombre = obj.Nombre;
                tp.Apellidos = obj.Apellidos;
                tp.Telefono = obj.Telefono;
                tp.Celular = obj.Celular;
                tp.FechaNacimiento = obj.FechaNacimiento.Value;
                tp.IdCiudadResidencia = obj.CiudadResidencia;
                tp.Nota = obj.Nota;
                tp.IdTipo = obj.Tipo;
                tp.IdTipoPersona = obj.TipoPersona.Value;
                tp.RegimenSimplificado = obj.RegimenSimplificado.Value;
                tp.IdEmpresa = obj.IdEmpesa;
                tp.Autoretenedores = obj.Autoretenedores.Value;
                tp.AplicaAIU = obj.AplicaAIU.Value;
                tp.Contacto = obj.Contacto;
                tp.RecibirEmail = obj.RecibirEmail.Value;
                tp.FechaCreacion = obj.FechaCreacion;
                tp.IdUsuario = obj.IdUsuario;
                tp.Estado = obj.Estado.Value;
                tp.Email = obj.Email;
                tp.Direccion = obj.Direccion;
                tp.Ciudad=obj.Municipio.Nombre;
            tp.DiasCreditoProv=obj.DiasCreditoProve;
                //tp.FechaIngreso = obj.FechaIngreso;
                //tp.FechaFinContrato = obj.FechaFinContrato;
            return tp;
        }
        public static BllPersonas GetByDocument(string Documento)
        {
            var db = new DataDataContext();
            var tp = new BllPersonas();
            var select = (from c in db.Personas where c.NroDocumento.Equals(Documento) select c);
            if (!@select.Any()) return tp;
            var obj = @select.First();
            tp.Id = obj.ID;
            tp.IdTipoDocumento = obj.TipoDocumento.Value;
            tp.NroDocumento = obj.NroDocumento;
            tp.Nombre = obj.Nombre;
            tp.Apellidos = obj.Apellidos;
            tp.Telefono = obj.Telefono;
            tp.Celular = obj.Celular;
            tp.FechaNacimiento = obj.FechaNacimiento.Value;
            tp.IdCiudadResidencia = obj.CiudadResidencia;
            tp.Nota = obj.Nota;
            tp.IdTipo = obj.Tipo;
            tp.IdTipoPersona = obj.TipoPersona.Value;
            tp.RegimenSimplificado = obj.RegimenSimplificado.Value;
            tp.IdEmpresa = obj.IdEmpesa;
            tp.Autoretenedores = obj.Autoretenedores.Value;
            tp.AplicaAIU = obj.AplicaAIU.Value;
            tp.Contacto = obj.Contacto;
            tp.RecibirEmail = obj.RecibirEmail.Value;
            tp.FechaCreacion = obj.FechaCreacion;
            tp.IdUsuario = obj.IdUsuario;
            tp.Estado = obj.Estado.Value;
            tp.Email = obj.Email;
            tp.Direccion = obj.Direccion;
            tp.Ciudad = obj.Municipio.Nombre;
            tp.DiasCreditoProv = obj.DiasCreditoProve;
            //tp.FechaIngreso = obj.FechaIngreso;
            //tp.FechaFinContrato = obj.FechaFinContrato;
            return tp;
        }
        public static BllPersonas GetProvByDocument(string Documento)
        {
            var db = new DataDataContext();
            var tp = new BllPersonas();
            var select = (from c in db.Personas where c.NroDocumento.Equals(Documento) && c.TipoCliente.ID == 2003 select c);
            if (!@select.Any()) return tp;
            var obj = @select.First();
            tp.Id = obj.ID;
            tp.IdTipoDocumento = obj.TipoDocumento.Value;
            tp.NroDocumento = obj.NroDocumento;
            tp.Nombre = obj.Nombre;
            tp.Apellidos = obj.Apellidos;
            tp.Telefono = obj.Telefono;
            tp.Celular = obj.Celular;
            tp.FechaNacimiento = obj.FechaNacimiento.Value;
            tp.IdCiudadResidencia = obj.CiudadResidencia;
            tp.Nota = obj.Nota;
            tp.IdTipo = obj.Tipo;
            tp.IdTipoPersona = obj.TipoPersona.Value;
            tp.RegimenSimplificado = obj.RegimenSimplificado.Value;
            tp.IdEmpresa = obj.IdEmpesa;
            tp.Autoretenedores = obj.Autoretenedores.Value;
            tp.AplicaAIU = obj.AplicaAIU.Value;
            tp.Contacto = obj.Contacto;
            tp.RecibirEmail = obj.RecibirEmail.Value;
            tp.FechaCreacion = obj.FechaCreacion;
            tp.IdUsuario = obj.IdUsuario;
            tp.Estado = obj.Estado.Value;
            tp.Email = obj.Email;
            tp.Direccion = obj.Direccion;
            tp.Ciudad = obj.Municipio.Nombre;
            tp.DiasCreditoProv = obj.DiasCreditoProve;
            //tp.FechaIngreso = obj.FechaIngreso;
            //tp.FechaFinContrato = obj.FechaFinContrato;
            return tp;
        }
        public static List<BllPersonas> ToList()
        {
            var db = new DataDataContext();
            
            var list = new List<BllPersonas>();
            var select = (from c in db.Personas select c);

            foreach (var obj in select)
            {
                var tp = new BllPersonas();
                tp.Id = obj.ID;
                tp.IdTipoDocumento = obj.TipoDocumento.Value;
                tp.NroDocumento = obj.NroDocumento;
                tp.Nombre = obj.Nombre;
                tp.Apellidos = obj.Apellidos;
                tp.Telefono = obj.Telefono;
                tp.Celular = obj.Celular;
                tp.FechaNacimiento = obj.FechaNacimiento.Value;
                tp.IdCiudadResidencia = obj.CiudadResidencia;
                tp.Nota = obj.Nota;
                tp.IdTipo = obj.Tipo;
                tp.IdTipoPersona = obj.TipoPersona.Value;
                tp.RegimenSimplificado = obj.RegimenSimplificado.Value;
                tp.IdEmpresa = obj.IdEmpesa;
                tp.Autoretenedores = obj.Autoretenedores.Value;
                tp.AplicaAIU = obj.AplicaAIU.Value;
                tp.Contacto = obj.Contacto;
                tp.RecibirEmail = obj.RecibirEmail.Value;
                tp.FechaCreacion = obj.FechaCreacion;
                tp.IdUsuario = obj.IdUsuario;
                tp.Estado = obj.Estado.Value;
                tp.Email = obj.Email;
                tp.Direccion = obj.Direccion;
                tp.TipoDocumento = obj.TipoDocumento1.Descripcion;
                tp.Ciudad = obj.Municipio.Nombre;
                tp.Tipo=obj.TipoCliente.Descripcion;
                tp.TipoPersona = obj.TipoPersona1.Descripcion;
                tp.Ciudad = obj.Municipio.Nombre;
                tp.DiasCreditoProv = obj.DiasCreditoProve;
                //tp.FechaIngreso = obj.FechaIngreso;
                //tp.FechaFinContrato = obj.FechaFinContrato;
                list.Add(tp);
            }

            return list;
        }
        public static List<BllPersonas> ToList(string something)
        {
            var db = new DataDataContext();
          
            var list = new List<BllPersonas>();
            var @select = (from c in db.Personas
                          where c.ID.ToString().Contains(something)
                              || c.NroDocumento.Contains(something) || c.Nombre.Contains(something)
                          select c);

            foreach (var obj in @select)
            {
                var tp = new BllPersonas();
                tp.Id = obj.ID;
                tp.IdTipoDocumento = obj.TipoDocumento.Value;
                tp.NroDocumento = obj.NroDocumento;
                tp.Nombre = obj.Nombre;
                tp.Apellidos = obj.Apellidos;
                tp.Telefono = obj.Telefono;
                tp.Celular = obj.Celular;
                tp.FechaNacimiento = obj.FechaNacimiento.Value;
                tp.IdCiudadResidencia = obj.CiudadResidencia;
                tp.Nota = obj.Nota;
                tp.IdTipo = obj.Tipo;
                tp.IdTipoPersona = obj.TipoPersona.Value;
                tp.RegimenSimplificado = obj.RegimenSimplificado.Value;
                tp.IdEmpresa = obj.IdEmpesa;
                tp.Autoretenedores = obj.Autoretenedores.Value;
                tp.AplicaAIU = obj.AplicaAIU.Value;
                tp.Contacto = obj.Contacto;
                tp.RecibirEmail = obj.RecibirEmail.Value;
                tp.FechaCreacion = obj.FechaCreacion;
                tp.IdUsuario = obj.IdUsuario;
                tp.Estado = obj.Estado.Value;
                tp.Email = obj.Email;
                tp.Direccion = obj.Direccion;
                tp.TipoDocumento = obj.TipoDocumento1.Descripcion;
                tp.Ciudad = obj.Municipio.Nombre;
                tp.TipoPersona = obj.TipoPersona1.Descripcion;
                   tp.Tipo=obj.TipoCliente.Descripcion;
                   tp.Ciudad = obj.Municipio.Nombre;
                   tp.DiasCreditoProv = obj.DiasCreditoProve;
                   //tp.FechaIngreso = obj.FechaIngreso;
                   //tp.FechaFinContrato = obj.FechaFinContrato;
                list.Add(tp);
            }

            return list;
        }

        public static List<BllPersonas> ToListCLiente()
        {
            var db = new DataDataContext();

            var list = new List<BllPersonas>();
            var @select = (from c in db.Personas
                           where c.TipoCliente.ID == 3

                           select c);

            foreach (var obj in @select)
            {
                var tp = new BllPersonas();
                tp.Id = obj.ID;
                tp.IdTipoDocumento = obj.TipoDocumento.Value;
                tp.NroDocumento = obj.NroDocumento;
                tp.Nombre = obj.Nombre + " " + obj.Apellidos;
                tp.Apellidos = obj.Apellidos;
                tp.Telefono = obj.Telefono;
                tp.Celular = obj.Celular;
                tp.FechaNacimiento = obj.FechaNacimiento.Value;
                tp.IdCiudadResidencia = obj.CiudadResidencia;
                tp.Nota = obj.Nota;
                tp.IdTipo = obj.Tipo;
                tp.IdTipoPersona = obj.TipoPersona.Value;
                tp.RegimenSimplificado = obj.RegimenSimplificado.Value;
                tp.IdEmpresa = obj.IdEmpesa;
                tp.Autoretenedores = obj.Autoretenedores.Value;
                tp.AplicaAIU = obj.AplicaAIU.Value;
                tp.Contacto = obj.Contacto;
                tp.RecibirEmail = obj.RecibirEmail.Value;
                tp.FechaCreacion = obj.FechaCreacion;
                tp.IdUsuario = obj.IdUsuario;
                tp.Estado = obj.Estado.Value;
                tp.Email = obj.Email;
                tp.Direccion = obj.Direccion;
                tp.TipoDocumento = obj.TipoDocumento1.Descripcion;
                tp.Ciudad = obj.Municipio.Nombre;
                tp.TipoPersona = obj.TipoPersona1.Descripcion;
                tp.Tipo = obj.TipoCliente.Descripcion;
                tp.Ciudad = obj.Municipio.Nombre;
                tp.DiasCreditoProv = obj.DiasCreditoProve;
                //tp.FechaIngreso = obj.FechaIngreso;
                //tp.FechaFinContrato = obj.FechaFinContrato;
                list.Add(tp);
            }

            return list;
        }
        public static List<BllPersonas> ToListCLiente(string something)
        {
            var db = new DataDataContext();

            var list = new List<BllPersonas>();
            var @select = (from c in db.Personas
                           where c.TipoCliente.ID == 3 && (c.Nombre.Contains(something) || c.NroDocumento.Contains(something))

                           select c);

            foreach (var obj in @select)
            {
                var tp = new BllPersonas();
                tp.Id = obj.ID;
                tp.IdTipoDocumento = obj.TipoDocumento.Value;
                tp.NroDocumento = obj.NroDocumento;
                tp.Nombre = obj.Nombre + " " + obj.Apellidos;
                tp.Apellidos = obj.Apellidos;
                tp.Telefono = obj.Telefono;
                tp.Celular = obj.Celular;
                tp.FechaNacimiento = obj.FechaNacimiento.Value;
                tp.IdCiudadResidencia = obj.CiudadResidencia;
                tp.Nota = obj.Nota;
                tp.IdTipo = obj.Tipo;
                tp.IdTipoPersona = obj.TipoPersona.Value;
                tp.RegimenSimplificado = obj.RegimenSimplificado.Value;
                tp.IdEmpresa = obj.IdEmpesa;
                tp.Autoretenedores = obj.Autoretenedores.Value;
                tp.AplicaAIU = obj.AplicaAIU.Value;
                tp.Contacto = obj.Contacto;
                tp.RecibirEmail = obj.RecibirEmail.Value;
                tp.FechaCreacion = obj.FechaCreacion;
                tp.IdUsuario = obj.IdUsuario;
                tp.Estado = obj.Estado.Value;
                tp.Email = obj.Email;
                tp.Direccion = obj.Direccion;
                tp.TipoDocumento = obj.TipoDocumento1.Descripcion;
                tp.Ciudad = obj.Municipio.Nombre;
                tp.TipoPersona = obj.TipoPersona1.Descripcion;
                tp.Tipo = obj.TipoCliente.Descripcion;
                tp.Ciudad = obj.Municipio.Nombre;
                tp.DiasCreditoProv = obj.DiasCreditoProve;
                //tp.FechaIngreso = obj.FechaIngreso;
                //tp.FechaFinContrato = obj.FechaFinContrato;
                list.Add(tp);
            }

            return list;
        }
        public static List<BllPersonas> ToListProveedor()
        {
            var db = new DataDataContext();

            var list = new List<BllPersonas>();
            var @select = (from c in db.Personas
                           where c.TipoCliente.ID == 2003
                               
                           select c);

            foreach (var obj in @select)
            {
                var tp = new BllPersonas();
                tp.Id = obj.ID;
                tp.IdTipoDocumento = obj.TipoDocumento.Value;
                tp.NroDocumento = obj.NroDocumento;
                tp.Nombre = obj.Nombre+ " "+ obj.Apellidos;
                tp.Apellidos = obj.Apellidos;
                tp.Telefono = obj.Telefono;
                tp.Celular = obj.Celular;
                tp.FechaNacimiento = obj.FechaNacimiento.Value;
                tp.IdCiudadResidencia = obj.CiudadResidencia;
                tp.Nota = obj.Nota;
                tp.IdTipo = obj.Tipo;
                tp.IdTipoPersona = obj.TipoPersona.Value;
                tp.RegimenSimplificado = obj.RegimenSimplificado.Value;
                tp.IdEmpresa = obj.IdEmpesa;
                tp.Autoretenedores = obj.Autoretenedores.Value;
                tp.AplicaAIU = obj.AplicaAIU.Value;
                tp.Contacto = obj.Contacto;
                tp.RecibirEmail = obj.RecibirEmail.Value;
                tp.FechaCreacion = obj.FechaCreacion;
                tp.IdUsuario = obj.IdUsuario;
                tp.Estado = obj.Estado.Value;
                tp.Email = obj.Email;
                tp.Direccion = obj.Direccion;
                tp.TipoDocumento = obj.TipoDocumento1.Descripcion;
                tp.Ciudad = obj.Municipio.Nombre;
                tp.TipoPersona = obj.TipoPersona1.Descripcion;
                tp.Tipo = obj.TipoCliente.Descripcion;
                tp.Ciudad = obj.Municipio.Nombre;
                tp.DiasCreditoProv = obj.DiasCreditoProve;
                //tp.FechaIngreso = obj.FechaIngreso;
                //tp.FechaFinContrato = obj.FechaFinContrato;
                list.Add(tp);
            }

            return list;
        }
        public static List<BllPersonas> ToListProveedor(string something)
        {
            var db = new DataDataContext();

            var list = new List<BllPersonas>();
            var @select = (from c in db.Personas
                           where c.TipoCliente.ID == 2003 && (c.Nombre.Contains(something) || c.NroDocumento.Contains(something))

                           select c);

            foreach (var obj in @select)
            {
                var tp = new BllPersonas();
                tp.Id = obj.ID;
                tp.IdTipoDocumento = obj.TipoDocumento.Value;
                tp.NroDocumento = obj.NroDocumento;
                tp.Nombre = obj.Nombre + " " + obj.Apellidos;
                tp.Apellidos = obj.Apellidos;
                tp.Telefono = obj.Telefono;
                tp.Celular = obj.Celular;
                tp.FechaNacimiento = obj.FechaNacimiento.Value;
                tp.IdCiudadResidencia = obj.CiudadResidencia;
                tp.Nota = obj.Nota;
                tp.IdTipo = obj.Tipo;
                tp.IdTipoPersona = obj.TipoPersona.Value;
                tp.RegimenSimplificado = obj.RegimenSimplificado.Value;
                tp.IdEmpresa = obj.IdEmpesa;
                tp.Autoretenedores = obj.Autoretenedores.Value;
                tp.AplicaAIU = obj.AplicaAIU.Value;
                tp.Contacto = obj.Contacto;
                tp.RecibirEmail = obj.RecibirEmail.Value;
                tp.FechaCreacion = obj.FechaCreacion;
                tp.IdUsuario = obj.IdUsuario;
                tp.Estado = obj.Estado.Value;
                tp.Email = obj.Email;
                tp.Direccion = obj.Direccion;
                tp.TipoDocumento = obj.TipoDocumento1.Descripcion;
                tp.Ciudad = obj.Municipio.Nombre;
                tp.TipoPersona = obj.TipoPersona1.Descripcion;
                tp.Tipo = obj.TipoCliente.Descripcion;
                tp.Ciudad = obj.Municipio.Nombre;
                tp.DiasCreditoProv = obj.DiasCreditoProve;
                //tp.FechaIngreso = obj.FechaIngreso;
                //tp.FechaFinContrato = obj.FechaFinContrato;
                list.Add(tp);
            }

            return list;
        }
        public static bool ExisteDescri(string desc)
        {
            var db = new DataDataContext();
            
            var @select = (from c in db.Personas where c.NroDocumento == desc select c);
            if (@select.Any())
            {
                return true;
            }
            else
            {
                return false;
            }

        }
    }
}
