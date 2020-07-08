function validateForm() {
    var x = .form["myForm"]["name"].value;
    if (x === "") {
        alert("Name must be filled out");
        return false;
    }
}


var x = 1;
function slideshow() {
    if (x == 1) {
        document.querySelector("#pic-one").src="images/piano.jpg";
        x++
    }
    else if (x == 2)
    {
        document.querySelector("#pic-one").src="images/piano.jpg";
        x--;
    }
}
var t = setInterval(slideshow, 3000);