const newTest = document.querySelector('#new-test');
const navbarButton = document.querySelector('#nav-btn');
const navbar = document.querySelector('#navbar');
const closeNav = document.querySelector('#close-nav');
// const btnResultado = document.querySelector('#ver-resultado');

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
    if(newTest === null){
        return false
    } else {
        newTest.addEventListener('click', e => {

            e.preventDefault();
            
            localStorage.clear()
            
            window.location.href = "/dicas.html";
        })
    }
};



const showNav = () => {


    if(navbarButton === null){
        return false
    } else {
        navbarButton.addEventListener('click', e => {
            e.preventDefault();
            navbar.classList.toggle('hidden')
        });

        closeNav.addEventListener('click', e => {
            e.preventDefault();
            navbar.classList.add('hidden')
        })
    };
}



cleanLocalStorage()
showNav()
