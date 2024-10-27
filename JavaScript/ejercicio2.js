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
let valor1= 4;
let valor2= 2;
let suma= valor1+valor2;
console.log(suma);

//Resta
console.log("La resta entre 4-2 es?");
let resta= valor1-valor2;
console.log(resta);

//Multiplicación
console.log("La multiplicación entre 4 por 2 es?");
let multiplicacion= valor1*valor2;
console.log(multiplicacion);

//División
console.log("La división entre 4 para 2 es?");
let division= valor1/valor2;
console.log (division);

//Módulo
console.log("Cuál es el valor residual (módulo) de la división entre 4/2?");
let modulo= valor1%valor2;
//se hace 0 ya que 4 para 2= 2 y el valor residual se hace 0
console.log(modulo);
//pero si no fuera divisible

let valor3= 10;
let valor4= 3;
console.log("Digame el módulo entre el valor 10 y el valor 3");
let modulo2=valor3%valor4;
//saldrá uno ya que no es divisible 10 para 3
console.log(modulo2);

//división decimal
//División
console.log("La división entre 10 para 3 es?");
let division2= valor3/valor4;
console.log (division2);

//Exponensial
//Con mathpow math.pow(base, exponente)
let exponente= Math.pow(4, 2);
console.log(exponente);
//Con comando ** es: 
let exponenteCodigo= 4**2;
console.log(exponenteCodigo);

//División entera
//basicamente nos da solo el resultado entero de la división aunque sea decimal
//~~ (dividendo/divisor)
let divisionEntera= ~~(10/3); 
console.log(divisionEntera)

//Operadores de Comparación
//Igualdad
console.log(5==5); //Verificación con Boolean
console.log(valor1==valor3);

//Desigualdad
//10 es distinto de 3? true
console.log(10!=3);
let valor5= 4;
console.log(valor1!=valor5)

