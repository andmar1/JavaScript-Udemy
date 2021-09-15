// Funciones de Flecha 

// En la declaracion de la funcion no podemos usar Arrow Function
function sumar(){
    console.log(2+2)
}

// Expresion de la funcion
const sumar2 = function(n1,n2){
    console.log(n1 +n2)
}
sumar2(9,4)

// Arrow Function
const suma = (n1,n2)=>{
    console.log(n1 + n2)
}
suma(8,3)

const resultado = (num1,num2)=> console.log(num1 + num2)
resultado(5,4)
resultado(5,21)

console.log()
const aprendiendo = (tecnologia)=>{
    console.log(`Aprendiendo ${tecnologia}`)
}
aprendiendo("javascript")

// cuando solo tenemos un parametro dentro del parentesis este puede ser opcional
const learn = tech => {console.log(`aprendiendo ${tech}`)}
learn("python")

const promedio = (name,lista) =>{
    let suma  = 0;
    lista.forEach(element => {
        suma += element;
    }); 
    suma = suma / lista.length;
    console.log(`El promedio de ${name} es de: ${suma}`)
}
promedio("jose ",[9,8,7,8,7])


// mas ejemplos 

const perros = [
    {nombre: "dodo", edad: 3},
    {nombre: "peter", edad: 7},
    {nombre: "terry", edad: 10},
    {nombre: "champion", edad: 7},
    {nombre: "betoven", edad: 2},
    {nombre: "sarco", edad: 2},
    {nombre: "bebe", edad: 4},
    {nombre: "negro", edad: 6},
    {nombre: "doggy", edad: 6},
    {nombre: "terry", edad: 7},
    {nombre: "dino", edad: 8},
];

const promedioEdad = () =>{
    let size = perros.length
    let suma = 0
    perros.forEach(element => {
        suma += element.edad
    });
    suma = suma / size
    console.log(`Tamaño del arreglo es de: ${size}`)
    console.log(`El promedio de la edad de los perros es de ${suma}`)
}

promedioEdad()

let age = 0 
perros.forEach(element => {
    age += element.edad
});
console.log(`Suma de edades ${age}`)

const suma = perros.reduce((total, elemento)=>{
    return total + elemento.edad
},0)
console.log(`Suma por medio de Reduce ${suma}`)


let prueba = [
    {valor:"procesador", entero:4566},
    {valor:"cooler", entero:456},
    {valor:"ram", entero:765},
    {valor:"rom", entero:345},
    {valor:"zocalo", entero:233},
    {valor:"port", entero:2323},
]

const forE = prueba.forEach(element => {
    return element.valor;
});
console.log(forE)

const forM = prueba.map(element => {
    return element.valor;
});
console.table(forM)

const busqueda = forM.filter(function(producto){
    return producto.valor === "zocalo"
})
console.log( busqueda )