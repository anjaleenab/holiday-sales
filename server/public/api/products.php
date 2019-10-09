<?php

require_once('functions.php');

set_exception_handler('error_handler');
require_once('db_connection.php');

if (!empty($_GET["id"])) {
  $whereClause = 'WHERE `id` = ' . $_GET["id"];
} else if(empty($_GET["id"])) {
  $whereClause = '';
}
if(!empty($_GET["id"]) && !is_numeric($_GET["id"])){
  throw new Exception("Id must be an Integer");
}
if($_GET["id"])

startup();

$query = 'SELECT * FROM `Products`' . $whereClause;

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
  $output[] = $row;
}
$encodedJson = json_encode($output);
print $encodedJson;

?>
