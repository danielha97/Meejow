const toggleBtn = document.querySelector(".navigation-burger");
const closeBtn = document.querySelector(".cross");
const sideBar = document.querySelector(".side-bar");

toggleBtn.addEventListener("click", ()=>{
    sideBar.classList.toggle("show-side");
})

closeBtn.addEventListener("click", ()=>{
    sideBar.classList.remove("show-side");
})
