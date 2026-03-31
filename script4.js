// Object 
// const School = {
//     Name : "Urja Tech",
//     Location : "Pokhara",
//     Address: {
//         temporaryAddress: "New Road, Pokhara",
//         permanentAddress: "Lakeside, Pokhara",
//         Country: "Nepal"
//     },
//     Rank: 1
// }

// console.log(School.Address.temporaryAddress);

// Array
const fruits = ["Apple", "Banana", "Orange"];
// console.log(fruits[1]);


fruits.push("Grapes");
// console.log(fruits)

fruits.pop();
// console.log(fruits);

fruits.unshift("Grapes");
// console.log(fruits);


// console.log(fruits);

// fruits[1] = "Mango";
// console.log(fruits);
// fruits[1] = "Pineapple";
// console.log(fruits);

// SWAP
// let a = "Riya";
// let b = "Bikash";

// [a, b] = [b, a];
// console.log(a,b);



// // Spread and merge
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = [...arr1, ...arr2];
// console.log(combined);

// const student = { name: "Riya", score: 88 };

// const updated = { ...student, score: 95 };

// console.log(updated);


// const add = (...nums) => {
//     console.log(nums);
// }

// add(1,2,3,4,5)


// getTopStudent
// 1. DATA FIRST
const students = [
  { 
    id:1, 
    name:'Riya Sharma', 
    score:88, 
    city:'Pokhara' 
},
  { id:2, name:'Bikash Thapa', score:72, city:'Kathmandu' },
  { id:3, name:'Sunita KC', score:95, city:'Butwal' },
  { id:4, name:'Anil Gurung', score:60, city:'Pokhara' },
];

// 2. FUNCTION
const getTopStudent = (students) => {
  let top = students[0];
 

  for (let s of students) {
    if (s.score > top.score) {
      top = s;
    }
  }

  console.log(top);
  const { id, name, score, city } = top;
  console.log(`Topper: ${id} | ${name} | ${score} | ${city}`);
};

// 3. CALL
getTopStudent(students);