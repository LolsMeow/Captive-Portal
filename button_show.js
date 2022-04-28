document.getElementById("some-button").style.display = "none";

function showStuff() {
    document.getElementById("some-button").style.display = "inline";
}

setTimeout(showStuff, count*1000);