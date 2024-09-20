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



                                        // 2. STRING EXERCISES

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



                                        // 3. CONDITIONALS EXERCISES

// 1. Imprime por consola tu nombre si una variable toma su valor
let name = "Juan";
if (name === "Juan") {
    console.log("Mi nombre es Juan");
}

// 2. Imprime por consola un mensaje si el usuario y contraseña conciden con unos establecidos
let usuario = "admin";
let contrasena = "1234";
if (usuario === "admin" && contrasena === "1234") {
    console.log("Usuario y contraseña correctos.");
} else {
    console.log("Usuario o contraseña incorrectos.");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let number = -5;
if (number > 0) {
    console.log("El número es positivo.");
} else if (number < 0) {
    console.log("El número es negativo.");
} else {
    console.log("El número es cero.");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let age = 16;
if (age >= 18) {
    console.log("Puedes votar.");
} else {
    let anosRestantes = 18 - age;
    console.log(`Te faltan ${anosRestantes} años para votar.`);
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad
let clasificacion = edad >= 18 ? "adulto" : "menor";
console.log(clasificacion); // "menor"

// 6. Muestra en qué estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 4; // Abril
if (mes === 12 || mes === 1 || mes === 2) {
    console.log("Estamos en invierno.");
} else if (mes >= 3 && mes <= 5) {
    console.log("Estamos en primavera.");
} else if (mes >= 6 && mes <= 8) {
    console.log("Estamos en verano.");
} else if (mes >= 9 && mes <= 11) {
    console.log("Estamos en otoño.");
} else {
    console.log("Mes no válido.");
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if (mes === 2) {
    console.log("Febrero tiene 28 o 29 días.");
} else if ([4, 6, 9, 11].includes(mes)) {
    console.log("Este mes tiene 30 días.");
} else {
    console.log("Este mes tiene 31 días.");
}

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "es";
switch (idioma) {
    case "es":
        console.log("¡Hola!");
        break;
    case "en":
        console.log("Hello!");
        break;
    case "fr":
        console.log("Bonjour!");
        break;
    case "de":
        console.log("Hallo!");
        break;
    default:
        console.log("Idioma no reconocido.");
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6 (estaciones del año)
mes = 7;
switch (mes) {
    case 12:
    case 1:
    case 2:
        console.log("Estamos en invierno.");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Estamos en primavera.");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Estamos en verano.");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Estamos en otoño.");
        break;
    default:
        console.log("Mes no válido.");
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7 (número de días del mes)
let month = 2; // Cambia el valor del mes para probar diferentes casos

switch (month) {
    case 2:
        console.log("Febrero tiene 28 o 29 días.");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Este mes tiene 30 días.");
        break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Este mes tiene 31 días.");
        break;
    default:
        console.log("Mes no válido.");
}



                                            // 4. STRUCTURES EXERCISES

// 1. Crea un array que almacene cinco animales
let animales = ["Perro", "Gato", "Elefante", "Tigre", "León"];
console.log(animales);

// 2. Añade dos más. Uno al principio y otro al final
animales.unshift("Caballo"); // Añadir al principio
animales.push("Jirafa");     // Añadir al final
console.log(animales);

// 3. Elimina el que se encuentra en tercera posición
animales.splice(2, 1); // Elimina el tercer elemento (índice 2)
console.log(animales);

// 4. Crea un set que almacene cinco libros
let libros = new Set(["1984", "Cien Años de Soledad", "El Quijote", "Fahrenheit 451", "Matar a un Ruiseñor"]);
console.log(libros);

// 5. Añade dos más. Uno de ellos repetido
libros.add("La Odisea");
libros.add("1984"); // Este no se añadirá porque los sets no permiten duplicados
console.log(libros);

// 6. Elimina uno concreto a tu elección
libros.delete("Fahrenheit 451");
console.log(libros);

// 7. Crea un mapa que asocie el número del mes a su nombre
let meses = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
]);
console.log(meses);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (meses.has(5)) {
    console.log("El mes 5 es:", meses.get(5)); // Imprime "Mayo"
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
meses.set("verano", ["Junio", "Julio", "Agosto"]);
console.log(meses);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let numArray = [1, 2, 3, 4, 5, 5, 6];
let numerosSet = new Set(numArray); 
let numerosMap = new Map();
numerosMap.set("numeros", numerosSet);

console.log(numerosMap);



                                                // 5. LOOPS EXERCISES

// 1. Crea un bucle que imprima los números del 1 al 20 (usando while)
console.log("Ejercicio 1: Números del 1 al 20 con while");
let i = 1;
while (i <= 20) {
    console.log(i);
    i++;
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado (usando do...while)
console.log("Ejercicio 2: Suma de los números del 1 al 100 con do...while");
let sum = 0;
let j = 1;
do {
    sum += j;
    j++;
} while (j <= 100);
console.log("Suma total:", sum);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50 (usando for)
console.log("Ejercicio 3: Números pares entre 1 y 50 con for");
for (let k = 2; k <= 50; k += 2) {
    console.log(k);
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola (usando for...of)
console.log("Ejercicio 4: Imprimir nombres de un array con for...of");
let nombres = ["Ana", "Carlos", "Lucía", "Miguel"];
for (let nombre of nombres) {
    console.log(nombre);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto (usando while)
console.log("Ejercicio 5: Contar vocales en una cadena de texto con while");
let cadena = "Hola Mundo";
let vocales = 0;
let vocalesArray = ['a', 'e', 'i', 'o', 'u'];
let m = 0;

while (m < cadena.length) {
    if (vocalesArray.includes(cadena[m].toLowerCase())) {
        vocales++;
    }
    m++;
}
console.log("Número de vocales:", vocales);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto (usando do...while)
console.log("Ejercicio 6: Producto de todos los números de un array con do...while");
let numeros = [2, 3, 4, 5];
let producto = 1;
let n = 0;

do {
    producto *= numeros[n];
    n++;
} while (n < numeros.length);

console.log("Producto total:", producto);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5 (usando while)
console.log("Ejercicio 7: Tabla de multiplicar del 5 con while");
let p = 1;
while (p <= 10) {
    console.log(`5 x ${p} = ${5 * p}`);
    p++;
}

// 8. Usa un bucle para invertir una cadena de texto (usando do...while)
console.log("Ejercicio 8: Invertir una cadena de texto con do...while");
let text = "JavaScript";
let invertido = "";
let o = text.length - 1;

do {
    invertido += text[o];
    o--;
} while (o >= 0);

console.log("Texto invertido:", invertido);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci (usando while)
console.log("Ejercicio 9: Primeros 10 números de la secuencia de Fibonacci con while");
let fib = [0, 1];
let q = 2;

while (q < 10) {
    fib.push(fib[q - 1] + fib[q - 2]);
    q++;
}
console.log("Secuencia de Fibonacci:", fib);

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10 (usando for)
console.log("Ejercicio 10: Números mayores a 10 de un array con for");
let numerosArray = [5, 12, 8, 20, 3, 15];
let mayoresADiez = [];

for (let numero of numerosArray) {
    if (numero > 10) {
        mayoresADiez.push(numero);
    }
}
console.log("Números mayores a 10:", mayoresADiez);



                                            // 6. FUNCTIONS EXERCISES

// 1. Crea una función que reciba dos números y devuelva su suma
function sumar(a, b) {
    return a + b;
}
console.log("1. Suma de 5 y 3:", sumar(5, 3));

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
const encontrarMayor = function(arr) {
    return Math.max(...arr);
};
console.log("2. Mayor número del array [1, 5, 3, 9]:", encontrarMayor([1, 5, 3, 9]));

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
const contarVocales = (str) => {
    const vocales = 'aeiouAEIOU';
    return [...str].filter(char => vocales.includes(char)).length;
};
console.log("3. Número de vocales en 'javascript':", contarVocales('javascript'));

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function convertirMayusculas(arr) {
    return arr.map(str => str.toUpperCase());
}
console.log("4. Array en mayúsculas:", convertirMayusculas(["hola", "mundo", "javascript"]));

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
const esPrimo = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};
console.log("5. El número 7 es primo:", esPrimo(7));

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
const elementosComunes = function(arr1, arr2) {
    return arr1.filter(el => arr2.includes(el));
};
console.log("6. Elementos comunes entre [1, 2, 3] y [2, 3, 4]:", elementosComunes([1, 2, 3], [2, 3, 4]));

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
const sumaPares = (arr) => {
    return arr.filter(num => num % 2 === 0).reduce((acc, num) => acc + num, 0);
};
console.log("7. Suma de números pares en [1, 2, 3, 4, 5, 6]:", sumaPares([1, 2, 3, 4, 5, 6]));

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
const elevarCuadrado = function(arr) {
    return arr.map(num => num ** 2);
};
console.log("8. Números elevados al cuadrado:", elevarCuadrado([2, 3, 4]));

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
const invertirPalabras = (str) => {
    return str.split(' ').reverse().join(' ');
};
console.log("9. Palabras en orden inverso:", invertirPalabras("Hola desde JavaScript"));

// 10. Crea una función que calcule el factorial de un número dado
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log("10. Factorial de 5:", factorial(5));



                                            // 7. OBJECTS EXERCISES

// 1. Crea un objeto con 3 propiedades
let persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Desarrollador"
};
console.log("1. Objeto persona:", persona);

// 2. Accede y muestra su valor
console.log("2. Accede a la propiedad 'nombre':", persona.nombre);

// 3. Agrega una nueva propiedad
persona.nacionalidad = "Española";
console.log("3. Objeto con nueva propiedad 'nacionalidad':", persona);

// 4. Elimina una de las 3 primeras propiedades
delete persona.profesion;
console.log("4. Objeto después de eliminar la propiedad 'profesion':", persona);

// 5. Agrega una función e invócala
persona.saludar = function() {
    return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
};
console.log("5. Invocando la función 'saludar':", persona.saludar());

// 6. Itera las propiedades del objeto
console.log("6. Iterando propiedades del objeto:");
for (let propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad]}`);
}

// 7. Crea un objeto anidado
let coche = {
    marca: "Toyota",
    modelo: "Corolla",
    propietario: {
        nombre: "Ana",
        edad: 28
    }
};
console.log("7. Objeto anidado 'coche':", coche);

// 8. Accede y muestra el valor de las propiedades anidadas
console.log("8. Accede a la propiedad anidada 'propietario.nombre':", coche.propietario.nombre);

// 9. Comprueba si los dos objetos creados son iguales
let otroCoche = {
    marca: "Toyota",
    modelo: "Corolla",
    propietario: {
        nombre: "Ana",
        edad: 28
    }
};
console.log("9. Los objetos 'coche' y 'otroCoche' son iguales:", JSON.stringify(coche) === JSON.stringify(otroCoche));

// 10. Comprueba si dos propiedades diferentes son iguales
console.log("10. ¿La marca del coche y el nombre de la persona son iguales?:", coche.marca === persona.nombre);


                                // 8. DESTRUCTURING-SPREADING EXERCISES
                        
// 1. Usa desestructuración para extraer los dos primeros elementos de un array
let numeross = [10, 20, 30, 40, 50];
let [primero, segundo] = numeross;
console.log("1. Primer y segundo número:", primero, segundo);

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [a1, b1, c1 = 100] = [1, 2];
console.log("2. Valor predeterminado para 'c':", c1);

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let persona = { nombre1: "Juan", edad1: 30, profesion: "Desarrollador" };
let { nombre1, edad1 } = persona;
console.log("3. Nombre y edad de la persona:", nombre1, edad1);

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas a nuevas variables con nombres diferentes
let { nombre: nombrePersona, profesion: trabajo } = persona;
console.log("4. Nombre renombrado y profesión:", nombrePersona, trabajo);

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let coche1 = {
    marca: "Toyota",
    modelo: "Corolla",
    propietario: {
        nombre: "Ana",
        edad: 28
    }
};
let { propietario: { nombre: nombrePropietario, edad: edadPropietario } } = coche1;
console.log("5. Nombre y edad del propietario del coche:", nombrePropietario, edadPropietario);

// 6. Usa propagación para combinar dos arrays en uno nuevo
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinado = [...array1, ...array2];
console.log("6. Arrays combinados:", combinado);

// 7. Usa propagación para crear una copia de un array
let copiaArray = [...array1];
console.log("7. Copia del array:", copiaArray);

// 8. Usa propagación para combinar dos objetos en uno nuevo
let objeto1 = { a: 1, b: 2 };
let objeto2 = { c: 3, d: 4 };
let combinadoObjetos = { ...objeto1, ...objeto2 };
console.log("8. Objetos combinados:", combinadoObjetos);

// 9. Usa propagación para crear una copia de un objeto
let copiaObjeto = { ...objeto1 };
console.log("9. Copia del objeto:", copiaObjeto);

// 10. Combina desestructuración y propagación
let [primeroNum, ...restoNumeros] = [10, 20, 30, 40];
let { a: valorA, ...restoObjeto } = { a: 1, b: 2, c: 3 };
console.log("10. Desestructuración con propagación en array:", primeroNum, restoNumeros);
console.log("10. Desestructuración con propagación en objeto:", valorA, restoObjeto);


                                            // 9. CLASSES EXERCISES

// 1. Crea una clase que reciba dos propiedades
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

// 2. Añade un método a la clase que utilice las propiedades
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

// 3. Muestra los valores de las propiedades e invoca a la función
let persona1 = new Persona("Juan", 30);
console.log("3. Nombre:", persona1.nombre);
console.log("3. Edad:", persona1.edad);
persona1.saludar(); // Invocar el método

// 4. Añade un método estático a la primera clase
class PersonaConMetodoEstatico {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }

    // Método estático
    static info() {
        console.log("4. Soy una clase que representa a una Persona.");
    }
}

// 5. Haz uso del método estático
PersonaConMetodoEstatico.info(); // Uso del método estático

// 6. Crea una clase que haga uso de herencia
class Estudiante extends Persona {
    constructor(nombre, edad, carrera) {
        super(nombre, edad); // Llamada al constructor de la clase padre
        this.carrera = carrera;
    }

    estudiar() {
        console.log(`${this.nombre} está estudiando ${this.carrera}.`);
    }
}

let estudiante1 = new Estudiante("Ana", 22, "Ingeniería");
console.log("6. Nombre:", estudiante1.nombre);
console.log("6. Carrera:", estudiante1.carrera);
estudiante1.saludar(); // Heredado de Persona
estudiante1.estudiar(); // Método propio de Estudiante

// 7. Crea una clase que haga uso de getters y setters
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    // Getter
    get precioProducto() {
        return this.precio;
    }

    // Setter
    set precioProducto(nuevoPrecio) {
        if (nuevoPrecio > 0) {
            this.precio = nuevoPrecio;
        } else {
            console.log("El precio debe ser positivo.");
        }
    }
}

// 8. Modifica la clase con getters y setters para que use propiedades privadas
class ProductoConPrivado {
    #precio; // Propiedad privada

    constructor(nombre, precio) {
        this.nombre = nombre;
        this.#precio = precio;
    }

    // Getter
    get precioProducto() {
        return this.#precio;
    }

    // Setter
    set precioProducto(nuevoPrecio) {
        if (nuevoPrecio > 0) {
            this.#precio = nuevoPrecio;
        } else {
            console.log("El precio debe ser positivo.");
        }
    }
}

// 9. Utiliza los get y set y muestra sus valores
let producto1 = new ProductoConPrivado("Laptop", 1000);
console.log("9. Precio inicial:", producto1.precioProducto); // Llamar al getter
producto1.precioProducto = 1200; // Llamar al setter
console.log("9. Precio actualizado:", producto1.precioProducto);

// 10. Sobrescribe un método de una clase que utilice herencia
class Empleado extends Persona {
    constructor(nombre, edad, puesto) {
        super(nombre, edad);
        this.puesto = puesto;
    }

    // Sobrescribir el método saludar
    saludar() {
        console.log(`Hola, soy ${this.nombre}, trabajo como ${this.puesto}.`);
    }
}

let empleado1 = new Empleado("Carlos", 35, "Desarrollador");
empleado1.saludar(); // Método sobrescrito


                                        // 10. ERRORS HANDLING EXERCISES

// 1. Captura una excepción utilizando try-catch
console.log("// 1. Captura una excepción utilizando try-catch");
try {
    let x = y; // 'y' no está definida
} catch (error) {
    console.log("Error capturado:", error.message);
}

// 2. Captura una excepción utilizando try-catch y finally
console.log("\n// 2. Captura una excepción utilizando try-catch y finally");
try {
    let z = a; // 'a' no está definida
} catch (error) {
    console.log("Error capturado:", error.message);
} finally {
    console.log("Esto siempre se ejecuta");
}

// 3. Lanza una excepción genérica
console.log("\n// 3. Lanza una excepción genérica");
try {
    throw new Error("Excepción genérica lanzada");
} catch (error) {
    console.log("Error capturado:", error.message);
}

// 4. Crea una excepción personalizada
console.log("\n// 4. Crea una excepción personalizada");
class CustomException extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomException";
    }
}

// 5. Lanza una excepción personalizada
console.log("\n// 5. Lanza una excepción personalizada");
try {
    throw new CustomException("Esta es una excepción personalizada");
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}

// 6. Lanza varias excepciones según una lógica definida
console.log("\n// 6. Lanza varias excepciones según una lógica definida");
function checkNumber(num) {
    if (num < 0) {
        throw new Error("Número negativo");
    } else if (num === 0) {
        throw new Error("Número cero");
    } else if (num > 100) {
        throw new Error("Número mayor que 100");
    }
}

try {
    checkNumber(101); // Cambiar para probar diferentes casos
} catch (error) {
    console.log("Error capturado:", error.message);
}

// 7. Captura varias excepciones en un mismo try-catch
console.log("\n// 7. Captura varias excepciones en un mismo try-catch");
try {
    checkNumber(-1); // Cambiar para probar diferentes excepciones
    let u = v; // 'v' no está definida
} catch (error) {
    console.log("Error capturado:", error.message);
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
console.log("\n// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores");
let valores = ["10.5", "abc", "25.4", "xyz", "30"];
for (let valor of valores) {
    try {
        let num = parseFloat(valor);
        if (isNaN(num)) throw new Error(`No se puede convertir '${valor}' a número`);
        console.log(`Convertido: ${valor} -> ${num}`);
    } catch (error) {
        console.log("Error capturado:", error.message);
    }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
console.log("\n// 9. Verifica si un objeto tiene una propiedad específica y lanza una excepción personalizada");
function verificarPropiedad(obj, prop) {
    if (!obj.hasOwnProperty(prop)) {
        throw new CustomException(`El objeto no tiene la propiedad '${prop}'`);
    }
}

try {
    let obj = { nombre: "Juan" };
    verificarPropiedad(obj, "edad"); // Prueba lanzando la excepción
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
console.log("\n// 10. Función que realiza reintentos en caso de error");
function ejecutarConReintentos(func, maxReintentos) {
    let intentos = 0;
    while (intentos < maxReintentos) {
        try {
            func(); // Intentamos ejecutar la función
            console.log("Ejecución exitosa");
            return; // Salimos si es exitosa
        } catch (error) {
            intentos++;
            console.log(`Error en intento ${intentos}: ${error.message}`);
        }
    }
    console.log("Superado el máximo de reintentos");
}

// Simulación de una función que falla algunas veces
function funcionQueFalla() {
    if (Math.random() < 0.7) {
        throw new Error("Fallo aleatorio");
    }
}

ejecutarConReintentos(funcionQueFalla, 10); // Realizar hasta 10 reintentos


                                        // 11. CONSOLE METHODS EXERCISES

// 1. Crea un función que utilice error correctamente
console.log("// 1. Crea una función que utilice error correctamente");
function mostrarError(mensaje) {
    console.error("Error:", mensaje);
}
mostrarError("Este es un error personalizado");

// 2. Crea una función que utilice warn correctamente
console.log("\n// 2. Crea una función que utilice warn correctamente");
function mostrarAdvertencia(mensaje) {
    console.warn("Advertencia:", mensaje);
}
mostrarAdvertencia("Este es un mensaje de advertencia");

// 3. Crea una función que utilice info correctamente
console.log("\n// 3. Crea una función que utilice info correctamente");
function mostrarInfo(mensaje) {
    console.info("Información:", mensaje);
}
mostrarInfo("Este es un mensaje informativo");

// 4. Utiliza table
console.log("\n// 4. Utiliza table");
const animaless = [
    { nombre: "Perro", tipo: "Mamífero", patas: 4 },
    { nombre: "Gato", tipo: "Mamífero", patas: 4 },
    { nombre: "Pato", tipo: "Ave", patas: 2 }
];
console.table(animaless);

// 5. Utiliza group
console.log("\n// 5. Utiliza group");
console.group("Grupo de Mensajes");
console.log("Mensaje 1 dentro del grupo");
console.log("Mensaje 2 dentro del grupo");
console.groupEnd();
console.log("Mensaje fuera del grupo");

// 6. Utiliza time
console.log("\n// 6. Utiliza time");
console.time("Tiempo de ejecución");
for (let i = 0; i < 1000000; i++) {} // Un bucle que no hace nada, solo consume tiempo
console.timeEnd("Tiempo de ejecución");

// 7. Valida con assert si un número es positivo
console.log("\n// 7. Valida con assert si un número es positivo");
function esPositivo(num) {
    console.assert(num > 0, "El número no es positivo:", num);
}
esPositivo(5);
esPositivo(-3);

// 8. Utiliza count
console.log("\n// 8. Utiliza count");
function contarLlamadas() {
    console.count("Función llamada");
}
contarLlamadas();
contarLlamadas();
contarLlamadas();

// 9. Utiliza trace
console.log("\n// 9. Utiliza trace");
function funcionA() {
    funcionB();
}
function funcionB() {
    funcionC();
}
function funcionC() {
    console.trace("Rastro de la función");
}
funcionA();

// 10. Utiliza clear
console.log("\n// 10. Utiliza clear");
// Este comando borrará la consola. Puedes descomentarlo para probarlo
// console.clear();
