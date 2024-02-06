const marvel_heroes = ["thor","Ironman","spiderman"]
const dcHeroes = ["batman","flash","superman"]

//marvel_heroes.push(dcHeroes);

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allheroes = marvel_heroes.concat(dcHeroes)
// console.log(allheroes)

const all_new_heroes = [...marvel_heroes, ...dcHeroes]
// console.log(all_new_heroes)

const another_array = [1,2,3, [4,5,6],7 , [6,7,[4,5]]]

// const real_another_array = another_array.flat(Infinity);

// console.log(real_another_array)

console.log(Array.from("krishna")); // convert string in array using from
console.log(Array.from({name: "krishna"}))
