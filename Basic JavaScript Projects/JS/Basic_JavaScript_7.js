// /*Can find notes in Basic HTML 6*/

// /*Global Variable*/
var X = 10;
function Add_numbers_3 () {
    document.write(20 + X + "<br>");
}
function Add_numbers_4() {
    document.write(X + 100);
}
Add_numbers_3();
Add_numbers_4();



// /*local variable*/
function Add_numbers_5() {
    var X =10;
    document.write(20 + X + "<br>");
}

function Add_numbers_6() {
    document.write(X + 100);
}

Add_numbers_5();
Add_numbers_6();

// /*console.log() Debug*/
function Add_numbers_1() {
    var X =10;
    console.log(15+X);
}
function Add_numbers_2() {
    console.log(X+100);
}

Add_numbers_1();
Add_numbers_2();


// /*IF Statements ***
// "If statements" are a type of conditional statement that specifies 
// that a section of code is to be executed if a condition is true.


// For Example: 

//     if (1 < 2) {
//         document.write(" The left number is smaller than the number
//         on the right.")
//     }


// As a note: The Date().getHours() method returns the hour in the specified date 
// according to the local time, and the hours are listed as integers between 0 and 23. For example:
//  18 is equal to 6:00 p.m., 12 is noon, etc.


function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Date").innerHTML = "What time is it?";
     }
}





function ShouldIsleep_Function() {
    Time = document.getElementById("Time").value;
    if (Time >=00 ) {
        ZzZ = "SLEEP";
    }
    else {
        ZzZ = "Continue!";
    }
    document.getElementById("What_Time_is_it?").innerHTML=ZzZ;
}




// Time else if statement

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}