import {
    showNav,
    placeQuestions,
    showAnswer,
    getQuestions,
    sinaliza,
    getAnswers,
    validation
} from "./bundle";

// Se já houver um resultado, direcionar para a página resultado

const verResultado = () => {
    if (localStorage.length !== 0) {
        window.location.href = "/test/resultado.html";
    }
};

verResultado();

// Funcionalidade no Menu do Navbar

const navbarButton = document.querySelector("#nav-btn");
const navbar = document.querySelector("#navbar");
const closeNav = document.querySelector("#close-nav");

showNav(navbar, navbarButton, closeNav);

// Pega e mostra as alternativas

const questionElement = document.querySelector("#question");

getQuestions((err, data) => {
    if (err) {
        console.log(err);
    } else {
        let firstQuestion = 0;
        let lastQuestion = 135;

        placeQuestions(
            data.slice(firstQuestion, lastQuestion),
            questionElement
        );
        const alternatives = document.querySelectorAll("p");

        showAnswer(alternatives);
    }
});

// Botão para ver o resultado

const buttonNext = document.querySelector("#next");

buttonNext.addEventListener("click", e => {
    e.preventDefault();
    let countMarked = 0;
    const perguntas = Array.from(document.querySelectorAll(".question"));
    const alternatives = document.querySelectorAll("p");

    countMarked = validation(alternatives);

    if (countMarked >= 135) {
        const answersData = questionElement.querySelectorAll(".question");

        getAnswers(answersData);

        window.location.href = "/test/resultado.html";
    } else {
        sinaliza(perguntas, buttonNext);
    }
});
