$("#calculadora > .botones > .boton").click(clicar);

function clicar(){
    var contenido = $("#calculadora > .pantalla > input").val();
    var boton = $(this).text();
    var nuevoContenido = contenido + boton;

    if (boton == "C"){
        $("#calculadora > .pantalla > input").val("");
    }else if(boton == "="){
        var resultado = eval(contenido);
        $("#calculadora > .pantalla > input").val(resultado);
    }else{
        $("#calculadora > .pantalla > input").val(nuevoContenido);
    }
}





