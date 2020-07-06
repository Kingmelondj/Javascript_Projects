 var person = {firstName:"Harry", lastName:"Potter", age:22, eyeColor:"blue"};

 console.log(person.age);
 //expected output: "22"

 delete person.age;

 console.log(person.age);
 //expected output: undefined 

 document.write(typeof "Word");

document.write(typeof person);
document.write(person);
document.write(person.eyeColor);
document.getElementById("Name").innerHTML = "My name is " + person.firstName + " " + person.lastName

