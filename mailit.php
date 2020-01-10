<?php
function mail_utf8($to, $from_user, $from_email, $subject = '(No subject)', $message = ''){
      $from_user = "=?UTF-8?B?".base64_encode($from_user)."?=";
      $subject = "=?UTF-8?B?".base64_encode($subject)."?=";

      $headers = "From: $from_user <$from_email>\r\n".
               "MIME-Version: 1.0" . "\r\n" .
               "Content-type: text/html; charset=UTF-8" . "\r\n";

     return mail($to, $subject, $message, $headers);
}
$deremailtext = "Titel: ".htmlentities($_POST[titel])."\n<br/>\nDatum: ".$_POST[datum].", Uhrzeit: ".$_POST[zeit]."\n";
$deremailtext = $deremailtext."\n<br/>Anzahl der Karten \n<br/> Kind: ".$_POST[mailanzahl1].", \n<br/> Erw.: ".$_POST[mailanzahl2].", \n<br/> Erw. Erm.: ".$_POST[mailanzahl3]."\n<br/>";
$deremailtext = $deremailtext."Bestellt von ".$_POST[mailvorname]." ".$_POST[mailname]."\n";
$deremailtext = $deremailtext."(".$_POST[street].", ".$_POST[city].", ".$_POST[zipcode].")\n";
$deremailtext = $deremailtext."Telefon: ".$_POST[phone].", \n<br/>email: ".$_POST[mailfrommail]."\n";
$deremailtext = $deremailtext."Nachricht: ".$_POST[persnach]." \n";

$betreff = "Bestellung ". $_POST[datum].", ". $_POST[zeit]." (".html_entity_decode(htmlentities($_POST[titel])).")";

if( mail_utf8( "YOUREMAIL@adresse.de", "Bestellung Website", "W", $betreff, $deremailtext) ){
    echo "<html><head><meta charset='utf-8'></head><body> Wir werden Sie umgehend über die Verfügbarkeit der Karten informieren!</body></html>";
    
} else {
	echo "Bestellung fehlgeschlagen.";
}
?>
