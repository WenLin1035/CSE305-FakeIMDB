<?php
	header("Content-Type: text/plain; charset=UTF-8");
	$name_value = $_GET['name'];//required so it will never happen
	$age = $_GET['age'];
	$type = $_GET['type']; //this is also required
	$specialization = $_GET['spec'];//only required if type is production
	if($age == '')
		$age = 'NULL'; 
	$conn = new mysqli("localhost", "cse305fa_admin", "nicememe", "cse305fa_imdb");
	$sql = "SELECT CrewID, CrewName, Age FROM Crew_Member ORDER BY CrewID DESC";
	$result = $conn->query($sql);
	$row=mysqli_fetch_row($result);
	$new_id =  $row[0]+1;
	$sql = "INSERT INTO Crew_Member(CrewID,CrewName,Age) VALUES ($new_id, '$name_value', $age)";
	$result = $conn->query($sql);
	if($result === FALSE){
		echo 'error';
		return;
	}
	if($type == 'actor'){
		$sql = "INSERT INTO Actor(ActorID) VALUES ($new_id)";
		$result = $conn->query($sql);
	}
	if($type == 'director'){
		$sql = "INSERT INTO Director(DirectorID) VALUES ($new_id)";
		$result = $conn->query($sql);
	}
	if($type == 'production'){
		$sql = "INSERT INTO Production_Member(MemberID, Specialization) VALUES ($new_id, '$specialization')";
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