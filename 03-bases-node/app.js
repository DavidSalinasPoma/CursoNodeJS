// Requireds

// Existen tres tipos de requireds

// 1.-Es un required propio de nodejs esta en la documentacion.
// const fs = require('fs'); // file System

// 2.-Es un required externo, son paquetes que no son nativos de node
// const fs = require('express'); // frameWork express

// 3.-Son requireds o archivos que nosotros creamos en nuestro proyecto
// const fs = require('./fs' o '../fs'); // file System


// Haciendo una tabla de multiplicacion

// Grabar en un archivo de texto la tabla de multimplicar con
// fs.writeFile(file, data[, options], callback)
// let base = 6;
// let datos = '';
// for (let index = 1; index <= 10; index++) {

//     datos += `${base} * ${index} = ${base * index} \n`; // tiene salto de linea

// }

// const data = new Uint8Array(Buffer.from(datos));
// fs.writeFile(`tablas/tabla_${base}.txt`, data, (err) => {
//     if (err) {
//         throw err;
//     } else {
//         console.log(`El archivo tabla_${ base },  ha sido creado!`);
//     }
// });

// Destructuracion de objetos
const {
    crearArchivo,
    saludar
} = require('./multiplicar/multiplicar');

// console.log(multimplicar);

// multimplicar.crearArchivo();


let base = 'ju';
crearArchivo(base).then(
    archivo => {

        console.log(`Archivo creado: ${ archivo }`);
    }
).catch(
    error => {
        console.log(error);
    }
);

// saludar(false).then(
//     response => {
//         console.log(response);
//     }
// ).catch(
//     error => {
//         console.log('Algo salio mal');

//     }
// );