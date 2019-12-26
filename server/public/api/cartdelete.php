<?php

if (!defined('INTERNAL')) {
  exit('Direct access is not allowed');
}

$cartData = getBodyData();

$cartId = intval($cartData['number']);

$deleteCartQuery = "DELETE FROM `cartItems` WHERE `cartID` = $cartId;";

$cartDeletionResult = mysqli_query($conn, $deleteCartQuery);

if(!$cartDeletionResult) {
  throw new Exception(mysqli_error($conn));
}


?>
