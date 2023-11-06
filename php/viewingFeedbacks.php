<?php
header("Content-Type: text/html; charset=utf-8");
	
	$hostname="lr6web";
	$username="root";
	$password="";
	$dbName="website";
	$tableReader="Reader";
	$tableFeedback="Feedback";
	/* создать соединение */
	$mysqli = new mysqli($hostname,$username,$password,$dbName) OR DIE("Не могу создать соединение ");

	$query = "SELECT * FROM Reader INNER JOIN Feedback ON Feedback.readerID=Reader.readerID ;";
	$queryWithNull = "SELECT * FROM Feedback WHERE readerID IS NULL;";
	$result = $mysqli->query($query);
	$resultWithNull = $mysqli->query($queryWithNull);
	if($result)
	{
		while($row=$result->fetch_assoc())
		{
			$scoreHtml="";
			$score = $row['score'];
			for($i=0; $i<5; $i++,$score--)
			{
				if($score>0)
				{
					$scoreHtml.= "<span class='active'></span>";
				}
				else
				{
					$scoreHtml.= "<span class='notActive'></span>";
				}
			}

			printf("<article class='feedback'><header class='headerFeedback'><table class='tableName'><tr><td>%s<td>%s<td>%s<td>Опыт: %d </table><section class='score'>%s</section><section class='dateTime'>%s</section></header><section class='theme'>%s <hr class='hrInFeedback'></section><section class='textFeedback'>%s</section></article> <hr class='hr-between-article' size='10'>",$row['surname'],$row['name'],$row['patronymic'], $row['experience'], $scoreHtml,$row['date'], $row['theme'], $row['text']);
		}
	}
	else
	{
		echo("<code><pre>");
		echo("Ошибка!");
		echo("</code></pre>");
	}
	
	if($resultWithNull)
	{
		while($row=$resultWithNull->fetch_assoc())
		{
			$scoreHtml="";
			$score = $row['score'];
			for($i=0; $i<5; $i++,$score--)
			{
				if($score>0)
				{
					$scoreHtml.= "<span class='active'></span>";
				}
				else
				{
					$scoreHtml.= "<span class='notActive'></span>";
				}
			}

			printf("<article class='feedback'><header class='headerFeedback'><table class='tableName'><tr><td>Аноним</table><section class='score'>%s</section><section class='dateTime'>%s</section></header><section class='theme'>%s<hr class='hrInFeedback'></section><section class='textFeedback'>%s</section></article> <hr class='hr-between-article' size='10'>",$scoreHtml,$row['date'], $row['theme'], $row['text']);
		}
	}
	else
	{
		echo("<code><pre>");
		echo("Ошибка!");
		echo("</code></pre>");
	}


	$mysqli->close();
?>