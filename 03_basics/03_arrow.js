const user = {
    username : "krishna",
    price : 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

/// ARROW

// function chai(){
//     let username = "krishna"
//     console.log(this.username);
// }

// chai();

const chai = () => {
    let username = "krishna"
    console.log(this);
}

// chai(); 

// SYNTAX

// const addTwo = (num1 , num2) => {
//     return num1 +num2
// }

// console.log(addTwo(3,5))

// this can be written in implicit key word


const addTwo = (num1 , num2) => (num1 +num2) 

console.log(addTwo(3,5))

