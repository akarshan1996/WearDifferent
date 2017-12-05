<?php
/**
 * Created by PhpStorm.
 * User: cube
 * Date: 16/10/17
 * Time: 3:47 AM
 */

$error = 'Could not connect to the database';

$mysqli_host = 'localhost';
$mysqli_user = 'root';
$mysqli_password = '';
$mysqli_database = 'shopping_pwa';
$conn = NULL;
if($conn = mysqli_connect($mysqli_host,$mysqli_user,$mysqli_password,$mysqli_database)){
    //echo 'Connected';
}else
    die($error);
?>