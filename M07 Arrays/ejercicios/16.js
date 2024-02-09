function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  // Crear un nuevo arreglo para almacenar los meses encontrados
  let mesesEncontrados = [];
  // Iterar sobre el array para buscar los meses especificados
  for (let i = 0; i < array.length; i++) {
    let mes = array[i];
    if (mes === "Enero" || mes === "Marzo" || mes === "Noviembre") {
      mesesEncontrados.push(mes);
    }
  }
  // Verificar si se encontraron todos los meses solicitados
  if (mesesEncontrados.length === 3) {
    return mesesEncontrados;
  } else {
    return "No se encontraron los meses pedidos";
  }
}
let array = [
  "Marzo",
  "Diciembre",
  "Abril",
  "Junio",
  "Julio",
  "Noviembre",
  "Enero",
  "Mayo",
  "Febrero",
];
console.log(mesesDelAño(array));
module.exports = mesesDelAño;
