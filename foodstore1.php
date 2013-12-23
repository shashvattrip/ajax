<?php
header("Content-type: text/xml");
//this is for houskeeping when we want to generate xml files from this php files
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';
echo '<response>';

	$food=$_GET['food'];
	$foodArray=array('tuna','bacon','ham','beef','loaf');
	if(in_array($food, $foodArray))
		echo 'We do have '.$food.'!';
	elseif ($food=='') 
	{
		echo 'Enter food you idiot!';
	}
	else
		echo 'Sorry, we dont have'.$food.'!';

echo '</response>';

?>
