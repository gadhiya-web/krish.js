// array

// console.log("hello");

const numbers = [0, 1, 2, 3, 4, 5]
const myheors = ["shaktiman", "nagaraj"]



const myArr = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

//array methods

// const myArr = [1, 2, 3, 4];


myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr);


myArr.unshift(9)
myArr.shift()
console.log(myArr);


console.log(myArr.includes(9));
console.log(myArr.indexOf(4));
console.log(myArr);




const newArr = myArr.join();
console.log(myArr);
console.log(typeof newArr);


/* ++++++++++++++++++++  slice, splice  +++++++++++++++ */

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log("B ", myArr);
console.log(myn1);

const myn2 = myArr.splice(1, 3)
console.log("c ", myArr);
console.log(myn2);