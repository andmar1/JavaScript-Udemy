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