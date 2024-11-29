//  singalton

//  object literals

const mysym = Symbol("key1")

const jsuser = {
    name: "krish",
    "full name": "krish gadhiya",
    [mysym]: "mykey1",
    age: 18,
    location: "kagvad",
    email:"krishgadhiya@gmail.com",
    isloggdin: false,
    lastloggedin: ["monday", "saturday"]
}

// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]);
// console.log(typeof jsuser[mysym]);
// console.log(jsuser[mysym]);

jsuser.email = "gadhiyakrishgoogle.com"
// Object.freeze(jsuser)
jsuser.email = "gadhiyakrishmicrosoft.com"
// console.log(jsuser);


/* symbol methos in object */

// const mysym = Symbol("key1")
// const jsuser = {
//     [mysym]: "mykey1"
// }
// console.log(jsuser[mysym]);

jsuser.greeting = function(){
    console.log("hello js user");
}

jsuser.greetingtwo = function(){
    console.log(`hello js user, ${this.name}`); 
}

console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());


