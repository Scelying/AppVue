//Dos nuevos metodos String
//padStart | padEnd
//padStart -> permite un relleno al principio de una cadena de caracteres
//padEnd -> permite un relleno al final de una cadena de caracteres
//<string>.padStart(<parametro1>, <paramatero2>?)
//Paramaetro1 -> la cantidad de veces a repetir
//pArametro2 -> el valor que se va a repetir
let palabra = 'script';
palabra = palabra.padStart(20,'java');
console.log(palabra);
//<string>.padEnd(<parametro1>, <paramatero2>?)
//Paramaetro1 -> la cantidad de veces a repetir
//pArametro2 -> el valor que se va a repetir
let palabraDos = 'script';
palabraDos = palabraDos.padEnd(20,'java');
console.log(palabraDos);

//Object.entries()
//Sintaxis -> Object.entries(<objeto>)
//Devolver un arreglo con los pares(propiedad)cvlae-valor
const objetoPersona = {
    nombre: 'Gustavo',
    apellido: 'Garcia'
}
console.log(Object.entries(objetoPersona));

//async/await

//Memoria compartida de JS
//SharedArrayBuffer -> Permite tener memoria compartida
//SharedArrayBuffer -> Pasar copias de los objetos
//SharedArrayBuffer -> Apunta a la memoria donde se guardan los datos
//worker
//Proceso en segundo plano de JS
