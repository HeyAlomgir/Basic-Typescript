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
const greetings = (gretting, fulName) => {
    console.log(gretting + " " + fulName);
};
greetings("hello", "Alomgir");
// rest paremeteers
const sumI = (...numbers) => {
    return console.log(numbers.reduce((arr, num) => arr + num, 0));
};
sumI(3, 4);
const stud = (...arg) => {
    const [name, age, isActive] = arg;
    console.log(name, "is", age);
};
stud("alomgir", 20, true);
// object
const students = {
    name: "Alomgir",
    age: 20,
    isActive: true,
    address: ["Bangladesh", "Mymensingh"]
};
const user1 = {
    name: "Ibrahim",
    age: 34,
    address: ["Banglades", "Mymensingh"],
    cgpa: [4.00, 3.00]
};
console.log(user1);
const user2 = {
    name: "raju",
    age: 34,
    address: ["Bangladesh", "Mymensingh"],
    cgpa: [34, 3454]
};
console.log(user2);
