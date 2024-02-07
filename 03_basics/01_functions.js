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
console.log(loginUsermessage())