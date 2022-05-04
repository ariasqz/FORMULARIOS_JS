function numeroMayor()
{
    numero1 = parseInt(document.formulario.caja1.value);
    numero2 = parseInt(document.formulario.caja2.value);
    numero3 = parseInt(document.formulario.caja3.value);

    if(numero1>numero2 && numero1>numero3)
    {
        mayor = numero1;
    }
    if(numero2>numero1 && numero2>numero3)
    {
        mayor = numero2;
    }
    if(numero3>numero1 && numero3>numero2)
    {
        mayor = numero3;
    }
    document.formulario.caja4.value = mayor;
}