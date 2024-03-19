var num1 = parseFloat(prompt("me diga o primeiro número"));
    var num2 = parseFloat(prompt("me diga o segundo número"));
    var num3 = parseFloat(prompt("me diga o terceiro número"));
    var num4 = parseFloat(prompt("me diga o quarto número"));
    var num5 = parseFloat(prompt("me diga o quinto número"));
    var num6 = parseFloat(prompt("me diga o sexto número"));

    var media= (num1 + num2 + num3 + num4 + num5 + num6) /6;

    document.write("O primeiro número que você escolheu é " + num1 + "<BR>");
    document.write("O segundo número que você escolheu é " + num2 + "<BR>");
    document.write("O terceiro número que você escolheu é " + num3 + "<BR>");
    document.write("O quarto número que você escolheu é " + num4 + "<BR>");
    document.write("O quinto número que você escolheu é " + num5 + "<BR>");
    document.write("O sexto número que você escolheu é " + num6 + "<BR>");

    document.write("a media aritimética é  " + media);