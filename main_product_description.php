<?php
/**
 * Created by PhpStorm.
 * User: cube
 * Date: 2/12/17
 * Time: 12:40 AM
 */

include 'connect.inc.php';

header("Content-Type: application/json; charset=UTF-8");
$id_table = json_decode($_GET['id'],false);
//$table_name = json_decode($_GET['table'],false);
$table_name = "product_details";

$rows = array();
$query = "select * from $table_name WHERE id=".$id_table->id.";";
//$query = "select * from product_details WHERE id=".$id_table->id.";";
if($query){
    $query_run = mysqli_query($conn,$query);
    $rows=mysqli_fetch_all($query_run);
    echo(json_encode($rows));
}
else{
    echo "not running";
}


?>