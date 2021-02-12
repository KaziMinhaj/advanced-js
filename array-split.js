//-----------------slice-------------

// const array = [0, 1, 2, 3, 4, 5];
// const sliced = array.slice(2, 4);
// // from 2 no index to 3 no index
// // it means 2 included but 4 excluded
// console.log(sliced);
// console.log(array);

// ---------------splice-------------

// splice takes two or more param
//first one => starting index
//second one => how many elements want to delete
// rest of all will be injected into the array 
//then returns the deleted array & manipulate the orginal array
// const newArr = [10, 20, 30, 40, 50];
// const spliced = newArr.splice(2, 3, 4, 5); // delete 3 elements from index 2 and inject 4 and 5
// console.log(spliced);
// console.log(newArr);
// const newSpliced = newArr.splice(2, 1, 99, 100);
// console.log(newSpliced);
// console.log(newArr);

//-----------join------------
//it joins the values of the array

// const myArray = [99, 55, 66, 77, 88, 22];
// const joined = myArray.join("/")
// console.log(joined);