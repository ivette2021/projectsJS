const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    cantidad:1,
};

// const nombre = producto.nombre;//extrayendo el valor del nombre y se la estoy asignando a la variable
// console.log(nombre);

//destructutring == sacar de una estructura
// const{nombre }= producto; //esta es la nueva forma de extraer y crear la variable todo en un solo paso 
// const{precio }= producto;
const{nombre , precio }= producto;//si traes mas de una cosa del objeto asi seria mas corto
console.log(nombre);
console.log(precio);