// Pega os elementos

    const numberOne = document.querySelector('#type-number-1');
    const nameOne = document.querySelector('#type-name-1');

    const video = document.querySelector('#video');

    const numberTwo = document.querySelector('#type-number-2');
    const nameTwo = document.querySelector('#type-name-2');

    const triade = document.querySelector('#triade');
    const pecado = document.querySelector('#pecado');
    const virtude = document.querySelector('#virtude');

    const textOne = document.querySelector('#text-1');
    const textTwo = document.querySelector('#text-2');
    const textThree = document.querySelector('#text-3');
    const textFour = document.querySelector('#text-4');

    const imgEnea = document.querySelector('#img-enea');

    const textFive = document.querySelector('#text-5');
    const textSix = document.querySelector('#text-6');
    const textSeven = document.querySelector('#text-7');
    const textEight = document.querySelector('#text-8');
    const textNine = document.querySelector('#text-9');


// pega os parâmetros da URL

getUrlVars = () => {
    let vars = {};
    const parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,tipo,value) {
        vars[tipo] = value;
    });

    return vars;
}
// Vê qual é o tipo da pessoa

const personType = getUrlVars().tipo


let typeInfos = 0;


// Altera os dados dos elementos

const changeUI = (typeInfos) => {
    nameOne.innerText = typeInfos.nome
    numberOne.innerText = typeInfos.tipo;

    video.setAttribute('src', typeInfos.musica)

    nameTwo.innerText = typeInfos.nome
    numberTwo.innerText = typeInfos.tipo;
    
    triade.innerText = typeInfos.triade
    pecado.innerText = typeInfos.pecado_raiz
    virtude.innerText = typeInfos.virtude

    textOne.innerText = typeInfos.descricao
    textTwo.innerText = typeInfos.atencao
    textThree.innerText = typeInfos.preocupacao
    textFour.innerText = typeInfos.dificuldade_si
    textFive.innerText = typeInfos.dificuldade_outros
    
    imgEnea.setAttribute('src', `/img/${typeInfos.img}`)
    
    textSix.innerText = typeInfos.bencao
    textSeven.innerText = typeInfos.estrategia
    textEight.innerText = typeInfos.desenvolver
    textNine.innerText = typeInfos.ajuda
}


// Pega os dados do JSON

const getData = (resource) => {
    return new Promise((resolve, reject) => {

        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange',() => {
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText);
                resolve(data)
            } else  if(request.readyState === 4){
                reject('Could not fetch data');
            }
        });
        request.open('GET', resource);
        request.send();
    })
};


getData('js/Typesdata.json').then((data) => {
    typeInfos = data[personType-1]
    changeUI(typeInfos)
}).then((err) => {
    console.log('promise rejected: ', err)
})
