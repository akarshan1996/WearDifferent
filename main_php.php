<?php
/**
 * Created by PhpStorm.
 * User: cube
 * Date: 23/11/17
 * Time: 11:15 PM
 */

include 'connect.inc.php';

header("Content-Type: application/json; charset=UTF-8");
$obj = json_decode($_GET['x'],false);

$rows = array();
$query = "select * from ".$obj->table.";";
//$query = "select * from product_details";

$query_run = mysqli_query($conn,$query);
$rows=mysqli_fetch_all($query_run);

echo(json_encode($rows));

?>

