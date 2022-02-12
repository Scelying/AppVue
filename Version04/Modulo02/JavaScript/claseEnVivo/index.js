//Fundamentos ds JS
//Lenguaje de programación imperativo.
//Lenguaje de programación interpretado.
//Lenguaje de programación debilmente tipado.
//Lenguaje de programación de un único hilo.
//Lenguaje de programación multiplataforma.

//Como crear una variable en JS
//Sintaxis -> var [<variable>] = [<valor>];
var ejemplo = 10;

//Tipos de datos en JS
//Primitivos y no primitivos
//Tipos de datos primitivos o elementales son los datos orignales
//de un lenguaje de programación, aquellos que nos proporciona el
//lenguaje de programación
//Tipos primitivos:
//Undefined
//Null
//Boolean
//Number
//String
//Object
//Function
//BigInit
//symbol

//typeof
//saber cual es el tipo de una variable en JS
//Sintaxis -> typeof [<variable>] === [<tipoDato>]
if(typeof primeraVariable === 'undefined') {
    console.log("Es un undefined");
}
else {
    console.log("No es un undefined");
}

//Comprarciones == y ===
// == (Comparación Sencilla)
//Compara el valor
console.log(0 == false);

// === (Comparación Esctricta)
//Compara el valor y el tipo de dato
console.log(5 === "5");

//Undefined y Null significan ausencia de valor
//Undefined es ausencia de valor de forma implicita
//undefined
//Declaro la variable pero nunca la inicializo(ausencia de valor)
//Sintaxis -> var [<variable>]
var primeraVariable;

//Null
//Null es ausencia de valor de forma explicita
//Declaro la variable y le asigno el valor de nulo(ausencia de valor)
//Sintaxis -> var [<variable>] = null
var primeraVariable = null;


