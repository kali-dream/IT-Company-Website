<?php
// Database connection parameters
$servername = "localhost"; // Change this if your MySQL server is hosted elsewhere
$username = "root"; // Your MySQL username (default for XAMPP)
$password = ""; // Your MySQL password (default for XAMPP)
$database = "signup"; // Your MySQL database name

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and execute SQL statement to fetch first name from database (assuming you have a users table)
$sql = "SELECT first_name FROM users LIMIT 1"; 
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Output data of the first row
    $row = $result->fetch_assoc();
    echo $row["first_name"];
} else {
    echo "No results found";
}

// Close the database connection
$conn->close();
?>
