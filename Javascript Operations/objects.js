// First Activity
console.log("My First program");


// Second Activity
console.log("My name is Daoud Hussain. I am an undergraduate Student at Comsats Islamabad. I am currently in my 6th Semester persuing CS Degree");

// Third Activity
var bibliography = "My name is Daoud Hussain. I am an undergraduate Student at Comsats Islamabad. I am currently in my 6th Semester persuing CS Degree";
console.log(bibliography);

// Fourth Activity
var bibliographyObject = {
    firstName: "Daoud",
    lastName: "Hussain",
    university: "Comsats Islamabad",
    semester: 6,
    age: 20
};

console.log(bibliographyObject.firstName);

// Fifth Activity
console.log(Object.keys(bibliographyObject).length);


// Sixth Activity
if(bibliographyObject.age > 20){
    console.log("Mature!!")
}
else{
    console.log("Teenager!!")
}


// Seventh Activity
var student1Obj = {
    firstName: "Daoud",
    lastName: "Hussain",
    university: "Comsats Islamabad",
    semester: 6,
    age: 20
};
var student2Obj = {
    firstName: "Usman",
    lastName: "Manzoor",
    university: "Comsats Islamabad",
    semester: 6,
    age: 22
};
var student3Obj = {
    firstName: "Qasim",
    lastName: "Ali",
    university: "Comsats Islamabad",
    semester: 6,
    age: 21
};

// Converting JS object to JSON
var student1JSON = JSON.stringify(student1Obj);
var student2JSON = JSON.stringify(student2Obj);
var student3JSON = JSON.stringify(student3Obj);

//Creating JSON array
var studentData = [
    JSON.parse(student1JSON), 
    JSON.parse(student2JSON), 
    JSON.parse(student3JSON), 

];

console.log(studentData);