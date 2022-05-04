function diasemana()
{
    dia = parseInt(document.formulario.caja.vaule);
    switch(dia)
    {
        case 1:
            document.formulario.respuesta.vaule = "lunes";
            break;
        case 2:
            document.formulario.respuesta.vaule = "martes";
        case 3:
            document.formulario.respuesta.vaule = "Miercoles";
        case 4:
            document.formulario.respuesta.vaule = "Jueves";
        case 5:
            document.formulario.respuesta.vaule = "Viernes";
        case 6:
            document.formulario.respuesta.vaule = "Sabado";
        case 7:
            document.formulario.respuesta.vaule = "Domingo";
        default:
            document.formulario.respuesta.vaule = "No es un dia de la semana";
    }
}