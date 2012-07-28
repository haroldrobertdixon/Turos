<?

include("lib.php");

$latMin = $_POST['latMin'];
$latMax = $_POST['latMax'];
$longMin = $_POST['longMin'];
$longMax = $_POST['longMax'];

$result = mysql_query("SELECT * FROM `Turrets` WHERE `Latt` >= '".$latMin."' AND `Latt` <= '".$latMax."' AND `Long` >= '".$longMin."' AND `Long` <= '".$longMax."';");

while($row = mysql_fetch_array($result)) {
	echo $row['Latt'].",".$row['Long'].";";
}

?>