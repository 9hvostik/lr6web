window.addEventListener("load", function () {
    function sendData() {
        //var url = new URL("https://localhost:80/cgi-bin/var19.py");
        var path = '../cgi-bin/var19.py';
        const XHR = new XMLHttpRequest();

        // Bind the FormData object and the form element
        const FD = new FormData(form);

        // Define what happens on successful data submission
        XHR.addEventListener("load", function (event) {
            //alert(event.target.responseText);

            document.getElementById("response").innerHTML = XHR.responseText.toString("UTF-8");
            //console.log(event.target.response);
            //console.log(event.target.responseURL);
        });

        // Define what happens in case of error
        XHR.addEventListener("error", function (event) {
            alert("Oops! Something went wrong.");
        });
        
        var params = new URLSearchParams(FD).toString();    //добавление параметров в url
        path = path + '?' + params;
        //console.log(path);


        // Set up our request
        XHR.open("GET", path);

        // The data sent is what the user provided in the form
        XHR.send();
    }

    // Access the form element...
    const form = document.getElementById("form");

    // ...and take over its submit event.
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        sendData();
    });
});


//var form = document.getElementById("form");
//form.addEventListener("submit", sendRequest);

//let xhr = new XMLHttpRequest();

//xhr.open('GET', '../cgi-bin/var19.py');

//xhr.onload = function () {
//    if (xhr.readyState == 4 && xhr.status != 200) { // HTTP error?
//        // handle error
//        alert('Error: ' + xhr.status);
//        return;
//    }
//    else {
//        if (document.getElementById("result")) {
//            document.getElementById("response").innerHTML = "";
//        }
        
//        document.getElementById("response").innerHTML = xhr.response;
//    }
//    // get the response from xhr.response
//}

////xhr.onprogress = function (event) {
////    // report progress
////    alert(`Loaded ${event.loaded} of ${event.total}`);
////};

//xhr.onerror = function () {
//    // handle non-HTTP error (e.g. network down)
//}
//function sendRequest(event) {
//    event.preventDefault();
//    formData = new FormData(form);
//    xhr.send(formData);
//}

