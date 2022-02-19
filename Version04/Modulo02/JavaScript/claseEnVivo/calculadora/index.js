var sumando1 = Number(document.getElementById('sumando1').innerText);
var sumando2 = Number(document.getElementById('sumando2').innerText);

cambioSumando1 = (valor) => {
    sumando1 = Number(valor);
}

cambioSumando2 = (valor) => {
    sumando2 = Number(valor);
}

sumar = () => {
    var suma = sumando1 + sumando2;
    var contenedor = document.createElement('p');
    var contenido = document.createTextNode(suma);
    contenedor.appendChild(contenido);
    var boton = document.getElementsByTagName('body');
    var posicionEnElDocumento = boton[0];
    posicionEnElDocumento.appendChild(contenedor);
}