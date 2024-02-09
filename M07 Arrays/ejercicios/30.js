function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  let elementosVistos = {};

  for (let i = 0; i < numeros.length; i++) {
    // Verificar si el elemento ya ha sido visto
    if (elementosVistos[numeros[i]]) {
      return numeros[i]; // Retorna el primer elemento repetido
    }

    // Marcar el elemento como visto
    elementosVistos[numeros[i]] = true;
  }
}
let numeros = [1, 2, 3, 4, 5, 6];
console.log(encontrarElementoRepetido(numeros));
module.exports = encontrarElementoRepetido;
