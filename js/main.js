!function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,n){alert("Nazywam się ".concat("Łukasz"," i mam ").concat(34," lata."));var o=document.querySelector(".about__paragraph--pusty, .about__paragraph--js");console.log(o.innerHTML),o.innerHTML='<p style="font-size:25px; color:gray;">Jestem akapitem, który się pojawia!!!</p>',console.log("o nie!"),console.log("Witaj trzydziestolatku!"),console.log("Jesteś starszy ode mnie"),console.log("Masz Toyotę");document.getElementById("funkcja").innerHTML="Środki pozostałe po zakupie laptopa wyniosą 1100.",console.log("Witaj Łukasz, masz 34 lata!"),document.querySelector(".button__drugi").addEventListener("click",function(){document.getElementById("ukryty").innerHTML="..."});var r=document.querySelector(".button__arrow");r.addEventListener("click",function(e){document.querySelector(".wynikMnozenia").innerHTML=30})}]);