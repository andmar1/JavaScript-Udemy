// Promesas que reflejan valores que se podran usar ahora o en un futuro
// usados al hacer peticiones a una API

const usuarioAutenticado = new Promise( (resolve, reject)=>{
    const auth = true;
    
    if (auth) {
        resolve('Usuario autenticado'); // se ejecuta cuando el promise se cumple
    }
    else{
        reject('No se pudo iniciar sesion')  // el promise no se cumple
    }
});

// console.log( usuarioAutenticado )

console.log(`mostrar en consola`)

usuarioAutenticado
    .then(function(resultado){  //then lee el reject del promise
        console.log(resultado)
    })
    .catch(function(error){
        console.log(error)    //catch lee el reject del promise
    })
    
console.log( usuarioAutenticado )

// En los promises existen 3 valores 
// Pending: No se ha cumplido pero tampoco se ha rechazado, ausencia de codigo
// Fullfill: Ya se cunmplido
// Reject: Se ha rechazado o no se pudo cumplir, errores de codigo

// mismo resultado de la verificacion del promise por medio de arrow function 
console.log(``)
console.log(`con arrow function`)

const compraHecha = new Promise(( resolve, reject) =>{
    const pagado = false;

    if (pagado) {
        resolve("Pago completo")
    }
    else{
        reject("No ha pagado")
    }
})
    

compraHecha
    .then(resultado =>{
        console.log(resultado)
    })
    .catch(error =>{
        console.log(error)
    })











