<?php
session_start();

if (!empty($_SESSION["username"]) && is_string($_SESSION["username"])) {
    echo $_SESSION["username"];
} else {
    echo "";
}