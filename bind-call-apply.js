const student = {
    firstName: "kazi",
    lastName: "Haider",
    age: "24",
    uni: "BRACU",
    getFullName: function (x) {
        return `Full name: ${this.firstName} ${this.lastName} and parameter is ${x}`
    }

}

// console.log(student.getFullName());

const std2 = {
    firstName: "Fahima",
    lastName: "Shova",
    age: "22",
    uni: "BRACU"
}

// ---------Bind -------------
// const fullName = student.getFullName.bind(std2);
// console.log(fullName());

// ----------call---------
// const fullName = student.getFullName.call(std2, 100)
// console.log(fullName);

//----bind---
//  n.b : we have to pass parameter as a array

// const fullName = student.getFullName.apply(student, [199]);
// console.log(fullName);