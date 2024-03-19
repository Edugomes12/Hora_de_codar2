var num1 = parseInt(prompt("Informe o 1° número:"));
var num2 = parseInt(prompt("Informe o 2° número:"));
var num3 = parseInt(prompt("Informe o 3° número:"));
var num4 = parseInt(prompt("Informe o 4° número:"));
var num5 = parseInt(prompt("Informe o 5° número:"));
var num6 = parseInt(prompt("Informe o 6° número:"));

var resu = 0;

if (num1 < 72) {
  resu += num1;
}

if (num2 < 72) {
  resu += num2;
}

if (num3 < 72) {
  resu += num3;
}

if (num4 < 72) {
  resu += num4;
}

if (num5 < 72) {
  resu += num5;
}

if (num6 < 72) {
  resu += num6;
}

document.write("Os números informados foram: " + num1 + ", " + num2 + ", " + num3 + ", " + num4 + ", " + num5 + " e " + num6 + ".<br>");

document.write("A soma dos números inferiores a 72 é: " + resu);
