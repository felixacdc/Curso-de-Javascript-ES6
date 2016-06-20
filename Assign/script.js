/*
Object Assign
*/

var felix = { name: "Felix" };
var last_name = { last_name: "Mendez" };
var age = { age: 21 };

// primer parametro es el objeto objetivo y el segundo son los objetos fuent
// Objeto opjetivo objeto principal
// Objetos fuent objetos que copiaremos al objeto objetivo
Object.assign(felix, last_name, age);

console.log(felix);