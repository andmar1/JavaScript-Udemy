// Objeto Math  

console.log("Valor de PI");
let resultadoPI = Math.PI;
console.log("Valor de PI", resultadoPI);

console.log("Redondear un Valor")
let redondear = Math.round(8.6);
console.log("8.6 redondeado", redondear);

console.log("Redondear con Ceil")
// Ciel siempre redondea hacia arriba, son muy utiles usarlos en las paginadores
let redondearCiel = Math.ceil(4.3);
console.log("4.3 redondeado", redondearCiel);

console.log("Redondear con Floor");
// floor redondea hacia abajo
let redondeaFloor = Math.floor(5.7);
console.log("5.7 redondeado", redondeaFloor);

console.log("Raiz cuadrada");
let root = Math.sqrt(123);
console.log("La raiz cuadrada de 123 es de:", root);

console.log("Convertir un mumero negativo a positivo");
let positive = Math.abs(-432);
console.log("-432 a positivo: ", positive);

console.log("minimo de una lista");
let lista = (34,3,4,3,2,6,4,3,2,0);
console.log("El valor minimo de la tupla es de ", Math.min(lista));

console.log("maximo de una lista");
let maximo = (34,3,4,3,2,6,4,3,2,0,45,323);
console.log('El valor maximo de las lista es de', Math.max(maximo));

console.log("Numeros Random");
let resultado = Math.random();
console.log("Numero random", resultado );

console.log("Numero random definido");
let random = Math.floor( Math.random() * 30);
console.log("Random entre 1 y 30: ", random )