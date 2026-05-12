//Access Array Elements
let fruits1 = ["Apple", "Banana", "Mango"];

console.log(fruits1[0]);
console.log(fruits1[1]);
console.log(fruits1[2]);

//Change Array Value
let fruits2 = ["Apple", "Banana", "Mango"];

fruits2[1] = "Orange";

console.log(fruits2);

//Array Length
let fruits3 = ["Apple", "Banana", "Mango"];

console.log(fruits3.length);

//Add Elements

let fruits4 = ["Apple", "Banana"];

fruits4.push("Mango");

console.log(fruits4);

//Remove Elements
let fruits5 = ["Apple", "Banana", "Mango"];

fruits5.pop();

console.log(fruits5);

//Loop Through Arrays
let fruits6 = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits6.length; i++) {
    console.log(fruits6[i]);
}

//for...of Loop
let fruits7 = ["Apple", "Banana", "Mango"];

for (let fruit of fruits7) {
    console.log(fruit);
}

//Includes Method
let fruits8 = ["Apple", "Banana", "Mango"];

console.log(fruits8.includes("Banana"));
console.log(fruits8.includes("Orange"));

//Join Arrays
let fruits9 = ["Apple", "Banana", "Mango"];

console.log(fruits9.join(" - "));

//Array of Mixed Data Types
let data = ["Sourabh", 16, true, 95.5];

console.log(data);
