"use strict";var vimeoURLlist=["https://vimeo.com/314887001","https://vimeo.com/314890554","https://vimeo.com/314891691","https://vimeo.com/314891724","https://vimeo.com/314891741","https://vimeo.com/314891771","https://vimeo.com/314891809","https://vimeo.com/314891829"];function init(){var t=document.getElementById("menuicon"),e=!1;t.addEventListener("click",function(){console.log("yo MTV"),e=0==e?(document.getElementById("dropdown").style.visibility="visible",!0):!(document.getElementById("dropdown").style.visibility="hidden")});for(var o=0;o<8;o++){var i;document.getElementById("item-"+o).addEventListener("click",n)}function n(t){console.log(t.target.dataset.indexNumber);var e=Number(t.target.dataset.indexNumber),o=vimeoURLlist[e];window.open(o)}}window.onload=function(){init()};