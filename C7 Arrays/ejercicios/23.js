function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:


  var arrayR = []
  var aRetornar = num

  for (let index = 0; index < 10; index++) {
  aRetornar = aRetornar + 2


  if (aRetornar == 2) {
    return("Se interrumpió la ejecución")
    break
  }
  arrayR.push(aRetornar)
}

console.log(arrayR)
return(arrayR)

}

module.exports = breakStatement;
