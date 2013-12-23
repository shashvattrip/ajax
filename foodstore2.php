<?php
header("Content-type: application/json");
//this is for houskeeping when we want to generate xml files from this php files


$string = file_get_contents("js/phones.json");

echo $string;

?>
