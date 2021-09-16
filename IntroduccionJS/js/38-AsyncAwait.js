// Async / await

function descargarNuevosClientes(){
    return new Promise( resolve =>{
        console.log(`Descargando clientes.......espere.......`)

        setTimeout(() => {
            resolve('Los clientes fueron descargados')
        }, 5000);
    })
}

async function app(){
    try {
        const resultado = await descargarNuevosClientes();
        console.log(`Este codigo si se bloquea`)
        console.log(resultado)
    } catch (error) {
        console.log(error)
    }
}

app()



// console.log(`Deferencias`)
setTimeout(() => {
    // console.log(`set timeout.........`)
}, 5000);  //tiempo de espero en milisegundos, 1000 milisegundo = 1segundo 


// lo repite por intervalos de tiempo 
setInterval(() => {
    // console.log(`set setInterval.........`)
}, 3000);  //tiempo de espero en milisegundos, 1000 milisegundo = 1segundo 







// ejercicos

const promedio = ( (nombre, lista=[]) =>{
    let suma = 0;
    lista.forEach(element => {
        suma += element
        setTimeout(() => {
            console.log(`${nombre}  -> ${element}`)
        }, 5000);
    });
})

// promedio("pepe",[9,7,8,7,6,6])