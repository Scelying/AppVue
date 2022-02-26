//.flat()
//Crea un nuevo arreglo con todos los sub-arreglos que el arreglo
//principal contiene
const edades = [8, 10, 9, 11, [13, 15, 18, [20, 23, 24, [34, 76, 54]]]];
//console.log(edades);
//console.log(edades.flat(Infinity));

//.flatMap()
//Una combinacion entre el metodo .flat() y el metodo .map()
const respuestaAPI = [
    {
        nombre: 'Producto1',
        precio: 20000
    },
    {
        nombre: 'Producto2',
        precio: 10000
    },
    {
        nombre: 'Producto3',
        precio: 5000
    }
];
 const ejemploMap = respuestaAPI.map(objeto => [objeto.nombre, objeto.precio]);
 //console.log(ejemploMap);

 const ejemploFlatMap = respuestaAPI.flatMap(objeto => [objeto.nombre, objeto.precio]);
 //console.log(ejemploFlatMap);

 //trimStart() | trimEnd()
 const correo = "       correo@corre.com        ";
 /*console.log(correo);
 console.log(correo.trim());
 console.log(correo.trimStart());
 console.log(correo.trimEnd());*/

 //toString()
 //Retorna un string que representa una función
function sumar(sumando1, sumando2) {
    return sumando1 + sumando2;
}

console.log(sumar(1,0).toString());