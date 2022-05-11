console.log('estamos en el archivo de la calculadora');



var numUno, numDos, suma, resta, multiplicar, dividir;

let resultado = document.getElementById('resultado');

function calcular() {
    numUno = document.getElementById('numUno').value;
    numDos = document.getElementById('numDos').value;

    numUno = Number(numUno);
    numDos = Number(numDos);

    suma = numUno + numDos;


    console.log(`La suma de los dos valores es: ${suma}`);

    resultado.innerHTML = `La suma de los dos valores es: ${suma}`
}

function resta() {
    numUno = document.getElementById('numUno').value;
    numDos = document.getElementById('numDos').value;

    numUno = Number(numUno);
    numDos = Number(numDos);

    resta = numUno - numDos;


    console.log(`La resta de los dos valores es: ${resta}`);

    resultado.innerHTML = `La resta de los dos valores es: ${resta}`
}

function multiplicar() {
    numUno = document.getElementById('numUno').value;
    numDos = document.getElementById('numDos').value;

    numUno = Number(numUno);
    numDos = Number(numDos);

    multiplicar = numUno * numDos;


    console.log(`La multiplicación de los dos valores es: ${multiplicar}`);

    resultado.innerHTML = `La multiplicación de los dos valores es: ${multiplicar}`
}

function dividir() {
    numUno = document.getElementById('numUno').value;
    numDos = document.getElementById('numDos').value;

    numUno = Number(numUno);
    numDos = Number(numDos);

    dividir = numUno / numDos;


    console.log(`La división de los dos valores es: ${dividir}`);

    resultado.innerHTML = `La division de los dos valores es: ${dividir}`
}

//hacer el git init
