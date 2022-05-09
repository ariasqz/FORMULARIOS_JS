i=1
suma = 0
numeros = ""
function ciclowhile()
{
    numero=parseInt(document.formulario.caja.vaule)
    do
    {
        numeros=numeros+i+",";
        suma=suma+i
        i=i+1
    }
    while(i<=numero)
    document.formulario.respuesta.vaule=numeros
    document.formulario.sumatoria.vaule=suma
}