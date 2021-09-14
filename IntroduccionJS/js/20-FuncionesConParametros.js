function sumar(numero1, numero2){
    console.log(numero1 + numero2)
}
sumar(8,7);
sumar(2,4);
sumar(3,3);
sumar(0,2);


const sumar2 = function(numero1, numero2){
    console.log(numero1 + numero2)
} 

sumar2(10,10);

console.log("Parametros por default")
function restar(n1=20,n2=10){
    console.log( n1 - n2);
} 
// si no le agregamos valores, toma lo que estan definidos por default 
restar()
restar(90-3)

function calif(name="pepe", lista=[]){
    let res = 0;
    lista.forEach(element => {
        res = res + element
    });
    console.log(`La suma de ${name} es de ${res}`)
    let promedio = res / lista.length;
    console.log(`El promedio de ${name} es de: ${promedio}`)
    
}
calif("jose",[9,8,7,8,7,8,7,8])
calif("",[9,8,9,8,9,8,9,8])
calif("Jorge",[9,8,7,6,7,8,7,8,9,9])
