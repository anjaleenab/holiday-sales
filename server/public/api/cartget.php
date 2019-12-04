<?php

if (!defined('INTERNAL')) {
  exit('Direct access is not allowed');
}

if(empty($_SESSION['cartId'])){
  print_r(json_encode([]));
  exit();
}

$cartId = intval($_SESSION['cartId']);

//can use cartid here for order confirmation or make a separate query for it later
$cartInfoQuery= "SELECT cartItems.`id`,cartItems.`productID`,cartItems.`count`,cartItems.`price`,
                Products.`name`, Products.`ShortDescription`, Products.`Image`
                FROM cartItems
                INNER JOIN Products
                ON cartItems.productID = Products.ID
                WHERE cartItems.cartID= $cartId";

$result = mysqli_query($conn, $cartInfoQuery);

$cartInfo = [];
while ($row = mysqli_fetch_assoc($result)) {
  $row["orderNumber"] = intval($row["id"]);
  $row['productID'] =intval($row['productID']);
  $row['price']=intval($row['price']);
  $cartInfo = $row;
}

print_r(json_encode($cartInfo));

?>
