<?php
header("Content-Type: text/html; charset=utf-8");
	echo("<code><pre>");
	$hostname="lr6web";
	$username="root";
	$password="";
	$dbName="website";
	$userstable="Feedback";
	/* создать соединение */
	$mysqli = new mysqli($hostname,$username,$password,$dbName) OR DIE("Не могу создать соединение ");

	$query = "INSERT INTO ".$userstable."(readerID, theme, score, text) VALUES (?, ?, ?, ?);";
	
	$stmt = $mysqli->prepare($query);
	$stmt->bind_param("ssis", $_POST['readerID'], $_POST['theme'], $_POST['score'], $_POST['text']);
	if($stmt->execute())
		echo("Отзыв успешно добавлен!");
	else
		echo("При добавлении отзыва произошла ошибка!");
	


	
	echo("</code></pre>");


	$mysqli->close();
?>