//This is a while loop
function Call_Loop() {
    var x = 1;
    while (x < 6) {
        document.write("Hello ");
        x++;
    }
}

//This makes use of the length keyword
var y = "Harry"
document.write(y.length);

//This is an array
var instruments = ["guitar", "piano", "violin", "harp", "ukulele"]
//The array is looped through and each element is listed
function for_Loop() {
    for (i = 0; i < instruments.length; i++) {
        document.write(instruments[i] + "<br>");
    }
}

//This function creates an array and displays the element at index 2
function array_Function() {
    var animals = [];
    animals[0] = "dog";
    animals[1] = "cat";
    animals[2] = "mouse";
    animals[3] = "frog";

    document.getElementById("Array").innerHTML = animals[2];
}

//This function creates an object, changes the value of one of the properties,
//adds another property and value, and displays a sentence using those values
function constant_function() {
const person = {name:"Bob", gender:"male", race:"white"};
person.name = "Frank";
person.height = "150cm"
document.getElementById("Constant").innerHTML = "My name is " + 
person.name + " and I am " + person.height + ".";
}

//This function demonstrates that a variable declared with the let keyword
//has block scope, while the var keyword does not
function letKeyword() {
var z = 12;
document.write(z);
{
    let z = 200;
    document.write("<br>" + z);
}
document.write("<br>" + z)
}

//This function utilizes the return keyword
function returnFunction() {
    return 10;
}


//This function creates and object with properties and a method
function humanFunc() {
let human = {
    name: "Carson",
    gender: "male",
    race: "white",
    job: "Software Developer",
//This method utilizes the this keyword to point its own properties
    description: function() {
        return "I am " + this.name + ", a " + this.gender + " " + 
        this.race + " " + this.job + "."
    }
}
//Here the method is called and returns a message
document.getElementById("human").innerHTML = human.description();
}