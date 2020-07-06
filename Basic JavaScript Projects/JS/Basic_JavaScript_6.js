function vote_Function() {
    var age, Can_vote;
    age = document.getElementById("age").value;
    Can_vote = (age < 18) ? "You are too young to vote":"You are eligble to vote";
    document.getElementById("vote").innerHTML = Can_vote + ".";
}


function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make= Make;
    this.Vehicle_Model= Model;
    this.Vehicle_Year= Year;
    this.Vehicle_Color= Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "pinto", 1971, "Mustard");
function Function2() {
    document.getElementById("Keywords_and_Constructors").innerHTML=
    "Erik drives a " + Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}




/*below is practice object constructor function */

function Guitar(Make, Model, Year, Color) {
    this.Guitar_Make= Make;
    this.Guitar_Model= Model;
    this.Guitar_Year= Year;
    this.Guitar_Color= Color;
}
var Delon = new Guitar("PRS", "Smoke Burst", 2020, "Faded Blue");
var Alex = new Guitar("Gibson", "SG", 2019, "Cherry");
function Function1() {
    document.getElementById("Guitar_Style").innerHTML=
    "Delon plays a " + Delon.Guitar_Make + "-colored" + Delon.Guitar_Model +
    " manufactured in " + Delon.Guitar_Year;
}


/*an "Identifier" is a name for something. In JavaScript, identifiers are the names of variables, functions, keywords, and labels. In the following code, "X" Is the identifier:

var X = 10;*/

// var X = 10;
// var Y = "Charlie";

/*10 is the integer (whole number) literal, Charlie is the string literal, and “X” and “Y” are the identifiers.

A literal is the data exactly as it is meant to be processed. Whereas an identifier is a name, the literal is the value itself.*/



// Nested functions

// Nested refers to something contained within something else. A program within a program. 
// or sets of instructions inside other instructions.
// In Javascript, functions have access to the functions that are above them in the code.



function Nested_Function() {
    document.getElementById("Adding").innerHTML= Add();
    function Add() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}
