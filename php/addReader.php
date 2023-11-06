
<?php
//H:/Programms/OSPanel/modules/php/PHP_8.0/php-cgi.exe
	header("Content-Type: text/html; charset=utf-8");
	echo("<code><pre>");
	$hostname="lr6web";
	$username="root";
	$password="";
	$dbName="website";
	$userstable="Reader";
	/* создать соединение */
	$mysqli = new mysqli($hostname,$username,$password,$dbName) OR DIE("Не могу создать соединение ");

	$query = "INSERT INTO ".$userstable."(name, surname, patronymic, experience) VALUES (?, ?, ?, ?);";
	
	$stmt = $mysqli->prepare($query);
	$stmt->bind_param("sssi", $_POST['name'], $_POST['surname'], $_POST['patronymic'], $_POST['experience']);
	if($stmt->execute())
		echo("Читатель успешно добавлен!");
	else
		echo("При добавлении читателя произошла ошибка!");
	


	
	echo("</code></pre>");


	$mysqli->close();

	//-----ШПОРЫ-------
	/*
		Подготавливаемые запросы
		СУБД MySQL поддерживает подготавливаемые запросы. Подготавливаемые (или параметризованные) запросы используются для повышения эффективности, когда один запрос выполняется многократно и защищает от SQL-инъекций.

		Принцип работы

		Выполнение подготавливаемого запроса проводится в два этапа: подготовка и исполнение. На этапе подготовки на сервер посылается шаблон запроса. Сервер выполняет синтаксическую проверку этого шаблона, строит план выполнения запроса и выделяет под него ресурсы.

		MySQL сервер поддерживает неименованные, или позиционные, псевдопеременные ?.

		За подготовкой следует выполнение. Во время выполнения клиент связывает значения параметров и отправляет их на сервер. Сервер выполняет запрос со связанными значениями, используя ранее созданные внутренние ресурсы.
	*/

	/*
		Символы задающие тип
		Символ	Описание
		i		у соответствующей переменной тип int
		d		у соответствующей переменной тип float
		s		у соответствующей переменной тип string
		b		соответствующая переменная является большим двоичным объектом (blob) и будет пересылаться пакетами
	*/



		/*if ($mysqli->error) {
			try {    
				throw new Exception("MySQL error $mysqli->error\nQuery: $query", $mysqli->errno);    
			} catch(Exception $e ) {
				echo "Error No: ".$e->getCode(). " - ". $e->getMessage();
				echo nl2br($e->getTraceAsString());
			}
		}
		else{
			echo("Читатель добавлен успешно!");
		}*/
?>



