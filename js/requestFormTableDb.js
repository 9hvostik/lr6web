//запрос для кнопки 'Просмотр таблиц'
window.addEventListener("load", function () {
    function sendData() {
        //var url = new URL("https://localhost:80/cgi-bin/var19.py");
        var path = '../php/outputTables.php';
        const XHR = new XMLHttpRequest();

        // Define what happens on successful data submission
        XHR.addEventListener("load", function (event) {
            //alert(event.target.responseText);

            document.getElementById("tableDbContent").innerHTML = XHR.responseText;
        });

        // Define what happens in case of error
        XHR.addEventListener("error", function (event) {
            alert("Oops! Something went wrong.");
        });

        // Set up our request
        XHR.open("GET", path);

        // The data sent is what the user provided in the form
        XHR.send();
    }

    // Access the form element...
    const button = document.getElementById("buttonGetTables");

    // ...and take over its submit event.
    button.addEventListener("click", function (event) {
        event.preventDefault();

        sendData();
    });
});

//запрос для кнопки 'Просмотр таблиц без служебных полей'
window.addEventListener("load", function () {
    function sendData() {
        //var url = new URL("https://localhost:80/cgi-bin/var19.py");
        var path = '../php/outputTablesWithoutKeys.php';
        const XHR = new XMLHttpRequest();

        // Define what happens on successful data submission
        XHR.addEventListener("load", function (event) {

            document.getElementById("tableDbContent").innerHTML = XHR.responseText;
        });

        // Define what happens in case of error
        XHR.addEventListener("error", function (event) {
            alert("Oops! Something went wrong.");
        });

        // Set up our request
        XHR.open("GET", path);

        // The data sent is what the user provided in the form
        XHR.send();
    }

    // Access the form element...
    const button = document.getElementById("buttonGetTablesWithoutKeys");

    // ...and take over its submit event.
    button.addEventListener("click", function (event) {
        event.preventDefault();

        sendData();
    });
});

//запрос для кнопки 'Добавить читателя'
window.addEventListener("load", function () {
    function sendData(form) {
        //var url = new URL("https://localhost:80/cgi-bin/var19.py");
        var path = '../php/addReader.php';
        const XHR = new XMLHttpRequest();

        // Bind the FormData object and the form element
        const FD = new FormData(form);
        // Define what happens on successful data submission
        XHR.addEventListener("load", function (event) {

            document.getElementById("tableDbContent").innerHTML = XHR.responseText;
        });

        // Define what happens in case of error
        XHR.addEventListener("error", function (event) {
            alert("Oops! Something went wrong.");
        });

        // Set up our request
        XHR.open("POST", path);

        // The data sent is what the user provided in the form
        XHR.send(FD);
    }

    // Access the form element...
    const button = document.getElementById("buttonAddReader");

    // ...and take over its submit event.
    button.addEventListener("click", function (event) {
        var formHtml = `<article> 
                            <H1>Добавление читателя</H1>
                            <HR>
                            <form id='formAddReader' class='formDB' method='POST'>
                                <H3>Заполните форму  и нажмите кнопку</H3>
                                <table>
                                    <tr>
                                        <th align=right>Имя:
                                        <td><input type=text name=name required>
                                            <span class="validity"></span>

                                    <tr>
                                        <th align=right>Фамилия:
                                        <td><input type=text name=surname>
                                    <tr>
                                        <th align=right>Отчество:
                                        <td><input type=text name=patronymic>
                                    <tr>
                                        <th align=right>Опыт разработки на языке Kotlin(кол-во лет):
                                        <td><input type=number name=experience required>
                                            <span class="validity"></span>
                                    <tr>
                                        <TD>
                                        <TD>
                                            <input type=submit value="Добавить читателя">
                                </table>
                            </form>
                            <hr>
                        </article>`;
        document.getElementById("forms").innerHTML = formHtml;

        document.getElementById("formAddReader").addEventListener("submit", function (event) {
            event.preventDefault();

            sendData(this);
        });

       
    });
});

//запрос для кнопки 'Добавить отзыв'
window.addEventListener("load", function () {
    function sendData(form) {
        //var url = new URL("https://localhost:80/cgi-bin/var19.py");
        var path = '../php/addFeedback.php';
        const XHR = new XMLHttpRequest();

        // Bind the FormData object and the form element
        const FD = new FormData(form);
        // Define what happens on successful data submission
        XHR.addEventListener("load", function (event) {

            document.getElementById("tableDbContent").innerHTML = XHR.responseText;
        });

        // Define what happens in case of error
        XHR.addEventListener("error", function (event) {
            alert("Oops! Something went wrong.");
        });

        // Set up our request
        XHR.open("POST", path);

        // The data sent is what the user provided in the form
        XHR.send(FD);
    }

    // Access the form element...
    const button = document.getElementById("buttonAddFeedback");

    // ...and take over its submit event.
    button.addEventListener("click", function (event) {
        var formHtml = `<article> 
                            <H1>Добавление отзыва</H1>
                            <HR>
                            <form id='formAddFeedback' class='formDB' method='POST'>
                                <H3>Заполните форму  и нажмите кнопку</H3>
                                <table>
                                    <tr>
                                        <th align=right>Id читателя:
                                        <td><input type=text name=readerID required>
                                            <span class="validity"></span>
                                    <tr>
                                        <th align=right>Оценка(от 1 до 5):
                                        <td><input type=number name=score min=1 max=5 required>
                                            <span class="validity"></span>
                                    <tr>
                                        <th align=right>Тема:
                                        <td><input type=text name=theme required>
                                            <span class="validity"></span>
                                    <tr>
                                        <th align=right>Отзыв:
                                        <td><textarea cols=30 rows=4 name=text name=text></textarea>
                                    <tr>
                                        <TD>
                                        <TD>
                                            <input type=submit value="Добавить отзыв">
                                </table>
                            </form>
                            <hr>
                        </article>`;
        document.getElementById("forms").innerHTML = formHtml;

        document.getElementById("formAddFeedback").addEventListener("submit", function (event) {
            event.preventDefault();

            sendData(this);
        });


    });
});


//запрос для кнопки 'Удалить читателя'
window.addEventListener("load", function () {
    function sendData(form) {
        //var url = new URL("https://localhost:80/cgi-bin/var19.py");
        var path = '../php/delReader.php';
        const XHR = new XMLHttpRequest();

        // Bind the FormData object and the form element
        const FD = new FormData(form);
        // Define what happens on successful data submission
        XHR.addEventListener("load", function (event) {

            document.getElementById("tableDbContent").innerHTML = XHR.responseText;
        });

        // Define what happens in case of error
        XHR.addEventListener("error", function (event) {
            alert("Oops! Something went wrong.");
        });

        // Set up our request
        XHR.open("POST", path);

        // The data sent is what the user provided in the form
        XHR.send(FD);
    }

    // Access the form element...
    const button = document.getElementById("buttonDelReader");

    // ...and take over its submit event.
    button.addEventListener("click", function (event) {
        var formHtml = `<article> 
                            <H1>Удаление читателя</H1>
                            <HR>
                            <form id='formDelReader' class='formDB' method='POST'>
                                <H3>Заполните форму  и нажмите кнопку</H3>
                                <table>
                                    <tr>
                                        <th align=right>Id читателя:
                                        <td><input type=text name=readerID required>
                                            <span class="validity"></span>
                                    <tr>
                                        <TD>
                                        <TD>
                                            <input type=submit value="Удалить читателя">
                                </table>
                            </form>
                            <hr>
                        </article>`;
        document.getElementById("forms").innerHTML = formHtml;

        document.getElementById("formDelReader").addEventListener("submit", function (event) {
            event.preventDefault();
            sendData(this);
        });


    });
});


//запрос для кнопки 'Удалить отзыв'
window.addEventListener("load", function () {
    function sendData(form) {
        //var url = new URL("https://localhost:80/cgi-bin/var19.py");
        var path = '../php/delFeedback.php';
        const XHR = new XMLHttpRequest();

        // Bind the FormData object and the form element
        const FD = new FormData(form);
        // Define what happens on successful data submission
        XHR.addEventListener("load", function (event) {

            document.getElementById("tableDbContent").innerHTML = XHR.responseText;
        });

        // Define what happens in case of error
        XHR.addEventListener("error", function (event) {
            alert("Oops! Something went wrong.");
        });

        // Set up our request
        XHR.open("POST", path);

        // The data sent is what the user provided in the form
        XHR.send(FD);
    }

    // Access the form element...
    const button = document.getElementById("buttonDelFeedback");

    // ...and take over its submit event.
    button.addEventListener("click", function (event) {
        var formHtml = `<article> 
                            <H1>Удаление читателя</H1>
                            <HR>
                            <form id='formDelFeedback' class='formDB' method='POST'>
                                <H3>Заполните форму  и нажмите кнопку</H3>
                                <table>
                                    <tr>
                                        <th align=right>Id отзыва:
                                        <td><input type=text name=feedbackID required>
                                            <span class="validity"></span>
                                    <tr>
                                        <TD>
                                        <TD>
                                            <input type=submit value="Удалить отзыв">
                                </table>
                            </form>
                            <hr>
                        </article>`;
        document.getElementById("forms").innerHTML = formHtml;

        document.getElementById("formDelFeedback").addEventListener("submit", function (event) {
            event.preventDefault();
            sendData(this);
        });


    });
});


//запрос для кнопки 'Просмотр отзывов'
window.addEventListener("load", function () {
    function sendData() {
        //var url = new URL("https://localhost:80/cgi-bin/var19.py");
        var path = '../php/viewingFeedbacks.php';
        const XHR = new XMLHttpRequest();

        // Define what happens on successful data submission
        XHR.addEventListener("load", function (event) {
            //alert(event.target.responseText);

            document.getElementById("tableDbContent").innerHTML = XHR.responseText;
            document.getElementById("forms").innerHTML = "";
        });

        // Define what happens in case of error
        XHR.addEventListener("error", function (event) {
            alert("Oops! Something went wrong.");
        });

        // Set up our request
        XHR.open("GET", path);

        // The data sent is what the user provided in the form
        XHR.send();
    }

    // Access the form element...
    const button = document.getElementById("buttonViewingFeedbacks");

    // ...and take over its submit event.
    button.addEventListener("click", function (event) {
        event.preventDefault();

        sendData();
    });
});