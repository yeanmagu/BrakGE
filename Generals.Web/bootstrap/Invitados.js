$(document).ready(function () {

    var j = {};
    var h = {};
    var Invi = {};
    var array = new Array();
    var states = {};
    var substringMatcher = function (strs) {
        return function findMatches(q, cb) {
            var matches, substrRegex;

            // an array that will be populated with substring matches
            matches = [];
            cedula = {};
            // regex used to determine if a string contains the substring `q`
            substrRegex = new RegExp(q, 'i');

            // iterate through the pool of strings and for any string that
            // contains the substring `q`, add it to the `matches` array
            $.each(strs, function (i, str) {
                var nom = str.IdLugares + "-" + str.Lugar;
                if (substrRegex.test(nom)) {
                    // the typeahead jQuery plugin expects suggestions to a
                    // JavaScript object, refer to typeahead docs for more info
                    matches.push({ value: nom });
                    cedula[str.IdLugares] = str.IdLugares;
                }
            });
            cb(matches);
        };
    };

    $.ajax(
       {
           type: "GET",
           url: "wServicios/WebServicePvd.asmx/CargarLugares",
           contentType: "application/json; charset=utf-8",
           dataType: "json",
           async: false,
           success: function (result) {
               alert(JSON.stringify(states.d));
               states = result.d;
           },
           error: function (result) {
               alert("Error" + (JSON.stringify(result)));
           }
       });

    $("#BtnAgregar").click(function () {
        var Invitado = $("#txtLugar").val();
        var strs = Invitado.split("-")
        Invi.idMiembros = strs[0];
        Invi.Nombre = strs[1];
        $("#txtLugar").val("");
        AddItem(Invi);
    });

    $("#BtnMirar").click(function () {
        alert(JSON.stringify(array));
    });
    $("#btnnviar").click(function () {
        //asigno valores de texto
        h.idEvento = 12; //.val();
        //h.idMiembros = 1236386;
        h.lst = recorrerTabla();
        alert(h.lst);
        var parametrosJSON = { her: h };
        alert(JSON.stringify(parametrosJSON));
        $.ajax(
          {
              type: "POST",
              url: "../Servicios/Invitados.asmx/GuardarInvitados",
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
   
    function recorrerTabla() {
        //alert("hola");
        aray = new Array();
        var i = 0;
        $("#table .recorrer").each(function (index) {
            // var tipo, referencia, descripcion, estado;
            var invitados = {};
            $(this).children("td").each(function (index2) {
                switch (index2) {
                    case 0:
                        invitados.cedula = $(this).text();
                        alert(invitados.cedula);
                        break;
                }
                //     $(this).css("background-color", "#ECF8E0");
            });
            aray.push(invitados);
            i++;
        });
        return aray;
    };
    $("#txtLugar").typeahead({
        hint: true,
        highlight: true,
        minLength: 1
    }, {
        name: "states",
        items: 5,
        displayKey: "value",
        source: k(i)
    });
});