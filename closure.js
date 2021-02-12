//closure example

function Counter() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}

const clock1 = Counter();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log("-----------clock 01 ends-----------");
const clock2 = Counter();
console.log(clock2());
console.log(clock2());
