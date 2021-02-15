const student = {
    firstName: "kazi",
    lastName: "Haider",
    age: "24",
    uni: "BRACU",
    getFullName: function () {
        return `Full name: ${this.firstName} ${this.lastName}`
    }

}

// console.log(student.getFullName());

const std2 = {
    firstName: "Fahima",
    lastName: "Shova",
    age: "22",
    uni: "BRACU",
}

const fullName = student.getFullName.bind(std2);
console.log(fullName());


