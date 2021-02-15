//without using constructor 
//created 4 object manually 

const person1 = {
    name: "kazi",
    age: 24,
    uni: "BRACU"
}
const person2 = {
    name: "Fahima",
    age: 24,
    uni: "BRACU"
}
const person3 = {
    name: "Tasnia",
    age: 24,
    uni: "BRACU"
}
const person4 = {
    name: "Sieum",
    age: 24,
    uni: "BU"
}

//with the help of class

class newPerson {
    constructor(name, age, uni) {
        this.name = name;
        this.age = age;
        this.uni = uni
    }
}

const p1 = new newPerson("kazi", 24, "BRAC");
const p2 = new newPerson("Fahima", 24, "BRAC");
const p3 = new newPerson("Tasnia", 24, "BRAC");
const p4 = new newPerson("Sieum", 24, "BU");

// console.log(p1.name, p2.name, p3.name, p4.name);
console.log(p1);