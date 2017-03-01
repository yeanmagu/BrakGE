$(document).ready(function () {
    var h = {};
    var array = new Array();

    $("#btnAdd").click(function () {
        var Invitado = $("#txtCodigo").val();
        var strs = Invitado.split("-");

        var medicamentos = {};

        medicamentos.Medicamento = strs[0];
        medicamentos.Nombre = strs[1];
        medicamentos.Existencia = $("#txtExistencia").val();
        medicamentos.Cantidad = $("#txtCantidad").val(); 
        medicamentos.ValorUni = $("#txtValor").val();
        medicamentos.Total = $("#txtVTotal").val();

        Limpiartxt();
        
        AddItem(medicamentos);
    });
    
    $("#btnEnviar").click(function () {
        registrarDSali();
    });

    $("#btnLimpiar").click(function () {
        LimpiarTabla();
    });

    $(document).on('click', '.clsverFila', function () {

        var fila = $(this).attr("tag");
        var Codi = array[fila - 1].Medicamento;
        var Nomb = array[fila - 1].Nombre;
        var Exis = array[fila - 1].Existencia;
        var Cant = array[fila - 1].Cantidad;
        var Valo = array[fila - 1].ValorUni;
        var Tot = array[fila - 1].Total;
        alert("Codigo : " + Codi + "  Nombre : " + Nomb + "  Existencia : " + Exis + "  Cantidad : " + Cant + "  Valor : " + Valo + "  Total : " + Tot);
    });

    $(document).on('click', '.clsEliminarFila', function () {
        alert(JSON.stringify($(this).attr("tag")));
        var objCuerpo = $(this).parents().get(2);
        var objFila = $(this).parents().get(1);

        $(objFila).remove();
    });

    function AddItem(item) {
        array.push(item);

        var tds = $("#tabla tr:first td").length;
        var trs = $("#tabla tr").length;
        var nuevaFila = "<tr class='recorrer'>";
        nuevaFila += "<td>" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + item.Medicamento + "</td>";
        nuevaFila += "<td>" + item.Nombre + "</td>";
        nuevaFila += "<td>" + item.Existencia + "</td>";
        nuevaFila += "<td>" + item.Cantidad + "</td>";
        nuevaFila += "<td>" + item.ValorUni + "</td>";
        nuevaFila += "<td>" + item.Total + "</td>";
        nuevaFila += '<td><input type="button" value="-" tag=' + array.length + ' class="clsEliminarFila"></td>';
        nuevaFila += '<td><input type="button" value="0" tag=' + array.length + ' class="clsverFila" /></td>';
        nuevaFila += "</tr>";

        $("#tabla > tbody:last").append(nuevaFila);
    };

    function recorrerTabla() {
        array = new Array();
        var i = 0;
        $("#table .recorrer").each(function (index) {
            var tipo, referencia, descripcion, estado;

            var medicamentos = {};

            $(this).children("td").each(function (index2) {
                switch (index2) {
                    case 0:
                        medicamentos.Medicamento = $(this).text();
                        break;
                    case 1:
                        medicamentos.Nombre = $(this).text();
                        break;
                    case 2:
                        medicamentos.Existencia = $(this).text();
                        break;
                    case 3:
                        medicamentos.Cantidad = $(this).text();
                        break;
                    case 4:
                        medicamentos.ValorUni = $(this).text();
                        break;
                    case 5:
                        medicamentos.Total = $(this).text();
                        break;

                }
            });
            array.push(medicamentos);

            i++;
        });
        return array;
    };

    function Limpiartxt() {
        $("#txtCodigo").val("");
        $("#txtNombre").val("");
        $("#txtExistencia").val("");
        $("#txtCantidad").val("");
        $("#txtValor").val("");
        $("#txtVTotal").val("");
    };

    function registrarDSali() {
        h.Proveedor = $("[id$=TxtDocumento]").val();
        h.Usuario = "fcardenas";
        h.Detalle = $("[id$=TxtDetalle]").val();
        h.Fecha = $("[id$=TxtFecha]").val();
        h.FechaSistema = "04/11/2014";
        h.list = recorrerTabla();
        alert(JSON.stringify(h));

        var parametrosJSON = { her: h };
        alert(JSON.stringify(parametrosJSON));
        $.ajax({
            type: "POST",
            url: "wServicios/WebService.asmx/registrarDSaliMed",
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
    };

    function LimpiarTabla() {
        h.list = new Array();
        $("#table").html("");
    };
});


