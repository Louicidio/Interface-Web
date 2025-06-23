const arr = [1, 5, 10, "Ola", true];

let soNumeros = arr.every(function(el){
    return typeof el === "number"
})
console.log(soNumeros)