// const tinderuser = new Object() singleton object
const tinderuser= {} // non singleton object

tinderuser.id = "123abc"
tinderuser.name = "sam"
tinderuser.isLoggedIn = false

// console.log(tinderuser);

const regularUser ={
    email: "sum@gmail.com",
    fullname: {
        userFullName: "krishna",
        lastname: "singh"
    }
}
 
// console.log(regularUser.fullname.userFullName);

const obj1 ={
    1: "a",
    2: "b"
}
const obj2 ={
    3: "a",
    4: "b"
}
const obj4 ={
    5: "a",
    6: "b"
}
//const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3); 

const users = [

    {
        id : 1,
        email: "k@gmail.com"
    },
    {
        id : 2,
        email: "k@gmail.com"
    },
    {
        id : 3,
        email: "k@gmail.com"
    }
]

users[1].email
console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "krishna"
}

//course.courseInstructor 

const {courseInstructor: instructure} = course

// console.log(courseInstructor);
console.log(instructure);

//API

// {
//     "name": "krishna",
//     "coursename": "js in hindi"
//     "price": "free"
// }

[
    {},
    {},
    {}
]
