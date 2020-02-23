import {
    placeQuestions,
    showAnswer,
    getQuestions,
    sinaliza,
    getAnswers,
    validation
} from "./bundle";

const questionElement = document.querySelector("#question");
const buttonNext = document.querySelector("#next");

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
