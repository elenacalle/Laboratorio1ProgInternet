<?php

$email = $_POST['email'];
$password = $_POST['password'];

// Usuario de prueba
if($email == "elenitamar327@gmail.com" && $password == "1234"){
    echo "ok";
} else {
    echo "error";
}

?>