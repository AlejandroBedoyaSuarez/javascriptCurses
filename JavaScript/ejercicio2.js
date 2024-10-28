/*EJERCICIO:
 * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
 *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
 *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
 * - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
 *   que representen todos los tipos de estructuras de control que existan
 *   en tu lenguaje:
 *   Condicionales, iterativas, excepciones...
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 * -----------------------------------------------------------------------------------------------------*/

//Operadores Aritméticos
//Suma
console.log("¿La suma entre 4+2 es?");
let valor1 = 4;
let valor2 = 2;
let suma = valor1 + valor2;
console.log(suma);

//Resta
console.log("La resta entre 4-2 es?");
let resta = valor1 - valor2;
console.log(resta);

//Multiplicación
console.log("La multiplicación entre 4 por 2 es?");
let multiplicacion = valor1 * valor2;
console.log(multiplicacion);

//División
console.log("La división entre 4 para 2 es?");
let division = valor1 / valor2;
console.log(division);

//Módulo
console.log("Cuál es el valor residual (módulo) de la división entre 4/2?");
let modulo = valor1 % valor2;
//se hace 0 ya que 4 para 2= 2 y el valor residual se hace 0
console.log(modulo);
//pero si no fuera divisible

let valor3 = 10;
let valor4 = 3;
console.log("Digame el módulo entre el valor 10 y el valor 3");
let modulo2 = valor3 % valor4;
//saldrá uno ya que no es divisible 10 para 3
console.log(modulo2);

//división decimal
//División
console.log("La división entre 10 para 3 es?");
let division2 = valor3 / valor4;
console.log(division2);

//Exponensial
//Con mathpow math.pow(base, exponente)
console.log("Exponentes");
let exponente = Math.pow(4, 2);
console.log(exponente);
//Con comando ** es:
let exponenteCodigo = 4 ** 2;
console.log(exponenteCodigo);

//División entera
//basicamente nos da solo el resultado entero de la división aunque sea decimal
//~~ (dividendo/divisor)
console.log("Divisiones Enteras");
let divisionEntera = ~~(10 / 3);
console.log(divisionEntera);

//Operadores de Comparación
//Igualdad
console.log("Operadores de Comparación: Igualdad");
console.log(5 == 5); //Verificación con Boolean
console.log(valor1 == valor3);

//Desigualdad
//10 es distinto de 3? true
console.log("Operadores de Comparación: Desigualdad");
console.log(10 != 3);
let valor5 = 4;
//valor 1= 4 es distinto a valor5=4 ? False
console.log(valor1 != valor5);

//Mayor, Menor, Mayor o igual, Menor o igual
console.log("Menor y Mayor");
console.log(10 < 4);
console.log(10 > 4);
console.log(10 <= 4);
console.log(10 >= 4);

//Operadores Lógicos
console.log("Operadores Lógicos");
let operador1 = 4;
let operador2 = 5;
let operador3 = 6;
let operador4 = 4;
//Aquí el && significa and (y)
//Sirve para hacer que si ambas condiciones se cumplen, el resultado será "verdadero" y si alguna de las dos no se cumple será "Falso"
console.log("Operador && que significa /y/ ");
console.log(operador1 < operador2 && operador4 < operador3);
console.log(operador1 <= operador4 && operador2 < operador3);
//sale false porque 4 no es mayor a 6, si una condición no se cumple automaticamente el resultado será falso
console.log(operador1 > operador3 && operador4 <= operador1);

//Operador con "o"
// Se hace con || y si una condición es verdadera entonces el resultado es verdadero, solo saldrá falso si ambas son falsas
console.log("Operador con /o/");
console.log(operador1 < operador2 || operador4 < operador3);
console.log(operador1 > operador3 || operador4 <= operador1);
console.log(operador1 > operador2 || operador1 > operador4);

//Operador NOT que se representa con "!"
console.log("Operador con NOT / !");
//Basicamente cambia el valor por su opuesto
let esVerdadero = true;
console.log(!esVerdadero);
console.log(!(5 < 3));

//Operadores de Asignación
// el = es un operador que da resultado
console.log("Operadores de Asignación");
let my_number = 13;
//+= sirve para ir sumando con el igual
my_number += 1; //variable= variable+numero;
//saldrá un número más porque empeiza desde el 0
console.log(my_number);
my_number -= 1;
console.log(my_number);
my_number *= 2;
console.log(my_number);
my_number /= 2;
console.log(my_number);
my_number %= 2;
console.log(my_number);

//Operadores de Identidad
console.log("Operadores de Identidad");
//Igualdad Estricta
/*
Este operador compara si dos valores son idénticos en valor 
y tipo de dato.

Devuelve "true" si ambos son iguales en valor y tipo.

Devuelve "false" si los tipos o los valores son diferentes.
*/
console.log(5 === 5);
console.log(5 === "5"); //sale falso porque uno es número y el otro string gracias a las ""
console.log(null === null);
console.log(true === 1); //es false porque uno es tipo boolean y el otro es tipo entero

console.log("¿Cuál es la diferencia entre == y ===?");
console.log(
  "== verifica solo el valor haciendo conversión implícita si es necesario."
);
console.log(
  "===  Verifica igualdad en valor y tipo, sin hacer conversión implícita."
);

//Operadores de Pertenencia
console.log("Operadores de Pertenencia");
//Operador con In
console.log("Con /in/");
//con objetos
console.log("Con Objetos:");
//let variable= {objeto};
let persona = { nombre: "Jonnath", edad: 19 };
//Me da true ya que "nombre" si pertenece a la variable persona
console.log("nombre" in persona);
//Me da false ya que "estudios" no pertenece a la variable persona
console.log("estudios" in persona);
//Con Arrays
console.log("Con Arrays:");
let numerosArrays = [0, 1, 2, 3, 4];
//0 está dentro de los números del Array
console.log(0 in numerosArrays);
//100 no está dentro de los números del Array
console.log(100 in numerosArrays);

//Estructuras de Control
console.log("Estructuras de Control");

//Condicionales
console.log("Estructuras de Control Condicionales");
let condicional1 = "JonnathDev";
if (condicional1 == "JonnathDev") {
  console.log("Mi condicional tiene como resultado: " + condicional1);
} else {
  console.log("No cumple la condición");
}
//La diferencia es que aquí no se cumple porque ese "1" no existe en la condicional de la variable
if (condicional1 == "JonnathDev1") {
  console.log("Mi condicional tiene como resultado: " + condicional1);
} else {
  console.log("No cumple la condición");
}

//Se pueden hacer más comprobaciones
console.log("If con más de una comprobación");

let nombrePersona = "Mauricio";
let apellidoPersona = "Loja";
if (nombrePersona == "Kevin") {
  console.log("Es el asesino");
} else if (apellidoPersona == "Loja") {
  console.log("Es sospecho del asesinato");
} else {
  console.log("No es sospechoso");
}

//Iterativas
console.log("Estructuras de Control Iterativas");
//Imprimir los números del 0 al 10
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

console.log("Con While");
//While es una condición que dice que se ejecutara mientras esa condición sea verdadera
let numeroWhile = 0;
while (numeroWhile < 10) {
  numeroWhile += 1;
  console.log(numeroWhile);
}

//Manejo de Excepciones
console.log("Manejo de Excepciones");
// try - catch
try {
  let datos = JSON.parse('{ "nombre": "Jonnath" }'); // Formato JSON válido
  console.log(datos.nombre); // "Jonnath"
} catch (error) {
  console.log("Error al parsear JSON");
} finally {
  console.log("Finalizó el intento de lectura del JSON.");
}

try {
  let megadatos = "Alejandro";
  console.log(megadatos);
} catch (error1) {
  console.log("Error al traducir el nombre");
} finally {
  console.log("Finalizado la traducción");
}

try{
  datosnumericos=10/0
}catch (error3){
 console.log("Se ha producido un error")
}finally{
  console.log("Proceso Finalizado")
}

try {
  let datosnumericos1 = 10 / 2;  // Declaración y operación correcta
  console.log("Resultado:", datosnumericos1);  // Muestra el resultado
} catch (error4) {
  //Funciona gracias al mensaje y variable.message
  console.log("Se ha producido un error: " + error4.message);  // Manejo de error
} finally {
  console.log("Proceso Finalizado");  // Siempre se ejecuta
}

//Ejercicio Extra

//que comience en 10, sea menor a 56 y que vaya creciendo de uno en uno
for (let i = 10; i<56; i++) {
  // si i es multiplo de 2 entonces es 0 AND NOT i=16
  if (i%2==0 && i!=16) {
    console.log(i)
  }
}