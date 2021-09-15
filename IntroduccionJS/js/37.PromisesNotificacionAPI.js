// jala el id del html
const boton = document.querySelector('#boton');

// asigna el evento a la variable 
boton.addEventListener('click', ()=>{
    Notification.requestPermission()                //pedir notificaciones al usuario
        .then( resultado => console.log(`El resultado esta: ${resultado}`))   //mostrar el resultado acorde a la configuracion del usuario
});


// notificacion con logotipo
if (Notification.permission == 'granted') {
    new Notification('Esta es una notificacion',{
        icon:'img/mrBean.jpg',
        body:'Codigo con Antonio'
    })
}

