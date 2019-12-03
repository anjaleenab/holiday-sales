<?php

if (defined(INTERNAL)) {
  exit('Direct access is not allowed');
}

if(empty(SESSION['cart_id'])){
  print_r(json_encode([]));
  exit();
}

$cartId = intval(SESSION['cart_id']);

//can use cartid here for order confirmation or make a separate query for it later
$cartInfoQuery= "SELECT cartItems.`id`,cartItems.`productID`,cartItems.`count`,cartItems.`price`,
Products.`name`, Products.`ShortDescription`, Products.`Image`
FROM cartItems
INNER JOIN Products
ON cartItems.productID = Products.ID
WHERE cartItems.cartID= $cartId";

?>
