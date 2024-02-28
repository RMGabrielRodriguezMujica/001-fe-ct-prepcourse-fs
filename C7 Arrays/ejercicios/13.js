function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:


  // array.forEach((elemento, index) => {
  //   if(elemento % 2 == 0){

  //   }else if (elemento % 2 != 0){
  //     array.splice(index)
  //   }
  // });

  // return(array)


  var arraySoloConPares = array.filter((elemento => elemento % 2 === 0))

  return(arraySoloConPares)
}

module.exports = filtrarNumerosPares;
