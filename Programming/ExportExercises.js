// Exportación de una función
export function suma(a, b) {
    return a + b;
  }
  
  // Exportación de una constante
  export const PI = 3.1416;
  
  // Exportación de una clase
  export class Calculadora {
    constructor() {
      this.resultado = 0;
    }
    
    sumar(a, b) {
      this.resultado = a + b;
      return this.resultado;
    }
  
    restar(a, b) {
      this.resultado = a - b;
      return this.resultado;
    }
  }
  
  // Exportación por defecto (puede ser una función, constante o clase)
  export default function porDefecto() {
    console.log("Esta es una exportación por defecto");
  }
  