import { showNav, changeGeneralUI, getData } from "./bundle";

// Pega os elementos

const numberOne = document.querySelector("#type-number-1");
const nameOne = document.querySelector("#type-name-1");

const videoFull = document.querySelector("#video-full");
const videoSm = document.querySelector("#video-sm");

const numberTwo = document.querySelector("#type-number-2");
const nameTwo = document.querySelector("#type-name-2");

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

// Pega os parâmetros da URL

const getUrlVars = () => {
    let vars = {};
    const parts = window.location.href.replace(
        /[?&]+([^=&]+)=([^&]*)/gi,
        function(m, tipo, value) {
            vars[tipo] = value;
        }
    );

    return vars;
};
// Vê qual é o tipo escolhido

const personType = getUrlVars().tipo;

// Pega os dados do JSON

let typeInfos = 0;

getData("js/Typesdata.json")
    .then(data => {
        typeInfos = data[personType - 1];

        // Chama a função que altera os dados do DOM
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
    })
    .then(err => {
        console.log("promise rejected: ", err);
    });
