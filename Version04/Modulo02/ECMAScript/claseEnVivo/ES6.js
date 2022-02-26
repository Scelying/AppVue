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
//console.log(sumar());

//Si tengo un solo argumento los aprantesis son opcionales
//const multiplicarPorDos = (numero) => numero * 2;
const multiplicarPorDos = numero => numero * 2;
//console.log(multiplicarPorDos(5));

//Si tengo mas de una linea de codigo estoy obligado a usar los corchetes y si quiero
//retorna alguna informacion de usar la palabra reservada de return
const sumarAlternativa = () => {
    return 4 + 5;
};
//console.log(sumarAlternativa());

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
const diccionario = new Map();
//console.log(diccionario.size);

//Agregar información o datos
//set()
//<nombreMapa>.set(<clave>, <valor>);
diccionario.set('js', 'Es un lenguaje de programación');
diccionario.set('html', 'Es un lenguaje de etiquetas');
diccionario.set('css', 'Es un lenguaje de estilos');
diccionario.set(0, 'Es un número');
diccionario.set(0, 'Se sobreescribe');
diccionario.set(false, 'Es un valor boleano');
//console.log(diccionario.size);

//Obtener información o datos de la nueva estructura Map
//get()
//<nombreMapa>.set(<clave>);
//console.log(diccionario.get(false));
//console.log(diccionario.get(0));
//console.log(diccionario.get('html'));

//Elimine datos o información
//delete()
//<nombreMapa>.delete(<clave>);
//console.log(diccionario.delete(false));
//console.log(diccionario.size);

//Validar la existencia de alguna clave
//has()
//<nombreMapa>.has(<clave>);
//console.log(diccionario.has(false));
//console.log(diccionario.has('css'));

//Tipo de dato de Mapa
//console.log(typeof diccionario);

//Instancia de Mapa
//console.log(diccionario instanceof Map);

//Conocer todas las claves de un Mapa
//values()
//<nombreMapa>.values();
//console.log(diccionario.values());

//Conocer todas los valores de un Mapa
//keys()
//<nombreMapa>.keys();
//console.log(diccionario.keys());

//Conocer todas las asociaciones entre <clave>-<valor> de un Mapa
//entries()
//<nombreMapa>.entries();
//console.log(diccionario.entries());

for(asociacion of diccionario) {
    //console.log(asociacion);
}

//Eliminar todas las claves
//clear()
//<nombreMapa>.clear();
diccionario.clear();
//console.log(diccionario.size);

//Set()
//Nueva estructura de datos
//Un conjunto no posee cardinalidad.
//Un conjunto solo puede tener un valor único por cada elemento.
//Un conjunto puede contener cualquier tipo de dato.
//Como creo un conjunto
const conjuntoVocales = new Set();

//Como agrego información a un conjunto
//add()
//<nombreConjunto>.add(<valor>);
conjuntoVocales.add('a');
conjuntoVocales.add('e');
conjuntoVocales.add('i');
conjuntoVocales.add('o');
conjuntoVocales.add('u');
conjuntoVocales.add('u');
//console.log(conjuntoVocales);
//console.log(conjuntoVocales.size);

//new Set()
//const conjuntoVocales = new Set(['a', 'e', 'i', 'o','u']);

conjuntoVocales.forEach(function(valor) {
    //console.log(valor);
})

//Manipular un objeto como estructura iterable
//<nombreConjunto>.values();
const conjuntoIterable = conjuntoVocales.values();
//console.log(conjuntoIterable);

for(elementoInterno of conjuntoIterable) {
    //console.log(elementoInterno);
}

//Un conjunto no tiene <claves>, pero si uso el metodo keys(), me retorna los datos
//keys()
//console.log(conjuntoVocales.keys());

//entries()
//Un conjunto no tiene <claves>, le asigna a cada <nuevaClave> el mismo <valor>
//console.log(conjuntoVocales.entries())
const conjuntoIterableEntradas = conjuntoVocales.entries();
for(elementoInterno of conjuntoIterableEntradas) {
    //console.log(elementoInterno);
}

//Tipo de dato de conjunto
//console.log(typeof conjuntoVocales);

//Instancia de Conjunto
//console.log(conjuntoVocales instanceof Set);

//Clases
//Son templates para trabajar como objetos
/*
Sintaxis -> class <nombreClase> {
    //cuerpo interno de la clase
}
*/
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    darNombre() {
        return this.nombre;
    }

    darApellido() {
        return this.apellido;
    }

    darNombreCompleto() {
        return this.nombre.concat(' ', this.apellido);
    }

    cambiarNombre(nombre) {
        this.nombre = nombre;
    }

    cambiarApellido(apellido) {
        this.apellido = apellido;
    }
}

class FiguraBidimensional {
    constructor() {}
    area() {}
}

class Cuadrado extends FiguraBidimensional {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    area() {
        return this.lado * this.lado;
    }
}

class Rectangulo extends FiguraBidimensional {
    constructor(ancho, largo) {
        super();
        this.ancho = ancho;
        this.largo = largo;
    }

    area() {
        return this.ancho * this.largo;
    }
}

const cuadrado = new Cuadrado(0,0,5);
const rectangulo = new Rectangulo(0,0,2,3);
//console.log(cuadrado.area());
//console.log(rectangulo.area());

//Como creo un objeto por medio una clase
//Instancia
const GustavoGarcia = new Persona('Gustavo', 'Garcia');
const PepitoPerez = new Persona('Pepito', 'Perez');
GustavoGarcia.cambiarNombre('Adolfo');
GustavoGarcia.cambiarApellido('Blanco');
//console.log(GustavoGarcia.darNombreCompleto());

//Promise

//Symbol
//Nuevo tipo de dato primitivo para JS
//Representa un identificador único("oculto") al que ningún otro codigo puede acceder accidentalmente.
const persona = {
    nombre: 'Gustavo',
    apellido: 'Garcia'
};

let id = Symbol('id');
persona[id] = 145025;
//console.log(persona);
//console.log(persona[id]);
//console.log(persona.id);

let idDos = Symbol('id');
persona[idDos] = 145025;

//console.log(persona == persona);
//console.log(persona[id] == persona[idDos]);

//Valores por defecto en los parametros
//ES5
/*function division(dividendo, divisor) {
    if(typeof dividendo === 'undefined' || typeof divisor === 'undefined') {
        console.error('no se puedo realizar la operación');
        return;
    } else if (divisor === 0) {
        console.error('no se puedo realizar la operación, ya que el divisor es 0');
        return;
    }
    return dividendo / divisor;
}*/

//ES6
const division = (dividendo = 1, divisor = 1) => {
    return dividendo / divisor;
}

//console.log(division(10, 0));

//Templates
//`${<nombreVariable>}`
//ES5
//console.log('El nombre de la persona es: ' + persona.nombre + ' ' + 'y su apellido es: ' + persona.apellido);

//ES6
//console.log(`El nombre de la persona es: ${persona.nombre} y su apellido es: ${persona.apellido}`);

//Desestructuracion
//desestructuracion de arreglos
var arregloDigitosPares = [2,4,6,8,0];

//ES5
/*var primeraPosicion = arregloDigitosPares[0];
var segundaPosicion = arregloDigitosPares[1];
var terceraPosicion = arregloDigitosPares[2];
var cuartaPosicion = arregloDigitosPares[3];
var quintaPosicion = arregloDigitosPares[4];*/

//ES6
const [primeraPosicion, segundaPosicion, terceraPosicion, cuartaPosicion, quintaPosicion] = arregloDigitosPares;
//console.log(primeraPosicion, segundaPosicion, terceraPosicion, cuartaPosicion, quintaPosicion);

const tamanioArreglo = arregloDigitosPares.length;

for(let posicion = 0; posicion < tamanioArreglo; posicion++) {
    eval(`posicion${posicion}=${arregloDigitosPares[posicion]}`);
}

/*console.log(posicion0);
console.log(posicion1);
console.log(posicion2);
console.log(posicion3);
console.log(posicion4);*/

/*const [primerElemento, ,tercerElemento] = arregloDigitosPares;
console.log(primerElemento);
console.log(segundoElemento);*/

const [primerElemento, ...restoArreglo] = arregloDigitosPares;
//console.log(primerElemento);
//console.log(restoArreglo);

//desestructuracion de arreglos
//ES5
var objetoPersona = {
    nombre: 'Gustavo',
    apellido: 'Garcia',
    edad: 33
};
var nombreObjetoPersona = objetoPersona.nombre;
var apellidoObjetoPersona = objetoPersona.apellido;
var edadObjetoPersona = objetoPersona.edad;
console.log(nombreObjetoPersona, apellidoObjetoPersona, edadObjetoPersona);

//ES6
//La nueva variable que creo debe llamarse exavtamente igual a la llave dentro del objeto
//Si quiero rescatar las propiedas que no uso utlizo la notacion ...
const {nombre, ...restoObjeto} = objetoPersona;
console.log(nombre, restoObjeto);

//Operador Spread
//Permite a un elemento iterable o una cadena de texto ser expandida(spread) en lugares
//donde cero o mas argumentos(para llamada de función) son esperados.
function resta(n1, n2) {
    return n1-n2;
}

//console.log(resta(...arregloDigitosPares));

//Operador Rest
//Nos permite representar un número indefinido de argumentos(parametros de una función) como
//un array.
function sumaAlternativa(...desestructuracion) {
    console.log(desestructuracion);
    return desestructuracion.reduce((total, valor) => {
        return total + valor;
    });
}

console.log(sumaAlternativa(1,2,3,4,5,6,7,8,9,0));

//Modulos
//Importar desde exportaciones con nombre
//Importe exportaciones con nombre desde el archivo person.js
//Por favor redirigase a module.js