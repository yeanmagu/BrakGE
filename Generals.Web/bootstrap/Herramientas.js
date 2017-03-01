$(document).ready(function () {
    
      var h = {};
      var array = new Array();
    
    $("#btnAdd").click(function () {

        var herramienta = {};

        herramienta.Descripcion = $("#txtDescripcion").val();
        herramienta.Referencia = $("#txtReferencia").val();
        herramienta.TipoHerramienta = $("#TipoHerramienta").val();
        herramienta.EstadoHerramienta = $("#EstadoHerramienta").val();

        $("#txtDescripcion").val("");
        $("#txtReferencia").val("");

        AddItem(herramienta);

    });

    $("#BtnBuscarCC").click(function () {
        var codigo = { 'Nit': $("#txtCedResponsable").val() };
        $.ajax({
            type: "GET",
            url: "wServicios/herra.asmx/BusResponsable",
            data: codigo,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            success: function (result) {
                if (result.d == null) {
                    alert("El responsable no se encuentra");
                    $("#txtCedResponsable").val("");
                }
                else {
                    h = result.d;
                    alert(JSON.stringify(result));

                    $("#txtNomResponsable").val(h.NomResponsable);
                    $("#txtNitEmpresa").val(h.NitEmpresa);
                    $("#txtNomEmpresa").val(h.NomEmpresa);

                    $.each(h.lst, function (i, item) {
                        AddItem(item);
                    });
                }

            },
            error: function (result) {
                alert(JSON.stringify(result));
            }
        });
    });

    $("#btnEnviar").click(function () {
        //asigno valores de texto
        h.NitEmpresa = $("#txtNitEmpresa").val();
        h.NomEmpresa = $("#txtNomEmpresa").val();
        h.CedResponsable = $("#txtCedResponsable").val();
        h.NomResponsable = $("#txtNomResponsable").val();
        h.FechaSalida = $("#txtFechaSalida").val();
        h.CedElectrico = $("#txtCedElectrico").val();
        h.SalidaPortero = $.cookie('SGA_USUARIO');
        h.lst = recorrerTabla();

        //$("#txtNitEmpresa").val("");
        //$("#txtNomEmpresa").val("");
        //$("#txtCedResponsable").val("");
        //$("#txtNomResponsable").val("");
        //$("#txtFechaSalida").val("");
        //$("#txtCedPortero").val("");
        //$("#txtCedElectrico").val("");
        //$("#table").html("");

        var parametrosJSON = { her: h };
        alert(JSON.stringify(parametrosJSON));
        $.ajax({
            type: "POST",
            url: "wServicios/herra.asmx/registrar",
            data: JSON.stringify(parametrosJSON),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            success: function (result) {
                alert(JSON.stringify(result));
            },
            error: function (result) {
                alert(JSON.stringify(result));
            }
           });
    });

    $("#btnLimpiar").click(function () {
        h.lst = new Array();
        $("#table").html("");
    });

    $("#BtnCancelar").click(function () {

        h.lst = new Array();
        array = new Array();
        $("#txtNitEmpresa").val("");
        $("#txtNomEmpresa").val("");
        $("#txtCedResponsable").val("");
        $("#txtNomResponsable").val("");
        $("#txtFechaSalida").val("");
        $("#txtCedPortero").val("");
        $("#txtCedElectrico").val("");
        $("#table").html("");

    });

    var AddItem = function (item) {

        //guardar en el array
        array.push(item);

        //muestra en  la pantalla tabla
        var tds = $("#tabla tr:first td").length;
        var trs = $("#tabla tr").length;
        var nuevaFila = "<tr class='recorrer'>";
        nuevaFila += "<td>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + item.TipoHerramienta + "</td>";
        nuevaFila += "<td>" + item.Referencia + "</td>";
        nuevaFila += "<td>" + item.Descripcion + "</td>";
        nuevaFila += "<td>" + item.EstadoHerramienta + "</td>";
        nuevaFila += '<td><input type="button" value="-" tag=' + array.length + ' class="clsEliminarFila"></td>';
        nuevaFila += '<td><input type="button" value="0" tag=' + array.length + ' class="clsverFila" /></td>';
        nuevaFila += "</tr>";

        $("#tabla > tbody:last").append(nuevaFila);
    };

    $(document).on('click', '.clsverFila', function () {

        var fila =$(this).attr("tag");
        var descrip = array[fila - 1].Descripcion;
        var referen = array[fila - 1].Referencia;
        var TipoHerra = array[fila - 1].TipoHerramienta;
        var EstadoHerra = array[fila - 1].EstadoHerramienta;
        alert("Descripcion : "+descrip+"  Referencia : "+referen+"  Tipo De Herramienta : "+TipoHerra+"  Estado De Herramienta "+EstadoHerra);
    });

    $(document).on('click', '.clsEliminarFila', function () {
        //cuando se haga clic en cualquier clase .clsEliminarFila se dispara el evento
        alert(JSON.stringify($(this).attr("tag") ));
        /*obtener el cuerpo de la tabla; contamos cuantas filas (tr) tiene
		si queda solamente una fila le preguntamos al usuario si desea eliminarla*/
        var objCuerpo = $(this).parents().get(2);
        //if ($(objCuerpo).find('tr').length == 1) {
        //    if (!confirm('Esta es el Ãºnica fila de la lista ¿Desea eliminarla?')) {
        //        return;
        //    }
        //}
        /*obtenemos el padre (tr) del td que contiene a nuestro boton de eliminar
		que quede claro: estamos obteniendo dos padres
					
		el asunto de los padres e hijos funciona exactamente como en la vida real
		es una jergarquia. imagine un arbol genealogico y tendra todo claro ;)
				
			tr	--> padre del td que contiene el boton
				td	--> hijo de tr y padre del boton
					boton --> hijo directo de td (y nieto de tr? si!)
		*/
        var objFila = $(this).parents().get(1);
        
        /*eliminamos el tr que contiene los datos del contacto (se elimina todo el
        contenido (en este caso los td, los text y logicamente, el boton */
        $(objFila).remove();
    });

    function recorrerTabla() {
        array = new Array();
        var i = 0;
        $("#table .recorrer").each(function (index) {
            var tipo, referencia, descripcion, estado; 

            var herramienta = {};

            $(this).children("td").each(function (index2) {
                switch (index2) {
                    case 0:
                        herramienta.TipoHerramienta = $(this).text();
                    break;
                    case 1:
                        herramienta.Referencia = $(this).text();
                    break;
                    case 2:
                        herramienta.Descripcion = $(this).text();
                    break;
                    case 3:
                        herramienta.EstadoHerramienta = $(this).text();
                    break;

                }
                //     $(this).css("background-color", "#ECF8E0");
            });
            array.push(herramienta);

            i++;
        });
        return array;
    }

});


