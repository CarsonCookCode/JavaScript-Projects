function myDictionary () {
//Here is the dictionary containing KVPs
    var Car = {
        Make: "Nissan",
        Model: "Versa",
        Color: "white",
        Year: "2017"
    };
//Here the KVP Car.Color is deleted
    delete Car.Color;
//Here the value of Car.Color is put on the page, however it was deleted and
//no longer exists.
    document.getElementById("Dictionary").innerHTML = Car.Color;
}