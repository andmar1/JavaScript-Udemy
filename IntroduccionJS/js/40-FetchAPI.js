
function obtenerEmpleados(){

    const archivo = 'empleados.json'
    
    fetch(archivo)
        .then( resultado => {
            return resultado.json();  //Le decimos que el resultado va a ser un json
        })
        .then( datos => {
            console.log( datos.empleados )
        })

}

obtenerEmpleados()

console.log(`aplicandole destructuring`)

function obtenerEmpleadosDestructuring(){

    const archivo = 'empleados.json'
    
    fetch(archivo)
        .then( resultado => {
            return resultado.json();  //Le decimos que el resultado va a ser un json
        })
        .then( datos => {
            const { empleados } = datos;
            // console.log(empleados)
            // iterar cobe el objeto 
            empleados.forEach(empleado => {
                console.log(empleado)
                console.log(empleado.id)
                console.log(empleado.nombre)
                console.log(empleado.puesto)

                // mostrarlo en el html, agregamos "+" para que se le agregue el codigo anterior
                document.querySelector('.contenido').textContent += empleado.nombre;
            });
        })
}
obtenerEmpleadosDestructuring();


console.log(``)
console.log(`obtener datos como texto`)

function obtenerEmpleadosTexto(){

    const url = 'empleados.json'
    
    fetch(url)
        .then( resultado => {
            return resultado.text();  //Le decimos que el resultado va a ser un json
        })
        .then( datos => {
            console.log( datos )
        })
}


obtenerEmpleadosTexto()

console.log(`Apartado de Clientes`)


function obtenerClientes(){

    const url = "clientes.json"

    fetch(url)
        .then(resultado =>{
            return resultado.json();
        })
        .then( datos => {

            const { clientes } = datos;

            clientes.forEach(element => {
                console.log(element.pais)
            });

            
        })
}

obtenerClientes()


