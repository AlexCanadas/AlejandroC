                                            // 1. BEGINNER EXERCISES

// 1. Escribe un comentario en una línea
// Este es un comentario en una línea

// 2. Escribe un comentario en varias líneas
/*
Este es un comentario
en varias líneas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let numero = 10;            // Número entero
let texto = "Hola mundo";    // Cadena de texto
let booleano = true;         // Booleano
let indefinido;              // Variable indefinida
let nulo = null;             // Nulo

// 4. Imprime por consola el valor de todas las variables
console.log(numero);
console.log(texto);
console.log(booleano);
console.log(indefinido);
console.log(nulo);

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof numero);
console.log(typeof texto);
console.log(typeof booleano);
console.log(typeof indefinido);
console.log(typeof nulo);

// 6. Modifica los valores de las variables por otros del mismo tipo
numero = 20;
texto = "Nuevo texto";
booleano = false;
indefinido = "Ahora tiene valor";
nulo = "No es nulo";  // Aunque en teoría `null` es un tipo especial, lo modificamos

// Imprime los valores actualizados
console.log(numero);
console.log(texto);
console.log(booleano);
console.log(indefinido);
console.log(nulo);

// 7. Modifica los valores de las variables por otros de distinto tipo
numero = "Esto es ahora una cadena";
texto = 12345;
booleano = "Ahora es una cadena";
indefinido = 3.14;
nulo = true;  // Cambiamos `nulo` a un booleano

// Imprime los nuevos valores
console.log(numero);
console.log(texto);
console.log(booleano);
console.log(indefinido);
console.log(nulo);

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const PI = 3.1416;
const SALUDO = "Hola constante";
const ES_VERDAD = true;
const NO_DEFINIDO = undefined;
const VACIO = null;

// Imprime por consola los valores de las constantes
console.log(PI);
console.log(SALUDO);
console.log(ES_VERDAD);
console.log(NO_DEFINIDO);
console.log(VACIO);

// 9. Modifica los valores de las constantes (esto producirá un error, así que lo comentaremos)
// PI = 3.15;           // Error: no se puede reasignar una constante
// SALUDO = "Adiós";    // Error: no se puede reasignar una constante
// ES_VERDAD = false;   // Error: no se puede reasignar una constante

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
// Ya hemos comentado las líneas que producen error en el paso 9


                                        // 2. OPERATORS EXERCISES

// 1. Crea una variable para cada operación aritmética
let suma = 5 + 3;
let resta = 10 - 4;
let multiplicacion = 6 * 7;
let division = 20 / 4;
let modulo = 15 % 4;

console.log(suma, resta, multiplicacion, division, modulo);

// 2. Crea una variable para cada tipo de operación de asignación, que haga uso de las variables utilizadas para las operaciones aritméticas
let a = 5;
a += 3;  // Suma y asignación
console.log(a);

let b = 10;
b -= 4;  // Resta y asignación
console.log(b);

let c = 6;
c *= 7;  // Multiplicación y asignación
console.log(c);

let d = 20;
d /= 4;  // División y asignación
console.log(d);

let e = 15;
e %= 4;  // Módulo y asignación
console.log(e);

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(5 > 3);    // true
console.log(10 >= 10); // true
console.log(8 == "8"); // true (igualdad con conversión de tipo)
console.log(7 === 7);  // true (igualdad estricta)
console.log(15 != 20); // true

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(5 < 3);    // false
console.log(10 > 20);  // false
console.log(8 === "8"); // false (igualdad estricta)
console.log(7 != 7);   // false
console.log(15 <= 10); // false

// 5. Utiliza el operador lógico AND
let andResult = (5 > 3) && (10 <= 20);
console.log(andResult); // true, ambas condiciones son verdaderas

// 6. Utiliza el operador lógico OR
let orResult = (5 < 3) || (10 >= 5);
console.log(orResult); // true, una de las condiciones es verdadera

// 7. Combina ambos operadores lógicos
let combinedResult = (5 > 3) && (10 >= 20) || (15 > 10);
console.log(combinedResult); // true, ya que (5 > 3) es true y (15 > 10) es true

// 8. Añade alguna negación
let notResult = !(5 > 3);
console.log(notResult); // false, porque negamos un true

// 9. Utiliza el operador ternario
let edad = 18;
let esMayorDeEdad = (edad >= 18) ? "Es mayor de edad" : "Es menor de edad";
console.log(esMayorDeEdad); // "Es mayor de edad"

// 10. Combina operadores aritméticos, de comparación y lógicas
let complexResult = (5 + 3 > 7) && (10 % 2 === 0) || !(20 / 5 < 4);
console.log(complexResult); // true, tras combinar operadores aritméticos, lógicos y de comparación


                                    // 1. STRING EXERCISES

// 1. Concatena dos cadenas de texto
let texto1 = "Hola";
let texto2 = "Mundo";
let concatenado = texto1 + " " + texto2;
console.log(concatenado); // "Hola Mundo"

// 2. Muestra la longitud de una cadena de texto
let longitud = texto1.length;
console.log(longitud); // 4

// 3. Muestra el primer y último carácter de un string
let primerCaracter = texto1.charAt(0);
let ultimoCaracter = texto1.charAt(texto1.length - 1);
console.log(primerCaracter); // "H"
console.log(ultimoCaracter); // "a"

// 4. Convierte a mayúsculas y minúsculas un string
let mayusculas = texto1.toUpperCase();
let minusculas = texto2.toLowerCase();
console.log(mayusculas); // "HOLA"
console.log(minusculas); // "mundo"

// 5. Crea una cadena de texto en varias líneas
let multilinea = `Esta es la primera línea.
Esta es la segunda línea.
Esta es la tercera línea.`;
console.log(multilinea);

// 6. Interpola el valor de una variable en un string
let nombre = "Juan";
let saludo = `Hola, mi nombre es ${nombre}.`;
console.log(saludo); // "Hola, mi nombre es Juan."

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let frase = "Esta es una frase con espacios";
let sinEspacios = frase.replace(/ /g, "-");
console.log(sinEspacios); // "Esta-es-una-frase-con-espacios"

// 8. Comprueba si una cadena de texto contiene una palabra concreta
let contienePalabra = frase.includes("frase");
console.log(contienePalabra); // true

// 9. Comprueba si dos strings son iguales
let string1 = "Hola";
let string2 = "hola";
let sonIguales = string1 === string2;
console.log(sonIguales); // false (porque JavaScript es sensible a mayúsculas)

// 10. Comprueba si dos strings tienen la misma longitud
let mismaLongitud = string1.length === string2.length;
console.log(mismaLongitud); // true
