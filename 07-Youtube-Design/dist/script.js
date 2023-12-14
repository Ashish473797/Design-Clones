const themeToggler = document.querySelector("#themeToggler");
const body = document.querySelector("body");


themeToggler.addEventListener("click", ()=>{
    body.classList.toggle("dark");
})