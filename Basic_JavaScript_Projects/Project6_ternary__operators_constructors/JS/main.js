//This is the example function with a ternary operation determining if 
//a rider is tall enough or not and then displaying their eligibility.
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//This is a function that determines with a ternary operation whether
//someone is old enough to vote based on their input.
function Age_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough":"You are eligible";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

//This is the example constructor.
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
//Here new objects are created using the constructor.
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

//Here is a constructor.
function Person(Race, Age, Gender) {
    this.pAge = Age;
    this.pRace = Race;
    this.pGender = Gender;
}

//This is the creation of a new object.
var Carson = new Person("white", 24, "male");

//This displays the information from the new object.
function carsonFunction() {
    document.getElementById("New_and_This").innerHTML =
    "Carson is a " + Carson.pAge + " year-old " + Carson.pRace + " " + Carson.pGender + "."
}

//This function contains a nested function which refers to data
//from the function in which it is nested.
function testFunction() {
    document.getElementById("Nested_Function").innerHTML = anotherFunc();
    function anotherFunc() {
        var startingNumber = 5;
        function nestedFunc() {startingNumber -= 2};
        nestedFunc();
        return startingNumber;
    }
}