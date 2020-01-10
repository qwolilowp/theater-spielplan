<html>
<head><meta charset="utf-8"></meta></head>
<body>
<style type="text/css">
<!--
#apDiv1 {
	position:absolute;
	left: 110px;
	top:100px;
	width:485px;
	height:26px;
	z-index:1;
	padding-bottom:15px;
}
#apDiv2 {
	position:absolute;
	left:189px;
	top:10px;
	width:287px;
	height:79px;
	z-index:2;
}
#apDiv3 {
	position:absolute;
	left:41px;
	top:685px;
	width:870px;
	height:273px;
	z-index:3;
}
#apDiv4 {
	position:absolute;
	left:100px;
	top:128px;
	width:484px;
	height:515px;
	z-index:4;
}
#bestell_1 {
	font-family: Verdana, Geneva, sans-serif;
	font-size: 10px;
	color: #59635e;
}
#apDiv4 table tr td {
	font-size: 10px;
	font-family: Verdana, Geneva, sans-serif;
	color: #59635e;
}
#apDiv4 table tr td .bestellformular {
	font-size: 9px;
}
#apDiv5 {
	position:absolute;
	left:99px;
	top:632px;
	width:461px;
	height:34px;
	z-index:5;
}
.bestellformular_txt {
	font-size: 9px;
	text-align: center;
}
.bestellformular_txt {
	font-family: Verdana, Geneva, sans-serif;
	font-size: 10px;
	font-style: normal;
	line-height: normal;
	font-variant: normal;
	text-transform: none;
	color: #59635e;
	text-align: center;
}
.bestellformular_bold {
	font-family: Verdana, Geneva, sans-serif;
	font-size: 10px;
	font-style: italic;
	line-height: normal;
	font-weight: bold;
	font-variant: normal;
	text-transform: none;
	color: #59635e;
	text-align: center;
}
.mittelachse_txt {
	font-family: Verdana, Geneva, sans-serif;
	font-size: 10px;
	font-style: normal;
	line-height: normal;
	font-weight: normal;
	font-variant: normal;
	text-transform: none;
	color: #59635e;
	letter-spacing: 120%;
	text-align: center;
}

-->
</style>
<script type="text/javascript">
function validateForm()
{
	if (document.getElementById('mailvorname').value == '') {
		alert ("Bitte Vorname Feld eintragen!");
	    return false;
    }	
	if (document.getElementById('mailname').value == '') {
		alert ("Bitte Nachname Feld eintragen!");
	    return false;
    }
	if (document.getElementById('mailfrommail').value == '') {
		alert ("Bitte email Feld eintragen!");
	    return false;
    }
	//if (document.getElementById('mailanzahl1').value == '0' && document.getElementById('mailanzahl2').value == '0' && document.getElementById('mailanzahl3').value == '0') {
	//	alert ("Bitte Anzahl der Karten eintragen!");
	//    return false;
    //}
	

	return true;
}
</script>



<div id="bestell" >

		<div id="apDiv1" style="vertical-align: text-bottom; text-align: center; font-style: normal; font-size: 15px; color: #ee6600; font-family: Verdana, Geneva, sans-serif; font-weight: bold;">
		Kartenbestellung-Online f&uuml;r <?php echo $_GET['verantyp']; ?>
	  </div>
	 
	 <div id="apDiv2"><span style="float:left; margin-left: 5px;">
		<img src="" /></span>
	 </div>
	 
	 
<div id="apDiv4" style="clear:both; font-family: Verdana, Geneva, sans-serif; margin: 0px; margin-left:10px; color: #59635e;">
 <form id="kartenmail" name="input" onSubmit="return validateForm()" action="mailit.php" method="post" enctype="multipart/form-data">
	<div style="text-align: center;">
	   <span class="bestellformular_bold">Vor dem Ausf&uuml;llen der Felder beachten Sie bitte folgende Hinweise:<br />
       </span>
	   <span class="bestellformular_txt">Die Kasse im Foyer unseres Theaters &ouml;ffnet f&uuml;r Sie 45 Minuten vor Beginn der Vorstellung.<br />
		Ihr Anspruch auf vorbestellte Karten besteht bis 30 Minuten vor Vorstellungsbeginn. <br />
        <br />
		Bitte haben Sie Verst&auml;ndnis daf&uuml;r, dass wir nicht abgeholte Karten in Rechnung 
		stellen m&uuml;ssen, wenn diese verbindliche Reservierung nicht einen Tag vor der Vorstellung 
		von Ihnen abgesagt wurde. Gekaufte Karten k&ouml;nnen wir leider nicht zur&uuml;cknehmen. 
		Im Interesse unserer Besucher und Spieler ist ein Einlass nach Vorstellungsbeginn nur in einer St&uuml;ckpause m&ouml;glich. Wir bitten Sie, die angegebenen Altersempfehlungen zu beachten.<br />
        <br />
        
		Erm&auml;&szlig;igung erhalten Sch&uuml;ler, Studenten, Schwerbehinderte, Arbeitslose, Sozialhilfeempf&auml;nger und Senioren bei Vorlage des entsprechenden Dokuments.<br />
	    <br />
		<b>Onlinebestellungen sind leider nur bis vier Tage vor einer Vorstellung
		m&ouml;glich. Kurzfristige Kartenbestellungen nehmen wir gerne telefonisch unter
		XXXXXXXXXXXX entgegen.<br></b><br/>
	    Mit dem Absenden der Bestellung akzeptieren Sie die oben genannten Bedingungen. Es gelten die Regeln des 
		<a href="" target="_blank">Datenschutzes</a>.
		
	   </span><br/><br/>
	 </div>
	 
  <table width="460" border="0" cellspacing="0" class="bestellformular_bold">
    <tr>
      <td valign="baseline">
	    St&uuml;cktitel:
	  </td>
	  <td valign="baseline">
	    am: 
	  </td>
	  <td valign="baseline"> 
	    um: 
	  </td>
    </tr>
    <tr>
      <td valign="baseline">
         <? echo $_GET['titel']; ?>
		<input type="text" name="titel" style="display:none;" value="<? echo $_GET['titel']; ?>"/>
	 </td>
      <td>   
         <? echo $_GET['datum']; ?>
		<input type="text" name="datum" style="display:none;" value="<? echo $_GET['datum']; ?>"/>
	  </td>
      <td>
		  <? echo $_GET['zeit']; ?>
		<input type="text" name="zeit" style="display:none;" value="<? echo $_GET['zeit']; ?>"/>
	  </td>
    </tr>
  </table>
  
  <div> <br/> </div>
  <table width="475" border="0" cellspacing="0" style="margin-left: 15px;">
    <tr>
      <td width="172" align="left" valign="baseline"><span class="bestellformular_txt">Vorname</span></td>
      <td width="261" align="left" valign="baseline"><span class="bestellformular_txt">Nachname</span></td>
    </tr>
	<tr>
	 <td align="left" valign="baseline">
       <input type="text" class="bestellformular_txt" name="mailvorname" id="mailvorname" value="" tabindex="1" />
     </td>
	 <td align="left" valign="baseline">
       <input SIZE="45" type="text" class="bestellformular_txt" name="mailname" id="mailname" value="" tabindex="2" />
     </td>
	</tr>
	<tr>
      <td align="left" valign="baseline"><span class="bestellformular_txt">Strasse</span></td>
      <td align="left" valign="baseline"><span class="bestellformular_txt">PLZ/Ort</span></td>
    </tr>
    <tr>
	 <td align="left" valign="baseline">
          <input name="street" type="text" class="bestellformular_txt" id="street"  value="" tabindex="3" />
	 </td>
	 <td align="left" valign="baseline">
		  <input name="zipcode" type="text" class="bestellformular_txt" id="zipcode" size="9" maxlength="7" tabindex="4" />
          <input name="city" type="text" class="bestellformular_txt" id="city" size="34" tabindex="5" />
	 </td>
	</tr>
	<tr>
      <td align="left" valign="baseline"><span class="bestellformular_txt">Telefon</span></td>
      <td align="left" valign="baseline"><span class="bestellformular_txt">E-Mail</span></td>
    </tr>
    <tr>
	  <td align="left" valign="baseline">
	    <input name="phone" type="text" class="bestellformular_txt" name="phone" id="phone" value="" tabindex="6" />
	  </td>
	  <td align="left" valign="baseline">
	    <input style="margin-left:2px;" class="bestellformular_txt" SIZE="45" type="text" name="mailfrommail" id="mailfrommail" value="" tabindex="7"/>
	  </td>
	</tr>
	 <tr>
	   <td>Ihre Nachricht an uns:
	   </td> 
	</tr>
	<tr>
		<td colspan="2"><TEXTAREA Name="persnach" id="persnach" ROWS="5" COLS="51" tabindex="8" ></TEXTAREA>
		</td>
	</tr>
  </table>
  
        

 
 
 
    <table width="460" border="0" cellspacing="0" style="margin-top: 15px;margin-left: 10px;">
    <tr>
      <td colspan="2"><p>Wie viele Karten m&ouml;chten Sie bestellen? <br />
      Bitte die jeweilige Anzahl in die vorgesehenen K&auml;stchen eintragen.</p></td>
    </tr>
	<?php if( $_GET['p1'] != 0): ?>  
    <tr>
      <td >* Kinderkarte(n) zur <?php echo $_GET['verantyp']; ?> zu je <?php echo $_GET['p1']?> &euro;</td>
      <td width="72"><span style="padding-top: 5px;">
        <input type="text" name="mailanzahl1" id="mailanzahl1" value="0" size="3" maxlength="2" tabindex="9" />
      </span> St&uuml;ck</td>
    </tr>
	 <?php endif;?>
	<?php if( $_GET['p2'] != 0): ?>  
    <tr>
      <td>* Erwachsenenkarte(n) zur <?php echo $_GET['verantyp']; ?> zu je <?php echo $_GET['p2']?> &euro;</td>
      <td><span style="padding-top: 5px;">
        <input type="text" name="mailanzahl2" id="mailanzahl2" value="0" size="3" maxlength="2" tabindex="10" />
      </span> St&uuml;ck</td>
    </tr>
	<?php endif;?>
	<?php if( $_GET['p3'] != 0): ?>  
    <tr>
      <td>* Erwachsenenkarte(n) f&uuml;r Erm&auml;&szlig;igungsberechtigte zu je <?php echo $_GET['p3']?> &euro;</td>
      <td><span style="padding-top: 5px;">
        <input type="text" name="mailanzahl3" id="mailanzahl3" value="0" size="3" maxlength="2" tabindex="11" />
      </span> St&uuml;ck</td>
    </tr>
    <?php endif;?>
    </table>
 	
	

    <div style="clear:both; font-size: 10px; font-family: Verdana, Geneva, sans-serif; margin: 0px; margin-left:10px; color: #59635e;">
	Die Onlinebestellung ist erst dann g&uuml;ltig, wenn Sie eine Best&auml;tigung von 
	uns erhalten haben.
	</div>
	<div style="margin-top:15px;">
	   <input type="submit" id="abschicken" value="Abschicken" tabindex="12"/>
	</div>
</form>
	

</div>
<?php //echo print_r( $_GET ); 
?>
</body>
</html>
