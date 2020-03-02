// Interactions

// Funcionalidade de menu no Navbar

const showNav = (navbar, navbarButton, closeNav) => {
    if (navbarButton === null) {
        return false;
    } else {
        navbarButton.addEventListener("click", e => {
            e.preventDefault();
            navbar.classList.toggle("hidden");
        });

        closeNav.addEventListener("click", e => {
            e.preventDefault();
            navbar.classList.add("hidden");
        });
    }
};

// form functions

// Cria o elemento

const placeQuestions = (data, questionElement) => {
    data.forEach((question, index) => {
        questionElement.innerHTML += `
        <div id="Q-${index}" class="question my-2 py-3 content-center md:flex" value="">
            <label class="text-blue-700 text-xs text-justify font-medium italic md:order-2 md:w-4/6 md:inline">${question}</label>
            <div class="pt-3 flex justify-center md:order-1 md:w-2/6 md:inline">
                <p class="bg-gray-500 px-3 mx-1 text-white font-semibold text-xs rounded inline cursor-pointer hover:bg-blue-700 hover:shadow-sm" value="1">1</p>
                <p class="bg-gray-500 px-3 mx-1 text-white font-semibold text-xs rounded inline cursor-pointer hover:bg-blue-700 hover:shadow-sm" value="2">2</p>
                <p class="bg-gray-500 px-3 mx-1 text-white font-semibold text-xs rounded inline cursor-pointer hover:bg-blue-700 hover:shadow-sm" value="3">3</p>
                <p class="bg-gray-500 px-3 mx-1 text-white font-semibold text-xs rounded inline cursor-pointer hover:bg-blue-700 hover:shadow-sm" value="4">4</p>
                <p class="bg-gray-500 px-3 mx-1 text-white font-semibold text-xs rounded inline cursor-pointer hover:bg-blue-700 hover:shadow-sm" value="5">5</p>
            </div>
        </div>
        <hr class="border-gray-500 my-3">
        `;
    });
};

// Só precisa inserir os dados com um querySelectorAll e ele processa e manda os dados para o LocalStorage

const arrSum = arr => arr.reduce((a, b) => a + parseInt(b), 0);

const getAnswers = answersData => {
    let answers = [];

    answersData.forEach(answer => {
        answers.push(answer.getAttribute("value"));
    });

    let typeOne = arrSum([
        answers[8],
        answers[13],
        answers[21],
        answers[24],
        answers[47],
        answers[48],
        answers[52],
        answers[56],
        answers[66],
        answers[89],
        answers[108],
        answers[118],
        answers[123],
        answers[124],
        answers[125]
    ]);
    let typeTwo = arrSum([
        answers[9],
        answers[49],
        answers[63],
        answers[68],
        answers[70],
        answers[90],
        answers[91],
        answers[96],
        answers[98],
        answers[100],
        answers[106],
        answers[112],
        answers[115],
        answers[129],
        answers[134]
    ]);
    let typeThree = arrSum([
        answers[1],
        answers[2],
        answers[10],
        answers[23],
        answers[26],
        answers[40],
        answers[44],
        answers[65],
        answers[73],
        answers[83],
        answers[104],
        answers[105],
        answers[110],
        answers[120],
        answers[131]
    ]);
    let typeFour = arrSum([
        answers[14],
        answers[18],
        answers[25],
        answers[30],
        answers[32],
        answers[33],
        answers[38],
        answers[39],
        answers[50],
        answers[57],
        answers[58],
        answers[74],
        answers[78],
        answers[86],
        answers[107]
    ]);
    let typeFive = arrSum([
        answers[4],
        answers[17],
        answers[29],
        answers[35],
        answers[36],
        answers[42],
        answers[71],
        answers[72],
        answers[81],
        answers[84],
        answers[94],
        answers[101],
        answers[128],
        answers[132],
        answers[133]
    ]);
    let typeSix = arrSum([
        answers[0],
        answers[3],
        answers[5],
        answers[6],
        answers[11],
        answers[15],
        answers[22],
        answers[27],
        answers[60],
        answers[64],
        answers[75],
        answers[77],
        answers[88],
        answers[114],
        answers[116]
    ]);
    let typeSeven = arrSum([
        answers[7],
        answers[12],
        answers[16],
        answers[37],
        answers[76],
        answers[79],
        answers[80],
        answers[87],
        answers[92],
        answers[93],
        answers[99],
        answers[109],
        answers[113],
        answers[121],
        answers[126]
    ]);
    let typeEight = arrSum([
        answers[20],
        answers[31],
        answers[34],
        answers[43],
        answers[46],
        answers[51],
        answers[53],
        answers[59],
        answers[61],
        answers[85],
        answers[97],
        answers[102],
        answers[103],
        answers[122],
        answers[130]
    ]);
    let typeNine = arrSum([
        answers[19],
        answers[28],
        answers[41],
        answers[45],
        answers[54],
        answers[55],
        answers[62],
        answers[67],
        answers[69],
        answers[82],
        answers[95],
        answers[111],
        answers[117],
        answers[119],
        answers[127]
    ]);

    const typeAnswers = [
        typeOne,
        typeTwo,
        typeThree,
        typeFour,
        typeFive,
        typeSix,
        typeSeven,
        typeEight,
        typeNine
    ];

    localStorage.setItem("typeAnswers", JSON.stringify(typeAnswers));
};

// Sinaliza quando há alternativas sem marcar

const sinaliza = (perguntas, buttonNext) => {
    perguntas.forEach(question => {
        if (question.getAttribute("value")) {
        } else {
            question.querySelectorAll("label").forEach(pergunta => {
                pergunta.classList.remove("text-blue-700");
                pergunta.classList.add("text-red-700");
            });
        }
    });
    buttonNext.parentElement.nextElementSibling.classList.remove("hidden");
    setTimeout(() => {
        buttonNext.parentElement.nextElementSibling.classList.add("hidden");
    }, 3000);
};

// Validação das alternativas para saber se todas foram marcadas

const validation = alternatives => {
    let countMarked = 0;
    alternatives.forEach(alternative => {
        if (alternative.classList.contains("bg-blue-600")) {
            countMarked += 1;
            alternative.parentElement.parentElement.setAttribute(
                "value",
                alternative.innerText
            );
        }
    });
    return countMarked;
};

// Mostra a alternativa que foi marcada

const showAnswer = alternatives => {
    alternatives.forEach(alternative => {
        alternative.addEventListener("click", e => {
            e.preventDefault();
            alternative.parentElement
                .querySelectorAll("p")
                .forEach(alternative => {
                    alternative.classList.remove("bg-blue-600", "shadow-sm");
                });

            alternative.classList.add("bg-blue-600", "shadow-sm");
            alternative.parentElement.parentElement.setAttribute(
                "value",
                `${alternative.innerText}`
            );
        });
    });
};

// Pega as perguntas do JSON

const getQuestions = callback => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback("Could not fetch data", undefined);
        }
    });
    request.open("GET", "/js/questions.json");
    request.send();
};

// types e resultados

// Pega os dados do JSON

const getData = resource => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject("Could not fetch data");
            }
        });
        request.open("GET", resource);
        request.send();
    });
};

// Encontra a Asa da pessoa conferindo o anterior e o posterior do Index do tipo definido

const findWing = (typeAnswers, personType) => {
    const wingLeftValidate = () => {
        if (typeAnswers.indexOf(personType) === 0) {
            return 8;
        } else {
            return typeAnswers.indexOf(personType) - 1;
        }
    };

    const wingRightValidate = () => {
        if (typeAnswers.indexOf(personType) === 8) {
            return 0;
        } else {
            return typeAnswers.indexOf(personType) + 1;
        }
    };

    const arrayWing = [
        typeAnswers[wingLeftValidate()],
        typeAnswers[wingRightValidate()]
    ];

    const personWing = Math.max(...arrayWing);

    return personWing;
};

// Altera os dados dos elementos no DOM da página Tipos e Resultados

const changeGeneralUI = (
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
) => {
    console.log(typeInfos);
    nameOne.innerText = typeInfos.nome;
    numberOne.innerText = typeInfos.tipo;

    videoFull.setAttribute("src", typeInfos.musica);
    videoSm.setAttribute("src", typeInfos.musica);

    nameTwo.innerText = typeInfos.nome;
    numberTwo.innerText = typeInfos.tipo;

    triade.innerText = typeInfos.triade;
    pecado.innerText = typeInfos.pecado_raiz;
    virtude.innerText = typeInfos.virtude;

    textOne.innerText = typeInfos.descricao;
    textTwo.innerText = typeInfos.atencao;
    textThree.innerText = typeInfos.preocupacao;
    textFour.innerText = typeInfos.dificuldade_si;
    textFive.innerText = typeInfos.dificuldade_outros;

    imgEnea.setAttribute("src", `/img/${typeInfos.img}`);

    textSix.innerText = typeInfos.bencao;
    textSeven.innerText = typeInfos.estrategia;
    textEight.innerText = typeInfos.desenvolver;
    textNine.innerText = typeInfos.ajuda;
};

// Altera os dados dos elementos no DOM apenas da página Resultados

const changeTypeUI = (typeAnswers, personType, wing) => {
    wing.innerText = typeAnswers.indexOf(findWing(typeAnswers, personType)) + 1;
};

export {
    showNav,
    showAnswer,
    placeQuestions,
    getQuestions,
    sinaliza,
    getAnswers,
    validation,
    getData,
    changeGeneralUI,
    changeTypeUI
};
