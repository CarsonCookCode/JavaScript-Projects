//This function concatenates the strings in a and b.
function connect() {
    var a ="My name is ";
    var b = "Bobby";
    var c = a.concat(b);
    document.getElementById("hello").innerHTML = c;
}
connect();

//This function slices out the characters from index 4 to 5.
function giveMeTheA() {
    var d = "VIBRANT"
    var e = d.slice(4, 5);
    document.getElementById("slice").innerHTML = e;
}
giveMeTheA();


//This function changes all characters to uppercase.
function tallLetters() {
    var f = "transform";
    var g = f.toUpperCase();
    document.getElementById("upper").innerHTML = g;
}
tallLetters();

//This function finds the string "fox" and returns its index.
function find() {
    var h = "The quick brown fox jumped over the lazy dog";
    var i = h.search("fox");
    document.getElementById("find").innerHTML = i;
}
find();

//This function changes the number in j to a string.
function makeAString() {
    var j = 777;
    var k = j.toString();
    console.log(k);
    document.getElementById("string").innerHTML = k;
    console.log(typeof k);
}
makeAString();

//This function takes the number and makes it three characters long.
function exactLength() {
    var l = 123456789;
    var m = l.toPrecision(3);
    document.getElementById("exact").innerHTML = m;
    console.log(m);
}
exactLength();

//This function rounds to 4 decimal places.
function fixed() {
    var o = 9.8571923587;
    var p = o.toFixed(4);
    document.getElementById("fixed").innerHTML = p;
}
fixed();

//This function finds the value of the q variable.
function value() {
    var q = 12;
    document.getElementById("value").innerHTML = q.valueOf();
}
value();