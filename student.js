document.getElementById("studentForm").addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;
let password = document.getElementById("password").value;

if(name=="" || email=="" || phone=="" || password==""){
alert("Please fill all fields");
return;
}

/* Email format validation */

let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!email.match(emailPattern)){
alert("Please enter a valid email format (Example: student@gmail.com)");
return;
}

let student={
name:name,
email:email,
phone:phone
};

localStorage.setItem("student",JSON.stringify(student));

alert("Registration Successful");

});
