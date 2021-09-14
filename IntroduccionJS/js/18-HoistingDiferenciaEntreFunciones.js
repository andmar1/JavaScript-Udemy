// declaracion de la funcion 
sumar()
// En este caso si se puede invocar antes, ya que primero se registran todas las funciones y despues las invocaciones
function sumar(){
    console.log( 5 + 3);
}
sumar()



// expresion de la funcion
// No funciona tal cual como una funcion sino como una variable, por lo que no la registra como funcion
sumar2()  //No podemos acceder a la funcion antes de declararla

const sumar2 = function(){
    console.log(4+2)
}
sumar2()
