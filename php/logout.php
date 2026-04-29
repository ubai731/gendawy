<?php
require_once "session.php";

// امسح بيانات الجلسة
$_SESSION = [];

// احذف كوكي الجلسة
if (ini_get("session.use_cookies")) {
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000,
        $params["path"], 
        $params["domain"],
        $params["secure"], 
        $params["httponly"]
    );
}

// دمر الجلسة
session_destroy();

echo "done";
?>