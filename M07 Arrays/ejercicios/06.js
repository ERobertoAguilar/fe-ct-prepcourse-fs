function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  // Utilizar el método map para duplicar cada elemento del array
  return array.map(function (elemento) {
    return elemento * 2;
  });
}
let array = [1, 2, 3];
console.log(duplicarElementos(array));

module.exports = duplicarElementos;
