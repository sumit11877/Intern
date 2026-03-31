// // forEach is a method that executes a provided function once for each array element. It is used to iterate over an array and perform a specific action for each element.
// const names = ["Riya", "Bikash", "Sunita"];

// names.forEach((name, i) => {
//   console.log(i+1, name);
// });

// // Map is a method that creates a new array populated with the results of calling a provided function on every element in the calling array. It is used to transform each element of an array and return a new array with the transformed values.
// const numbers = [1, 2, 3, 4, 5];    
// const squaredNumbers = numbers.map((num) => num * num);
// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// // Filter is a method that creates a new array with all elements that pass the test implemented by the provided function. It is used to filter out elements from an array based on a specific condition and return a new array with the filtered values.
// const ages = [18, 25, 30, 15, 20];
// const adult = ages.filter((age) => age >= 18);
// console.log(adult)
 

// // Reduce is a method that executes a reducer function on each element of the array, resulting in a single output value. It is used to reduce an array to a single value by applying a function that takes an accumulator and the current value as arguments.
// const numbersToReduce = [1, 2, 3, 4, 5];
// const sum = numbersToReduce.reduce((a, Value) => a + Value, 15);
// console.log(sum);

// find is a method that returns the value of the first element in the array that satisfies the provided testing function. It is used to find a specific element in an array based on a condition and return that element.
// const users = [{ id:1 }, { id:2 }];

// const user = users.find(u => u.id === 2);
// console.log(user); // Output: { id: 2 }

// some and every are methods that test whether at least one element (some) or all elements (every) in the array pass the test implemented by the provided function. They are used to check if certain conditions are met for elements in an array.
// const scores = [80, 90, 40];

// console.log(scores.some(s => s > 85))   
// console.log(scores.every(s => s > 50));  

// Map
const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 92 },
  { name: "Charlie", grade: 78 }
];

// // add 5 bonus point to each student grade
// const boosted = students.map(student => ({
//     ...student,
//     grade: student.grade + 5
// }),
//   console.log(students)
// )

// console.log(boosted);


// // filter
const passing = students.filter(s => s.score > 70);
console.log(passing); 




// reduce
// const prices = [80, 150, 200, 50];
 
// // --- Sum all prices (accumulator starts at 0) ---
// const total = prices.reduce((accumulator, currentItem) => {
//   return accumulator + currentItem;
// }, 0); 
// console.log(total) // <-- 0 is the starting value of the accumulator
 
// Step by step:
// Round 1: accumulator=0,   currentItem=80  → returns 80
// Round 2: accumulator=80,  currentItem=150 → returns 230
// Round 3: accumulator=230, currentItem=200 → returns 430
// Round 4: accumulator=430, currentItem=50  → returns 480
// Final result: 480
 
// // --- Count items matching a condition ---
// const students1 = [{ hasPaid: true }, { hasPaid: false }, { hasPaid: true }];
// const paidCount = students1.reduce((count, s) => s.hasPaid ? count + 1 : count, 0);
// // 2
// console.log(paidCount);

