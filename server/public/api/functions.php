<?php

function error_handler($error) {
$output = [
  "status code"=> http_response_code(500),
  "success" => "false",
  "error" => $error->getMessage(),
];

$json_output = json_encode($output);
print $json_output;
}

function startup(){
  header('Content-type: application/json');
}

function getBodyData() {
  $json = file_get_contents('php://input');
  $output = json_decode($json, true);
  return $output;
}


?>
