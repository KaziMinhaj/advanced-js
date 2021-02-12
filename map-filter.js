// map & filter returns as a array

// const array = [3, 4, 5, 6];
// const newArray = [];
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     const double = element * element;
//     newArray.push(double);
// }
// console.log(newArray);

// function name(params) {
//     //
// }

// const add = (x, y) => x + y;
// console.log(add(2, 3));

// const arr = [3, 4, 5, 6];
// const double = arr.map(function twice(element) {
//     return element * element;
// });
// console.log(double);

// const arr = [3, 4, 5, 6];
// function twice(element) {
//     return element * element;
// }
// const double = arr.map(twice);
// console.log(double);

// const arr = [3, 4, 5, 6];
// function twice(element, index) {
//     console.log(element, index);
// }
// arr.map(twice);

// const array = [1, 2, 3, 4, 5, 6, 7];
// const cube = array.filter(function (element) {
//     return element == 7;
// })
// console.log(cube);

const array = [1, 2, 3, 4, 5, 6, 7];
const finding = array.find(function (element) {
    return element == 7;
});
console.log(finding);

// map and filter returns array
// find retrurns the element basis on the condition and only the first meet element
// filter returns an array basis on the condition