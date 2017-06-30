var gameTitleParent = document.getElementsByClassName("grow")[5];
var gameTitleRaw = gameTitleParent.getElementsByTagName("h3")[0].textContent;
var gameTitle = "";

gameInformation();
//metacriticScores();
amazonLink();
baseGameTrophyPoints();

/*Game information*/
function gameInformation() {
    for (var i = 0; i < gameTitleRaw.length; i++) {
        if (gameTitleRaw.charCodeAt(i) === 8250) {
            for (var j = i+1; j < gameTitleRaw.length; j++) {
                gameTitle += gameTitleRaw[j];
            }
        }
    }
    console.log(gameTitle);
}

/*Metacritic scores*/
/*function metacriticScores() {
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
}*/

/*Amazon link*/
function amazonLink() {
    var editedGameTitle = gameTitle;
    var amazonBaseURL = "https://www.amazon.ca/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=";
    editedGameTitle = editedGameTitle.replace(/ /g,"+");
    var amazonSearchURL = amazonBaseURL + editedGameTitle;
    var tbodyAmazon = document.createElement("tbody");
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
    var amazon_link_row = document.getElementsByClassName("gameInfo zebra")[0].appendChild(tbodyAmazon).appendChild(trow_amazon);
    amazon_link_row.appendChild(tdata_amazon_link);
}

/*Base Game Trophy Points*/
function baseGameTrophyPoints() {
    var baseGame = document.getElementsByClassName("title")[2].textContent;
    var BRONZE_POINTS = 15;
    var SILVER_POINTS = 30;
    var GOLD_POINTS = 90;
    var PLATINUM_POINTS = 180;
    var totalPoints = 0;
    var trophyGrade = "";
    if (baseGame == "Base Game") {
        var trophyListParent = document.getElementsByClassName("zebra")[2];
        var trophyListLength = trophyListParent.querySelectorAll("table.zebra tr").length;
        for(var i=2; i < (trophyListLength*3)-3; i+=3) {
            trophyGrade = trophyListParent.querySelectorAll("table.zebra img")[i].getAttribute("title");
            if (trophyGrade == "Bronze") {
                totalPoints += BRONZE_POINTS;
            }
            else if(trophyGrade == "Silver") {
                totalPoints += SILVER_POINTS;
            }
            else if(trophyGrade == "Gold") {
                totalPoints += GOLD_POINTS;
            }
            else if(trophyGrade == "Platinum") {
                totalPoints += PLATINUM_POINTS;
            }
        }
        console.log(totalPoints);
        var trophyPointsDiv = document.createElement("div");
        var trophyPointsSpan = document.createElement("span");
        var trophyPointsText = document.createTextNode(totalPoints + " Points");
        trophyPointsDiv.appendChild(trophyPointsText);
        trophyPointsSpan.appendChild(trophyPointsDiv);
        var baseGameHeader = document.getElementsByClassName("zebra")[1].querySelectorAll("td")[3];
        trophyPointsSpan.style.fontWeight = "700";
        baseGameHeader.appendChild(trophyPointsSpan);
    }
}