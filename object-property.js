// const students = [
//     { id: 11, name: "Akter" },
//     { id: 21, name: "shohan " },
//     { id: 21, name: "Shakil" },
//     { id: 21, name: "Fahima " },
//     { id: 21, name: "Kazi " }
// ]

// ----------------type01 mapping with normal function ---------

// const names = students.map(function (element) {
//     return element.name;
// })
// console.log(names);

// ----------------type02 mapping with arrow function------------------

// const names = students.map((element) => element.name)
// const ids = students.map((element) => element.id)
// console.log(names, ids);

const students = [
    { id: 11, name: "Akter" },
    { id: 21, name: "shohan " },
    { id: 51, name: "Shakil" },
    { id: 71, name: "Fahima " },
    { id: 91, name: "Kazi" }
];

// ======filter=======

// const ids = students.filter(element => element.id > 50);
// console.log(ids);

//======find=========
const myName = students.find(element => element.name == "Kazi");
console.log(myName.name);