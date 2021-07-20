function enviarCorreo(){
    $(".alerta-correo").css('display', 'none');
    var nombre = $("#nombre").val();
    var correo = $("#correo").val();
    var mensaje = $("#mensaje").val();
    var valido = 1;
    var validacion_correo = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    if(!validacion_correo.test(correo)){
        $(".alerta-correo").css('display', 'block');
        valido = 0;
    }

    if (valido == 1) {

    }
}