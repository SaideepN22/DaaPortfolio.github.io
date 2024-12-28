// Dynamic year update
const yearSpan = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Smooth scrolling for navigation
const navLinks = document.querySelectorAll("header ul li a");
navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").slice(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 60,
            behavior: "smooth",
        });
    });
});

// External link alerts
const externalLinks = document.querySelectorAll(".about-section ul li button");
externalLinks.forEach(button => {
    button.addEventListener("click", function () {
        alert("You are leaving the website. The link will open in a new tab.");
    });
});
