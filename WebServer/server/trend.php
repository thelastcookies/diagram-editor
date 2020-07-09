<?php
header("Access-Control-Allow-Origin: http://localhost:63342");
header("content-type:text/html;charset=utf-8"); 
class NodeData{
	public $nodeTag = null;
	public $nodeValueArray = array();
	public $nodeTimestamp = array();
	public $nodeDesc = array();
	public $startTime = null;
	public $endTime = null;
}

$con = mysqli_connect("127.0.0.1","root","thelastcookies","diagram-server");
if (!$con)
{
	die('Could not connect: ' . mysqli_error());
}
mysqli_set_charset($con, 'utf8');

// mysqli_select_db("diagram-server", $con);


if(isset($_POST['nodeTagArray'])) {
	$nodeTagArray = $_POST['nodeTagArray'];
	// $nodeTagArray = ["ZB0001", "KG0001", "R0001", "FD0001"] ;
	$startTime = '2020-07-01 00:00:00';
	$endTime = '2020-07-01 00:11:00';

	$len = count($nodeTagArray);

	$dataArr = array();

	if($len > 0) {
		for ($count = 0; $count < $len; $count++) {
			$sql = "SELECT NODE_VALUE, TIME_STAMP, NODE_DESC FROM FAKE_NODE_VALUE WHERE NODE_TAG = '$nodeTagArray[$count]' AND TIME_STAMP  BETWEEN '$startTime' AND '$endTime'";
			// echo $sql;
			$result = mysqli_query($con, $sql);

			$data = new NodeData;
			$data->nodeTag = $nodeTagArray[$count];
			$data->startTime = $startTime;
			$data->endTime = $endTime;

			while($row = mysqli_fetch_row($result))
			{
				array_push($data->nodeValueArray , $row[0]);
				array_push($data->nodeTimestamp , $row[1]);
				array_push($data->nodeDesc , $row[2]);
			}
			array_push($dataArr, $data);
		}
	}
	echo json_encode($dataArr);
}

// echo json_encode($arr);

mysqli_close($con);
?>
