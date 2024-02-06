function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  // Verificar si el número es positivo
  return numero > 0 && (numero & (numero - 1)) === 0;
}
console.log(esPotenciaDeDos(8));
console.log(esPotenciaDeDos(16));
console.log(esPotenciaDeDos(32));
console.log(esPotenciaDeDos(3));
console.log(esPotenciaDeDos(10));
console.log(esPotenciaDeDos(15));
console.log(esPotenciaDeDos(25));
module.exports = esPotenciaDeDos;
