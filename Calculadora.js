var num1 = parseInt(prompt("me diga o primeiro número"));
    var num2 = parseInt(prompt("me diga o segundo número"));

    var operação = prompt("Qual tipo de operação você deseja fazer 1 = soma 2= subtração 3= divisão 4 = multiplicação" );

    if (operação == "1")
    {
       var valor = num1 + num2;
       document.write ("o valor é de " + valor);
    }
    else if (operação == "2")
    {
       var valor = num1 - num2;
       document.write ("o valor é de " + valor);
    }
    else if (operação == "3")
    {
       var valor = num1 / num2;
       document.write ("o valor é de " + valor);
    }
    else if (operação == "4")
    {
       var valor = num1 * num2;
       document.write ("o valor é de " + valor);
    }
    else {
        document.write ("tente novamente");
    }