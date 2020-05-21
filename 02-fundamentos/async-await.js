/**
 *  Async Await
 */
// Reemplaza a los callbacks y las promesas es eficiente

let getNombre = async () => {
    return 'Fernando';
    // cualquier error que aya aqui dispara el catch
};

getNombre().then(
        nombre => {
            console.log(nombre);
        }
    )
    .catch(
        error => {
            console.log('Error de Async: ', error);

        }
    );

// Otro ejemplo
let getSaludar = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('fernando');
        }, 3000);
    });
};

let saludo = async () => { // el Await siempre debe estar dentro del async
    let nombre = await getNombre();
    return `Hola ${nombre}`;
};

saludo().then( // El then es como el suscribe de angular recibe una promesa
    resolve => {
        console.log(resolve);

    }
);

// console.log(getSaludar());