alert(document.getElementById("Math").innerHTML);

function subtraction_Function() {
    var Subtraction = 5-2;
    document.getElementById("答えは！").innerHTML="5-2=" + Subtraction;
}


function modulus_Operator() {
    var simple_Math=25 % 6;
    document.getElementById("Math").innerHTML="When you divide 25 by 6 you have a remainder of:"+ simple_Math;
}


function negation_Operator() {
    var x=10;
    document.getElementById("Math1").innerHTML = -x; /*unary operator*/
}


var X=5;
X++;
document.write(X); /*Increment operator*/

var X=5.25;
X--;
document.write(X); /*Decrement Operator; should show as 4.25*/


window.alert(Math.random()); /*To return a random number between 0 and 1, you would write the following JavaScript Code:*/

window.alert(Math.random()*100); /*If you would like to have a random number displayed between ---and----(Such as 0 and 100), you would write this code. 

/*The JavaScript Math object allows you to perform mathematical tasks on numbers.*/
Math.PI; /*For example this will return PI*/

Math.round(5.2) /*returns the value of x rounded to its nearest integer*/


function my_Dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    document.getElementById("Dictionary").innerHTML=Animal.Sound;
}