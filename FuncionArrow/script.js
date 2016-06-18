/*
Funcion Arrow
*/

/* Ejemplo de funcion normal
var suma = function (numA, numB) {
    return numA + numB;
}
*/

// Funcion Arrow
// no aceptan parametros Rest y Spread
var suma = (numA, numB) => numA + numB;

console.log(suma(15, 5));