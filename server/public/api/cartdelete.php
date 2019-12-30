<?php

if (!defined('INTERNAL')) {
  exit('Direct access is not allowed');
}

$cartData = getBodyData();

$cartId = intval($cartData['number']);
$productID = intval($cartData['productID']);
if(!$productID) {
  $deleteCartQuery = "DELETE FROM `cartItems` WHERE `cartID` = $cartId;";
  $cartDeletionResult = mysqli_query($conn, $deleteCartQuery);
  if (!$cartDeletionResult) {
    throw new Exception(mysqli_error($conn));
  }
} else {
  $deleteItemQuery = "DELETE FROM `cartItems` WHERE `productID` = $productID
                      AND `cartID` = $cartId;";
  $deleteItemResult = mysqli_query($conn, $deleteItemQuery);
  if (!$deleteItemResult) {
    throw new Exception(mysqli_error($conn));
  }
}

?>
