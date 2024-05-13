<?php
session_start();

// Check if user is not logged in, redirect to login page
if (!isset($_SESSION['user_id'])) {
    header("Location: login.html");
    exit;
}

// Get first name from session
$firstName = $_SESSION['first_name'];

// Prepare the URL with first name as a parameter
$redirectURL = "signedIndex.html?firstName=" . urlencode($firstName);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <style>
        .dialog-overlay {
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 9999;
        }
        .dialog-box {
            background-color: #fff;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="dialog-overlay">
        <div class="dialog-box">
            <h1>Welcome, <?php echo $firstName; ?>!</h1>
            <p>This is your dashboard. You are logged in as <?php echo $firstName; ?>.</p>
            <button onclick="closeDialog()">Close</button>
        </div>
    </div>
    <script>
        function closeDialog() {
            // Redirect to signedIndex.html with first name as a parameter
            window.location.href = "<?php echo $redirectURL; ?>";
        }
    </script>
</body>
</html>
