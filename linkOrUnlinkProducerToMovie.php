<?php
	header("Content-Type: text/plain; charset=UTF-8");
	$movie_id = $_GET['m_id'];//required
	$producer_id = $_GET['p_id'];//required
	$type = $_GET['type'];
	$conn = new mysqli("localhost", "cse305fa_admin", "nicememe", "cse305fa_imdb");
	if($type == 'insert'){
		$sql = "INSERT INTO Produces(ProducerID,MovieID) VALUES ($producer_id,$movie_id)";
		$result = $conn->query($sql);
	}
	if($type == 'remove'){
		$sql = "DELETE FROM Produces WHERE $producer_id = Produces.ProducerID AND $movie_id = Produces.MovieID";
		$result = $conn->query($sql);
	}
	if($result === FALSE){
		echo "error";
		return;
	}
	//echo phpinfo();
	//$outp = mysqli_fetch_all($result, MYSQLI_ASSOC);
	//echo json_encode($results_array);
	mysqli_close($conn);
	echo 'success';
	die();
?>