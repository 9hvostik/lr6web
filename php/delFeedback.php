<?php
header("Content-Type: text/html; charset=utf-8");
	
	$hostname="lr6web";
	$username="root";
	$password="";
	$dbName="website";
	$userstable="Feedback";
	/* создать соединение */
	$mysqli = new mysqli($hostname,$username,$password,$dbName) OR DIE("Не могу создать соединение ");

	$query = "DELETE FROM ".$userstable." WHERE feedbackID = ?;";
	
	$stmt = $mysqli->prepare($query);
	$stmt->bind_param("i", $_POST['feedbackID']);
	$stmt->execute();
	echo("<code><pre>");
	if ($stmt->error) {
		try {    
			throw new Exception("MySQL error $mysqli->error\nQuery: $query", $mysqli->errno);    
		} catch(Exception $e ) {
			echo "Error No: ".$e->getCode(). " - ". $e->getMessage();
			echo nl2br($e->getTraceAsString());
		}
	}
	else{
		echo("Отзыв удален успешно!");
	}
	echo("</code></pre>");

	$mysqli->close();
?>