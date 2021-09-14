// Declaracion de una funcion 

function suma(){
    console.log(10 + 10);
} 
suma()

// Expresion de la funcion

const sumar2 = function(){
    console.log(10 +40)
}
sumar2() 

// Funcion IIFE se mandan llamar ellas misma, previenen que no se puedan cruzar otros archivos

(function(){
    console.log("Hola") 
})();

// Llamar la variable desde otro archivo
console.log( cliente )

