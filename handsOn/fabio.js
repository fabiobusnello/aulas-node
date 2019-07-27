// Objetos js
const object = {
  "key-teste": "value",
  keyString: "valueString",
  keyInt: 1
}

// Matrizes/array
const array = ["Abel", "Fábio", "Magno", "Maze", 1, 2]

const arrayOfObjects = [{name: "Fabio"}, {name: "Magno"}, {name: "Abel"}, {name: "Mazé"}]
const arraySimpleFiltered = value => value == "Magno"
const arrayOfObjectFiltered = obj => obj.name == "Magno"

 const newDataFiltered = array.filter(arraySimpleFiltered)
 const newDataObjFiltered = arrayOfObjects.filter(arrayOfObjectFiltered)

console.log(newDataFiltered)
console.log(newDataObjFiltered)

// for (), .forEach(), .map(), .filter(), .reduce()

// for(let i = 0; i < array.length; i++){
//     if (array[i] == "Magno"){
//         console.log('oi eu sou o', array[i])
//         break;
//     } else {
//         console.log("eu " + array[i] + "não sou o Magno")
//     }
// }
