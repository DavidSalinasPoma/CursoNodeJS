// Un callback es una funcion que se eejcuta cuando algo sucede o despues que algo sucede

// Creemos un ejemplo

// Es una funcion que recibe otra funcion que se ejecuta en un determinado tiempo
setTimeout(() => { // Esto es un callback por que esta dentro de una funcion
    console.log('Hola Mundo'); // Este hola mundo es un callback
}, 3000);

// Ejemplo (ES UNA FORMA DE UTILIZAR LOS CALLBACKS)
let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'David',
        id: id
    };
    // Suponemos que un ID no existe
    if (id === 20) {
        callback(`El usuario con id ${id} no existe en la base de datos`);
    } else {
        callback(null, usuario);
    }
};

getUsuarioById(1, (err, usuario) => {
    if (err) {
        return console.log(err);

    }
    console.log('Usuario de base de datos', usuario);
    console.log(`${usuario}`);

});