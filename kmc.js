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

function slideshow(x) {
    if (x == 1) {
        document.querySelector("#pic-one").src="images/piano.jpg";
        document.querySelector(".numbertext").innerHTML = x + "/ 3";
    }
    else if (x == 2)
    {
        document.querySelector("#pic-one").src="images/cello.jpg";
        document.querySelector(".numbertext").innerHTML = x + "/ 3";
    }
    else if (x == 3) {
        document.querySelector("#pic-one").src="images/violinlesson.jpg";
        document.querySelector(".numbertext").innerHTML = x + "/ 3";
    }
}
var t = setInterval(slideshow, 3000);

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
//   }

//   function showSlides(n) {
//     var i;
//     var slides = document.querySelector(".myslides");
//     var dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {slideIndex = 1} 
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none"; 
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block"; 
//     dots[slideIndex-1].className += " active";
//   }


