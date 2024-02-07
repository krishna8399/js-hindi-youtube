function sayMyName(){
    console.log("K");
    console.log("r");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("n");
    console.log("a");
}

// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers (3,4) // arguments
//addTwoNumbers (3,"a") //result 3a
//addTwoNumbers (3,null) resuult 3

// const result = addTwoNumbers(4,6) // store in variable
// console.log("result: ",result) // undefined

function addTwoNumbers(number1,number2){
    let result = number1 + number2
    return result
}
const result = addTwoNumbers(4,6)
// console.log("result: ",result);

function loginUsermessage(username){
    //if(username === undefined)
    if(!username)
    {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUsermessage("krishna"));
// console.log(loginUsermessage())

// in case we have to add multiple like shopping cart

//function calculateCartPrice (num1){
function calculateCartPrice (...num1){ // rest operator ...
    return num1
}

console.log(calculateCartPrice(200,400,500,330))

const user = {
    username: "krishna",
    age : 24
}

function handleObject (anyobject){
    console.log(`username is ${anyobject.username} who is ${anyobject.age} years old`)
}

// handleObject(user)
handleObject({
    username : "krishna",
    age : 24
})

const myNewArray = [200,400,560,500]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))