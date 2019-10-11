<?php

require_once('functions.php');

set_exception_handler('error_handler');
require_once('db_connection.php');

if (!empty($_GET["id"])) {
   $whereClause = "SELECT p.ID, p.Name, p.Price, p.ShortDescription, GROUP_CONCAT(i.imageURL) AS URL FROM Products AS p JOIN IMAGES AS i ON p.ID = i.ProductID WHERE p.ID = " . $_GET["id"] . " GROUP BY p.ID";
} else if(empty($_GET["id"])) {
  $whereClause = "SELECT * FROM `Products`";
}

if(!empty($_GET["id"]) && !is_numeric($_GET["id"])){
  throw new Exception("Id must be an Integer");
}

// SELECT p.ID, p.Name, p.Price, p.ShortDescription, GROUP_CONCAT(i.imageURL) AS URL FROM Products AS p JOIN IMAGES AS i ON p.ID = i.ProductID WHERE p.ID = 1 GROUP BY p.ID

startup();

$query = $whereClause;

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
  $row["URL"] = explode(',', $row["URL"]);
  $output[] = $row;

  }

$encodedJson = json_encode($output);
print $encodedJson;

?>
