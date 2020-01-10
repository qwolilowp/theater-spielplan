<?php
$dir    = 'csvbase';
$files1 = scandir($dir);

echo $files1.implode( ";;", $files1 );
?>
