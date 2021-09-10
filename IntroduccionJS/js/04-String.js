// String o cadenas de texto

const producto = "Monitor de 20 pulgadas";

const producto2 = String("Monitor de 20 pulgadas");

// por medio de un objeto, no es muy comun esta forma
const producto3 = new String("Monitor de 50 pulgadas ")

console.log( producto );

console.log( producto2 );

console.log( producto3 );

console.log("El producto 3 es de tipo ",typeof(producto3));


// usar comillas dobles dentro de otras comillas dobles

const Tele = "Television de 40\"";
console.log( Tele );

// por medio de sintaxis de EcmaScript
const Tele2 = `Television de 50"`;
console.log( Tele2 );

// tamaño del string

let limite = 50;
let Tweet = "Antonio de Jesus Andrade Mares";
console.log( Tweet.length );
console.log(`El tamaño del Tweet es de ${Tweet.length} el limite es de ${limite}`)

// funcion que nos indica cuantos caracteres nos quedan
function Twet(parrafo){
    let limite = 60;
    let res = limite - parrafo.length;
    console.log(`Te quedan ${res} caracteres`);
    if(res > limite){
        console.log( "Rebasaste el limite de caracteres");
    }
}

Twet("Mi nombre andrade mares");

// indexOf
// Si queremos comprobar si la palabra existe en una cadena de caracteres usamos "indexof"
//Lo encuentra como si tuvieramos un array, por medio de indices
console.log("indexOf");
let apellidos = "Gomes Andrade Lopez Torres Rios Mares Gutierrez";
// si la palabra no esta nos arroja -1 como señal de que no existe
console.log(apellidos.indexOf('L'));

// vemos que encuentra la palabra andrade en la posicion 6 del array 
console.log(apellidos.indexOf("Andrade"))

console.log();

// podemos Validor Correos viendo que existan caracteres especificos como @
let correo = "antonio@gmail.com";
console.log("Si existe el @, esta en la posicion", correo.indexOf("@"));

// Include
// Nos arroja el resultado como booleano en vez de arrojar la posicion como el indexof 
console.log("includes");
let lastName = "Cardiel Gignac Soria Espinal Carrillo Perez";
// si no lo halla
console.log(lastName.includes('perro'));
// si lo encuentra
console.log(lastName.includes('Gignac'));

