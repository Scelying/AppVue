//ECMAScript 2015
//ES6
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
console.log(arregloNumeros);
arregloNumeros.pop();
arregloNumeros.pop();
arregloNumeros.pop();
arregloNumeros.push(5);
console.log(arregloNumeros);

//arregloNumeros = [{nombre: 'Gustavo', apellido: 'Garcia'}, {nombre: 'Gustavo', apellido: 'Garcia'}, 6];