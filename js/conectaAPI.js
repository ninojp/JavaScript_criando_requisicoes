'use strict';
async function listarVideosApi(){
    const conexao = await fetch("http://localhost:3000/videos");
    // console.log(conexao);
    const conexaoConvertida = await conexao.json();
    // console.log(conexaoConvertida);
    return conexaoConvertida;
}
//===================================================================
async function criaVideo(titulo, descricao, url, imagem){
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem 
        })
    });
    if(!conexao.ok){
        throw new Error('Não foi possível enviar o video!');
    }
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
};
//=================================================================================
async function buscaVideo(termoBuscado){
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoBuscado}`);
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}
//=================================================================================
export const conectaAPI = { listarVideosApi, criaVideo, buscaVideo };
// listarVideos();
// export default listarVideosApi;
// window.conectaAPI = { listarVideos };