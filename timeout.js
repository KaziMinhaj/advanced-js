console.log("hey");
console.log("hi");

// here set time out takes two parameter 1.func and 2. time in ms
// this function will be executed after givem time in ms. after end of the all the task js will execute that. not before 2000 but sure after 2000ms
setTimeout(() => {
    console.log("I am set timeout");
}, 2000);

// setInterval(() => {
//     console.log(" i am set Interval");
// }, 2000);