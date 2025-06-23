const { ar } = require("date-fns/locale");
const { func } = require("joi");
const { type } = require("os");

const arr = [1, 5, 10, "Ola", true];

arr.forEach(function (el, i, arr) {
    console.log(i + " - " + el);
});

let arr1 = arr.filter(function (el, i, arr) {
    return typeof el === "number";
});
console.log(arr1);

arr1 = arr.map(function (el, i, arr) {
    return el * el;
});
console.log(arr1);
