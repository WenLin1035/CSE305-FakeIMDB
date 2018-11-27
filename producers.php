<?php
	$search_value = $_GET['producer'];
	if($search_value == ''){
		header("Location: http://cse305fakeimdb.x10host.com/");
		die();
	}
	$conn = new mysqli("localhost", "cse305fa_admin", "nicememe", "cse305fa_imdb");
	$sql ="SELECT Producer.ProducerID FROM Producer, Produces, Movie WHERE Producer.ProducerName LIKE '$search_value'";
	$result = $conn->query($sql);
	if($result->num_rows == 0){
		header("Location: http://cse305fakeimdb.x10host.com/");
		die();
	}
?>
<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>FAKEIMDB</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="apple-touch-icon" href="apple-touch-icon.png">

        <link rel="stylesheet" href="css/bootstrap.min.css">
        <style>
            body {
                padding-top: 50px;
                padding-bottom: 20px;
            }
        </style>
        <link rel="stylesheet" href="css/bootstrap-theme.min.css">
        <link rel="stylesheet" href="css/main.css?v=1.5">

        <script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>
		<script>
			var moviesJson;
			urlParams = new URLSearchParams(window.location.search);
			producerString = urlParams.get('producer');
			function generatePage(){
				var request = new XMLHttpRequest();
				request.onreadystatechange = function(){
					if(this.readyState ==4 && this.status == 200){
							moviesJson = JSON.parse(this.responseText);
							var producer = document.getElementById("produced");
							document.getElementById("title").innerHTML = producerString;
							var productionString = "";
							for(i in moviesJson){
								productionString +=   "<a href =\"movie.php?movie=" + moviesJson[i].MovieName + "\">" + moviesJson[i].MovieName + "</a> ";
								productionString += "<br/>";
							}
							
							producer.innerHTML = productionString;
						}
					};
				
				request.open("GET","generateProducerPage.php?query="+producerString,true);
				request.send();
			}
		</script>
    </head>
    <body>
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        
    <nav id="toppanel" class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
            <a class="navbar-brand" href="/" style="color: white"><font size="72"><b><i>FAKEIMDB</i></b></font></a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <form class="navbar-form navbar-right" role="form" action = "/search.html">
            <div class="form-group">
              <input type="text" placeholder="" class="form-control" name = "query" >
            </div>
            <input type="image" class="btTxt submit" id="searchicon" src="img/v.PNG"  alt="Search"/>
          </form>
        </div><!--/.navbar-collapse -->
      </div>
    </nav>
    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="jumbotron">
      <div class="container">
          <ul id="nav">
              <li>
                  <a href="/">HOME</a>
              </li>
              <li>
                  <a href="/movies.php">MOVIES</a>
              </li>
              <li>
                  <a href = "/login.php">ADMINISTRATION</a>
              </li>
          </ul>
        
        
      </div>
    </div>

    <div class="container">
      <!-- Example row of columns -->
      <div class="row">
        <div class="col-md-8" id = "movie_section">
			<div id = "movieTitle"><font id = "title" size="72"></font></div>
			<div><h2> Movies Produced: </h2>
			<span id = "produced"></span>
		</div>
		
      </div>
      
      <footer>
        <p class="bottom-left">&copy; Wen Lin, Jeffrey Wong, David Xie</p>
      </footer>
    </div> <!-- /container -->        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')</script>

        <script src="js/vendor/bootstrap.min.js"></script>

        <script src="js/main.js"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X','auto');ga('send','pageview');
			generatePage();
        </script>
    </body>
</html>