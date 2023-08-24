var numAdi = Math.round(Math.random()*10);
var numUser= parseInt(prompt("Ingresa un número "));

if(numAdi!=numUser){
    document.write("Usted se equivoco, el número era: "+numAdi)
}
else{
    document.write("Usted acertó ");
}