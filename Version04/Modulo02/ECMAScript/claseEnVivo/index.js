//ECMAScript 2009
//ES5
//"use strict"
//Define que el códgio JS debe ejecutarse de modo estricto
//Modo Estricto -> código más limpio.
//numeroPI = 3.1416;
//"use strict"
//Debo declarar la funcion antes de inicializarla
//numeroEuler = 2.718;
miPrimeraFuncion();

function miPrimeraFuncion() {
    var numeroPI = 3.1416;
}

var nombre = 'Gustavo Garcia';
//No puedo utilizar delete
//delete nombre;

//No puedo crear dos parametros con el mismo nombre
//function miSegundaFuncion(parametro1, parametro1) {}

//No puedo crear variables con nombres reservados
//var arguments = "Hola Mundo!"

//No puedo crear variables dentro del eval()
eval('var numero = 2');
//alert(numero);

//charAt()
//<string>.charAt(<posicion>);
//Devolver el carácter en un índice especicicado en una cadena de texto:
//console.log(nombre.charAt(5));
//console.log(nombre[5]);

//Cadenas sobre varias líneas
var mensaje = 'Hola \
mundo';
//console.log(mensaje);

//trim()
//<string>.trim();
//Eliminar espacios en blanco al principio y al final de una cadena de texto
var nuevoMensaje = "            Hola Mundo          ";
//console.log(nuevoMensaje);
//console.log(nuevoMensaje.trim());

//forEach()
//<nombreArreglo>.forEach(<metodo>)
//Método que llama una funcion una vez para cada elemento del arreglo
var texto = '';
var arregloNumeros = [2,4,6,8,0];
arregloNumeros.forEach(multiplicarPorDos);

function multiplicarPorDos(valor, posicion, arreglo){
    texto = texto + valor*2 + "\n";
    //console.log("valor: ", valor, "posicion: ", posicion, "arreglo:", arreglo);
}
//console.log(texto);

//map()
//<nombreArreglo>.map(<metodo>)
//Crea un nuevo arreglo a partir de otro arreglo
var numero = arregloNumeros.map(multiplicarPorTres);
//console.log(numero);

function multiplicarPorTres(valor, posicion, arreglo){
    //console.log("valor: ", valor, "posicion: ", posicion, "arreglo:", arreglo);
    return valor*3;
}

//filter()
//<nombreArreglo>.filter(<metodo>)
//Crea un nuevo arreglo a partir de una condicion
var numerosImpares = arregloNumeros.filter(numerosImparesMetodo);
//console.log(numerosImpares);

function numerosImparesMetodo(valor, posicion, arreglo) {
    //console.log("valor: ", valor, "posicion: ", posicion, "arreglo:", arreglo);
    return (valor % 2 === 1);
};

//reduce()
//Retorna un valor
var sumaArreglo = arregloNumeros.reduce(sumaNumerosMetodo);
//console.log(sumaArreglo);

function sumaNumerosMetodo(total, valor) {
    //console.log("total: ", total, "valor: ", valor, "posicion: ", posicion, "arreglo:", arreglo);
    return total + valor;
}

//every()
//Devuelve true si se cumpla para todo el arreglo una condicion
var numerosPares = arregloNumeros.every(numerosParesMetodo);
//console.log(numerosPares);

function numerosParesMetodo(valor, posicion, arreglo) {
    //console.log("valor: ", valor, "posicion: ", posicion, "arreglo:", arreglo);
    return (valor % 2 === 0);
}

//some()
//Devuelve un true si se cumpla para al menos un indice una condicion
var numerosMayoresA7 = arregloNumeros.some(numerosMayoresA7Metodo);
console.log(numerosMayoresA7);

function numerosMayoresA7Metodo(valor, posicion, arreglo) {
    //console.log("valor: ", valor, "posicion: ", posicion, "arreglo:", arreglo);
    return valor > 7;
}