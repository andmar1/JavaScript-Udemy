// Mensaje de error para ver donde tenemos el error


const numero1 = 10
const numero3 = 30

console.log(numero1)

try {
    console.log(numero2)    //Donde tenemos el error
} catch (error) {
    console.log(error)
}

console.log(numero3)


function avg(lista =[], nombre){
    let suma =0

    const resultado = lista.reduce((total, i)=>{
        return total + i
    },0)
    console.log(`suma de array lista`, resultado)

    lista.forEach(element => {
        suma += element;
    });
    console.log('suma',suma)
    suma = suma / lista.length
    console.log(`Promedio de ${nombre} es de: ${suma}`)
}
avg([9,8,7,8,7,8,7],"Jose")
