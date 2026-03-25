const prices = [80, 150, 200, 50, 20];

const totalPrice = prices.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);  
console.log(totalPrice);

const students = [
    {name: 'kushal', score: 98},
    { name: 'sumit', score: 78 },
    { name: 'roshan', score: 85},
    { name: 'asbin', score: 98 },
    { name: 'nishan', score: 60 },
    { name: 'suman', score: 90 },
    { name: 'sujan', score: 95 },
    { name: 'sujani', score: 82 },

];
const boostedScores = students.map(student => ({ ...student, score: student.score + 5 }));
console.log(boostedScores);

const passedStudents = students.filter(student => student.score >= 80);
console.log(passedStudents);

    