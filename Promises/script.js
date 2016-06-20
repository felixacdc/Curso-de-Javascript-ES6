/*
Representa una operacion que no se ha completado pero se espera que en un futuro se completen
Cuenta con dos estados: estado inicial cuando una promesa se encuentra en espera y el otro es cuando una promesa esta cumplida, y otro es cuando una promesa es rechazada
*/
// resolve cuando se cumple la promesa
// reject cuando se rechasa la promesa

var promise = new Promise(function (resolve, reject) {

    // Codigo Sincrono
    /*const FLAG = 4;

    if ( FLAG == 5) {
        resolve("Todo Bien!!");
    } else {
        reject(Error("Algo salio mal :C"));
    }*/

    // Codigo Asincrono
    setTimeout(function () {
        resolve("Todo Bien");
    }, 3000);
});

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});