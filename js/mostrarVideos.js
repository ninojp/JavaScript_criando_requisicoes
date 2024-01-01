'use strict';
import {conectaAPI} from "./conectaAPI.js";
// console.log(conectaAPI)
const lista = document.querySelector("[data-lista]");
// console.log(lista)

export default function constroiCard(titulo, descricao, url, imagem){
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `<iframe width="100%" height="72%" src="${url}" title="${titulo}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
        <div class="descricao-video">
        <img src="${imagem}" alt="logo canal alura">
        <h3>${titulo}</h3>
        <p>${descricao}</p>
        </div>`;
    return video;
};

async function listarVideos(){
    try{
    const listaApi = await conectaAPI.listarVideosApi();
    listaApi.forEach(itemList => lista.appendChild(constroiCard(itemList.titulo, itemList.descricao, itemList.url, itemList.imagem)));
    }catch{
        lista.innerHTML = `<h2 class='mensagem__titulo'>Não foi possivel carregar os Videos!</h2>`;
    }
};

listarVideos();