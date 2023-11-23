
const reproductor ={
    reproducir: function(id){ //en un objeto esto es propiedades, pero como es una funcion se les conoce como metodos de propiedad
        console.log(`Reproduciendo cancion con el id ${id}`);
    },
    pausar: function(){
        console.log('pausando...');
    },
    borrar : function(id){
        console.log(`Borrando cancion... ${id}`);
    },
    crearPlaylist: function(nombre){
        console.log(`Creando Playlist ${nombre}`);
    },
    };
   
reproductor.reproducir(20);
reproductor.reproducir(30);
reproductor.pausar();


reproductor.borrar(30);
reproductor.crearPlaylist(`Trap`);
