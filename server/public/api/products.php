<?php

require_once('functions.php');

set_exception_handler('error_handler');
require_once('db_connection.php');

startup();
$output = file_get_contents('dummy-products-list.json');
print $output;

$query = 'SELECT * FROM `Products` WHERE `Price` >2000';

$result= mysqli_query($conn, $query);

$sqlError = mysqli_error($conn);
if(!$result){
  throw Exception($sqlError);
}

$output = [];

while ($row = mysqli_fetch_assoc($result)){
  $output[] = $row;
}
$encodedJson = json_encode($output);
print $encodedJson;

?>
