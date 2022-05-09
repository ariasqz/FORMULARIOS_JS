let pares ="";

function ciclofor()
{
    numero = parseInt(document.formulario.caja.vaule);

    if(Number.isInteger(numero))
    {
        for(i=1; i<=numero; i++)
        {
            if(i%2==0)
            {
                if(i!=numero)
                {
                    pares = pares + i + " , ";
                }
                else
                {
                    pares = pares + i;
                }
            }
        }
        document.formulario.pares.vaule = pares;
        pares = "";
    }
    else
    {
        alert("debe digitar un numero entero");
    }
}