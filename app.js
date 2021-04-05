const menuImages = document.querySelectorAll(".menu-room img");
const crosses = document.querySelectorAll(".x"); 

menuImages.forEach((menuImg)=>{
    menuImg.addEventListener("click", (e)=>{
        let menu = e.currentTarget.parentElement.nextElementSibling;
        menu.classList.add("show")
        event.preventDefault();
    });
})

crosses.forEach((cross)=>{
    cross.addEventListener("click",(e)=>{
    let cancel = e.currentTarget.parentElement.parentElement;
    cancel.classList.remove("show")
    event.preventDefault();
    })
})


const toggleBtn = document.querySelector(".navigation-burger");
const closeBtn = document.querySelector(".cross");
const sideBar = document.querySelector(".side-bar");

toggleBtn.addEventListener("click", ()=>{
    sideBar.classList.toggle("show-side");
})

closeBtn.addEventListener("click", ()=>{
    sideBar.classList.remove("show-side");
})


let buttons = document.querySelectorAll(".qbutton");
let questions = document.querySelectorAll(".question-block");

buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        let show = e.currentTarget.parentElement.parentElement.parentElement;
        show.classList.toggle("show");
    });
})

const reviews = document.querySelectorAll(".review");
const left = document.querySelector(".left-btn");
const right = document.querySelector(".right-btn");

reviews.forEach((review, index)=>{
    review.style.left=`${100 * index}%`;
});

let tracker = 0;

left.addEventListener("click", ()=>{
    tracker--;
    rotate();
});

right.addEventListener("click", ()=>{
    tracker++;
    rotate();
});

function rotate(){
    if(tracker === reviews.length){
        tracker = 0;
    }

    if (tracker < 0){
        tracker = reviews.length - 1;
    }
    reviews.forEach((review)=>{
        review.style.transform = `translateX(-${tracker * 100}%)`;
    });
}



