var num1 = parseFloat(prompt("me diga o primeiro número"));
    var num2 = parseFloat(prompt("me diga o segundo número"));
    var num3 = parseFloat(prompt("me diga o terceiro número"));
    var num4 = parseFloat(prompt("me diga o quarto número"));

    document.write("O primeiro número que você escolheu é " + num1 + "<BR>");
    document.write("O ultimo número que você escolheu é " + num4 + "<BR>");
    if (num1 > num2 && num3 && num4)
    {
        document.write("O maior número que você escolheu é " + num1);
    }
    else if (num2 > num1 && num3 && num4)
    {
    document.write("O maior número que você escolheu é " + num2);
    }
    else if (num3 > num1 && num2 && num4)
    {
        document.write("O maior número que você escolheu é " + num3);
    }
    else
    {
        document.write("O maior número que você escolheu é " + num4);
    }