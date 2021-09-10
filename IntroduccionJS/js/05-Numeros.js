// Numeros 

const nombre = "Juan";
const numero1 = 100;
const numero2 = 200;

const numero3= 9;
const numero4 = 5;

const numero5 = 12;
const numero6 = 4;

// Revisar el color en la consola, se esta en negro es por que lo asignamos como string, si esta pintado azul esta asignado como number
console.log(nombre, numero1, numero2)

console.log("Suma ", numero1 + numero2 );
console.log("Resta ", numero1 - numero2 );
console.log("Multiplicación ", numero1 * numero2 );
console.log("Division ", numero1 / numero2 );
console.log("Modulo", numero1 % numero2);

// Residuo en una division
console.log("Modulo", numero3 % numero4);
console.log("Modulo", numero4 % numero3);

// Residuo exacto
console.log('Residuo exacto');
console.log("Modulo", numero5 % numero6);
console.log("Modulo", numero6 % numero5);
