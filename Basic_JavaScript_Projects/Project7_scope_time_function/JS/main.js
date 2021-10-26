//This is a global variable
var y = 5;
function myFunc1 () 
{
//This is a local variable
    var x = 12;
    console.log('Func1')
//This local variable will log successfully because it located within this function
    console.log(x);
//This global variable is accessible anywhere.
    console.log(y);
}

function myFunc2 () {
    console.log('Func2')
//This global variable is accessible anywhere.
    console.log(y);
//This local variable will not log successfully because it is located in a different function
    console.log(x);
}

//This function includes an If and Else conditionals
//It takes the input to determine if someone is tall enough
function tallEnough() {
    height = document.getElementById("height").value;
    if (height >= 100) {
        limit = "You are tall enough";
    } else {
        limit = "You are too short";
    }
    document.getElementById("answer").innerHTML = limit;
}
//This function contains an If, If Else, and Else conditionals
//It will state the time of day based on the current time information on the computer
function timeFunction() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time."
    }
    document.getElementById("dayTime").innerHTML = Reply;
    console.log(Time)
}