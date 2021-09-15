// poo programacion orientada a objetos

// Object Literal escritas con codigo duro
const producto = {
    nombre: "tele",
    precio: 2343,
};
console.log(`Por medio de un Objeto literar`)
console.log(producto)


console.log(`Por medio de un Objeto constructor`)
// Object constructor, poner el objeto en Mayusculas
function Producto(nombre, precio){                //Producto("parametros")
    this.nombre = nombre;           //Acceder a los parametros por medio del this
    this.precio = precio;                
}
// instancia de la clase, podemos instanciarlo las veces que deseemos
const producto2 = new Producto("Monitor curvo de 45 pulgadas", 9000) 
const producto3 = new Producto("Laptop", 29000) 
const producto4 = new Producto("Play Station", 19000) 

//Producto("argumentos")
console.log(producto2)
console.log(producto3)
console.log(producto4)

function Nota(nombre, nota){
    this.nombre = nombre;
    this.nota = nota;
}

const nota1 = new Nota("pepe",9);
console.log(nota1.xc)


function Validacion(name, costo, verificacion){
    this.name = name;
    this.costo = costo;
    this.verificacion = verificacion;
}

let validacion1 = new Validacion("pepe",1998,true)
console.log(validacion1)

let validacion2 = new Validacion(true, 1992, false)
console.log( validacion2)
// podemos usarlos para hacer bucles

// iteracion sobre objeto creado 
for (let i = 0; i < 5; i++) {
    suma = validacion2.costo * i;
    console.log(suma)
}







// otros ejemplos

function Perro(nombre, edad, raza){
    this.nombre = nombre;
    this.edad = edad;
    this.raza = raza;
}

const perro1 = new Perro("dino",23,"Pastor Velga")
console.log( perro1 )
