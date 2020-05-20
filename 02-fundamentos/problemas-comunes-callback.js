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
// Craer la funcion para obtener un el salario
let getSalario = (empleado, callback) => {
    // Buscamos en un arreglo por el nombre
    let empleadoDB = empleados.find(usuario => {
        return usuario.nombre === empleado;
    }); // barre todo el arreglo pero se obtendra un usuario.

    // buscamos el salario por el id del empleado
    let salarioDB = salarios.find(salario => {
        return salario.id === empleadoDB.id;
    });

    if (!empleadoDB || !salarioDB) {
        callback(`No se encontro un salario para el usuario ${empleado}`);
    } else {
        // callback(null, empleadoDB);

        callback(null, {
            nombre: empleadoDB.nombre,
            salario: salarioDB.salario
        });
    }
};

getSalario('Ramiro', (err, salario) => {
    if (err) {
        return console.log(err);

    }
    console.log(salario);
});


// Craer la funcion para obtener un empleado por id
let getEmpleado = (id, callback) => {
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


// Para el empleado
getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.log(err);

    }
    console.log(empleado);

});