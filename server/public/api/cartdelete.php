<?php

if (!defined('INTERNAL')) {
  exit('Direct access is not allowed');
}

$cartData = getBodyData();
print_r($cartData);

$cartId = intval($cartData['number']);

print($cartId);
$deleteCartQuery = "DELETE FROM `cartItems` WHERE `cartID` = $cartId;
                     DELETE FROM `cart` WHERE `id` = $cartId;";

$cartDeletionResult = mysqli_query($conn, $deleteCartQuery);

if(!$cartDeletionResult) {
  throw new Exception(mysqli_error($conn));
}


?>
