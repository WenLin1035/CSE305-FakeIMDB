<?php
	header("Content-Type: application/json; charset=UTF-8");
	$search_value = $_GET['query'];
	if($search_value == '')
		$search_value = "%";
	$conn = new mysqli("localhost", "cse305fa_admin", "nicememe", "cse305fa_imdb");
	$sql = "SELECT Crew_Member.CrewName, CrewMemberOf.Role, CrewMemberOf.Award, CrewMemberOf.CrewID FROM Crew_Member, Actor, CrewMemberOf, Movie WHERE CrewMemberOf.CrewID = Actor.ActorID AND CrewMemberOf.MovieID = Movie.MovieID AND CrewMemberOf.CrewID = Crew_Member.CrewID AND Movie.MovieName LIKE '$search_value'";
	$result = $conn->query($sql);
	//echo phpinfo();
	$results_array = array();
	if($result != NULL){
		while ($row = $result->fetch_assoc()) {
			$results_array[] = $row;
		}
	}
	$sql = "SELECT MovieID,MovieName,ReleaseDate,Genre,Rating FROM Movie WHERE MovieName LIKE '$search_value'";
	$result = $conn->query($sql);
	if($result != NULL){
		while ($row = $result->fetch_assoc()) {
			$results_array[] = $row;
		}
	}
	//$outp = mysqli_fetch_all($result, MYSQLI_ASSOC);
	echo json_encode($results_array);
	mysqli_close($conn);
		exit();
?>