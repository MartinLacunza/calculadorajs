//console.log('Operador Modulo: ');

//operador matematico del modulo %

//let numUno = Number(prompt('introduceun numero para saber si es par o impar: '));

let numUno = 100;
if(numUno % 2 == 0){
    console.log(numUno);
    console.log('El Número ingresado es PAR');
}else{
    console.log('El Número ingresado NO es PAR');
}
let resultado = numUno / 2;
console.log('El resultado de la division es: ', resultado)



//Operadores Logicos

// Funciones
function MiFuncion(){
console.log('Me llamaste para que haga algo');

};

MiFuncion();
let numDos = 100;
let numTres = 200;


function sumar(a, b){
return a + b
}

console.log('El resultado de la suma es:' ,sumar (numDos, numTres));



//Bucles
let frutas = [
    "Manzana",
    "Pera",
    "Frutilla",
    "Pera",
    "Mora",
    "Limón",
    "Kiwi"
];

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);
console.log(frutas[5]);
console.log(frutas[6]);

console.log('=======================================');

//for
for (let index = 0; index < frutas.length; index++) {
    console.log('Las frutas son: ', index, frutas[index]);
}

