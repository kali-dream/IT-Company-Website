document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(contactForm);

        // Send form data to server using fetch API
        fetch("submit.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Display success dialog box
                showDialog("Message sent successfully!", data);
            } else {
                // Display error dialog box
                showDialog("Error: Message not sent.", data);
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });

    function showDialog(message, data) {
        const dialogContent = `
            <p>${message}</p>
            <p>First Name: ${data.firstName}</p>
            <p>Last Name: ${data.lastName}</p>
            <p>Email: ${data.email}</p>
            <p>Service: ${data.service}</p>
            <p>Message: ${data.message}</p>
        `;

        const dialogContentElem = document.getElementById("dialogContent");
        dialogContentElem.innerHTML = dialogContent;

        const dialogBox = document.getElementById("dialogBox");
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
