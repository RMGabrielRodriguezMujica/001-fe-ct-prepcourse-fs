function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  var mesSeleccionados = []

  array.forEach((element, i) => {
    if (element == "Enero"||  element == "Marzo"|| element ==  "Noviembre" ) {
      mesSeleccionados.push(array[i])
    }
  })

  if(mesSeleccionados.length == 3){
    return(mesSeleccionados)
  }else {
  return ("No se encontraron los meses pedidos")
  }

  


}

module.exports = mesesDelAño;
