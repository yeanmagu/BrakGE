$(document).ready(function () {
    var Ruta = "wServicios/WebServicePvd.asmx/CargarTipoRevisiones";
    var Data;
    var h = {};
    var Invi = {};
    var array = new Array();
    $.ajax({
        type: "GET",
        url: Ruta,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (result) {
            Data = result
        }, error: function (result) {
            alert(JSON.stringify(result))
        }
    });

    function inici() {
        var IdLugar = $("#txtLugar").val();
        var strs = IdLugar.split("-");
        var IdAuxiliar = $("#TxtIdAuxiliar").val();
        var Auxi = IdAuxiliar.split("-");
        var IdSede = $("#TxtIdSede").val();
        var Sed = IdSede.split("-");
        h.IdSede = Sed[0];
        h.IdLugar = strs[0];
        h.IdAuxiliar = Auxi[0];
        alert(h.IdLugar);
        alert(h.IdSede);
        alert(h.IdAuxiliar);
    };

    function obj() {
        array = $("#jqxgrid").jqxGrid("getrows");
        var IdLugar = $("#txtLugar").val();
        var strs = IdLugar.split("-");
        var IdAuxiliar = $("#TxtIdAuxiliar").val();
        var Auxi = IdAuxiliar.split("-");
        var IdSede = $("#TxtIdSede").val();
        var Sed = IdSede.split("-");

        h.IdConductor = $("#txtDocumento").val();
        h.IdVehiculo = $("#TxtIdVehiculo").val();
        h.Invitado = $("#txtInvitado").val();
        h.IdSede = Sed[0];
        h.IdLugar = strs[0];
        h.IdAuxiliar = Auxi[0];
        h.FVigenciaSoat = $("#TxtFVigenciaSoat").val();
        h.Observacion = $("#TxtObservacion").val();
        h.FechaYHora = $("#FechaYHora").val();
        h.lst = array;

        var parametrosJSON = { her: h };
        $.ajax({
            type: "POST",
            url: "wServicios/WebServicePvd.asmx/registrarRevisiones",
            data: JSON.stringify(parametrosJSON),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            success: function (result) {
               // alert(JSON.stringify(result));
                if (result.d == 1) {
                    alert("Registro Guardo con exito");
                } else {
                    alert("Error al registrar");
                }
            },
            error: function (result) {
                alert(JSON.stringify(result));
            }
        });


    }
    $("#showrowbutton").click(function () {
        obj();
    });

    var infor = {
        localdata: Data,
        datafields: [
            { name: "IdRevision" },
            { name: "Revision" },
            { name: "Calificacion" }
        ], datatype: "jsonp"
    };
    var Dato = new $.jqx.dataAdapter(infor);
    $("#jqxgrid").jqxGrid({
        width: 600,
        source: Dato,
        pageable: true,
        autoheight: true,
        editable: true,
        selectionmode: "singlecell",
        columns: [
            { text: "N° Revision", datafield: "IdRevision", width: 180 },
            { text: "Revision", datafield: "Revision", width: 220 },
            { text: "Calificacion", datafield: "Calificacion", width: 200, columntype: "dropdownlist" }
        ]
    })
});