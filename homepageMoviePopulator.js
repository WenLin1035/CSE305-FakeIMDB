function generateMovie(){
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if(this.readyState ==4 && this.status == 200){
			var jsonObject = JSON.parse(this.responseText);
			var movies = document.getElementById("movie_section");
			var htmlGeneration = "";
			var outerSection = "<div class=\"row\" id=\"leftpanel\"><h2>";
			var section2 = "</h2><img src = \"img/";
			var section3 = ".jpg\" alt = \"";
			var section4 = "\" id = \"i1\">  <p><a class=\"btn btn-default\" href=\"\\movie.php?movie=";
			var section5 = "\" role=\"button\">View details &raquo;</a></p> </div>";
			for(i in jsonObject){
				htmlGeneration = htmlGeneration + outerSection +  jsonObject[i].MovieName + section2 +"0" +jsonObject[i].MovieID + section3 +  jsonObject[i].MovieName + section4 + jsonObject[i].MovieName + section5;
			}
			movies.innerHTML = htmlGeneration;
		}
	};
	request.open("GET","getMovieList.php?query=",true);
	request.send();
}