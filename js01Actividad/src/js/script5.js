let precioSacoSuperPadrisimo = prompt("Ingrese el precio del saco super padrísimo por favor: ");
let descuesto = prompt("De caunto es el descuento del saco (18% o 10%)?: ");

const diez = 10;
const dieciocho = 18;
let total;

if(descuesto == 18){
    total = precioSacoSuperPadrisimo - (precioSacoSuperPadrisimo * .18);
}else if(descuento = 10){
    total = precioSacoSuperPadrisimo - (precioSacoSuperPadrisimo * .1);
}else{
    alert("No se encontro el descuento");
}

alert("El del saco super padrísimo es: $"+total);