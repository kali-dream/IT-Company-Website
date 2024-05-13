document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const firstName = document.getElementById("firstName");
        const lastName = document.getElementById("lastName");
        const email = document.getElementById("email");
        const service = document.getElementById("service");
        const message = document.getElementById("message");

        // Check if form fields are not null
        if (firstName && lastName && email && service && message) {
            // Trim values
            const firstNameValue = firstName.value.trim();
            const lastNameValue = lastName.value.trim();
            const emailValue = email.value.trim();
            const serviceValue = service.value.trim();
            const messageValue = message.value.trim();

            // Display the dialog box with the submitted message
            showDialog(firstNameValue, lastNameValue, emailValue, serviceValue, messageValue);
        } else {
            alert("Form fields are not found. Please check your HTML code.");
        }
    });

    function showDialog(firstName, lastName, email, service, message) {
        const dialogContent = `
            <p>Thank you for your message, ${firstName} ${lastName}!</p>
            <p>We have received your message:</p>
            <ul>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Service:</strong> ${service}</li>
                <li><strong>Message:</strong> ${message}</li>
            </ul>
            <p>We will get back to you as soon as possible.</p>
        `;

        const dialogBox = document.getElementById("dialogBox");
        const dialogContentElem = document.getElementById("dialogContent");

        dialogContentElem.innerHTML = dialogContent;
        dialogBox.style.display = "block";
    }

    // Close the dialog box when clicking outside of it
    window.addEventListener("click", function(event) {
        const dialogBox = document.getElementById("dialogBox");
        if (event.target == dialogBox) {
            dialogBox.style.display = "none";
        }
    });
});
