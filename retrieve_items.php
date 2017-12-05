<?php
/**
 * Created by PhpStorm.
 * User: cube
 * Date: 5/12/17
 * Time: 8:18 PM
 */

include_once 'connect.inc.php';

$query = "select * from cart";

$query_run = mysqli_query($conn,$query);
$query_run_num = mysqli_num_rows($query_run);

echo $query_run_num;

?>