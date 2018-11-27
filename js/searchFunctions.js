var actorJson;
var movieJson;
var directorJson;
var productionJson;
var producerJson;
var distributorJson;
var queryString = "";
urlParams = new URLSearchParams(window.location.search);
queryString = urlParams.get('query');

function movies(){
	document.getElementById("query").innerHTML = queryString;
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if(this.readyState ==4 && this.status == 200){
				movieJson = JSON.parse(this.responseText);
				var movies = document.getElementById("movieentries");
				movieString = "";
				for(i in movieJson){
					movieString += "<a href =\"movie.php?movie=" + movieJson[i].MovieName + "\"><h4 class=\"mb-1\">" + movieJson[i].MovieName + "</h4></a>";
				}
				movies.innerHTML = movieString;
			}
		};
	request.open("GET","getMovieList.php?query="+queryString,true);
	request.send();
}

function actors(){
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if(this.readyState ==4 && this.status == 200){
				actorJson = JSON.parse(this.responseText);
				var actors = document.getElementById("actorentries");
				actorString = "";
				for(i in actorJson){
					actorString += "<a href =\"actor.php?actor=" + actorJson[i].CrewName + "\"><h4 class=\"mb-1\">" + actorJson[i].CrewName + "</h4></a>";
				}
				actors.innerHTML = actorString;
		}
		};
	request.open("GET","getActorList.php?query="+queryString,true);
	request.send();
}

function directors(){
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if(this.readyState ==4 && this.status == 200){
				directorJson = JSON.parse(this.responseText);
				var directors = document.getElementById("directorentries");
				directorString = "";
				for(i in directorJson){
					directorString += "<a href =\"director.php?director=" + directorJson[i].CrewName + "\"><h4 class=\"mb-1\">" + directorJson[i].CrewName + "</h4></a>";
				}
				directors.innerHTML = directorString;
		}
		};
	request.open("GET","getDirectorList.php?query="+queryString,true);
	request.send();
}

function productionmembers(){
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if(this.readyState ==4 && this.status == 200){
				productionJson = JSON.parse(this.responseText);
				var members = document.getElementById("productionentries");
				memberString = "";
				for(i in productionJson){
					memberString += "<a href =\"production.php?production=" + productionJson[i].CrewName + "\"><h4 class=\"mb-1\">" + productionJson[i].CrewName + "</h4></a>";
				}
				members.innerHTML = memberString;
		}
		};
	request.open("GET","getProductionMemberList.php?query="+queryString,true);
	request.send();
}

function producers(){
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if(this.readyState ==4 && this.status == 200){
				producerJson = JSON.parse(this.responseText);
				var producers = document.getElementById("producerentries");
				producerString = "";
				for(i in producerJson){
					producerString += "<a href =\"producers.php?producer=" + producerJson[i].ProducerName + "\"><h4 class=\"mb-1\">" + producerJson[i].ProducerName + "</h4></a>";
				}
				producers.innerHTML = producerString;
		}
		};
	request.open("GET","getProducerList.php?query="+queryString,true);
	request.send();
}

function distributors(){
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if(this.readyState ==4 && this.status == 200){
				distributorJson = JSON.parse(this.responseText);
				var distributors = document.getElementById("distributorentries");
				distributorString = "";
				for(i in distributorJson){
					distributorString += "<a href =\"distributors.php?distributor=" + distributorJson[i].DistributorName + "\"><h4 class=\"mb-1\">" + distributorJson[i].DistributorName + "</h4></a>";
				}
				distributors.innerHTML = distributorString;
		}
		};
	request.open("GET","getDistributorList.php?query="+queryString,true);
	request.send();
}
