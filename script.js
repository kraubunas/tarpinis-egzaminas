"use strict";

var buttons = document.querySelectorAll("a");

buttons.forEach(a => {
    a.addEventListener("click", function () {
        buttons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
    })
});

var burger = document.getElementById("burger")
var close = document.getElementById("close");
var sideMenu = document.getElementById("side-menu")

burger.addEventListener("click", function () {
    sideMenu.classList.toggle("width")
    this.classList.toggle("rotateZ")
})

window.addEventListener("resize", function () {
    if (window.innerWidth > 1023) {
        sideMenu.classList.toggle("width")
        burger.classList.remove("rotateZ")
    }
})
