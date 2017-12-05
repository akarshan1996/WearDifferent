<?php
/**
 * Created by PhpStorm.
 * User: cube
 * Date: 5/12/17
 * Time: 5:53 PM
 */

include 'connect.inc.php';

header("Content-Type: application/json; charset=UTF-8");

$id_table = json_decode($_GET['id'],false);
$table_name = "product_details";

$rows = array();
$query = "select * from $table_name WHERE id=".$id_table->id.";";
//$query = "select * from product_details WHERE id='1'";

if($query) {
    $query_run = mysqli_query($conn, $query);
    //$rows = mysqli_fetch_all($query_run);

    $query_num = mysqli_fetch_assoc($query_run);

    //echo  $query_num[title] . ' '. $query_num[quantity] . ' '. $query_num[price].' ';

    $Title = $query_num[title];

    $Quantity = $query_num[quantity];

    $Price = $query_num[price];

    if (!empty($Title) && !empty($Quantity) && !empty($Price)) {

        //echo ' curr not empttyyyyyy ';

        $query = "INSERT INTO cart VALUES ('','" . mysqli_real_escape_string($conn, $Title) . "'
                        
                        ,'" . mysqli_real_escape_string($conn, $Quantity) . "','" . mysqli_real_escape_string($conn, $Price) . "')";

        global $conn;

        if ($query_run = mysqli_query($conn, $query)) {

        // echo "<script>window.alert('Successfully Registered');</script>";

        } else {
            echo 'We couldn\'t register at the moment.Please try again later.';
        }
    } else {
        echo 'Something is empty.';
    }

    echo(json_encode($query_num));

}else{
    echo "not running";
}

?>