import { showNav, cleanLocalStorage } from "./bundle";

const newTest = document.querySelector("#new-test");
const navbarButton = document.querySelector("#nav-btn");
const navbar = document.querySelector("#navbar");
const closeNav = document.querySelector("#close-nav");
const btnResultado = document.querySelector("#ver-resultado");

// Visibilidade Btn Ver Resultado

const verResultado = () => {
    if (localStorage.length !== 0) {
        btnResultado.addEventListener("click", e => {
            e.preventDefault();
            window.location.href = "/test/resultado.html";
        });
    } else {
        btnResultado.classList.add("hidden");
    }
};

verResultado();

// Limpar Cache para fazer novo teste

cleanLocalStorage(newTest);

// Funcionalidade no Menu do Navbar

showNav(navbar, navbarButton, closeNav);
