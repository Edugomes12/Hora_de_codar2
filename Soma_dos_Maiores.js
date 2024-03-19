var num1 = parseFloat(prompt("me diga o primeiro número"));
        var num2 = parseFloat(prompt("me diga o segundo número"));
        var num3 = parseFloat(prompt("me diga o  terceiro número"));

        if (num2 && num1 >  num3)
        {
            var resul = num2 + num1;
            alert ("O resultado é: " + resul);

        }
        else if (num2 && num3 > num1 )
        {
            var resul = num2 + num3;
            alert ("O resultado é: " + resul);
        }
        else 
        {
            var resul = num3 + num1;
            alert ("O resultado é: " + resul);
        }