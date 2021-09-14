const meses = ['Enero','Febrero','Marzo','Abril','Septiembre','Diciembre'];

const carrito = [
    {nombre: "monitor", precio:5000},
    {nombre: "television", precio:789},
    {nombre: "tablet", precio:300},
    {nombre: "audifonos", precio:530},
    {nombre: "teclado", precio:675},
    {nombre: "celular", precio:321},
    {nombre: "bocinas", precio:40},
    {nombre: "laptop", precio:13230},
]

console.log("foreach")
// for each
meses.forEach( (mes)=>{
    if(mes === "Marzo"){
        console.log(`${mes} si existe`)
        console.log("Marzo si existe")
    }
})

console.log('some')
let resultado = carrito.some( (producto) =>{
    return producto.nombre === "laptop"
})
console.log( resultado )

// similar a 
resultado = carrito.some( producto => producto.nombre === 'Radio')
console.log( resultado )


console.log('Reduce')
const resultadoReduce = carrito.reduce( (total, producto )=>{
    return total + producto.precio 
},0)

console.log( resultadoReduce )
const resultadoReduce2 = carrito.reduce((total, producto)=>{ return  total + producto.precio},0)
console.log( resultadoReduce2 )

const resultadoReduce3 = carrito.reduce((total, producto)=> total + producto.precio,0)
console.log("total a pagar:",resultadoReduce3)

console.log("filter")
const busqueda = carrito.filter( (element ) =>{ return element.precio < 500 })
console.log( busqueda )
console.table( busqueda )

const busqueda2 = carrito.filter( elemento => elemento.precio > 500);
console.log("Los elementos mayores a 500 son: ", busqueda2)  
console.table( busqueda2 )

const busqueda3 = carrito.filter( element => element.nombre !== "audifonos")
console.log("Diferentes a celular", busqueda3)
console.table("Diferentes a celular", busqueda3)
console.table( busqueda3 )