!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}({0:function(e,t,n){"use strict";n.d(t,"h",(function(){return r})),n.d(t,"g",(function(){return d})),n.d(t,"f",(function(){return o})),n.d(t,"e",(function(){return s})),n.d(t,"i",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"j",(function(){return a})),n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m}));var r=function(e,t,n){if(null===t)return!1;t.addEventListener("click",(function(t){t.preventDefault(),e.classList.toggle("hidden")})),n.addEventListener("click",(function(t){t.preventDefault(),e.classList.add("hidden")}))},o=function(e,t){e.forEach((function(e,n){t.innerHTML+='\n        <div id="Q-'.concat(n,'" class="question my-2 py-3 content-center md:flex" value="">\n            <label class="text-blue-700 text-xs text-justify font-medium italic md:order-2 md:w-4/6 md:inline">').concat(e,'</label>\n            <div class="pt-3 flex justify-center md:order-1 md:w-2/6 md:inline">\n                <p class="bg-gray-500 px-3 mx-1 text-white font-semibold text-xs rounded inline cursor-pointer hover:bg-blue-700 hover:shadow-sm" value="1">1</p>\n                <p class="bg-gray-500 px-3 mx-1 text-white font-semibold text-xs rounded inline cursor-pointer hover:bg-blue-700 hover:shadow-sm" value="2">2</p>\n                <p class="bg-gray-500 px-3 mx-1 text-white font-semibold text-xs rounded inline cursor-pointer hover:bg-blue-700 hover:shadow-sm" value="3">3</p>\n                <p class="bg-gray-500 px-3 mx-1 text-white font-semibold text-xs rounded inline cursor-pointer hover:bg-blue-700 hover:shadow-sm" value="4">4</p>\n                <p class="bg-gray-500 px-3 mx-1 text-white font-semibold text-xs rounded inline cursor-pointer hover:bg-blue-700 hover:shadow-sm" value="5">5</p>\n            </div>\n        </div>\n        <hr class="border-gray-500 my-3">\n        ')}))},u=function(e){return e.reduce((function(e,t){return e+parseInt(t)}),0)},i=function(e){var t=[];e.forEach((function(e){t.push(e.getAttribute("value"))}));var n=[u([t[8],t[13],t[21],t[24],t[47],t[48],t[52],t[56],t[66],t[89],t[108],t[118],t[123],t[124],t[125]]),u([t[9],t[49],t[63],t[68],t[70],t[90],t[91],t[96],t[98],t[100],t[106],t[112],t[115],t[129],t[134]]),u([t[1],t[2],t[10],t[23],t[26],t[40],t[44],t[65],t[73],t[83],t[104],t[105],t[110],t[120],t[131]]),u([t[14],t[18],t[25],t[30],t[32],t[33],t[38],t[39],t[50],t[57],t[58],t[74],t[78],t[86],t[107]]),u([t[4],t[17],t[29],t[35],t[36],t[42],t[71],t[72],t[81],t[84],t[94],t[101],t[128],t[132],t[133]]),u([t[0],t[3],t[5],t[6],t[11],t[15],t[22],t[27],t[60],t[64],t[75],t[77],t[88],t[114],t[116]]),u([t[7],t[12],t[16],t[37],t[76],t[79],t[80],t[87],t[92],t[93],t[99],t[109],t[113],t[121],t[126]]),u([t[20],t[31],t[34],t[43],t[46],t[51],t[53],t[59],t[61],t[85],t[97],t[102],t[103],t[122],t[130]]),u([t[19],t[28],t[41],t[45],t[54],t[55],t[62],t[67],t[69],t[82],t[95],t[111],t[117],t[119],t[127]])];localStorage.setItem("typeAnswers",JSON.stringify(n))},c=function(e,t){e.forEach((function(e){e.getAttribute("value")||e.querySelectorAll("label").forEach((function(e){e.classList.remove("text-blue-700"),e.classList.add("text-red-700")}))})),t.parentElement.nextElementSibling.classList.remove("hidden"),setTimeout((function(){t.parentElement.nextElementSibling.classList.add("hidden")}),3e3)},a=function(e){var t=0;return e.forEach((function(e){e.classList.contains("bg-blue-600")&&(t+=1,e.parentElement.parentElement.setAttribute("value",e.innerText))})),t},d=function(e){e.forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault(),e.parentElement.querySelectorAll("p").forEach((function(e){e.classList.remove("bg-blue-600","shadow-sm")})),e.classList.add("bg-blue-600","shadow-sm"),e.parentElement.parentElement.setAttribute("value","".concat(e.innerText))}))}))},s=function(e){var t=new XMLHttpRequest;t.addEventListener("readystatechange",(function(){if(4===t.readyState&&200===t.status){var n=JSON.parse(t.responseText);e(void 0,n)}else 4===t.readyState&&e("Could not fetch data",void 0)})),t.open("GET","/js/questions.json"),t.send()},l=function(e){return new Promise((function(t,n){var r=new XMLHttpRequest;r.addEventListener("readystatechange",(function(){if(4===r.readyState&&200===r.status){var e=JSON.parse(r.responseText);t(e)}else 4===r.readyState&&n("Could not fetch data")})),r.open("GET",e),r.send()}))},f=function(e,t,n,r,o,u,i,c,a,d,s,l,f,m,p,x,v,b,y,h){console.log(e),t.innerText=e.nome,n.innerText=e.tipo,r.setAttribute("src",e.musica),o.setAttribute("src",e.musica),u.innerText=e.nome,i.innerText=e.tipo,c.innerText=e.triade,a.innerText=e.pecado_raiz,d.innerText=e.virtude,s.innerText=e.descricao,l.innerText=e.atencao,f.innerText=e.preocupacao,m.innerText=e.dificuldade_si,p.innerText=e.dificuldade_outros,x.setAttribute("src","/img/".concat(e.img)),v.innerText=e.bencao,b.innerText=e.estrategia,y.innerText=e.desenvolver,h.innerText=e.ajuda},m=function(e,t,n){n.innerText=e.indexOf(function(e,t){var n=[e[0===e.indexOf(t)?8:e.indexOf(t)-1],e[8===e.indexOf(t)?0:e.indexOf(t)+1]];return Math.max.apply(Math,n)}(e,t))+1}},8:function(e,t,n){"use strict";n.r(t);var r=n(0),o=document.querySelector("#type-number-1"),u=document.querySelector("#type-name-1"),i=document.querySelector("#video-full"),c=document.querySelector("#video-sm"),a=document.querySelector("#type-number-2"),d=document.querySelector("#type-name-2"),s=document.querySelector("#triade"),l=document.querySelector("#pecado"),f=document.querySelector("#virtude"),m=document.querySelector("#text-1"),p=document.querySelector("#text-2"),x=document.querySelector("#text-3"),v=document.querySelector("#text-4"),b=document.querySelector("#img-enea"),y=document.querySelector("#text-5"),h=document.querySelector("#text-6"),g=document.querySelector("#text-7"),S=document.querySelector("#text-8"),q=document.querySelector("#text-9"),T=document.querySelector("#nav-btn"),E=document.querySelector("#navbar"),w=document.querySelector("#close-nav");Object(r.h)(E,T,w);var j=function(){var e={};window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,(function(t,n,r){e[n]=r}));return e}().tipo,O=0;Object(r.d)("js/Typesdata.json").then((function(e){O=e[j-1],Object(r.a)(O,u,o,i,c,d,a,s,l,f,m,p,x,v,y,b,h,g,S,q)})).then((function(e){console.log("promise rejected: ",e)}))}});