const coding = ["js","ruby","java"]

// coding.forEach( function (val) {
//     console.log(val);
// })

// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
// })


const myCoding = [
    {
        languagename: "javascript",
        filename : "js"
    },
    {
        languagename: "java",
        filename : "java"
    },
    {
        languagename: "python",
        filename : "py"
    },
    {
        languagename: "javascript",
        filename : "js"
    }
]

myCoding.forEach((item) => {
    console.log(item.languagename);
})
