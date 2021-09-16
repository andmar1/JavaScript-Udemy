async function obtenerClientes(){

    const archivo = 'clientes.json';

    const resultado = await fetch(archivo);    //arroja la respuesta del servidor, ya sea un status:200 o status:400
    
    const datos = await resultado.json();

    console.log( datos )
}

obtenerClientes()