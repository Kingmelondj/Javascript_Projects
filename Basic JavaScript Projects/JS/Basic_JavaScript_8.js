//  Concate() Method concatenates (Connects) two or more strings together.
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat (part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;

}

// Slice() Method

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}


// toUpperCase() Method.

function upMethod() {
    var str= "Level Up!";
    var res = str.toUpperCase();
    document.getElementById("Startedfromthelowernowwehere").innerHTML = res;

}

// Search()method

function SearchGuitarCover() {
    var str = "Visit Guitar Covers and learn to play today!";
    var n = str.search("Guitar Covers")
    document.getElementById("Covertest").innerHTML = n;
}

// Number methods

function string_Method() {
    var X = 1069;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

// TOPRECISION() Method

function precision_Method() {
    var X = 12938.3012987376122;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

// toFix() Method

function fixnumFunction() {
    var num = 5.56789;
    var n = num.toFixed(2);
    document.getElementById("FixNumber").innerHTML = n;
  }


//   valueOf() method:

function oFunction() {
    var str = "Am I original or just a clone?";
    var res = str.valueOf();
    document.getElementById("Original1").innerHTML = res;
  }

//   VALUE METHOD CLICK BUTTON WONT WORK

// This is a timer

// The statement "setTimeout(tick,10000);" 
//means that the program is pausing for 1,000 milliseconds
//(i.e., 1 second).
function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds -1
        TimeRanges.innerHTML = seconds;
        setTimeout(tick, 1000);
    if(seconds == -1) {
        alert ("Time's up!");
    }
        }
    tick();
}