
document.getElementById("some-text").style.display = "inline";

function showStuff() {
    document.getElementById("some-text").style.display = "none";
}

setTimeout(showStuff, count*1000);