<?php

define('INTERNAL', true);


require_once('functions.php');
session_start();
set_exception_handler('error_handler');
require_once('db_connection.php');


if (!$conn) {
  throw new Exception('connection failed');
}

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
  case 'GET':
    require('cartget.php');
    break;
  case 'POST':
    require('cartadd.php');
    break;
  case 'DELETE':
    require('cartdelete.php');
    break;
}

?>
