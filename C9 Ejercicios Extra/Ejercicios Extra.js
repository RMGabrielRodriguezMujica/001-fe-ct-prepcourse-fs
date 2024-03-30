/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

const filter = require("../C8 Objects + Callbacks/callbacks/ejercicios/07")

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:

  var nuevoArray = []

  let llaves = Object.keys(objeto)


  for (let i = 0; i < llaves.length; i++) {
    nuevoArray.push([llaves[i], objeto[llaves[i]]])
  }



  console.log(nuevoArray)
  return nuevoArray

}
deObjetoAarray({ D: 1, B: 2, C: 3 })

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:

  var objetoARetornar = {}


  console.log(string.split("").sort())
  console.log(string.split("").sort().join(""))

  var stringOrdenado = string.split("").sort()
  for (let a = 0; a < string.length; a++) {
    var letra = stringOrdenado[a]
    
    // Inicializa el contador para la letra actualtra
    if (objetoARetornar[letra] == undefined) {
      objetoARetornar[letra] = 0;
    } else {
      objetoARetornar[letra] = 0;
    }

    for (let i = 0; i < stringOrdenado.length; i++) {
        if (string[i] === letra) {
          objetoARetornar[letra] = objetoARetornar[letra] + 1
        }
    }
  }
  console.log(objetoARetornar)
  
return objetoARetornar


}
numberOfCharacters("adsjfdsfsfjsdjfhacabcsbajda")

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:

  var minúscula = ""
  console.log(minúscula)
  var mayúscula = ""
  console.log(mayúscula)

  for (let i = 0; i < string.length; i++) {
    if(string[i] == string[i].toLocaleLowerCase()){
     console.log(minúscula + string[i])
     minúscula = (minúscula + string[i])
    }else{
      console.log((mayúscula + string[i]))
      mayúscula = (mayúscula + string[i])

    }
  }

  console.log(minúscula)
  console.log(mayúscula)

  console.log(mayúscula + minúscula)
  return mayúscula + minúscula
}

capToFront("soyHENRY")

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:

  console.log(frase.split(" "))

  var arrayTemp = frase.split(" ")
  console.log(arrayTemp)


  var a = []
  for (let i = 0; i < arrayTemp.length; i++) {
    console.log(arrayTemp[i].split("").reverse().join(""))
    a.push(arrayTemp[i].split("").reverse().join(""))

 
  }

  console.log(a)

 

  console.log(arrayTemp)
  console.log(a.join(" "))
  return a.join(" ")
}
asAmirror("The Henry Challenge is close!")

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:

  console.log(numero.toString().split("").reverse().join(""))

  if (numero == numero.toString().split("").reverse().join("")) {
    console.log("Es capicua")
    return "Es capicua"
  }else {
    return "No es capicua"
  }
}

capicua(153852)

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:

console.log(string.split("").filter(letra =>  letra !== "a").filter(letra =>  letra !== "b").filter(letra =>  letra !== "c").join(""))

var stringSinABC = (string.split("").filter(letra =>  letra !== "a").filter(letra =>  letra !== "b").filter(letra =>  letra !== "c").join(""))

//convierto el string en un array separa cada letra
// filtro las a 
// filtro las b
// filtro las c
// con join vuelvo a convertir el array sobrante en un string
// y retorno 

return stringSinABC
}

deleteAbc("abocado")

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:

 // console.log(arrayOfStrings.sort(" "))

//  var nuevoArray = arrayOfStrings

//   for (let i = 0; i < nuevoArray.length - 1; i++) {
//     //console.log(list[i][sortBy])  
    
//     if(nuevoArray[i].length < nuevoArray[i+1].length){

//       var temp = nuevoArray[i+1]
//       nuevoArray[i+1] = nuevoArray[i]
//       nuevoArray[i] = temp
//     }
//   }
//     console.log(nuevoArray)
//   return nuevoArray


console.log(arrayOfStrings.sort((a, b) => a.length -  b.length))
return((arrayOfStrings.sort((a, b) => a.length -  b.length)))
}

sortArray(["You", "are", "beautiful", "looking"])

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:

 console.log(array1.sort())
 console.log(array2.sort())

 array1.sort()
 array2.sort()

 var arrayAretornar = array1.filter(ele =>  array2.includes(ele))

 for (let i = 0; i < array1.length; i++) {
  for (let x = 0; x < array2.length; x++) {
    if (array1[i] == array2[x]) {
      arrayAretornar.push[array1[x]]
    }
  }
 }
console.log(arrayAretornar)
return arrayAretornar
}

buscoInterseccion([4,2,3],[1,3,4])

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
