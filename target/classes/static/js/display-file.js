

document.getElementById("btnDisplay").addEventListener("click", function(event){
    var displayFile = document.getElementById('displayFile');
    displayFile.src = "/downloadFile/abc.txt";
    // var xhr = new XMLHttpRequest();
    // xhr.open("GET", "/downloadFile/abc.txt", false);
    // xhr.onreadystatechange = function() {
    //     console.log("fsfsdfd");
    //     console.log(xhr.responseText);
    //
    //     var displayFile = document.getElementById('displayFile');
    //     displayFile.src = "data:text/html;charset=utf-8," + escape(xhr.responseText);
    //
    // }
    // xhr.send(null);
})