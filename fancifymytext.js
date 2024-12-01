document.getElementById("bigButton").onclick = function () {
    document.getElementById("textarea").style.fontSize = "24pt";
    alert("Hello, world!");
};

document.getElementById("FancyShmancy").onchange = function () {
    if (document.getElementById("FancyShmancy").checked) {
        document.getElementById("textarea").style.fontWeight = "bold";
        document.getElementById("textarea").style.color = "blue";
        document.getElementById("textarea").style.textDecoration = "underline";
    }
};

document.getElementById("BoringBetty").onchange = function () {
    if (document.getElementById("BoringBetty").checked) {
        document.getElementById("textarea").style.fontWeight = "normal";
        document.getElementById("textarea").style.color = "black";
        document.getElementById("textarea").style.textDecoration = "none";
    }
};

document.getElementById("Moo").onclick = function () {
    document.getElementById("textarea").value = document.getElementById("textarea").value.toUpperCase();
    let lines =  document.getElementById("textarea").value.split(".");

    for (let i = 0; i < lines.length; i++) {
        if (lines[i].length > 0) {
            lines[i] += "-Moo";
        }
    }
    document.getElementById("textarea").value = lines.join(".");
};

