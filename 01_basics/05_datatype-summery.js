/* LETCHUR-9 START */

// # primitive 

/* 7 types : null , number , bigint , boolean  , string , symbol , undefine*/

/* 
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
  
*/

const score = 100
const scorevalue = 100.3

const isloggedIn = false
const outsidetemp = null
let useremail;
const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

const bigint = 112233445566778899n


// # refrence nonprimetive

// array , objects , functions

/* // objects ex.

const hero = ["shaktiman", "nagraj", "doga"]
let myobj ={
       name: "krish",
       age: 22,
}

{} <= bracket under object

*/


/* // function 
const myfunction = function (){
       console.log("hello world");
}

console.log(typeof myfunction);
*/

/* LETCHUR-9 END */

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* LETCHUR-10 START */
/* 
// 2 MEMORY

//Primitive (STACK)
//nonPrimitive (heap) 
*/

// primetive datatype

let anothername = mychenal
anothername = "krish gadhiya"

//console.log(mychenal);
//console.log(anothername);

let userone = {
       email: "user@gmail.com",
       upi: "user@ybl3545"
}

let usertwo = userone

usertwo.email = "krishgadhiya@gmail.com"

console.log(userone.email);
console.log(usertwo.email);












//           node 01_basics/05_datatype-summery.js