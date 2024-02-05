// array

const myArr = [0,1,2,3,4,5] //declaration 1
const myHeroes = ["shaktiman","nagraj"]
const myArr1 = new Array(1,2,3,4)

// console.log(myArr1[1]);
// array are resizable and can have different type of element
// array create shallow copies (it is property which share same reference)

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// myArr.push(6) // to insert an element
// myArr.pop() //remove element from end
// myArr.unshift(9) // to add in first
// myArr.shift()
// console.log(myArr.indexof(3)); 

// const newArr = myArr.join() // adds all the element of an array into a string

// console.log(myArr);
// console.log(typeof newArr)

// slice , splice

console.log("A",myArr);

const myNewArr1 = myArr.slice(1,3) 
console.log(myNewArr1);

console.log("B",myArr)
// splice
const myNewArr2 = myArr.splice(1,3) 
console.log("C",myArr)
console.log(myNewArr2);

