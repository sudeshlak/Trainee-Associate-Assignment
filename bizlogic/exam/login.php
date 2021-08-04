<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

// POST DATA
$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->userName)
    && isset($data->passowrd)
    && !empty(trim($data->userName))
    && !empty(trim($data->passowrd))
) {
    $username = mysqli_real_escape_string($db_conn, trim($data->userName));
    $passowrd = mysqli_real_escape_string($db_conn, trim($data->passowrd));
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        $findUser = mysqli_query($db_conn, "SELECT ALL FROM `users` WHERE `username`='$username' AND `password_hash`='$hashedPassword'");
        if ($findUser) {
            echo json_encode(["success" => 1, "massage" => "You Have Successfully Logged in", "user" => $findUser]);
        } else {
            echo json_encode(["success" => 0, "massage" => "User Name or Password Incorrect!"]);
        }

}