$(document).ready(function () {
        var codigo = { 'Documen': $.cookie('Docu') }; //$("#txtCedResponsable").val()  'Nit': $.cookie('identrada') alert($.cookie('Docu')); 1002995062
        $.ajax({
            type: "GET",
            url: "wServicios/WebServicePvd.asmx/CargarPersona",
            data: codigo,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            success: function (result) {
                var h = (typeof result.d) == 'string' ? eval('(' + result.d + ')') : result.d;
               // alert(JSON.stringify(h.Area));

                $("#txtNRegistro").val(h.ID);
                $("#txtDocumento").val(h.Documento);
                $("#txtNombres").val(h.Nombres);
                $("#txtGenero").val(h.Genero);
                $("#txtTipoContrato").val(h.TipoContrato);
                $("#txtSede").val(h.Sede);
                $("#txtArea").val(h.Area);
                $("#txtEPS").val(h.Eps);
                $("#txtDireccion").val(h.DireccionResidencia);
                $("#txtTelefono").val(h.Celular);
            },
            error: function (result) {
                alert(JSON.stringify(result));
            }
        });
});