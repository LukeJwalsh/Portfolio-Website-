document.addEventListener("DOMContentLoaded", () => {
    const contactNav = document.getElementById("nav-contact");
    const homeNav = document.getElementById("nav-home");
    const projectsNav = document.getElementById("nav-projects");

    const homeView = document.getElementById("home-view");
    const contactView = document.getElementById("contact-view");

    contactNav.addEventListener("click", (event) => {
        event.preventDefault();
        homeView.style.display = "none";
        contactView.style.display = "block";
        projectsNav.style.display = "none"; // Hide the projects icon
    });

    homeNav.addEventListener("click", (event) => {
        event.preventDefault();
        homeView.style.display = "block";
        contactView.style.display = "none";
        projectsNav.style.display = "block"; // Show the projects icon
        window.scrollTo(0, 0);
    });
});
