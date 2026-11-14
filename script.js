
// Display a welcome message in the browser console
console.log("Welcome to Aparna's Portfolio!");

// Highlight navigation link when clicked
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});

// Reveal sections when scrolling
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(section => {
    observer.observe(section);
});



function copyEmail(event) {
    event.preventDefault();

    const email = "aparna0630@gmail.com";
    const emailText = document.getElementById("emailText");

    navigator.clipboard.writeText(email)
        .then(() => {
            emailText.textContent = "Email copied successfully! ✓";

            setTimeout(() => {
                emailText.textContent = "Click to copy email";
            }, 2000);
        })
        .catch(() => {
            emailText.textContent = "Unable to copy email";
        });
}
