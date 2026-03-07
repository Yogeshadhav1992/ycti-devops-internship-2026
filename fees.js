let paymentMethod="";

function setFees(){

let course=document.getElementById("course").value;
let amount=document.getElementById("amount");

if(course==="java"){
amount.value=25000;
}

else if(course==="python"){
amount.value=22000;
}

else if(course==="devops"){
amount.value=30000;
}

else if(course==="uiux"){
amount.value=20000;
}

else{
amount.value="";
}

}

function selectMethod(method){

paymentMethod=method;

document.getElementById("upiBtn").classList.remove("active");
document.getElementById("cardBtn").classList.remove("active");

if(method==="upi"){
document.getElementById("upiBtn").classList.add("active");
document.getElementById("cardSection").style.display="none";
}

if(method==="card"){
document.getElementById("cardBtn").classList.add("active");
document.getElementById("cardSection").style.display="block";
}

}

function payFees(){

let name=document.getElementById("name").value;
let course=document.getElementById("course").value;
let amount=document.getElementById("amount").value;

if(name=="" || course==""){
alert("Please fill all details");
return;
}

if(paymentMethod==""){
alert("Select Payment Method");
return;
}

alert("Payment Successful\nCourse: "+course+"\nAmount: ₹"+amount);

}
