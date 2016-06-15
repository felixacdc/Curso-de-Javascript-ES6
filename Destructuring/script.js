// Destructuring Assignment - Asignacion de Desestructuracion
/*
La sintaxis de destructuring assignment es una expresión de JavaScript  que hace posible la extracción de datos de arreglos u objetos usando una sintaxis que equivale a la construcción de arreglos y objetos literales.
*/

var animals = new Array("Perro", "Gato", "Ratón");

// Asignacion sin Destructuring
/*
var perro = animals[0];
var gato = animals[1];
var raton = animals[2];
*/

// Asignacion con Desructuring
var [perro, gato, raton] = animals;

console.log(perro, gato, raton);