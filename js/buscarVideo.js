'use strict';
import {conectaAPI} from './conectaAPI.js';
import constroiCard from './mostrarVideos.js';

async function buscarVideo(evento){
    evento.preventDefault();
    const dadosDePesquisa = document.querySelector('[data-pesquisa]').value;
    const busca = await conectaAPI.buscaVideo(dadosDePesquisa);
    const lista = document.querySelector('[data-lista]');
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    busca.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));
    if(busca.length == 0){
        lista.innerHTML = `<h2 class='mensagem__titulo'>Não existe videos com este termo!</h2>`;
    }
};

const btnDePesquisa = document.querySelector('[data-btn-pesquisa]');
btnDePesquisa.addEventListener('click', evento => buscarVideo(evento));