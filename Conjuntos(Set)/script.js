// Set o Conjunto
/*
El objeto Set te permite almacenar valores únicos de cualquier tipo, incluso valores primitivos u objetos de referencia.

Descripción
Los objetos Set son colecciones de valores, tú puedes iterar sus elementos en el orden de su insercción. Un valor en un objeto Set sólo puede estar una vez; éste es unico en la colección Set.
*/

// Creacion
var dogs = new Set();

// Agregar elementos a un conjunto
dogs.add("Dogo");
dogs.add("Bull-Dog");
dogs.add("Bull-Terrier");

console.log(dogs);

// Verificar existencia de un elemento
console.log(dogs.has("Dogo"));
// Numero de elementos que el conjunto contiene
console.log(dogs.size);

// Eliminar elementos
dogs.delete("Bull-Terrier");

// No permite agregar elementos iguales
dogs.add("Dogo");

console.log(dogs);
