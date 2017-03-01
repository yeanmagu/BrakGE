function BindEvents() {
    $(document).ready(function () {
        var btnnuevo = $("#nuevo");
        var btncerrar = $("#cerrar");
        //captura de los divs
        var grid = $(".formgrid");
        var data = $(".formdata");
        //div de panel
        var pnl = $("#pnl");


        data.hide();
        btnnuevo.click(function (e) {
            e.preventDefault();

            mostrarDatos();
            pnl.fadeOut();

        });

        btncerrar.click(function (e) {
            e.preventDefault();
            data.delay("fast").slideUp();
            grid.delay("slow").slideDown();

        });

    });
}

//eventos para los botones de C#

function nuevo()
{
    var pnl = $("#pnl");
    mostrarDatos();
    pnl.fadeOut();
}
function mostrarDatos() {
    var grid = $(".formgrid");
    var data = $(".formdata");
    grid.delay("fast").slideUp();
    data.delay("slow").slideDown();
}

function mostrarGrid() {
    var grid = $(".formgrid");
    var data = $(".formdata");
    data.delay("fast").slideUp();
    grid.delay("slow").slideDown();
    
}

function showPnl() {
    var pnl = $("#pnl");

    pnl.fadeIn();
}
