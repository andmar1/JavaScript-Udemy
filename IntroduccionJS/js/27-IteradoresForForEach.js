console.log('for')
// promedio por for loop
function promedio(tabla){
    let suma = 0;
    for (let i = 0; i <= 10; i++) {
        suma = tabla * i
        console.log(`${i}--->${suma}`)
        // const element = array[i];
    }
}
promedio(3)

console.log('while')
function prom(tabla){
    let res = 0
    let i = 0
    while (i <= 10) {
        res = i * tabla
        console.log( i,"--->",res )
        i++;  //nunca definir el i fuera de while que se cicla y todo se va al carajo
    } 
}
prom(5)
console.log()
const resultadoFinal = prom(9)
console.log(resultadoFinal)


console.log('do while ')
let promedioDowhile = (tabla)=>{
    let suma = 0, i= 0
    do {
        suma = i * tabla;
        console.log(i,"--->",suma)
        i++;
    } while (i<=10);
}
promedioDowhile(4)

console.log()
// valor de pi del 1 al 10
let pi = (p=Math.PI) =>{
    let i = 0;
    let suma = 0
    while (i<=10) {
        suma = p * i;
        console.log(`PI por ${i} = ${suma}`)
        i++;
    }
}
pi()

console.log()

let personas = [
    { nombre: "luis", edad:17, sexo:"m"},
    { nombre: "felipe", edad:27, sexo:"m"},
    { nombre: "jose", edad:37, sexo:"m"},
    { nombre: "Florencio", edad:47, sexo:"m"},
    { nombre: "insigne", edad:65, sexo:"m"},
    { nombre: "maria", edad:23, sexo:"f"},
    { nombre: "monica", edad:54, sexo:"f"}
];

console.log( personas )
console.table( personas )

console.log("reduce")

let sumaEdad = personas.reduce((total, elemento)=>
    total + elemento.edad
,0)

console.log("La suma de las edades de las persons es de: ",sumaEdad)

let size = personas.length

let promedioEdad = sumaEdad / size

console.log(`El promedio de edad es de: ${promedioEdad}`)

console.log(`genero`)
let gender = personas.filter(genero =>{
    return genero.sexo == "f"
})
console.table(gender)

gender = personas.filter(elemento => elemento.sexo === "m")
console.table(gender)


for(let j=0; j<10;j++){
    suma = 10 * j;
    console.log(suma)
}

console.log(``)
const tablas = (tabla =>{
    let suma = 0;
    let i = 0
    while(i <= 10){
        suma = tabla * i;
        console.log(`${tabla} * ${i} ---> ${suma}`)
        // console.log(`La tabla del ${tabla} es: ${i}---> ${suma}`)
        i++;
    }
})
tablas(6)

const nota = (table =>{
    notes = [1,2,3,4,5,6,7,8,9,10]
    let suma = 0
    notes.forEach(element => {
        suma = element * table
        console.log(`${element} * ${suma}`)
    });
})
console.log( nota(8) )


console.log(`Par o impar`)
let resultadoPares = 0;
let i = 0
while(i<=10){
    if (i % 2 == 0) {
        console.log(i,"par")
    }
    else{
        console.log(i,"impar")
    }
    i++
}


// Iterar array por medio de un for

let productos = [
    { producto: "tv plasma", precio:1732, clasificacion:"t"},
    { producto: "computadora", precio:227, clasificacion:"d"},
    { producto: "impresora", precio:3237, clasificacion:"e"},
    { producto: "taclado", precio:437, clasificacion:"e"},
    { producto: "monitor", precio:6235, clasificacion:"r"},
    { producto: "joystick", precio:2334, clasificacion:"t"},
    { producto: "bocinas", precio:5434, clasificacion:"r"}
];
console.log(`busqueda`)
const fil = productos.filter( function (element){
    return element.precio < 500
})
console.log( fil )

const fil2 = productos.filter(i => i.precio > 500 )
console.table( fil2 )

console.log(`for`)
for (let i = 0; i < productos.length; i++) {
    console.log(productos[i])
    // console.log(productos[i].producto) iterar solo una variedad
    
}
console.log(`foreach`)
productos.forEach(element => {
    console.log(element)
});

// mostrar solo el indice de los productos
for (let i = 0; i < productos.length; i++) {
    console.log(i)
}