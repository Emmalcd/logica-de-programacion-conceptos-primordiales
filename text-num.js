function imprimir(frase){
    document.write(frase);
}

var empates = parseInt(prompt("Ingresa el número de empates"));
var victorias = parseInt(prompt("Ingresa el número de victorias"));
var puntos;

puntos = empates*1 + (victorias*3);

imprimir("El equipo obtuvo "+puntos+" puntos");