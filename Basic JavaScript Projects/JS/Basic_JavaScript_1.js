var A = "This is a string";
window.alert(A);
document.write("\"Lisa told Bart, knock it off,! or I'll tell dad!"
+"eat my shorts!"+"Bart responded.");

var B = "Help" + "because this isn't working";
document.write(B);

var Family = "Andersons", Dad = "Jim", Mom = "Hermoine",
    Daughter = "Penny", Son = "Zorro";
document.write(Dad);

var blues = "I have the blues.";
var blues = blues.fontcolor("blue");
document.write(blues);

function My_First_Function() {        //Defining a function and naming it
    var str="This text is green!";    //Defining a variable and giving it a
                                      //string value
    var result=str.fontcolor("green");//Using the fontcolor method on
                                      //str variable
    document.getElementById("Green_Text").innerHTML=result; //putting the value
                                        //of result into HTML element with "Green_Text" id
}

