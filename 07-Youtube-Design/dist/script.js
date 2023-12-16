const themeToggler = document.querySelector("#themeToggler");
const body = document.querySelector("body");


themeToggler.addEventListener("click", ()=>{
    body.classList.toggle("dark");
    if(themeToggler.innerText == "Light Mode"){
        themeToggler.innerText = "Dark Mode"
    }
    else{
        themeToggler.innerText = "Light Mode";
    }
})