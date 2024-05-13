<?php
// Database connection parameters
$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$database = "signup"; 

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Initialize variable to store success message
$successMessage = "";

// If form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data and sanitize
    $firstName = mysqli_real_escape_string($conn, $_POST['firstName']);
    $lastName = mysqli_real_escape_string($conn, $_POST['lastName']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);

    // Prepare an SQL statement for inserting data
    $sql = "INSERT INTO users (first_name, last_name, email, password) VALUES ('$firstName', '$lastName', '$email', '$password')";

    // Execute the SQL statement
    if ($conn->query($sql) === TRUE) {
        // Record inserted successfully
        $successMessage = "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close the database connection
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Top Navigation Example</title>
    <link rel="stylesheet" href="signup.css">
    <script>
        // Function to display success dialog
        function showSuccessDialog(message) {
            // Display dialog box
            alert(message);

            // Redirect to signedIndex.html after 2 seconds
            setTimeout(function() {
                window.location.href = "login.html";
            }, 2000);
        }
    </script>
</head>
<body>
    <header class="site-header">
        <!-- Header content -->
    </header>
    
    <main>
        <section id="signup" class="full-viewport-section">
            <div class="container">
                <form id="signupForm" action="signup.php" method="POST">
                    <!-- Form fields -->
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </section>
    </main>

    <footer>
        <!-- Footer content -->
    </footer>

    <!-- Display success dialog if $successMessage is not empty -->
    <?php if (!empty($successMessage)): ?>
        <script>
            showSuccessDialog("<?php echo $successMessage; ?>");
        </script>
    <?php endif; ?>
</body>
</html>
