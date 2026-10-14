const words = [
    "Learning Experiences.",
    "Storyline Courses.",
    "Rise Courses.",
    "Interactive Simulations.",
    "Training Videos.",
    "Product Walkthroughs.",
    "Animated Videos."
    
];

const changingText = document.getElementById("changing-text");

if (changingText) {

    let current = 0;

    setInterval(() => {

        changingText.style.opacity = "0";
changingText.style.transform = "translateY(15px)";

        setTimeout(() => {

            current = (current + 1) % words.length;

            changingText.textContent = words[current];
            const dots = document.querySelectorAll(".hero-indicator span");

dots.forEach(dot => {

    dot.classList.remove("active");

});

dots[current].classList.add("active");

            changingText.style.transform = "translateY(-15px)";

            setTimeout(() => {

           changingText.style.opacity = "1";
changingText.style.transform = "translateY(0)";     

            }, 60);

        }, 350);

    }, 2600);

}
