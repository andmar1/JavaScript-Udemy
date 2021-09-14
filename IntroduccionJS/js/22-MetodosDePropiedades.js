// sintaxis,sa de metodo pero siguen siendo funciones

// Metodos de propiedad  
const reproductor = {
    reproducir:function( id ){
        console.log(`Reproduciendo cancion con el ID: ${id}`)
    },
    pausar:function(){
        console.log("Pausando.....")
    },
    crearPlaylist: function( nombre ){
        console.log(`Creando la playlist: ${nombre}`)
    },
    reproducirPlaylist: function( nombre ){
        console.log(`reproducionedo la playlist: ${nombre}`)
    }
}

// agregar propiedades por fuera de objeto
reproductor.borrarCancion =function( id ){
    console.log(`Borrando la cancion ${id}`)
}

console.log( reproductor)
console.log()
reproductor.reproducir(124)
console.log()
reproductor.reproducir(13)
console.log()
reproductor.pausar()
console.log()
reproductor.borrarCancion(2)
console.log()
reproductor.crearPlaylist("Heavy metal")
console.log()
reproductor.reproducirPlaylist("Electronic")