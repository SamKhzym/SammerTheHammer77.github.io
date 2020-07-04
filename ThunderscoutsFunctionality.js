var firstName = document.getElementById("firstname");
var lastInit = document.getElementById("lastinitial");
var loginButton = document.getElementById("loginButton");

firstName.addEventListener("input", updateLogin);
lastInit.addEventListener("input", makeMaxTextFunction(1, "lastinitial"));
lastInit.addEventListener("input", updateLogin);
loginButton.addEventListener("click", login)

var prevStrings = {};

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

}

function updateLogin() {

    var firstName = document.getElementById("firstname").value;
    var lastInit = document.getElementById("lastinitial").value;

    if (firstName.length == 0 || lastInit.length == 0) {
        document.getElementById("loginButton").disabled = true;
    }
    else {
        document.getElementById("loginButton").disabled = false;
    }

}

function login() {
    console.log("page switch");
    window.location.href = "#prematch";
}