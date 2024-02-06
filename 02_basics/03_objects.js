// objects can be declared in 2 way literal and constructor (singleton)

// Object literals
//we can also create using object.create
//Object.create singleton

const mySymbol = Symbol("key1")

const JsUser = { // curly braces is object
    name: "krishna",
    "full name": "krishna singh",
    [mySymbol]: "Mykey1",
    age: 18,
    location: "delhi",
    email: "krishna@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Sunday"]
} 

// console.log(JsUser.email) // 2 ways for access objects
// console.log(JsUser["email"]) // more efficient way

// console.log(JsUser["full name"]) // more efficient way
// console.log(JsUser[mySymbol])

// we can aslo ffreeze vallues
JsUser.email = "krishsing@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "krishsinghhh@gmail.com"

// console.log(JsUser);

//Functions declare

JsUser.greeting = function(){
    console.log("hello js user")
}

//

JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`)
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
