// Objetos

const nombreProducto = `Monitor 20\"`;
const precio = 1233;
const disponible = true;


// estructura de un objeto
const producto = {
    nombreProducto: "Computadora Gamer",
    precio: 4034,
    disponible: true
};

console.log(producto)

// acceder a propiedades
console.log(producto.nombreProducto);
console.log(producto.precio);
console.log(producto.disponible);

// otra forma de acceder a las propiedades
console.log("Another way ")
console.log(producto["nombreProducto"]);
console.log(producto["precio"]);
console.log(producto["disponible"]);

// añadir elemento al objeto
producto.imagen = "imagen.jpg";
console.log(producto)

// quitar elementos del objeto, 
delete producto.disponible;
console.log(producto);

