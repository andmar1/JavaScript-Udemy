// Objetos

let nueva = 10

const producto = {
    nombreProducto: "Computadora Gamer",
    precio: 4034,
    disponible: true
}

// asiganar una nueva variable a un elemento del objeto
const precioProducto = producto.precio;
console.log(precioProducto);

const nombreProducto = producto.nombreProducto;
console.log(nombreProducto);

console.log("Destructuring");
// Destructuring   extraer del objeto

const { precio } = producto;
const { disponible } = producto;
console.log(precio)
console.log(disponible) 

// podemos sacar todo el resultado del objeto en una misma linea

const { precio, nombreProducto} = producto;
console.log(precio);
console.log(nombreProducto);