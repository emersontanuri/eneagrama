import { showNav, cleanLocalStorage } from "./bundle";

const newTest = document.querySelector("#new-test");
const navbarButton = document.querySelector("#nav-btn");
const navbar = document.querySelector("#navbar");
const closeNav = document.querySelector("#close-nav");
const btnResultado = document.querySelector("#ver-resultado");
const confirmTest = document.querySelector("#confirm-test");
const confirmYes = document.querySelector("#confirm-yes");
const confirmNo = document.querySelector("#confirm-no");

// Visibilidade Btn Ver Resultado

/* const verResultado = () => {
    if (localStorage.length !== 0) {
        btnResultado.addEventListener("click", e => {
            e.preventDefault();
            window.location.href = "/test/resultado.html";
        });
    } else {
        btnResultado.classList.add("hidden");
    }
};

verResultado(); */

// Limpar Cache para fazer novo teste

const novoTeste = () => {
    if (localStorage.length !== 0) {
        // Visibilidade botão "Ver resultado anterior"

        btnResultado.addEventListener("click", e => {
            e.preventDefault();
            window.location.href = "/test/resultado.html";
        });

        // Limpar LocalStorage se for fazer novo teste

        newTest.addEventListener("click", e => {
            confirmTest.classList.remove("hidden");
            confirmYes.addEventListener("click", e => {
                e.preventDefault();
                localStorage.clear();
                window.location.href = "/dicas.html";
            });
            confirmNo.addEventListener("click", e => {
                e.preventDefault();
                confirmTest.classList.add("hidden");
            });
        });
    } else {
        // Visibilidade botão "Ver resultado anterior"

        btnResultado.classList.add("hidden");

        // Fazer o teste normalmente

        newTest.addEventListener("click", e => {
            e.preventDefault();
            window.location.href = "/dicas.html";
        });
    }
};

novoTeste();

// Funcionalidade no Menu do Navbar

showNav(navbar, navbarButton, closeNav);
