function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  // Verificar si a y b son enteros positivos y a <= b
  // Verificar si a y b son números positivos
  if (typeof a !== "number" || typeof b !== "number" || a < 0 || b < 0) {
    return 0;
  }
  let producto = 1;
  if (a > b) {
    [a, b] = [b, a];
  }
  for (let i = a; i <= b; i++) {
    producto *= i;
  }
  return producto;
}
console.log(productoEntreNúmeros(2, 4));
module.exports = productoEntreNúmeros;
