<?php
header("Access-Control-Allow-Origin: *");
header("content-type:text/html;charset=utf-8"); 
class NodeData{
	public $nodeTag = null;
	public $value = null;
	public $timestamp = null;
}

$con = mysqli_connect("127.0.0.1","root","thelastcookies","diagram-server");
if (!$con)
{
	die('Could not connect: ' . mysqli_error());
}
mysqli_set_charset($con, 'utf8');

// mysqli_select_db("diagram-server", $con);


if(isset($_POST['nodeTagArr'])) {
	$nodeTagArr = $_POST['nodeTagArr'];
	// $nodeTagArr = ["ZB0001", "KG0001"];
	$timestamp = $_POST['timestamp'];
	$nodeDataArr = array();
	foreach ($nodeTagArr as &$value) {
		if(strlen($value) > 0) {
			if ($timestamp)
			$sql = "SELECT NODE_VALUE, TIME_STAMP, NODE_DESC FROM FAKE_NODE_VALUE WHERE NODE_TAG = '$value' AND TIME_STAMP = '$timestamp'";
		else
			$sql = "SELECT NODE_VALUE, TIME_STAMP, NODE_DESC FROM FAKE_NODE_VALUE WHERE NODE_TAG = '$value'";
			$result = mysqli_query($con, $sql);
			while($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
			{
				$temp = new NodeData;
				$temp -> nodeTag = $value;
				$temp -> value = $row['NODE_VALUE'];
				$temp -> timestamp = $row['TIME_STAMP'];
				$temp -> nodeDesc = $row['NODE_DESC'];
				array_push($nodeDataArr, $temp);
			}
		}
	}
	echo json_encode($nodeDataArr);
}

// echo json_encode($arr);

mysqli_close($con);
?>
