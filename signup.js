document.addEventListener("DOMContentLoaded", function() {
    // Function to scroll to a specific section
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    // Function to handle menu item clicks
    const menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach(function(menuItem) {
        menuItem.addEventListener("click", function() {
            let sectionId;
            switch (menuItem.innerText.toLowerCase()) {
                case "home":
                    // Navigate to index.html instead of scrolling
                    window.location.href = "index.html";
                    break;
                    case "aboutMenuItem":
                    sectionId = "About";
                    break;
                case "servicesMenuItem":
                    sectionId = "services";
                    break;
                case "pricingMenuItem":
                    sectionId = "pricing"; // Assuming there's a pricing section
                    break;
                default:
                    sectionId = "home"; // Default to home if no matching section found
            }

            // Scroll to the section if it's not the "Home" menu item
            if (sectionId !== "home") {
                scrollToSection(sectionId);
            }
        });
    });

    // Function to handle "Get In Touch" button click
    const getInTouchButton = document.querySelector(".contact-button");
    if (getInTouchButton) {
        getInTouchButton.addEventListener("click", function() {
            window.location.href = "index2.html";
        });
    }

    // Function to handle form submission and show success dialog
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form submission

            // Your AJAX request or PHP form submission code goes here

            // For demonstration, showing the dialog immediately
            document.getElementById("successDialog").style.display = "block";
        });
    }

    // Function to handle "OK" button click in success dialog
    const okButton = document.getElementById("okButton");
    if (okButton) {
        okButton.addEventListener("click", function() {
            document.getElementById("successDialog").style.display = "none";
            window.location.href = "login.html"; // Navigate to signedIndex.html
        });
    }

    // JavaScript to extract first name from URL and display in navbar
    const urlParams = new URLSearchParams(window.location.search);
    const firstName = urlParams.get('firstName');

    // Update the navbar with the first name
    const firstNameElement = document.querySelector(".navbar-firstname");
    if (firstNameElement && firstName) {
        firstNameElement.textContent = firstName;
    } else {
        // If first name is not found in URL, try to fetch it from the database
        fetchFirstNameFromDatabase();
    }
});

// Function to fetch first name from database
function fetchFirstNameFromDatabase() {
    // Make an AJAX request to fetch the first name from the database
    fetch('getFirstName.php')
        .then(response => response.text())
        .then(firstName => {
            const firstNameElement = document.querySelector(".navbar-firstname");
            if (firstNameElement && firstName) {
                firstNameElement.textContent = firstName;
            }
        })
        .catch(error => console.error('Error:', error));
}
