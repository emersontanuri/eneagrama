const newTest = document.querySelector('#new-test');
const btnResultado = document.querySelector('#ver-resultado');

// Visibilidade Btn Ver Resultado

// window.onload = () => {
//     if(isNaN(localStorage)){
//         btnResultado.classList.remove('hidden')
//     } else {
//         btnResultado.classList.add('hidden')
//     }
// }


// limpa o localStorage

const cleanLocalStorage = () => {
        newTest.addEventListener('click', e => {
        e.preventDefault();

        localStorage.clear()

        window.location.href = "/dist/dicas.html";
    })
};

cleanLocalStorage()

