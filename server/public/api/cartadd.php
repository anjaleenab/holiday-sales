<?php

if (defined(INTERNAL)) {
  exit('Direct access is not allowed');
}

$newOutput=getBodyData();

$id = intval($newOutput['id']);

if($id){
  if (!$id > 0) {
    throw new Error('ID must be a number greater than 0');
  }
}

if(empty($_SESSION['cartId'])) {
  $cartID =$_SESSION['cartId'];
} else {
  $cartID = false;
}
//may not need all of these items from this query
$priceQuery = "SELECT `Price`, `Image`, `Name`, `ShortDescription`
               FROM PRODUCTS
               WHERE `ID` = $id";

$result = mysqli_query($conn, $priceQuery);
if (!$result) {
  throw new Exception('query failed');
}

$numberOfRows= mysqli_num_rows($result);
if(!$numberOfRows) {
  throw new Exception('Invalid ID');
}

$productData =[];
$itemPrice= $productData['price'];

while ($row = mysqli_fetch_assoc($result)) {
  $row['price']=intval($row['Price']);
  $productData = $row;
}

if ((!$result)) {
  throw new Exception(mysqli_error($conn));
}

$transQuery ="START TRANSACTION";

$transResult = mysqli_query($conn, $transQuery);

if($cartID === false) {
  $insertQuery ="INSERT INTO `cart` SET `created` = NOW()";
  $insertResult = mysqli_query($conn, $insertQuery);
  if(!$insertResult){
    throw new Exception(mysqli_error($conn));
  }
  $rowsInserted=mysql_affected_rows($conn);
  if(!$rowsInserted === 1){
    throw new Exception(mysqli_error($conn));
  }
  $idCreated = mysqli_insert_id($conn);
  $cartID = $idCreated;
  $_SESSION['cartId'] =$idCreated;
}


$cartItemInsertQuery= "INSERT INTO cartItems
                      (`count`, `productID`, `price`, `added`, `cartID`)
                      VALUES (1, $id, $itemPrice, NOW(), $cartID
                      ON DUPLICATE KEY UPDATE count=count+1 ";

$cartItemInsertResult = mysqli_query($conn, $cartItemInsertQuery);
if(!$cartItemInsertResult) {
  throw new Exception(mysqli_error($conn));
}
$itemsInserted = mysql_affected_rows($conn);
if (!$itemsInserted >= 1) {
  mysqli_query($conn, "ROLLBACK");
  throw new Exception(mysqli_error($conn));
  mysqli_query($conn, "COMMIT");
}

?>
