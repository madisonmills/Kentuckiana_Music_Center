// Form Validation


function validateForm() {
    var x = document.querySelector("#name").value;
    if (x === "") {
        alert("Name must be filled out");
        return false;
    }

    var y = document.querySelector("#email").value;
    if (y === "") {
        alert("Email must be filled out");
        return false;
    }
}

// Image Carousel

var x = 1;
function slideshow() {
    if (x == 1) {
        document.querySelector("#pic-one").src="images/piano.jpg";
        document.querySelector(".numbertext").innerHTML = x + "/ 3";
        x++
    }
    else if (x == 2)
    {
        document.querySelector("#pic-one").src="images/cello.jpg";
        document.querySelector(".numbertext").innerHTML = x + "/ 3";
        x++;
    }
    else if (x == 3) {
        document.querySelector("#pic-one").src="images/violinlesson.jpg";
        document.querySelector(".numbertext").innerHTML = x + "/ 3";
        x = 1;
    }
}
var t = setInterval(slideshow, 3000);


