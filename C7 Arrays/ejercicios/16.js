function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:

  var porIndice = array.map((num, i) => { return num * i } );

  return(porIndice)

}

module.exports = multiplicarElementosPorIndice;
