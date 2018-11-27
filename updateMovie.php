<?php
	header("Content-Type: application/json; charset=UTF-8");
	$new_name = $_GET['name'];//all required but rating
	$new_date = $_GET['date'];
	$new_rating = $_GET['rating'];
	$new_genre = $_GET['genre'];
	$movie_id = $_GET['id'];
	if($new_rating == '' || $new_rating == null)
		$rating = 5;
	$conn = new mysqli("localhost", "cse305fa_admin", "nicememe", "cse305fa_imdb");
	$sql = "UPDATE Movie SET MovieName = '$new_name', ReleaseDate = '$new_date', Genre = '$new_genre', Rating = $new_rating WHERE MovieID = $movie_id";
	$result = $conn->query($sql);
	//echo phpinfo();
	if($result === FALSE){
		echo 'error';
		//echo mysqli_error($conn);
		return;
	}
	//$outp = mysqli_fetch_all($result, MYSQLI_ASSOC);
	mysqli_close($conn);
	echo 'success';
		exit();
?>