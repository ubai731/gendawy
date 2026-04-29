<?php
require_once "session.php";

$_SESSION["login"] = false;

ini_set('display_errors', 1);
error_reporting(E_ALL);

require_once __DIR__ . "/db.php";

// استلام البيانات
$username = trim($_POST['username'] ?? '');
$email    = trim($_POST['email'] ?? '');
$password = $_POST['password'] ?? '';

// تحقق من الإدخال
if (empty($username) || empty($email) || empty($password)) {
    die("No Enough Info");
}

// البحث باستخدام username + email
$stmt = $conn->prepare("
    SELECT id, name, email, password 
    FROM users 
    WHERE name = ? AND email = ?
");

if (!$stmt) {
    die("PREPARE FAILED");
}

$stmt->bind_param("ss", $username, $email);
$stmt->execute();

$result = $stmt->get_result();

// التحقق
if ($result->num_rows > 0) {

    $user = $result->fetch_assoc();

    // التحقق من الباسورد
    if (password_verify($password, $user['password'])) {

        echo "Login Success 👋 Hi " . $user['name'];
        $_SESSION["login"] = true ;
    } else {
        echo "Wrong Password ❌";
    }

} else {
    echo "User Not Found ❌";
}

$_SESSION["username"] = $username;

$stmt->close();
$conn->close();
?>