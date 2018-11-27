<?php
	header("Content-Type: text/plain; charset=UTF-8");
	$name_value = $_GET['name'];//required so it will never happen
	$conn = new mysqli("localhost", "cse305fa_admin", "nicememe", "cse305fa_imdb");
	$sql = "SELECT ProducerID FROM Producer ORDER BY ProducerID DESC";
	$result = $conn->query($sql);
	$row=mysqli_fetch_row($result);
	$new_id =  $row[0]+1;
	$sql = "INSERT INTO Producer(ProducerID,ProducerName) VALUES ($new_id, '$name_value')";
	$result = $conn->query($sql);
	if($result === FALSE){
		echo 'error';
		return;
	}
	//echo phpinfo();
	//$outp = mysqli_fetch_all($result, MYSQLI_ASSOC);
	//echo json_encode($results_array);
	mysqli_close($conn);
	echo 'success';
	die();
?>