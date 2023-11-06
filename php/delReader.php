<?php
header("Content-Type: text/html; charset=utf-8");
	
	$hostname="lr6web";
	$username="root";
	$password="";
	$dbName="website";
	$userstable="Reader";
	/* создать соединение */
	$mysqli = new mysqli($hostname,$username,$password,$dbName) OR DIE("Не могу создать соединение ");

	$query = "DELETE FROM ".$userstable." WHERE readerID = ?;";
	
	$stmt = $mysqli->prepare($query);
	$stmt->bind_param("i", $_POST['readerID']);

	echo("<code><pre>");

	if($stmt->execute())
		echo("Читатель удалён!");
	else
		echo("При удалении читателя произошла ошибка!");
	
	echo("</code></pre>");


	$mysqli->close();
?>