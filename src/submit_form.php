<?php
// Check if the form data has been submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    // Validate form data (you can add more validation if needed)
    if (!empty($name) && !empty($email) && !empty($message)) {
        // Write the form data to a file (you can store it in a database instead)
        $file = fopen("form_data.txt", "a");
        fwrite($file, "Name: $name, Email: $email, Message: $message\n");
        fclose($file);
        
        // Send a success response
        echo json_encode(["success" => true]);
    } else {
        // Send an error response if any of the fields are empty
        echo json_encode(["error" => "All fields are required"]);
    }
} else {
    // Send an error response if the request method is not POST
    echo json_encode(["error" => "Invalid request method"]);
}
?>
