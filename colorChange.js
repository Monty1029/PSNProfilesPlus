var platinum = document.getElementsByClassName("platinum");
var completed = document.getElementsByClassName("completed");

for (var i = 1; i < platinum.length; i++) {
    platinum[i].style.background = "#dde7fb";
}

for (var i = 0; i < completed.length; i++) {
    completed[i].style.background = "#e8ffe4";
}