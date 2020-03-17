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


// if(isset($_POST['files'])) {
	$fileName = $_POST['fileName'];
	$fileData = $_POST['fileData'];

	$len = count($files);
	// $fileArr = json_decode($files, true);

	// $dataArr = array();



	// if($len > 0) {
		// for ($count = 0; $count < $len; $count++) {
			// $data = new FileData;
			// $data->fileName = $files->fileName;
			// $data->fileData = $files->fileData;
			$sql = "INSERT INTO FILE_DATA (FILE_NAME, FILE_DATA) VALUES ('$fileName', '$fileData')";
			// echo $sql;
			$result = mysqli_query($con, $sql);
			if ($result)
				echo 1;
			else
				echo 0;
		// }
	// }
// }

mysqli_close($con);
?>
