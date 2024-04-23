const body =document.querySelector("body")
const div = document.querySelector("div")
const strong =document.querySelector("strong")
const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const link = document.querySelector('a')

const botaoLight = document.getElementById("lightMode")
const  botaoDark = document.getElementById("darkMode")
const botoesLinks = document.querySelector("li")

botaoLight.addEventListener('click', modoClaro)
botaoDark.addEventListener('click', modoEscuro)

function modoClaro() {
    body.classList.add("light")
    div.classList.add("light")
    h1.classList.add("light")
    strong.classList.add("light")
    p.classList.add("light")
    link.classList.add("light")
    botoesLinks.classList.add("light")
}

function modoEscuro(){
    body.classList.remove("light")
    div.classList.remove("light")
    h1.classList.remove("light")
    strong.classList.remove("light")
    p.classList.remove("light")
    link.classList.remove("light")
    strong.classList.remove("light")
    botoesLinks.classList.remove("light")
}