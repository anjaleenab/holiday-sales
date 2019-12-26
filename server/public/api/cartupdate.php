<?php

if (defined(INTERNAL)) {
  exit('Direct access is not allowed');
}

$data= getBodyData();

print_r($data);

?>
