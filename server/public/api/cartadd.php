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

$priceQuery = "SELECT `Price`, `Image`, `Name`, `ShortDescription`, `LongDescription`
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

$productData ='';

while ($row = mysqli_fetch_assoc($result)) {
  $productData = $row['id'];
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
    throw new Exception('Insertion Query had an error');
  }
  $idCreated = mysqli_insert_id($conn);
  $cartID = $idCreated;
  $_SESSION['cartId'] =$idCreated;

}




?>
