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


function scrollToTop() {
    window.scrollTo(0, 0);
}

window.onload = scrollToTop;


document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.nav a');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            var targetId = this.getAttribute('href');

            // Scroll to the target section
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    var navToggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.nav');

    navToggle.addEventListener('click', function() {
        nav.classList.toggle('nav-active');
    });

});

let subMenu = document.querySelector(".sub-menu");

window.addEventListener("click", (e)=>{
    if(e.target.closest(".toggle")){
        subMenu.style.display = "flex";
    } else {
        subMenu.style.display = "none";
    }
})

