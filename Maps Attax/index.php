<?php
 function Poo() {
  //header("Location: login.php");
 }
 include "lib.php";
 $Verify = mysql_real_escape_string($_POST['Verify']);
 if (strlen($Verify) == 0) {
  Poo();
  //exit;
 }
 $QueryString = "SELECT * FROM `Users` WHERE `Verify` = '" . $Verify . "'";
 $Result = mysql_query($QueryString);
 if (mysql_num_rows($Result) == 0) {
  Poo();
  //exit;
 }
 $Data = mysql_fetch_row($Result);
 $ID = $Data[0];
 $Username = $Data[1];
 //          $Data[2];
 $Phone =    $Data[3];
 $Money =    $Data[4];
 $Speed =    $Data[5];

?>

<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
    <link rel="stylesheet" href="css/main.css" type="text/css"/>
    <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?key=AIzaSyB3886XneZ8kMhij9Dc_Jiy3hkjJn9bQSI&sensor=false&libraries=geometry"></script>
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
    <script type="text/javascript" src="js/images.js"></script>
    <title>Maps Attax</title>
  </head>
  <body onload="initialize()">
    <div id="map_canvas" style="width:100%; height:100%"></div>
    <canvas id="overlay" style="width: 100%; height: 100%; z-index: 5; position: absolute; top: 0; left: 0; pointer-events: none;" width="256" height="256">
     &nbsp;
    </canvas>
    <div id="stuff" class="roundy">
     <div id="stuffinside">
      <a href="http://maps.darkflow.net">
       <img id="Logo" src="images/Logo.png" alt="Maps Attax Logo">
      </a>
      <div class="header">
       <?php echo $Username; ?>
      </div>
      <div class="section">
       <div>
        <table>
         <tr>
          <td class="TabLeft">
           Phone
          </td>
          <td class="TabRight">
           <span id="Money"><?php echo $Phone; ?></span>
          </td>
         </tr>
         <tr>
          <td class="TabLeft">
           Money
          </td>
          <td class="TabRight">
           <span id="Money"><?php echo $Money; ?></span>
          </td>
         </tr>
         <tr>
          <td class="TabLeft">
           Speed
          </td>
          <td class="TabRight">
           <span id="Money"><?php echo $Speed; ?></span>
          </td>
         </tr>
        </table>
       </div>
      </div>
      <div class="header">
       Game
      </div>
      <div class="section">
       <div>
        Hello, World
       </div>
      </div>
     </div>
    </div>
  </body>
</html>