//This function takes the inputted number and every 1000 miliseconds
//decrements that number and displays it until it reaches -1 
//at which point it gives an alert
function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

var slideIndex = 1;
showSlides(slideIndex);

//Changes display to either the next or previous slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//Changes display to the slide corresponding to the dot
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//This function makes an index of your slides and the dots
//It then displays the correct slide as well as the corresponding dot
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
