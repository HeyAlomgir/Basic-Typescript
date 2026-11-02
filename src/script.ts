// Basic Type Add
const addTwoNumber = (a: number, b: number) => {
    return a + b;
}
console.log(addTwoNumber(20, 40))


// Basic Type *
const Multiplaition = (a: number, b: number) => {
    return a * b;
}
console.log(Multiplaition(34, 3))




// Aray and Tupple an readonly 

// array syntex 1

const arr: string[] = ["Alomgir", "siam", "rony"]
arr.push("jahid");
console.log(arr)


// array syntex 2

let sum: number = 0;

const arr2: Array<number> = [34, 44, 34];
arr2.push(16)

for (const num of arr2) {
    sum = num + sum;
}
console.log("Aray Sum:", sum)


// Tupple an readonly

// simple tupple 
const stnRoll: [number, number] = [34, 43];
stnRoll.push(34);
console.log(stnRoll)

// tuple er sate readonly diye dibo jate keu change nha korte pare

const student: readonly [number, string] = [34, "ALomgir"];



const greetings = (gretting: string, fulName: string): void => {
    console.log(gretting + " " + fulName);
}
greetings("hello", "Alomgir");


// rest paremeteers

const sumI = (...numbers: number[]) => {
    return console.log(numbers.reduce((arr, num) => arr + num, 0))
}
sumI(3, 4);



const stud = (...arg: [string, number, boolean]) => {
    const [name, age, isActive] = arg;
    console.log(name, "is", age);

}
stud("alomgir", 20, true);



// object


const students: {
    name: string,
    age: number,
    isActive: boolean,
    address: string[],
} = {
    name: "Alomgir",
    age: 20,
    isActive: true,
    address: ["Bangladesh", "Mymensingh"]
}



// Alias

type users = {
    name: string,
    age: number,
    address: string[],
    cgpa: number[];
}


const user1: users = {
    name: "Ibrahim",
    age: 34,
    address: ["Banglades", "Mymensingh"],
    cgpa: [4.00, 3.00]
}
console.log(user1)


const user2: users = {
    name: "raju",
    age: 34,
    address: ["Bangladesh", "Mymensingh"],
    cgpa: [34, 3454]
}
console.log(user2)



