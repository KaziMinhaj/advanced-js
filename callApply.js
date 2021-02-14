const student = {
    firstName: "kazi",
    lastName: "Haider",
    age: "24",
    uni: "BRACU",
    getFullName: function () {
        return `Full name: ${this.firstName} ${this.lastName}`
    }

}
console.log(student.age);
console.log(student.getFullName());