
class Producto{

    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio  de: ${this.precio}`
    }
    obtenerPrecio(){
        console.log(this.precio)
    }
}

const producto1 = new Producto("lavadora", 2323)
const producto2 = new Producto("refrigerador", 7654)

console.log(`Herencia de la clase principal`)
// Herencia tanto de constructor como de metodos

class Libro extends Producto{
    constructor(nombre, precio, isbn){
        super(nombre, precio ); //heredamos lo que eciste en la clase padre
        this.isbn = isbn;
    }
    mostrarCaracteristicas(){
        return `El libro es: ${this.nombre} tiene un precio  de: ${this.precio} y si isbn es ${this.isbn}`
    }
    // heredar funciones
    formatearLibro(){
        return `${super.formatearProducto()} y su ISBN es de ${this.isbn}`
    }
    obtenerPrecio(){
        super.obtenerPrecio()
        console.log(`si hay en existencia`)
    }

}

const producto3 = new Producto("cama", 1990)
console.log(producto3.formatearProducto())

const libro1 = new Libro("Javascript Eloquent", 500, "009029309348023")
console.log(libro1.formatearProducto())

const libro2 = new Libro("Java 2",789,"2232332323")
console.log(libro2.mostrarCaracteristicas())

console.log(`Herencia de funciones`)
console.log(libro2.formatearLibro())

console.log(libro1.obtenerPrecio())