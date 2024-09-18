// Importación de la función y la constante
import { suma, PI } from './ExportExercises.js';

// Importación de la clase
import { Calculadora } from './ExportExercises.js';

// Importación por defecto
import porDefecto from './ExportExercises.js';

// Uso de la función importada
console.log("Suma de 5 + 3 =", suma(5, 3));

// Uso de la constante importada
console.log("Valor de PI es:", PI);

// Uso de la clase importada
const calc = new Calculadora();
console.log("Resultado de sumar 10 + 20 =", calc.sumar(10, 20));
console.log("Resultado de restar 10 - 5 =", calc.restar(10, 5));

// Uso de la exportación por defecto
porDefecto();
