
function JPNumbersystem() {
    alert("一　ニ　三　四　五　六　七　八　九　十");
}
// alert.(document.getElementById("ENNumbersystem").innerHTML);
// alert.(document.getElementById("p1").innerHTML);


function alwaysRemember() {
    A = "Always ";
    B = "remember ";
    document.write(A+B);
        
    X = "you ";
    Y = "are ";
    document.write(X+Y);
        
    M = "unique, ";
    N = "because you are YOURSELF.";
    document.write(M+N);
    document.getElementById("Always_Rememberu").innerHTML;
    }  












// While loops

//  The While loop means that while BLANK is occuring, do "Blank".
// A While loop is basically a repeating "if statement". Meaning, you are telling the computer
// to execute certain code repeatedly while a particular condition is pre
function countToTen() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
       X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}


//     A "for loop" is used to repeat a section of code a number of times. for loops are used when
//     the number of iterations are known.
//     For example:
//     For each student in the class (25), provide a grade.
//     The for loop repeatedly executes instructions as long as a particular condition is true 


var Instruments = [ "Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Type = "";
var Z;
function for_Loop() {
    for (Z = 0; Z < Instruments.length; Z++) {
        Type += Instruments[Z] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Type;
}



// var Places = ["Japan", "Italy", "Korea", "China"];
// var Content = "";
// var Y;
// function for_Loop1() {
//     for (Y = 0; Y < Places.Traveled; Y++) {
//         Content += Places[Y] + "<br>";
//     }
//     document.getElementById("List_of_Places").innerHTML = Content;
// }



// loop Id counting to ten will not work? step 179

//        String length property
//         The length property returns the length of a string (number of characters)
//         The length of an empty string is 0.
//         syntax = string.length
//         return value: length of the string

function stringLength() {
    var str = "Where is the best place to travel?";
    var n = str.length;
    document.getElementById("string_length").innerHTML = n;
}


   //   Arrays are objects and so are included in the object data type.
    // objects can have properties(characteristics) and methods (actions)
    // arrays are a special type of object.
    // Here is how to create an array of cat pictures (our example in the previous step) in JavaScript:

    function cat_pics() {
        var Cat_Picture = [] ;
         Cat_Picture[0] = "sleeping";
         Cat_Picture[1] = "playing";
         Cat_Picture[2] = "eating";
         Cat_Picture[3] = "purring";
        document.getElementById("Cat").innerHTML = "In this picture, the cat is " + 
            Cat_Picture[2] + ".";
    }
    

    function array_Function() {
        var Dog_Picture = [] ;
            Dog_Picture[0] = "sleeping";
            Dog_Picture[1] = "playing";
            Dog_Picture[2] = "eating";
            Dog_Picture[3] = "barking";
        document.getElementById("Array").innerHTML = "In this picture, the dog is " + 
            Dog_Picture[2] + ".";
    }
    


//     SCOPE***
// As a reminder, scope refers to the functions, variables, 
// and objects you have access to within your program. 
// The scope is either “local” or “global.” 
// A global variable can be accessed from any function within the program,
//  whereas a local variable is only accessed by the function it is assigned to.

// Local scope can be divided into two other types of scope.

// The first is “function scope” which refers to variables that are only 
// available within the function they were created in. Here is an example of a variable that has a function scope:

// function myFunction() {
//     var carName = "Corvette";
//     document.getElementById("Example").innerHTML = carName;
// }

// The second is “block scope”. A block is a set of opening and closing curly brackets.
//  Typically block scope refers to conditional statements and loops.

// The difference between function scope and block scope is that in function scope, 
// any variable declared within a function is visible anywhere within that same function but with block scope,
//  the visibility of variables is confined to a given block enclosed by curly braces – you can have multiple sets
//   of opening and closing curly brackets within a function.








//      CONSTANT****

// “Constant” is the name given to a location in a computer's memory that a program has set aside for use in storing data, in the situation where the value of the data stored in that memory location will NOT change over time.

// As an example: you could program a video game character to always have the same height (6’ 0” tall) by creating a constant. It would not make sense to use a constant for the game character’s “health” rating, as the character would likely see its health decrease and increase as the video game is played.

// A variable is a memory location that holds data – it is a name to identify a specific memory location. Developers can assign a value to a variable and use that variable throughout the program.

// A constant cannot be modified by the program once it is defined. It is a fixed value.

// Variables and constants have similarities but the difference is: variables can be changed by a program once they are defined, constants cannot.

// For example, you could write:

//     var X = 10;
 
// // And then later change it to:

//     var X = 15;

// // within the same program.

//     const X = 10;

// We assign constants using the const keyword as follows:







// TOKENS
// A token is a single component in a programming language. The five categories of tokens are:

// 1. Constants,

// 2. Identifiers (names that uniquely identify a program element in the code – such as variables),

// 3. Operators (such as +, * or -),

// 4. Separators (also called “delimiters – a sequence of one or more characters that specifies the boundaries of sections of code),

// 5. Reserved words (words that have set meanings and uses, and cannot be redefined by a developer).

// Sometimes in Dev Tools, if there’s an error in your code, it may state: Unexpected token – which means there’s a component in your code the browser can’t execute.

// JavaScript keywords are tokens that have special meanings. As discussed previously, keywords are reserved words in JavaScript which means you cannot use them to name variables or functions.









// CONST KEYWORD
// The const keyword creates a constant whose scope can be either global or local to the block in which it is declared.

// The name const is slightly misleading because it doesn’t technically create a “constant” (something immutable). Basically, the value assigned by the const keyword is not immutable (it can change) – yet, the variable identifier cannot be reassigned.

// Whereas var contains information that is expected to change, const contains information which will never change.

// For example, we’d start by writing our JavaScript code as follows:

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand: "PRS", color: "Red"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$1,500";
    document.getElementById("Constant").innerHTML = "The cost of the " +
         Musical_Instrument.type + " was " + Musical_Instrument.price;
}

// This would display:

// The cost of the guitar was $900

// We created an object with the const keyword and then added a property with a value. We also changed the “Red” value for the color property to “blue”.

// Now, what if we wanted to change the identifier (e.g. Musical_Instrument or type), we couldn’t.

// The following code would give an error:

function returnFunction(name) {
    return "Hello " + name;
  }
  document.getElementById("Return").innerHTML = returnFunction("Donovan");




let band = {
    label: " A-sketch Records ",
    bandName: " One Ok Rock ",
    founded: " 2008 ",
    from: " Tokyo, Japan ",
    Description : function() {
        return "This band was formed in " + this.founded + this.from + ' under ' + this.label;
     
    }
}
        document.getElementById("okRock").innerHTML = band.Description();




// loop with a break
// The break statement "jumps out" of a loop.
var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}
    document.getElementById("demo1").innerHTML = text;

// The continue statement "jumps over" one iteration in the loop.
var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}
    document.getElementById("demo").innerHTML = text;
