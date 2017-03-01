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
                var nom = str.Codigo + "-" + str.NombreSede;
                if (substrRegex.test(nom)) {

                    matches.push({ value: nom });
                    cedula[str.Codigo] = str.Codigo;
                }
            });
            cb(matches);
        };
    };

    $.ajax(
       {
           type: "GET",
           url: "wServicios/WebServicePvd.asmx/CargarSedes",
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

    $("#TxtIdSede").typeahead({
        hint: true,
        highlight: true,
        minLength: 1
    }, {
        name: "states",
        items: 5,
        displayKey: "value",
        source: substringMatcher(states)
    });
    
    $("#BtnAgregar").click(function () {
        var Invitado = $("#txtLugar").val();
        var strs = Invitado.split("-")
        Invi.idMiembros = strs[0];
        Invi.Nombre = strs[1];
        $("#txtLugar").val("");
        AddItem(Invi);
    });

});