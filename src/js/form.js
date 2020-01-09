const questionElement = document.querySelector('#question');


// Cria o elemento

const placeQuestions = (data) => {
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
        `
    });
};


const arrSum = arr => arr.reduce((a, b) => a + parseInt(b), 0)

// Pega o valor e joga pro localStorage

const getAnswers = () => {

    let answers = []

    const getAnswers = questionElement.querySelectorAll('.question');

    getAnswers.forEach( answer => {
        answers.push(answer.getAttribute('value'))
    })

    let typeOne = arrSum([answers[8], answers[13], answers[21], answers[24], answers[47], answers[48], answers[52], answers[56], answers[66], answers[89], answers[108], answers[118], answers[123], answers[124], answers[125]])
    let typeTwo = arrSum([answers[9], answers[49], answers[63], answers[68], answers[70], answers[90], answers[91], answers[96], answers[98], answers[100], answers[106], answers[112], answers[115], answers[129], answers[134]])
    let typeThree = arrSum([answers[1], answers[2], answers[10], answers[23], answers[26], answers[40], answers[44], answers[65], answers[73], answers[83], answers[104], answers[105], answers[110], answers[120], answers[131]])
    let typeFour = arrSum([answers[14], answers[18], answers[25], answers[30], answers[32], answers[33], answers[38], answers[39], answers[50], answers[57], answers[58], answers[74], answers[78], answers[86], answers[107]])
    let typeFive = arrSum([answers[4], answers[17], answers[29], answers[35], answers[36], answers[42], answers[71], answers[72], answers[81], answers[84], answers[94], answers[101], answers[128], answers[132], answers[133]])
    let typeSix = arrSum([answers[0], answers[3], answers[5], answers[6], answers[11], answers[15], answers[22], answers[27], answers[60], answers[64], answers[75], answers[77], answers[88], answers[114], answers[116]])
    let typeSeven = arrSum([answers[7], answers[12], answers[16], answers[37], answers[76], answers[79], answers[80], answers[87], answers[92], answers[93], answers[99], answers[109], answers[113], answers[121], answers[126]])
    let typeEight = arrSum([answers[20], answers[31], answers[34], answers[43], answers[46], answers[51], answers[53], answers[59], answers[61], answers[85], answers[97], answers[102], answers[103], answers[122], answers[130]])
    let typeNine = arrSum([answers[19], answers[28], answers[41], answers[45], answers[54], answers[55], answers[62], answers[67], answers[69], answers[82], answers[95], answers[111], answers[117], answers[119], answers[127]])


    const typeAnswers = [typeOne, typeTwo, typeThree, typeFour, typeFive, typeSix, typeSeven, typeEight, typeNine]

    localStorage.setItem('typeAnswers', JSON.stringify(typeAnswers))

    }


// Validação

let countMarked = 0;

const validation = () => {
    const buttonNext = document.querySelector('#next')
    const alternatives = document.querySelectorAll('p')
    
    buttonNext.addEventListener('click', e => {
        e.preventDefault();

        countMarkedAdd = countMarked

        alternatives.forEach(alternative => {
            if(alternative.classList.contains('bg-blue-700')){
                ++countMarkedAdd
                alternative.parentElement.parentElement.setAttribute('value', alternative.innerText)
            }
        });

        if(countMarkedAdd >= 135){
            getAnswers()

            window.location.href = "/test/resultado.html";

        } else {
            buttonNext.parentElement.nextElementSibling.classList.remove('hidden');
            setTimeout(() => {
                buttonNext.parentElement.nextElementSibling.classList.add('hidden');
            }, 3000);
        }
    })
};

// Muda a página das perguntas

// const changeQuestions = (firstQuestion,lastQuestion) => {
//     const buttonNext = document.querySelector('#next')
//     buttonNext.addEventListener('click', e => {
//         e.preventDefault();
        
//             firstQuestion += 15
//             lastQuestion += 15

//     })

// }

// Sinaliza a resposta

const showAnswer = () => {
    const alternatives = document.querySelectorAll('p')

    alternatives.forEach(alternative => {
        alternative.addEventListener('click', e => {
            e.preventDefault();
            alternative.parentElement.querySelectorAll('p').forEach(alternative => {
                alternative.classList.remove('bg-blue-700','shadow-sm')
            })
            alternative.classList.add('bg-blue-700','shadow-sm')
        })
    })
}



// Pega as perguntas do JSON

const getQuestions = (callback) => {

    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange',() => {
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else  if(request.readyState === 4){
            callback('Could not fetch data', undefined);
        }
    });
    request.open('GET', '/js/questions.json');
    request.send();
};

getQuestions((err, data) => {
    if(err){
        console.log(err);
    } else {
        let firstQuestion = 0
        let lastQuestion = 135

        placeQuestions(data.slice(firstQuestion,lastQuestion));
        
        // changeQuestions(firstQuestion, lastQuestion)
        showAnswer();
        validation()
    };
});




