//for Loop
// for (initialization; condition; update) {
// 
// }

//Print Even Numbers
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

//Print Odd Numbers
for (let i = 1; i <= 10; i += 2) {
    console.log(i);
}

//Reverse Loop
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

//while Loop
// while (condition) {
// 
// }

//do...while Loop
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);


//Nested Loop
for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 2; j++) {
        console.log(i, j);
    }

}

//Break Statement Stops the loop.
for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);
}