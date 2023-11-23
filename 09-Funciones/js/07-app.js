

iniciarApp();

function iniciarApp(){
    console.log('iniciando app...');

    segundaFucion();
}

function segundaFucion(){
    console.log('Desde la segunda funcion');
    UsuarioAutenticado('Ivette');
}

function UsuarioAutenticado(usuario){
    console.log('Autenticando usuario... espere ...');
    console.log('Usuario autentificado exitosamente: ${usuario');

}