<?php
header("Access-Control-Allow-Origin: *");
header("content-type:text/html;charset=utf-8"); 
// header("Access-Control-Allow-Origin: http://localhost:63342");
class FileData{
	public $fileName = null;
	public $fileData = null;
}

$con = mysqli_connect("127.0.0.1","root","233333","diagram-server");
if (!$con)
{
	die('Could not connect: ' . mysqli_error());
}
mysqli_set_charset($con, 'utf8');

// mysqli_select_db("diagram-server", $con);

$fileDataArr = array();

$sql = "SELECT FILE_NAME, FILE_DATA FROM FILE_DATA";
// echo $sql;
$result = mysqli_query($con, $sql);

$data = new FileData;
$data->nodeTag = $nodeTagArray[$count];
$data->startTime = $startTime;
$data->endTime = $endTime;

while($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
{
	$temp = new FileData;
	$temp -> fileName = $row["FILE_NAME"];
	$temp -> fileData = $row["FILE_DATA"];
	array_push($fileDataArr , $temp);
}
echo json_encode($fileDataArr);




mysqli_close($con);
?>
