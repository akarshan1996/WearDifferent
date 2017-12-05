<?php
/**
 * Created by PhpStorm.
 * User: cube
 * Date: 5/12/17
 * Time: 8:46 PM
 */

include_once 'connect.inc.php';
$query = "SELECT * FROM cart";

$query_run = mysqli_query($conn,$query);
$query_run_num = mysqli_num_rows($query_run);

if($query_run){

    echo "<table class='table table-striped table-hover table-bordered' style='border: solid 1px black;'>
            <tbody>
        <tr>
            <th>Item</th>
            <th>QTY</th>
            <th>Unit Price</th>
            <th>Total Price</th>
            <th>Action</th>
        </tr>";
    while($query_num = mysqli_fetch_assoc($query_run)){
        echo "<tr>
                <td>$query_num[title]</td>
                <td>$query_num[quantity]</td>
                <td>$query_num[price]</td>
                <td>$query_num[price]*$query_num[quantity]</td>
                <td><button class='btn btn-danger btn-sm' id='delete' onclick='deleteitem($query_num[cid])'>DELETE</button></td>
              
              </tr>";
    }
    echo "<tr>
    <th colspan='3'><span class='pull-right'>Sub Total</span></th>
    <th>£ </th>
    
    </tr>
    <tr>
        <th colspan='3'><span class='pull-right'>VAT 20%</span></th>
        <th>£ </th>
    
    </tr>
    <tr>
        <th colspan='3'><span class='pull-right'>Total</span></th>
        <th>£ </th>
    
    </tr>
    <tr>
        <td><a href='index.html' class='btn btn-primary'>Continue Shopping</a></td>
        <td colspan='3'><button class='pull-right btn btn-success' onclick='hello()'>Checkout</button></td>
    
    </tr>
    </tbody></table>";

}else{
    echo "query is not running";
}
?>