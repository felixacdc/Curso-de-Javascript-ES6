/*
Variables de bloque

La sentencia let declara una variable de alcance local, la cual, opcionalmente, puede ser inicializada con algún valor.
*/

function suma() {
    let resultado = 5 + 5;
    console.log(`El Resultado de la suma es: ${resultado}`);
}

suma();

for(let i = 0; i < 10; i++) {
    console.log(`El Valor de I es: ${i}`);
}

console.log(`El ultimo valor de i es: ${i}`);