// Template literals
let nombre = 'Deadpol';
let real = 'Wade Winston';

console.log(nombre + ' ' + real);

console.log(`${nombre} ${real}`);

let nombreCompleto = nombre + ' ' + real;
let nombreTemplate = `${nombre} ${real}`;

console.log(nombreCompleto === nombreTemplate); // Resultado= true

// Con funciones
function getNombre() {
    return `${nombre} ${real}`;
}
console.log(`${getNombre()}`); // Acepta todo tipo de variables y funciones