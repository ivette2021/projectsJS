
const reproductor ={
    cancion:'',

    reproducir: id=> console.log(`Reproduciendo cancion con el id ${id}`),
    pausar: ()=> console.log('pausando...'),
    borrar : id=>console.log(`Borrando cancion... ${id}`),
    crearPlaylist: nombre=>
        console.log(`Creando Playlist ${nombre}`),

        set nuevaCancion(cancion){ //set forma de agregar valores
            this.cancion = canion;
            console.log(`Añadiendo ${cancion}`);
        },

        get obtenerCancion(){ //get es una forma de obtener  de vuelta esos valores
            console.log(`${this.cancion}`);
        }
    };
   

reproductor.nuevaCancion = 'Industry Baby';//en vez de parentesis lo haces como si fuera un objetos
reproductor.obtenerCancion;//tampoco es necesario para get los parentesis  // me sale el nombre de la cancion

reproductor.reproducir(20);
reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist(`Trap`);
