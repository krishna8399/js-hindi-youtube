// const userEmail = "kei@gmail"


// if (userEmail) {
//     console.log("have email");
// } else {
//     console.log("dont have email");
// }

// falsy values

// false , 0 , -0, bitgnit 0n, "", null, undefined,  NaN

//truthy true, 1, "0",'false'," ",[],{}, function(){},
// checking array
const userEmail = []
if (userEmail.length === 0) {
    console.log("arrray is empty");
}

// check object 
const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    console.log("object is empty");
}

// nullish coalescing opearator (??): null undefined
// check safety for null

let val1 ;
//val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 10


console.log(val1);

// terniary operator

//condition ? true : false

const iceTeaprice = 100

iceTeaprice >=80 ? console.log("less than 80") : console.log("greater than 80");;