// Filename: index.js

document.addEventListener("DOMContentLoaded", function() {
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(function(menuItem) {
        menuItem.addEventListener("click", function() {
            let sectionId;
            switch (menuItem.innerText.toLowerCase()) {
                case "home":
                    sectionId = "home";
                    break;
                case "about":
                    sectionId = "about";
                    break;
                case "service":
                    sectionId = "services";
                    break;
                case "pricing":
                    sectionId = "pricing"; // Assuming there's a pricing section
                    break;
                default:
                    sectionId = "home"; // Default to home if no matching section found
            }

            scrollToSection(sectionId);
        });
    });

    const getInTouchButton = document.querySelector(".contact-button");
    getInTouchButton.addEventListener("click", function() {
        window.location.href = "index2.html";
    });
});
