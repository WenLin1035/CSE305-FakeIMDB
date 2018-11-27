var actorJson;
var movieJson;
var directorJson;
var productionJson;
var producerJson;
var distributorJson;

function getActorInfo(){
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if(this.readyState ==4 && this.status == 200){
				actorJson = JSON.parse(this.responseText);
			}
		};
	request.open("GET","getActorList.php?query=",true);
	request.send();
}

function getMovieInfo(){
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if(this.readyState ==4 && this.status == 200){
				movieJson = JSON.parse(this.responseText);
			}
		};
	request.open("GET","getMovieList.php?query=",true);
	request.send();
}

function getDirectorInfo(){
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if(this.readyState ==4 && this.status == 200){
				directorJson = JSON.parse(this.responseText);
			}
		};
	request.open("GET","getDirectorList.php?query=",true);
	request.send();
}

function getProductionMemberInfo(){
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if(this.readyState ==4 && this.status == 200){
				productionJson = JSON.parse(this.responseText);
			}
		};
	request.open("GET","getProductionMemberList.php?query=",true);
	request.send();
}

function getProducerInfo(){
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if(this.readyState ==4 && this.status == 200){
				producerJson = JSON.parse(this.responseText);
			}
		};
	request.open("GET","getProducerList.php?query=",true);
	request.send();
}

function getDistributorInfo(){
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if(this.readyState ==4 && this.status == 200){
				distributorJson = JSON.parse(this.responseText);
			}
		};
	request.open("GET","getDistributorList.php?query=",true);
	request.send();
}

function populateJson(){
	getActorInfo();
	getMovieInfo();
	getDirectorInfo();
	getProductionMemberInfo();
	getProducerInfo();
	getDistributorInfo();
}

function resetFields(){
	document.getElementById("moviename").value = "";
	document.getElementById("moviedate").value = "";
	document.getElementById("moviegenre").value = "";
	document.getElementById("movierating").value = "";
	document.getElementById("actorname").value = "";
	document.getElementById("actorage").value = "";
	document.getElementById("directorname").value = "";
	document.getElementById("directorage").value = "";
	document.getElementById("membername").value = "";
	document.getElementById("memberage").value = "";
	document.getElementById("memberspec").value = "";
	document.getElementById("producername").value = "";
	document.getElementById("distributorname").value = "";
	document.getElementById("distributoraddress").value = "";
	$("#movietodelete").empty();
	$("#actortodelete").empty();
	$("#directortodelete").empty();
	$("#membertodelete").empty();
	$("#producertodelete").empty();
	$("#distributortodelete").empty();
	$("#actorid").empty();
	$("#movietoactor").empty();
	document.getElementById("movietoactorrole").value = "";
	document.getElementById("movietoactoraward").value = "";
	$("#directorid").empty();
	$("#movietodirector").empty();
	document.getElementById("movietodirectoraward").value = "";
	$("#memberid").empty();
	$("#movietomember").empty();
	document.getElementById("movietomemberrole").value = "";
	document.getElementById("movietomemberaward").value = "";
	$("#producerid").empty();
	$("#movietoproducer").empty();
	$("#distributorid").empty();
	$("#movietodistributor").empty();
	$("#movietoupdate").empty();
	$("#actortoupdate").empty();
	$("#directortoupdate").empty();
	$("#membertoupdate").empty();
	$("#producertoupdate").empty();
	$("#distributortoupdate").empty();
	$("#updatemoviename").val("");
	$("#updatemoviedate").val("");
	$("#updatemoviegenre").val("");
	$("#updatemovierating").val("");
	document.getElementById("updateactorname").value = "";
	document.getElementById("updateactorage").value = "";
	document.getElementById("updatedirectorname").value = "";
	document.getElementById("updatedirectorage").value = "";
	document.getElementById("updatemembername").value = "";
	document.getElementById("updatememberage").value = "";
	document.getElementById("updatememberspec").value = "";
	document.getElementById("updateproducername").value = "";
	document.getElementById("updatedistributorname").value = "";
	document.getElementById("updatedistributoraddress").value = "";
}

function populateDropdowns(){
	var movieDelete = document.getElementById("movietodelete");
	var movieActor = document.getElementById("movietoactor");
	var movieDirector = document.getElementById("movietodirector");
	var movieMember = document.getElementById("movietomember");
	var movieProducer = document.getElementById("movietoproducer");
	var movieDistributor = document.getElementById("movietodistributor");
	var updateMovie = document.getElementById("movietoupdate");
	for(i in movieJson){
		movieDelete.options[movieDelete.options.length] = new Option(""+movieJson[i].MovieName, ""+movieJson[i].MovieID);
		movieActor.options[movieActor.options.length] = new Option(""+movieJson[i].MovieName, ""+movieJson[i].MovieID);
		movieDirector.options[movieDirector.options.length] = new Option(""+movieJson[i].MovieName, ""+movieJson[i].MovieID);
		movieMember.options[movieMember.options.length] = new Option(""+movieJson[i].MovieName, ""+movieJson[i].MovieID);
		movieProducer.options[movieProducer.options.length] = new Option(""+movieJson[i].MovieName, ""+movieJson[i].MovieID);
		movieDistributor.options[movieDistributor.options.length] = new Option(""+movieJson[i].MovieName, ""+movieJson[i].MovieID);
		updateMovie.options[updateMovie.options.length] = new Option(""+movieJson[i].MovieName, ""+movieJson[i].MovieID);
	}
	
	var actorDelete = document.getElementById("actortodelete");
	var actorLink = document.getElementById("actorid");
	var updateActor = document.getElementById("actortoupdate");
	for(i in actorJson){
		actorDelete.options[actorDelete.options.length] = new Option(""+ actorJson[i].CrewName, ""+actorJson[i].ActorID);
		actorLink.options[actorLink.options.length] = new Option(""+ actorJson[i].CrewName, ""+actorJson[i].ActorID);
		updateActor.options[updateActor.options.length] = new Option(""+ actorJson[i].CrewName, ""+actorJson[i].ActorID);
	}
	
	var directorDelete = document.getElementById("directortodelete");
	var directorLink = document.getElementById("directorid");
	var updateDirector = document.getElementById("directortoupdate");
	for(i in directorJson){
		directorDelete.options[directorDelete.options.length] = new Option(""+ directorJson[i].CrewName, ""+directorJson[i].DirectorID);
		directorLink.options[directorLink.options.length] = new Option(""+ directorJson[i].CrewName, ""+directorJson[i].DirectorID);
		updateDirector.options[updateDirector.options.length] = new Option(""+ directorJson[i].CrewName, ""+directorJson[i].DirectorID);
	}
	
	var productionDelete = document.getElementById("membertodelete");
	var productionLink = document.getElementById("memberid");
	var updateProduction = document.getElementById("membertoupdate");
	for(i in productionJson){
		productionDelete.options[productionDelete.options.length] = new Option(""+ productionJson[i].CrewName, ""+productionJson[i].MemberID);
		productionLink.options[productionLink.options.length] = new Option(""+ productionJson[i].CrewName, ""+productionJson[i].MemberID);
		updateProduction.options[updateProduction.options.length] = new Option(""+ productionJson[i].CrewName, ""+productionJson[i].MemberID);
	}
	
	var producerDelete = document.getElementById("producertodelete");
	var producerLink = document.getElementById("producerid");
	var updateProducer = document.getElementById("producertoupdate");
	for(i in producerJson){
		producerDelete.options[producerDelete.options.length] = new Option(""+ producerJson[i].ProducerName, ""+producerJson[i].ProducerID);
		producerLink.options[producerLink.options.length] = new Option(""+ producerJson[i].ProducerName, ""+producerJson[i].ProducerID);
		updateProducer.options[updateProducer.options.length] = new Option(""+ producerJson[i].ProducerName, ""+producerJson[i].ProducerID);
	}
	
	var distributorDelete = document.getElementById("distributortodelete");
	var distributorLink = document.getElementById("distributorid");
	var updateDistributor = document.getElementById("distributortoupdate");
	for(i in distributorJson){
		distributorDelete.options[distributorDelete.options.length] = new Option(""+ distributorJson[i].DistributorName+"("+distributorJson[i].DistributorAddress+")", ""+distributorJson[i].DistributorID);
		distributorLink.options[distributorLink.options.length] = new Option(""+ distributorJson[i].DistributorName+"("+distributorJson[i].DistributorAddress+")", ""+distributorJson[i].DistributorID);
		updateDistributor.options[updateDistributor.options.length] = new Option(""+ distributorJson[i].DistributorName+"("+distributorJson[i].DistributorAddress+")", ""+distributorJson[i].DistributorID);
	}
}

function resetErrorMessages(){
	$("#movieerror").html("");
	$("#actorerror").html("");
	$("#directorerror").html("");
	$("#productionerror").html("");
	$("#producererror").html("");
	$("#distributorerror").html("");
	$("#deletemovieerror").html("");
	$("#deleteactorerror").html("");
	$("#deletedirectorerror").html("");
	$("#deletemembererror").html("");
	$("#deleteproducererror").html("");
	$("#deletedistributorerror").html("");
	$("#linkorunlinkactorerror").html("");
	$("#linkorunlinkdirectorerror").html("");
	$("#linkorunlinkmembererror").html("");
	$("#linkorunlinkproducererror").html("");
	$("#linkorunlinkdistributorerror").html("");
	$("#updatemovieerror").html("");
	$("#updateactorerror").html("");
	$("#updatedirectorerror").html("");
	$("#updatemembererror").html("");
	$("#updateproducererror").html("");
	$("#updatedistributorrerror").html("");
}

function refreshLists(){
	resetFields();	
	populateJson();
	setTimeout(populateDropdowns,1000);
	//populateDropdowns();
}

function addMovie(){
	var errorField = document.getElementById("movieerror");
	errorField.innerHTML = "";
	var $moviefield = $("#moviename").val();
	var $datefield = $("#moviedate").val();
	var $genrefield = $("#moviegenre").val();
	var $ratingfield = $("#movierating").val();
	if($ratingfield != "")
		$ratingfield = parseInt($ratingfield);
	if($moviefield === ""){
		errorField.innerHTML = "<span style = \"color:red\">Movie Name is a required field";
		return;
	}
	if($datefield === ""){
		errorField.innerHTML = "<span style = \"color:red\">Release Date is a required field";
		return;
	}
	var pattern = /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/;
	if(!pattern.test($datefield)){
		errorField.innerHTML = "<span style = \"color:red\">Release Date is not in the right format or a valid date.";
		return;
	}
	if($genrefield === ""){
		errorField.innerHTML = "<span style = \"color:red\">Movie Genre is a required field";
		return;	
	}
	if($ratingfield != "" && ($ratingfield < 0 || $ratingfield > 10)){
		errorField.innerHTML = "<span style = \"color:red\">Movie Rating must be below 10 or above 0";
		return;
	}
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
	if(this.readyState ==4 && this.status == 200){
			if(request.responseText == "success"){
				resetErrorMessages();
				errorField.innerHTML = "<span style = \"color:green\">Movie successfully added.";
				refreshLists();
				return;
			}
			else{
				errorField.innerHTML = "<span style = \"color:red\">Movie already exists in table.";
				return;
			}
		}
	};
	request.open("GET","insertMovie.php?name="+$moviefield+"&date=" + $datefield + "&rating=" + $ratingfield + "&genre=" + $genrefield,true);
	request.send();
}

function addActor(){
	var errorField = document.getElementById("actorerror");
	errorField.innerHTML = "";
	var $actorName = $("#actorname").val();
	var $actorAge = $("#actorage").val();
	if($actorName === ""){
		errorField.innerHTML = "<span style = \"color:red\">Actor Name is a required field";
		return;	
	}
	if($actorAge != ""){
		$actorAge = parseInt($actorAge);
		if($actorAge > 120 || $actorAge < 1){
			errorField.innerHTML = "<span style = \"color:red\">Actor Age must be between 1 and 120.";
			return;	
		}
	}
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
	if(this.readyState ==4 && this.status == 200){
			if(request.responseText == "success"){
				resetErrorMessages();
				errorField.innerHTML = "<span style = \"color:green\">Actor successfully added.";
				refreshLists();
				return;
			}
			else{
				errorField.innerHTML = "<span style = \"color:red\">Actor already exists in table.";
				return;
			}
		}
	};
	request.open("GET","insertCrewMember.php?name="+$actorName +"&age=" + $actorAge + "&type=actor&spec=",true);
	request.send();
}

function addDirector(){
	var errorField = document.getElementById("directorerror");
	errorField.innerHTML = "";
	var $directorName = $("#directorname").val();
	var $directorAge = $("#directorage").val();
	if($directorName === ""){
		errorField.innerHTML = "<span style = \"color:red\">Director Name is a required field";
		return;	
	}
	if($directorAge != ""){
		$directorAge = parseInt($directorAge);
		if($directorAge > 120 || $directorAge < 1){
			errorField.innerHTML = "<span style = \"color:red\">Director Age must be between 1 and 120.";
			return;	
		}
	}
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
	if(this.readyState ==4 && this.status == 200){
			if(request.responseText == "success"){
				resetErrorMessages();
				errorField.innerHTML = "<span style = \"color:green\">Director successfully added.";
				refreshLists();
				return;
			}
			else{
				errorField.innerHTML = "<span style = \"color:red\">Director already exists in table.";
				return;
			}
		}
	};
	request.open("GET","insertCrewMember.php?name="+$directorName +"&age=" + $directorAge + "&type=director&spec=",true);
	request.send();
}

function addProduction(){
	var errorField = document.getElementById("productionerror");
	errorField.innerHTML = "";
	var $productionName = $("#membername").val();
	var $productionAge = $("#memberage").val();
	var $productionSpec = $("#memberspec").val();
	if($productionName === ""){
		errorField.innerHTML = "<span style = \"color:red\">Member Name is a required field";
		return;	
	}
	if($productionAge != ""){
		$productionAge = parseInt($productionAge);
		if($productionAge > 120 || $productionAge < 1){
			errorField.innerHTML = "<span style = \"color:red\">Member Age must be between 1 and 120.";
			return;	
		}
	}
	if($productionSpec == ""){
		errorField.innerHTML = "<span style = \"color:red\">Specialization is a required field";
		return;
	}
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
	if(this.readyState ==4 && this.status == 200){
			if(request.responseText == "success"){
				resetErrorMessages();
				errorField.innerHTML = "<span style = \"color:green\">Member successfully added.";
				refreshLists();
				return;
			}
			else{
				errorField.innerHTML = "<span style = \"color:red\">Member already exists in table.";
				return;
			}
		}
	};
	request.open("GET","insertCrewMember.php?name="+$productionName +"&age=" + $productionAge + "&type=production&spec=" + $productionSpec,true);
	request.send();
}

function addProducer(){
	var errorField = document.getElementById("producererror");
	errorField.innerHTML = "";
	var $producerName = $("#producername").val();
	if($producerName === ""){
		errorField.innerHTML = "<span style = \"color:red\">Producer Name is a required field";
		return;	
	}
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
	if(this.readyState ==4 && this.status == 200){
			if(request.responseText == "success"){
				resetErrorMessages();
				errorField.innerHTML = "<span style = \"color:green\">Producer successfully added.";
				refreshLists();
				return;
			}
			else{
				errorField.innerHTML = "<span style = \"color:red\">Producer already exists in table.";
				return;
			}
		}
	};
	request.open("GET","insertProducer.php?name="+$producerName,true);
	request.send();
}

function addDistributor(){
	var errorField = document.getElementById("distributorerror");
	errorField.innerHTML = "";
	var $distributorName = $("#distributorname").val();
	var $distributorAddress = $("#distributoraddress").val();
	if($distributorName === ""){
		errorField.innerHTML = "<span style = \"color:red\">Distributor Name is a required field";
		return;	
	}
	if($distributorAddress === ""){
		errorField.innerHTML = "<span style = \"color:red\">Distributor Address is a required field";
		return;	
	}
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
	if(this.readyState ==4 && this.status == 200){
			if(request.responseText == "success"){
				resetErrorMessages();
				errorField.innerHTML = "<span style = \"color:green\">Distributor successfully added.";
				refreshLists();
				return;
			}
			else{
				errorField.innerHTML = "<span style = \"color:red\">Distributor already exists in table.";
				return;
			}
		}
	};
	request.open("GET","insertDistributor.php?name="+$distributorName+"&address="+$distributorAddress,true);
	request.send();
}

function deleteMovie(){
	var errorField = document.getElementById("deletemovieerror");
	var select = document.getElementById("movietodelete");
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
	if(this.readyState ==4 && this.status == 200){
			if(request.responseText == "success"){
				resetErrorMessages();
				errorField.innerHTML = "<span style = \"color:green\">Movie successfully deleted.";
				refreshLists();
				return;
			}
			else{
				errorField.innerHTML = "<span style = \"color:red\">Error occured in deletion.";
				return;
			}
		}
	};
	request.open("GET","deleteMovie.php?id="+select.value,true);
	request.send();
}

function deleteActor(){
	var errorField = document.getElementById("deleteactorerror");
	var select = document.getElementById("actortodelete");
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
	if(this.readyState ==4 && this.status == 200){
			if(request.responseText == "success"){
				resetErrorMessages();
				errorField.innerHTML = "<span style = \"color:green\">Actor successfully deleted.";
				refreshLists();
				return;
			}
			else{
				errorField.innerHTML = "<span style = \"color:red\">Error occured in deletion.";
				return;
			}
		}
	};
	request.open("GET","deleteCrewMember.php?id="+select.value,true);
	request.send();
}

function deleteDirector(){
	var errorField = document.getElementById("deletedirectorerror");
	var select = document.getElementById("directortodelete");
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
	if(this.readyState ==4 && this.status == 200){
			if(request.responseText == "success"){
				resetErrorMessages();
				errorField.innerHTML = "<span style = \"color:green\">Director successfully deleted.";
				refreshLists();
				return;
			}
			else{
				errorField.innerHTML = "<span style = \"color:red\">Error occured in deletion.";
				return;
			}
		}
	};
	request.open("GET","deleteCrewMember.php?id="+select.value,true);
	request.send();
}

function deleteProductionMember(){
	var errorField = document.getElementById("deletemembererror");
	var select = document.getElementById("membertodelete");
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
	if(this.readyState ==4 && this.status == 200){
			if(request.responseText == "success"){
				resetErrorMessages();
				errorField.innerHTML = "<span style = \"color:green\">Production Member successfully deleted.";
				refreshLists();
				return;
			}
			else{
				errorField.innerHTML = "<span style = \"color:red\">Error occured in deletion.";
				return;
			}
		}
	};
	request.open("GET","deleteCrewMember.php?id="+select.value,true);
	request.send();
}

function deleteProducer(){
	var errorField = document.getElementById("deleteproducererror");
	var select = document.getElementById("producertodelete");
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
	if(this.readyState ==4 && this.status == 200){
			if(request.responseText == "success"){
				resetErrorMessages();
				errorField.innerHTML = "<span style = \"color:green\">Producer successfully deleted.";
				refreshLists();
				return;
			}
			else{
				errorField.innerHTML = "<span style = \"color:red\">Error occured in deletion.";
				return;
			}
		}
	};
	request.open("GET","deleteProducer.php?id="+select.value,true);
	request.send();
}

function deleteDistributor(){
	var errorField = document.getElementById("deletedistributorerror");
	var select = document.getElementById("distributortodelete");
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
	if(this.readyState ==4 && this.status == 200){
			if(request.responseText == "success"){
				resetErrorMessages();
				errorField.innerHTML = "<span style = \"color:green\">Distributor successfully deleted.";
				refreshLists();
				return;
			}
			else{
				errorField.innerHTML = "<span style = \"color:red\">Error occured in deletion.";
				return;
			}
		}
	};
	request.open("GET","deleteDistributor.php?id="+select.value,true);
	request.send();
}

function chainActor(){
	var errorField = document.getElementById("linkorunlinkactorerror");
	var actorSelect = document.getElementById("actorid");
	var movieSelect = document.getElementById("movietoactor");
	var chainType = document.getElementById("movietoactortype");
	var role = document.getElementById("movietoactorrole");
	var award = document.getElementById("movietoactoraward");
	if(chainType.value == "insert" && role.value == ""){
		errorField.innerHTML = "<span style = \"color:red\">A role must be specified for linking.";
		return;
	}
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
	if(this.readyState ==4 && this.status == 200){
			if(request.responseText == "success"){
				resetErrorMessages();
				
				errorField.innerHTML = "<span style = \"color:green\">Actor successfully ";
				if(chainType.value == "insert"){
					errorField.innerHTML += "linked.";
				}
				else{
					errorField.innerHTML += "unlinked.";
				}
				refreshLists();
				return;
			}
			else{
				if(chainType.value == "insert"){
					errorField.innerHTML = "<span style = \"color:red\">Actor and Movie pair already exists.";
				}
				else{
					errorField.innerHTML = "<span style = \"color:red\">Actor and Movie pair does not exist for unlinking.";
				}
			}
		}
	};
	request.open("GET","linkOrUnlinkCrewToMovie.php?m_id="+movieSelect.value+"&c_id="+actorSelect.value+"&role="+role.value+"&award="+award.value+"&type="+chainType.value,true);
	request.send();
}

function chainDirector(){
	var errorField = document.getElementById("linkorunlinkdirectorerror");
	var directorSelect = document.getElementById("directorid");
	var movieSelect = document.getElementById("movietodirector");
	var chainType = document.getElementById("movietodirectortype");
	var award = document.getElementById("movietodirectoraward");
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
	if(this.readyState ==4 && this.status == 200){
			if(request.responseText == "success"){
				resetErrorMessages();
				
				errorField.innerHTML = "<span style = \"color:green\">Director successfully ";
				if(chainType.value == "insert"){
					errorField.innerHTML += "linked.";
				}
				else{
					errorField.innerHTML += "unlinked.";
				}
				refreshLists();
				return;
			}
			else{
				if(chainType.value == "insert"){
					errorField.innerHTML = "<span style = \"color:red\">Director and Movie pair already exists.";
				}
				else{
					errorField.innerHTML = "<span style = \"color:red\">Director and Movie pair does not exist for unlinking.";
				}
			}
		}
	};
	request.open("GET","linkOrUnlinkCrewToMovie.php?m_id="+movieSelect.value+"&c_id="+directorSelect.value+"&role=Director"+"&award="+award.value+"&type="+chainType.value,true);
	request.send();
}

function chainProduction(){
	var errorField = document.getElementById("linkorunlinkmembererror");
	var memberSelect = document.getElementById("memberid");
	var movieSelect = document.getElementById("movietomember");
	var chainType = document.getElementById("movietomembertype");
	var role = document.getElementById("movietomemberrole");
	var award = document.getElementById("movietomemberaward");
	if(chainType.value == "insert" && role.value == ""){
		errorField.innerHTML = "<span style = \"color:red\">A role must be specified for linking.";
		return;
	}
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
	if(this.readyState ==4 && this.status == 200){
			if(request.responseText == "success"){
				resetErrorMessages();
				
				errorField.innerHTML = "<span style = \"color:green\">Production Member successfully ";
				if(chainType.value == "insert"){
					errorField.innerHTML += "linked.";
				}
				else{
					errorField.innerHTML += "unlinked.";
				}
				refreshLists();
				return;
			}
			else{
				if(chainType.value == "insert"){
					errorField.innerHTML = "<span style = \"color:red\">Member and Movie pair already exists.";
				}
				else{
					errorField.innerHTML = "<span style = \"color:red\">Member and Movie pair does not exist for unlinking.";
				}
			}
		}
	};
	request.open("GET","linkOrUnlinkCrewToMovie.php?m_id="+movieSelect.value+"&c_id="+memberSelect.value+"&role="+role.value+"&award="+award.value+"&type="+chainType.value,true);
	request.send();
}

function chainProducer(){
	var errorField = document.getElementById("linkorunlinkproducererror");
	var producerSelect = document.getElementById("producerid");
	var movieSelect = document.getElementById("movietoproducer");
	var chainType = document.getElementById("movietoproducertype");
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
	if(this.readyState ==4 && this.status == 200){
			if(request.responseText == "success"){
				resetErrorMessages();
				
				errorField.innerHTML = "<span style = \"color:green\">Producer successfully ";
				if(chainType.value == "insert"){
					errorField.innerHTML += "linked.";
				}
				else{
					errorField.innerHTML += "unlinked.";
				}
				refreshLists();
				return;
			}
			else{
				if(chainType.value == "insert"){
					errorField.innerHTML = "<span style = \"color:red\">Producer and Movie pair already exists.";
				}
				else{
					errorField.innerHTML = "<span style = \"color:red\">Producer and Movie pair does not exist for unlinking.";
				}
			}
		}
	};
	request.open("GET","linkOrUnlinkProducerToMovie.php?m_id="+movieSelect.value+"&p_id="+producerSelect.value+"&type="+chainType.value,true);
	request.send();
}

function chainDistributor(){
	var errorField = document.getElementById("linkorunlinkdistributorerror");
	var distributorSelect = document.getElementById("distributorid");
	var movieSelect = document.getElementById("movietodistributor");
	var chainType = document.getElementById("movietodistributortype");
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
	if(this.readyState ==4 && this.status == 200){
			if(request.responseText == "success"){
				resetErrorMessages();
				
				errorField.innerHTML = "<span style = \"color:green\">Distributor successfully ";
				if(chainType.value == "insert"){
					errorField.innerHTML += "linked.";
				}
				else{
					errorField.innerHTML += "unlinked.";
				}
				refreshLists();
				return;
			}
			else{
				if(chainType.value == "insert"){
					errorField.innerHTML = "<span style = \"color:red\">Distributor and Movie pair already exists.";
				}
				else{
					errorField.innerHTML = "<span style = \"color:red\">Distributor and Movie pair does not exist for unlinking.";
				}
			}
		}
	};
	request.open("GET","linkOrUnlinkDistributorToMovie.php?m_id="+movieSelect.value+"&d_id="+distributorSelect.value+"&type="+chainType.value,true);
	request.send();
}

function populateUpdateMovieFields(){
	var selected = document.getElementById("movietoupdate");
	for(i in movieJson){
		if(movieJson[i].MovieID == selected.value){
			$("#updatemoviename").val(movieJson[i].MovieName + "");
			$("#updatemoviedate").val(movieJson[i].ReleaseDate + "");
			$("#updatemoviegenre").val(movieJson[i].Genre + "");
			$("#updatemovierating").val(movieJson[i].Rating+ "");
		}
	}
}

function populateUpdateActorFields(){
	var selected = document.getElementById("actortoupdate");
	for(i in actorJson){
		if(actorJson[i].ActorID == selected.value){
			$("#updateactorname").val(actorJson[i].CrewName + "");
			$("#updateactorage").val(actorJson[i].Age+"")
		}
	}
}

function populateUpdateDirectorFields(){
	var selected = document.getElementById("directortoupdate");
	for(i in directorJson){
		if(directorJson[i].DirectorID == selected.value){
			$("#updatedirectorname").val(directorJson[i].CrewName + "");
			$("#updatedirectorage").val(directorJson[i].Age+"")
		}
	}
}

function populateUpdateMemberFields(){
	var selected = document.getElementById("membertoupdate");
	for(i in productionJson){
		if(productionJson[i].MemberID == selected.value){
			$("#updatemembername").val(productionJson[i].CrewName + "");
			$("#updatememberage").val(productionJson[i].Age+"")
			$("#updatememberspec").val(productionJson[i].Specialization+"");
		}
	}
}

function populateUpdateProducerFields(){
	var selected = document.getElementById("producertoupdate");
	for(i in producerJson){
		if(producerJson[i].ProducerID == selected.value){
			$("#updateproducername").val(producerJson[i].ProducerName + "");
		}
	}
}
function populateUpdateDistributorFields(){
	var selected = document.getElementById("distributortoupdate");
	for(i in distributorJson){
		if(distributorJson[i].DistributorID == selected.value){
			$("#updatedistributorname").val(distributorJson[i].DistributorName + "");
			$("#updatedistributoraddress").val(distributorJson[i].DistributorAddress + "");
		}
	}
}

function updateMovie(){
	var selectedMovie = document.getElementById("movietoupdate");
	var updatedName = document.getElementById("updatemoviename");
	var updatedDate = document.getElementById("updatemoviedate");
	var updatedGenre = document.getElementById("updatemoviegenre");
	var updatedRating = document.getElementById("updatemovierating").value;
	var errorField = document.getElementById("updatemovieerror");
	
	if(updatedRating != "")
		updatedRating = parseInt(updatedRating);
	if(updatedName.value === ""){
		errorField.innerHTML = "<span style = \"color:red\">Movie Name is a required field";
		return;
	}
	if(updatedDate.value === ""){
		errorField.innerHTML = "<span style = \"color:red\">Release Date is a required field";
		return;
	}
	var pattern = /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/;
	if(!pattern.test(updatedDate.value)){
		errorField.innerHTML = "<span style = \"color:red\">Release Date is not in the right format or a valid date.";
		return;
	}
	if(updatedGenre.value === ""){
		errorField.innerHTML = "<span style = \"color:red\">Movie Genre is a required field";
		return;	
	}
	if(updatedRating != "" && (updatedRating < 0 || updatedRating > 10)){
		errorField.innerHTML = "<span style = \"color:red\">Movie Rating must be below 10 or above 0";
		return;
	}
	
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
	if(this.readyState ==4 && this.status == 200){
			if(request.responseText == "success"){
				resetErrorMessages();
				errorField.innerHTML = "<span style = \"color:green\">Movie successfully updated.";
				refreshLists();
				return;
			}
			else{
				errorField.innerHTML = "<span style = \"color:red\">Updated movie already exists in table.";
				return;
			}
		}
	};
	request.open("GET","updateMovie.php?name="+updatedName.value+"&date=" + updatedDate.value + "&rating=" + updatedRating + "&genre=" + updatedGenre.value+"&id="+selectedMovie.value,true);
	request.send();
}

function updateActor(){
	var errorField = document.getElementById("updateactorerror");
	errorField.innerHTML = "";
	var $actorName = $("#updateactorname").val();
	var $actorAge = $("#updateactorage").val();
	var selected = document.getElementById("actortoupdate");
	if($actorName === ""){
		errorField.innerHTML = "<span style = \"color:red\">Actor Name is a required field";
		return;	
	}
	if($actorAge != ""){
		$actorAge = parseInt($actorAge);
		if($actorAge > 120 || $actorAge < 1){
			errorField.innerHTML = "<span style = \"color:red\">Actor Age must be between 1 and 120.";
			return;	
		}
	}
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
	if(this.readyState ==4 && this.status == 200){
			if(request.responseText == "success"){
				resetErrorMessages();
				errorField.innerHTML = "<span style = \"color:green\">Actor successfully updated.";
				refreshLists();
				return;
			}
			else{
				errorField.innerHTML = "<span style = \"color:red\">Updated actor already exists in table.";
				return;
			}
		}
	};
	request.open("GET","updateActor.php?name="+$actorName +"&age=" + $actorAge + "&id="+selected.value,true);
	request.send();
}

function updateDirector(){
	var errorField = document.getElementById("updatedirectorerror");
	errorField.innerHTML = "";
	var $directorName = $("#updatedirectorname").val();
	var $directorAge = $("#updatedirectorage").val();
	var selected = document.getElementById("directortoupdate");
	if($directorName === ""){
		errorField.innerHTML = "<span style = \"color:red\">Director Name is a required field";
		return;	
	}
	if($directorAge != ""){
		$directorAge = parseInt($directorAge);
		if($directorAge > 120 || $directorAge < 1){
			errorField.innerHTML = "<span style = \"color:red\">Director Age must be between 1 and 120.";
			return;	
		}
	}
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
	if(this.readyState ==4 && this.status == 200){
			if(request.responseText == "success"){
				resetErrorMessages();
				errorField.innerHTML = "<span style = \"color:green\">Director successfully updated.";
				refreshLists();
				return;
			}
			else{
				errorField.innerHTML = "<span style = \"color:red\">Updated director already exists in table.";
				return;
			}
		}
	};
	request.open("GET","updateDirector.php?name="+$directorName +"&age=" + $directorAge + "&id="+selected.value,true);
	request.send();
}

function updateMember(){
	var errorField = document.getElementById("updatemembererror");
	errorField.innerHTML = "";
	var $productionName = $("#updatemembername").val();
	var $productionAge = $("#updatememberage").val();
	var $productionSpec = $("#updatememberspec").val();
	var selected = document.getElementById("membertoupdate");
	if($productionName === ""){
		errorField.innerHTML = "<span style = \"color:red\">Member Name is a required field";
		return;	
	}
	if($productionAge != ""){
		$productionAge = parseInt($productionAge);
		if($productionAge > 120 || $productionAge < 1){
			errorField.innerHTML = "<span style = \"color:red\">Member Age must be between 1 and 120.";
			return;	
		}
	}
	if($productionSpec == ""){
		errorField.innerHTML = "<span style = \"color:red\">Specialization is a required field";
		return;
	}
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
	if(this.readyState ==4 && this.status == 200){
			if(request.responseText == "success"){
				resetErrorMessages();
				errorField.innerHTML = "<span style = \"color:green\">Member successfully updated.";
				refreshLists();
				return;
			}
			else{
				errorField.innerHTML = "<span style = \"color:red\">Updated member already exists in table.";
				return;
			}
		}
	};
	request.open("GET","updateProduction.php?name="+$productionName +"&age=" + $productionAge + "&spec=" + $productionSpec + "&id="+selected.value,true);
	request.send();
}

function updateProducer(){
	var errorField = document.getElementById("updateproducererror");
	errorField.innerHTML = "";
	var $producerName = $("#updateproducername").val();
	var selected = document.getElementById("producertoupdate");
	if($producerName === ""){
		errorField.innerHTML = "<span style = \"color:red\">Producer Name is a required field";
		return;	
	}

	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
	if(this.readyState ==4 && this.status == 200){
			if(request.responseText == "success"){
				resetErrorMessages();
				errorField.innerHTML = "<span style = \"color:green\">Producer successfully updated.";
				refreshLists();
				return;
			}
			else{
				errorField.innerHTML = "<span style = \"color:red\">Updated producer already exists in table.";
				return;
			}
		}
	};
	request.open("GET","updateProducer.php?name="+$producerName + "&id="+selected.value,true);
	request.send();
}

function updateDistributor(){
	var errorField = document.getElementById("updatedistributorerror");
	errorField.innerHTML = "";
	var $distributorName = $("#updatedistributorname").val();
	var $distributorAddress = $("#updatedistributoraddress").val();
	var selected = document.getElementById("distributortoupdate");
	if($distributorName === ""){
		errorField.innerHTML = "<span style = \"color:red\">Distributor Name is a required field";
		return;	
	}
	if($distributorAddress === ""){
		errorField.innerHTML = "<span style = \"color:red\">Distributor Address is a required field";
		return;	
	}
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
	if(this.readyState ==4 && this.status == 200){
			if(request.responseText == "success"){
				resetErrorMessages();
				errorField.innerHTML = "<span style = \"color:green\">Distributor successfully updated.";
				refreshLists();
				return;
			}
			else{
				errorField.innerHTML = "<span style = \"color:red\">Updated distributor already exists in table.";
				return;
			}
		}
	};
	request.open("GET","updateDistributor.php?name="+$distributorName+"&address="+$distributorAddress+ "&id="+selected.value,true);
	request.send();
}