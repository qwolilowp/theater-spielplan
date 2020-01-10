<?php
if(  strpos($_GET["l"], "yourusername") !== false ){
  if( strpos($_GET["p"], "yourpassword") !== false ){
		echo "true";
   } else {
		echo "false";
	}
}
?>
