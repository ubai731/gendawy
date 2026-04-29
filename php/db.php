<?php
$conn = new mysqli("localhost", "root", "P@ssw0rd", "learn");

if ($conn->connect_error) {
    die("DB Connection Failed: " . $conn->connect_error);
}

$conn->set_charset("utf8mb4");
?>