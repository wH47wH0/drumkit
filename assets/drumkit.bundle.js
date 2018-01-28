"use strict";

document.addEventListener("DOMContentLoaded", function () {
    var playSound = function playSound(e) {
        var audio = document.querySelector("audio[data-key=\"" + e.keyCode + "\"]");
        var key = document.querySelector(".key[data-key=\"" + e.keyCode + "\"]");
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();
        key.classList.add("playing");
    };

    var remvTrans = function remvTrans(e) {
        if (e.propertyName !== "transform") return;
        this.classList.remove("playing");
    };

    var keys = document.querySelectorAll(".key");
    keys.forEach(function (key) {
        return key.addEventListener("transitionend", remvTrans);
    });

    window.addEventListener("keydown", playSound);
});
