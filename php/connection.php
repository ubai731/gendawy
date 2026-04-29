<?php
require_once "session.php";

$_SESSION["login"] = false;

require_once __DIR__ . "/db.php";

$name = $_POST['username'] ?? '';
$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

if (empty($name) || empty($email) || empty($password)) {
    die("No Enough Info");
}

// تحقق إذا الإيميل موجود
$stmt = $conn->prepare("SELECT id FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    die("Email Already Exists ❌");
}

// تشفير الباسورد
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// إدخال البيانات
$stmt = $conn->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $email, $hashedPassword);

if ($stmt->execute()) {
    echo "Account Created ✅";
    $_SESSION["login"] = true ;
} else {
    echo "Error ❌";
}

$_SESSION["username"] = $name;

$stmt->close();
$conn->close();
?>