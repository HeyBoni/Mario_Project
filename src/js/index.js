/*
OBJETIVO 1 - quando o usuariio clicar no botão de ver trailer, abrir a modal com o video do trailer

OBJETIVO 2 - quando o usuario clicar no X devemos fechar a modal

OBJETIVO 1:
    - passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js
    - passo 2 - dar um jeito de identificar quando o ususaro clicar no botão
    - passo 3 - dar um jeito de pegar o elemento da modal no js
    - passo 4 - abrir a modal na tela

OBJETIVO 2:
    - passo 1 - dar um jeito de pegar o elemento de fechar modal usando o js
    - passo 2 - dar um jeito de identificar quando o usuario clicar no X
    - passo 3 - fechar a modal 
*/
const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const fecharTrailer = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;

botaoTrailer.addEventListener("click", () => {
    modal.classList.add("aberto");
    video.setAttribute("src", linkDoVideo);
});

fecharTrailer.addEventListener("click", () => {
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});