function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let promedio = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
    promedio += resultadosTest[i] / resultadosTest.length;
  }
  return Math.floor(promedio);
}
let resultadosTest = [97, 100, 80, 55, 72, 94];
console.log(promedioResultadosTest(resultadosTest));
module.exports = promedioResultadosTest;
