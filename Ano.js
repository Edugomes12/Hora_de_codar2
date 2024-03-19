var ano = parseFloat(prompt("me diga qual ano você nasceu"));
        var resul = 2024 - ano;

        if (resul >= 16)
        {
            document.write("você pode votar");
        }
        else{
            document.write("você pode não votar");
        }