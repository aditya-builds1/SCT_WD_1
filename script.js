const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;
            const target = +counter.getAttribute("data-target");

            let count = 0;

            const updateCounter = () => {

                const increment = target / 100;

                if(count < target){
                    count += increment;
                    counter.innerText = Math.ceil(count);
                    setTimeout(updateCounter, 20);
                }else{
                    counter.innerText = target + "+";
                }
            };

            updateCounter();

            observer.unobserve(counter);
        }
    });

});

counters.forEach(counter => {
    observer.observe(counter);
});

const fadeElements = document.querySelectorAll(".fade-in");

const fadeObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

fadeElements.forEach(element=>{
    fadeObserver.observe(element);
});
function openPopup(){
    document.getElementById("popup").style.display = "flex";
}

function closePopup(){
    document.getElementById("popup").style.display = "none";
}
function submitForm(){

    alert("Your Free Trial Request Submitted Successfully!");

    closePopup();
}
const topBtn = document.getElementById("topBtn");

window.onscroll = function() {

    if(document.documentElement.scrollTop > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

};

function scrollToTop(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}
function toggleMenu(){
    document.getElementById("navLinks").classList.toggle("active");
}
window.addEventListener("load", function(){

    setTimeout(function(){

        document.getElementById("loader").style.display = "none";

    }, 2000);

});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});