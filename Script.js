// YEAR
document.getElementById("year").textContent=new Date().getFullYear();

// THEME TOGGLE
const toggleBtn=document.getElementById("themeToggle");
toggleBtn.addEventListener("click",()=>{
document.body.classList.toggle("light");
toggleBtn.textContent=
document.body.classList.contains("light")
?"🌞":"🌙";
});

// SCROLL REVEAL
const reveals=document.querySelectorAll(".reveal");
function revealOnScroll(){
reveals.forEach(sec=>{
if(sec.getBoundingClientRect().top<window.innerHeight-100){
sec.classList.add("active");
}
});
}
window.addEventListener("scroll",revealOnScroll);
revealOnScroll();

// CONTACT FORM
const form=document.querySelector("form");
const status=document.getElementById("form-status");

form.addEventListener("submit",async(e)=>{
e.preventDefault();
const data=new FormData(form);
const res=await fetch(form.action,{
method:"POST",
body:data,
headers:{Accept:"application/json"}
});
if(res.ok){
status.textContent="Message sent successfully ";
form.reset();
}else{
status.textContent="Something went wrong ";
}
});

const text = "Pooja Praveen Gavade";
let index = 0;

function typeEffect(){
  if(index < text.length){
    document.getElementById("typing").textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect,80);
  }
}
typeEffect();


// GLOW CURSOR FOLLOW
// CURSOR GLOW FOLLOW (TEST)
const glow = document.getElementById("cursor-glow");

document.addEventListener("mousemove", (e)=>{
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});



