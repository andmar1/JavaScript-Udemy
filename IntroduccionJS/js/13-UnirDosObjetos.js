
const producto = {
    nombreProducto: "Computadora Gamer",
    precio: 4034,
    disponible: true
};

const medidas = {
    peso: '1kg',
    medida: '1m'
}

console.log( producto );

// sintaxis de Spread operator, uniendo dos objetos son modificar 
const nuevoProducto = { ...producto, ...medidas }
console.log( nuevoProducto )