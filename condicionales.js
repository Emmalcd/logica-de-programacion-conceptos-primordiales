function imprimir(frase){
    document.write(frase);
    document.write("<br>");
}

var empates = parseInt(prompt("Ingresa el número de empates"));
var victorias = parseInt(prompt("Ingresa el número de victorias"));
var puntos;

puntos = empates*1 + (victorias*3);

imprimir("El equipo obtuvo "+puntos+" puntos");

if(puntos > 28){
    imprimir("El equipo esta mejor que el año pasado");
}
if(puntos < 28){
    imprimir("El equipo esta peor que el año pasado");
}
if(puntos == 28){
    imprimir("El equipo esta igual que el año pasado");
}