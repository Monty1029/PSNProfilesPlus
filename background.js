/*Game information*/

var gameTitleParent = document.getElementsByClassName("grow")[5];
var gameTitleRaw = gameTitleParent.getElementsByTagName("h3")[0].textContent;
var gameTitle = "";
for (var i = 0; i < gameTitleRaw.length; i++) {
    if (gameTitleRaw.charCodeAt(i) === 8250) {
        for (var j = i+1; j < gameTitleRaw.length; j++) {
            gameTitle += gameTitleRaw[j];
        }
    }
}
console.log(gameTitle);

/*Metacritic scores*/

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

/*Amazon link*/

var editedGameTitle = gameTitle;
var amazonBaseURL = "https://www.amazon.ca/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=";
editedGameTitle = editedGameTitle.replace(/ /g,"+");
var amazonSearchURL = amazonBaseURL + editedGameTitle;
var trow_amazon = document.createElement("tr");
var tdata_amazon = document.createElement("td");
var amazon_link = document.createTextNode(amazonSearchURL);
var amazon_link_text = document.createTextNode("Buy now on Amazon");
var tdata_amazon_link = document.createElement("td");
var ahref = document.createElement("a");
ahref.href = amazonSearchURL;
ahref.appendChild(amazon_link_text);
tdata_amazon_link.appendChild(ahref);
tdata_amazon.appendChild(amazon_link);
var amazon_link_row = document.getElementsByClassName("gameInfo zebra")[0].appendChild(tbody).appendChild(trow_amazon);
amazon_link_row.appendChild(tdata_amazon_link);

/*Base Game Trophy Points*/

var baseGame = document.getElementsByClassName("title")[3].textContent;
console.log(baseGame);