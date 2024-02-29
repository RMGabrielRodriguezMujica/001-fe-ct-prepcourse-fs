function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
 
  var numeroG = array[0] 
  array.forEach((elemento, index) => {
    if(elemento >= numeroG){
      numeroG = elemento
    }
  });

  console.log(array.indexOf(numeroG))
  if (array.length == 0){
    return(0)
  }else{
    return(array.indexOf(numeroG))
  }
}

module.exports = encontrarIndiceMayor;
