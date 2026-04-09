// Object
const school = {
    name: "Greenwood High",
    location: "tanhaun",
    Address: {
        temporaryaddresh: "pokhara",
        permanentaddresh: "tanhaun",
        country: "nepal",
    },
    principal: "Dr. nishan",
    Rank: 1,
};
console.log(school.Address.temporaryaddresh);

// Array of objects
const fruits = ["apple", "banana", "orange"];
console .log(fruits[0]);

const students = [
    { id:1,name:'nishan malla', score : 85, city : 'tanhaun' },
    { id:2,name:'sita thapa', score : 90, city : 'kathmandu' },
    { id:3,name:'ram shrestha', score : 80, city : 'bharatpur' },
];

//functions
const gettopstudent = (students) => {
    let topstudent = students[0];
    for (let s of students) {
        if (s.score > topstudent.score) {
            topstudent = s;
        }
    }
    console.log(`Top student is ${topstudent.name} with score ${topstudent.score}`);
};
gettopstudent(students);



    