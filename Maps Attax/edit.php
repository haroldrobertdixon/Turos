<?php
if (get_magic_quotes_gpc()) {
    $process = array(&$_GET, &$_POST, &$_COOKIE, &$_REQUEST);
    while (list($key, $val) = each($process)) {
        foreach ($val as $k => $v) {
            unset($process[$key][$k]);
            if (is_array($v)) {
                $process[$key][stripslashes($k)] = $v;
                $process[] = &$process[$key][stripslashes($k)];
            } else {
                $process[$key][stripslashes($k)] = stripslashes($v);
            }
        }
    }
    unset($process);
}

 $Password = $_GET['password'];

 if (!($Password == "9e7ev1N")) {
  echo "Incorrect password: Go away.";
  exit;
 }

 function loadFile($sFilename, $sCharset = 'us-ascii') {
  if (floatval(phpversion()) >= 4.3) {
   $sData = file_get_contents($sFilename);
  } else {
   if (!file_exists($sFilename)) return -3;
   $rHandle = fopen($sFilename, 'r');
   if (!$rHandle) return -2;
   $sData = '';
   while(!feof($rHandle)) $sData .= fread($rHandle, filesize($sFilename));
   fclose($rHandle);
  }
  //if ($sEncoding = mb_detect_encoding($sData, 'auto', true) != $sCharset) $sData = mb_convert_encoding($sData, $sCharset, $sEncoding);
  return $sData;
 }

 $URL = "index.php";
 if (isset($_GET['url'])) $URL = $_GET['url'];

 if (isset($_GET['save'])) {
  $SaveContent = $_POST['content'];
  if (!strlen($SaveContent) == 0) {
   if (!$SaveHandle = fopen($URL, 'w')) {
    echo "Cannot open file ($URL)";
    exit;
   }
   if (fwrite($SaveHandle, $SaveContent) === FALSE) {
    echo "Cannot write to file ($URL)";
    exit;
   }
   fclose($SaveHandle);
  }
 }

 if (is_readable($URL)) $Content = htmlentities(loadFile($URL));

?>
<!DOCTYPE html>
<html>
 <head>
  <title>Editing <?php echo $URL; ?></title>
  <link rel="stylesheet" type="text/css" href="edit.css">
  <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
  <script type="text/javascript" src="http://www.google.com/jsapi"></script>
  <script type="text/javascript">
   google.load("jquery", "1.4.0");
   function DoOpen() {
    window.location = "edit.php?password=<?php echo $Password; ?>&url=" + document.getElementById("Path").value;
   }
   function FixBox() {
    var lh = $("#Top").height();
    var h = $("#Content").height();
    var nh = h - lh - 6;
    $("#Content").height(nh);
   }
  </script>
 </head>
 <body>
  <form action="edit.php?save&url=<?php echo $URL; ?>&password=<?php echo $Password; ?>" method="POST" id="TheForm">
   <div id="Top">
    <input type="text" value="<?php echo $URL; ?>" id="Path">
    <input type="button" value="Open" id="OpenButton" onClick="DoOpen();">
    <input type="submit" value="Save" id="SaveButton">
   </div>
   <textarea name="content" id="Content"><?php echo $Content; ?></textarea>
  </form>
  <script type="text/javascript">
   $(document).ready(FixBox);
   $("#Content").focus();
  </script>
 </body>
</html>