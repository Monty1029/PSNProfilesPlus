var div=document.createElement("div"); 
document.body.appendChild(div); 
div.innerText="test123";

var tbody = document.createElement("tbody");
var trow = document.createElement("tr");
var tdata_metacritic = document.createElement("td");
var metacritic = document.createTextNode("Metacritic");
tdata_metacritic.appendChild(metacritic);
var tdata_score = document.createElement("td");
var score = document.createTextNode("94");
tdata_score.appendChild(score);
var extra_row = document.getElementsByClassName("gameInfo zebra")[0].appendChild(tbody).appendChild(trow);
extra_row.appendChild(tdata_metacritic);
extra_row.appendChild(tdata_score);