function devolverPrimerElemento(array) {
  // Retornar el primer elemento del arreglo recibido.
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    return array[i];
  }
}
let array = [97, 100, 80, 55, 72, 94];
console.log(devolverPrimerElemento(array));
module.exports = devolverPrimerElemento;
