"use strict";
// Basic Type Add
const addTwoNumber = (a, b) => {
    return a + b;
};
console.log(addTwoNumber(20, 40));
// Basic Type *
const Multiplaition = (a, b) => {
    return a * b;
};
console.log(Multiplaition(34, 3));
// Aray and Tupple an readonly 
// array syntex 1
const arr = ["Alomgir", "siam", "rony"];
arr.push("jahid");
console.log(arr);
// array syntex 2
let sum = 0;
const arr2 = [34, 44, 34];
arr2.push(16);
for (const num of arr2) {
    sum = num + sum;
}
console.log("Aray Sum:", sum);
// Tupple an readonly
// simple tupple 
const stnRoll = [34, 43];
stnRoll.push(34);
console.log(stnRoll);
// tuple er sate readonly diye dibo jate keu change nha korte pare
const student = [34, "ALomgir"];
