<?php
	$name_value = $_GET['name'];//all required but rating
	$date = $_GET['date'];
	$rating = $_GET['rating'];
	$genre = $_GET['genre'];
	if($rating == '' || $rating == null)
		$rating = 5;
	$conn = new mysqli("localhost", "cse305fa_admin", "nicememe", "cse305fa_imdb");
	$sql = "SELECT MovieID FROM Movie ORDER BY MovieID DESC";
	$result = $conn->query($sql);
	$row=mysqli_fetch_row($result);
	$new_id =  $row[0]+1;
	$sql = "INSERT INTO Movie(MovieID,MovieName,ReleaseDate,Genre,Rating) VALUES ($new_id, '$name_value', '$date', '$genre', $rating)";
	$result = $conn->query($sql);
	if($result === FALSE){
		echo 'error';
		return;
	}
	mysqli_close($conn);
	echo 'success';
	die();
?>