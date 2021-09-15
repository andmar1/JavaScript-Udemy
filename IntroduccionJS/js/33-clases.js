// Class

class Producto{

    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio  de: ${this.precio}`

    }
}

const producto1 = new Producto("lavadora", 2323)
const producto2 = new Producto("refrigerador", 7654)

console.log( producto1 )
console.log( producto2 )


class Perros{

    constructor(nombre, raza){
        this.nombre = nombre;
        this.raza = raza;
    }
    mostrarRaza(){
        return `La raza del perro es: ${this.raza}`
    }
}

const perro1 = new Perros("Firulais","Poodle")
console.log(perro1.mostrarRaza())

