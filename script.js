"use strict";

var buttons = document.querySelectorAll("a");

buttons.forEach(a => {
    a.addEventListener("click", function () {
        buttons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
    })
});