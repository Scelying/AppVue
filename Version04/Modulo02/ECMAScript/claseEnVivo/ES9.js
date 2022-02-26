//Iteración Asincrona
//Poder usar await en for/of
//Sintaxis for await() {}
const promesaUno = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Exito Primera Promesa");
    }, 2000)
});

const promesaDos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Exito Segunda Promesa");
    }, 2000)
});

const promesaTres = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Exito Tercer Promesa");
    }, 2000)
});

const arregloPromesas = [promesaUno, promesaDos, promesaTres];

/*(async function() {
    for await (let elemento of arregloPromesas) {
        console.log(`elemento: ${elemento}`);
    }
})();*/

//Promise.finally()
const promesaCuatro = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Exito Cuarta Promesa");
    }, 1000)
    /*setTimeout(() => {
        reject("Error Cuarta Promesa");
    }, 2000)*/
});

promesaCuatro
.then((response) => console.log(response))
.catch((error) => console.error(error))
.finally(() => console.log('Se ejecuta esta linea'));