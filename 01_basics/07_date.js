// Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023 , 0 ,23)
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());

let myCreatedDate = new Date("2023-01-14")
console.log(myCreatedDate.toLocaleDateString());

// TIME

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); 