$(document).ready(function () {

    var j = {};
    var h = {};
    var Invi = {};
    var array = new Array();
    var states = {};
    var substringMatcher = function (strs) {
        return function findMatches(q, cb) {
            var matches, substrRegex;

            matches = [];
            cedula = {};

            substrRegex = new RegExp(q, 'i');

            $.each(strs, function (i, str) {
                var nom = str.CodiMedi + "-" + str.NombMedi;
                if (substrRegex.test(nom)) {

                    matches.push({ value: nom });
                    cedula[str.CodiMedi] = str.CodiMedi;
                }
            });
            cb(matches);
        };
    };

    $.ajax(
       {
           type: "GET",
           url: "wServicios/WebService.asmx/CargarMedicamentos",
           contentType: "application/json; charset=utf-8",
           dataType: "json",
           async: false,
           success: function (result) {
              // alert(JSON.stringify(result.d));
               states = result.d;
           },
           error: function (result) {
               alert("Error" + (JSON.stringify(result)));
           }
       });

    $("#txtCodigo").typeahead({
        hint: true,
        highlight: true,
        minLength: 1
    }, {
        name: "states",
        items: 5,
        displayKey: "value",
        source: substringMatcher(states)
    });

    $("#btnBuscar").click(function () {
        var medicamentos = {};
        var Invitado = $("#txtCodigo").val();
        var strs = Invitado.split("-");
        Invi.CodiMedi = strs[0];
        //alert(Invi.CodiMedi);
        
        var codigo = { 'codig': Invi.CodiMedi };
        $.ajax({
            type: "GET",
            url: "wServicios/WebService.asmx/CargarMedi",
            data: codigo,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            success: function (result) {
                var h = (typeof result.d) == 'string' ? eval('(' + result.d + ')') : result.d;
               // alert(JSON.stringify(h.ExisMedi));

                $("#txtExistencia").val(h.ExisMedi);
                $("#txtValor").val(h.ValorUnit);
            },
            error: function (result) {
                alert(JSON.stringify(result));
            }
        });
    });

    //function inici() {
    //    var Invitado = $("#txtNombMedi").val();
    //    var strs = Invitado.split("-");
    //    Invi.idMiembros = strs[0];
    //    alert(Invi.idMiembros);
    //    //Invi.Nombre = strs[1];
    //    //$("#txtNombMedi").val("");
    //    //AddItem(Invi);
    //};

    //inici();

    $("#BtnAgregar").click(function () {
        var Invitado = $("#txtNombMedi").val();
        var strs = Invitado.split("-")
        Invi.idMiembros = strs[0];
        Invi.Nombre = strs[1];
        $("#txtNombMedi").val("");
        AddItem(Invi);
    });

});