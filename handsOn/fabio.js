// Objetos js
// const object = {
//   "key-teste": "value",
//   keyString: "valueString",
//   keyInt: 1
// }

// // Matrizes/array
// const array = ["Abel", "Fábio", "Magno", "Maze", 1, 2]

// const arrayOfObjects = [{name: "Fabio"}, {name: "Magno"}, {name: "Abel"}, {name: "Mazé"}]
// const arraySimpleFiltered = value => value == "Magno"
// const arrayOfObjectFiltered = obj => obj.name == "Magno"

// const newDataFiltered = array.filter(arraySimpleFiltered)
// const newDataObjFiltered = arrayOfObjects.filter(arrayOfObjectFiltered)

// console.log(newDataFiltered)
// console.log(newDataObjFiltered)

// for (), .forEach(), .map(), .filter(), .reduce()

// for(let i = 0; i < array.length; i++){
//     if (array[i] == "Magno"){
//         console.log('oi eu sou o', array[i])
//         break;
//     } else {
//         console.log("eu " + array[i] + "não sou o Magno")
//     }
// }

// const arrayOfObjects = [
//   { name: "Fabio" },
//   { name: "Magno" },
//   { name: "Abel" },
//   { name: "Mazé" }
// ];

// let names = [];
// const iterations = object => {
//   names.push(object.name);
// };

// arrayOfObjects.forEach(iterations);

// console.log(arrayOfObjects);
// console.log(names);


// const arrayOfObjects = [
//   { name: "Fabio" },
//   { name: "Magno" },
//   { name: "Abel" },
//   { name: "Mazé" },
//   { name: 1}
// ];

// const filtered = arrayOfObjects.filter( (object, index, arrayOriginal) => index === 4)

// console.log(filtered)

// const arrayOfObjects = [
//   { name: "Fabio" },
//   { name: "Magno"},
//   { name: "Abel" },
//   { name: "Mazé" },
//   { name: 1}
// ]

// const arrayOfObjectsMap = (object, index, arrayOfObjects) => {
//   if (object.name === 'Magno') {
//     object.lastName = 'Ozzyr'
//   }
//   return object
// }

// const newArrayOfObjects = arrayOfObjects.map(arrayOfObjectsMap)

// console.log(newArrayOfObjects)

const arrayOfObjects = [
  { name: "Fabio" },
  { name: "Magno"},
  { name: 1},
  { name: "Abel" },
  { name: "Mazé" }
]
 
const arrayOfObjectsReduce = (accumulator, object, index, arrayOriginal) => {
  accumulator[object.name] = 10 + index
  return accumulator
}

const newArrayOfObjectsReducered = arrayOfObjects.reduce(arrayOfObjectsReduce, {})

console.log(newArrayOfObjectsReducered)
