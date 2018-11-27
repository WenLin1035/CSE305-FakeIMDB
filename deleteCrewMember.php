<?php
	header("Content-Type: text/plain; charset=UTF-8");
	$crew_id = $_GET['id'];//required so it will never happen
	$conn = new mysqli("localhost", "cse305fa_admin", "nicememe", "cse305fa_imdb");
	$sql = "DELETE FROM Crew_Member WHERE $crew_id = Crew_Member.CrewID";
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