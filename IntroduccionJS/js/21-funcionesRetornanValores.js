function sumar(n1,n2){
    return n1+n2;
}
sumar(10,3)

// En este caso tenemos que crear una variable nueva para asignarle el valor del return
const resultado = sumar(4,5)
console.log(resultado)

console.log("Ejemplo")

let total = 0;

function agregarCarrito(precio){
    return total += precio;
}
total = agregarCarrito(24)
console.log(total)
total = agregarCarrito(100)
total = agregarCarrito(50)
total = agregarCarrito(30)
console.log(total)

// aplicarle un impuesto al total

function calcularImpuesto(total){
    return 1.15 * total;
}

let impuesto = calcularImpuesto(total)
console.log( impuesto )

console.log(`El total de tus compras es de ${total}`)
console.log(`El total de tus compras con impuesto es de ${impuesto}`)

total = agregarCarrito(200)
console.log( 'Final', total )

console.log('descuento en compras mayores a 500')
// aplicar descuento si la compra es mayor de $500
function aplicarDescuento(total){
    return total - 20;
}
let totalDescuento = aplicarDescuento(total)
console.log("Tu total por comprar mas de 500$ es de",totalDescuento)

console.log(`El total de tus compras era de ${total}`)

