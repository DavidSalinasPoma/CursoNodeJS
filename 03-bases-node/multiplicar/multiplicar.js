// Requireds

// Existen tres tipos de requireds
// 1.-Es un required propio de nodejs esta en la documentacion.
const fs = require('fs'); // file System

// creamos una funcion
let crearArchivo = (base) => {

    return new Promise((resolve, reject) => {
        // Verificamos si la base es un numero
        if (!Number(base)) {
            reject(`La base ${base} no es un número`);
            return; // termina el programa
        }

        let datos = '';
        for (let index = 1; index <= 10; index++) {
            datos += `${base} * ${index} = ${base * index} \n`; // tiene salto de linea
        }

        // const data = new Uint8Array(Buffer.from(datos));
        fs.writeFile(`tablas/tabla_${base}.txt`, datos, (err) => {
            if (err) {
                // throw err;
                reject(err); // esto es como un reject
            } else {
                resolve(`tabla_${base}`); // esto es como el resolve
                // console.log(`El archivo tabla_${ base },  ha sido creado!`);
            }
        });
    });

};

let saludar = async (bandera) => {
    if (bandera) {
        return 'Hola mundo';
    } else {
        throw new Error('Algo salio mal');
    }
};

module.exports = {
    crearArchivo,
    saludar
};