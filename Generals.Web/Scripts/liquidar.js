$(document).ready(function () {



    $('input[type="text"]').keydown(function (event) {
        if (event.keyCode == 13) {
            $(this).next().focus();
            event.preventDefault();
            return false;
        }
    });

    $("#tabMetodo").click(function () {

        var a = '<%= this.javaSerial.Serialize(this.terms) %>';

        var unpackArr = JSON.parse(a);
        localStorage["data"] = unpackArr;

        mostrar2(unpackArr);

        /*
        
        for (var i = 0; i < a.length; i++) {
            alert(a[i]);
        }*/




    });

    function mostrar2(unpackArr) {

        for (i = 0; i < unpackArr.length; ++i) {
            switch (unpackArr[i]) {
                case 1:
                    $("#Metodo1").css("display", "block");
                    break;
                case 2:
                    $("#Metodo2").css("display", "block");
                    break;
                case 3:
                    $("#Metodo3").css("display", "block");
                    break;
                case 5:
                    $("#Metodo4").css("display", "block");
                    break;
                case 6:
                    $("#Metodo5").css("display", "block");
                    break;
                case 9:
                    $("#Metodo6").css("display", "block");
                    break;
                case 10:
                    $("#Metodo7").css("display", "block");
                    break;
                case 11:
                    $("#Metodo8").css("display", "block");
                    break;
                default:

                    alert("Code not found" + unpackArr[i]);
                    break;
            }

        }

        rebind();
    }




    /*$("[id$=TxtDic]").change(function () {
         alert("fired");
         var tabDatos = $("#tabDatos");
         var tabMetodo = $("#tabMetodo");
         var tabResultado = $("#tabResultado");

         tabDatos.removeClass("active");
         tabMetodo.addClass("active");
         tabResultado.removeClass("active");
     });*/





});



function ocultar(x) {
    x.hide();
}


function Confirm() {
    var met = $("#tabMetodo");
    met.click();

    rebind();
    rebinded();

    var unpackArr = localStorage["data"];
    var arrs = unpackArr.split(',').map(function (item) {
        return parseInt(item, 10);
    });

    for (i = 0; i < arrs.length; ++i) {
        switch (arrs[i]) {
            case 1:

                $("#Metodo1").css("display", "block");
                break;
            case 2:

                $("#Metodo2").css("display", "block");
                break;
            case 3:

                $("#Metodo3").css("display", "block");
                break;
            case 5:

                $("#Metodo4").css("display", "block");
                break;
            case 6:

                $("#Metodo5").css("display", "block");
                break;
            case 9:

                $("#Metodo6").css("display", "block");
                break;
            case 10:

                $("#Metodo7").css("display", "block");
                break;
            case 11:

                $("#Metodo8").css("display", "block");
                break;
            default:

                alert("Code not found " + arrs[i]);
                break;
        }

    }

    /*var tabDatos = $("tabDatos");
    var tabMetodo = $("tabMetodo");
    var tabResultado = $("tabResultado");*/

}

function rebind() {
    var a = $("#Metodo1");
    var b = $("#Metodo2");
    var c = $("#Metodo3");
    var d = $("#Metodo4");
    var e = $("#Metodo5");
    var f = $("#Metodo6");
    var g = $("#Metodo7");
    var h = $("#Metodo8");

    a.click(function () {

        localStorage["m"] = 1;

    });
    b.click(function () {
        localStorage["m"] = 2;
    });
    c.click(function () {
        localStorage["m"] = 3;
    });
    d.click(function () {
        localStorage["m"] = 4;
        $('input[type="text"]').keydown(function (event) {
            if (event.keyCode == 13) {
                $(this).next().focus();
                event.preventDefault();
                return false;
            }
        });
    });
    e.click(function () {
        localStorage["m"] = 5;
    });
    f.click(function () {
        localStorage["m"] = 6;
    });
    g.click(function () {
        localStorage["m"] = 7;
    });
    h.click(function () {
        localStorage["m"] = 8;
    });
}

function rebinded() {
    var a = $("#Metodo1");
    var b = $("#Metodo2");
    var c = $("#Metodo3");
    var d = $("#Metodo4");
    var e = $("#Metodo5");
    var f = $("#Metodo6");
    var g = $("#Metodo7");
    var h = $("#Metodo8");

    switch (localStorage["m"]) {
        case "1":
            a.click();
            break;
        case "2":

            b.click();
            break;
        case "3":

            c.click();
            break;
        case "4":

            d.click();
            break;
        case "5":

            $e.click();
            break;
        case "6":

            f.click();
            break;
        case "7":

            g.click();
            break;
        case "8":

            h.click();
            break;
        default:

            alert("Code not found " + localStorage["m"]);
            break;
    }
}