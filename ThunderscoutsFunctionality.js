// EVERY VARIABLE MUST BE DECLARED HERE AND CHANGED INSIDE THE FUNCTION (Function var's are local)
var firstName = document.getElementById("firstname");
var lastInit = document.getElementById("lastinitial");
var loginButton = document.getElementById("loginButton");
var teamNum = document.getElementById("teamnum")
var matchNum = document.getElementById("matchnum")
var allianceColor = document.getElementById("alliancecolor")
var cellsPreLoaded = document.getElementById("cellspreloaded")
var startingPos = document.getElementById("startingpos")
var directionMoved = document.getElementById("directionmoved")
var trenchCollected = document.getElementById("trenchcollected")
var enemyCollected = document.getElementById("enemycollected")
var shieldGenCollected = document.getElementById("shieldgencellscollected")


// THANK YOU!
firstName.addEventListener("input", updateLogin);// useless
lastInit.addEventListener("input", makeMaxTextFunction(1, "lastinitial")); // useless
lastInit.addEventListener("input", updateLogin); //useless
loginButton.addEventListener("click", login) // oh hey this is good

var prevStrings = {}; //I don't know what this stuff does

document.getElementById("loginButton").disabled = true;

function makeMaxTextFunction(maxLength, idName) {

    var limitText = 
    function () {

        var lastInit = document.getElementById(idName).value;

        if(lastInit.length > maxLength) {
            document.getElementById(idName).value = prevStrings[idName];
        }

        var lastInit = document.getElementById(idName).value;

        prevStrings[idName] = lastInit;
        console.log(prevStrings);
    }

    return limitText;

} // still don't know

function updateLogin() {  //Some of this was made redundant by yours truly, but the conditional remains.

    var firstName = document.getElementById("firstname").value;
    var lastInit = document.getElementById("lastinitial").value;

    if (firstName.length == 0 || lastInit.length == 0) {
        document.getElementById("loginButton").disabled = true;
    }
    else {
        document.getElementById("loginButton").disabled = false;
    }

} // end of B-tier programming

// Beginning of function city (there's probably a better way to do this but I don't wanna figure it out)

function firstnamefunc() {
    firstName = firstName.value
    console.log(firstName) 
}

function lastnamefunc() {
    lastInit = lastInit.value
    console.log(lastInit)
}

function teamnumfunc() {
    teamNum = teamNum.value
    console.log(teamNum)

}

function matchnumfunc() {
    matchNum = matchNum.value
    console.log(matchNum)
}

function alliancecolorfunc() {
    alliancecolor = alliancecolor.value
    console.log(alliancecolor)
}

function cellspreloadedfunc() {
    cellsPreLoaded = cellsPreLoaded.value
    console.log(cellsPreLoaded)
}

function startingposfunc() {
    startingPos = startingPos.value
    console.log(startingPos)
}

function directionmovedfunc() {
    directionMoved = directionMoved.value
    console.log(directionMoved)

}

function trenchcollectedfunc() {
    trenchCollected = trenchCollected.value
    console.log(trenchCollected)
}

function enemycollectedfunc() {
    enemyCollected = enemyCollected.value
    console.log(enemyCollected)

}

function shieldgencollectedfunc() {
    shieldGenCollected = shieldGenCollected.value
    console.log(shieldGenCollected)

}
// End of function city, code "should" work now.


//test area (ignore me)
    

//test are end (notice me)



function login() {
    console.log("page switch");
    window.location.href = "#prematch";
    console.warn(firstName, lastInit,teamNum, matchNum, alliancecolor, shieldGenCollected, enemyCollected, trenchCollected, directionMoved, startingPos, cellsPreLoaded)


}

