"use strict";

function changeContent(evt, featureName) {
    var i, tabcontent, tablinks, tabtext;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(featureName).style.display = "flex";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();