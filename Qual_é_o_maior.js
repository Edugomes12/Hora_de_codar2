var num1 = parseFloat(prompt("me diga o primeiro número"));
        var num2 = parseFloat(prompt("me diga o segundo número"));
        var num3 = parseFloat(prompt("me diga o  terceiro número"));

        if (num1 > num2 && num3)
        {
            alert (num1 + " " + " o primeiro número é maior");
        }
        else if (num2 > num1 && num3)
        {
            alert (num2 + " " + " o segundo número é maior");
        }
        else
        {
            alert (num3 + " " + " o terceiro número é maior");
        }