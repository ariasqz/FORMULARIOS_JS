let impar = "";
let i = 1;

function ciclowhile(objeto)
{
    numero = parseInt(document.formulario.caja.vaule);
    while(i<=numero)
    {
        if(i%2!==0)
        {
            impar = impar + i + ", ";
        }
        i =  i + 1;
    }
    document.formulario.respuesta.vaule;
}