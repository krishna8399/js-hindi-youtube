// console.log(2 == 1);
// console.log(2 != 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// // the reason is that an equality check == and comparision > < >= <= works differently
// //comparision convert null to a number, treating it as 0. that's why (3) null >=0 is true and (1) null > 0is false.

// console.log(undefined == 0);

// === strict check , it checks value and datatype

// console.log("2"==2) // true
// console.log("2"===2) //false


//################# NOTES ##################
/*
baiscally categorised in 2 different types on tha basis how they are stored and how we access it

---------------
1. primitive
2. non primitive
---------------

1. Primitive (call by value)
    7 categories : String, Number, Bollean, Null, undefined, Symbol, BigInt
*/
//example
const score = 100
const scoreValue = 100.3

const isLoggedIn = true;
let userEmail;

const bigNumber =24387873867748n
console.log(typeof bigNumber);

// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId); //false
/*
// JavaScript is a dynamically typed language

2. NonPrimitive (reference)
    Array, Objects, Functions
*/

const heroes = ["shaktiman","naagjraj","doga"] //array
//object
let myObj = {
    name : "krishna",
    age : 22,
}
//Function

const myFunction = function(){
    console.log("hello world");
}