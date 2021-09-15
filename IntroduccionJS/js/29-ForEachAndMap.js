let carrito = [
    { producto: "tv plasma", precio:1732, clasificacion:"t"},
    { producto: "computadora", precio:227, clasificacion:"d"},
    { producto: "impresora", precio:3237, clasificacion:"e"},
    { producto: "teclado", precio:437, clasificacion:"e"},
    { producto: "monitor", precio:6235, clasificacion:"r"},
    { producto: "joystick", precio:2334, clasificacion:"t"},
    { producto: "bocinas", precio:5434, clasificacion:"r"}
];

// forEach

carrito.forEach(element => {
    console.log(element)
});

carrito.forEach(element => {
    console.log(element.producto)
});

carrito.forEach(element => {
    console.log(element.precio)
});

//Cuando quereamos iterar un arreglo o mostrarlo en la consola usamos el foreach, ya q esta diseñado para mostrar los resultados
// si queremos crear un nuevo arreglo usamos el map, crear un nuevo arreglo el cual podemos usar despues
console.log(`map`)


//map

let carritoMap = carrito.map(objeto => objeto.producto)
console.log(carritoMap)

// diferencia entre map and forEach
console.log(`Diferencias`)

console.log(`map`)
let ejemploMap = carrito.map(e => e.producto)
console.log(ejemploMap);

console.log(`foreach`)
let ejemploForEach =  carrito.forEach(a => a.producto)
console.log(ejemploForEach)

// lo ideal seria no asignarlo a una variable y iterar directo
carrito.forEach(element => {
    console.log(element)
});

// Podemos ver que nos arroja el forEach como undefined

// Observamos que nos creo un nuevo array con el cual podemos trabajar despues 
console.table(ejemploMap)

// Busca los productos que sea un teclado 

const arregloNuevo = carrito.map( producto => `${producto.producto}-${producto.precio}`)
console.table( arregloNuevo )