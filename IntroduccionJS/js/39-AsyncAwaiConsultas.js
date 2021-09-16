
function descargarNuevosClientes(){
    return new Promise( resolve =>{
        console.log(`Descargando clientes.......espere.......`)

        setTimeout(() => {
            resolve('Los clientes fueron descargados')
        }, 5000);
    })
}

function descargarUltimosPedidos(){
    return new Promise( resolve =>{
        console.log(`Descargando pedidos.......espere.......`)

        setTimeout(() => {
            resolve('Los pedidos fueron descargados')
        }, 3000);
    })
}

async function app(){
    try {
        // ejecutar ambas funciones await al mismo tiempo
        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]);
        console.log(resultado)
        console.log(resultado[0])
        console.log(resultado[1])
    } catch (error) {
        console.log(error)
    }
}

app()

// console.log(`manera incorrecta de ejecutar los async await`)
// sintaxis incorrecta

// async function app(){
//     try {
//         const clientes = await descargarNuevosClientes(); 
//         const pedidos = await descargarUltimosPedidos();
//         console.log(clientes)
//         console.log(pedidos)
//     } catch (error) {
//         console.log(error)
//     }
// }

// app()
