function my_Function() {
    document.getElementById("Test").innerHTML = "Math";
}



function not_Function1() {
    document.getElementById("Not").innerHTML=!(20>10);
}



function not_Function2() {
    document.getElementById("IS").innerHTML=!(5>10);
}

// document.getElementById("Test").innerHTML = isNaN('This is a string');

// document.getElementById("Test").innerHTML = isNaN('007');


document.write(2E310+"<br>");/*this shows a value on the browser.*/
/*=concatenation=two things together*/


document.write(-3E310);
document.write("<br>");


document.write(10>2);
document.write("<br>");


document.write("10"+5);
document.write("<br>");


document.write(10==10);
document.write("<br>");
document.write(3==11);
document.write("<br>");


X=10;
Y=10;
document.write(X===Y);
document.write("<br>");


X=82;
Y="82";
document.write(X===Y);
document.write("<br>");


A="Magnus";
B="Magnus";
document.write(A===B);
document.write("<br>");


Z=150;
X=150;
document.write(Z===X);
document.write("<br>");


Z=150;
X="150";  
document.write(Z===X);
document.write("<br>");



D="YUP";
C="YUP";
document.write(D===C);
document.write("<br>");



document.write(15==15);
document.write("<br>");



document.write(3==13);
document.write("<br>");


document.write(5>2 && 10>4);
document.write("<br>");


document.write(5>10 && 10>4);
document.write("<br>");



document.write(5>2 || 10>4);
document.write("<br>");


document.write(5>10 ||  10>4);
document.write("<br>");

document.write(5>10 ||  10>20);
document.write("<br>");

document.write(Bigger=(5>1)?"Left number is bigger":"Right Number is bigger");
document.write("<br>");


console.log(2+2);/*These are stored in console*/
console.log(500+250);
console.log(10<9);
document.write("<br>");
var ramen="I love ramen"
document.write(typeof ramen);
/*expected output: will output data type number*/

