<!DOCTYPE html>
<html>
<body>
    
<h2> Your Favourites </h2>

		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
		<link rel="stylesheet" href="style.css">
		<link rel="stylesheet" href="https://bootswatch.com/4/cyborg/bootstrap.min.css">
		<link rel="stylesheet" href="projectCss.css">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="css/bootstrap.min.css" />
		<meta charset="UTF-8">  
	
<?php

    $jsondata = file_get_contents("movies.php");
    $json = json_decode($jsondata, true);

    echo $json[0]['name'];
    
    $output = "<ul>";
    foreach ($json[movie] as $movie){
        $output .= "<h4>".$movie['title']."</h4>";
        $output .= "<li>".$movie['tagline']."</li>";
        $output .= "<li>".$movie['release_date']."</li>";
        $output .= "<li>".$movie['budget']."</li>";
		$output .= "<li>".$movie['runtime']."</li>";
		$output .= "<li>".$movie['popularity']."</li>";
    }
    $output .= "</ul>";
    echo $output;

?>



</body>
</html>