!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n,r,o,l=document.querySelector("#question"),i=function(e){return e.reduce((function(e,t){return e+parseInt(t)}),0)},u=0;n=function(e,t){e?console.log(e):(!function(e){e.forEach((function(e,t){l.innerHTML+='\n        <div id="Q-'.concat(t,'" class="question my-2 py-3 content-center md:flex" value="">\n            <label class="text-blue-700 text-xs text-justify font-medium italic md:order-2 md:w-4/6 md:inline">').concat(e,'</label>\n            <div class="pt-3 flex justify-center md:order-1 md:w-2/6 md:inline">\n                <p class="bg-gray-500 px-3 mx-1 text-white font-semibold text-xs rounded inline cursor-pointer hover:bg-blue-700 hover:shadow-sm" value="1">1</p>\n                <p class="bg-gray-500 px-3 mx-1 text-white font-semibold text-xs rounded inline cursor-pointer hover:bg-blue-700 hover:shadow-sm" value="2">2</p>\n                <p class="bg-gray-500 px-3 mx-1 text-white font-semibold text-xs rounded inline cursor-pointer hover:bg-blue-700 hover:shadow-sm" value="3">3</p>\n                <p class="bg-gray-500 px-3 mx-1 text-white font-semibold text-xs rounded inline cursor-pointer hover:bg-blue-700 hover:shadow-sm" value="4">4</p>\n                <p class="bg-gray-500 px-3 mx-1 text-white font-semibold text-xs rounded inline cursor-pointer hover:bg-blue-700 hover:shadow-sm" value="5">5</p>\n            </div>\n        </div>\n        <hr class="border-gray-500 my-3">\n        ')}))}(t.slice(0,135)),document.querySelectorAll("p").forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault(),e.parentElement.querySelectorAll("p").forEach((function(e){e.classList.remove("bg-blue-600","shadow-sm")})),e.classList.add("bg-blue-600","shadow-sm"),e.parentElement.parentElement.setAttribute("value","".concat(e.innerText))}))})))},(r=new XMLHttpRequest).addEventListener("readystatechange",(function(){if(4===r.readyState&&200===r.status){var e=JSON.parse(r.responseText);n(void 0,e)}else 4===r.readyState&&n("Could not fetch data",void 0)})),r.open("GET","/js/questions.json"),r.send(),(o=document.querySelector("#next")).addEventListener("click",(function(e){e.preventDefault(),document.querySelectorAll("p").forEach((function(e){e.classList.contains("bg-blue-600")&&(u+=1,e.parentElement.parentElement.setAttribute("value",e.innerText))})),u>=135?(!function(){var e=[],t=l.querySelectorAll(".question");t.forEach((function(t){e.push(t.getAttribute("value"))}));var n=[i([e[8],e[13],e[21],e[24],e[47],e[48],e[52],e[56],e[66],e[89],e[108],e[118],e[123],e[124],e[125]]),i([e[9],e[49],e[63],e[68],e[70],e[90],e[91],e[96],e[98],e[100],e[106],e[112],e[115],e[129],e[134]]),i([e[1],e[2],e[10],e[23],e[26],e[40],e[44],e[65],e[73],e[83],e[104],e[105],e[110],e[120],e[131]]),i([e[14],e[18],e[25],e[30],e[32],e[33],e[38],e[39],e[50],e[57],e[58],e[74],e[78],e[86],e[107]]),i([e[4],e[17],e[29],e[35],e[36],e[42],e[71],e[72],e[81],e[84],e[94],e[101],e[128],e[132],e[133]]),i([e[0],e[3],e[5],e[6],e[11],e[15],e[22],e[27],e[60],e[64],e[75],e[77],e[88],e[114],e[116]]),i([e[7],e[12],e[16],e[37],e[76],e[79],e[80],e[87],e[92],e[93],e[99],e[109],e[113],e[121],e[126]]),i([e[20],e[31],e[34],e[43],e[46],e[51],e[53],e[59],e[61],e[85],e[97],e[102],e[103],e[122],e[130]]),i([e[19],e[28],e[41],e[45],e[54],e[55],e[62],e[67],e[69],e[82],e[95],e[111],e[117],e[119],e[127]])];localStorage.setItem("typeAnswers",JSON.stringify(n))}(),window.location.href="/test/resultado.html"):(Array.from(document.querySelectorAll(".question")).forEach((function(e){e.getAttribute("value")||e.querySelectorAll("label").forEach((function(e){e.classList.remove("text-blue-700"),e.classList.add("text-red-700")}))})),o.parentElement.nextElementSibling.classList.remove("hidden"),setTimeout((function(){o.parentElement.nextElementSibling.classList.add("hidden")}),3e3))}))}]);