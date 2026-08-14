/* =====================================================
   LOADER
===================================================== */

const loader = document.getElementById("loader");
const loaderNumber = document.getElementById("loaderNumber");
const loaderBar = document.getElementById("loaderBar");

let progress = 0;

const loading = setInterval(() => {

    progress += Math.floor(Math.random() * 10) + 5;

    if (progress >= 100) {

        progress = 100;

        clearInterval(loading);

        loaderNumber.textContent = "100";

        loaderBar.style.width = "100%";

        setTimeout(() => {

            loader.classList.add("hide");

        }, 400);

    } else {

        loaderNumber.textContent = String(progress).padStart(2, "0");

        loaderBar.style.width = `${progress}%`;

    }

}, 100);


/* =====================================================
   NAVBAR
===================================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const mobileMenu =
    document.getElementById("mobileMenu");

const mobileLinks =
    document.querySelectorAll(".mobile-menu a");


menuToggle.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

    document.body.classList.toggle("menu-open");

});


mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        document.body.classList.remove("menu-open");

    });

});


/* =====================================================
   REVEAL ANIMATION
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    observer.observe(element);

});


/* =====================================================
   CURSOR
===================================================== */

const cursor =
    document.querySelector(".cursor");

const cursorRing =
    document.querySelector(".cursor-ring");

let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;


document.addEventListener("mousemove", event => {

    mouseX = event.clientX;
    mouseY = event.clientY;

    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;

});


function animateCursor() {

    ringX += (mouseX - ringX) * 0.12;

    ringY += (mouseY - ringY) * 0.12;

    cursorRing.style.left = `${ringX}px`;
    cursorRing.style.top = `${ringY}px`;

    requestAnimationFrame(animateCursor);

}

animateCursor();


/* =====================================================
   CURSOR HOVER
===================================================== */

const interactive =
    document.querySelectorAll(
        "a, button, .skill-card, .experience-item, .photo-card"
    );


interactive.forEach(element => {

    element.addEventListener("mouseenter", () => {

        document.body.classList.add("cursor-hover");

    });

    element.addEventListener("mouseleave", () => {

        document.body.classList.remove("cursor-hover");

    });

});


/* =====================================================
   HERO IMAGE PARALLAX
===================================================== */

const heroVisual =
    document.querySelector(".hero-visual");

if (
    heroVisual &&
    window.innerWidth > 700
) {

    heroVisual.addEventListener(
        "mousemove",
        event => {

            const rect =
                heroVisual.getBoundingClientRect();

            const x =
                (event.clientX - rect.left)
                / rect.width
                - .5;

            const y =
                (event.clientY - rect.top)
                / rect.height
                - .5;

            const photo =
                heroVisual.querySelector(".photo-card");

            const orbit =
                heroVisual.querySelector(".orbit");

            photo.style.transform =
                `translate(${x * 10}px, ${y * 10}px)`;

            orbit.style.transform =
                `translate(${x * -16}px, ${y * -16}px)`;

        }
    );


    heroVisual.addEventListener(
        "mouseleave",
        () => {

            const photo =
                heroVisual.querySelector(".photo-card");

            const orbit =
                heroVisual.querySelector(".orbit");

            photo.style.transform =
                "translate(0,0)";

            orbit.style.transform =
                "translate(0,0)";

        }
    );

}


/* =====================================================
   SMOOTH ANCHOR
===================================================== */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(link => {

    link.addEventListener(
        "click",
        event => {

            const targetID =
                link.getAttribute("href");

            const target =
                document.querySelector(targetID);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

});


/* =====================================================
   BACK TO TOP
===================================================== */

const backTop =
    document.getElementById("backTop");

backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});