var num1 = parseInt(prompt("Informe o 1° número:"));
        var num2 = parseInt(prompt("Informe o 2° número:"));
        var num3 = parseInt(prompt("Informe o 3° número:"));
        var num4 = parseInt(prompt("Informe o 4° número:"));

        var resul = 0;

        if (num1 > 0 && num1 < 10) {
            resul += num1;
        }

        if (num2 > 0 && num1 < 10) {
            resul += num2;
        }

        if (num3 > 0 && num1 < 10) {
            resul += num3;
        }

        if (num4 > 0 && num1 < 10) {
            resul += num4;
        }

        var media = (resul) / 4;

        if (media > 5) {
            document.write("Você passou no teste! E sua média é de: " + media + ".");
        }
        else{
            document.write("Tente novamente. A sua média foi: " + media + ".");

        }