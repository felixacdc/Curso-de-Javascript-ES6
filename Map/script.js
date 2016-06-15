// Map o Mapa
// Es una estructura de datos creada atravez de una clave y un valor

// Creacion
var car = new Map();

// Asignacion de propiedades primer valor es la clave y segundo valor es el valor
car.set("brand", "Volkswagen");
car.set("name", "Golf");
car.set("color", "white");

// Imprimir el mapa
console.log(car);

// Acceder a propiedades
console.log(car.get("name"));
// Evalur si existe una propiedad
console.log(car.has("brand"));
// Eliminar una propiedad
car.delete("brand");
console.log(car.has("brand"));