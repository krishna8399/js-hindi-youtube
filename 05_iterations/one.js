// for

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("5 is best number");
//     }
//     console.log(element);
    
// }

// table
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        //console.log(i + '*' + j + '=' + i * j);
    }

}

// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`5 detected`);
        break
    }
    console.log(`value of i is ${index}`)
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`5 detected`);
        continue // skipped 5 
    }
    console.log(`value of i is ${index}`)
    
}

    


