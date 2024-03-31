/* common.js */

var $body = document.querySelector("body"); // .showMenu
var $resBtn = document.querySelector(".resBtn"); // .active
var $nav = document.querySelector("header nav"); // .active

/* 반응형에서 클릭할 대상(for Showing Menu) */
var $menuBtn = document.querySelector(".resBtn .menuBtn");
var $closeBtn = document.querySelector(".resBtn .closeBtn");

$menuBtn.addEventListener("click", function(){
    $body.classList.add("showMenu");
    $resBtn.classList.add("active");
    $nav.classList.add("active");
});

$closeBtn.addEventListener("click", function(){
    $body.classList.remove("showMenu");
    $resBtn.classList.remove("active");
    $nav.classList.remove("active");
})