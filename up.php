<?php
$inp = file_get_contents('php://input');

//scice  0 name; 1 text
$nametext = explode("-----", $inp);
//echo $nametext[0];
//echo $nametext[1];

file_put_contents('csvbase/'.$nametext[0], $nametext[1]);
?>
