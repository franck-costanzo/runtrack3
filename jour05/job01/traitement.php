<?php 
include_once('Model/User.php');

$email = User::getEmails();
$emailJSON = json_encode($email);

echo $emailJSON;