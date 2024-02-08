// for of
// ["","",""]
// [{},{},{}] object inside array

const arr = [1,2,3,4,5,6]

for (const num of arr) {
    console.log(num);
}

const greetings = "hello world!"
for (const great of greetings) {
    console.log(`each char is ${great}`);
}

// Maps

const myMap = new Map()
myMap.set('In','India')
myMap.set('usa','texas')
myMap.set('Fr','france')
myMap.set('In','India')

console.log(myMap)

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

