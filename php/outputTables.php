
<?php
//H:/Programms/OSPanel/modules/php/PHP_8.0/php-cgi.exe
	header("Content-Type: text/html; charset=utf-8");
	$hostname="lr6web";
	$username="root";
	$password="";
	$dbName="website";
	$userstable="Reader";
	/* создать соединение */
	$mysqli = new mysqli($hostname,$username,$password,$dbName) OR DIE("Не могу создать соединение ");

	/*$result = $mysqli->query("SHOW COLUMNS FROM Reader");
	
	
	

	/*Получение названия всех таблиц из БД*/
	$resultTableNames = $mysqli->query("SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA='".$dbName."'");

	
	$tableInfo = array();
	
	while($tableName = $resultTableNames->fetch_assoc())
	{
		
		$resultColumns = $mysqli->query("SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA='".$dbName."' AND TABLE_NAME='".$tableName["TABLE_NAME"]."'");
		
		$resultDataTable = $mysqli->query("SELECT * FROM ".$tableName["TABLE_NAME"]."");
		$columnName;
		for($i = 0; $i <= $resultDataTable->num_rows; $i++)
		{
			if($i>0)
				$row = $resultDataTable->fetch_assoc();
			for($j = 0; $j < $resultColumns->num_rows; $j++)
			{			
				if($i == 0)
				{
					$columnName = $resultColumns->fetch_assoc();
					$tableInfo[$tableName["TABLE_NAME"]][$i][$j]=$columnName["COLUMN_NAME"];
				}
				else if(!is_null($row))
				{			
					$columnName = $tableInfo[$tableName["TABLE_NAME"]][0][$j];
					$tableInfo[$tableName["TABLE_NAME"]][$i][$j]=$row[$columnName];				
				}				
				
			}
			
		}
	}

	$text = "<article>";
	foreach($tableInfo as $tableName=>$tableCells)
	{
		$text .="<table class ='table-content'border=1 align='center'><thead><tr><th colspan='".count($tableCells[0])."' scope='colgroup'>".$tableName."</th></tr>";
		for($i = 0; $i < count($tableCells); $i++)
		{
			$text .="<tr>";
			for($j = 0; $j<count($tableCells[0]); $j++)
			{
				if($i == 0)
				{
					$text .="<th>".$tableCells[$i][$j]."</th>";
				}
				else
				{
					$text .="<td>".$tableCells[$i][$j]."</td>";
				}
			}
			$text .="</tr>";
			if($i==0)
			{
				$text .="</thead><tbody>";
			}
			if($i == (count($tableCells)-1))
			{
				$text .="</tbody></table>";
			}
		}
	}
	$text .= "</article>";
	echo($text);
	
	$mysqli->close();

	//------!!!!ДОСТАТЬ ВСЮ ИНФОРМАЦИЮ ИЗ ВСЕХ ТАБЛИЦ ИЗ ЗАДАННОЙ БД (ассоциативный массив)!!!!----------
	/*$resultTableNames = $mysqli->query("SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA='".$dbName."'");

	
	$tableInfo = array();
	while($tableName = $resultTableNames->fetch_assoc())
	{
		
		$resultColumns = $mysqli->query("SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA='".$dbName."' AND TABLE_NAME='".$tableName["TABLE_NAME"]."'");

		
		while ($columnName = $resultColumns->fetch_assoc())
		{
			
			$tableInfo[$tableName["TABLE_NAME"]][$columnName["COLUMN_NAME"]] = "empty";
		}

		$resultDataTable = $mysqli->query("SELECT * FROM ".$tableName["TABLE_NAME"]."");
		while ($row = $resultDataTable->fetch_assoc()) 
		{
			foreach(array_keys($tableInfo[$tableName["TABLE_NAME"]]) as $columnName)
			{
				$tableInfo[$tableName["TABLE_NAME"]][$columnName]=$row[$columnName];
			}			
		}

	}*/
	//-----------------------------------------------------------------------------




	//------!!!!ДОСТАТЬ ВСЮ ИНФОРМАЦИЮ ИЗ ВСЕХ ТАБЛИЦ ИЗ ЗАДАННОЙ БД(ассоц. массив + обычный)!!!!----------
	/*	$resultTableNames = $mysqli->query("SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA='".$dbName."'");

	
	$tableInfo = array();
	
	while($tableName = $resultTableNames->fetch_assoc())
	{
		
		$resultColumns = $mysqli->query("SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA='".$dbName."' AND TABLE_NAME='".$tableName["TABLE_NAME"]."'");
		
		$resultDataTable = $mysqli->query("SELECT * FROM ".$tableName["TABLE_NAME"]."");
		$columnName;
		for($i = 0; $i <= $resultDataTable->num_rows; $i++)
		{
			if($i>0)
				$row = $resultDataTable->fetch_assoc();
			for($j = 0; $j < $resultColumns->num_rows; $j++)
			{			
				if($i == 0)
				{
					$columnName = $resultColumns->fetch_assoc();
					$tableInfo[$tableName["TABLE_NAME"]][$i][$j]=$columnName["COLUMN_NAME"];
				}
				else if(!is_null($row))
				{			
					$columnName = $tableInfo[$tableName["TABLE_NAME"]][0][$j];
					$tableInfo[$tableName["TABLE_NAME"]][$i][$j]=$row[$columnName];				
				}				
				
			}
			
		}
	}*/
	//-----------------------------------------------------------------------------
?>



