function validateForm()  {
   var u = document.getElementById("fname").value;
   var p = document.getElementById("password").value;

   if(u== "") {
       alert("Please enter your Username");
       return false;
   }
   if(p == "") {
       alert("Please enter you Password");
       return false;
   }

   alert("Form filled correctly! Sending to the server...")

   return true;
}