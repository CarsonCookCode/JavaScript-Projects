//I just wrote one function for all of the operations.
//When this function is called it calculates each expression
//and then displays them on the page.
function mathFunction () {
//Here I wrote each expression and assigned them to variables.
    var x = (5 + 12 - 1) * (245/5);
    var y = 777 % 50;
    var z = 10;
    var a = 999;
    var b = Math.floor(Math.random() * 8);
//Here I set each element equal to the corresponding result.
    document.getElementById("Math1").innerHTML = x;
    document.getElementById("Math2").innerHTML = y;
    document.getElementById("Math3").innerHTML = -z;
    document.getElementById("Math4").innerHTML = ++a;
    document.getElementById("Math5").innerHTML = b;
}
