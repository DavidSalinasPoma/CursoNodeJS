// Se ejecuta primero
console.log('Inicio del programa');

setTimeout(() => {
    console.log('Primer timerout');

}, 3000);

// Se ejecuta tercero
setTimeout(() => {
    console.log('Segundo timerout');

}, 0);

// Se ejecuta cuarto
setTimeout(() => {
    console.log('Tercero timerout');

}, 0);

// Se ejecuta segundo
console.log('Fin del programa');