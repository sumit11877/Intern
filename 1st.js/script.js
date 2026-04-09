//reduce
const total = prices.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(total);

//maping function
const students = [
    { name: 'kushal', grade: 85 },
    { name: 'asbin', grade: 92 },
    { name: 'bishesh', grade: 78 }
];