<?php
	header("Content-Type: application/json; charset=UTF-8");
	$conn = new mysqli("localhost", "cse305fa_admin", "nicememe", "cse305fa_imdb");
	$sql = "SELECT MovieID,MovieName,ReleaseDate,Genre,Rating FROM Movie WHERE MovieName LIKE '%%' ORDER BY MovieName ASC";
	$result = $conn->query($sql);
	//echo phpinfo();
	$results_array = array();
	while ($row = $result->fetch_assoc()) {
		$results_array[] = $row;
	}
	//$outp = mysqli_fetch_all($result, MYSQLI_ASSOC);
	echo json_encode($results_array);
	mysqli_close($conn);
		exit();
?>