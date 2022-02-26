//ECMAScript 2009
//ES5
//"use strict"
//Define que el códgio JS debe ejecutarse de modo estricto
//Modo Estricto -> código más limpio.
//numeroPI = 3.1416;
"use strict"
//Debo declarar la funcion antes de inicializarla
//numeroEuler = 2.718;
miPrimeraFuncion();

function miPrimeraFuncion() {
    var numeroPI = 3.1416;
}

var nombre = "Gustavo Garcia";
//No puedo utilizar delete
//delete nombre;

//No puedo crear dos parametros con el mismo nombre
//function miSegundaFuncion(parametro1, parametro1) {}

//No puedo crear variables con nombres reservados
//var arguments = "Hola Mundo!"

//No puedo crear variables dentro del eval()
eval("var numero = 2");
alert(numero);