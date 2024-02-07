// Let const var

// var c = 300
let a = 300

if(true) {
    let a=10
    const b=20
    var c=30
    console.log("INNER: ",a)
}



 //console.log(a);
// console.log(b);
//console.log(c);

// nested scope

function one(){
    const username = "krishna"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two()
}

one()

//----------------- interesting
console.log(addone(5));

function addone(num){
    return num + 1
}

console.log(addTwo(5));
const addTwo = function(num){
    return num + 2
}

