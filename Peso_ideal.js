var sexo = prompt("1 = Mulher 2 = Homem");

        if (sexo == "1"){
        var altura = parseFloat(prompt("me diga a sua altura"));
        var peso = (62.1 * altura) - 44.7;
        document.write("seu peso ideal é " + peso)
        }
        else if (sexo == "2"){
        var altura = parseFloat(prompt("me diga a sua altura"));
        var peso = (72.7 * altura) - 58;
        document.write("seu peso ideal é " + peso);
        }
        else{
            document.write("tente novamente");
        }