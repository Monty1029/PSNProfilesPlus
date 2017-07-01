var platinum = document.getElementsByClassName("platinum");
var completed = document.getElementsByClassName("completed");

//Blue for platinum
for (var i = 1; i < platinum.length; i++) {
    platinum[i].setAttribute("style", "background-color: #dde7fb !important");
}

//Green for 100%
for (var i = 0; i < completed.length; i++) {
    completed[i].setAttribute("style", "background-color: #e8ffe4 !important");
}

//Red for hacker account
var rank = document.getElementsByClassName("rank");
if (rank.length == 0) {
    console.log("yay");
    var username = document.getElementsByClassName("username");
    username[0].setAttribute("style", "color: #ff0000 !important");
}