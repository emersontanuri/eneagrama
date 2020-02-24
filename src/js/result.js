import { showNav, changeGeneralUI, changeTypeUI, getData } from "./bundle";

var _ = require("lodash");

// Pega os elementos

const numberOne = document.querySelector("#type-number-1");
const nameOne = document.querySelector("#type-name-1");

const videoFull = document.querySelector("#video-full");
const videoSm = document.querySelector("#video-sm");

const empateMsg = document.querySelector("#empate");
const table = document.querySelector("#types-table");

const numberTwo = document.querySelector("#type-number-2");
const nameTwo = document.querySelector("#type-name-2");
const wing = document.querySelector("#asa");

const triade = document.querySelector("#triade");
const pecado = document.querySelector("#pecado");
const virtude = document.querySelector("#virtude");

const textOne = document.querySelector("#text-1");
const textTwo = document.querySelector("#text-2");
const textThree = document.querySelector("#text-3");
const textFour = document.querySelector("#text-4");

const imgEnea = document.querySelector("#img-enea");

const textFive = document.querySelector("#text-5");
const textSix = document.querySelector("#text-6");
const textSeven = document.querySelector("#text-7");
const textEight = document.querySelector("#text-8");
const textNine = document.querySelector("#text-9");

// Funcionalidade no Menu do Navbar

const navbarButton = document.querySelector("#nav-btn");
const navbar = document.querySelector("#navbar");
const closeNav = document.querySelector("#close-nav");

showNav(navbar, navbarButton, closeNav);

// Pega os dados do LocalStorage

const typeAnswers = JSON.parse(localStorage.getItem("typeAnswers"));

// Vê qual é o tipo da pessoa

const personType = Math.max(...typeAnswers);

// Checa se houve empate no resultado

if (typeAnswers.length - 1 !== _.difference(typeAnswers, [personType]).length) {
    empateMsg.classList.remove("hidden");
}

// Pega os dados do JSON

let typeInfos = 0;
let typeResult = 0;

getData("/js/Typesdata.json")
    .then(data => {
        typeInfos = data[typeAnswers.indexOf(personType)];

        // Chama as funções que alteram os dados no DOM
        changeGeneralUI(
            typeInfos,
            nameOne,
            numberOne,
            videoFull,
            videoSm,
            nameTwo,
            numberTwo,
            triade,
            pecado,
            virtude,
            textOne,
            textTwo,
            textThree,
            textFour,
            textFive,
            imgEnea,
            textSix,
            textSeven,
            textEight,
            textNine
        );
        changeTypeUI(typeAnswers, personType, wing);
        table.querySelectorAll("h5").forEach(item => {
            item.innerText = typeAnswers[typeResult];

            typeResult++;
        });
    })
    .then(err => {
        console.log("promise rejected: ", err);
    });

// Imprimir Resultado
const btnPrint = document.querySelector("#print");

btnPrint.addEventListener("click", e => {
    e.preventDefault();
    print();
});
