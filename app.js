
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
        // else {
        //     entry.target.classList.remove('show');
        //   }
    })
})

const hiddenElements = document.querySelectorAll(".hide");
hiddenElements.forEach((el) => observer.observe(el));



// Smooth Scroll
document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.right a, .sub-menu a, .option');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            var targetId = this.getAttribute('href');
            var targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});


// Toggle menu
let subMenu = document.querySelector(".sub-menu");

window.addEventListener("click", (e)=>{
    if(e.target.closest(".toggle")){
        subMenu.style.display = "flex";
    } else {
        subMenu.style.display = "none";
    }
})
