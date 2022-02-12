//Fundamentos ds JS
//Lenguaje de programación imperativo.
//Lenguaje de programación interpretado.
//Lenguaje de programación debilmente tipado.
//Lenguaje de programación de un único hilo.
//Lenguaje de programación multiplataforma.

//Como crear una variable en JS
//Sintaxis -> var <variable> = <valor>;
var ejemplo = 10;

//Tipos de datos en JS
//Primitivos y no primitivos
//Tipos de datos primitivos o elementales son los datos orignales
//de un lenguaje de programación, aquellos que nos proporciona el
//lenguaje de programación
//Tipos primitivos:
//Undefined
//Null
//String
//Number
//Boolean
//Object
//Function
//BigInit
//symbol

//typeof
//saber cual es el tipo de una variable en JS
//Sintaxis -> typeof <variable> === <tipoDato>
/*if(typeof primeraVariable === 'undefined') {
    console.log('Es un undefined');
}
else {
    console.log('No es un undefined');
}*/

//Comprarciones == y ===
// == (Comparación Sencilla)
//Compara el valor
//console.log(0 == false);

// === (Comparación Esctricta)
//Compara el valor y el tipo de dato
//console.log(5 === '5');

//Undefined y Null significan ausencia de valor
//Undefined es ausencia de valor de forma implicita
//undefined
//Declaro la variable pero nunca la inicializo(ausencia de valor)
//Sintaxis -> var <variable>
//var primeraVariable;
//console.log(typeof primeraVariable);

//Null
//Null es ausencia de valor de forma explicita
//Declaro la variable y le asigno el valor de nulo(ausencia de valor)
//Sintaxis -> var <variable> = null
//var primeraVariable = null;
//console.log(typeof primeraVariable);

//String
//Sintaxis -> var <variable> = '<valor>'
var miPrimeraVariable = 'Hola Mundo!';
//New String -> Me crea un objeto
//Sintaxis -> var <variable> = new String('<valor>');
var miSegundaVariable = new String('Hola Mundo!');
//console.log(typeof miPrimeraVariable, typeof miSegundaVariable);

//eval(). Evalua un código JS representado en cadena de caracteres a
//un objeto en particular.
var suma = '2 + 5';
//console.log(eval(suma));

//Number
//Sintaxis -> var <variable> = '<valor>'
var miPrimeraVariableNumerica = 123;
//console.log(miPrimeraVariableNumerica instanceof Number);
//console.log(miPrimeraVariableNumerica);
//New String -> Me crea un objeto
var miSegundaVariableNumerica = new Number('123');
//console.log(miSegundaVariableNumerica instanceof Number);
//console.log(typeof miPrimeraVariableNumerica, typeof miSegundaVariableNumerica);
//console.log(Number(miSegundaVariableNumerica) === 123);
//console.log(50 === 50.5);
//console.log(Number(undefined) === NaN);

//Boolean
//Sintaxis -> var <variable> = '<valor>'
var miPrimeraVariableBooleana = false;
//Number -> 0, -0
//Null -> null
//String -> ''
//console.log(Boolean(0), Boolean(-0), Boolean(''), Boolean(null), Boolean(NaN), Boolean(undefined));
//console.log(Boolean([]), Boolean({}), Boolean('false'));
var miSegundaVariableBooleana = new Boolean([]);
//console.log(miSegundaVariableBooleana);

//Object
//JS esta diseñado bajo un paradigma simple basado en objetos.
//Objeto -> Colección de propiedades, una propiedad es una asociación
//entre una llave y un valor.
//Sintaxis -> {propiedad} -> {<llave>: <valor>}
var andrea = {
    nombre: 'Andrea',
    edad: 32
};
//Extraer valores de la propiedad de un objeto con sintaxis .
//Sintaxis -> objeto.<llave>
var adolfo = {
    nombre: 'Adolfo',
    edad: 30
}
//console.log(andrea + adolfo);
//console.log(andrea, adolfo);

//Extraer valores de la propiedad de un objeto con sintaxis []
//Sintaxis -> objeto['<llave>']
//console.log(andrea['nombre'], adolfo['edad']);
//console.log(andrea['nombre'], andrea.nombre);
//console.log(adolfo['edad'], adolfo.edad);

//Mutar valores de la llave de una propiedad dentro de un objeto
adolfo.edad = 50;
adolfo['edad'] = 60;
//console.log(adolfo['edad'], adolfo.edad);

//Agregar propiedades a un objeto existente
//console.log(andrea);
//andrea['Edad'] = 75;
//console.log(andrea);

//New Object -> Me crea un objeto
var Andrea = new Object();
Andrea.nombre = 'Andrea';
Andrea.edad = 32;
Andrea.cedula = 200;
Andrea['fecha de nacimiento'] = 1988;

//console.log(andrea, Andrea);
//console.log(andrea instanceof Object, Andrea instanceof Object);

//Array
//Objeto global
//Cardinalidad -> indices, posiciones y tamaño
//Sintaxis -> [<indice>, <indice>*]
var arregloDeDigitosHexadecimales = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E'];

//Agregar un elemento al primer indice a un arreglo
//Sintaxis -> <arreglo>.unshift(<dato>)
//console.log(arregloDeDigitosHexadecimales);
arregloDeDigitosHexadecimales.unshift(0);
//console.log(arregloDeDigitosHexadecimales);

//Agregar un elemento al ultimo indice a un arreglo
//Sintaxis -> <arreglo>.push(<dato>)
arregloDeDigitosHexadecimales.push('F');
//console.log(arregloDeDigitosHexadecimales);

//Eliminar ultimo indice de un arreglo
//Sintaxis -> <arreglo>.pop()
arregloDeDigitosHexadecimales.push('E');
//console.log(arregloDeDigitosHexadecimales);
arregloDeDigitosHexadecimales.pop();
//console.log(arregloDeDigitosHexadecimales);

//Eliminar primer indice de un arreglo
//Sintaxis -> <arreglo>.shift()
arregloDeDigitosHexadecimales.unshift(-1);
//console.log(arregloDeDigitosHexadecimales);
arregloDeDigitosHexadecimales.shift();
//console.log(arregloDeDigitosHexadecimales);

//Extraer datos de un array
//Sintaxis -> <arreglo>[<posicion>]
//console.log(arregloDeDigitosHexadecimales[1]);

//new Array()
//Sintaxis -> new Array(<indice>, <indice>*)
var arregloDeDigitosBinarios = new Array(0 , 1);
//console.log(arregloDeDigitosBinarios);

//length -> conocer el tamaño de un array
//Sintaxis -> <arreglo>.length
//console.log(arregloDeDigitosHexadecimales.length, typeof arregloDeDigitosHexadecimales);

//ECMAScript5 -> Array.isArray(<variable>)
//console.log(Array.isArray(arregloDeDigitosHexadecimales), Array.isArray(arregloDeDigitosBinarios), Array.isArray(miPrimeraVariable));

//Instancias
//console.log(arregloDeDigitosHexadecimales instanceof Array, arregloDeDigitosBinarios instanceof Array);

//Arreglos en mas de una dimension
//Sinatxis -> var <arreglo> = [[],[]+];
//Arreglo en una dimension
var arregloUniDimensionalDeFrutas = ['Banano', 'Manzana'];
//Arreglo de dos dimensiones
var arregloTresDimensiones = [[1,2,3],[4,5,6],[7,8,9]];
//Extraer una posicion de un arrglo en mas dos dimensiones
//Sintaxis -> <arreglo>[][]+;
//Ejercicio suma diagonales
//console.log(arregloTresDimensiones[0][0]);
var sumaDiagonalDerechaAIzquierda = 0;
var sumaDiagonalIzquierdaADerecha = 0;
var tamanioMatrizCuadrada = arregloTresDimensiones.length;
for(var posicionMatrizCuadrada = 0; posicionMatrizCuadrada < tamanioMatrizCuadrada; posicionMatrizCuadrada++) {
    sumaDiagonalIzquierdaADerecha += arregloTresDimensiones[posicionMatrizCuadrada][posicionMatrizCuadrada];
    sumaDiagonalDerechaAIzquierda += arregloTresDimensiones[posicionMatrizCuadrada][tamanioMatrizCuadrada - (posicionMatrizCuadrada + 1)];
};

console.log(sumaDiagonalIzquierdaADerecha + sumaDiagonalDerechaAIzquierda);

//Funciones
//Dos tipos -> funciones en bloque y funciones en variable
//Funciones Bloque
/*Sintaxis -> function <nombreFuncion>(<parametro>*) {
    cuerpo de la funcion
}*/
/*function sumar(sumando1, sumando2) {
    return sumando1 + sumando2;
};

console.log(sumar(3, 4));*/

//Cuando llamo una funcion, es decir, cuando quiero que se ejecute
//a ese proceso se le llama invocar.
//console.log(sumar(3, 4));

//Funciones en variable
/*Sintaxis -> var <nombreFuncion> = function(<parametro>*) {
    cuerpo de la funcion 
}*/
/*var sumar = function(sumando1, sumando2) {
    return sumando1 + sumando2;
};

console.log(sumar(3, 4));*/

//Bucles e iteraciones
/*Sintaxis -> for(<expresion-inicial>; <condicion>; <expresion-final>) {
    cuerpo del bucle
}*/
//inicio++ -> inicio = inicio + 1;
//inicio+=5 -> inicio = inicio + 5;
/*for(var inicio = 0; inicio < 10; inicio+=1) {
    console.log(inicio);
}

console.log(inicio);*/

//Bucles dentro de Bucles
/*var arregloNotasMatematicasDePepito = [0, 5, 5, 4, 3, 2, 3, 5, 2, 2];

var sumatorio = 0;
for(var posicionArreglo = 0; posicionArreglo < arregloNotasMatematicasDePepito.length; posicionArreglo++) {
     sumatorio+=arregloNotasMatematicasDePepito[posicionArreglo];  
}
promedio = sumatorio / arregloNotasMatematicasDePepito.length;
console.log(promedio);

var notaMasAlta=-1;
for(var posicionArreglo = 0; posicionArreglo < arregloNotasMatematicasDePepito.length; posicionArreglo++) {
     if(arregloNotasMatematicasDePepito[posicionArreglo] > notaMasAlta) {
        notaMasAlta = arregloNotasMatematicasDePepito[posicionArreglo];
    }
}
console.log(notaMasAlta);

var notaMasBaja = 6;
for(var posicionArreglo = 0; posicionArreglo < arregloNotasMatematicasDePepito.length; posicionArreglo++) {
    if (arregloNotasMatematicasDePepito[posicionArreglo] < notaMasBaja){
        notaMasBaja = arregloNotasMatematicasDePepito[posicionArreglo];
       }
}
console.log(notaMasBaja);

var notaMasRepetida = -1;
var cantidadRepeticiones = 0;
for(var posicionBucleExterior = 0; posicionBucleExterior < arregloNotasMatematicasDePepito.length; posicionBucleExterior++) {
    var cantidadVecesRepetidasPorIteracion = 0;
    for(var posicionBucleInterior = posicionBucleExterior + 1; posicionBucleInterior < arregloNotasMatematicasDePepito.length; posicionBucleInterior++) {
        if(arregloNotasMatematicasDePepito[posicionBucleExterior] == arregloNotasMatematicasDePepito[posicionBucleInterior]) {
            cantidadVecesRepetidasPorIteracion++;
        }
    }
    
    if(cantidadVecesRepetidasPorIteracion > cantidadRepeticiones) {
        notaMasRepetida = arregloNotasMatematicasDePepito[posicionBucleExterior];
        cantidadRepeticiones = cantidadVecesRepetidasPorIteracion;
    }
}

console.log(notaMasRepetida, cantidadRepeticiones);*/