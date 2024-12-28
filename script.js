// Dynamic year update
const yearSpan = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Smooth scrolling for navigation
const navLinks = document.querySelectorAll("header ul li a");
navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor link behavior
        const targetId = this.getAttribute("href").slice(1); // Get the target section ID
        const targetElement = document.getElementById(targetId);

        // Scroll to the target element with a smooth animation
        window.scrollTo({
            top: targetElement.offsetTop - 60, // Adjust offset if needed for header height
            behavior: "smooth", // Enable smooth scrolling
        });
    });
});
