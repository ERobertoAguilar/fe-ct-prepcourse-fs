function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:

  // Verificar si el array está vacío
  if (array.length === 0) {
    return true;
  }
  // Comparar cada elemento con el primero
  let primerElemento = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== primerElemento) {
      return false;
    }
  }
  // Si se recorrió todo el array y todos los elementos son iguales
  return true;
}
let array = [230, 230, 230, 230];
//console.log(todosIguales(230, 230, 230, 230));
console.log(todosIguales(array));

module.exports = todosIguales;
