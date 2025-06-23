const { cp } = require("fs");
const { arrayBuffer } = require("stream/consumers");

let arr = [1, 3, 5, 7, 9];
arr.push(11);
console.log(arr);
let removido = arr.pop();
console.log(removido);
console.log(arr);
let removido2 = arr.shift()
console.log(removido2)
console.log(arr)
arr.unshift(1)
console.log(arr)
let arr2 = arr.slice(1,3)
console.log(arr2)
console.log(arr)
let arr3 = arr.splice(2,2) // segundo valor é ate onde vai ser cortado
console.log(arr3)
console.log(arr)