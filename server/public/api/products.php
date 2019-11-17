<?php

require_once('functions.php');

set_exception_handler('error_handler');
startup();
require_once('db_connection.php');


if (!empty($_GET["id"])) {
   $query = "SELECT p.ID, p.Name, p.Price, p.ShortDescription, GROUP_CONCAT(i.imageURL) AS Image FROM Products AS p JOIN IMAGES AS i ON p.ID = i.ProductID WHERE p.ID = " . $_GET["id"] . " GROUP BY p.ID";
} else if(empty($_GET["id"])) {
  $query = "SELECT * FROM `Products`";
}

if(!empty($_GET["id"]) && !is_numeric($_GET["id"])){
  throw new Exception("Id must be an Integer");
}



$result= mysqli_query($conn, $query);

$sqlError = mysqli_error($conn);
if(!$result){
  throw Exception($sqlError);
}
if(!mysqli_num_rows($result)){
  throw new Exception("Invalid ID");
}

$output = [];

while ($row = mysqli_fetch_assoc($result)){
  $row["Image"] = explode(',', $row["Image"]);
  $output[] = $row;
}


$encodedJson = json_encode($output);
print_r ($encodedJson);

?>
