// Concepto de promesas permite ejecutar un trabajo sincrono o asincrono
// Arreglo de objetos
let empleados = [{
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Melissa'
    },
    {
        id: 3,
        nombre: 'Ramiro'
    }
];

let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];

// Con promesas
let getEmpleado = (id) => {
    // retornamos una promesa

    /* Una promesa es una funcion comun y corriente que tiene por argumento
    dos callbacks resolve y reject y una tercera donde se ejecuta este dos callbacks
    */
    return new Promise((resolve, reject) => {

        // Resolve se ejecuta si el usuario exite en la BD
        // Reject se ejecuta si el usuario no exite en la base de datos, o un error 
        // Resolve y Reject son opcionales

        // Buscamos en un arreglo el id
        let empleadoDB = empleados.find(empleado => {
            return empleado.id === id;
        }); // barre todo el arreglo pero se obtendra un usuario.
        // console.log(empleadoDB);
        if (!empleadoDB) {
            reject(`No exite un empleado con el ID ${id}`);
        } else {
            // callback(null, empleadoDB);
            // resolve solo recibe un parametro
            resolve(empleadoDB);
        }
    });

};

// Funcion especial para ejecutar una promesa (Then es igual que el suscribe)
getEmpleado(10).then(
    empleado => {
        console.log(empleado);

    },
    error => {
        console.log(error);

    }
);

// Ejercicio de promesas
let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        // Buscamos en un arreglo por el nombre
        let empleadoDB = empleados.find(usuario => {
            return usuario.nombre === empleado;
        }); // barre todo el arreglo pero se obtendra un usuario.

        // buscamos el salario por el id del empleado
        let salarioDB = salarios.find(salario => {
            return salario.id === empleadoDB.id;
        });

        if (!empleadoDB || !salarioDB) {
            reject(`No se encontro un salario para el usuario ${empleado}`);
        } else {
            // callback(null, empleadoDB);
            resolve({
                nombre: empleadoDB.nombre,
                salario: salarioDB.salario
            });
        }
    });
};

getSalario('Fernando').then(
    response => {
        console.log(`El salario de ${ response.nombre } es de ${ response.salario }`);
    },
    error => {
        console.log(error);

    }
);


// Craer la funcion para obtener un empleado por id con CALLBACKS
let getEmpleado2 = (id, callback) => {

    // Buscamos en un arreglo el id
    let empleadoDB = empleados.find(empleado => {
        return empleado.id === id;
    }); // barre todo el arreglo pero se obtendra un usuario.
    // console.log(empleadoDB);
    if (!empleadoDB) {
        callback(`No exite un empleado con el ID ${id}`);
    } else {
        // callback(null, empleadoDB);
        callback(null, empleadoDB);
    }

};