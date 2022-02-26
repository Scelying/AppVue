//ECMAScript 2015
//ES6
//soporta el paradigma de propgramación orientado a objetos
//var
//tipo global mutable
//Determinado por la funcion que la contiene
/*for(var i = 0; i < 5; i++) {
    console.log(i);
};

console.log(i);*/

//let
//tipo local mutable
//Determiando por el bloque de codigo que la contiene
/*for(let i = 0; i < 5; i++) {
    console.log(i);
};

console.log(i);*/

//const
//tipo local inmutable(a la referencia)
//Determiando por el bloque de codigo que la contiene
/*for(const i = 0; i < 5; i++) {
    console.log(i);
};

console.log(i);*/

/*const cadenaCaracteres = 'Gustavo Garcia';
cadenaCaracteres = 'Hola Mundo!';
const numero = 5;
numero = 6;
const persona = {
    nombre: 'Gustavo',
    apellido: 'Garcia'
};
persona.nombre = 'Adolfo';
persona.nombreCompleto = persona.nombre + ' ' + persona.apellido;
console.log(persona);*/
const arregloNumeros = [{nombre: 'Gustavo', apellido: 'Garcia'}, {nombre: 'Gustavo', apellido: 'Garcia'}, 5];
//console.log(arregloNumeros);
arregloNumeros.pop();
arregloNumeros.pop();
arregloNumeros.pop();
arregloNumeros.push(5);
//console.log(arregloNumeros);

//error porque hago cambio de la referencia
//arregloNumeros = [{nombre: 'Gustavo', apellido: 'Garcia'}, {nombre: 'Gustavo', apellido: 'Garcia'}, 6];

//Funciones Flecha
//ES5
/*
var <nombreFuncion> = function(<argumento>*){
    //codigo de la funcion
}
*/

//ES6
/*const <nombreFuncionFlecha> = (<argumento>*) => {
    //codigo de la funcion flecha
}
*/

//Si hago todo en una unica linea de codigo puedo omitir corchetes y la palabra
//reservada de return;
const sumar = () => 4 + 5;
console.log(sumar());

//Si tengo un solo argumento los aprantesis son opcionales
//const multiplicarPorDos = (numero) => numero * 2;
const multiplicarPorDos = numero => numero * 2;
console.log(multiplicarPorDos(5));

//Si tengo mas de una linea de codigo estoy obligado a usar los corchetes y si quiero
//retorna alguna informacion de usar la palabra reservada de return
const sumarAlternativa = () => {
    return 4 + 5;
};
console.log(sumarAlternativa());

//Las funciones flechas no tienes su propio this. No estan hechas para metodos dentro 
//de objetos, no estan hechas para constructores. Al igual que las funcionaes tipo variable
//las debo definir antes de invocarlas.

//Bucle for/of

//Map()
//Nueva estructura de datos
//Un mapa que contiene pares clave-valor donde las claves pueden ser cualquier tipo de datos.
//Un mapa recuerda el orden de inserción de las claves.
//Un mapa tiene una propiedad que reprsenta el tamaño del mapa.
//Crea como un mapa
const nombres = new Map([
    ['Gustavo Garcia'],
    ['Pepito Perez']
]);
console.log(nombres.size);
