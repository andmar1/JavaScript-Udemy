// This
// this hace referencia al objeto sobre cual se esta mandando la funcion

console.log(`sin referencia por this`)
const reservacion = {
    nombre: "Antonio",
    Apellido: "Andrade",
    total: 1000,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${reservacion.nombre} reservo y su cantidad a pagar es de: ${reservacion.total} `);
    }
}

console.log(reservacion.nombre)

// invocar function
reservacion.informacion()

console.log(`con referencia por this`)

const reservacion2 = {
    nombre: "Jose",
    Apellido: "Mares",
    total: 2300,
    pagado: true,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de: ${this.total} `);
    }
}

const reservacion3 = {
    nombre: "Pepe",
    Apellido: "Pecas",
    total: 4340,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de: ${this.total} `);
    }
}


reservacion2.informacion()

reservacion3.informacion()

console.log(`Ventana Global`)
console.log()
// no se puede usar this cuando tenemos un arrow Function por que hace referencia a la ventana global 
// para que jale con arrow function debemos asignarle un valor a las variables
window.nombre = "Un nombre x"
window.total = 1000;

const reservacion4 = {
    nombre: "julio",
    Apellido: "Silva",
    total: 4320,
    pagado: true,
    informacion: ()=>{
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de: ${this.total} `);
    }
}
reservacion4.informacion()

console.log(`pregunta de empleo como jr`)

const datos = {
    nombreDato : "Pepe",
    info: () => {
        console.log(`${this.nombreDato}`)
    }
}
datos.info()

// nos arrojara un undefined como arrow function