function validateForm()  {
    var firstname = document.getElementById("fname").value;
    var password = document.getElementById("password").value;
    var lastname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;

    if(firstname== "") {
        alert("Please enter your Firstname");
        return false;
    }
    if(lastname== "") {
        alert("Please enter your Lastname");
        return false;
    }
    if(email== "") {
        alert("Please enter your Email");
        return false;
    }
    if(age== "") {
        alert("Please enter your Age");
        return false;
    }
    if(password == "") {
        alert("Please enter you Password");
        return false;
    }

    alert("Form filled correctly! Sending to the server...")

    return true;
}