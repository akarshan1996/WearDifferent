<?php
/**
 * Created by PhpStorm.
 * User: cube
 * Date: 5/12/17
 * Time: 9:00 PM
 */

include_once 'connect.inc.php';

$cid = $_GET['cid'];

$query = "DELETE FROM cart WHERE cid = '".$cid."';";
$query_run = mysqli_query($conn,$query);

?>