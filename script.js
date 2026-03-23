const student = {
    name :"urja tech",
    location : "pokhara",
    address: {
        temporaryAddress: "new road,pokhara",
        pernamentAddress: "lakeside,pokhara",
        contry: "nepal"

    },
    rank:1

}
console.log(SpeechRecognitionResultList.address.temporaryAddress);
const fruits = ["aaple","banana","orange"];
console.log(fruits[1]);
fruits.push("grapes");
console.log(fruits)
fruits.pop();

const students = [
    { id:1,name:'kushal',score:70,city:'pokhara'},
    { id:1,name:'sumit',score:78,city:'pokhara'},
    { id:1,name:'jodan',score:72,city:'pokhara'},
    { id:1,name:'asbin',score:59,city:'pokhara'},
    { id:1,name:'nishan',score:60,city:'pokhara'},

]

const getTopStudent = (students) =>{
    let top =students[0];
     for(let s of students){
        if(s.score>top.score){
            top = s;

        }
     }
     console.log(top);
     const {id, name,score,city }=top;
     console.log('topper: ${id} | ${name} | ${score} | ${city}');

};
getTopStudent(students)
