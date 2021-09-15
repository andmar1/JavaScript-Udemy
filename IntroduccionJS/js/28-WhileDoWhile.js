// while
let i = 0 //indice
while( i<=50){  //condicion
    if(i %2==0){
        console.log(`${i}: par`)
    }
    else{
        console.log(`${i}: impar`)
    }
    i++;  //incremento
}

console.log(``)

// do while
let j = 0
do {
    if( j%2 == 0){
        console.log(`${j}: numero par`)
    }
    else{
        console.log(`${j}: numero impar `)
    }
    j++;
} while (j<=50);



let productos = [
    { producto: "tv plasma", precio:1732, clasificacion:"t"},
    { producto: "computadora", precio:227, clasificacion:"d"},
    { producto: "impresora", precio:3237, clasificacion:"e"},
    { producto: "taclado", precio:437, clasificacion:"e"},
    { producto: "monitor", precio:6235, clasificacion:"r"},
    { producto: "joystick", precio:2334, clasificacion:"t"},
    { producto: "bocinas", precio:5434, clasificacion:"r"}
];


// diferencia entre while and doWhile
console.log(`diferencia entre while and doWhile`)

// while evalua primera la condicion sino no se ejecuta el codigo
let a =20

while (a ==10) {
    console.log(`valido`)
    a++;
}

while (a == 20) {
    console.log(`valido`)
    a++;
}

// do while ejecuta el codigo al menos una vez y despues evalua la condicion  
console.log(`do while`)
let dowhile = 32;

do{
    console.log(`si es: `,dowhile)
    dowhile++;
} while (dowhile < 50);

console.log(`pares`)

