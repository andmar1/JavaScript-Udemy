// Arreglos o Array

const numeros = [10,20,30,40,50];
console.log( numeros );

console.log("Acceder a elemento del arreglo")
console.log(numeros[3]);
// si no existe el indice, nos arroja undefined
console.log(numeros[120]);

console.log("Tamaño del array")
console.log("numero de elementos del array",numeros.length)

console.log("Recorrer array por medio de un forEach");
numeros.forEach(function(numero){
    console.log(numero)
});

console.log("Maperar Arreglo en una tabla")
console.table( numeros )

// crear un Arreglo por medio de un constructor

const meses = new Array ('Enero','Febrero','Marzo','Abril','Septiembre','Diciembre');
console.table(meses)

// Arreglo mesclado
console.log("Array Mezclado")
const mix = ["Hola",23,true,"juan",false, {nombre:"Antonio",trabajo:"Programer"},[1,2,3]]

console.log( mix )
console.table( mix)

console.log()

// Funcion que calcula la tabla que desees
console.log("Tablas de multiplicar")
function tablas(tabla,lista){
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        const element = lista[i] * tabla;
        console.table(`${lista[i]}: -->${element}`);
    }
}
tablas(5,[1,2,3,4,5,6,7,8,9,10])

