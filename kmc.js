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
        document.querySelector("#pic-one").src="images/violinlesson.jpg";
        document.querySelector(".numbertext").innerHTML = x + " / 4";
        document.querySelector(".imagetext").innerHTML = "Violin";
    }
    else if (x == 2)
    {
        document.querySelector("#pic-one").src="images/viola.jpg";
        document.querySelector(".numbertext").innerHTML = x + " / 4";
        document.querySelector(".imagetext").innerHTML = "Viola";
    }
    else if (x == 3) {
        document.querySelector("#pic-one").src="images/cello.jpg";
        document.querySelector(".numbertext").innerHTML = x + " / 4";
        document.querySelector(".imagetext").innerHTML = "Cello";
    }
    else if (x == 4) {
        document.querySelector("#pic-one").src="images/upright.jpg";
        document.querySelector(".numbertext").innerHTML = x + " / 4";
        document.querySelector(".imagetext").innerHTML = "Bass";
    }
}



