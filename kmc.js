function validateForm() {
    var x = .form["myForm"]["name"].value;
    if (x === "") {
        alert("Name must be filled out");
        return false;
    }
}