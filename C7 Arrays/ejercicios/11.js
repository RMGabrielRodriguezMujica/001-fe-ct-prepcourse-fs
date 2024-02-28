function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:


  array.forEach((elemento, index) => {
    array[index] = (elemento*2)
  });

  return(array)
}

module.exports = duplicarElementos;
