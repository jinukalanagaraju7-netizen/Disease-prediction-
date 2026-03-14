window.onload=function(){

setTimeout(function(){

document.getElementById("doors").classList.add("open");

},1000);

}

function register(){

let user=document.getElementById("newuser").value;
let pass=document.getElementById("newpass").value;

localStorage.setItem("username",user);
localStorage.setItem("password",pass);

alert("Account Created");

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
