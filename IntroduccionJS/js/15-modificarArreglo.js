
const numeros = [10,20,30,40,50];
console.table( numeros )


numeros[0] = 90;
console.table(numeros)

// agregar mas elementos
numeros[5]= 55;
numeros[6]= 65;
numeros[7]= 75;

console.log(numeros)

// Si agregamos un indice que no coincide con el orden, por default lo arroja al ultimo del arreglo "lista"

numeros[100] = 233;
console.table( numeros )

console.log("Metodo Push")

numeros.push(89);
console.log(numeros)
// Podemos agregar mas de un solo elemento por medio del push
numeros.push(434,23);
console.log(numeros)
console.table(numeros)

console.log("Metodo Unshift")
// Este metodo en vez de agregar elementos al final del arreglo los pone al principio
numeros.unshift(-1,-2-34);
console.log( numeros )

console.log("Eliminar elementos de un arreglo")

const meses = ['Enero','Febrero','Marzo','Abril','Septiembre','Diciembre'];


console.log("metodo pop")
// Este metodo nos elimina el ultimo elemento del arreglo
meses.pop();
console.log(meses)

console.log("metodo shift")
// Este metodo nos elimina el primer elemento del arreglo
meses.shift()
console.log(meses)

console.log("Elimiar un elemento de en medio del arreglo")
const dias = ["Lunes","Martes","Miercoles","Jueves","Viernes"]
// Splice recibe dos parametros, el primero es la posicion mientras que el segundo es la cantidad que deseas eliminar
dias.splice(2,2) //ELiminar mierciles y jueves 
console.log( dias )


console.log("Rest Operator and Spread Operator")
// Mantiene el arreglo original agregandole nuevos valores 
const albums = ["Rust in peace","Master of puppets","Heaven","black album","And justice for all","ride to lightnigh"]

const nuevoArreglo = [...albums, 'Appetite for Destruction'];
console.log(nuevoArreglo)
console.table(nuevoArreglo)

// podemos agregar elementos al principio por medio de la sintaxis 
const newArreglo = ["Countdown to the extinction",...albums]
console.table( newArreglo )