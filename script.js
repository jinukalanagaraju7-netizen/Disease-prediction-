function registerUser(){

let user=document.getElementById("newuser").value;
let pass=document.getElementById("newpass").value;

localStorage.setItem("username",use ki r);
localStorage.setItem("password",pass);

alert("Account Created Successfully");

window.location="index.html";

}

function login(){

let user=document.getElementById("username").value;
let pass=document.getElementById("password").value;

let savedUser=localStorage.getItem("username");
let savedPass=localStorage.getItem("password");

if(user===savedUser && pass===savedPass){

window.location="dashboard.html";

}
else{

alert("Invalid Login");

}

}

function predict(symptom){

let disease="";

if(symptom=="fever") disease="Viral Fever";
if(symptom=="cough") disease="Common Cold";
if(symptom=="headache") disease="Migraine";
if(symptom=="vomiting") disease="Food Poisoning";
if(symptom=="cold") disease="Flu";
if(symptom=="fatigue") disease="Anemia";
if(symptom=="rash") disease="Skin Allergy";
if(symptom=="dizziness") disease="Low BP";
if(symptom=="chest") disease="Heart Problem";
if(symptom=="stomach") disease="Gastric Problem";

document.getElementById("resultBox").innerHTML=
"Possible Disease: "+disease;

}
