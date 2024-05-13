<?php
// submit.php

// Database connection
$mysqli = new mysqli("localhost", "root", "", "messages_db");

// Check connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Sanitize form inputs
$firstName = $mysqli->real_escape_string($_POST['firstName']);
$lastName = $mysqli->real_escape_string($_POST['lastName']);
$email = $mysqli->real_escape_string($_POST['email']);
$service = $mysqli->real_escape_string($_POST['service']);
$message = $mysqli->real_escape_string($_POST['message']);

// Insert into database
$sql = "INSERT INTO messages (firstName, lastName, email, service, message) VALUES ('$firstName', '$lastName', '$email', '$service', '$message')";
if ($mysqli->query($sql) === TRUE) {
    // Success response
    $response = array(
        "success" => true,
        "message" => "Message sent successfully!",
        "firstName" => $firstName,
        "email" => $email
    );
} else {
    // Error response
    $response = array(
        "success" => false,
        "message" => "Error: Message not sent.",
        "firstName" => $firstName,
        "email" => $email
    );
}

// Return JSON response
echo json_encode($response);

$mysqli->close();
?>
