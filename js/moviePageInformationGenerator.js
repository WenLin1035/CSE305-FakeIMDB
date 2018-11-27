var actorJson;
var movieJson;
var directorJson;
var productionJson;
var producerJson;
var distributorJson;
var movieString = "";

urlParams = new URLSearchParams(window.location.search);
movieString = urlParams.get('movie');

function generateMovieInfo(){
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if(this.readyState ==4 && this.status == 200){
				movieJson = JSON.parse(this.responseText);
				document.getElementById("title").innerHTML = movieJson[0].MovieName;
				document.getElementById("genres").innerHTML = movieJson[0].Genre;
				document.getElementById("ratingvalue").innerHTML = movieJson[0].Rating;
				document.getElementById("year").innerHTML = "  Released:  " + movieJson[0].ReleaseDate;
				document.getElementById("movieImage").innerHTML = "<img src = \"img/" +"0" +movieJson[0].MovieID + ".jpg\" alt = \"" +movieJson[0].MovieName +  "\" id = \"i1\">";
			}
		};
	request.open("GET","getMovieList.php?query="+movieString,true);
	request.send();
}


function generateActors(){
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if(this.readyState ==4 && this.status == 200){
				actorJson = JSON.parse(this.responseText);
				var actors = document.getElementById("actors");
				var actorString = "";
				for(i = 0; i < actorJson.length-1;i++){
					actorString += "<h5 class=\"mb-1\">" + "<a href = \"\\actor.php?actor=" +actorJson[i].CrewName+ "\" >"  + actorJson[i].CrewName +"</a> as " + actorJson[i].Role;
					if(actorJson[i].Award != null){
						actorString += " (" + actorJson[i].Award + ")" + "</h5>";
					}
					else{
						actorString += "</h5>";
					}
				}
				actors.innerHTML = actorString;
				
				var last = actorJson.length-1;
				document.getElementById("title").innerHTML = actorJson[last].MovieName;
				document.getElementById("genres").innerHTML = actorJson[last].Genre;
				document.getElementById("ratingvalue").innerHTML = actorJson[last].Rating;
				document.getElementById("year").innerHTML = "  Released:  " + actorJson[last].ReleaseDate;
				document.getElementById("movieImage").innerHTML = "<img src = \"img/" +"0" +actorJson[last].MovieID + ".jpg\" alt = \"" + actorJson[last].MovieName +  "\" id = \"i1\">";
			}
		};
	
	request.open("GET","moviePageActorList.php?query="+movieString,true);
	request.send();
}

function generateDirector(){
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if(this.readyState ==4 && this.status == 200){
				directorJson = JSON.parse(this.responseText);
				var directors = document.getElementById("directors");
				var directorString = "";
				for(i in directorJson){
					directorString += "<h5 class=\"mb-1\">" + "<a href = \"\\director.php?director="+directorJson[i].CrewName + "\">" + directorJson[i].CrewName + "</a>";
					if(directorJson[i].Award != null){
						directorString += " (" + directorJson[i].Award + ")" + "</h5>";
					}
					else{
						directorString += "</h5>";
					}
				}
				directors.innerHTML = directorString;
				}
			};
	request.open("GET","moviePageDirectorList.php?query="+movieString,true);
	request.send();
}

function generateProductionTeam(){
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if(this.readyState ==4 && this.status == 200){
				productionJson = JSON.parse(this.responseText);
				var productionMembers = document.getElementById("productions");
				var productString = "";
				for(i in productionJson){
					productString += "<h5 class=\"mb-1\">" + "<a href = \"\\production.php?production=" + productionJson[i].CrewName +  "\">"  + productionJson[i].CrewName + "</a>" +  " (" + productionJson[i].Role + ") ";
					if(productionJson[i].Award != null){
						productString += " (" + productionJson[i].Award + ")" + "</h5>";
					}
					else{
						productString += "</h5>";
					}
				}
				productionMembers.innerHTML = productString;
			}
		};
	request.open("GET","moviePageProductionTeamList.php?query="+movieString,true);
	request.send();
}


function generateProducers(){
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if(this.readyState ==4 && this.status == 200){
				producerJson = JSON.parse(this.responseText);
				var producers = document.getElementById("producers");
				var producerString = "";
				for(i in producerJson){
					producerString += "<h4 class=\"mb-1\">" + "<a href = \"\\producers.php?producer="+ producerJson[i].ProducerName +"\">"  +producerJson[i].ProducerName+"</a>"+ "</h4>";
				}
				producers.innerHTML = producerString;
			}
		};
	request.open("GET","moviePageProducerList.php?query="+movieString,true);
	request.send();
}

function generateDistributors(){
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if(this.readyState ==4 && this.status == 200){
				distributorJson = JSON.parse(this.responseText);
				var distributors = document.getElementById("distributors");
				var distributorString  = "";
				for(i in distributorJson){
					distributorString += "<h4 class=\"mb-1\">" + "<a href = \"\\distributors.php?distributor=" + distributorJson[i].DistributorName + "\">" + distributorJson[i].DistributorName + "</a>" + "(" + distributorJson[i].DistributorAddress + ")" + "</h4>";
				}
				distributors.innerHTML = distributorString;
			}
		};
	request.open("GET","moviePageDistributorList.php?query="+movieString,true);
	request.send();
}