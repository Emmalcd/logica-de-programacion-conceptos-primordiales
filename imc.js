function imprimir(frase){
    document.write(frase);
    document.write("<br>");
}
var nombre = prompt("Por favor ingrese su nombre: ");
var altura = parseFloat(prompt("Por favor "+nombre+" ingrese su altura: "));
var peso = parseFloat(prompt("Por favor ingrese su peso: "));

var imc = peso/(altura*altura);

// imprimir(peso);
if(imc<18.5){
    imprimir("Cuidado, "+nombre+" te encuentras con insuficiencia ponderal");
}
else if(imc>=18.5 && imc<25){
    imprimir("Felicidades, "+nombre+" te encuentras en el intervalo normal");
}
else if(imc>=25 && imc <30){
    imprimir("Cuidado, "+nombre+" tencuentras en sobrepeso");
}
else{
    imprimir("Cuidado, "+nombre+" te encuentras con obesidad")
}
