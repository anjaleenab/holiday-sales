<?php

if (!defined('INTERNAL')) {
  exit('Direct access is not allowed');
}

$cartData = getBodyData();
$updateCondition = $cartData['method'];
$productID = $cartData['productID'];
$cartID = $cartData['cartID'];


if ($updateCondition === 'decrement'){
$updateQuery = "UPDATE cartItems SET count= count-1
                  WHERE cartID=$cartID and productID=$productID;";
} else {
$updateQuery = "UPDATE cartItems SET count= count+1
                  WHERE cartID=$cartID and productID=$productID;";
}

$updateResult = mysqli_query($conn, $updateQuery);

if (!$updateResult) {
  throw new Exception(mysqli_error($conn));
}


?>
