// Estructuras de Control 

const punjaje = 1000;

if (punjaje == 1000) {
    console.log("Si el puntaje es 1000")
}

console.log("Puntaje estricto")

let puntajeEstricto = "1000";
// puntajeEstricto = parseInt(puntajeEstricto)
// puntajeEstricto = Number(puntajeEstricto)

if (puntajeEstricto === 1000) {
    console.log("Si el puntaje es 1000 de manera estricta ===")
}
else{
    console.log("No es numerica la variable")
}

console.log( "diferente" )

const numero = 1000

if (numero !== 100) {
    console.log("No es igual")
}
else{
    console.log("Si el puntaje es 1000")
}

const efectivo = 1000
const carrito = 800

if (efectivo > carrito) {
    console.log("El usuario puede pagar")
}
else{
    console.log("Fondos insuficientes")
}

const rol = "Administrador nuevo"

const rol2 = "Editor"

if(rol === "Administrador"){
    console.log(" Acceso correcto ");
}
else if(rol2 === "Editor"){
    console.log("Eres Editor, acceso correcto");
}
else{
    console.log("Acceso incorrecto");
}