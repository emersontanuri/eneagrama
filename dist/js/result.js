!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}({2:function(e,t){var n,r,o=document.querySelector("#type-number-1"),u=document.querySelector("#type-name-1"),c=document.querySelector("#video"),i=document.querySelector("#types-table"),a=document.querySelector("#type-number-2"),d=document.querySelector("#type-name-2"),l=document.querySelector("#asa"),f=document.querySelector("#triade"),y=document.querySelector("#pecado"),s=document.querySelector("#virtude"),m=document.querySelector("#text-1"),p=document.querySelector("#text-2"),x=document.querySelector("#text-3"),S=document.querySelector("#text-4"),b=document.querySelector("#img-enea"),T=document.querySelector("#text-5"),q=document.querySelector("#text-6"),v=document.querySelector("#text-7"),O=document.querySelector("#text-8"),g=document.querySelector("#text-9"),h=JSON.parse(localStorage.getItem("typeAnswers")),j=Math.max.apply(Math,function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(n=h)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()),A=-1===h.indexOf(j)?8:h.indexOf(j)-1,M=9===h.indexOf(j)?0:h.indexOf(j)+1,_=[h[A],h[M]],w=Math.max.apply(Math,_),P=0,E=0;i.querySelectorAll("h5").forEach((function(e){e.innerText=h[E],E++}));(r="/js/Typesdata.json",new Promise((function(e,t){var n=new XMLHttpRequest;n.addEventListener("readystatechange",(function(){if(4===n.readyState&&200===n.status){var r=JSON.parse(n.responseText);e(r)}else 4===n.readyState&&t("Could not fetch data")})),n.open("GET",r),n.send()}))).then((function(e){P=e[h.indexOf(j)],function(e,t){u.innerText=t.nome,o.innerText=e.indexOf(j)+1,c.setAttribute("src",t.musica),d.innerText=t.nome,a.innerText=e.indexOf(j)+1,l.innerText=e.indexOf(w)+1,f.innerText=t.triade,y.innerText=t.pecado_raiz,s.innerText=t.virtude,m.innerText=t.descricao,p.innerText=t.atencao,x.innerText=t.preocupacao,S.innerText=t.dificuldade_si,T.innerText=t.dificuldade_outros,b.setAttribute("src","/img/".concat(t.img)),q.innerText=t.bencao,v.innerText=t.estrategia,O.innerText=t.desenvolver,g.innerText=t.ajuda}(h,P)})).then((function(e){console.log("promise rejected: ",e)})),document.querySelector("#print").addEventListener("click",(function(e){e.preventDefault(),print()}))}});