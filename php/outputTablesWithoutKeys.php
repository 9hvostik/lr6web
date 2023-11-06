
<?php

	header("Content-Type: text/html; charset=utf-8");
	$hostname="lr6web";
	$username="root";
	$password="";
	$dbName="website";

	/* создать соединение */
	$mysqli = new mysqli($hostname,$username,$password,$dbName) OR DIE("Не могу создать соединение ");

	/*Получение названия всех таблиц из БД*/
	$resultTableNames = $mysqli->query("SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA='".$dbName."'");
	
	echo("<article>");

	while($tableName = $resultTableNames->fetch_assoc())
	{

		$resultDataTable = $mysqli->query("SELECT * FROM ".$tableName["TABLE_NAME"]."");
		$numColumnWithoutKeys=0;
		$columnsName=array();
		while($column = $resultDataTable->fetch_field())
		{
			if(!($column->flags & MYSQLI_PRI_KEY_FLAG) && !($column->flags & MYSQLI_MULTIPLE_KEY_FLAG))
			{
				$numColumnWithoutKeys++;
				array_push($columnsName, $column->name);
			}
				
		}
		$resultDataTable->data_seek(0);

		printf("<table class ='table-content'border=1 align='center'><thead><tr><th colspan='%d'scope='colgroup'> %s </th></tr><tr>",$numColumnWithoutKeys, $tableName["TABLE_NAME"]);
		
		foreach($columnsName as $name)
			printf("<th>%s</th>", $name);

		printf("</tr></thead><tbody>");

		$rows = $resultDataTable->fetch_all(MYSQLI_ASSOC);
		foreach ($rows as $row) {

			printf("<tr>");
			
			foreach($columnsName as $name)
				printf("<td>%s</td>", $row[$name]);
			
			printf("</tr>");	
		}
		printf("</tbody></table>");		
	}

	echo("</article>");
	
	$mysqli->close();

	//-----------ШПОРЫ-------------
	/*
		foreach ($array as $key => $element) {
			if ($key === array_key_first($array)) {
				echo 'FIRST ELEMENT!';
			}

			if ($key === array_key_last($array)) {
				echo 'LAST ELEMENT!';
			}
		}
	*/
	
	/*
		MYSQLI_PRI_KEY_FLAG (int)
			Поле является частью первичного индекса.

		MYSQLI_UNIQUE_KEY_FLAG (int)
			Поле является частью уникального индекса.

		MYSQLI_MULTIPLE_KEY_FLAG (int)
			Поле является частью индекса.
	*/


	/*	Сброс указателя на начало набора результатов 
		$result->data_seek(0);
	*/


	/*
		mysqli_result::fetch_field_direct — Получение метаданных конкретного поля
		public mysqli_result::fetch_field_direct(int $index): object|false

						Свойства объекта
		Свойство			Описание
		name				Имя столбца
		orgname				Исходное имя столбца, если у него есть псевдоним
		table				Имя таблицы, которой принадлежит столбец (если не вычислено)
		orgtable			Исходное имя таблицы, если есть псевдоним
		def					Зарезервировано для значения по умолчанию, на данный момент всегда ""
		max_length			Максимальная ширина поля результирующего набора. Начиная с PHP 8.1, это значение всегда 0.
		length				Ширина поля, как она задана при определении таблицы.
		charsetnr			Количество наборов символов для поля.
		flags				Целое число, представляющее битовые флаги для поля.
		type				Тип данных поля
		decimals			Число знаков после запятой (для числовых полей)
	*/


	/*
		mysqli_result::fetch_field — Возвращает следующее поле результирующего набора
		public mysqli_result::fetch_field(): object|false
		Возвращает объект, содержащий определение поля или false, если столбцы в результирующей таблице закончились.
		Возвращает информацию об одном столбце результирующего набора в виде объекта. 
		Чтобы получить определения всех столбцов, просто запустите эту функцию многократно.

					Свойства объекта
		Свойство			Описание
		name				Имя столбца
		orgname				Исходное имя столбца, если у него есть псевдоним
		table				Имя таблицы, которой принадлежит столбец (если не вычислено)
		orgtable			Исходное имя таблицы, если есть псевдоним
		def					Зарезервировано для значения по умолчанию, на данный момент всегда ""
		db					Имя базы данных
		catalog				Имя каталога, всегда "def"
		max_length			Максимальная ширина поля результирующего набора.
		length				Ширина поля, как она задана при определении таблицы.
		charsetnr			Количество наборов символов для поля.
		flags				Целое число, представляющее битовые флаги для поля.
		type				Тип данных поля
		decimals			Число знаков после запятой (для целочисленных полей)

	*/
	//-----------------------------------------------------------------------------

?>



