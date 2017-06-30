var platinum = document.getElementsByClassName("platinum");
var completed = document.getElementsByClassName("completed");

for (var i = 1; i < platinum.length; i++) {
    platinum[i].setAttribute("style", "background-color: #dde7fb !important");
}

for (var i = 0; i < completed.length; i++) {
    completed[i].setAttribute("style", "background-color: #e8ffe4 !important");
}