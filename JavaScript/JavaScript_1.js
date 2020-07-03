// Switch statement
function Pokemon_Function() {
    var Pokemon_Output;
    var Pokemon = document.getElementById("Poke_Input").value;
    var Poke_String = "is a great color!";
    switch (Pokemon) {
        case "Richu":
            Pokemon_Output = "Raichu" + Poke_String;
        break;
        case "Bulbasaur":
            Pokemon_Output = "Bulbasaur" + Poke_String;
        break;
        case "Evee":
            Pokemon_Output = "Evee" + Poke_String;
        break;
        case "Vulpix":
            Pokemon_Output = "Vulpix" + Poke_String;
        break;
        case "Gengar":
            Pokemon_Output = "Gengar" + Poke_String;
        break;
        case "Primape":
            Pokemon_Output = "Primape" + Poke_String;
        break;
        default:
            Pokemon_Output = "Please enter a color exactly as written on the above list";
             }
            document.getElementById("Output").innerHTML = Color_Output;
        }


// get elements by class name method
        
function cFunction() {
    var x = document.getElementsByClassName("Poke1");
    x[0].innerHTML = "Pikachu";
  }


// canvas
  window.onload = function() {
    var c = document.getElementById("poke2");
    var ctx = c.getContext("2d");
    var img = document.getElementById("P?");
    ctx.drawImage(img, 10, 10);
  };


//   canvas create linear gradient ()
var c = document.getElementById("poke2");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 100, 170, 75);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(10, 60, 800 , 525);