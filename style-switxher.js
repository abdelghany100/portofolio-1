// ----------------------toggle style switcher-------------------
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click",()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})

// hide style switcher on scroll
window.addEventListener("scroll", ()=>{
    if(    document.querySelector(".style-switcher").classList.contains("open"))
       {
        document.querySelector(".style-switcher").classList.remove("open")
       }
})

// ---------------------- theme color-------------------
const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){

    alternateStyle.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }

    })
}


// ---------------------- theme lighat and dark-------------------
const darkNight = document.querySelector(".day-night");
darkNight.addEventListener("click",() =>{
    darkNight.querySelector("i").classList.toggle("fa-sun");
    darkNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");



})
window.addEventListener("load", () =>{
    if(document.body.classList.contains("dark")){
        darkNight.querySelector("i").classList.add("fa-sun");
    }
    else{
        darkNight.querySelector("i").classList.add("fa-moon");

    }
})