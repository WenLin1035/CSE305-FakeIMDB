<?php
	header("Content-Type: text/plain; charset=UTF-8");
	$movie_id = $_GET['m_id'];//required
	$crew_id = $_GET['c_id'];//required
	$crew_role = $_GET['role'];//required
	$crew_award = $_GET['award'];
	$type = $_GET['type'];
	$flag = 0;
	if($crew_award == '' || $crew_award == NULL){
		$crew_award = 'NULL';
		$flag = 1;
	}

	$conn = new mysqli("localhost", "cse305fa_admin", "nicememe", "cse305fa_imdb");
	if($type == 'insert'){
		if($flag == 1){
			$sql = "INSERT INTO CrewMemberOf(MovieID,CrewID,Role,Award) VALUES ($movie_id,$crew_id, '$crew_role', $crew_award)";
		}
		else{
			$sql = "INSERT INTO CrewMemberOf(MovieID,CrewID,Role,Award) VALUES ($movie_id,$crew_id, '$crew_role', '$crew_award')";
		}
		$result = $conn->query($sql);
	}
	if($type == 'remove'){
		$sql = "DELETE FROM CrewMemberOf WHERE $crew_id = CrewMemberOf.CrewID AND $movie_id = CrewMemberOf.MovieID";
		$result = $conn->query($sql);
	}
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