// Destructuracion de objetos
let deadpol = {
    nombre: 'wade',
    apellido: 'winston',
    poder: 'Regeneración',
    getNombre: function () {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
};

// destructurando el objeto deadpol
let {
    nombre: primerNombre,
    apellido,
    poder
} = deadpol;
// Imprimiendo la destructuracion
console.log(primerNombre, apellido, poder);