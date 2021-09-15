// Prototypes son funciones que solo se pueden usar en un tipo de objeto

function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

function Cliente(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}


const producto2 = new Producto("monitor",23323)
const producto3 = new Producto("teclado",243)

const cliente1 = new Cliente("Antonio","Andrade")

// sin prototype
function formatearProducto(producto){
    return `El producto ${producto.nombre} tiene un precio  de: ${producto.precio}`
}
console.log(formatearProducto(producto2))
// vemos que nos podemos equivocar al momento de invocar una funcion con parametros diferentes, dandonos valores indefinidos 
console.log(formatearProducto(cliente1))


console.log()
console.log(`Prototypes`)
// Prototype nos permitira crear funciones que solo se pueden usar en un codigo en especifico, teniendo mas limpio y organizado en nuestra estructura 

function Usuarios(nombre, edad, sexo){
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
} 
const usuario1 = new Usuarios("Hector",34,"M");
const usuario2 = new Usuarios("Hector",34,"M");
const usuario3 = new Usuarios("Hector",34,"M");

Usuarios.prototype.formatearUsuario = function(){
    return `proto El usuario ${this.nombre} tiene una edad de: ${this.edad} y su sexo es: ${this.sexo}`
}

console.log(`Con prototype`)
console.log( usuario1.formatearUsuario() )

console.log(`Sin prototype`)
// podemos ver que si viene de un Object constructor diferenete al que le dimos permiso prototype no lo asigna a la funcion
// console.log(producto2.formatearUsuario() )

// ----------------------------------------Another Object Constructor-------------------------------------------
Producto.prototype.formatearProducto = function(){
    return `proto El producto ${this.nombre} tiene un precio  de: ${this.precio}`
}

console.log( producto3.formatearProducto() )

console.log(`Estructura de buenas practicas de un prototype`)

// objecto contructor
function Libros(nombre, año, editorial){
    this.nombre = nombre;
    this.año = año
    this.editorial = editorial
}
// fucnion con prototype 
Libros.prototype.mostrarLibro = function(){
    return `EL libro es ${this.nombre} del año: ${this.año} con la editorial -> ${this.editorial}`
}

// creacion del objeto
const libro1 = new Libros("100 años de soledad",1997,"Purrua");
console.log(libro1.mostrarLibro())

