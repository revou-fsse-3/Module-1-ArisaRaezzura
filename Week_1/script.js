function submit() {
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const book = document.getElementById("book").value;
    const message = document.getElementById("message").value;
    if (email == "" || name == "" || book == "" || message == "") {
        document.getElementById("error").innerHTML = "Please finish up the form before submitting.";
    }
    else {
        document.getElementById("error").innerHTML = "From submitted succesfully! Congratulation " + name + "!";
    }
}