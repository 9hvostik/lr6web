//использование addEventListener
//использование события mousemove
//использование лямбда функции
//вызов всплывающего окна с ФИО и группой

document.getElementById("author-button").addEventListener("mousemove", () => alert("Автор: Пасюкова Екатерина Алексеевна\nГруппа: Z0431"));

//событие для добавления и удаления элемента списка
//document.getElementById("list-features").addEventListener("mouseenter", addAndRemoveLastLi);

var elem = document.getElementById("list-features");
if (elem)
    elem.addEventListener("mouseenter", addAndRemoveLastLi);

elem = document.getElementById("infobox");

if (elem) {
    elem.addEventListener("click", createTr);
    elem.addEventListener("auxclick", removeTr);
    elem.addEventListener("auxclick", createEmptyTr);
}
//document.getElementById("infobox").addEventListener("click", createTr);
//document.getElementById("infobox").addEventListener("auxclick", removeTr);
//document.getElementById("infobox").addEventListener("auxclick", createEmptyTr);
document.addEventListener("DOMContentLoaded", () => {    

    drawTime();

    setInterval(drawTime, 1000);

 })

var bColor = "#A0C1B8";
var css = "position:relative; right:40px; height: 20px; width:40px; padding: 4px;";

//использование функции с параметрами
document.addEventListener("DOMContentLoaded", setTimeStyle.bind(null, bColor, css));
//функция с параметрами
function setTimeStyle(color,text, even) {
    var elTime = document.getElementById("timeBlock");
    elTime.style.display = "inline-block";
    elTime.style.backgroundColor = color;   //изменение цвета
    elTime.style.border = "2px solid #726A95";
    elTime.style.borderRadius = "10px";
    elTime.style.cssText += text;   //изменение размера
}

//часы, в которых четные минуты красного цвета, а не четные синего
function drawTime() {
    var elHours = document.getElementById("timeHours");
    var elMinutes = document.getElementById("timeMinutes");
    var time = new Date();
    var h = time.getHours();
    var m = time.getMinutes();

    if (m % 2 == 0) {
        elMinutes.style.color = "red";
    }
    else {
        elMinutes.style.color = "blue";
    }

    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }

    elHours.innerHTML = h;
    elMinutes.innerHTML = m;
}

function createEmptyTr(even) {
    if (even.target.parentNode.nodeName == "TR" && even.button == 4) {
        var elTr = this.insertRow(even.target.parentNode.rowIndex);
        var elTd = elTr.insertCell(0);
        elTd.colSpan = 2;
        elTr.height = 5;
        elTr.setAttribute("data-js", "create-tr");
    }
}

//создание строки в таблице
function createTr(even) {
    if (even.target.parentNode.nodeName == "TR") {
        var elTr = this.insertRow(even.target.parentNode.rowIndex);
        var elTd = elTr.insertCell(0);
        elTd.textContent = Math.floor(Math.random()*10);
        elTd.colSpan = 2;
        elTr.setAttribute("data-js", "create-tr");
    }
    
}


function removeTr(even) {
    if (even.target.parentNode.nodeName == "TR" && even.button == 2 && even.target.parentNode.getAttribute("data-js") == "create-tr") {
            this.deleteRow(even.target.parentNode.rowIndex);
    }
}
    
function addAndRemoveLastLi(even) {
    var elUl = this;
    var items = elUl.children;
    var newElement = document.createElement("li");
    newElement.innerHTML = "<h3>Новый элемент списка</h3><p>Добавлен новый элемент!!</p>";
    
    if (items.length == 7) {
        elUl.appendChild(newElement);
    }
    else if (items.length == 8) {
        elUl.removeChild(items[items.length - 1]);
    }

}


////использование addEventListener
////использование события mousemove
////использование лямбда функции
////вызов всплывающего окна с ФИО и группой
//document.getElementById("author-button").addEventListener("mousemove", () => alert("Автор: Пасюкова Екатерина Алексеевна\nГруппа: Z0431"));
////событие для добавления и удаления элемента списка
//document.getElementById("list-features").addEventListener("mouseenter", addAndRemoveLastLi);

//document.getElementById("infobox").addEventListener("click", createTr);
//document.getElementById("infobox").addEventListener("auxclick", removeTr);
//document.getElementById("infobox").addEventListener("auxclick", createEmptyTr);
//document.addEventListener("DOMContentLoaded", () => {

//    drawTime();

//    setInterval(drawTime, 1000);

//})

//var bColor = "#A0C1B8";
//var css = "position:relative; right:40px; height: 20px; width:40px; padding: 4px;";

////использование функции с параметрами
//document.addEventListener("DOMContentLoaded", setTimeStyle.bind(null, bColor, css));
////функция с параметрами
//function setTimeStyle(color, text, even) {
//    var elTime = document.getElementById("timeBlock");
//    elTime.style.display = "inline-block";
//    elTime.style.backgroundColor = color;   //изменение цвета
//    elTime.style.border = "2px solid #726A95";
//    elTime.style.borderRadius = "10px";
//    elTime.style.cssText += text;   //изменение размера
//}

////часы, в которых четные минуты красного цвета, а не четные синего
//function drawTime() {
//    var elHours = document.getElementById("timeHours");
//    var elMinutes = document.getElementById("timeMinutes");
//    var time = new Date();
//    var h = time.getHours();
//    var m = time.getMinutes();

//    if (m % 2 == 0) {
//        elMinutes.style.color = "red";
//    }
//    else {
//        elMinutes.style.color = "blue";
//    }

//    if (h < 10) {
//        h = "0" + h;
//    }
//    if (m < 10) {
//        m = "0" + m;
//    }

//    elHours.innerHTML = h;
//    elMinutes.innerHTML = m;
//}

//function createEmptyTr(even) {
//    if (even.target.parentNode.nodeName == "TR" && even.button == 4) {
//        var elTr = this.insertRow(even.target.parentNode.rowIndex);
//        var elTd = elTr.insertCell(0);
//        elTd.colSpan = 2;
//        elTr.height = 5;
//        elTr.setAttribute("data-js", "create-tr");
//    }
//}

////создание строки в таблице
//function createTr(even) {
//    if (even.target.parentNode.nodeName == "TR") {
//        var elTr = this.insertRow(even.target.parentNode.rowIndex);
//        var elTd = elTr.insertCell(0);
//        elTd.textContent = Math.floor(Math.random() * 10);
//        elTd.colSpan = 2;
//        elTr.setAttribute("data-js", "create-tr");
//    }

//}


//function removeTr(even) {
//    if (even.target.parentNode.nodeName == "TR" && even.button == 2 && even.target.parentNode.getAttribute("data-js") == "create-tr") {
//        this.deleteRow(even.target.parentNode.rowIndex);
//    }
//}

//function addAndRemoveLastLi(even) {
//    var elUl = this;
//    var items = elUl.children;
//    var newElement = document.createElement("li");
//    newElement.innerHTML = "<h3>Новый элемент списка</h3><p>Добавлен новый элемент!!</p>";

//    if (items.length == 7) {
//        elUl.appendChild(newElement);
//    }
//    else if (items.length == 8) {
//        elUl.removeChild(items[items.length - 1]);
//    }

//}

