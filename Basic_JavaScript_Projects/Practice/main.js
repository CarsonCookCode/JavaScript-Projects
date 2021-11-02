function switchFunc() {
    var final;
    var answer = document.getElementById("answer").value;
    switch(answer) {
        case "rock":
            final = "You chose rock";
        break;
        case "paper":
            final = "You chose paper";
        break;
        case "scissors":
            final = "You chose scissors";
        break;
        default:
            final = "Enter your choice with the exact spelling."
    }
    document.getElementById("final").innerHTML = final;
}

function classChange() {
    var x = document.getElementsByClassName("class");
    x[0].innerHTML = "Changed";
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();


var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);