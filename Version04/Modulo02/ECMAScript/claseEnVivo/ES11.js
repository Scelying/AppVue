//ES11
//Operador Opcional
//Sintaxis -> ?
const vehiculos = {
    automoviles: [
        {
            marca: 'Ford'
        },
        {
            marca: 'Audi'
        }
    ]
};

//console.log(vehiculos.automoviles[1].marca);
//console.log(vehiculos.automoviles[2].marca);
//console.log(vehiculos.automoviles[2]?.marca);

//Nullish Coalescing
//Sintaxis -> ||
const numero = 7;
const otroNumero = numero || 5;
console.log(otroNumero);

//Si es 0
const numeroDos = 0;
const otroNumeroDos = numeroDos || 5;
console.log(otroNumeroDos);

//??
const numeroTres = 0;
const otroNumeroTres = numeroTres ?? 5;
console.log(otroNumeroTres);

//??
const numeroCuatro = null;
const otroNumeroCuatro = numeroCuatro ?? 5;
console.log(otroNumeroCuatro);