const number = 0; // value 0 will give output false 
// note that exept zero all other values will give true
const name = "" // empty string ouput false
// all other string including whitespace will give true

let item; // this will provide false  

let value = null; // false output

let not_A_Number = NaN; //output false

let arr = []; //true

let obj = {}; //true

//checker
if (obj) {
    console.log("true");
} else {
    console.log("false");
}