// SELECT ELEMENTS
const menuIcon = document.getElementById("menuIcon");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");

// OPEN MENU
menuIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  overlay.classList.toggle("active");
});

// CLOSE WHEN CLICKING OUTSIDE
overlay.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
});

// NAV SCROLL EFFECT
const nav = document.querySelector(".nav_container");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// METRICS COUNTING
const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      counters.forEach(counter => {

        const target = +counter.dataset.target;

        let current = 0;

        const increment = target / 100;

        const updateCounter = () => {

          if(current < target){

            current += increment;

            counter.textContent = Math.ceil(current);

            requestAnimationFrame(updateCounter);

          }else{

            counter.textContent = target + "+";

          }

        };

        updateCounter();

      });

      observer.unobserve(entry.target);

    }

  });

}, {
  threshold: 0.4
});

observer.observe(document.querySelector(".metrics_section"));