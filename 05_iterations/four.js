const myObject = {
    js : "javascript",
    cpp: "c++",
    rb: "ruby",
    swift:"swift"
}
// for in with object
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// for in with array

const programming = ["js","rb","py"]

for (const key in programming) {
    console.log(key);
}

