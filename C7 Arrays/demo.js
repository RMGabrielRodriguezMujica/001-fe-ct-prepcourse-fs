// var numero1 = 1111

// var array = [
//     26532583178,
//     127326387,
//     8288137138,
//     "hola",
//     "mundo",
//     true,
//     false,
//     [5,4,3,2,1]
// ];

// console.log(array)


// console.log(array.length)

// // function recibeArray(array) {
// //     for (let index = 0; index < array.length; index++) {
// //         const element = array[index];

// //     }   
// // }

// // recibeArray(array)





// var pintores =["picaso", "velazquez" , "dali", "van gogh"]
// var incluyeDali






///////------------------------------------------------------------

var numero1 = 111111111111111;

var array = [
    numero1,
    345354,
    234234,
    234234,
    "hola",
    "mundo",
    true,
    false,
    [5, 4, 3, 2, 1],
    ["palabra1", "palabra2", "palabra3", [1, 2, 3, 4, 5]],
];

// console.log(array.push("soy el ultimo valor"));
// var guardarElultimoValor = array.pop();
// console.log(guardarElultimoValor);

// console.log(array.unshift("ahora soy el primer valor"));
// console.log(array.shift());

// console.log(array);

// function recorrerArray(array) {
// for (var i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
//   // var i = 0;
//   // while (i < array.length) {
//   //   console.log(array[i]);
//   //   i++;
//   // }
// }

// recorrerArray(array);

// FOREACH

// var resultadoForEach = array.forEach((elemento, indice, tercerArgumento) => {
//   return "algo";
// });

// console.log(resultadoForEach);
//MAP
// var resultadoMap = array.map((elemento, indice) => {
//   if (Number.isInteger(elemento)) return elemento;
// });

// console.log(resultadoMap);
// console.log(array);

//FILTER
// var resultadoFilter = array.filter((item, indice) => {
//   if (Number.isInteger(item)) return item;
// });

// console.log(resultadoFilter);

//SPLIT Y JOIN
// var nuevoArray = [
//   "las",
//   "palabras",
//   "del",
//   "arreglo",
//   "pueden",
//   "ser",
//   "texto",
// ];

// var nuevoString = nuevoArray.join(" ");

// for (let i = 0; i < nuevoString.length; i++) {
//   console.log(nuevoString[i]);
// }

// console.log(nuevoString.split(" "));






console.log(array[Math.floor(Math.random()*array.length)])