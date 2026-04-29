<?php
require_once "session.php";

if (!isset($_SESSION["login"]) || $_SESSION["login"] == false) {
    echo "false";
} else {
    echo "true";
}
?>