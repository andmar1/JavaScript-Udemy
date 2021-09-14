// Objeto uso estricto nos arroja un mensaje diciendo que el objeto no se puede alterar debido al freeze

 //Correr JavaScript en modo estricto
const producto = {
    nombreProducto: "Computadora Gamer",
    precio: 4034,
    disponible: true
};

// freeze no nos permite modificar el objeto agregandole o quitandole valores
Object.freeze(producto);

// A diferencia de freeze, seal nos permite modificar solo los elementos existentes en el objeto 
Object.seal(producto);

console.log(producto.nombreProducto);

producto.nuevo = "imagen.jpg";
console.log(producto.nuevo)
// si agregamos nos arraja un undefined

console.log('verificar objecto')

console.log(Object.isFrozen(producto))  //nos arroja un booleano donde nos dice si es permitido o no
console.log(Object.isSealed(producto)) //


console.log(producto)