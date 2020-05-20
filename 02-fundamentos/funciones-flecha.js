// Funciones flecha

// Normal
function sumar(a, b) {
    return a + b;
}
console.log(sumar(10, 20));

// Flecha
let suma = (a, b) => a + b;
console.log(suma(40, 60));

// OtroEjemplo
// Normal
function saludar() {
    return 'Hola mundo';
}
console.log(saludar());

// Flecha
let saludo = () => 'Hola mundo';
console.log(saludo());

// Ejemplo
// Destructuracion de objetos
let deadpol = {
    nombre: 'wade',
    apellido: 'winston',
    poder: 'Regeneración',
    getNombre() {
        // this apunta a windows object con la funcion flecha
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
};

console.log(deadpol.getNombre());