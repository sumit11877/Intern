// objects
const school = {
    name: "Yojjal Sharma",
    address:{
        city:"pokhara",
        country:"Nepal"
    },
    roll:1
}

console.log(school.name);
console.log(school.address.city);   


// array

const fruits = ["apple", "banana", "orange"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);


fruits.push("grape");
console.log(fruits);
fruits.pop();
console.log(fruits);

fruits.unshift("grape");
console.log(fruits);
fruits.shift();
console.log(fruits);


// destructuring
const person = {
    name: "Yojjal Sharma",
    age: 25,
    city: "Kathmandu"
}
const {name, age, city} = person;
console.log(name);
console.log(age);
console.log(city);

// Array Destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, third] = numbers;
console.log(first);
console.log(second);
console.log(third);

// SWAP
let a = "Riya";
let b = "Bikash";

[a, b] = [b, a];
console.log(a,b);

// Spread and merge
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined);

// override and spread
const student = { name: "Riya", score: 88 };

const updated = { ...student, score: 95 };

console.log(updated);

// REST OPERATOR

const add = (...nums) => {
    console.log(nums);
}

add(1,2,3,4,5)

// getTopStudent
// 1. DATA FIRST
const students = [
  { id:1, name:'Riya Sharma', score:88, city:'Pokhara' },
  { id:2, name:'Bikash Thapa', score:72, city:'Kathmandu' },
  { id:3, name:'Sunita KC', score:95, city:'Butwal' },
  { id:4, name:'Anil Gurung', score:60, city:'Pokhara' }
];

// 2. FUNCTION
const getTopStudent = (students) => {
  let top = students[0];
  console.log(top);

  for (let s of students) {
    if (s.score > top.score) {
      top = s;
    }
  }

  const { name, score, city } = top;
  console.log(`Topper: ${name} | ${score} | ${city}`);
};

// 3. CALL
getTopStudent(students);