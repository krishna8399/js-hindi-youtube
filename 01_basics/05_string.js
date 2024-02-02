const name = "krishna"
const repoCount = 6

//console.log(name + repoCount );

console.log(`Hello My Name is ${name} and my repo count is ${repoCount}`);  //bacticks or string interpolation

// another way of declaring string as a object
const gameName = new String('krishna')

// console.log(gameName[0]);
// console.log(gameName[2]);

// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-6, 4)
console.log(anotherString);

const newString1 = "    krishna  "
console.log(newString1);
console.log(newString1.trim())