<?php
	header("Content-Type: text/plain; charset=UTF-8");
	$name_value = $_GET['name'];//required so it will never happen
	$age = $_GET['age'];
	$c_id = $_GET['id'];
	if($age == '')
		$age = 'NULL'; 
	$conn = new mysqli("localhost", "cse305fa_admin", "nicememe", "cse305fa_imdb");	
	$sql = "UPDATE Crew_Member SET CrewName = '$name_value',Age= $age WHERE CrewID = $c_id";
	$result = $conn->query($sql);
	if($result === FALSE){
		echo 'error';
		//echo mysqli_error($conn);
		return;
	}
	//echo phpinfo();
	//$outp = mysqli_fetch_all($result, MYSQLI_ASSOC);
	//echo json_encode($results_array);
	mysqli_close($conn);
	echo 'success';
	die();
?>