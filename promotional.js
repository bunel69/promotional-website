// smooth scroll
document.querySelector(".contact-btn").addEventListener("click",function(){

document.querySelector(".contact").scrollIntoView({
behavior:"smooth"
})

})


// header fade when scroll
window.addEventListener("scroll",function(){

let header = document.getElementById("header")

if(window.scrollY > 50){
header.style.opacity="0"
}else{
header.style.opacity="1"
}

})


// form validation + popup
function sendMessage(){

let name=document.getElementById("name").value
let email=document.getElementById("email").value
let message=document.getElementById("message").value

if(name=="" || email=="" || message==""){
alert("Please fill out all fields.")
return
}

document.getElementById("popup").style.display="flex"

document.getElementById("name").value=""
document.getElementById("email").value=""
document.getElementById("message").value=""

}

function closePopup(){
document.getElementById("popup").style.display="none"
}