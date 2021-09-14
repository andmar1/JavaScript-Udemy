// Array methods

const meses = ['Enero','Febrero','Marzo','Abril','Septiembre','Diciembre'];

const carrito = [
    {nombre: "monitor", precio:5000},
    {nombre: "television", precio:789},
    {nombre: "tablet", precio:300},
    {nombre: "audifonos", precio:530},
    {nombre: "teclado", precio:675},
    {nombre: "celular", precio:4300},
    {nombre: "bocinas", precio:40},
    {nombre: "laptop", precio:13230},
]

// for each
meses.forEach(function (mes){
    console.log(mes)
});

console.log("Verificacion")
// ver si existe el elemento dentro del array
meses.forEach(function(mes){
    if (mes == "Marzo") { 
        console.log("Marzo si existe")
    }
})

// Includes
// buscar por medio de include, nos regresa un booleano, usar en un arreglo plano unidimensional
console.log("funcion includes")
const resultado = meses.includes("Marzo");
console.log( resultado )

// Para arreglo con objetos dentro tenemos que usar "some", ideal para 
console.log("funcion some")
let resultado2 = carrito.some(function(producto){
    return producto.nombre === 'teclado'
});
console.log(resultado2)
// caso contrario
resultado2 = carrito.some(function(producto){
    return producto.nombre === 'Bicicleta'
})
console.log(resultado2)


// Calcular el total del carrito ejercicio por medio de Reduce
console.log("Funcion reduce")
let resultadoReduce = carrito.reduce(function(total, producto){
    return total + producto.precio
},0);
console.log("Suma reduce", resultadoReduce )

console.log("Funcion flecha, array Function")
resFlecha = carrito.reduce((total, producto)=> total + producto.precio,0);
console.log("Funcion Flecha", resFlecha)

// ---------------------------------------------------------------
console.log()
console.log("Funcion Filter")
// Traer productos que sean mayor a 400
console.log("Tabla de productos mayores que 1000")
resFilter = carrito.filter(function(producto){
    return producto.precio > 1000;
});
console.table( resFilter );

console.log("Tabla de productos originales")
console.table( carrito )

console.log()
// Filtar todos los nombres con celular
resFilter2 = carrito.filter(function(elemento){
    return elemento.nombre === "celular"
});
console.table(resFilter2)

console.log()
// Filtar todos los nombres que no son celular
resFilter2 = carrito.filter(function(elemento){
    return elemento.nombre !== "celular"
});
console.table(resFilter2)


console.log();
// Arroja todos los nomeros 7 de la lista 
const notas = [10,9,7,6,7,8,7,7,6]
Note = notas.filter(function(elemento){
    return elemento === 7
})
console.log(`Los numeros 7 de la lista son ${Note}`);

// Calcular el total del carrito ejercicio
console.log("Total a pagar del array")
function totalCarrito(){
    let suma = 0;
    carrito.forEach(element => {
        suma += element.precio;
    });
    console.log("El total es de: ",suma)   
}
totalCarrito()



const temasLocos = [
    {nombre: "morsa", posicion:"defensa", numero:27},
    {nombre: "tarza", posicion:"delantero", numero:27},
    {nombre: "ervin", posicion:"portero",numero:1},
    {nombre: "carlos", posicion:"medio",numero:5},
    {nombre: "many", posicion:"defensa",numero:8},
    {nombre: "fox", posicion:"medio",numero:4},
    {nombre: "wero", posicion:"defensa",numero:9},
    {nombre: "pico", posicion:"medio",numero:13},
    {nombre: "bomba", posicion:"medio",numero:10},
    {nombre: "stich", posicion:"delantero",numero:54},
    {nombre: "gary", posicion:"delantero",numero:35}
]

// console.log(temasLocos)

const jugadores = temasLocos.filter(function(player){
    return player.nombre === "tarza"
})

const medios = temasLocos.filter(function(gamer){
    return gamer.posicion === "medio"
})

console.log("Medios de los temas locos")
// console.log( medios )
console.log('Los jugadares mediocampistas son:', medios)

console.log()
console.table( medios )

function promediar(name, tabla){
    let suma = 0;
    console.log(name)
    for (let i = 0; i <= 10; i++) {
        suma = tabla *i;  
        console.log(i,"-->",suma);
        if (suma == 20) {
            console.log("Aqui esta el 20")
        }
    }
}
promediar("basura",5)


const listaJugadores = [
    {name:"Carlos",age:52},
    {name:"Pedro",age:62},
    {name:"Juan",age:87},
    {name:"Octavio",age:32},
    {name:"Hugo",age:24},
    {name:"Fernando",age:25}
];

let res = listaJugadores.some(function(el){
    return el.age > 50;
})
console.log(res)

console.log("Reduce Excersices");
let sumaEdad = listaJugadores.reduce(function(plus, i){
    return plus + i.age;
},0)
console.log( sumaEdad )

let busquedaName = listaJugadores.filter(function(buscar){
    return buscar.name === 'Fernando'
}) 

console.table( busquedaName )

busquedaArrow = listaJugadores.filter((buscar)=>{
    return buscar.age < 50
});

console.table( busquedaArrow);

console.log("funcion map")

const bandas=[
    {nameBand: "iron maiden", discos:40},
    {nameBand: "metallica", discos:19},
    {nameBand: "haggard", discos:11},
    {nameBand: "gojira", discos:8},
    {nameBand: "evanescence", discos:2},
    {nameBand: "linkin park", discos:30},
    {nameBand: "", discos:14},
    {nameBand: "sepultura", discos:4},
    {nameBand: "megadeth", discos:8},
];

console.log(bandas.map(banda => banda.nameBand === "iron maiden"));

console.log(bandas.map(banda => banda.discos > 6 ));

const disc = bandas.map(element => element.discos < 5);
console.log( disc )

const valor = disc.filter(function(val){
    return val.valueOf === true
})

console.log( valor )